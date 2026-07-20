import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA6MultipleComparisonsWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-6"
        title="QA-6: Multiple Testing "
        highlight="Correction."
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
            Did you account for false discovery rates across multiple tested variables?
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Tested Predictors</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#111827", marginTop: 4 }}>28</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>User traits, stats, baselines</div>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Correction Method</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#7C3AED", marginTop: 8 }}>Bonferroni</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>alpha_adj = 0.05 / 28 = 0.00179</div>
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#065F46", fontWeight: 600 }}>Surviving Factors</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#10B981", marginTop: 4 }}>emo_r Only</div>
              <div style={{ fontSize: 12, color: "#065F46", marginTop: 4 }}>p = 1e-9 &lt;&lt; 0.00179</div>
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
          <strong style={{ color: "#7C3AED" }}>Robust Significance: </strong>
          Out of 28 candidate features evaluated for predicting delta, ONLY emotion predictability (emo_r) survived strict Bonferroni correction (accounting for R² = 0.13 of delta variance).
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
        Q&A Slide — Multiple testing & Bonferroni correction
      </motion.div>
    </SlideShell>
  );
}
