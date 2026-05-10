import type { BilingualText } from '../types';

export const projectTimelineHeader = {
  label: 'Aingo',
  title: 'Project',
  highlight: 'Timeline.',
} as const;

export interface TimelineWeek {
  wk: string;
  label: BilingualText;
}

export const sem1: TimelineWeek[] = [
  { wk: '1–2',   label: { th: 'Research และกำหนดกรอบปัญหา',                       en: 'Research and frame the problem' } },
  { wk: '3–4',   label: { th: 'เก็บข้อกำหนดระบบ + Use Case',                       en: 'Gather requirements + use cases' } },
  { wk: '5–7',   label: { th: 'ออกแบบสถาปัตยกรรมระบบ + เลือกเครื่องมือ',          en: 'Design the system architecture + select tools' } },
  { wk: '8–10',  label: { th: 'สร้างโปรโตไทป์ Web App (NestJS + Vector)',          en: 'Build the web app prototype (NestJS + Vector)' } },
  { wk: '11–12', label: { th: 'พัฒนาระบบดึงและสกัดข้อมูล (Docling)',               en: 'Develop the data retrieval and extraction pipeline (Docling)' } },
  { wk: '13–14', label: { th: 'เชื่อมต่อระบบทั้งหมดเข้าด้วยกัน',                  en: 'Integrate all subsystems' } },
  { wk: '15–16', label: { th: 'นำเสนอโครงงานและจัดทำเอกสาร',                       en: 'Present the project and prepare documentation' } },
];

export const sem2: TimelineWeek[] = [
  { wk: '17–18', label: { th: 'พัฒนาประสิทธิภาพไปป์ไลน์ + วัดผล',                en: 'Optimize the pipeline + measure results' } },
  { wk: '19–20', label: { th: 'เพิ่มประสิทธิภาพการดึงข้อมูล + เลือกใช้ HyDE',     en: 'Improve retrieval performance + adopt HyDE' } },
  { wk: '21–23', label: { th: 'ทำระบบอ้างอิง, ขัดเกลา UI/UX, เลื่อนแผน SSO',     en: 'Implement citations, polish UI/UX, postpone SSO' } },
  { wk: '24–26', label: { th: 'เตรียมการทดสอบ UAT + วางระบบ JWT',                 en: 'Prepare UAT + set up JWT' } },
  { wk: '27–28', label: { th: 'การทดสอบ UAT + ประเมินผลกว่า 50 คำถาม',            en: 'Run UAT + evaluate more than 50 questions' } },
  { wk: '29–30', label: { th: 'แก้ไขบั๊ก + ทำให้ระบบเสถียรยิ่งขึ้น',             en: 'Fix bugs + improve system stability' } },
  { wk: '31–32', label: { th: 'รายงานผลฉบับสมบูรณ์ + นำเสนอเดโม่',               en: 'Finalize the report + present the demo' } },
];
