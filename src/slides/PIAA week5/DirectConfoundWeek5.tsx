import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function DirectConfoundWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — Confound Control"
        title="Direct Strength Is a "
        highlight="Confound."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", textTransform: "uppercase" }}>
              Surface Observation
            </div>
            <div style={{ fontSize: 15, color: "#374151", lineHeight: 1.4 }}>
              Direct CCC correlates with delta at <strong>r = +0.15</strong> (looks like Direct strength helps delta).
            </div>
            <div style={{ background: "#F3F4F6", padding: "8px 14px", borderRadius: 10, fontSize: 13, color: "#7C3AED", fontWeight: 700 }}>
              BUT Direct CCC ↔ emo_r = +0.66 (they move together!)
            </div>
          </motion.div>

          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(124, 58, 237, 0.25)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(124, 58, 237, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Partial Correlation Results
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  padding: "10px 14px",
                  borderRadius: 10,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                  delta ↔ Direct CCC | controlling for emo_r
                </span>
                <span style={{ fontSize: 16, fontWeight: 900, color: "#EF4444" }}>
                  −0.04 (VANISHES)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(16, 185, 129, 0.06)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  padding: "10px 14px",
                  borderRadius: 10,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                  delta ↔ emo_r | controlling for Direct CCC
                </span>
                <span style={{ fontSize: 16, fontWeight: 900, color: "#10B981" }}>
                  +0.26 (SURVIVES)
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "14px 18px",
              fontSize: 13,
              color: "#374151",
              lineHeight: 1.45,
            }}
          >
            <strong style={{ color: "#7C3AED" }}>Single Mechanism: </strong>
            Direct strength was a statistical confound. There is only ONE underlying mechanism controlling emotion benefit: <strong>emotion predictability (emo_r)</strong>.
          </motion.div>
        </div>

        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emotion_help_scatter_emo_r.png"
            alt="Scatter plot of Delta vs emo_r"
            fallbackTitle="Scatter Plot: Delta Gain vs emo_r"
            fallbackSubtitle="Clear positive trend showing emo_r driving delta across 387 units"
            fallbackStats={[
              { label: "Unadjusted r", value: "+0.30", color: "#7C3AED" },
              { label: "Partial r (Direct controlled)", value: "+0.26", color: "#10B981" },
              { label: "Direct Partial r", value: "-0.04 (ns)", color: "#EF4444" },
            ]}
            maxHeight={390}
          />
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "8px 14px",
          fontSize: 11,
          color: "#6B7280",
          maxWidth: 560,
        }}
      >
        <strong style={{ color: "#374151" }}>Analogy:</strong> Foot size correlates with reading ability in children — both grow with age. Here: age = <strong style={{ color: "#7C3AED" }}>emo_r</strong>, foot size = <strong style={{ color: "#4B5563" }}>Direct CCC</strong>, reading = <strong style={{ color: "#EC4899" }}>delta</strong>.
      </motion.div>
    </SlideShell>
  );
}
