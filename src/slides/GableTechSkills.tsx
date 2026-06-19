import { motion } from "framer-motion";
import { SlideHeader, SlideShell, ThaiText } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -250, left: -150, size: 800, color: "79, 70, 229", opacity: 0.1 }, // Indigo
  { bottom: -200, right: -100, size: 700, color: "147, 51, 234", opacity: 0.1 }, // Plum/Purple
];

export function GableTechSkills() {
  const pointsLeft = [
    {
      label: "New Tech Stacks (Java & React)",
      descTh: "เรียนรู้และสัมผัสการทำงานกับ Tech Stack ใหม่ ๆ อย่างเช่น Java และ React เพื่อรองรับความต้องการของโปรเจกต์ขนาดใหญ่",
      descEn: "Learn and work with new tech stacks like Java and React to support large-scale enterprise project requirements.",
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
      descEn: "Organize React components by separating UI and business logic systematically.",
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
      descEn: "Follow team code standards to ensure readability and maintainability for the whole team.",
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

  const pointsRight = [
    {
      label: "Git Branching Model",
      descTh: "แยก Feature Branch ชัดเจนตาม Task งาน ป้องกันไม่ให้ส่งผลกระทบต่อ Branch หลัก (main/dev)",
      descEn: "Isolate feature branches per task, preventing impacts on the stable branch (main/dev).",
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
      descTh: "เขียน Commit Message ให้ได้มาตรฐานและมีโครงสร้างชัดเจน ควบคู่ไปกับการรักษาประวัติเวอร์ชันโค้ด (Git History) ที่สะอาดเรียบร้อย",
      descEn: "Learn to write standardized and structured commit messages while keeping a clean and readable Git history.",
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
      descTh: "เข้าสู่กระบวนการนำส่งงานผ่าน Pull Request และร่วมตรวจทานโค้ดกับพี่ ๆ เพื่อคุณภาพที่ดีที่สุด",
      descEn: "Submit work through Pull Requests and participate in reviews to ensure code quality.",
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
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Technical Growth"
        title="Technical Skills &"
        highlight="Best Practices."
        tagline={
          <ThaiText en="Elevating coding quality and collaboration standards to a professional grade.">
            การยกระดับคุณภาพโค้ด และมาตรฐานการทำงานร่วมกันผ่านระบบควบคุมความปลอดภัยอย่างมืออาชีพ
          </ThaiText>
        }
      />

      <div style={{ flex: 1, display: "flex", gap: 36, alignItems: "center", minHeight: 0 }}>
        {/* Left Card: Coding */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            flex: 1,
            background: "rgba(79, 70, 229, 0.02)",
            border: "1px solid rgba(79, 70, 229, 0.15)",
            borderRadius: "28px",
            padding: "44px 40px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            boxShadow: "0 15px 35px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: "16px",
              backgroundColor: "rgba(79, 70, 229, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: 32, fontWeight: 850, color: "#111827", margin: 0, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                เรียนรู้การเขียน Code
              </h3>
              <span style={{ fontSize: 18, color: "#4F46E5", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Quality Development & Clean Code
              </span>
            </div>
          </div>

          <div style={{ width: "100%", height: 1, backgroundColor: "rgba(79, 70, 229, 0.1)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, justifyContent: "center" }}>
            {pointsLeft.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  borderColor: "rgba(79, 70, 229, 0.3)",
                  boxShadow: "0 12px 24px rgba(79, 70, 229, 0.04)"
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "rgba(255, 255, 255, 0.55)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                  cursor: "default",
                  transition: "background-color 0.2s, border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    backgroundColor: "rgba(79, 70, 229, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {pt.icon}
                  </div>
                  <span style={{ fontSize: 22, fontWeight: 750, color: "#1F2937", fontFamily: "'Inter', 'Noto Sans Thai', sans-serif", lineHeight: 1.2 }}>
                    {pt.label}
                  </span>
                </div>

                <span style={{ fontSize: 20, color: "#6B7280", lineHeight: 1.5, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                  {pt.descTh}
                </span>
              </motion.div>
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
            borderRadius: "28px",
            padding: "44px 40px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            boxShadow: "0 15px 35px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: "16px",
              backgroundColor: "rgba(147, 51, 234, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 15V9a4 4 0 0 0-4-4H9" />
                <line x1="6" y1="9" x2="6" y2="15" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: 32, fontWeight: 850, color: "#111827", margin: 0, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                เรียนรู้ Version Control
              </h3>
              <span style={{ fontSize: 18, color: "#9333EA", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Professional Git Branching & Workflow
              </span>
            </div>
          </div>

          <div style={{ width: "100%", height: 1, backgroundColor: "rgba(147, 51, 234, 0.1)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, justifyContent: "center" }}>
            {pointsRight.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  borderColor: "rgba(147, 51, 234, 0.3)",
                  boxShadow: "0 12px 24px rgba(147, 51, 234, 0.04)"
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "rgba(255, 255, 255, 0.55)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                  cursor: "default",
                  transition: "background-color 0.2s, border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    backgroundColor: "rgba(147, 51, 234, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {pt.icon}
                  </div>
                  <span style={{ fontSize: 22, fontWeight: 750, color: "#1F2937", fontFamily: "'Inter', 'Noto Sans Thai', sans-serif", lineHeight: 1.2 }}>
                    {pt.label}
                  </span>
                </div>

                <span style={{ fontSize: 20, color: "#6B7280", lineHeight: 1.5, fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" }}>
                  {pt.descTh}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
