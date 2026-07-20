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
  desc: string;
}

const USER_STEPS: Step[] = [
  {
    n: 1,
    question: "How often does it help?",
    desc: "Count how many of the 387 user × domain units have a positive delta. A paired test, so every person is compared against themselves.",
  },
  {
    n: 2,
    question: "What decides whether it helps?",
    desc: "Correlate every candidate factor with delta: how well we read that person's emotions, how strong their Direct model is, how varied their ratings are, and how much training data they have.",
  },
  {
    n: 3,
    question: "Why is art the odd one out?",
    desc: "Check whether the pattern holds in all three photo categories. Where it does not, test two competing explanations: a ceiling effect, or a genuinely different mechanism.",
  },
];

const IMAGE_STEPS: Step[] = [
  {
    n: 4,
    question: "Which emotions benefit?",
    desc: "Group every test image by the emotion it evokes most strongly, then measure how much the prediction error shrinks in each group. Compare that against how stably we predict each emotion.",
  },
];

function StepCard({ step, accent, delay }: { step: Step; accent: string; delay: number }) {
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
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: accent,
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        {step.n}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: 26,
          fontWeight: 800,
          color: "#111827",
          lineHeight: 1.2,
          letterSpacing: "-0.4px",
        }}
      >
        {step.question}
      </h3>

      <p style={{ margin: 0, fontSize: 17, color: "#6B7280", lineHeight: 1.6 }}>{step.desc}</p>
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
            fontSize: 19,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            whiteSpace: "nowrap",
          }}
        >
          {level} level
        </span>
        <span style={{ fontSize: 15, color: "#9CA3AF", fontWeight: 500 }}>{caption}</span>
      </div>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: `repeat(${span}, 1fr)`,
          gap: 20,
          alignItems: "stretch",
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
          span={3}
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
          span={1}
          delay={0.2}
        >
          {IMAGE_STEPS.map((s) => (
            <StepCard key={s.n} step={s} accent={IMAGE_ACCENT} delay={0.5} />
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
          fontSize: 13,
          color: "#6B7280",
          textAlign: "center",
          lineHeight: 1.45,
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
