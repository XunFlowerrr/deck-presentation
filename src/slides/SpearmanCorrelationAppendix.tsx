import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn } from "../lib/motion.ts";

const GLOWS = [
  { top: -220, right: -120, size: 760, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -120, size: 560, color: "59, 130, 246", opacity: 0.08 },
];

export function SpearmanCorrelationAppendix() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix"
        title="How we measure the relationship"
        highlight="Spearman rank correlation."
      />

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 28, minHeight: 0 }}>
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
            justifyContent: "center",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: "#7C3AED" }}>
            What it asks
          </div>
          <p style={{ fontSize: 22, color: "#374151", margin: 0, lineHeight: 1.6 }}>
            When one value goes up, does the other tend to go up too?
          </p>

          <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 18 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#111827", marginBottom: 10 }}>
              How it works
            </div>
            <ol style={{ margin: 0, paddingLeft: 24, fontSize: 20, color: "#4B5563", lineHeight: 1.65 }}>
              <li>Convert values to ranks instead of raw numbers.</li>
              <li>Compute Pearson correlation on the ranked values.</li>
            </ol>
          </div>

          <div style={{ background: "rgba(124, 58, 237, 0.04)", border: "1px solid rgba(124, 58, 237, 0.14)", borderRadius: 18, padding: "18px 20px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#7C3AED", marginBottom: 10 }}>Formula</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
              r = 1 − (6 × Σd²) / (n × (n²−1))
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
          <div style={{ background: "rgba(59, 130, 246, 0.03)", border: "1px solid rgba(59, 130, 246, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#2563EB", marginBottom: 8 }}>r ranges from −1 to +1</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              Close to +1 means the weight is high and the trait score also tends to be high.
              <br />
              Close to 0 means no relationship.
              <br />
              Close to −1 means the weight is high and the trait score tends to be low.
            </div>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#059669", marginBottom: 8 }}>Why Spearman, not Pearson?</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              Personality survey data may not be normally distributed. Spearman works on ranks, so it is more robust to outliers and does not assume a specific distribution shape.
            </div>
          </div>

          <div style={{ background: "rgba(245, 158, 11, 0.03)", border: "1px solid rgba(245, 158, 11, 0.12)", borderRadius: "22px", padding: "22px 24px" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#D97706", marginBottom: 8 }}>p-value</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.6 }}>
              It is the probability of seeing this r by chance if there is truly no relationship. Small p means the relationship is less likely to be random.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}