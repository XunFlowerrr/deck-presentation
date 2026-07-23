import { motion } from "framer-motion";
import { SlideHeader, SlideShell, ThaiText } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 800, color: "79, 70, 229", opacity: 0.1 }, // Indigo
  { bottom: -200, left: -100, size: 700, color: "147, 51, 234", opacity: 0.08 }, // Plum
];

export function GableWorkProcess() {
  const processCards = [
    {
      title: "Large-Scale Projects",
      desc: "ได้มีโอกาสลงมือทำและแก้ปัญหาในโครงการระดับองค์กรขนาดใหญ่ที่มีความซับซ้อน ท้าทายด้วยจำนวนข้อมูลและสเกลผู้ใช้งานจำนวนมาก",
      color: "#4F46E5",
      bg: "rgba(79, 70, 229, 0.03)",
      border: "1px solid rgba(79, 70, 229, 0.15)",
      tag: "Part 01",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Modular Architecture",
      desc: "จัดระบบโครงสร้างแยกส่วนอย่างชัดเจน ประกอบด้วย Frontend, Backend, Discovery Service และการบริหารจัดการแบบ Microservice",
      color: "#9333EA",
      bg: "rgba(147, 51, 234, 0.03)",
      border: "1px solid rgba(147, 51, 234, 0.15)",
      tag: "Part 02",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4M17.5 10v4M10 17.5h4M6.5 10v4" />
        </svg>
      ),
    },
    {
      title: "Systematic Task Distribution",
      desc: "กระบวนการพัฒนาซอฟต์แวร์ที่มีลำดับขั้นตอนการแจกแจงงานอย่างชัดเจน และมีขั้นตอนการส่งมอบงานที่เป็นระบบในทุกระยะ",
      color: "#E11D48",
      bg: "rgba(225, 29, 72, 0.03)",
      border: "1px solid rgba(225, 29, 72, 0.15)",
      tag: "Part 03",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17h6M9 12h6M9 7h6" />
        </svg>
      ),
    },
  ];

  const codePoints = [
    {
      label: "New Tech Stacks (Java & React)",
      descTh: "เรียนรู้และสัมผัสการทำงานกับ Tech Stack ใหม่ เพื่อรองรับความต้องการของโปรเจกต์ขนาดใหญ่",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      label: "Clean & Reusable Components",
      descTh: "จัดระเบียบ React Components แยกส่วน UI และ Business Logic ให้สอดคล้องกันอย่างมีระบบ",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      label: "Code Standards & Best Practices",
      descTh: "ปรับแต่งโค้ดตามมาตรฐานของทีม เข้าใจการเขียนโค้ดเพื่อให้เพื่อนร่วมทีมอ่านเข้าใจง่าย",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    }
  ];

  const gitPoints = [
    {
      label: "Git Branching Model",
      descTh: "แยก Feature Branch ชัดเจนตาม Task งาน ป้องกันไม่ให้ส่งผลกระทบต่อ Branch หลัก (main/dev)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      )
    },
    {
      label: "Conventional Commits & Clean History",
      descTh: "เขียน Commit Message ให้ได้มาตรฐานและมีโครงสร้างชัดเจน ควบคู่ไปกับการรักษาประวัติเวอร์ชันโค้ดที่สะอาด",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="22" />
        </svg>
      )
    },
    {
      label: "Pull Requests & Code Reviews",
      descTh: "นำส่งงานผ่าน Pull Request และร่วมตรวจทานโค้ดกับทีมเพื่อคุณภาพที่ดีที่สุด",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )
    }
  ];

  return (
    <SlideShell glows={GLOWS} contentStyle={{ padding: "52px 88px" }}>
      <SlideHeader
        label="Work Experience & Technical Growth"
        title="Work Process &"
        highlight="Tech Skills."
        titleSize={52}
        paddingBottom={12}
        marginBottom={20}
        tagline={
          <ThaiText en="Understanding real-world enterprise development processes and elevating technical standards.">
            ทำความเข้าใจกระบวนการทำงานระดับองค์กร สถาปัตยกรรมระบบ และยกระดับมาตรฐานการพัฒนาซอฟต์แวร์อย่างมืออาชีพ
          </ThaiText>
        }
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          minHeight: 0,
        }}
      >
        {/* Section 1: Work Process & Architecture (3 horizontal cards) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4F46E5" }} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#4F46E5", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif" }}>
              Work Process & Enterprise Architecture
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 18,
              width: "100%",
            }}
          >
            {processCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...cardRise(i * 0.1 + 0.2)}
                style={{
                  background: card.bg,
                  border: card.border,
                  borderRadius: "20px",
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: 0, fontFamily: "'Inter', sans-serif" }}>
                      {card.title}
                    </h4>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#FFFFFF",
                      backgroundColor: card.color,
                      padding: "3px 9px",
                      borderRadius: "8px",
                      letterSpacing: "0.05em",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "#4B5563",
                    margin: 0,
                    lineHeight: 1.5,
                    fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
                  }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Skills & Best Practices (2 columns: Code & Git) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#9333EA" }} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#9333EA", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif" }}>
              Technical Skills & Best Practices
            </span>
          </div>

          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, minHeight: 0 }}>
            {/* Left Card: Coding */}
            <motion.div
              {...cardRise(0.35)}
              style={{
                flex: 1,
                background: "rgba(79, 70, 229, 0.02)",
                border: "1px solid rgba(79, 70, 229, 0.15)",
                borderRadius: "22px",
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  backgroundColor: "rgba(79, 70, 229, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 850, color: "#111827", margin: 0, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                    เรียนรู้การเขียน Code
                  </h4>
                  <span style={{ fontSize: 13.5, color: "#4F46E5", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                    Quality Development & Clean Code
                  </span>
                </div>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
                {codePoints.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "rgba(255, 255, 255, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.95)",
                      borderRadius: "16px",
                      padding: "12px 18px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                    }}
                  >
                    <div style={{
                      width: 34,
                      height: 34,
                      borderRadius: "10px",
                      backgroundColor: "rgba(79, 70, 229, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {pt.icon}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 15.5, fontWeight: 750, color: "#1F2937", fontFamily: "'Inter', 'Noto Sans Thai', sans-serif", lineHeight: 1.25 }}>
                        {pt.label}
                      </span>
                      <span style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.4, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                        {pt.descTh}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card: Version Control */}
            <motion.div
              {...cardRise(0.45)}
              style={{
                flex: 1,
                background: "rgba(147, 51, 234, 0.02)",
                border: "1px solid rgba(147, 51, 234, 0.15)",
                borderRadius: "22px",
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  backgroundColor: "rgba(147, 51, 234, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
                    <line x1="6" y1="9" x2="6" y2="15" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 850, color: "#111827", margin: 0, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                    เรียนรู้ Version Control
                  </h4>
                  <span style={{ fontSize: 13.5, color: "#9333EA", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                    Professional Git Branching & Workflow
                  </span>
                </div>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
                {gitPoints.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "rgba(255, 255, 255, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.95)",
                      borderRadius: "16px",
                      padding: "12px 18px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                    }}
                  >
                    <div style={{
                      width: 34,
                      height: 34,
                      borderRadius: "10px",
                      backgroundColor: "rgba(147, 51, 234, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {pt.icon}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 15.5, fontWeight: 750, color: "#1F2937", fontFamily: "'Inter', 'Noto Sans Thai', sans-serif", lineHeight: 1.25 }}>
                        {pt.label}
                      </span>
                      <span style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.4, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                        {pt.descTh}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
