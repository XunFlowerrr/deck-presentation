import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding6Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 4 — Noise Ceiling Analysis"
        title="Finding 6: Theoretical and Realistic "
        highlight="Noise Ceilings."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Ceiling Stats and Choices */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main Stat Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 955, color: "#C24F71", lineHeight: 1 }}>
              0.639
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
                Deployment-Realistic Ceiling
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#626B74" }}>
                Maximum performance ceiling when evaluating across recording intervals (Cross-Session).
              </p>
            </div>
          </motion.div>

          {/* Model progress vs ceiling */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Model Performance vs. Ceiling
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 32, fontWeight: 950, color: "#C24F71" }}>59%</span>
              <span style={{ fontSize: 14, color: "#2D3136", fontWeight: 700 }}>of the realistic ceiling (Hybrid: 0.380 / Ceiling: 0.639)</span>
            </div>
            <div style={{ width: "100%", height: 8, background: "#FCFAF6", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
              <div style={{ width: "59%", height: "100%", background: "#C24F71" }} />
            </div>
          </motion.div>

          {/* Explanation notes */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
              fontSize: 13,
              color: "#2D3136",
              lineHeight: 1.45,
              fontWeight: 600,
            }}
          >
            <strong style={{ color: "#C24F71" }}>Honest &amp; Transparent Comparison: </strong>
            Human aesthetic ratings within the same session yield an overinflated noise ceiling. We evaluate across distinct sessions (Cross-Session) to isolate temporal noise and present a more realistic benchmark.
          </motion.div>
        </div>

        {/* Right Column: Bar Chart */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/noise_ceiling_bar.png"
            alt="Human Noise Ceiling comparison chart"
            fallbackTitle="Human Noise Ceiling Estimates"
            fallbackSubtitle="Comparing different noise ceiling definitions with Hybrid model performance"
            fallbackStats={[
              { label: "Same-Session (Inflated)", value: "Higher (~0.8)", color: "#2D3136" },
              { label: "Cross-Session (Honest)", value: "0.639", color: "#C24F71" },
              { label: "Our Hybrid Model", value: "0.380 (59%)", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
