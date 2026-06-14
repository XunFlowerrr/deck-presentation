/**
 * Deck configuration — the single place that controls which slides appear in
 * which order and how they are grouped into sections.
 */

import type { DeckSection, SlideComponent } from './types';

import { Cover } from '../slides/Cover';
import { WhatIsBeauty } from '../slides/WhatIsBeauty';
import { TheProblem } from '../slides/TheProblem';
import { OurIdea } from '../slides/OurIdea';
import { ResearchQuestions } from '../slides/ResearchQuestions';
import { Dataset } from '../slides/Dataset';
import { DatasetVisuals } from '../slides/DatasetVisuals';
import { OurPipeline } from '../slides/OurPipeline';
import { Experiment1 } from '../slides/Experiment1';
import { Experiment2 } from '../slides/Experiment2';
import { Experiment3 } from '../slides/Experiment3';
import { RelatedWork } from '../slides/RelatedWork';
import { Challenges } from '../slides/Challenges';
import { NextSteps } from '../slides/NextSteps';
import { ThankYou } from '../slides/ThankYou';

// Helper to assign static slideId properties to components to prevent HMR/minification mismatch
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverComponent = defineSlide(Cover, 'Cover');
const WhatIsBeautyComponent = defineSlide(WhatIsBeauty, 'WhatIsBeauty');
const TheProblemComponent = defineSlide(TheProblem, 'TheProblem');
const OurIdeaComponent = defineSlide(OurIdea, 'OurIdea');
const ResearchQuestionsComponent = defineSlide(ResearchQuestions, 'ResearchQuestions');
const DatasetComponent = defineSlide(Dataset, 'Dataset');
const DatasetVisualsComponent = defineSlide(DatasetVisuals, 'DatasetVisuals');
const OurPipelineComponent = defineSlide(OurPipeline, 'OurPipeline');
const Experiment1Component = defineSlide(Experiment1, 'Experiment1');
const Experiment2Component = defineSlide(Experiment2, 'Experiment2');
const Experiment3Component = defineSlide(Experiment3, 'Experiment3');
const RelatedWorkComponent = defineSlide(RelatedWork, 'RelatedWork');
const ChallengesComponent = defineSlide(Challenges, 'Challenges');
const NextStepsComponent = defineSlide(NextSteps, 'NextSteps');
const ThankYouComponent = defineSlide(ThankYou, 'ThankYou');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [CoverComponent],
  },
  {
    label: 'Problem',
    slides: [WhatIsBeautyComponent, TheProblemComponent, OurIdeaComponent, ResearchQuestionsComponent],
  },
  {
    label: 'Method',
    slides: [DatasetComponent, DatasetVisualsComponent, OurPipelineComponent],
  },
  {
    label: 'Experiments',
    slides: [Experiment1Component, Experiment2Component, Experiment3Component],
  },
  {
    label: 'Discussion',
    slides: [RelatedWorkComponent, ChallengesComponent, NextStepsComponent],
  },
  {
    label: 'Outro',
    slides: [ThankYouComponent],
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
