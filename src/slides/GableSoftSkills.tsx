import { motion } from "framer-motion";
import { SlideHeader, SlideShell, ThaiText } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";
import { internActImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, left: -100, size: 800, color: "79, 70, 229", opacity: 0.08 }, // Indigo
  {
    bottom: -200,
    right: -100,
    size: 700,
    color: "217, 70, 239",
    opacity: 0.07,
  }, // Rose
];

export function GableSoftSkills() {
  const steps = [
    {
      stepNum: "01",
      tag: "Step 01",
      titleEn: "Goal Alignment",
      titleTh: "การสื่อสารเพื่อเป้าหมายที่ตรงกัน",
      desc: "สร้างความเข้าใจในเป้าหมาย ขอบเขตงาน และทิศทาง ป้องกันความคลาดเคลื่อนและส่งมอบงานที่ตรงจุด",
      color: "#4F46E5",
      bg: "rgba(79, 70, 229, 0.03)",
      border: "1px solid rgba(79, 70, 229, 0.18)",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      bullets: ["สร้างความชัดเจนในขอบเขตงาน", "ทิศทางและเป้าหมายเดียวกัน"],
    },
    {
      stepNum: "02",
      tag: "Step 02",
      titleEn: "Proactive Guidance",
      titleTh: "การสื่อสารเพื่อขอคำแนะนำ",
      desc: "สื่อสารปรึกษาพี่ ๆ ในทีมอย่างตรงจุดเมื่อพบอุปสรรค ลดเวลาลองผิดลองถูก และเรียนรู้แนวทางปฏิบัติที่ดีจากผู้มีประสบการณ์",
      color: "#0D9488",
      bg: "rgba(13, 148, 136, 0.03)",
      border: "1px solid rgba(13, 148, 136, 0.18)",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0D9488"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      bullets: [
        "ปรึกษาเมื่อเจอบล็อกเกอร์",
        "เรียนรู้แนวทางในการแก้ปัญหา",
      ],
    },
    {
      stepNum: "03",
      tag: "Step 03",
      titleEn: "Community Exchange",
      titleTh: "การได้พบปะกับสังคมใหม่ๆ",
      desc: "ได้แลกเปลี่ยนมุมมอง ทัศนคติ และประสบการณ์กับเพื่อนร่วมงานหลากหลายบทบาท",
      color: "#D946EF",
      bg: "rgba(217, 70, 239, 0.03)",
      border: "1px solid rgba(217, 70, 239, 0.18)",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D946EF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bullets: ["ได้มี Connection ใหม่ๆ", "แลกเปลี่ยนมุมมองหลากหลาย"],
    },
  ];

  return (
    <SlideShell glows={GLOWS} contentStyle={{ padding: "52px 88px" }}>
      <SlideHeader
        label="Personal Growth & Collaboration"
        title="Soft Skills &"
        highlight="Communication."
        titleSize={54}
        paddingBottom={12}
        marginBottom={24}
        tagline={
          <ThaiText en="A 3-step journey: Goal alignment, proactive guidance, and community perspective exchange.">
            เส้นทางการพัฒนาทักษะ 3 ขั้นตอน: การสื่อสารเป้าหมาย การขอคำแนะนำ
            และการแลกเปลี่ยนในสังคมใหม่
          </ThaiText>
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* Step Connecting Line Indicator */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            padding: "0 14px",
          }}
        >
          {/* Subtle background connecting line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "12%",
              right: "12%",
              height: 2,
              background:
                "linear-gradient(90deg, #4F46E5 0%, #0D9488 50%, #D946EF 100%)",
              opacity: 0.35,
              zIndex: 0,
              transform: "translateY(-50%)",
            }}
          />

          {steps.map((st) => (
            <div
              key={st.stepNum}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: `2.5px solid ${st.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 850,
                  color: st.color,
                  boxShadow: `0 0 14px ${st.color}40`,
                }}
              >
                {st.stepNum}
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: st.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#FFFFFF",
                  padding: "3px 10px",
                  borderRadius: "8px",
                }}
              >
                {st.titleEn}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Step Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          {steps.map((card, i) => (
            <motion.div
              key={card.stepNum}
              {...cardRise(i * 0.12 + 0.2)}
              style={{
                background: card.bg,
                border: card.border,
                borderRadius: "22px",
                padding: "28px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: "0 10px 28px rgba(0,0,0,0.018)",
                position: "relative",
              }}
            >
              {/* Pinned Photo Overlay on Card 03 */}
              {i === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 6 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    bottom: -85,
                    right: -36,
                    width: 240,
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "10px 10px 20px 10px",
                    boxShadow: "0 22px 48px rgba(0,0,0,0.18), 0 6px 14px rgba(0,0,0,0.09)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    zIndex: 10,
                  }}
                >
                  {/* Pushpin at top center */}
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: 26,
                      filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.25))",
                      zIndex: 12,
                    }}
                  >
                    📌
                  </div>

                  {/* Photo */}
                  <div
                    style={{
                      width: "100%",
                      height: 160,
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "#F3F4F6",
                    }}
                  >
                    <img
                      src={internActImg}
                      alt="Intern Activity & Connection"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Caption */}
                  <span
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: "#D946EF",
                      marginTop: 8,
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    #GableConnection 📸
                  </span>
                </motion.div>
              )}

              {/* Header inside Card */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  {card.icon}
                </div>

                <span
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    color: card.color,
                    opacity: 0.22,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {card.stepNum}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: 25,
                    fontWeight: 850,
                    color: "#111827",
                    margin: "0 0 6px 0",
                    fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {card.titleTh}
                </h3>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: card.color,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {card.titleEn}
                </span>
              </div>

              <p
                style={{
                  fontSize: 18,
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.65,
                  fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
                }}
              >
                {card.desc}
              </p>

              {/* Bottom bullets container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.01)",
                  marginTop: 6,
                }}
              >
                {card.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: card.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 16.5,
                        fontWeight: 700,
                        color: "#374151",
                        fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
