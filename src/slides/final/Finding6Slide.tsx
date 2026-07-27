import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding6Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 4 — Noise Ceiling Analysis"
        title="The realistic ceiling "
        highlight="is 0.64."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>
              0.639
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Deployment-Realistic Ceiling
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6B5B6E", fontWeight: 500 }}>
                Aesthetic predictability ceiling measured across distinct sessions (Cross-Session).
              </p>
            </div>
          </motion.div>

          {/* Model progress vs ceiling */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Performance Ratio
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#7B2C8F", lineHeight: 1 }}>59%</span>
              <span style={{ fontSize: 15, color: "#4A1533", fontWeight: 800 }}>we reach 59% of it (0.380 / 0.639)</span>
            </div>
            <div style={{ width: "100%", height: 8, background: "#FDFCFD", border: "1px solid #EEEDEA", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
              <div style={{ width: "59%", height: "100%", background: "#7B2C8F" }} />
            </div>
          </motion.div>

          {/* Caption */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 14,
              padding: "16px 20px",
              fontSize: 16,
              color: "#4A1533",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(194, 24, 91, 0.02)",
            }}
          >
            and averaging emotions raises it &mdash; the limit is measurement noise
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
              { label: "Same-Session (Theoretical)", value: "Higher (~0.8)", color: "#6B5B6E" },
              { label: "Cross-Session (Deployment-Realistic)", value: "0.639", color: "#C2185B" },
              { label: "Our Hybrid Model", value: "0.380 (59%)", color: "#7B2C8F" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
