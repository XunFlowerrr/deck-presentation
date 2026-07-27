/**
 * Deck configuration for the Final Presentation: Emotion-Mediated PIAA.
 * Aligned with Speaking Script v4:
 * - Keeps 3 background slides (IaaPiaa, Problem, Idea)
 * - 17 main slides matching script flow
 * - 7 Q&A backup slides (including Finding 5 & Finding 10)
 */

import type { DeckSection, SlideComponent } from './types';

// Import slide components
import { CoverSlide } from '../slides/final/CoverSlide';
import { AgendaSlide } from '../slides/final/AgendaSlide';
import { IaaPiaaSlide } from '../slides/final/IaaPiaaSlide';
import { ProblemSlide } from '../slides/final/ProblemSlide';
import { IdeaSlide } from '../slides/final/IdeaSlide';
import { PipelineSlide } from '../slides/final/PipelineSlide';
import { DatasetProtocolSlide } from '../slides/final/DatasetProtocolSlide';
import { Finding1Slide } from '../slides/final/Finding1Slide';
import { Finding3Slide } from '../slides/final/Finding3Slide';
import { TransitionSlide } from '../slides/final/TransitionSlide';
import { Finding4Slide } from '../slides/final/Finding4Slide';
import { Finding2Slide } from '../slides/final/Finding2Slide';
import { Finding5Slide } from '../slides/final/Finding5Slide';
import { Finding6Slide } from '../slides/final/Finding6Slide';
import { Finding8Slide } from '../slides/final/Finding8Slide';
import { PlaceboSlide } from '../slides/final/PlaceboSlide';
import { Finding10Slide } from '../slides/final/Finding10Slide';
import { SummarySlide } from '../slides/final/SummarySlide';
import { FutureWorkSlide } from '../slides/final/FutureWorkSlide';

// Import Q&A backups
import {
  QaaDecompositionSlide,
  QaaCeilingSlide,
  QaaProtocolSlide,
  QaaPartialCorrSlide,
  QaaDesignChoiceSlide
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
const Problem = defineSlide(ProblemSlide, 'Problem');
const Idea = defineSlide(IdeaSlide, 'Idea');
const Pipeline = defineSlide(PipelineSlide, 'Pipeline');
const DatasetProtocol = defineSlide(DatasetProtocolSlide, 'DatasetProtocol');
const Finding1 = defineSlide(Finding1Slide, 'Finding1');
const Finding3 = defineSlide(Finding3Slide, 'Finding3');
const Transition = defineSlide(TransitionSlide, 'Transition');
const Finding4 = defineSlide(Finding4Slide, 'Finding4');
const Finding2 = defineSlide(Finding2Slide, 'Finding2');
const Finding5 = defineSlide(Finding5Slide, 'Finding5');
const Finding6 = defineSlide(Finding6Slide, 'Finding6');
const Finding8 = defineSlide(Finding8Slide, 'Finding8');
const Placebo = defineSlide(PlaceboSlide, 'Placebo');
const Finding10 = defineSlide(Finding10Slide, 'Finding10');
const Summary = defineSlide(SummarySlide, 'Summary');
const FutureWork = defineSlide(FutureWorkSlide, 'FutureWork');

// Backups
const QaaDecomposition = defineSlide(QaaDecompositionSlide, 'QaaDecomposition');
const QaaCeiling = defineSlide(QaaCeilingSlide, 'QaaCeiling');
const QaaProtocol = defineSlide(QaaProtocolSlide, 'QaaProtocol');
const QaaPartialCorr = defineSlide(QaaPartialCorrSlide, 'QaaPartialCorr');
const QaaDesignChoice = defineSlide(QaaDesignChoiceSlide, 'QaaDesignChoice');

const deck: DeckSection[] = [
  {
    label: 'Opening',
    slides: [Cover, Agenda],
  },
  {
    label: 'Background & Idea',
    slides: [IaaPiaa, Problem, Idea],
  },
  {
    label: 'Block 1: Pipeline & Data',
    slides: [Pipeline, DatasetProtocol],
  },
  {
    label: 'Block 2: Does It Work',
    slides: [Finding1, Finding3, Transition],
  },
  {
    label: 'Block 3: When & Why',
    slides: [Finding4, Finding2],
  },
  {
    label: 'Block 4: How Far',
    slides: [Finding6, Finding8],
  },
  {
    label: 'Block 5: Is Gain Real',
    slides: [Placebo],
  },
  {
    label: 'Closing',
    slides: [Summary, FutureWork],
  },
];

const backupSlides: SlideComponent[] = [
  Finding5,
  Finding10,
  QaaDecomposition,
  QaaCeiling,
  QaaProtocol,
  QaaPartialCorr,
  QaaDesignChoice,
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

