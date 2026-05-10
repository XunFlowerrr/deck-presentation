import type { BilingualText } from '../types';

export const operationalModesHeader = {
  label: 'Aingo Agent',
  title: 'Operational',
  highlight: 'Modes.',
  tagline: 'Multi-mode execution strategy — From Autonomous Reasoning to Direct Commands',
} as const;

export type ModeId = 'auto' | 'search' | 'lookup' | 'chat';

export interface ModeItem {
  id: ModeId;
  title: string;
  subtitle: string;
  desc: BilingualText;
  tools: string[];
  color: string;
  promptType: string;
  promptRules: string;
  rejectRule: string;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'Backend' | 'SearchFlowService' | 'Lookup' | 'Chat';
}

export const modes: ModeItem[] = [
  {
    id: 'auto',
    title: 'AUTO',
    subtitle: 'The Autonomous Executor',
    desc: {
      th: 'Agent ต้องตัดสินใจเลือก Action (Decision-making prompt) วิเคราะห์ User Intent เพื่อเลือกใช้ Tool ที่เหมาะสมที่สุด',
      en: 'The agent decides which action to take via a decision-making prompt, analyzes user intent, and selects the most appropriate tool.',
    },
    tools: ['search', 'lookup'],
    color: '#7C3AED',
    iconKey: 'Backend',
    promptType: 'Decision Prompt',
    promptRules:
      'Action Selection Logic (STRICT): You must select and execute the appropriate action based on exactly what the user provides (SEARCH, LOOKUP, or CHAT).',
    rejectRule:
      'Reject if lack of specific intent or asking factual question out of domain.',
  },
  {
    id: 'search',
    title: 'SEARCH',
    subtitle: 'The Semantic Engine',
    desc: {
      th: 'คำสั่งเจาะจงใช้ Search Tool เท่านั้น (Direct Command) ค้นหาข้อมูลจาก Vector Database ด้วยเทคนิค HyDE',
      en: 'A direct command that forces use of the Search tool only, retrieving information from the vector database with HyDE.',
    },
    tools: ['search'],
    color: '#3B82F6',
    iconKey: 'SearchFlowService',
    promptType: 'Direct Command',
    promptRules:
      "STRICT MODE ENFORCED: You ONLY have search tools. You MUST perform a search. CRITICAL: Do NOT rely on 'Attachments' to skip searching.",
    rejectRule:
      'Reject if Insufficient Information or Conflicting/Out-of-Domain Request.',
  },
  {
    id: 'lookup',
    title: 'LOOKUP',
    subtitle: 'The Direct Reader',
    desc: {
      th: 'คำสั่งเจาะจงอ่านไฟล์ที่ระบุ (Direct Command) ดึงข้อมูลจาก File Path และ Page Number ที่แน่นอน',
      en: 'A direct command that reads a specific file, pulling content from an exact file path and page number.',
    },
    tools: ['lookup'],
    color: '#10B981',
    iconKey: 'Lookup',
    promptType: 'Direct Command',
    promptRules:
      'STRICT MODE ENFORCED: You ONLY have tools to get pages or get chunks. You MUST use these tools to read specific files or chunks.',
    rejectRule:
      'Reject if lacking specific file path OR page/chunk number, or asking for general search.',
  },
  {
    id: 'chat',
    title: 'CHAT',
    subtitle: 'The Conversational Assistant',
    desc: {
      th: 'เน้นการสนทนาโต้ตอบ (Direct Command) ตอบคำถามจาก Context ที่แนบมาเท่านั้น โดยไม่ใช้ Retrieval Tools',
      en: 'Focuses on conversation only, answering strictly from the attached context without using retrieval tools.',
    },
    tools: [],
    color: '#F59E0B',
    iconKey: 'Chat',
    promptType: 'Direct Command',
    promptRules:
      'STRICT MODE ENFORCED: You have NO retrieval tools. Your main duty is to engage in general conversation related to the SCB TechX domain.',
    rejectRule:
      'Reject if Tool Required (factual question not in Attachments) or Out-of-Domain.',
  },
];
