/**
 * The in-page DOM walker.
 *
 * `extractSlidePrimitives` is serialized into the browser by page.evaluate, so
 * it must be entirely self-contained — no imports, no closures over module
 * scope. It reads the rendered 1920x1080 slide and returns a flat, paint-ordered
 * list of primitives that scripts/lib/pptx-emit.mjs turns into PPTX objects.
 *
 * Primitive shapes:
 *   { kind: 'rect',  x, y, w, h, background, radius, ellipse, border, shadow }
 *   { kind: 'text',  x, y, w, h, text, fontFamily, fontSizePx, fontWeight,
 *                    fontStyle, color, align, letterSpacingPx, underline, strike }
 *   { kind: 'image', x, y, w, h, id, transparent }   // id -> a rasterized asset
 */

/**
 * @param {{ rootSelector: string, overrides: {rasterize?: string[], skip?: string[]} }} config
 */
export function extractSlidePrimitives(config) {
  const { rootSelector, overrides } = config;
  const rasterizeSelectors = (overrides && overrides.rasterize) || [];
  const skipSelectors = (overrides && overrides.skip) || [];

  const root = document.querySelector(rootSelector);
  if (!root) throw new Error(`extract: no element matched ${rootSelector}`);

  const rootRect = root.getBoundingClientRect();
  if (Math.abs(rootRect.width - 1920) > 1 || Math.abs(rootRect.height - 1080) > 1) {
    throw new Error(
      `extract: slide root is ${rootRect.width}x${rootRect.height}, expected 1920x1080. ` +
        `The viewport must be exactly 1920x1080 so PresentationFrame's scale is 1.`,
    );
  }

  const originX = rootRect.left;
  const originY = rootRect.top;

  const primitives = [];
  const rasterTargets = []; // { id, transparent } — the orchestrator screenshots these
  let rasterCounter = 0;
  let orderCounter = 0;
  let blockCounter = 0;

  /** Stamp DOM order so the stacking sort below stays stable. */
  const push = (primitive) => {
    primitive.order = orderCounter++;
    primitives.push(primitive);
  };

  // ---------------------------------------------------------------- helpers

  const num = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  const parseAlpha = (color) => {
    const m = /rgba?\([^)]*?,\s*([\d.]+)\s*\)/.exec(color || "");
    if (m) return Number(m[1]);
    return /^rgba?\(/.test(color || "") ? 1 : 0;
  };

  const isVisibleColor = (color) => !!color && color !== "transparent" && parseAlpha(color) > 0;

  /** Split a CSS list on top-level commas (so rgba(...) stays intact). */
  const splitTopLevel = (value) => {
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let i = 0; i < value.length; i++) {
      const c = value[i];
      if (c === "(") depth++;
      else if (c === ")") depth--;
      else if (c === "," && depth === 0) {
        parts.push(value.slice(start, i).trim());
        start = i + 1;
      }
    }
    parts.push(value.slice(start).trim());
    return parts.filter(Boolean);
  };

  /**
   * Computed box-shadow looks like `rgba(0, 0, 0, 0.06) 0px 4px 12px 0px`.
   * Only the first outer layer survives — PowerPoint shapes take one shadow.
   */
  const parseShadow = (value) => {
    if (!value || value === "none") return null;
    for (const layer of splitTopLevel(value)) {
      if (layer.includes("inset")) continue;
      const color = (/^(rgba?\([^)]*\)|#[0-9a-f]+)/i.exec(layer) || [])[0];
      if (!color) continue;
      const lengths = (layer.slice(color.length).match(/-?[\d.]+px/g) || []).map(num);
      if (lengths.length < 2) continue;
      return {
        color,
        offsetX: lengths[0],
        offsetY: lengths[1],
        blur: lengths[2] ?? 0,
      };
    }
    return null;
  };

  const parseRadius = (cs, width, height) => {
    const raw = cs.borderTopLeftRadius || "0px";
    const first = raw.split(" ")[0];
    // A percentage radius >= 50% is a true ellipse; a px radius on a non-square
    // box is a pill, which PowerPoint's roundRect handles. Conflating the two
    // turns pills (the active ProgressTracker segment) into ovals.
    if (first.endsWith("%")) {
      const pct = num(first);
      return { px: (pct / 100) * Math.min(width, height), ellipse: pct >= 50 };
    }
    return { px: num(first), ellipse: false };
  };

  const readBorder = (cs) => {
    const sides = {};
    let anyVisible = false;
    for (const side of ["top", "right", "bottom", "left"]) {
      const cap = side[0].toUpperCase() + side.slice(1);
      const width = num(cs[`border${cap}Width`]);
      const color = cs[`border${cap}Color`];
      const style = cs[`border${cap}Style`];
      const visible = width > 0 && style !== "none" && style !== "hidden" && isVisibleColor(color);
      sides[side] = { width: visible ? width : 0, color };
      if (visible) anyVisible = true;
    }
    if (!anyVisible) return null;

    const ref = sides.top;
    const uniform = ["right", "bottom", "left"].every(
      (s) => sides[s].width === ref.width && sides[s].color === ref.color,
    );
    return { uniform, width: ref.width, color: ref.color, sides };
  };

  /** getBoundingClientRect already bakes in transforms; only non-translations matter. */
  const hasNonTranslateTransform = (cs) => {
    const t = cs.transform;
    if (!t || t === "none") return false;
    const nums = (t.match(/-?[\d.e+]+/g) || []).map(Number);
    if (t.startsWith("matrix3d")) return true;
    if (nums.length < 6) return false;
    const [a, b, c, d] = nums;
    return (
      Math.abs(a - 1) > 0.001 ||
      Math.abs(b) > 0.001 ||
      Math.abs(c) > 0.001 ||
      Math.abs(d - 1) > 0.001
    );
  };

  const matchesAny = (el, selectors) =>
    selectors.some((sel) => {
      try {
        return el.matches(sel);
      } catch {
        return false;
      }
    });

  const toLocal = (rect) => ({
    x: rect.left - originX,
    y: rect.top - originY,
    w: rect.width,
    h: rect.height,
  });

  /**
   * Register an element to be screenshotted, clipped to the slide canvas.
   *
   * The clip matters: puppeteer's elementHandle.screenshot() scrolls a
   * partially-offscreen element into view before capturing, so a SlideShell
   * glow blob hanging off the top-left corner came back holding a picture of
   * the slide's title and cards, which then got pasted back at the blob's
   * coordinates as a ghost copy. Capturing an explicit region never scrolls.
   *
   * Returns null when the element lies entirely outside the canvas.
   */
  const registerRaster = (el, transparent, rect) => {
    const left = Math.max(rect.left, originX);
    const top = Math.max(rect.top, originY);
    const right = Math.min(rect.right, originX + 1920);
    const bottom = Math.min(rect.bottom, originY + 1080);
    if (right - left <= 0 || bottom - top <= 0) return null;

    const id = `r${rasterCounter++}`;
    el.setAttribute("data-pptx-raster", id);
    rasterTargets.push({
      id,
      transparent,
      // Page coordinates for puppeteer's clip.
      clip: {
        x: Math.round(left + window.scrollX),
        y: Math.round(top + window.scrollY),
        width: Math.round(right - left),
        height: Math.round(bottom - top),
      },
    });

    return {
      id,
      local: { x: left - originX, y: top - originY, w: right - left, h: bottom - top },
    };
  };

  // ------------------------------------------------------------ text splitting

  /**
   * Break a text node into one entry per rendered line.
   *
   * This is the load-bearing part of the whole exporter: handing PowerPoint a
   * paragraph lets it re-wrap with its own font metrics and the layout drifts.
   * Emitting one non-wrapping box per browser line box pins every line exactly
   * where Chrome put it.
   */
  const splitTextNodeIntoLines = (node) => {
    const source = node.textContent || "";
    if (!source.trim()) return [];

    const range = document.createRange();
    const lines = [];
    let current = null;

    for (let i = 0; i < source.length; i++) {
      const char = source[i];
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const rects = range.getClientRects();
      if (!rects.length) continue; // collapsed whitespace / soft wrap point

      const r = rects[0];
      if (r.width === 0 && r.height === 0) continue;

      const isSpace = /\s/.test(char);
      const sameLine = current && Math.abs(r.top - current.top) < 1.5;

      if (!sameLine && !isSpace) {
        if (current) lines.push(current);
        current = { raw: "", left: r.left, right: r.right, top: r.top, bottom: r.bottom };
      } else if (!current) {
        // Leading whitespace before any glyph on the first line: keep it in
        // `raw` so a run like " — Lin's ..." can be rejoined to the bold "CCC"
        // that precedes it, but don't let it define the box.
        current = { raw: char, left: Infinity, right: -Infinity, top: r.top, bottom: r.bottom };
        continue;
      }

      current.raw += char;

      // Whitespace stays in `raw` (so adjacent runs rejoin cleanly) but is
      // excluded from the box, which must hug the visible glyphs.
      if (!isSpace) {
        current.left = Math.min(current.left, r.left);
        current.right = Math.max(current.right, r.right);
        current.top = Math.min(current.top, r.top);
        current.bottom = Math.max(current.bottom, r.bottom);
      }
    }
    if (current) lines.push(current);

    return lines
      .map((l) => ({ ...l, text: l.raw.trim() }))
      .filter((l) => l.text.length > 0 && Number.isFinite(l.left));
  };

  // ------------------------------------------------------------ font resolution

  /**
   * Turn a CSS font stack + weight into a concrete font family PowerPoint can
   * actually use.
   *
   * This matters more than it looks. SlideShell sets `system-ui`, which Chrome
   * resolves to Segoe UI on Windows — but PowerPoint has no notion of
   * `system-ui`, so naming it (or guessing "Inter") silently swaps in a
   * different typeface roughly 4.5% wider, throwing off every line in the deck.
   * Resolving here, in the page, means Chrome's own font matching decides, and
   * it stays correct on any platform.
   *
   * PowerPoint also has no weight axis, only a bold flag, so weights other than
   * 400/700 have to name the weight-specific family ("Segoe UI Black"). Those
   * families are probed rather than assumed — Windows ships "Segoe UI Semibold"
   * but no "Segoe UI Medium".
   */
  const GENERIC_FAMILIES = {
    "system-ui": ["Segoe UI", "SF Pro Text", "Helvetica Neue", "Roboto", "Cantarell"],
    "-apple-system": ["SF Pro Text", "Helvetica Neue", "Segoe UI"],
    blinkmacsystemfont: ["SF Pro Text", "Helvetica Neue", "Segoe UI"],
    "sans-serif": ["Arial", "Helvetica"],
    serif: ["Times New Roman", "Georgia"],
    monospace: ["Consolas", "Menlo", "Courier New"],
  };

  // Heavier-first so a missing exact face degrades the way CSS would.
  const WEIGHT_CANDIDATES = {
    100: ["Thin", "ExtraLight", "Light"],
    200: ["ExtraLight", "Thin", "Light"],
    300: ["Light", "ExtraLight"],
    500: ["Medium"],
    600: ["SemiBold", "Semibold", "DemiBold"],
    800: ["ExtraBold", "Black", "Heavy"],
    900: ["Black", "Heavy", "ExtraBold"],
  };

  const availabilityCache = new Map();
  let probeEl = null;

  const isFontAvailable = (family) => {
    if (availabilityCache.has(family)) return availabilityCache.get(family);

    if (!probeEl) {
      probeEl = document.createElement("span");
      probeEl.textContent = "mmmmmmmmmmlliWWWWWWi&%#@";
      probeEl.style.cssText =
        "position:absolute;left:-9999px;top:-9999px;font-size:96px;white-space:pre;";
      document.body.appendChild(probeEl);
    }

    // A family is present if it shifts the width away from every fallback.
    let available = false;
    for (const fallback of ["monospace", "serif", "sans-serif"]) {
      probeEl.style.fontFamily = fallback;
      const base = probeEl.getBoundingClientRect().width;
      probeEl.style.fontFamily = `"${family}", ${fallback}`;
      if (Math.abs(probeEl.getBoundingClientRect().width - base) > 0.5) {
        available = true;
        break;
      }
    }

    availabilityCache.set(family, available);
    return available;
  };

  const familyCache = new Map();

  const resolveFontFace = (stack, weight) => {
    const key = `${stack}|${weight}`;
    if (familyCache.has(key)) return familyCache.get(key);

    // First concrete, installed family in the stack — same order Chrome used.
    let base = null;
    for (const raw of (stack || "").split(",")) {
      const name = raw.trim().replace(/^["']|["']$/g, "");
      if (!name) continue;
      const candidates = GENERIC_FAMILIES[name.toLowerCase()] ?? [name];
      const hit = candidates.find(isFontAvailable);
      if (hit) {
        base = hit;
        break;
      }
    }
    if (!base) base = "Arial";

    const w = Math.round((weight || 400) / 100) * 100;
    let result = { fontFace: base, fontFaceBase: base, bold: w >= 600 };

    for (const suffix of WEIGHT_CANDIDATES[w] ?? []) {
      const named = `${base} ${suffix}`;
      if (isFontAvailable(named)) {
        // The face carries the weight; a bold flag on top makes PowerPoint
        // synthesize a second, fake bold.
        result = { fontFace: named, fontFaceBase: base, bold: false };
        break;
      }
    }

    familyCache.set(key, result);
    return result;
  };

  /** CSS text-transform is a render-time effect; textContent gives the source. */
  const applyTextTransform = (text, transform) => {
    if (transform === "uppercase") return text.toUpperCase();
    if (transform === "lowercase") return text.toLowerCase();
    if (transform === "capitalize") {
      return text.replace(/(^|\s)(\S)/g, (_, lead, ch) => lead + ch.toUpperCase());
    }
    return text;
  };

  const emitTextNode = (node, parentEl, cs, inheritedAlpha, zPath, blockId) => {
    const decoration = cs.textDecorationLine || cs.textDecoration || "";
    const letterSpacing = cs.letterSpacing === "normal" ? 0 : num(cs.letterSpacing);

    for (const line of splitTextNodeIntoLines(node)) {
      const rect = {
        left: line.left,
        top: line.top,
        width: line.right - line.left,
        height: line.bottom - line.top,
      };
      if (rect.width <= 0 || rect.height <= 0) continue;

      push({
        kind: "text",
        zPath,
        blockId,
        x: rect.left - originX,
        y: rect.top - originY,
        w: rect.width,
        h: rect.height,
        text: applyTextTransform(line.text, cs.textTransform),
        raw: applyTextTransform(line.raw, cs.textTransform),
        fontFamily: cs.fontFamily,
        ...resolveFontFace(cs.fontFamily, num(cs.fontWeight) || 400),
        fontSizePx: num(cs.fontSize),
        fontWeight: num(cs.fontWeight) || 400,
        fontStyle: cs.fontStyle,
        color: applyAlpha(cs.color, inheritedAlpha),
        align: cs.textAlign,
        letterSpacingPx: letterSpacing,
        underline: decoration.includes("underline"),
        strike: decoration.includes("line-through"),
      });
    }
  };

  /** Fold an ancestor's group opacity into a color, since PPTX has no groups. */
  function applyAlpha(color, alpha) {
    if (alpha >= 1) return color;
    const m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,/\s]+([\d.]+))?\s*\)/i.exec(
      color || "",
    );
    if (!m) return color;
    const existing = m[4] === undefined ? 1 : Number(m[4]);
    return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${existing * alpha})`;
  }

  // ------------------------------------------------------------------- walk

  const visit = (el, inheritedAlpha, parentZPath, parentBlockId) => {
    if (el.hasAttribute("data-export-hide")) return;
    if (matchesAny(el, skipSelectors)) return;

    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") return;

    const alpha = inheritedAlpha * (parseFloat(cs.opacity) || 0);
    if (alpha <= 0.01) return;

    const rect = el.getBoundingClientRect();
    const hasArea = rect.width > 0 && rect.height > 0;

    // A zero-area box can still lay out visible text. Equation's <Sub>/<Sup>
    // set `line-height: 0`, which collapses the span's own bounding rect to
    // zero height while the text node inside it still renders at full size —
    // that is how the subscript in "w0" went missing. So don't draw a
    // zero-area element, but do keep walking into it.
    //
    // Don't try to narrow this to inline boxes: a <Sub> inside a display-style
    // <Equation> is a flex item, and flex blockifies its children, so the very
    // case this exists for computes as `display: block`. Clipping is the real
    // signal — if the element hides its overflow, the children truly aren't
    // visible and the subtree should stay dropped.
    if (!hasArea && cs.overflow !== "visible") return;

    // Fully outside the slide canvas (decorative overflow) — nothing to export.
    if (
      hasArea &&
      (rect.right <= originX ||
        rect.bottom <= originY ||
        rect.left >= originX + 1920 ||
        rect.top >= originY + 1080)
    ) {
      return;
    }

    // PPTX has no z-index — shapes paint in document order — so carry the CSS
    // stacking path along and sort by it before emitting. Without this a
    // slide's full-bleed background paints over positioned overlays such as
    // the ProgressTracker (z-index 100).
    const zPath =
      cs.position !== "static" && cs.zIndex !== "auto"
        ? [...parentZPath, num(cs.zIndex)]
        : parentZPath;

    // Text runs may only be rejoined into one PPTX text box if they live in the
    // same block box. A truly inline element (<strong> inside a paragraph)
    // inherits its parent's block id; anything else starts its own, which keeps
    // side-by-side pills from being welded together.
    const blockId = cs.display === "inline" ? parentBlockId : ++blockCounter;

    const tag = el.tagName.toLowerCase();
    const backgroundImage = cs.backgroundImage;

    const mustRasterize =
      tag === "svg" ||
      tag === "canvas" ||
      tag === "video" ||
      cs.webkitBackgroundClip === "text" ||
      cs.backgroundClip === "text" ||
      (backgroundImage && backgroundImage !== "none") ||
      (cs.filter && cs.filter !== "none") ||
      (cs.backdropFilter && cs.backdropFilter !== "none") ||
      (cs.webkitBackdropFilter && cs.webkitBackdropFilter !== "none") ||
      (cs.mixBlendMode && cs.mixBlendMode !== "normal") ||
      hasNonTranslateTransform(cs) ||
      matchesAny(el, rasterizeSelectors);

    // Rasterizing needs something to screenshot; a zero-area element has
    // nothing to capture, so fall through and walk its children instead.
    if (hasArea && (mustRasterize || tag === "img")) {
      // Images are rasterized too: screenshotting the element bakes in
      // object-fit cropping and any border-radius/shadow for free.
      const opaque = isVisibleColor(cs.backgroundColor) && parseAlpha(cs.backgroundColor) === 1;
      const raster = registerRaster(el, !opaque, rect);
      if (raster) {
        push({
          kind: "image",
          zPath,
          ...raster.local,
          id: raster.id,
          transparent: !opaque,
        });
      }
      return; // do not descend — the raster already contains the subtree
    }

    const border = readBorder(cs);
    const shadow = parseShadow(cs.boxShadow);
    const hasBackground = isVisibleColor(cs.backgroundColor);

    if (hasArea && (hasBackground || border || shadow)) {
      const radius = parseRadius(cs, rect.width, rect.height);
      const local = toLocal(rect);
      push({
        kind: "rect",
        zPath,
        ...local,
        background: hasBackground ? applyAlpha(cs.backgroundColor, alpha) : null,
        radius: radius.px,
        ellipse: radius.ellipse,
        border,
        shadow,
      });
    }

    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        emitTextNode(child, el, cs, alpha, zPath, blockId);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        visit(child, alpha, zPath, blockId);
      }
    }
  };

  visit(root, 1, [], 0);

  /** Lexicographic compare of stacking paths, DOM order as the tiebreak. */
  const compareZ = (a, b) => {
    const pa = a.zPath;
    const pb = b.zPath;
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return a.order - b.order;
  };

  primitives.sort(compareZ);

  return { primitives, rasterTargets };
}
