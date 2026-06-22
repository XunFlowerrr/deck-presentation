import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.08 },
];

export function RecapWeek3() {
  const experiments = [
    {
      num: "Exp 1",
      title: "Feasibility Analysis",
      desc: "Is the idea possible? Evaluated 9 emotions vs 7 emotions (removed circular proxies) vs ICI baseline.",
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
    },
    {
      num: "Exp 2",
      title: "Personalization Sources",
      desc: "Where does personalization come from? Subjective emotion perception (88%) vs weight formula (12%).",
      accent: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
    },
    {
      num: "Exp 3",
      title: "Model & Improvement",
      desc: "Compared Direct prediction against proposed Hybrid (Emotion + Correction) model across support levels.",
      accent: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Quick Recap"
        title="Last Week:"
        highlight="Experiments Run."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0, paddingBottom: 20 }}>
        
        {/* Left Column: List of Experiments */}
        <div style={{ flex: 0.95, display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", margin: "0 0 10px 0" }}>
            Experiments Conducted
          </h3>
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.num}
              {...cardRise(i * 0.1)}
              style={{
                background: exp.bg,
                border: `1px solid ${exp.accent}24`,
                borderRadius: "20px",
                padding: "20px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "white",
                  backgroundColor: exp.accent,
                  padding: "4px 10px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                {exp.num}
              </span>
              <div>
                <h4 style={{ fontSize: 19, fontWeight: 800, color: "#111827", margin: "0 0 4px 0" }}>
                  {exp.title}
                </h4>
                <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Key Takeaway Summary */}
        <div style={{ flex: 1.05, display: "flex", flexDirection: "column", gap: 24 }}>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", margin: "0 0 10px 0" }}>
            Core Experimental Insights
          </h3>

          {/* Card 1: Core Finding */}
          <motion.div
            {...fadeIn(0.4)}
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(59, 130, 246, 0.04))",
              border: "1px solid rgba(16, 185, 129, 0.15)",
              borderRadius: "24px",
              padding: "24px 28px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.01)",
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 900, color: "#10B981", margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: 8 }}>
              ✨ Core Relation Confirmed
            </h4>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.6, margin: 0 }}>
              <strong>Emotions and aesthetic preferences are indeed strongly related.</strong> Emotional mediation functions as a powerful representation channel for subjective judgment.
            </p>
          </motion.div>

          {/* Card 2: Key Factor */}
          <motion.div
            {...fadeIn(0.55)}
            style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(236, 72, 153, 0.04))",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: "24px",
              padding: "24px 28px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.01)",
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 900, color: "#7C3AED", margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: 8 }}>
              🎯 Crucial Personal Formula
            </h4>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.6, margin: 0 }}>
              The key factor is accurately finding each user's <strong>personal formula</strong>. It acts as a powerful personalization prior, yielding a massive <strong>+40% improvement</strong> (0.153 vs 0.109 CCC) in scarce data settings (support = 10).
            </p>
          </motion.div>

          {/* Card 3: Validation status */}
          <motion.div
            {...fadeIn(0.7)}
            style={{
              background: "rgba(59, 130, 246, 0.02)",
              border: "1px solid rgba(59, 130, 246, 0.12)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <p style={{ fontSize: 15, color: "#6B7280", margin: 0, lineHeight: 1.5 }}>
              * Results are validated using a <strong>full 5-fold, cross-fitted</strong> evaluation. Performance sits below the ICI SOTA benchmark, which we will compare on the same data split soon.
            </p>
          </motion.div>
        </div>

      </div>
    </SlideShell>
  );
}
