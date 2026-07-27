import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding8Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 4 — Cold-Start Analysis"
        title="Finding 8: Overcoming the "
        highlight="Cold-Start Barrier."
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
        {/* Left Column: Cold-Start results and logic */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main threshold alert card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.05em", background: "rgba(194, 79, 113, 0.05)", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", marginBottom: 12, border: "1px solid rgba(194, 79, 113, 0.12)" }}>
              The 50-Ratings Threshold
            </span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
              When is Personalization Worthwhile?
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "#626B74", lineHeight: 1.5 }}>
              Below approximately 50 user ratings, individual personalization performs worse than the population average model due to data sparsity.
            </p>
          </motion.div>

          {/* Direct vs Hybrid comparative card - Emphasized */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Critical Practical Insight
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136", lineHeight: 1.4 }}>
              &ldquo;Unless you use emotion mediation (Hybrid), personalizing with few ratings (under 50) is worse than simply using the population average.&rdquo;
            </div>
            <div style={{ fontSize: 12.5, color: "#626B74" }}>
              The Hybrid model quickly outperforms the population average past 50 ratings, whereas the Direct baseline fails to beat the population average even with more data.
            </div>
          </motion.div>
        </div>

        {/* Right Column: Threshold Plot */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emo_r_threshold.png"
            alt="CCC Delta vs Ratings Count threshold plot"
            fallbackTitle="Cold-Start Threshold Curve"
            fallbackSubtitle="Hybrid personalization begins to strictly outperform population baseline after 50 user ratings"
            fallbackStats={[
              { label: "Critical Threshold", value: "~50 ratings", color: "#2D3136" },
              { label: "Hybrid Advantage", value: "Significant", color: "#C24F71" },
              { label: "Direct Baseline", value: "Sub-population", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
