import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn } from "../lib/motion.ts";
import { fourApproachesImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function AppendixApproaches() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix"
        title="Experiment 3:"
        highlight="4 Approaches Detail."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0 }}>
        
        {/* Left Column: Full Diagram */}
        <motion.div
          {...fadeIn(0.2)}
          style={{
            flex: 1.3,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={fourApproachesImg}
            alt="Experiment 3 4 Approaches Block Diagram"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              transform: "scale(1.5)",
            }}
          />
        </motion.div>

        {/* Right Column: Brief details */}
        <motion.div
          {...fadeIn(0.3)}
          style={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 900, color: "#111827", margin: 0 }}>
            Approach Comparison Highlights
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.5 }}>
              <strong>1. Direct:</strong> Baseline, maps visual embeddings directly to personal scores via per-user ridge.
            </div>
            <div style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.5 }}>
              <strong>2. Population-emo:</strong> Shared emotion prediction module. Personalization occurs at the weight mapping phase.
            </div>
            <div style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.5 }}>
              <strong>3. Personal-emo:</strong> Tries to fit both models per-user. Underperforms due to data scarcity (~100 images).
            </div>
            <div style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.5 }}>
              <strong>4. Hybrid (Best):</strong> Combines stable shared population predictions with small per-user corrections.
            </div>
          </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}
