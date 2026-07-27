/**
 * Primitive list -> pptxgenjs calls.
 *
 * This module owns every unit conversion. Slides are authored on a fixed
 * 1920x1080 canvas (see src/components/layout/PresentationFrame.tsx) which maps
 * onto a 13.333in x 7.5in 16:9 PowerPoint slide, so:
 *
 *   1 inch  = 144 px      ->  IN_PER_PX = 1/144
 *   1 point = 2 px        ->  PT_PER_PX = 0.5
 *
 * Sanity check: SlideHeader's 72px h1 becomes 36pt on a 13.333in slide.
 */

export const SLIDE_W_PX = 1920;
export const SLIDE_H_PX = 1080;
export const SLIDE_W_IN = 13.333;
export const SLIDE_H_IN = 7.5;

export const IN_PER_PX = SLIDE_W_IN / SLIDE_W_PX; // ~1/144
export const PT_PER_PX = 0.5;

const inches = (px) => px * IN_PER_PX;
const points = (px) => px * PT_PER_PX;

/** Chrome reports computed colors as `rgb(r,g,b)` / `rgba(r,g,b,a)`. */
export function parseColor(value) {
  if (!value || value === "none") return null;
  const m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,/\s]+([\d.]+))?\s*\)/i.exec(
    value,
  );
  if (!m) {
    const hex = /^#([0-9a-f]{6})$/i.exec(value.trim());
    return hex ? { hex: hex[1].toUpperCase(), alpha: 1 } : null;
  }
  const [r, g, b] = [m[1], m[2], m[3]].map((n) => Math.round(Number(n)));
  const alpha = m[4] === undefined ? 1 : Number(m[4]);
  const hex = [r, g, b]
    .map((n) => Math.max(0, Math.min(255, n)).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
  return { hex, alpha };
}

/** pptxgenjs takes opacity as `transparency` in percent. */
const transparency = (alpha) => Math.round((1 - alpha) * 100);

function fillProps(color) {
  if (!color || color.alpha === 0) return { type: "none" };
  const fill = { color: color.hex };
  if (color.alpha < 1) fill.transparency = transparency(color.alpha);
  return fill;
}

function shadowProps(shadow) {
  if (!shadow) return undefined;
  const color = parseColor(shadow.color);
  if (!color || color.alpha === 0) return undefined;

  const dx = shadow.offsetX ?? 0;
  const dy = shadow.offsetY ?? 0;
  // PowerPoint measures the angle clockwise from "east"; CSS +y is down, which
  // is the same direction, so atan2(dy, dx) maps over directly.
  const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

  return {
    type: "outer",
    color: color.hex,
    opacity: Math.round(color.alpha * 100) / 100,
    blur: Math.min(100, Math.round(points(shadow.blur ?? 0))),
    offset: Math.min(200, Math.round(points(Math.hypot(dx, dy)) * 100) / 100),
    angle: Math.round(angle),
    rotateWithShape: false,
  };
}

/**
 * CSS font-family stacks down to a single face name PowerPoint can resolve.
 * The face still has to be installed locally or PowerPoint substitutes it.
 */
