/**
 * Deck configuration — the single place that controls which slides appear in
 * which order and how they are grouped into sections.
 *
 * To reorder slides: move a line within the section's slides array.
 * To add a slide:    create the .tsx file, import it here, add it to a section.
 * To add a section:  add a new object to the deck array below.
 *
 * Section counts for the progress tracker are derived automatically.
 */

import type { DeckSection } from './types';

import { Cover           } from '../slides/Cover';
import { TableOfContents } from '../slides/TableOfContents';

import { ProblemDivider  } from '../slides/ProblemDivider';
import { ProblemOverview } from '../slides/ProblemOverview';
import { TheProblem      } from '../slides/TheProblem';
import { WhySystemFails  } from '../slides/WhySystemFails';
import { SystemEvolution } from '../slides/SystemEvolution';

import { ApproachDivider  } from '../slides/ApproachDivider';
import { ObjectiveScope   } from '../slides/ObjectiveScope';
import { OurApproach      } from '../slides/OurApproach';
import { ExpectedResults  } from '../slides/ExpectedResults';

import { SystemDivider     } from '../slides/SystemDivider';
import { DemoVideo         } from '../slides/DemoVideo';
import { SolutionOverview  } from '../slides/SolutionOverview';
import { ServicesBreakdown } from '../slides/ServicesBreakdown';
import { SharePointSync    } from '../slides/SharePointSync';
import { IngestionPipeline } from '../slides/IngestionPipeline';
import { ReActFlow         } from '../slides/ReActFlow';
import { HydeDensityGap    } from '../slides/HydeDensityGap';
import { InteractiveRAG    } from '../slides/InteractiveRAG';
import { OperationalModes  } from '../slides/OperationalModes';
import { AttachmentFlow    } from '../slides/AttachmentFlow';
import { WebCapabilities   } from '../slides/WebCapabilities';
import { WebCapabilities2  } from '../slides/WebCapabilities2';

import { EvalDivider  } from '../slides/EvalDivider';
import { EvalResults  } from '../slides/EvalResults';

import { TeamDivider      } from '../slides/TeamDivider';
import { MeetTheTeam      } from '../slides/MeetTheTeam';
import { ProjectTimeline  } from '../slides/ProjectTimeline';
import { FutureWork       } from '../slides/FutureWork';

// ── Deck ───────────────────────────────────────────────────────────────────
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [Cover, TableOfContents],
  },
  {
    label: 'Problem',
    slides: [ProblemDivider, ProblemOverview, TheProblem, WhySystemFails, SystemEvolution],
  },
  {
    label: 'Approach',
    slides: [ApproachDivider, ObjectiveScope, OurApproach, ExpectedResults],
  },
  {
    label: 'System',
    slides: [
      SystemDivider,
      DemoVideo,
      SolutionOverview,
      ServicesBreakdown,
      SharePointSync,
      IngestionPipeline,
      ReActFlow,
      HydeDensityGap,
      InteractiveRAG,
      OperationalModes,
      AttachmentFlow,
      WebCapabilities,
      WebCapabilities2,
    ],
  },
  {
    label: 'Testing',
    slides: [EvalDivider, EvalResults],
  },
  {
    label: 'Team',
    slides: [TeamDivider, MeetTheTeam, ProjectTimeline, FutureWork],
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
