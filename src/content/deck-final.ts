/**
 * Deck configuration for the Final Presentation: Emotion-Mediated PIAA.
 * 21 slides + 6 Q&A backup slides.
 */

import type { DeckSection, SlideComponent } from './types';

// Import slide components
import { CoverSlide } from '../slides/final/CoverSlide';
import { AgendaSlide } from '../slides/final/AgendaSlide';
import { IaaPiaaSlide } from '../slides/final/IaaPiaaSlide';
import { WhyEmotionSlide } from '../slides/final/WhyEmotionSlide';
import { IdeaSlide } from '../slides/final/IdeaSlide';
import { PipelineSlide } from '../slides/final/PipelineSlide';
import { InterpretSlide } from '../slides/final/InterpretSlide';
import { DatasetSampleSlide } from '../slides/final/DatasetSampleSlide';
import { DatasetProtocolSlide } from '../slides/final/DatasetProtocolSlide';
import { TransitionSlide } from '../slides/final/TransitionSlide';
import { StudyOverviewSlide } from '../slides/final/StudyOverviewSlide';
import { Finding1Slide } from '../slides/final/Finding1Slide';
import { Finding3Slide } from '../slides/final/Finding3Slide';
import { QuestionTransitionSlide } from '../slides/final/QuestionTransitionSlide';
import { Finding4Slide } from '../slides/final/Finding4Slide';
import { Finding2aSlide } from '../slides/final/Finding2aSlide';
import { Finding2bSlide } from '../slides/final/Finding2bSlide';
import { Finding6Slide } from '../slides/final/Finding6Slide';
import { Finding8Slide } from '../slides/final/Finding8Slide';
import { PlaceboSlide } from '../slides/final/PlaceboSlide';
import { SummarySlide } from '../slides/final/SummarySlide';
import { FutureWorkSlide } from '../slides/final/FutureWorkSlide';

// Import Q&A backups
import {
  QaaDecompositionSlide,
  QaaCeilingSlide,
  QaaProtocolSlide,
  QaaPartialCorrSlide,
  QaaDesignChoiceSlide,
  QaaRelatedWorkSlide
} from '../slides/final/QABackupSlides';

// Helper to assign static slideId properties to components
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const Cover = defineSlide(CoverSlide, 'Cover');
const Agenda = defineSlide(AgendaSlide, 'Agenda');
const IaaPiaa = defineSlide(IaaPiaaSlide, 'IaaPiaa');
const WhyEmotion = defineSlide(WhyEmotionSlide, 'WhyEmotion');
const Idea = defineSlide(IdeaSlide, 'Idea');
const Pipeline = defineSlide(PipelineSlide, 'Pipeline');
const Interpret = defineSlide(InterpretSlide, 'Interpret');
const DatasetSample = defineSlide(DatasetSampleSlide, 'DatasetSample');
const DatasetProtocol = defineSlide(DatasetProtocolSlide, 'DatasetProtocol');
const Transition = defineSlide(TransitionSlide, 'Transition');
const StudyOverview = defineSlide(StudyOverviewSlide, 'StudyOverview');
const Finding1 = defineSlide(Finding1Slide, 'Finding1');
const Finding3 = defineSlide(Finding3Slide, 'Finding3');
const QuestionTransition = defineSlide(QuestionTransitionSlide, 'QuestionTransition');
const Finding4 = defineSlide(Finding4Slide, 'Finding4');
const Finding2a = defineSlide(Finding2aSlide, 'Finding2a');
const Finding2b = defineSlide(Finding2bSlide, 'Finding2b');
const Finding6 = defineSlide(Finding6Slide, 'Finding6');
const Finding8 = defineSlide(Finding8Slide, 'Finding8');
const Placebo = defineSlide(PlaceboSlide, 'Placebo');
const Summary = defineSlide(SummarySlide, 'Summary');
const FutureWork = defineSlide(FutureWorkSlide, 'FutureWork');

// Backups
const QaaDecomposition = defineSlide(QaaDecompositionSlide, 'QaaDecomposition');
const QaaCeiling = defineSlide(QaaCeilingSlide, 'QaaCeiling');
const QaaProtocol = defineSlide(QaaProtocolSlide, 'QaaProtocol');
const QaaPartialCorr = defineSlide(QaaPartialCorrSlide, 'QaaPartialCorr');
const QaaDesignChoice = defineSlide(QaaDesignChoiceSlide, 'QaaDesignChoice');
const QaaRelatedWork = defineSlide(QaaRelatedWorkSlide, 'QaaRelatedWork');

const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [Cover, Agenda],
  },
  {
    label: 'Problem & Idea',
    slides: [IaaPiaa, WhyEmotion, Idea, Pipeline, Interpret],
  },
  {
    label: 'Evaluation & Baselines',
    slides: [DatasetSample, DatasetProtocol, Transition, StudyOverview, Finding1, Finding3],
  },
  {
    label: 'Mechanisms',
    slides: [QuestionTransition, Finding4, Finding2a, Finding2b],
  },
  {
    label: 'Ceilings & Cold-Start',
    slides: [Finding6, Finding8],
  },
  {
    label: 'Validity',
    slides: [Placebo],
  },
  {
    label: 'Summary & Outro',
    slides: [Summary, FutureWork],
  },
];

const backupSlides: SlideComponent[] = [
  QaaDecomposition,
  QaaCeiling,
  QaaProtocol,
  QaaPartialCorr,
  QaaDesignChoice,
  QaaRelatedWork,
];

export const slides = [...deck.flatMap((s) => s.slides), ...backupSlides];

export const sections: { label: string; count: number }[] = deck.map((s) => ({
  label: s.label,
  count: s.slides.length,
}));

export const trackerSlideCount: number = deck.reduce(
  (acc, s) => acc + s.slides.length,
  0,
);
