import type { BilingualText } from '../types';

export interface TOCItem {
  id: string;
  title: string;
  subtitle: string;
  /** 1-based slide number this entry jumps to (as a string for display). */
  page: string;
}

export const tocItems: TOCItem[] = [
  {
    id: '01',
    title: 'Problem Definition',
    subtitle: 'Identifying the limitations in our legacy systems.',
    page: '03',
  },
  {
    id: '02',
    title: 'Proposed Approach',
    subtitle: 'A modern, agentic approach to knowledge retrieval.',
    page: '09',
  },
  {
    id: '03',
    title: 'System Design & Implementation',
    subtitle: 'Architecture, microservices, and AI pipelines.',
    page: '13',
  },
  {
    id: '04',
    title: 'Testing & Evaluation',
    subtitle: 'Validation metrics and performance results.',
    page: '23',
  },
  {
    id: '05',
    title: 'Team & Timeline',
    subtitle: 'Project roadmap and execution plan.',
    page: '25',
  },
];

export const tocHeader = {
  label: 'Aingo',
  title: 'Table of',
  highlight: 'Contents.',
  tagline: 'Presentation Agenda',
} as const;

export const tocScenario: BilingualText = {
  th: '',
  en: '',
};
