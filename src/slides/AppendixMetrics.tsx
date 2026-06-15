import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn } from "../lib/motion.ts";
import { cccSccMetricsImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "59, 130, 246", opacity: 0.1 },
];

export function AppendixMetrics() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix"
        title="Evaluation"
        highlight="Metrics (CCC/SCC)."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0 }}>
        
        {/* Full width metrics illustration */}
        <motion.div
          {...fadeIn(0.2)}
          style={{
            flex: 1.2,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "32px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={cccSccMetricsImg}
            alt="CCC and SCC Metrics Equations"
            style={{
              maxWidth: "100%",
              maxHeight: "460px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </motion.div>

        {/* Short bullet details on the right */}
        <motion.div
          {...fadeIn(0.3)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ background: "rgba(59, 130, 246, 0.02)", border: "1px solid rgba(59, 130, 246, 0.1)", borderRadius: "20px", padding: "24px" }}>
            <h4 style={{ fontSize: 22, fontWeight: 900, color: "#1D4ED8", margin: "0 0 8px 0" }}>
              Concordance Correlation Coefficient
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
              Measures both **scale alignment** and **ranking alignment**. Unlike standard correlation, it penalizes predictions if they are shifted (e.g. consistently too high) or scaled differently.
            </p>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.02)", border: "1px solid rgba(16, 185, 129, 0.1)", borderRadius: "20px", padding: "24px" }}>
            <h4 style={{ fontSize: 22, fontWeight: 900, color: "#065F46", margin: "0 0 8px 0" }}>
              Spearman Rank Correlation
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
              Measures **ranking order only**. It ignores the exact numeric ratings and only checks if the predicted order matches the observer's relative preferences.
            </p>
          </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}
