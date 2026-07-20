/**
 * Deck configuration for Week 5 (Progress Update #4) presentation.
 * 28 slides following the exact user presentation order.
 */

import type { DeckSection, SlideComponent } from './types';

// Import Week 5 slide components strictly from PIAA week5
import { CoverWeek5 } from '../slides/PIAA week5/CoverWeek5';
import { PipelineWeek5 } from '../slides/PIAA week5/PipelineWeek5';
import { RecapAgendaWeek5 } from '../slides/PIAA week5/RecapAgendaWeek5';
import { NoiseCeilingQuestionWeek5 } from '../slides/PIAA week5/NoiseCeilingQuestionWeek5';
import { HumanDisagreementWeek5 } from '../slides/PIAA week5/HumanDisagreementWeek5';
import { EmotionHelpFramingWeek5 } from '../slides/PIAA week5/EmotionHelpFramingWeek5';
import { EmotionHelpSetupWeek5 } from '../slides/PIAA week5/EmotionHelpSetupWeek5';
import { EmotionHelpsEveryoneWeek5 } from '../slides/PIAA week5/EmotionHelpsEveryoneWeek5';
import { WhatDecidesWhoWeek5 } from '../slides/PIAA week5/WhatDecidesWhoWeek5';
import { ThresholdOrDoseWeek5 } from '../slides/PIAA week5/ThresholdOrDoseWeek5';
import { DirectConfoundWeek5 } from '../slides/PIAA week5/DirectConfoundWeek5';
import { WhyArtDifferentWeek5 } from '../slides/PIAA week5/WhyArtDifferentWeek5';
import { TestingArtExplanationsWeek5 } from '../slides/PIAA week5/TestingArtExplanationsWeek5';
import { WhichImagesBenefitWeek5 } from '../slides/PIAA week5/WhichImagesBenefitWeek5';
import { CaseStudyWeek5 } from '../slides/PIAA week5/CaseStudyWeek5';
import { Qwen4BComparisonWeek5 } from '../slides/PIAA week5/Qwen4BComparisonWeek5';
import { RedundancyTrendWeek5 } from '../slides/PIAA week5/RedundancyTrendWeek5';
import { SummaryWeek5 } from '../slides/PIAA week5/SummaryWeek5';
import { QuestionsWeek5 } from '../slides/PIAA week5/QuestionsWeek5';
import { ThankYouWeek5 } from '../slides/PIAA week5/ThankYouWeek5';

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
const NoiseCeilingQuestionSlide = defineSlide(NoiseCeilingQuestionWeek5, 'NoiseCeilingQuestionWeek5');
const HumanDisagreementSlide = defineSlide(HumanDisagreementWeek5, 'HumanDisagreementWeek5');
const EmotionHelpFramingSlide = defineSlide(EmotionHelpFramingWeek5, 'EmotionHelpFramingWeek5');
const EmotionHelpSetupSlide = defineSlide(EmotionHelpSetupWeek5, 'EmotionHelpSetupWeek5');
const EmotionHelpsEveryoneSlide = defineSlide(EmotionHelpsEveryoneWeek5, 'EmotionHelpsEveryoneWeek5');
const WhatDecidesWhoSlide = defineSlide(WhatDecidesWhoWeek5, 'WhatDecidesWhoWeek5');
const ThresholdOrDoseSlide = defineSlide(ThresholdOrDoseWeek5, 'ThresholdOrDoseWeek5');
const DirectConfoundSlide = defineSlide(DirectConfoundWeek5, 'DirectConfoundWeek5');
const WhyArtDifferentSlide = defineSlide(WhyArtDifferentWeek5, 'WhyArtDifferentWeek5');
const TestingArtExplanationsSlide = defineSlide(TestingArtExplanationsWeek5, 'TestingArtExplanationsWeek5');
const WhichImagesBenefitSlide = defineSlide(WhichImagesBenefitWeek5, 'WhichImagesBenefitWeek5');
const CaseStudySlide = defineSlide(CaseStudyWeek5, 'CaseStudyWeek5');
const Qwen4BComparisonSlide = defineSlide(Qwen4BComparisonWeek5, 'Qwen4BComparisonWeek5');
const RedundancyTrendSlide = defineSlide(RedundancyTrendWeek5, 'RedundancyTrendWeek5');
const SummarySlide = defineSlide(SummaryWeek5, 'SummaryWeek5');
const QuestionsSlide = defineSlide(QuestionsWeek5, 'QuestionsWeek5');
const ThankYouSlide = defineSlide(ThankYouWeek5, 'ThankYouWeek5');

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
    slides: [
      NoiseCeilingQuestionSlide,
      HumanDisagreementSlide,
    ],
  },
  {
    label: 'Emotion Analysis',
    slides: [
      EmotionHelpFramingSlide,
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
