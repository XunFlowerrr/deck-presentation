import type { BilingualText } from '../types';

export const evalResultsHeader = {
  label: 'Aingo',
  title: 'Evaluation',
  highlight: 'Results.',
  tagline: 'Measured on 231 questions · RAGAS framework',
} as const;

export interface MetricItem {
  label: string;
  score: string;
  evals: string;
  desc: BilingualText;
  color: string;
  rgb: string;
  grad: [string, string];
}

export const metrics: MetricItem[] = [
  {
    label: 'Faithfulness',
    score: '77%',
    evals: '231',
    desc: {
      th: 'วัดความสอดคล้องเชิงข้อเท็จจริงของคำตอบกับบริบทที่ดึงมาได้ โดยมีค่า 0%–100% ยิ่งสูงยิ่งสอดคล้องมาก',
      en: 'Measures factual alignment between the answer and the retrieved context on a 0%-100% scale; higher is better.',
    },
    color: '#7C3AED',
    rgb: '124,58,237',
    grad: ['#7C3AED', '#A855F7'],
  },
  {
    label: 'Factual Correctness',
    score: '78%',
    evals: '231',
    desc: {
      th: 'วัดความถูกต้องเชิงข้อเท็จจริงของคำตอบเทียบกับข้อมูลอ้างอิง โดยใช้ LLM แยกข้อเท็จจริงและ NLI เพื่อประเมินความสอดคล้อง',
      en: 'Measures factual correctness against reference data by extracting claims with an LLM and using NLI to evaluate consistency.',
    },
    color: '#EC4899',
    rgb: '236,72,153',
    grad: ['#EC4899', '#F43F5E'],
  },
  {
    label: 'Task Completion',
    score: '97%',
    evals: '231',
    desc: {
      th: 'Agent ทำงานสำเร็จตามความตั้งใจที่ผู้ใช้ระบุ',
      en: 'Measures whether the agent successfully completed what the user intended.',
    },
    color: '#10B981',
    rgb: '16,185,129',
    grad: ['#10B981', '#34D399'],
  },
  {
    label: 'Tool Correctness',
    score: '99%',
    evals: '231',
    desc: {
      th: 'Agent อิสระเรียกใช้เครื่องมือ MCP ได้อย่างถูกต้องแม่นยำ',
      en: 'Measures whether the autonomous agent invoked MCP tools correctly.',
    },
    color: '#3B82F6',
    rgb: '59,130,246',
    grad: ['#3B82F6', '#06B6D4'],
  },
];
