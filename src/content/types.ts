import type { ComponentType } from 'react';

// ── Text ───────────────────────────────────────────────────────────────────

/** A string available in both Thai (default) and English. */
export interface BilingualText {
  th: string;
  en: string;
}

// ── Visual config ──────────────────────────────────────────────────────────

/** Glow decoration passed to SlideShell. */
export interface GlowConfig {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  size: number;
  /** "r,g,b" format, e.g. "124, 58, 237" */
  color: string;
  opacity: number;
}

// ── Deck ───────────────────────────────────────────────────────────────────

/** A slide component — takes no props. */
export type SlideComponent = ComponentType & { slideId?: string };

/** One section in the presentation deck. */
export interface DeckSection {
  label: string;
  slides: SlideComponent[];
}
