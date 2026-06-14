import type { BilingualText } from '../types';

export const ourApproachHeader = {
  label: 'Aingo',
  title: "AiQ's",
  highlight: 'Approach.',
  tagline: {
    th: 'โฟกัสการแก้ปัญหาด้วย Ingestion · Preparation Pipeline',
    en: 'Focused on solving the problem through the ingestion and preparation pipeline.',
  } as BilingualText,
} as const;

export interface ApproachCard {
  gap: string;
  gapColor: string;
  gapRgb: string;
  title: string;
  desc: BilingualText;
  grad: [string, string];
  ringColor: string;
  hoverShadow: string;
  cardDelay: number;
  iconScale?: number;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'Layers' | 'Hyde' | 'Sync';
}

export const approachCards: ApproachCard[] = [
  {
    gap: 'The Ingestion Gap',
    gapColor: '#EF4444',
    gapRgb: '239,68,68',
    title: 'Ingestion Quality',
    desc: {
      th: 'Pipeline ที่เน้นการสกัดเนื้อหาอย่างละเอียดด้วย Docling และ HybridChunker เพื่อรักษา hierarchy ของเอกสาร',
      en: 'A pipeline focused on fine-grained extraction with Docling and HybridChunker to preserve document hierarchy.',
    },
    grad: ['#7C3AED', '#A855F7'],
    ringColor: 'rgba(196,181,253,0.5)',
    hoverShadow: '0 16px 48px rgba(124, 58, 237,0.28)',
    cardDelay: 0.28,
    iconScale: 1.08,
    iconKey: 'Layers',
  },
  {
    gap: 'The Retrieval Gap',
    gapColor: '#F59E0B',
    gapRgb: '245,158,11',
    title: 'HyDE Retrieval',
    desc: {
      th: 'ใช้ Hypothetical Document Embeddings (HyDE) เพื่อขยายคำค้นให้ใกล้กับภาษาของเอกสารเทคนิคและเพิ่มความแม่นยำในการค้นคืน',
      en: 'Use Hypothetical Document Embeddings (HyDE) to expand queries toward the language of technical documents and improve retrieval accuracy.',
    },
    grad: ['#06B6D4', '#3B82F6'],
    ringColor: 'rgba(147,210,249,0.5)',
    hoverShadow: '0 16px 48px rgba(6,182,212,0.28)',
    cardDelay: 0.42,
    iconScale: 3.35,
    iconKey: 'Hyde',
  },
  {
    gap: 'The Synchronization Gap',
    gapColor: '#10B981',
    gapRgb: '16,185,129',
    title: 'Real-time Sync',
    desc: {
      th: 'Event Driven Pipeline คอยอัปเดทข้อมูลใน RAG อยู่ตลอดเวลาแบบอัตโนมัติ',
      en: 'An event-driven pipeline keeps the RAG data automatically up to date at all times.',
    },
    grad: ['#10B981', '#059669'],
    ringColor: 'rgba(110,231,183,0.5)',
    hoverShadow: '0 16px 48px rgba(16,185,129,0.28)',
    cardDelay: 0.56,
    iconScale: 1.08,
    iconKey: 'Sync',
  },
];
