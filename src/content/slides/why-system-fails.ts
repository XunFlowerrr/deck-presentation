import type { BilingualText } from '../types';

export const whySystemFailsHeader = {
  label: 'Aingo',
  title: 'Why Existing',
  highlight: 'System Fails.',
  tagline: 'The Core Technical Challenge',
} as const;

export interface GapItem {
  num: string;
  /** English gap name (used as Pill label) */
  en: string;
  /** Short Thai description heading */
  th: string;
  /** English short description heading */
  enText: string;
  /** Full Thai description */
  desc: BilingualText;
  accent: string;
  accentRgb: string;
}

export const gaps: GapItem[] = [
  {
    num: '01',
    en: 'The Ingestion Gap',
    th: 'ข้อมูลไม่เป็นระเบียบ',
    enText: 'The data is disorganized',
    desc: {
      th: 'ขาด data pipeline ที่ดีพอจะจัดการกับ Messy Data จากแหล่งข้อมูลองค์กร ส่งผลต่อความแม่นยำของ RAG',
      en: 'There is no robust data pipeline to handle messy data from enterprise sources, which directly hurts RAG accuracy.',
    },
    accent: '#EF4444',
    accentRgb: '239,68,68',
  },
  {
    num: '02',
    en: 'The Contextual Gap',
    th: 'การแตกส่วนของบริบท',
    enText: 'Context gets fragmented',
    desc: {
      th: 'Generic RAG ใช้การแบ่งแบบ Naive Chunking ไม่สนใจโครงสร้างและความหมายของเอกสาร',
      en: 'Generic RAG uses naive chunking that ignores document structure and meaning.',
    },
    accent: '#F59E0B',
    accentRgb: '245,158,11',
  },
  {
    num: '03',
    en: 'The Synchronization Gap',
    th: 'ไม่มีการติดตามการเปลี่ยนแปลง',
    enText: 'No change tracking',
    desc: {
      th: 'RAG ทั่วไปมองฐานความรู้เป็น Static Dataset ขาด Event-driven architecture ทำให้ข้อมูลไม่อัปเดท',
      en: 'Conventional RAG treats the knowledge base as a static dataset and lacks an event-driven architecture, so the data goes stale.',
    },
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
  },
];
