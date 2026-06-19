import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../components/index.ts";
import { bodyText, bottomStrip, heroTitle, topBar } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 900, color: "59, 130, 246", opacity: 0.15 }, // G-Able Blue
  { bottom: -250, left: -150, size: 700, color: "6, 182, 212", opacity: 0.12 }, // Cyan
];

export function GableCover() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Top bar */}
      <motion.div
        {...topBar()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0284C7, #06B6D4)",
              boxShadow: "0 0 10px rgba(6, 182, 212, 0.6)",
            }}
          />
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#0284C7",
              fontWeight: 800,
            }}
          >
            G-ABLE Internship
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontSize: 16,
              color: "#0284C7",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            Developer Experience
          </span>
          <div style={{ width: 1, height: 14, background: "#E5E7EB" }} />
          <span
            style={{ fontSize: 16, color: "#9CA3AF", letterSpacing: "0.06em" }}
          >
            June 2026
          </span>
        </div>
      </motion.div>

      {/* Hero */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.span
          {...bodyText(0.1)}
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#0284C7",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 16,
            fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
          }}
        >
          Takeaways & Learnings
        </motion.span>

        <motion.h1
          {...heroTitle(0.12, 48)}
          style={{
            fontSize: 90,
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.2,
            margin: "0 0 32px",
            color: "#0A0A0A",
            userSelect: "none",
            fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
          }}
        >
          มาฝึกงานที่
          <br />
          <GradientText from="#F59E0B" via="#F97316" to="#EA580C">
            G-ABLE
          </GradientText>{" "}
          แล้วได้อะไร?
        </motion.h1>

        <AccentLine
          delay={0.55}
          width={140}
          style={{
            marginBottom: 36,
            background: "linear-gradient(90deg, #F59E0B, #F97316)",
          }}
        />

        <motion.p
          {...bodyText(0.72)}
          style={{
            fontSize: 32,
            color: "#4B5563",
            margin: 0,
            fontWeight: 500,
            letterSpacing: "-0.3px",
            lineHeight: 1.6,
            fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
          }}
        >
          การทำงานในระบบ Enterprise การพัฒนา Code ที่ได้มาตรฐาน <br />
          และการบริหารจัดการงานอย่างเป็นระบบ
        </motion.p>
      </div>

      {/* Bottom strip */}
      <motion.div
        {...bottomStrip(1.0)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #F3F4F6",
          paddingTop: 24,
        }}
      >
        <span
          style={{
            fontSize: 20,
            color: "#374151",
            fontWeight: 600,
            letterSpacing: "0.02em",
            fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
          }}
        >
          Presenter:{" "}
          <span style={{ color: "#0284C7" }}>Tanit Yodsirawong | Born</span>
        </span>
      </motion.div>
    </SlideShell>
  );
}
