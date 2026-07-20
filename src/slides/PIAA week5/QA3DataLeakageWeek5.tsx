import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA3DataLeakageWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-3"
        title="QA-3: Data Leakage "
        highlight="Verification."
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
            Is there any possibility of data leakage between Stage 1 and Stage 2?
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14, border: "1px solid #F3F4F6" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>Stage 1 Split</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#111827", marginTop: 4 }}>General Set (104 users)</div>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "#6B7280", lineHeight: 1.4 }}>
                Trained exclusively on 104 general users to learn generic image → emotion mapping.
              </p>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14, border: "1px solid #F3F4F6" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#EC4899", textTransform: "uppercase" }}>Stage 2 Split</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#111827", marginTop: 4 }}>Target Set (25 users)</div>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "#6B7280", lineHeight: 1.4 }}>
                Personal Ridge model fit strictly per target user on their training split fold only.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "rgba(16, 185, 129, 0.06)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 14,
            color: "#065F46",
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: "#10B981" }}>Zero User Overlap: </strong>
          General set and Target set are completely disjoint. Leakage would require seeing target test user ratings during Stage 1 training, which is impossible under this strict split.
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
        Q&A Slide — Data leakage verification
      </motion.div>
    </SlideShell>
  );
}
