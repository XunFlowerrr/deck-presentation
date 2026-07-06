/**
 * Export the presentation to PDF.
 * Requires the dev server to be running: pnpm dev
 * Usage: node scripts/export-pdf.mjs
 */

import puppeteer from "puppeteer";
import { access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";

const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const DEFAULT_DEV_URLS = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5174",
];
const ANIMATION_DELAY = 1500; // ms — wait for framer-motion transitions
const OUTPUT = "PIAA-Presentation.pdf";

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function pathExists(path) {
  try {
    await access(path, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function probeUrl(url) {
  try {
    const response = await fetch(url, { method: "GET" });
    return response.ok;
  } catch {
    return false;
  }
}

async function resolveDevUrl() {
  const cliUrl = process.argv[2];
  if (cliUrl) {
    return cliUrl;
  }

  if (process.env.DEV_URL) {
    return process.env.DEV_URL;
  }

  for (const candidate of DEFAULT_DEV_URLS) {
    if (await probeUrl(candidate)) {
      return candidate;
    }
  }

  return DEFAULT_DEV_URLS[0];
}

async function main() {
  const devUrl = await resolveDevUrl();
  const executablePath = (process.env.PUPPETEER_EXECUTABLE_PATH &&
    (await pathExists(process.env.PUPPETEER_EXECUTABLE_PATH)))
    ? process.env.PUPPETEER_EXECUTABLE_PATH
    : (await pathExists(CHROME_PATH) ? CHROME_PATH : undefined);

  console.log("🚀  Launching Chrome…");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--force-device-scale-factor=1",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  console.log(`📄  Navigating to ${devUrl}…`);
  await page.goto(devUrl, { waitUntil: "networkidle0", timeout: 30000 });
  await sleep(ANIMATION_DELAY);

  // Retrieve total slides dynamically from the page context
  const TOTAL_SLIDES = await page.evaluate(() => window.__total_slides || 12);
  console.log(`📊  Detected slide count dynamically: ${TOTAL_SLIDES} slides`);

  const screenshots = [];

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`📸  Capturing slide ${i + 1} / ${TOTAL_SLIDES}`);
    const buf = await page.screenshot({ type: "png", encoding: "binary" });
    screenshots.push(buf);

    if (i < TOTAL_SLIDES - 1) {
      await page.keyboard.press("ArrowRight");
      await sleep(ANIMATION_DELAY);
    }
  }

  console.log("🖨️   Stitching PDF…");

  // Build an HTML page with one image-per-slide and print it to PDF
  const pdfPage = await browser.newPage();
  await pdfPage.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  const dataUrls = screenshots.map(
    (buf) => "data:image/png;base64," + Buffer.from(buf).toString("base64"),
  );

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1920px; background: #000; }
  .slide {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
  }
  .slide:last-child { page-break-after: avoid; break-after: avoid; }
  .slide img { display: block; width: 1920px; height: 1080px; }
</style>
</head>
<body>
${dataUrls.map((src) => `  <div class="slide"><img src="${src}"/></div>`).join("\n")}
</body>
</html>`;

  await pdfPage.setContent(html, { waitUntil: "networkidle0" });

  await pdfPage.pdf({
    path: OUTPUT,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  console.log(`✅  Done! → ${OUTPUT}  (${TOTAL_SLIDES} slides)`);
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
