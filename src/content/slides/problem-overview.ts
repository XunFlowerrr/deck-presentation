import type { BilingualText } from '../types';

export const problemOverviewHeader = {
  label: 'Section',
  title: 'Back',
  highlight: 'grounds.',
} as const;

export interface OverviewCard {
  title: string;
  titleColor: string;
  pillLabel?: string;
  pillColor?: string;
  pillRgb?: string;
  body: BilingualText;
}

export const overviewCards: OverviewCard[] = [
  {
    title: 'Speed & Adaptability',
    titleColor: '#7C3AED',
    body: {
      th: 'ในปัจจุบัน การที่ธุรกิจจะอยู่รอดในโลกที่เปลี่ยนแปลงย่างรวดเร็วได้ ตัวธุระกิจเองก็ต้องสามารถที่จะปรับตัวได้อย่างรวดเร็ว ส่งมอบผลิตภัณฑ์ได้ทันต่อการเปลี่ยนแปลง',
      en: "In today's fast-changing world, businesses can only survive by adapting quickly and delivering products in step with that change.",
    },
  },
  {
    title: 'The Paradox',
    titleColor: '#EC4899',
    pillLabel: 'Core Problem',
    pillColor: '#EC4899',
    pillRgb: '236,72,153',
    body: {
      th: 'เมื่อเวลาผ่านไปบริษัทเติบโตขึ้น มีประสบการณ์และความรู้มากขึ้น เราก็คาดหวังว่าประสบการณ์และความรู้เหล่านี้จะช่วยพลักดันบริษัทไปข้างหน้าได้เร็วขึ้น แต่มันกลับช้าลงเพราะความไม่เป็นระเบียบและความกระจัดกระจาย ขององค์ความรู้เหล่านั้น',
      en: 'As a company grows, it accumulates experience and knowledge that should accelerate progress. Instead, it slows down — that knowledge becomes disorganized and scattered across the organization.',
    },
  },
];
