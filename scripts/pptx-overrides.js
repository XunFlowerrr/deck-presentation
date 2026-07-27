/**
 * Per-slide escape hatches for the PPTX exporter.
 *
 * Keys are slide ids as assigned in src/content/deck-*.ts (Cover, Pipeline,
 * Finding4, ...). Use these only after looking at real output — the generic
 * walker in scripts/lib/pptx-extract.mjs handles most slides unaided.
 *
 *   rasterize: [selector]  force a subtree to become a single picture
 *   skip:      [selector]  drop a subtree entirely
 *
 * @type {Record<string, { rasterize?: string[], skip?: string[] }>}
 */
export default {
  // Example:
  // Pipeline: { rasterize: ['[data-pipeline-diagram]'] },
};
