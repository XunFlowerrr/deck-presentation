/**
 * Export the presentation to a native PowerPoint file.
 *
 * Unlike export-pdf.mjs (which screenshots each slide whole), this produces real
 * PPTX objects: editable text boxes, shapes with real fills and borders, and
 * pictures only where PowerPoint has no equivalent.
 *
 * Requires the dev server to be running: pnpm dev
 * Usage:
 *   node scripts/export-pptx.mjs [devUrl] [--debug] [--only=3,7] [--jpeg-quality=90]
 *
 * Known losses — see also the plan notes:
 *   - Fonts (Inter, Noto Sans Thai) are referenced by name. They must be
 *     installed on the machine opening the file or PowerPoint substitutes them
 *     and text shifts.
 *   - Gradient headlines (GradientText), inline SVG icons, and the SlideShell
 *     glow blobs become pictures. Still native picture objects, but not editable
 *     as text or vector.
 *   - Multi-layer box-shadows collapse to their first layer.
 *   - Output is precisely-positioned free-floating boxes, not semantic bulleted
 *     placeholders.
 */

import puppeteer from "puppeteer";
import PptxGenJS from "pptxgenjs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  resolveDevUrl,
  resolveExecutablePath,
  waitForSlideSettled,
  hidePresenterChrome,
} from "./lib/browser.mjs";
import { extractSlidePrimitives } from "./lib/pptx-extract.mjs";
import { createPresentation, emitSlide } from "./lib/pptx-emit.mjs";
import overrides from "./pptx-overrides.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUTPUT = "PIAA-Presentation.pptx";
const DEBUG_DIR = resolve(HERE, ".pptx-debug");
const SETTLE_GRACE = 700; // ms — let the swipe transition commit before fingerprinting

const args = process.argv.slice(2);
const flag = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const DEBUG = args.includes("--debug");
const JPEG_QUALITY = Number(flag("jpeg-quality") ?? 90);
const ONLY = flag("only")
  ?.split(",")
  .map((n) => Number(n.trim()) - 1)
  .filter((n) => Number.isInteger(n) && n >= 0);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Screenshot every element the extractor flagged. Transparent elements (SVG
 * icons, gradient text) need PNG; opaque ones (plots, photos) go to JPEG at the
 * configured quality, which is where nearly all of the file size lives.
 */
async function rasterize(page, targets) {
  const assets = new Map();

  for (const target of targets) {
    const handle = await page.$(`[data-pptx-raster="${target.id}"]`);
    if (!handle) continue;

    try {
      const buffer = target.transparent
        ? await handle.screenshot({ type: "png", omitBackground: true })
        : await handle.screenshot({ type: "jpeg", quality: JPEG_QUALITY });

      assets.set(target.id, {
        mime: target.transparent ? "image/png" : "image/jpeg",
        base64: Buffer.from(buffer).toString("base64"),
      });
    } catch (err) {
      // Zero-area or off-screen elements can't be captured; skipping one
      // decorative node is better than failing the whole export.
      console.warn(`   ⚠  could not rasterize ${target.id}: ${err.message}`);
    } finally {
      await handle.dispose();
    }
  }

  return assets;
}

async function currentSlideId(page) {
  return page.evaluate(() => {
    const w = window;
    return w.__current_slide_id ?? null;
  });
}

async function main() {
  const devUrl = await resolveDevUrl(args.find((a) => !a.startsWith("--")));
  const executablePath = await resolveExecutablePath();

  console.log("🚀  Launching Chrome…");
  if (executablePath) console.log(`    using ${executablePath}`);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-device-scale-factor=1"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

    console.log(`📄  Navigating to ${devUrl}…`);
    await page.goto(devUrl, { waitUntil: "networkidle0", timeout: 30000 });
    await hidePresenterChrome(page);
    await waitForSlideSettled(page);

    const total = await page.evaluate(() => window.__total_slides || 0);
    if (!total) throw new Error("Could not read window.__total_slides from the page.");
    console.log(`📊  ${total} slides detected`);

    const pptx = createPresentation(PptxGenJS);
    pptx.title = "Emotion-Mediated PIAA";

    if (DEBUG) await mkdir(DEBUG_DIR, { recursive: true });

    let emitted = 0;

    for (let i = 0; i < total; i++) {
      if (ONLY && !ONLY.includes(i)) {
        if (i < total - 1) {
          await page.keyboard.press("ArrowRight");
          await sleep(SETTLE_GRACE);
          await waitForSlideSettled(page);
        }
        continue;
      }

      const slideId = await currentSlideId(page);
      const slideOverrides = (slideId && overrides[slideId]) || {};

      const { primitives, rasterTargets } = await page.evaluate(
        extractSlidePrimitives,
        { rootSelector: "[data-slide-root]", overrides: slideOverrides },
      );

      const assets = await rasterize(page, rasterTargets);

      emitSlide(pptx, primitives, assets);
      emitted++;

      console.log(
        `🧩  Slide ${i + 1}/${total}${slideId ? ` (${slideId})` : ""} — ` +
          `${primitives.length} objects, ${assets.size} rasterized`,
      );

      if (DEBUG) {
        await writeFile(
          resolve(DEBUG_DIR, `slide-${String(i + 1).padStart(2, "0")}.json`),
          JSON.stringify({ slideId, primitives, rasterTargets }, null, 2),
        );
      }

      if (i < total - 1) {
        await page.keyboard.press("ArrowRight");
        await sleep(SETTLE_GRACE);
        await waitForSlideSettled(page);
      }
    }

    console.log("💾  Writing PPTX…");
    await pptx.writeFile({ fileName: OUTPUT });
    console.log(`✅  Done! → ${OUTPUT}  (${emitted} slides)`);
    if (DEBUG) console.log(`🔍  Primitive dumps → ${DEBUG_DIR}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
