import type { BilingualText } from '../types';
import { keywordImg, ragImg, proposeImg } from '../assets';

export const systemEvolutionHeader = {
  label: 'Aingo',
  title: 'System',
  highlight: 'Evolution.',
  tagline: 'The Core Technical Challenge',
} as const;

export interface LevelItem {
  num: string;
  label: string;
  accent: string;
  accentRgb: string;
  status: string;
  desc: BilingualText;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'LegacySearch' | 'NaiveRag' | 'ProposedSystem';
  image: string;
}

export const levels: LevelItem[] = [
  {
    num: '01',
    label: 'Legacy Keyword Search',
    accent: '#EF4444',
    accentRgb: '239,68,68',
    status: 'Legacy',
    desc: {
      th: 'ปัญหา: ใช้ Keyword ค้นหาเอกสาร ทำให้ไม่รู้ intent จริงๆ ของผู้ใช้ ได้ผลเป็นเอกสารมากมาย แต่ไม่ตรงกับที่หา',
      en: 'Problem: keyword search only matches terms, not user intent, so it returns many documents but not the right ones.',
    },
    iconKey: 'LegacySearch',
    image: keywordImg,
  },
  {
    num: '02',
    label: 'Naive / Generic RAG',
    accent: '#F59E0B',
    accentRgb: '245,158,11',
    status: 'Partial',
    desc: {
      th: 'ปัญหา: ตอบคำถามด้วย Natural-Language ได้ แต่ยังขาด Context/Meta ที่ดีของข้อมูล',
      en: 'Problem: it can answer in natural language, but still lacks strong contextual and metadata grounding.',
    },
    iconKey: 'NaiveRag',
    image: ragImg,
  },
  {
    num: '03',
    label: 'The Proposed System',
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
    status: 'Aingo',
    desc: {
      th: 'อัปเกรด Data Pipeline ทำให้ได้ Data ที่มีความเที่ยงตรง มี Agent ที่ฉลาดสำหรับการตอบคำถาม',
      en: 'Upgrading the data pipeline produces higher-fidelity data and enables smarter agents for question answering.',
    },
    iconKey: 'ProposedSystem',
    image: proposeImg,
  },
];
