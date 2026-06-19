/**
 * Deck configuration — the single place that controls which slides appear in
 * which order and how they are grouped into sections.
 */

import type { DeckSection, SlideComponent } from './types';

import { GableCover } from '../slides/GableCover';
import { GableWorkProcess } from '../slides/GableWorkProcess';
import { GableTechSkills } from '../slides/GableTechSkills';
import { GableSelfie } from '../slides/GableSelfie';

// Helper to assign static slideId properties to components to prevent HMR/minification mismatch
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const GableCoverComponent = defineSlide(GableCover, 'GableCover');
const GableWorkProcessComponent = defineSlide(GableWorkProcess, 'GableWorkProcess');
const GableTechSkillsComponent = defineSlide(GableTechSkills, 'GableTechSkills');
const GableSelfieComponent = defineSlide(GableSelfie, 'GableSelfie');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [GableCoverComponent],
  },
  {
    label: 'Takeaways',
    slides: [
      GableWorkProcessComponent,
      GableTechSkillsComponent,
    ],
  },
  {
    label: 'Outro',
    slides: [GableSelfieComponent],
  },
];

// ── Derived exports consumed by the presentation engine ────────────────────

/** Flat ordered slide array used by the presentation engine. */
export const slides = deck.flatMap((s) => s.slides);

/** Section metadata with auto-derived counts — consumed by ProgressTracker. */
export const sections: { label: string; count: number }[] = deck.map((s) => ({
  label: s.label,
  count: s.slides.length,
}));

/** Total slide count used for the progress tracker visibility guard. */
export const trackerSlideCount: number = slides.length;
