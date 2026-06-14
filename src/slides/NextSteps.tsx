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
      title: "Complete 5-Fold Cross-Validation",
      desc: "Run comprehensive experiments across all remaining folds to secure robust, stable benchmark metrics against ICI.",
    },
    {
      num: "02",
      title: "Correlate with Personality (Big Five)",
      desc: "Cross-reference each person's emotion weightings (personal formula) with their Big Five personality profiles already present in XPASS-Vis.",
    },
    {
      num: "03",
      title: "Test Domain Consistency",
      desc: "Analyze whether an individual's personal formula stays consistent when evaluating different domains (e.g. switching from landscape to fashion).",
    },
    {
      num: "04",
      title: "Paper Write-up & Submission",
      desc: "Synthesize findings, document the explainability advantages of emotion mediation, and start drafting the paper.",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Future Directions"
        title="Next Research"
        highlight="Steps."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
        
        {/* Horizontal or Vertical flow steps */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...cardRise(i * 0.12)}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E7EB",
                borderRadius: "24px",
                padding: "28px 32px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#7C3AED",
                  background: "rgba(124, 58, 237,0.08)",
                  width: 44,
                  height: 44,
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
                <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
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
