/**
 * Deck configuration for Progress Update #4 presentation.
 * 28 slides following the user's explicit presentation order.
 */

import type { DeckSection, SlideComponent } from './types';

// Import Progress Meeting #4 slide components
import { CoverWeek4 } from '../slides/PIAA week4/CoverWeek4';
import { PipelineWeek4 } from '../slides/PIAA week4/PipelineWeek4';
import { RecapAgendaWeek4 } from '../slides/PIAA week4/RecapAgendaWeek4';
import { NoiseCeilingQuestionWeek4 } from '../slides/PIAA week4/NoiseCeilingQuestionWeek4';
import { HumanDisagreementWeek4 } from '../slides/PIAA week4/HumanDisagreementWeek4';
import { EmotionHelpFramingWeek4 } from '../slides/PIAA week4/EmotionHelpFramingWeek4';
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
import { QA1DeltaComputationWeek4 } from '../slides/PIAA week4/QA1DeltaComputationWeek4';
import { QA2DirectConfoundWeek4 } from '../slides/PIAA week4/QA2DirectConfoundWeek4';
import { QA3DataLeakageWeek4 } from '../slides/PIAA week4/QA3DataLeakageWeek4';
import { QA4EmoRExactlyWeek4 } from '../slides/PIAA week4/QA4EmoRExactlyWeek4';
import { QA5PValueInterpretationWeek4 } from '../slides/PIAA week4/QA5PValueInterpretationWeek4';
import { QA6MultipleComparisonsWeek4 } from '../slides/PIAA week4/QA6MultipleComparisonsWeek4';
import { QA7FailureCasesWeek4 } from '../slides/PIAA week4/QA7FailureCasesWeek4';
import { QA8MetricChoiceWeek4 } from '../slides/PIAA week4/QA8MetricChoiceWeek4';

// Helper to assign static slideId properties to components
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const CoverSlide = defineSlide(CoverWeek4, 'CoverWeek4');
const PipelineSlide = defineSlide(PipelineWeek4, 'PipelineWeek4');
const RecapAgendaSlide = defineSlide(RecapAgendaWeek4, 'RecapAgendaWeek4');
const NoiseCeilingQuestionSlide = defineSlide(NoiseCeilingQuestionWeek4, 'NoiseCeilingQuestionWeek4');
const HumanDisagreementSlide = defineSlide(HumanDisagreementWeek4, 'HumanDisagreementWeek4');
const EmotionHelpFramingSlide = defineSlide(EmotionHelpFramingWeek4, 'EmotionHelpFramingWeek4');
const EmotionHelpSetupSlide = defineSlide(EmotionHelpSetupWeek4, 'EmotionHelpSetupWeek4');
const EmotionHelpsEveryoneSlide = defineSlide(EmotionHelpsEveryoneWeek4, 'EmotionHelpsEveryoneWeek4');
const WhatDecidesWhoSlide = defineSlide(WhatDecidesWhoWeek4, 'WhatDecidesWhoWeek4');
const ThresholdOrDoseSlide = defineSlide(ThresholdOrDoseWeek4, 'ThresholdOrDoseWeek4');
const DirectConfoundSlide = defineSlide(DirectConfoundWeek4, 'DirectConfoundWeek4');
const WhyArtDifferentSlide = defineSlide(WhyArtDifferentWeek4, 'WhyArtDifferentWeek4');
const TestingArtExplanationsSlide = defineSlide(TestingArtExplanationsWeek4, 'TestingArtExplanationsWeek4');
const WhichImagesBenefitSlide = defineSlide(WhichImagesBenefitWeek4, 'WhichImagesBenefitWeek4');
const CaseStudySlide = defineSlide(CaseStudyWeek4, 'CaseStudyWeek4');
const Qwen4BComparisonSlide = defineSlide(Qwen4BComparisonWeek4, 'Qwen4BComparisonWeek4');
const RedundancyTrendSlide = defineSlide(RedundancyTrendWeek4, 'RedundancyTrendWeek4');
const SummarySlide = defineSlide(SummaryWeek4, 'SummaryWeek4');
const QuestionsSlide = defineSlide(QuestionsWeek4, 'QuestionsWeek4');
const ThankYouSlide = defineSlide(ThankYouWeek4, 'ThankYouWeek4');

// Backup slides
const QA1Slide = defineSlide(QA1DeltaComputationWeek4, 'QA1DeltaComputationWeek4');
const QA2Slide = defineSlide(QA2DirectConfoundWeek4, 'QA2DirectConfoundWeek4');
const QA3Slide = defineSlide(QA3DataLeakageWeek4, 'QA3DataLeakageWeek4');
const QA4Slide = defineSlide(QA4EmoRExactlyWeek4, 'QA4EmoRExactlyWeek4');
const QA5Slide = defineSlide(QA5PValueInterpretationWeek4, 'QA5PValueInterpretationWeek4');
const QA6Slide = defineSlide(QA6MultipleComparisonsWeek4, 'QA6MultipleComparisonsWeek4');
const QA7Slide = defineSlide(QA7FailureCasesWeek4, 'QA7FailureCasesWeek4');
const QA8Slide = defineSlide(QA8MetricChoiceWeek4, 'QA8MetricChoiceWeek4');

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
