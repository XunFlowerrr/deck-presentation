import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.08 },
];

export function NextSteps() {
  const steps = [
    {
      num: "01",
      title: "Run ICI baseline on our split",
      desc: "Read the code from Sia-san and run ICI on the same 5-fold split we used so the comparison with our hybrid model is completely fair.",
      color: "#06B6D4",
      bg: "rgba(6, 182, 212, 0.03)",
      border: "1px solid rgba(6, 182, 212, 0.15)",
    },
    {
      num: "02",
      title: "Try a stronger image feature",
      desc: "Replace CLIP with hidden representations from a vision-language model. Our current emotion prediction accuracy is r = 0.27, which is the main bottleneck in the pipeline.",
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
      border: "1px solid rgba(16, 185, 129, 0.15)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Future Directions"
        title="What's next"
        highlight="Two follow-ups."
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
                minHeight: 260,
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
                <h4 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 8, lineHeight: 1.2 }}>
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
