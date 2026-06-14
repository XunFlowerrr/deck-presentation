/**
 * TEMPLATE — Copy this file to create content for a new slide.
 *
 * Naming convention: use kebab-case matching the slide component name.
 * e.g. MyNewSlide.tsx → content/slides/my-new-slide.ts
 *
 * Rules:
 *  - NO JSX in this file. Plain TypeScript only.
 *  - Bilingual text uses { th: string; en: string } (BilingualText).
 *  - Images come from '../../content/assets' — never import from assets/ directly.
 *  - All exported names should be unique and descriptive.
 */

import type { BilingualText } from '../types';
// import { someImg } from '../assets';

// ── Slide header ───────────────────────────────────────────────────────────
export const mySlideHeader = {
  label: 'Section label',
  title: 'Slide',
  highlight: 'Title.',
  tagline: 'Optional tagline text',
} as const;

// ── Data ───────────────────────────────────────────────────────────────────
export interface MyItem {
  title: string;
  desc: BilingualText;
  color: string;
  rgb: string;
}

export const myItems: MyItem[] = [
  {
    title: 'Item Title',
    desc: {
      th: 'คำอธิบายภาษาไทย',
      en: 'English description',
    },
    color: '#7C3AED',
    rgb: '124, 58, 237',
  },
];
