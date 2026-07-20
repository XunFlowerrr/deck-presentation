/**
 * Deck configuration for Week 5 (Progress Update #4) presentation.
 * 28 slides following the exact user presentation order.
 */

import type { DeckSection, SlideComponent } from './types';

// Import Week 5 slide components strictly from PIAA week5
import { CoverWeek5 } from '../slides/PIAA week5/CoverWeek5';
import { PipelineWeek5 } from '../slides/PIAA week5/PipelineWeek5';
import { RecapAgendaWeek5 } from '../slides/PIAA week5/RecapAgendaWeek5';
import { NoiseCeilingWeek5 } from '../slides/PIAA week5/NoiseCeilingWeek5';
import { EmotionRoadmapWeek5 } from '../slides/PIAA week5/EmotionRoadmapWeek5';
import { EmotionHelpSetupWeek4 } from '../slides/PIAA week4/EmotionHelpSetupWeek4';
import { EmotionHelpsEveryoneWeek4 } from '../slides/PIAA week4/EmotionHelpsEveryoneWeek4';
import { WhatDecidesWhoWeek4 } from '../slides/PIAA week4/WhatDecidesWhoWeek4';
import { ThresholdOrDoseWeek4 } from '../slides/PIAA week4/ThresholdOrDoseWeek4';
import { DirectConfoundWeek4 } from '../slides/PIAA week4/DirectConfoundWeek4';
import { WhyArtDifferentWeek4 } from '../slides/PIAA week4/WhyArtDifferentWeek4';
import { TestingArtExplanationsWeek4 } from '../slides/PIAA week4/TestingArtExplanationsWeek4';
import { WhichImagesBenefitWeek4 } from '../slides/PIAA week4/WhichImagesBenefitWeek4';
import { CaseStudyWeek4 } from '../slides/PIAA week4/CaseStudyWeek4';
import { Qwen4BComparisonWeek4 } from '../slides/PIAA week4/Qwen4BComparisonWeek4';
import { RedundancyTrendWeek4 } from '../slides/PIAA week4/RedundancyTrendWeek4';
import { SummaryWeek4 } from '../slides/PIAA week4/SummaryWeek4';
import { QuestionsWeek4 } from '../slides/PIAA week4/QuestionsWeek4';
import { ThankYouWeek4 } from '../slides/PIAA week4/ThankYouWeek4';

// Backup Q&A Slides
import { QA1DeltaComputationWeek5 } from '../slides/PIAA week5/QA1DeltaComputationWeek5';
import { QA2DirectConfoundWeek5 } from '../slides/PIAA week5/QA2DirectConfoundWeek5';
import { QA3DataLeakageWeek5 } from '../slides/PIAA week5/QA3DataLeakageWeek5';
import { QA4EmoRExactlyWeek5 } from '../slides/PIAA week5/QA4EmoRExactlyWeek5';
import { QA5PValueInterpretationWeek5 } from '../slides/PIAA week5/QA5PValueInterpretationWeek5';
import { QA6MultipleComparisonsWeek5 } from '../slides/PIAA week5/QA6MultipleComparisonsWeek5';
import { QA7FailureCasesWeek5 } from '../slides/PIAA week5/QA7FailureCasesWeek5';
import { QA8MetricChoiceWeek5 } from '../slides/PIAA week5/QA8MetricChoiceWeek5';

