import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "239, 68, 68", opacity: 0.08 }, // Red glow
  { bottom: -200, right: -100, size: 600, color: "16, 185, 129", opacity: 0.08 }, // Green glow
];

export function ProblemsNextSteps() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Problems & Next Steps"
        title="Challenges & "
        highlight="Roadmap."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "stretch",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        {/* Left Column: Problems/Challenges */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "rgba(239, 68, 68, 0.02)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
            borderRadius: "28px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 950, color: "#EF4444", margin: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Honest Challenges
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <h4 style={{ fontSize: 22, fontWeight: 800, color: "#374151", marginBottom: 10 }}>
                1. Statistical Power Constraint
              </h4>
              <p style={{ fontSize: 19, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                Our sample size is limited to <strong>129 users</strong>. While sufficient for feasibility, it restricts our statistical power to confidently detect very small, nuanced effects in RQ3.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 22, fontWeight: 800, color: "#374151", marginBottom: 10 }}>
                2. Pending Baseline Comparison
              </h4>
              <p style={{ fontSize: 19, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                We are still waiting to run the ICI comparison model on the exact same 5-fold data split. This is required for a completely fair evaluation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Next Steps */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "rgba(16, 185, 129, 0.02)",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            borderRadius: "28px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 950, color: "#10B981", margin: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            Immediate Next Steps
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <h4 style={{ fontSize: 22, fontWeight: 800, color: "#374151", marginBottom: 10 }}>
                1. Standardize 5-Fold ICI Evaluation
              </h4>
              <p style={{ fontSize: 19, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                Train and evaluate the ICI baseline model on our custom 5-fold split to establish a fair and final benchmark comparison against our hybrid model.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 22, fontWeight: 800, color: "#374151", marginBottom: 10 }}>
                2. Transition to Vision-Language Models (VLM)
              </h4>
              <p style={{ fontSize: 19, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                Replace standard CLIP features with hidden representations from a VLM. Literature suggests this can improve the emotion prediction step (our main bottleneck at <em>r</em> ≈ 0.27).
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}
