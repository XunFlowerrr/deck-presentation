import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "239, 68, 68", opacity: 0.08 }, // Red glow
  { bottom: -200, right: -100, size: 600, color: "16, 185, 129", opacity: 0.08 }, // Green glow
];

export function ProblemsNextSteps() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Future Directions"
        title="What's next"
        highlight="Two follow-ups."
      />

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            width: "100%",
            maxWidth: 1420,
            background: "rgba(16, 185, 129, 0.02)",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            borderRadius: "34px",
            padding: "56px 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 36,
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ background: "rgba(6, 182, 212, 0.03)", border: "1px solid rgba(6, 182, 212, 0.15)", borderRadius: 26, padding: "34px 34px", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 style={{ fontSize: 28, fontWeight: 900, color: "#06B6D4", margin: "0 0 14px 0", lineHeight: 1.2 }}>
              1. Run ICI baseline on our split
            </h4>
            <p style={{ fontSize: 24, color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
              Read the code from Sia-san and run ICI on the same 5-fold split we used so the comparison with our hybrid model is completely fair.
            </p>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: 26, padding: "34px 34px", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 style={{ fontSize: 28, fontWeight: 900, color: "#10B981", margin: "0 0 14px 0", lineHeight: 1.2 }}>
              2. Try a stronger image feature
            </h4>
            <p style={{ fontSize: 24, color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
              Replace CLIP with hidden representations from a vision-language model. Our current emotion prediction accuracy is r = 0.27, which is the main bottleneck in the pipeline.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
