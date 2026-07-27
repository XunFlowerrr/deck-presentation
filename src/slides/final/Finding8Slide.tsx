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
        label="Finding 8"
        title="Emotion makes "
        highlight="personalizing worth it."
        accentWidth={120}
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
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em", background: "#FCE4EC", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", marginBottom: 12, display: "inline-block", border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              The 50-Ratings Threshold
            </span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              When is Personalization Worthwhile?
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 550 }}>
              Below approximately 50 user ratings, individual personalization performs worse than the population average model due to data sparsity.
            </p>
          </motion.div>

          {/* Direct vs Hybrid comparative card - Emphasized */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 6px 20px rgba(194, 24, 91, 0.02)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Critical Practical Insight
            </div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: "#4A1533", lineHeight: 1.4 }}>
              &ldquo;Unless you use emotion mediation (Hybrid), personalizing with few ratings (under 50) is worse than simply using the population average.&rdquo;
            </div>
          </motion.div>
        </div>

        {/* Right Column: Threshold Plot */}
        <motion.div {...cardRise(0.22)}>
          <PlotImage
            src="/output/plots/emo_r_threshold.png"
            alt="CCC Delta vs Ratings Count threshold plot"
            fallbackTitle="Cold-Start Threshold Curve"
            fallbackSubtitle="Hybrid personalization begins to strictly outperform population baseline after 50 user ratings"
            fallbackStats={[
              { label: "Population baseline", value: "Dashed Pink", color: "#C2185B" },
              { label: "Hybrid Pathway", value: "Beats population at 50", color: "#7B2C8F" },
              { label: "Direct Baseline", value: "Sub-population", color: "#9E9E9E" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>

      {/* Bottom Caption */}
      <motion.div
        {...fadeInUp(0.45)}
        style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 18,
          fontWeight: 800,
          color: "#4A1533", // Deep Plum
        }}
      >
        Direct never beats the crowd. Hybrid does, from 50 ratings.
      </motion.div>
    </SlideShell>
  );
}
Finding8Slide.slideId = "Finding8";
