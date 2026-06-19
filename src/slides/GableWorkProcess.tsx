import { motion } from "framer-motion";
import { SlideHeader, SlideShell, ThaiText } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 800, color: "79, 70, 229", opacity: 0.1 }, // Indigo
  { bottom: -200, left: -100, size: 700, color: "225, 29, 72", opacity: 0.08 }, // Rose
];

export function GableWorkProcess() {
  const cards = [
    {
      title: "Large-Scale Projects",
      desc: "ได้มีโอกาสลงมือทำและแก้ปัญหาในโครงการระดับองค์กรขนาดใหญ่ที่มีความซับซ้อน ท้าทายด้วยจำนวนข้อมูลและสเกลผู้ใช้งานจำนวนมาก",
      color: "#4F46E5",
      bg: "rgba(79, 70, 229, 0.03)",
      border: "1px solid rgba(79, 70, 229, 0.15)",
      // Custom SVG: Globe/Grid representing large scale
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Modular Architecture",
      desc: "ได้เรียนรู้การจัดระบบโครงสร้างแยกส่วนอย่างชัดเจน ประกอบด้วยส่วน Frontend, Backend, Discovery Service และการบริหารจัดการแยกบริการแบบ Microservice",
      color: "#9333EA",
      bg: "rgba(147, 51, 234, 0.03)",
      border: "1px solid rgba(147, 51, 234, 0.15)",
      // Custom SVG: Connected blocks representing modular architecture
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9333EA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
      desc: "เข้าใจและเรียนรู้กระบวนการพัฒนาซอฟต์แวร์ที่มีลำดับขั้นตอนการแจกแจงงานอย่างชัดเจน และมีขั้นตอนการส่งมอบงานที่เป็นระบบในทุกระยะ",
      color: "#E11D48",
      bg: "rgba(225, 29, 72, 0.03)",
      border: "1px solid rgba(225, 29, 72, 0.15)",
      // Custom SVG: Kanban board / Checklist representing task distribution
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E11D48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17h6M9 12h6M9 7h6" />
        </svg>
      ),
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Work Experience"
        title="Work Process &"
        highlight="Architecture."
        tagline={
          <ThaiText en="Understanding real-world enterprise development processes and modular design patterns.">
            ทำความเข้าใจกระบวนการทำงานจริงในระดับองค์กร
            และโครงสร้างสถาปัตยกรรมซอฟต์แวร์ที่มีประสิทธิภาพ
          </ThaiText>
        }
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        {/* 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            width: "100%",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...cardRise(i * 0.15 + 0.35)}
              style={{
                background: card.bg,
                border: card.border,
                borderRadius: "24px",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              }}
            >
              {/* Top Row: Icon & Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "18px",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  {card.icon}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    backgroundColor: card.color,
                    padding: "6px 14px",
                    borderRadius: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Part 0{i + 1}
                </span>
              </div>

              {/* Title */}
              <div style={{ marginTop: 8 }}>
                <h4
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#111827",
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {card.title}
                </h4>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 20,
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
                  flex: 1,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
