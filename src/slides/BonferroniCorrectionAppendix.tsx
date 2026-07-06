import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "245, 158, 11", opacity: 0.08 },
];

export function BonferroniCorrectionAppendix() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix"
        title="Why we apply"
        highlight="Bonferroni correction."
      />

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, minHeight: 0 }}>
        <motion.div
          {...fadeIn(0.2)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: "#EC4899" }}>The multiple testing problem</div>
          <p style={{ fontSize: 20, color: "#374151", margin: 0, lineHeight: 1.6 }}>
            If we flip a fair coin 35 times, we expect to get an unusual streak at least once just by chance. Statistics behaves the same way.
          </p>
          <p style={{ fontSize: 20, color: "#374151", margin: 0, lineHeight: 1.6 }}>
            Testing 35 pairs means we expect about 1–2 results to look significant at p &lt; 0.05 even if nothing is real.
          </p>

          <div style={{ background: "rgba(236, 72, 153, 0.04)", border: "1px solid rgba(236, 72, 153, 0.14)", borderRadius: 18, padding: "18px 20px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#DB2777", marginBottom: 6 }}>Expected false positives</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>
              35 × 0.05 = 1.75 pairs
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeIn(0.3)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ background: "rgba(245, 158, 11, 0.03)", border: "1px solid rgba(245, 158, 11, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#D97706", marginBottom: 8 }}>Bonferroni correction</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              Divide the significance threshold by the number of tests.
              <br />
              New threshold = 0.05 ÷ 35 = 0.00143.
            </div>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#059669", marginBottom: 8 }}>Result for RQ3</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              All 3 pairs have p-values between 0.024 and 0.041, which are above 0.00143, so none are confirmed after correction.
            </div>
          </div>

          <div style={{ background: "rgba(59, 130, 246, 0.03)", border: "1px solid rgba(59, 130, 246, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#2563EB", marginBottom: 8 }}>Bottom line</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              We found 3 pairs, which is not much more than the number expected by chance alone.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}