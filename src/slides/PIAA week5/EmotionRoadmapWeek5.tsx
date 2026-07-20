import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const USER_ACCENT = "#7C3AED";
const IMAGE_ACCENT = "#EC4899";

interface Step {
  n: number;
  question: string;
  desc: ReactNode;
}

const USER_STEPS: Step[] = [
  {
    n: 1,
    question: "Which person does it help?",
    desc: (
      <span>
        Checking if emotion helps all users equally. We run a paired Wilcoxon test to see if it is a broad, common effect or driven by a few outliers.
      </span>
    ),
  },
  {
    n: 2,
    question: "What decides whether it helps?",
    desc: (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ color: "#4B5563" }}>Analyzing key factors that determine whether emotion helps:</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
          {[
            { num: "A", label: "Emotion prediction accuracy", code: "emo_r", color: "#7C3AED", tint: "rgba(124, 58, 237, 0.08)" },
            { num: "B", label: "Baseline strength of the Direct model", code: "Direct", color: "#EC4899", tint: "rgba(236, 72, 153, 0.08)" },
            { num: "C", label: "Rating consistency & category headroom", code: "", color: "#10B981", tint: "rgba(16, 185, 129, 0.08)" }
          ].map((bullet, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: "10px 14px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: bullet.tint,
                  color: bullet.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {bullet.num}
              </span>
              <span style={{ fontSize: 17, color: "#374151", fontWeight: 600, lineHeight: 1.3 }}>
                {bullet.label} {bullet.code && <strong style={{ color: bullet.color }}>({bullet.code})</strong>}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const IMAGE_STEPS: Step[] = [
  {
    n: 3,
    question: "Which images does it help?",
    desc: (
      <span>
        Checking if photos triggering different emotions gain different benefits. We group images by their dominant emotion (e.g. distasteful vs. intellectual) to compare.
      </span>
    ),
  },
];

function StepCard({ step, accent, delay, isLarge }: { step: Step; accent: string; delay: number; isLarge?: boolean }) {
  return (
    <motion.div
      {...cardRise(delay)}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 18,
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxShadow: "0 8px 26px rgba(0,0,0,0.05)",
        flex: 1,
        justifyContent: isLarge ? "center" : "flex-start",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: accent,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {step.n}
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: 25,
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.2,
            letterSpacing: "-0.4px",
          }}
        >
          {step.question}
        </h3>
      </div>

      <div style={{ margin: 0, fontSize: 18, color: "#1F2937", fontWeight: 500, lineHeight: 1.6 }}>{step.desc}</div>
    </motion.div>
  );
}

function LevelGroup({
  level,
  caption,
  accent,
  tint,
  span,
  delay,
  children,
}: {
  level: string;
  caption: string;
  accent: string;
  tint: string;
  span: number;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.section
      {...fadeInUp(delay)}
      style={{
        gridColumn: `span ${span}`,
        background: tint,
        border: `2px solid ${accent}33`,
        borderRadius: 26,
        padding: "22px 24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span
          style={{
            color: accent,
            fontSize: 21,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            whiteSpace: "nowrap",
          }}
        >
          {level} level
        </span>
        <span style={{ fontSize: 17, color: "#9CA3AF", fontWeight: 500 }}>{caption}</span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "space-between",
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}

export function EmotionRoadmapWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 · when do emotions help"
        title="From an average "
        highlight="to a reason."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 28,
          alignContent: "center",
          minHeight: 0,
          paddingBottom: 44,
        }}
      >
        <LevelGroup
          level="User"
          caption="129 users × 3 domains = 387 units"
          accent={USER_ACCENT}
          tint="rgba(124, 58, 237, 0.05)"
          span={2}
          delay={0.12}
        >
          {USER_STEPS.map((s, i) => (
            <StepCard key={s.n} step={s} accent={USER_ACCENT} delay={0.24 + i * 0.09} />
          ))}
        </LevelGroup>

        <LevelGroup
          level="Image"
          caption="per-image error reduction"
          accent={IMAGE_ACCENT}
          tint="rgba(236, 72, 153, 0.05)"
          span={2}
          delay={0.2}
        >
          {IMAGE_STEPS.map((s, i) => (
            <StepCard key={s.n} step={s} accent={IMAGE_ACCENT} delay={0.35 + i * 0.09} isLarge />
          ))}
        </LevelGroup>
      </div>

      {/* Definition box */}
      <motion.div
        {...fadeInUp(0.75)}
        style={{
          position: "absolute",
          bottom: 24,
          left: 108,
          right: 108,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "10px 16px",
          fontSize: 15,
          color: "#6B7280",
          textAlign: "center",
          lineHeight: 1.45,
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        }}
      >
        <strong style={{ color: "#374151" }}>delta</strong> = Hybrid CCC − Direct CCC
        &nbsp;·&nbsp; <strong style={{ color: "#374151" }}>emo_r</strong> = how accurately we read
        that person's 7 emotions (dataset mean 0.27) &nbsp;·&nbsp; secondary analysis of existing
        runs, zero retraining
      </motion.div>
    </SlideShell>
  );
}
