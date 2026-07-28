import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding8Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 4 — Cold-Start Analysis"
        title="Emotion makes "
        highlight="personalizing worth it"
        accentWidth={100}
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
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em", background: "rgba(194, 24, 91, 0.05)", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", marginBottom: 12, display: "inline-block", border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              The 50-Ratings Threshold
            </span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              When is Personalization Worthwhile?
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
              Below approximately 50 user ratings, individual personalization performs worse than the population average model due to data sparsity.
            </p>
          </motion.div>

          {/* Direct vs Hybrid comparative card - Emphasized */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(123, 44, 143, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              boxShadow: "0 10px 30px rgba(123, 44, 143, 0.02)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Critical Practical Insight
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#4A1533", lineHeight: 1.4 }}>
              &ldquo;Unless you use emotion mediation (Hybrid), personalizing with few ratings (under 50) is worse than simply using the population average.&rdquo;
            </div>
            <div style={{ fontSize: 12.5, color: "#6B5B6E", fontWeight: 500 }}>
              The Hybrid model quickly outperforms the population average past 50 ratings, whereas the Direct baseline fails to beat the population average even with more data.
            </div>
          </motion.div>

          {/* Caption */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 14,
              padding: "16px 20px",
              fontSize: 18,
              color: "#4A1533",
              lineHeight: 1.4,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(194, 24, 91, 0.02)",
            }}
          >
            Below 50 ratings, personalizing hurts. Direct never beats the crowd; only Hybrid does, from 50 on.
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
              { label: "Population (dashed pink)", value: "threshold limit", color: "#C2185B" },
              { label: "Hybrid (purple)", value: "beats crowd at 50", color: "#7B2C8F" },
              { label: "Direct (grey)", value: "fails to beat crowd", color: "#9E9E9E" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
