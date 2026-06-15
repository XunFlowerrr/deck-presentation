import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "124, 58, 237", opacity: 0.12 },
];

export function WhatIsTipi() {
  const traits = [
    {
      name: "Openness",
      desc: "Curiosity, openness to new experiences, and artistic appreciation",
      color: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
      border: "1px solid rgba(124, 58, 237, 0.15)",
    },
    {
      name: "Conscientiousness",
      desc: "Organization, self-discipline, and goal-directed behavior",
      color: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
      border: "1px solid rgba(59, 130, 246, 0.15)",
    },
    {
      name: "Extraversion",
      desc: "Sociability, assertiveness, energy, and talkativeness",
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.03)",
      border: "1px solid rgba(236, 72, 153, 0.15)",
    },
    {
      name: "Agreeableness",
      desc: "Altruism, kindness, trust, and cooperative spirit",
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
      border: "1px solid rgba(16, 185, 129, 0.15)",
    },
    {
      name: "Emotional Stability",
      desc: "Commonly reversed as Neuroticism — calm vs. tendency to experience anxiety",
      color: "#F59E0B",
      bg: "rgba(245, 158, 11, 0.03)",
      border: "1px solid rgba(245, 158, 11, 0.15)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Psychology Foundation"
        title="What is"
        highlight="TIPI / Big Five?"
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
        
        {/* Intro */}
        <motion.div
          {...fadeIn(0.2)}
          style={{
            background: "rgba(124, 58, 237, 0.02)",
            border: "1px solid rgba(124, 58, 237, 0.1)",
            borderRadius: "20px",
            padding: "24px 32px",
            fontSize: 20,
            color: "#4B5563",
            lineHeight: 1.5,
          }}
        >
          <strong>TIPI (Ten-Item Personality Inventory)</strong> is a short 10 question, scientifically developed by Gosling et al. (2003). It is widely used in psychology to <strong>measure the Big Five score of personality.</strong>. XPASS-Vis collected these traits for all 129 participants, allowing us to evaluate if individual aesthetic formulas correlate with real-world personality (RQ3).
        </motion.div>

        {/* 5 Traits Cards - 2 on top, 3 on bottom */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Top Row: 2 Traits */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: "900px", margin: "0 auto", width: "100%" }}>
            {traits.slice(0, 2).map((trait, i) => (
              <motion.div
                key={trait.name}
                {...cardRise(i * 0.1 + 0.3)}
                style={{
                  background: trait.bg,
                  border: trait.border,
                  borderRadius: "20px",
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    backgroundColor: trait.color,
                    padding: "4px 10px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Trait {i + 1}
                </span>
                <h4 style={{ fontSize: 24, fontWeight: 950, color: "#111827", margin: "6px 0 0 0" }}>
                  {trait.name}
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.4 }}>
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 3 Traits */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, width: "100%" }}>
            {traits.slice(2).map((trait, i) => (
              <motion.div
                key={trait.name}
                {...cardRise((i + 2) * 0.1 + 0.3)}
                style={{
                  background: trait.bg,
                  border: trait.border,
                  borderRadius: "20px",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    backgroundColor: trait.color,
                    padding: "4px 10px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Trait {i + 3}
                </span>
                <h4 style={{ fontSize: 24, fontWeight: 950, color: "#111827", margin: "6px 0 0 0" }}>
                  {trait.name}
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.4 }}>
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
