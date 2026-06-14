/**
 * Deck configuration — the single place that controls which slides appear in
 * which order and how they are grouped into sections.
 */

import type { DeckSection } from './types';

import { Cover } from '../slides/Cover';
import { TheProblem } from '../slides/TheProblem';
import { OurIdea } from '../slides/OurIdea';
import { Dataset } from '../slides/Dataset';
import { OurPipeline } from '../slides/OurPipeline';
import { Experiment1 } from '../slides/Experiment1';
import { Experiment2 } from '../slides/Experiment2';
import { Results } from '../slides/Results';
import { RelatedWork } from '../slides/RelatedWork';
import { Challenges } from '../slides/Challenges';
import { ThankYou } from '../slides/ThankYou';

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [Cover],
  },
  {
    label: 'Problem',
    slides: [TheProblem, OurIdea],
  },
  {
    label: 'Method',
    slides: [Dataset, OurPipeline],
  },
  {
    label: 'Experiments',
    slides: [Experiment1, Experiment2, Results],
  },
  {
    label: 'Discussion',
    slides: [RelatedWork, Challenges],
  },
  {
    label: 'Outro',
    slides: [ThankYou],
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
