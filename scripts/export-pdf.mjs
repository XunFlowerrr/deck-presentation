/**
 * Export the presentation to PDF.
 * Requires the dev server to be running: pnpm dev
 * Usage: node scripts/export-pdf.mjs
 */

import puppeteer from "puppeteer";

const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const DEV_URL = "http://localhost:5173";
const ANIMATION_DELAY = 1500; // ms — wait for framer-motion transitions
const OUTPUT = "PIAA-Presentation.pdf";

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("🚀  Launching Chrome…");
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--force-device-scale-factor=1",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  console.log(`📄  Navigating to ${DEV_URL}…`);
  await page.goto(DEV_URL, { waitUntil: "networkidle0", timeout: 30000 });
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
