import type { BilingualText } from '../types';

export const objectiveScopeHeader = {
  label: 'Aingo',
  title: 'Objective',
  highlight: '& Scope.',
  tagline: 'What we aim to build and where we draw the line',
} as const;

export const objectiveColumnLabel: BilingualText = { th: 'เป้าหมายของโปรเจค', en: 'Project objectives' };
export const scopeColumnLabel: BilingualText = { th: 'ขอบเขตของโปรเจค', en: 'Project scope' };

export interface ObjectiveItem {
  title: string;
  desc: BilingualText;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'ResearchDesign' | 'Evaluation' | 'Implementation';
}

export interface ScopeItem {
  title: string;
  desc: BilingualText;
  tag: string;
  tagRgb: string;
  pillColor: string;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'DataIngestion' | 'AISystem' | 'ChatUI';
}

export const objectives: ObjectiveItem[] = [
  {
    title: 'Research & Design',
    desc: {
      th: 'สืบค้นและออกแบบวิธีแก้ปัญหา เน้นไปที่ Data Ingestion Pipeline',
      en: 'Research and design the solution, with a focus on the data ingestion pipeline.',
    },
    iconKey: 'ResearchDesign',
  },
  {
    title: 'Evaluation',
    desc: {
      th: 'กำหนดเมทริกเพื่อวัดคุณภาพของระบบ',
      en: 'Define metrics to evaluate system quality.',
    },
    iconKey: 'Evaluation',
  },
  {
    title: 'Implementation',
    desc: {
      th: 'พัฒนาระบบที่มี Performance, Scalability และ Usability ที่เหมาะสม\nคำนึงความปลอดภัยพื้นฐาน',
      en: 'Build a system with appropriate performance, scalability, and usability, while maintaining baseline security.',
    },
    iconKey: 'Implementation',
  },
];

export const scopes: ScopeItem[] = [
  {
    title: 'Data Ingestion',
    desc: {
      th: 'โฟกัสแหล่งข้อมูล SharePoint (Xhive) และรองรับเอกสารเทคนิคภาษาไทยและภาษาอังกฤษเป็นหลัก',
      en: 'Focus on SharePoint (Xhive) as the primary data source and support Thai and English technical documents.',
    },
    tag: 'SharePoint · Xhive',
    tagRgb: '245,158,11',
    pillColor: '#F59E0B',
    iconKey: 'DataIngestion',
  },
  {
    title: 'AI System',
    desc: {
      th: 'พัฒนาระบบ AI Agents และ Search Flow Service เพื่อการค้นหาและประมวลผลคำตอบ',
      en: 'Build AI agents and the Search Flow Service for retrieval and answer processing.',
    },
    tag: 'Agents · Search Flow',
    tagRgb: '124, 58, 237',
    pillColor: '#7C3AED',
    iconKey: 'AISystem',
  },
  {
    title: 'User Interface',
    desc: {
      th: 'Web Chat Application เพื่อให้ผู้ใช้สามารถถามตอบกับระบบได้อย่างสะดวกและมีประสิทธิภาพ พร้อม Feature ช่วยเหลือในการค้นหาเอกสารและแสดงแหล่งอ้างอิง',
      en: 'Build a web chat application that lets users interact with the system efficiently, with features to help search documents and display citations.',
    },
    tag: 'Web Chat · MVP',
    tagRgb: '6,182,212',
    pillColor: '#06B6D4',
    iconKey: 'ChatUI',
  },
];
