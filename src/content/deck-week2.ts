/**
 * Deck configuration for Week 2 presentation.
 */

import type { DeckSection, SlideComponent } from './types';

import { Cover } from '../slides/week2/Cover';
import { TheProblem } from '../slides/week2/TheProblem';
import { OurIdea } from '../slides/week2/OurIdea';
import { OurPipeline } from '../slides/week2/OurPipeline';
import { HowItWorks } from '../slides/week2/HowItWorks';
import { Dataset } from '../slides/week2/Dataset';
import { WhatIsAesthemos } from '../slides/week2/WhatIsAesthemos';
import { WhatIsTipi } from '../slides/week2/WhatIsTipi';
import { DatasetVisuals } from '../slides/week2/DatasetVisuals';
import { ResearchQuestions } from '../slides/week2/ResearchQuestions';
import { Experiment1 } from '../slides/week2/Experiment1';
import { Experiment2 } from '../slides/week2/Experiment2';
import { Experiment3a } from '../slides/week2/Experiment3a';
import { Experiment3b } from '../slides/week2/Experiment3b';
import { RelatedWork } from '../slides/week2/RelatedWork';
import { IciArchitecture } from '../slides/week2/IciArchitecture';
import { Challenges } from '../slides/week2/Challenges';
import { NextSteps } from '../slides/week2/NextSteps';
import { DiscussionQuestions } from '../slides/week2/DiscussionQuestions';
import { ThankYou } from '../slides/week2/ThankYou';
import { AppendixMetrics } from '../slides/week2/AppendixMetrics';
import { AppendixApproaches } from '../slides/week2/AppendixApproaches';
import { ModelsHyperparameters } from '../slides/week2/ModelsHyperparameters';

// Helper to assign static slideId properties to components to prevent HMR/minification mismatch
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverComponent = defineSlide(Cover, 'Cover');
const TheProblemComponent = defineSlide(TheProblem, 'TheProblem');
const OurIdeaComponent = defineSlide(OurIdea, 'OurIdea');
const OurPipelineComponent = defineSlide(OurPipeline, 'OurPipeline');
const HowItWorksComponent = defineSlide(HowItWorks, 'HowItWorks');
const DatasetComponent = defineSlide(Dataset, 'Dataset');
const WhatIsAesthemosComponent = defineSlide(WhatIsAesthemos, 'WhatIsAesthemos');
const WhatIsTipiComponent = defineSlide(WhatIsTipi, 'WhatIsTipi');
const DatasetVisualsComponent = defineSlide(DatasetVisuals, 'DatasetVisuals');
const ResearchQuestionsComponent = defineSlide(ResearchQuestions, 'ResearchQuestions');
const Experiment1Component = defineSlide(Experiment1, 'Experiment1');
const Experiment2Component = defineSlide(Experiment2, 'Experiment2');
const Experiment3aComponent = defineSlide(Experiment3a, 'Experiment3a');
const Experiment3bComponent = defineSlide(Experiment3b, 'Experiment3b');
const RelatedWorkComponent = defineSlide(RelatedWork, 'RelatedWork');
const IciArchitectureComponent = defineSlide(IciArchitecture, 'IciArchitecture');
const ChallengesComponent = defineSlide(Challenges, 'Challenges');
const NextStepsComponent = defineSlide(NextSteps, 'NextSteps');
const DiscussionQuestionsComponent = defineSlide(DiscussionQuestions, 'DiscussionQuestions');
const ThankYouComponent = defineSlide(ThankYou, 'ThankYou');
const AppendixMetricsComponent = defineSlide(AppendixMetrics, 'AppendixMetrics');
const AppendixApproachesComponent = defineSlide(AppendixApproaches, 'AppendixApproaches');
const ModelsHyperparametersComponent = defineSlide(ModelsHyperparameters, 'ModelsHyperparameters');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [CoverComponent],
  },
  {
    label: 'Problem',
    slides: [
      TheProblemComponent,
      OurIdeaComponent,
      OurPipelineComponent,
      HowItWorksComponent,
      DatasetComponent,
      WhatIsAesthemosComponent,
      WhatIsTipiComponent,
      DatasetVisualsComponent,
      ResearchQuestionsComponent,
    ],
  },
  {
    label: 'Experiments',
    slides: [
      Experiment1Component,
      Experiment2Component,
      Experiment3aComponent,
      Experiment3bComponent,
    ],
  },
  {
    label: 'Discussion',
    slides: [
      ChallengesComponent,
      NextStepsComponent,
      DiscussionQuestionsComponent,
    ],
  },
  {
    label: 'Outro',
    slides: [
      ThankYouComponent,
      RelatedWorkComponent,
      AppendixMetricsComponent,
      AppendixApproachesComponent,
      ModelsHyperparametersComponent,
      IciArchitectureComponent,
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
