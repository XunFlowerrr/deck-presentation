/**
 * Shared browser bootstrap for the export scripts (export-pdf, export-pptx).
 *
 * Owns three things:
 *   - locating a usable Chrome/Edge binary across platforms
 *   - finding the running dev server
 *   - waiting until a slide's entrance animation has actually settled
 */

import { access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";

const DEFAULT_DEV_URLS = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5174",
];

export async function pathExists(path) {
  if (!path) return false;
  try {
    await access(path, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Candidate browser binaries, most-preferred first.
 * puppeteer's own Chromium download is disabled in pnpm-workspace.yaml
 * (allowBuilds: { puppeteer: false }), so a system browser is the usual path.
 */
function browserCandidates() {
  const programFiles = process.env["ProgramFiles"] ?? "C:\\Program Files";
  const programFilesX86 =
    process.env["ProgramFiles(x86)"] ?? "C:\\Program Files (x86)";
  const localAppData = process.env["LOCALAPPDATA"] ?? "";

  return [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    // Windows — Chrome
    `${programFiles}\\Google\\Chrome\\Application\\chrome.exe`,
    `${programFilesX86}\\Google\\Chrome\\Application\\chrome.exe`,
    localAppData && `${localAppData}\\Google\\Chrome\\Application\\chrome.exe`,
    // Windows — Edge
    `${programFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${programFilesX86}\\Microsoft\\Edge\\Application\\msedge.exe`,
    // macOS
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean);
}

/**
 * @returns {Promise<string|undefined>} a browser path, or undefined to let
 *   puppeteer fall back to its bundled Chromium.
 */
export async function resolveExecutablePath() {
  for (const candidate of browserCandidates()) {
    if (await pathExists(candidate)) return candidate;
  }
  return undefined;
}

async function probeUrl(url) {
  try {
    const response = await fetch(url, { method: "GET" });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * CLI arg > DEV_URL env > probe the usual Vite ports.
 * @param {string} [cliUrl]
 */
export async function resolveDevUrl(cliUrl) {
  if (cliUrl) return cliUrl;
  if (process.env.DEV_URL) return process.env.DEV_URL;

  for (const candidate of DEFAULT_DEV_URLS) {
    if (await probeUrl(candidate)) return candidate;
  }
  return DEFAULT_DEV_URLS[0];
}

/**
 * Wait until the slide has stopped moving.
 *
 * Slides animate in with framer-motion and settle to a static final state, so
 * rather than guessing a fixed delay we fingerprint the subtree geometry each
 * frame and return once consecutive frames agree.
 *
 * @param {import('puppeteer').Page} page
 * @param {{ stableFrames?: number, timeout?: number }} [opts]
 */
export async function waitForSlideSettled(page, opts = {}) {
  const { stableFrames = 3, timeout = 4000 } = opts;

  await page.evaluate(
    async ({ stableFrames, timeout }) => {
      const nextFrame = () =>
        new Promise((resolve) => requestAnimationFrame(() => resolve()));

      const fingerprint = () => {
        const parts = [];
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) continue;
          const cs = getComputedStyle(el);
          parts.push(
            `${Math.round(r.x)},${Math.round(r.y)},${Math.round(r.width)},${Math.round(r.height)},${cs.opacity},${cs.transform}`,
          );
        }
        return parts.join("|");
      };

      const deadline = performance.now() + timeout;
      let previous = null;
      let stable = 0;

      while (performance.now() < deadline) {
        await nextFrame();
        const current = fingerprint();
        stable = current === previous ? stable + 1 : 0;
        previous = current;
        if (stable >= stableFrames) return;
      }
    },
    { stableFrames, timeout },
  );

  // Give web fonts and any in-flight images a beat to land.
  await page.evaluate(() => document.fonts?.ready);
}

/**
 * Suppress presenter chrome that must not appear in an export: the hover
 * toolbar, the laser canvas, and the DynamicImageManager edit affordance.
 * These are all mouse-driven and normally hidden, but this makes it explicit.
 * @param {import('puppeteer').Page} page
 */
export async function hidePresenterChrome(page) {
  await page.addStyleTag({
    content: `
      [data-export-hide],
      canvas[style*="z-index: 9990"],
      [style*="z-index: 9999"] { display: none !important; }
    `,
  });
}

export { DEFAULT_DEV_URLS };