// Helper to assign static slideId properties to components
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverSlide = defineSlide(CoverWeek5, 'CoverWeek5');
const PipelineSlide = defineSlide(PipelineWeek5, 'PipelineWeek5');
const RecapAgendaSlide = defineSlide(RecapAgendaWeek5, 'RecapAgendaWeek5');
const NoiseCeilingSlide = defineSlide(NoiseCeilingWeek5, 'NoiseCeilingWeek5');
const EmotionRoadmapSlide = defineSlide(EmotionRoadmapWeek5, 'EmotionRoadmapWeek5');
const EmotionHelpSetupSlide = defineSlide(EmotionHelpSetupWeek4, 'EmotionHelpSetupWeek5');
const EmotionHelpsEveryoneSlide = defineSlide(EmotionHelpsEveryoneWeek4, 'EmotionHelpsEveryoneWeek5');
const WhatDecidesWhoSlide = defineSlide(WhatDecidesWhoWeek4, 'WhatDecidesWhoWeek5');
const ThresholdOrDoseSlide = defineSlide(ThresholdOrDoseWeek4, 'ThresholdOrDoseWeek5');
const DirectConfoundSlide = defineSlide(DirectConfoundWeek4, 'DirectConfoundWeek5');
const WhyArtDifferentSlide = defineSlide(WhyArtDifferentWeek4, 'WhyArtDifferentWeek5');
const TestingArtExplanationsSlide = defineSlide(TestingArtExplanationsWeek4, 'TestingArtExplanationsWeek5');
const WhichImagesBenefitSlide = defineSlide(WhichImagesBenefitWeek4, 'WhichImagesBenefitWeek5');
const CaseStudySlide = defineSlide(CaseStudyWeek4, 'CaseStudyWeek5');
const Qwen4BComparisonSlide = defineSlide(Qwen4BComparisonWeek4, 'Qwen4BComparisonWeek5');
const RedundancyTrendSlide = defineSlide(RedundancyTrendWeek4, 'RedundancyTrendWeek5');
const SummarySlide = defineSlide(SummaryWeek4, 'SummaryWeek5');
const QuestionsSlide = defineSlide(QuestionsWeek4, 'QuestionsWeek5');
const ThankYouSlide = defineSlide(ThankYouWeek4, 'ThankYouWeek5');

// Backup slides
const QA1Slide = defineSlide(QA1DeltaComputationWeek5, 'QA1DeltaComputationWeek5');
const QA2Slide = defineSlide(QA2DirectConfoundWeek5, 'QA2DirectConfoundWeek5');
const QA3Slide = defineSlide(QA3DataLeakageWeek5, 'QA3DataLeakageWeek5');
const QA4Slide = defineSlide(QA4EmoRExactlyWeek5, 'QA4EmoRExactlyWeek5');
const QA5Slide = defineSlide(QA5PValueInterpretationWeek5, 'QA5PValueInterpretationWeek5');
const QA6Slide = defineSlide(QA6MultipleComparisonsWeek5, 'QA6MultipleComparisonsWeek5');
const QA7Slide = defineSlide(QA7FailureCasesWeek5, 'QA7FailureCasesWeek5');
const QA8Slide = defineSlide(QA8MetricChoiceWeek5, 'QA8MetricChoiceWeek5');

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Title',
    slides: [CoverSlide],
  },
  {
    label: 'Pipeline',
    slides: [PipelineSlide],
  },
  {
    label: 'Agenda',
    slides: [RecapAgendaSlide],
  },
  {
    label: 'Noise Ceiling',
    slides: [NoiseCeilingSlide],
  },
  {
    label: 'Emotion Analysis',
    slides: [
      EmotionRoadmapSlide,
      EmotionHelpSetupSlide,
      EmotionHelpsEveryoneSlide,
      WhatDecidesWhoSlide,
      ThresholdOrDoseSlide,
      DirectConfoundSlide,
      WhyArtDifferentSlide,
      TestingArtExplanationsSlide,
      WhichImagesBenefitSlide,
      CaseStudySlide,
    ],
  },
  {
    label: 'Qwen4B',
    slides: [
      Qwen4BComparisonSlide,
      RedundancyTrendSlide,
    ],
  },
  {
    label: 'Summary & Qs',
    slides: [
      SummarySlide,
      QuestionsSlide,
      ThankYouSlide,
    ],
  },
  {
    label: 'Q&A Backup',
    slides: [
      QA1Slide,
      QA2Slide,
      QA3Slide,
      QA4Slide,
      QA5Slide,
      QA6Slide,
      QA7Slide,
      QA8Slide,
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
