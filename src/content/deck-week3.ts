/**
 * Deck configuration for Week 3 Update presentation.
 */

import type { DeckSection, SlideComponent } from './types';

// Import Week 3 Update slide components
import { CoverWeek3 } from '../slides/CoverWeek3';
import { RecapWeek3 } from '../slides/RecapWeek3';
import { OverviewWeek3 } from '../slides/OverviewWeek3';
import { RQ3Setup } from '../slides/RQ3Setup';
import { RQ3Results } from '../slides/RQ3Results';
import { RQ4Setup } from '../slides/RQ4Setup';
import { RQ4Results } from '../slides/RQ4Results';
import { DiscussionWeek3 } from '../slides/DiscussionWeek3';
import { ProblemsNextSteps } from '../slides/ProblemsNextSteps';
import { ThankYou } from '../slides/ThankYou';
import { QuestionsWeek3 } from '../slides/QuestionsWeek3';

// Helper to assign static slideId properties to components to prevent HMR/minification mismatch
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverWeek3Component = defineSlide(CoverWeek3, 'CoverWeek3');
const RecapWeek3Component = defineSlide(RecapWeek3, 'RecapWeek3');
const OverviewWeek3Component = defineSlide(OverviewWeek3, 'OverviewWeek3');
const RQ3SetupComponent = defineSlide(RQ3Setup, 'RQ3Setup');
const RQ3ResultsComponent = defineSlide(RQ3Results, 'RQ3Results');
const RQ4SetupComponent = defineSlide(RQ4Setup, 'RQ4Setup');
const RQ4ResultsComponent = defineSlide(RQ4Results, 'RQ4Results');
const DiscussionWeek3Component = defineSlide(DiscussionWeek3, 'DiscussionWeek3');
const ProblemsNextStepsComponent = defineSlide(ProblemsNextSteps, 'ProblemsNextSteps');
const ThankYouComponent = defineSlide(ThankYou, 'ThankYou');
const QuestionsWeek3Component = defineSlide(QuestionsWeek3, 'QuestionsWeek3');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [CoverWeek3Component],
  },
  {
    label: 'Recap',
    slides: [RecapWeek3Component],
  },
  {
    label: 'Overview',
    slides: [OverviewWeek3Component],
  },
  {
    label: 'RQ3',
    slides: [
      RQ3SetupComponent,
      RQ3ResultsComponent,
    ],
  },
  {
    label: 'RQ4',
    slides: [
      RQ4SetupComponent,
      RQ4ResultsComponent,
    ],
  },
  {
    label: 'Discussion',
    slides: [
      DiscussionWeek3Component,
    ],
  },
  {
    label: 'Next Steps',
    slides: [
      ProblemsNextStepsComponent,
    ],
  },
  {
    label: 'Outro',
    slides: [
      ThankYouComponent,
      QuestionsWeek3Component,
    ],
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
