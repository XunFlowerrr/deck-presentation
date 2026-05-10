import type { BilingualText } from '../types';

export const futureWorkHeader = {
  label: 'Aingo',
  title: 'Conclusion &',
  highlight: 'Future Work.',
  tagline: 'Intelligence That Drives Execution',
} as const;

export interface AchievementItem {
  title: string;
  desc: BilingualText;
  color: string;
  rgb: string;
  /** Icon component key — resolved in the slide template. */
  iconKey: 'Pipeline' | 'Chart' | 'Gear';
}

export const achievements: AchievementItem[] = [
  {
    iconKey: 'Pipeline',
    title: 'Robust Ingestion Pipeline',
    desc: {
      th: 'ระบบ HybridChunker + Docling ช่วยให้การสกัดข้อมูลรักษาโครงสร้างดั้งเดิมไว้ได้ ช่วยลดการแตกกระจายของบริบทข้อมูลได้อย่างมาก',
      en: 'The HybridChunker + Docling pipeline preserves original structure during extraction and greatly reduces context fragmentation.',
    },
    color: '#10B981',
    rgb: '16,185,129',
  },
  {
    iconKey: 'Chart',
    title: 'Validated Performance',
    desc: {
      th: 'ความเที่ยงตรง 77% ความสำเร็จของงาน 97% ความถูกต้องของเครื่องมือ 99% — มีประสิทธิภาพเหนือกว่า RAG พื้นฐาน',
      en: '77% faithfulness, 97% task completion, and 99% tool correctness — outperforming baseline RAG.',
    },
    color: '#7C3AED',
    rgb: '124,58,237',
  },
  {
    iconKey: 'Gear',
    title: 'Production-Grade Architecture',
    desc: {
      th: 'สถาปัตยกรรม Microservices ทั้ง 7 ระบบพร้อมระบบยืนยันตัวตน JWT, การสตรีมแบบ SSE, ซิงก์ผ่าน RabbitMQ และรองรับหลายภาษาด้วย BGE-M3',
      en: 'A seven-service microservices architecture with JWT auth, SSE streaming, RabbitMQ synchronization, and multilingual support via BGE-M3.',
    },
    color: '#3B82F6',
    rgb: '59,130,246',
  },
];

export interface FutureItem {
  title: string;
  desc: BilingualText;
  color: string;
  rgb: string;
}

export const futureWork: FutureItem[] = [
  {
    title: 'Neo4j Graph-Vector Hybrid Retrieval',
    desc: {
      th: 'เพิ่มการสืบค้นโครงข่ายความสัมพันธ์เพื่อใช้งานร่วมกับความคล้ายคลึงของความหมาย ยกระดับการค้นพบองค์ความรู้ภายในองค์กร',
      en: 'Add relationship-aware retrieval that combines graph traversal with semantic similarity to improve enterprise knowledge discovery.',
    },
    color: '#8B5CF6',
    rgb: '139,92,246',
  },
  {
    title: 'Full Azure AD SSO Integration',
    desc: {
      th: 'ทำระบบ Single Sign-On แบบ OIDC ผ่าน Passport-Azure-AD ให้สมบูรณ์ (ออกแบบสถาปัตยกรรมไว้แล้วรอการติดตั้ง)',
      en: 'Complete OIDC-based single sign-on through Passport-Azure-AD; the architecture is already designed and ready for rollout.',
    },
    color: '#3B82F6',
    rgb: '59,130,246',
  },
  {
    title: 'AI Guardrails Layer',
    desc: {
      th: 'ป้องกันการถูกโจมตีด้วย Prompt Injection และตัวกรองคัดกรองคำตอบที่ไม่เหมาะสม',
      en: 'Add defenses against prompt injection and filters for unsafe or inappropriate responses.',
    },
    color: '#F59E0B',
    rgb: '245,158,11',
  },
  {
    title: 'Multi-channel Integration',
    desc: {
      th: 'เชื่อมต่อกับแอปพลิเคชันสนทนา เช่น LINE หรือ Microsoft Teams',
      en: 'Integrate with chat platforms such as LINE or Microsoft Teams.',
    },
    color: '#10B981',
    rgb: '16,185,129',
  },
];

export const limitations: BilingualText[] = [
  {
    th: 'กระบวนการ Multi-agent ReAct ทำให้ได้โทเคนแรกช้าลง (Time-to-first-token)',
    en: 'The multi-agent ReAct process increases time to first token.',
  },
  {
    th: 'การวางแผนแบบ Multi-agent เพิ่มต้นทุนการใช้โทเคนต่อหนึ่งคำถาม',
    en: 'Multi-agent planning increases token cost per question.',
  },
];