function primaryFontFace(stack) {
  if (!stack) return "Inter";
  const first = stack.split(",")[0].trim().replace(/^["']|["']$/g, "");
  if (!first || /^(system-ui|-apple-system|sans-serif|serif|monospace)$/i.test(first)) {
    return "Inter";
  }
  return first;
}

let useWeightFaces = true;

/** Disable weight-specific family names (for machines with only Regular+Bold). */
export function setUseWeightFaces(enabled) {
  useWeightFaces = enabled;
}

/**
 * The extractor resolves fonts in the page, where Chrome's own matching decides
 * which family `system-ui` and friends actually mean and which weight-specific
 * faces exist. Fall back to parsing the stack only for primitives that predate
 * that (or when weight faces are switched off).
 */
function resolveFace(p) {
  if (p.fontFace && useWeightFaces) {
    return { fontFace: p.fontFace, bold: p.bold ?? false };
  }
  return {
    fontFace: p.fontFaceBase ?? primaryFontFace(p.fontFamily),
    bold: (p.fontWeight ?? 400) >= 600,
  };
}

function emitRect(slide, pptx, p) {
  const fill = fillProps(parseColor(p.background));
  const shadow = shadowProps(p.shadow);
  const radiusPx = Math.min(p.radius ?? 0, Math.min(p.w, p.h) / 2);

  const border = p.border;
  const uniformBorder =
    border && border.uniform && border.width > 0
      ? parseColor(border.color)
      : null;

  const opts = {
    x: inches(p.x),
    y: inches(p.y),
    w: inches(p.w),
    h: inches(p.h),
    fill,
    line:
      uniformBorder && uniformBorder.alpha > 0
        ? {
            color: uniformBorder.hex,
            width: Math.max(0.25, points(border.width)),
            transparency:
              uniformBorder.alpha < 1 ? transparency(uniformBorder.alpha) : undefined,
          }
        : { type: "none" },
  };
  if (shadow) opts.shadow = shadow;

  if (p.ellipse && radiusPx > 0.5) {
    slide.addShape(pptx.ShapeType.ellipse, opts);
  } else if (radiusPx > 0.5) {
    opts.rectRadius = inches(radiusPx);
    slide.addShape(pptx.ShapeType.roundRect, opts);
  } else {
    slide.addShape(pptx.ShapeType.rect, opts);
  }

  // Non-uniform borders (a lone accent rule on one edge, say) can't be
  // expressed as a shape outline, so draw each visible edge as its own bar.
  if (border && !border.uniform) {
    for (const side of ["top", "right", "bottom", "left"]) {
      const edge = border.sides[side];
      if (!edge || edge.width <= 0) continue;
      const color = parseColor(edge.color);
      if (!color || color.alpha === 0) continue;

      const vertical = side === "left" || side === "right";
      slide.addShape(pptx.ShapeType.rect, {
        x: inches(side === "right" ? p.x + p.w - edge.width : p.x),
        y: inches(side === "bottom" ? p.y + p.h - edge.width : p.y),
        w: inches(vertical ? edge.width : p.w),
        h: inches(vertical ? p.h : edge.width),
        fill: fillProps(color),
        line: { type: "none" },
      });
    }
  }
}

/** Per-run character formatting, shared by single- and multi-run text boxes. */
function runOptions(p) {
  const color = parseColor(p.color) ?? { hex: "222222", alpha: 1 };
  const { fontFace, bold } = resolveFace(p);
  return {
    fontFace,
    fontSize: Math.round(points(p.fontSizePx) * 100) / 100,
    bold,
    italic: p.fontStyle === "italic",
    underline: p.underline ? { style: "sng" } : undefined,
    strike: p.strike ? "sngStrike" : undefined,
    color: color.hex,
    transparency: color.alpha < 1 ? transparency(color.alpha) : undefined,
    charSpacing: p.letterSpacingPx
      ? Math.round(points(p.letterSpacingPx) * 100) / 100
      : undefined,
  };
}

/**
 * Can two consecutive text primitives share one PPTX text box?
 *
 * They must sit on the same line of the same block box and be genuinely
 * adjacent. This is what stops a bold lead-in ("Stage 1 is Shared:") from
 * overrunning the sentence that follows it: PowerPoint sets Inter slightly
 * wider than Chrome, so independently-positioned runs collide. As one box with
 * two runs, PowerPoint flows them contiguously and the drift is harmless.
 */
function canMergeRuns(a, b) {
  if (a.blockId === undefined || a.blockId !== b.blockId) return false;
  if (Math.abs(a.y - b.y) > 2) return false;
  if (Math.abs(a.h - b.h) > 2) return false;
  if (a.align !== b.align) return false;
  if (JSON.stringify(a.zPath) !== JSON.stringify(b.zPath)) return false;

  const gap = b.x - (a.x + a.w);
  return gap >= -2 && gap <= a.fontSizePx * 1.2;
}

function mergeRuns(group) {
  const first = group[0];
  const last = group[group.length - 1];
  return {
    ...first,
    w: last.x + last.w - first.x,
    h: Math.max(...group.map((p) => p.h)),
    // Interior whitespace is preserved so words stay separated; only the
    // outermost edges of the merged line are trimmed.
    runs: group.map((p, i) => {
      let text = p.raw ?? p.text;
      if (i === 0) text = text.replace(/^\s+/, "");
      if (i === group.length - 1) text = text.replace(/\s+$/, "");
      return { text, options: runOptions(p) };
    }),
  };
}

/** Rejoin adjacent inline runs while preserving paint order. */
function coalesceText(primitives) {
  const out = [];
  let group = null;

  const flush = () => {
    if (!group) return;
    out.push(group.length === 1 ? group[0] : mergeRuns(group));
    group = null;
  };

  for (const p of primitives) {
    if (p.kind !== "text") {
      flush();
      out.push(p);
      continue;
    }
    if (group && canMergeRuns(group[group.length - 1], p)) {
      group.push(p);
      continue;
    }
    flush();
    group = [p];
  }
  flush();

  return out;
}

function emitText(slide, p) {
  const align = p.align === "right" ? "right" : p.align === "center" ? "center" : "left";

  // The extracted rect is tight around the rendered line. PowerPoint's font
  // metrics won't match Chrome's exactly, so pad the box on the free axis and
  // keep the aligned edge pinned where the browser put it.
  const slackPx = p.w * 0.25 + 24;
  let x = p.x;
  let w = p.w + slackPx;
  if (align === "right") x = p.x - slackPx;
  else if (align === "center") {
    x = p.x - slackPx / 2;
    w = p.w + slackPx;
  }

  slide.addText(p.runs ?? p.text, {
    x: inches(x),
    y: inches(p.y),
    w: inches(w),
    h: inches(p.h),
    align,
    // The extracted rect is the font box exactly: ascent + descent, the same
    // metrics PowerPoint reads out of the font file. Anchoring to the top and
    // pinning line spacing to that height puts the baseline where Chrome put
    // it. Letting PowerPoint pick the spacing instead (valign middle, default
    // spacing) centres a slug ~1.2x taller than the box and floats the
    // baseline high — visible where text sits beside a rasterized run, as in
    // SlideHeader's black title next to its GradientText half.
    valign: "top",
    lineSpacing: Math.round(points(p.h) * 100) / 100,
    margin: 0,
    wrap: false,
    isTextBox: true,
    ...runOptions(p),
  });
}

function emitImage(slide, p, assets) {
  const asset = assets.get(p.id);
  if (!asset) return;
  slide.addImage({
    data: `data:${asset.mime};base64,${asset.base64}`,
    x: inches(p.x),
    y: inches(p.y),
    w: inches(p.w),
    h: inches(p.h),
  });
}

/**
 * @param {import('pptxgenjs').default} pptx
 * @param {object[]} primitives  extracted, already in paint order
 * @param {Map<string, {mime: string, base64: string}>} assets rasterized elements
 */
export function emitSlide(pptx, primitives, assets) {
  const slide = pptx.addSlide();

  for (const p of coalesceText(primitives)) {
    switch (p.kind) {
      case "rect":
        emitRect(slide, pptx, p);
        break;
      case "text":
        emitText(slide, p);
        break;
      case "image":
        emitImage(slide, p, assets);
        break;
      default:
        break;
    }
  }

  return slide;
}

/** A presentation preconfigured with the deck's 16:9 geometry. */
export function createPresentation(PptxGenJS) {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "DECK_16x9", width: SLIDE_W_IN, height: SLIDE_H_IN });
  pptx.layout = "DECK_16x9";
  return pptx;
}
