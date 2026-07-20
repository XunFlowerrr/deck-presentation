import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA8MetricChoiceWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-8"
        title="QA-8: Why CCC Over "
        highlight="RMSE or Spearman?"
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 18,
            padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
            Why Lin's Concordance Correlation Coefficient (CCC) as the Primary Metric?
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#7C3AED" }}>Lin's CCC</div>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                Evaluates both <strong>ranking agreement AND absolute scale alignment</strong>. Penalizes predictions with right rank but shifted/stretched scale.
              </p>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#6B7280" }}>RMSE / MSE</div>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                Measures mean squared error in absolute scale, but does not isolate linear agreement or relative ranking quality.
              </p>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#6B7280" }}>Spearman Rank</div>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                Evaluates ordinal ranking only, ignoring absolute rating scale completely. (Reported alongside as secondary metric).
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#F9FAFB",
            border: "1px solid #F3F4F6",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 14,
            color: "#374151",
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: "#7C3AED" }}>Literature Standard: </strong>
          CCC is the standard benchmark metric established by Hayashi-san et al. (XPASS-Vis) and Ryu & Yanaka (2024) for personalized image aesthetic assessment.
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.5)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Q&A Slide — Evaluation metric choice justification
      </motion.div>
    </SlideShell>
  );
}
