import type { BilingualText } from '../types';
import { relaxImg, frustImg } from '../assets';

export const expectedResultsHeader = {
  label: 'Aingo',
  title: 'Expected',
  highlight: 'Results.',
  tagline: { th: 'ผลที่ได้จากการพัฒนา', en: 'Development outcomes' } as BilingualText,
} as const;

export const images = { relaxImg, frustImg };

export interface BadgeItem {
  label: string;
  color: string;
  rgb: string;
}

export const academicBadges: BadgeItem[] = [
  { label: 'Validated Architecture', color: '#7C3AED', rgb: '124,58,237' },
  { label: 'Data Pipeline Expertise', color: '#7C3AED', rgb: '124,58,237' },
  { label: 'RAG Optimization', color: '#7C3AED', rgb: '124,58,237' },
];

export const industrialBadges: BadgeItem[] = [
  { label: 'Efficiency', color: '#10B981', rgb: '16,185,129' },
  { label: 'Knowledge Consolidation', color: '#10B981', rgb: '16,185,129' },
  { label: 'Streamlined Onboarding', color: '#10B981', rgb: '16,185,129' },
];

export const beforeAfterLabels = {
  before: { th: 'ก่อนใช้ระบบ', en: 'Before the system' } as BilingualText,
  after: { th: 'หลังใช้ระบบ', en: 'After the system' } as BilingualText,
};

export const benefitItems: { label: BilingualText }[] = [
  { label: { th: 'ลดเวลาค้นหาข้อมูล', en: 'Reduced search time' } },
  { label: { th: 'ข้อมูลถูกต้องและอัปเดต', en: 'Accurate, up-to-date information' } },
  { label: { th: 'การเริ่มงานของพนักงานใหม่ง่ายขึ้น', en: 'Faster new-employee onboarding' } },
];
