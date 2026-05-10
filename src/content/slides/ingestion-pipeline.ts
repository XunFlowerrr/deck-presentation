import type { BilingualText } from '../types';

export const ingestionPipelineHeader = {
  label: 'Aingo',
  title: 'Ingestion',
  highlight: 'Pipeline.',
  tagline: 'HybridChunker — structure-aware extraction via Docling',
} as const;

export interface PipelineStep {
  num: string;
  title: string;
  body: BilingualText;
  color: string;
  rgb: string;
  grad: [string, string];
}

export const pipelineSteps: PipelineStep[] = [
  {
    num: '01',
    title: 'Structural Intersection',
    body: {
      th: 'ใช้ Docling เพื่อแกะคำและตรวจจับโครงสร้าง เพื่อสกัดเนื้อหาออกมาจากไฟล์ Input',
      en: 'Use Docling to parse content and detect structure so information can be extracted from the input file.',
    },
    color: '#F59E0B',
    rgb: '245,158,11',
    grad: ['#F59E0B', '#F97316'],
  },
  {
    num: '02',
    title: 'Structural Serialization',
    body: {
      th: 'ใช้ HybridChunker ตรวจจับขอบเขตของความหมาย เพื่อแบ่งข้อมูล (Chunks) ตามจุดแบ่งที่เหมาะสม (เช่น หัวข้อหลักและหัวข้อย่อย)',
      en: 'Use HybridChunker to detect semantic boundaries and split content into chunks at appropriate breakpoints, such as section headers and subsections.',
    },
    color: '#7C3AED',
    rgb: '124,58,237',
    grad: ['#7C3AED', '#A855F7'],
  },
  {
    num: '03',
    title: 'Token-Aware Merging',
    body: {
      th: 'โดยจะจำกัดขนาดของ Chunk ที่ 512 Token หลังจากนั้น Chunk ต่างๆจะถูก embedded และเก็บไว้ใน Vector Database',
      en: 'Each chunk is limited to 512 tokens, then embedded and stored in the vector database.',
    },
    color: '#10B981',
    rgb: '16,185,129',
    grad: ['#10B981', '#059669'],
  },
];
