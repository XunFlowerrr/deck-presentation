import type { BilingualText } from '../types';
import { atomCloseImg } from '../assets';

export const theProblemHeader = {
  label: 'Problems',
  title: 'The',
  highlight: 'Problem.',
} as const;

export const scenario = {
  pillLabel: 'Scenario',
  profileImage: atomCloseImg,
  personName: 'Atom',
  company: 'AINGO',
  description: {
    th: 'พบกับ {name} ซึ่ง Project Manager หน้าใหม่ เข้ามาทำงานที่บริษัท {company} และต้องการหา Technical Specifications ของโครงการที่เปิดตัวไปเมื่อไตรมาสที่แล้ว',
    en: 'Meet {name}, a new Project Manager joining {company}. He needs to find the technical specifications for a project launched last quarter.',
  } as BilingualText,
};

export const realitySection: BilingualText = {
  th: 'ความเป็นจริงที่ต้องเจอ',
  en: 'The reality he runs into',
};

export const calloutRequest = {
  eyebrow: { th: 'ความต้องการ', en: 'The request' } as BilingualText,
  body: {
    th: 'หา Technical Specifications\nของโครงการที่เปิดตัวไปเมื่อไตรมาสที่แล้ว',
    en: 'Find the technical specifications for the project launched last quarter.',
  } as BilingualText,
};

export const problemCards: {
  iconKey: 'SearchFail' | 'Scatter';
  title: BilingualText;
  body: BilingualText;
  titleColor: string;
}[] = [
  {
    iconKey: 'SearchFail',
    title: { th: 'การค้นหาไร้ประสิทธิภาพ', en: 'Ineffective search' },
    body: {
      th: 'Keyword-Search แบบเดิมให้ผลลัพธ์เป็นรายการไฟล์นับร้อย\nโดยไม่เกี่ยวกับความต้องการจริง',
      en: 'Traditional keyword search returns hundreds of files that have nothing to do with what he actually needs.',
    },
    titleColor: '#EF4444',
  },
  {
    iconKey: 'Scatter',
    title: { th: 'ข้อมูลกระจัดกระจาย', en: 'Scattered information' },
    body: {
      th: 'ข้อมูลสำคัญของโครงการถูกแยกส่วนและซ่อนอยู่ตามระบบต่าง ๆ เช่น\nSharePoint, ไดรฟ์, และอีเมล\nซึ่งไม่สามารถให้ภาพรวมที่สมบูรณ์ได้',
      en: 'Critical project information is fragmented and hidden across different systems — SharePoint, drives, emails — none of which give the full picture.',
    },
    titleColor: '#EF4444',
  },
];

export const impactSection: BilingualText = {
  th: 'ผลกระทบทางธุรกิจ',
  en: 'Business impact',
};

export const impactCards: {
  iconKey: 'Clock' | 'AlertCircle' | 'Cost';
  title: BilingualText;
  body: BilingualText;
  titleColor: string;
  align?: 'center';
}[] = [
  {
    iconKey: 'Clock',
    title: { th: 'เวลาสูญเปล่า', en: 'Wasted time' },
    body: { th: 'เสียเวลาหลายชั่วโมงในการค้นหาข้อมูล', en: 'Hours lost just searching for the right information.' },
    titleColor: '#F59E0B',
  },
  {
    iconKey: 'AlertCircle',
    title: { th: 'ความล่าช้า', en: 'Delays' },
    body: {
      th: 'เกิดความล่าช้าของโครงการ เสี่ยงที่จะเกิดข้อผิดพลาดซ้ำ',
      en: 'Projects fall behind, and the same mistakes risk being repeated.',
    },
    titleColor: '#EF4444',
  },
  {
    iconKey: 'Cost',
    title: { th: 'ต้นทุนที่ซ่อนอยู่ขององค์กร', en: 'The hidden cost to the organization' },
    body: { th: '', en: '' },
    titleColor: '#F59E0B',
    align: 'center',
  },
];
