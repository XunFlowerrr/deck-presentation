import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.08 },
];

export function NextSteps() {
  const steps = [
    {
      num: "01",
      title: "Correlate with Personality (Big Five)",
      desc: "Cross-reference each person's emotion weightings (personal formula) with their Big Five personality profiles already present in XPASS-Vis.",
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.03)",
      border: "1px solid rgba(236, 72, 153, 0.15)",
    },
    {
      num: "02",
      title: "Test Domain Consistency",
      desc: "Analyze whether an individual's personal formula stays consistent when evaluating different domains (e.g. switching from landscape to fashion).",
      color: "#06B6D4",
      bg: "rgba(6, 182, 212, 0.03)",
      border: "1px solid rgba(6, 182, 212, 0.15)",
    },
    {
      num: "03",
      title: "Paper Write-up & Submission",
      desc: "Synthesize findings, document the explainability advantages of emotion mediation, and start drafting the paper.",
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
      border: "1px solid rgba(16, 185, 129, 0.15)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Future Directions"
        title="Next Research"
        highlight="Steps."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 36 }}>
        
        {/* Horizontal or Vertical flow steps */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...cardRise(i * 0.12)}
              style={{
                background: step.bg,
                border: step.border,
                borderRadius: "24px",
                padding: "40px 48px",
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: step.color,
                  background: step.bg.replace("0.03", "0.12"),
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {step.num}
              </span>
              <div>
                <h4 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: 22, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideShell>
  );
}
