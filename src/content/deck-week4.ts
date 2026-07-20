/**
 * Deck configuration for Week 4 Update presentation.
 */

import type { DeckSection, SlideComponent } from './types';

// Import Week 4 Update slide components
import { CoverWeek4 } from '../slides/PIAA week4/CoverWeek4';
import { PipelineWeek4 } from '../slides/PIAA week4/PipelineWeek4';
import { RecapWeek4 } from '../slides/PIAA week4/RecapWeek4';
import { AgendaWeek4 } from '../slides/PIAA week4/AgendaWeek4';
import { FairComparisonWeek4 } from '../slides/PIAA week4/FairComparisonWeek4';
import { DedupProblemWeek4 } from '../slides/PIAA week4/DedupProblemWeek4';
import { WilcoxonWeek4 } from '../slides/PIAA week4/WilcoxonWeek4';
import { WilcoxonGraphWeek4 } from '../slides/PIAA week4/WilcoxonGraphWeek4';
import { VlmBackboneWeek4 } from '../slides/PIAA week4/VlmBackboneWeek4';
import { VlmFaithfulnessWeek4 } from '../slides/PIAA week4/VlmFaithfulnessWeek4';
import { StandardScalerConceptWeek4 } from '../slides/PIAA week4/StandardScalerConceptWeek4';
import { StandardScalerWeek4 } from '../slides/PIAA week4/StandardScalerWeek4';
import { LayerSweepWeek4 } from '../slides/PIAA week4/LayerSweepWeek4';
import { FineTuneHowWeek4 } from '../slides/PIAA week4/FineTuneHowWeek4';
import { FineTuningWeek4 } from '../slides/PIAA week4/FineTuningWeek4';
import { SummaryWeek4 } from '../slides/PIAA week4/SummaryWeek4';
import { NextStepsWeek4 } from '../slides/PIAA week4/NextStepsWeek4';
import { ThankYou } from '../slides/PIAA week4/ThankYou';

// Helper to assign static slideId properties to components to prevent HMR/minification mismatch
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverWeek4Component = defineSlide(CoverWeek4, 'CoverWeek4');
const PipelineWeek4Component = defineSlide(PipelineWeek4, 'PipelineWeek4');
const RecapWeek4Component = defineSlide(RecapWeek4, 'RecapWeek4');
const AgendaWeek4Component = defineSlide(AgendaWeek4, 'AgendaWeek4');
const FairComparisonWeek4Component = defineSlide(FairComparisonWeek4, 'FairComparisonWeek4');
const DedupProblemWeek4Component = defineSlide(DedupProblemWeek4, 'DedupProblemWeek4');
const WilcoxonWeek4Component = defineSlide(WilcoxonWeek4, 'WilcoxonWeek4');
const WilcoxonGraphWeek4Component = defineSlide(WilcoxonGraphWeek4, 'WilcoxonGraphWeek4');
const VlmBackboneWeek4Component = defineSlide(VlmBackboneWeek4, 'VlmBackboneWeek4');
const VlmFaithfulnessWeek4Component = defineSlide(VlmFaithfulnessWeek4, 'VlmFaithfulnessWeek4');
const StandardScalerConceptWeek4Component = defineSlide(StandardScalerConceptWeek4, 'StandardScalerConceptWeek4');
const StandardScalerWeek4Component = defineSlide(StandardScalerWeek4, 'StandardScalerWeek4');
const LayerSweepWeek4Component = defineSlide(LayerSweepWeek4, 'LayerSweepWeek4');
const FineTuneHowWeek4Component = defineSlide(FineTuneHowWeek4, 'FineTuneHowWeek4');
const FineTuningWeek4Component = defineSlide(FineTuningWeek4, 'FineTuningWeek4');
const SummaryWeek4Component = defineSlide(SummaryWeek4, 'SummaryWeek4');
const NextStepsWeek4Component = defineSlide(NextStepsWeek4, 'NextStepsWeek4');
const ThankYouComponent = defineSlide(ThankYou, 'ThankYou');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [CoverWeek4Component],
  },
  {
    label: 'Pipeline',
    slides: [PipelineWeek4Component],
  },
  {
    label: 'Recap',
    slides: [RecapWeek4Component],
  },
  {
    label: 'Agenda',
    slides: [AgendaWeek4Component],
  },
  {
    label: 'Task 1',
    slides: [
      FairComparisonWeek4Component,
      WilcoxonWeek4Component,
      WilcoxonGraphWeek4Component,
    ],
  },
  {
    label: 'Task 2',
    slides: [
      VlmBackboneWeek4Component,
      StandardScalerWeek4Component,
      LayerSweepWeek4Component,
    ],
  },
  {
    label: 'Task 3',
    slides: [
      FineTuneHowWeek4Component,
      FineTuningWeek4Component,
    ],
  },
  {
    label: 'Summary',
    slides: [SummaryWeek4Component],
  },
  {
    label: 'Outro',
    slides: [
      NextStepsWeek4Component,
      ThankYouComponent,
    ],
  },
  {
    label: 'Appendix',
    slides: [
      DedupProblemWeek4Component,
      StandardScalerConceptWeek4Component,
      VlmFaithfulnessWeek4Component,
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
