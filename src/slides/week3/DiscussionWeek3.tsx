import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 700, color: "59, 130, 246", opacity: 0.1 },
];

export function DiscussionWeek3() {
  const cards = [
    {
      title: "RQ4 confirmed the formula is real",
      desc: "The personal formula is a genuine characteristic of each person and stays stable across contexts.",
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.02)",
      border: "1px solid rgba(124, 58, 237, 0.12)",
    },
    {
      title: "RQ3 showed it is not just personality",
      desc: "The formula does not reduce to Big Five personality traits in any simple way, and no correlations survived multiple testing.",
      accent: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.02)",
      border: "1px solid rgba(59, 130, 246, 0.12)",
    },
    {
      title: "Experiment 2 explains why",
      desc: "88% of personalization came from how people perceive emotions in the same image, not how they weight them. Personality surveys fail to capture this subjective perception.",
      accent: "#10B981",
      bg: "rgba(16, 185, 129, 0.02)",
      border: "1px solid rgba(16, 185, 129, 0.12)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion & Summary"
        title="What RQ3 and RQ4 tell us"
        highlight="Together."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 40, justifyContent: "center", paddingBottom: 16 }}>
        
        {/* Three core observation cards - fuller layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.08fr 1.08fr 1.08fr", gap: 36 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...cardRise(i * 0.15)}
              style={{
                background: card.bg,
                border: card.border,
                borderRadius: "28px",
                padding: "42px 44px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                minHeight: "360px",
                justifyContent: "flex-start",
              }}
            >
              <h3 style={{ fontSize: 26, fontWeight: 900, color: card.accent, margin: 0, lineHeight: 1.2 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 19, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Direction Callout */}
        <motion.div
          {...cardRise(0.45)}
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(59, 130, 246, 0.05))",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: "24px",
            padding: "42px 48px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            minHeight: "240px",
            justifyContent: "center",
          }}
        >
          <h4 style={{ fontSize: 24, fontWeight: 900, color: "#7C3AED", margin: 0, display: "flex", alignItems: "center", gap: 10, lineHeight: 1.25 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Personal aesthetic tends to relate with deeper personal metadata
          </h4>
          <p style={{ fontSize: 21, color: "#374151", margin: 0, lineHeight: 1.7, maxWidth: "none" }}>
            Personal aesthetic tends to relate more strongly with deeper personal metadata, such as <strong>life experiences</strong>, <strong>cultural background</strong>, or <strong>visual exposure history</strong>. This richer context is more likely to explain variance in subjective emotional perception and support more personalized aesthetic models.
          </p>
        </motion.div>

      </div>
    </SlideShell>
  );
}
