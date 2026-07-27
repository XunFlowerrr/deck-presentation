/**
 * Deck configuration for the Final Presentation: Emotion-Mediated PIAA.
 * Fully aligned with Speaking Script v4:
 * - Section Dividers for every section block
 * - Background 3 slides (IaaPiaa, Problem, Idea)
 * - Dedicated Setup slide (Metrics: CCC/SROCC & Direct vs Hybrid) after Dataset
 * - Summary slide with 4 takeaways matching script
 * - FutureWork slide in preferred-v.02 layout with expanded cards
 * - Union of all 8 Q&A Backup slides from both HEAD and preferred-v.02
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
import { SetupSlide } from '../slides/final/SetupSlide';
import { Finding1Slide } from '../slides/final/Finding1Slide';
import { Finding3Slide } from '../slides/final/Finding3Slide';
import { TransitionSlide } from '../slides/final/TransitionSlide';
import { Finding4Slide } from '../slides/final/Finding4Slide';
import { Finding2Slide } from '../slides/final/Finding2Slide';
import { Finding6Slide } from '../slides/final/Finding6Slide';
import { Finding8Slide } from '../slides/final/Finding8Slide';
import { PlaceboSlide } from '../slides/final/PlaceboSlide';
import { SummarySlide } from '../slides/final/SummarySlide';
import { FutureWorkSlide } from '../slides/final/FutureWorkSlide';

// Import Section Dividers
import {
  BackgroundDividerSlide,
  Block1DividerSlide,
  Block2DividerSlide,
  Block3DividerSlide,
  Block4DividerSlide,
  Block5DividerSlide,
  ClosingDividerSlide,
} from '../slides/final/SectionDividers';

// Import Q&A backups (Union of 8 backup slides)
import {
  QaaDecompositionSlide,
  QaaCeilingSlide,
  QaaNoiseCeilingSlide,
  QaaProtocolSlide,
  QaaPartialCorrSlide,
  QaaHyperparamsSlide,
  QaaDesignChoiceSlide,
  QaaRelatedWorkSlide,
} from '../slides/final/QABackupSlides';

// Helper to assign static slideId properties to components
function defineSlide(component: any, slideId: string): SlideComponent {
  const slide = component as SlideComponent;
  slide.slideId = slideId;
  return slide;
}

const Cover = defineSlide(CoverSlide, 'Cover');
const Agenda = defineSlide(AgendaSlide, 'Agenda');

const BackgroundDivider = defineSlide(BackgroundDividerSlide, 'BackgroundDivider');
const IaaPiaa = defineSlide(IaaPiaaSlide, 'IaaPiaa');
const Problem = defineSlide(ProblemSlide, 'Problem');
const Idea = defineSlide(IdeaSlide, 'Idea');

const Block1Divider = defineSlide(Block1DividerSlide, 'Block1Divider');
const Pipeline = defineSlide(PipelineSlide, 'Pipeline');
const DatasetProtocol = defineSlide(DatasetProtocolSlide, 'DatasetProtocol');
const Setup = defineSlide(SetupSlide, 'Setup');

const Block2Divider = defineSlide(Block2DividerSlide, 'Block2Divider');
const Finding1 = defineSlide(Finding1Slide, 'Finding1');
const Finding3 = defineSlide(Finding3Slide, 'Finding3');
const Transition = defineSlide(TransitionSlide, 'Transition');

const Block3Divider = defineSlide(Block3DividerSlide, 'Block3Divider');
const Finding4 = defineSlide(Finding4Slide, 'Finding4');
const Finding2 = defineSlide(Finding2Slide, 'Finding2');

const Block4Divider = defineSlide(Block4DividerSlide, 'Block4Divider');
const Finding6 = defineSlide(Finding6Slide, 'Finding6');
const Finding8 = defineSlide(Finding8Slide, 'Finding8');

const Block5Divider = defineSlide(Block5DividerSlide, 'Block5Divider');
const Placebo = defineSlide(PlaceboSlide, 'Placebo');

const ClosingDivider = defineSlide(ClosingDividerSlide, 'ClosingDivider');
const Summary = defineSlide(SummarySlide, 'Summary');
const FutureWork = defineSlide(FutureWorkSlide, 'FutureWork');

// Q&A Backups (8 Union Slides)
const QaaDecomposition = defineSlide(QaaDecompositionSlide, 'QaaDecomposition');
const QaaCeiling = defineSlide(QaaCeilingSlide, 'QaaCeiling');
const QaaNoiseCeiling = defineSlide(QaaNoiseCeilingSlide, 'QaaNoiseCeiling');
const QaaProtocol = defineSlide(QaaProtocolSlide, 'QaaProtocol');
const QaaPartialCorr = defineSlide(QaaPartialCorrSlide, 'QaaPartialCorr');
const QaaHyperparams = defineSlide(QaaHyperparamsSlide, 'QaaHyperparams');
const QaaDesignChoice = defineSlide(QaaDesignChoiceSlide, 'QaaDesignChoice');
const QaaRelatedWork = defineSlide(QaaRelatedWorkSlide, 'QaaRelatedWork');

const deck: DeckSection[] = [
  {
    label: 'Opening',
    slides: [Cover, Agenda],
  },
  {
    label: 'Background & Idea',
    slides: [BackgroundDivider, IaaPiaa, Problem, Idea],
  },
  {
    label: 'Block 1: Pipeline & Data',
    slides: [Block1Divider, Pipeline, DatasetProtocol, Setup],
  },
  {
    label: 'Block 2: Does It Work',
    slides: [Block2Divider, Finding1, Finding3, Transition],
  },
  {
    label: 'Block 3: When & Why',
    slides: [Block3Divider, Finding4, Finding2],
  },
  {
    label: 'Block 4: How Far',
    slides: [Block4Divider, Finding6, Finding8],
  },
  {
    label: 'Block 5: Is Gain Real',
    slides: [Block5Divider, Placebo],
  },
  {
    label: 'Closing',
    slides: [ClosingDivider, Summary, FutureWork],
  },
];

const backupSlides: SlideComponent[] = [
  QaaDecomposition,
  QaaCeiling,
  QaaNoiseCeiling,
  QaaProtocol,
  QaaPartialCorr,
  QaaHyperparams,
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
