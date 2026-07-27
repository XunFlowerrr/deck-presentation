import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding1Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 2 — Does It Work?"
        title="Going through emotion "
        highlight="Helps 93% of the Time."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Key results and stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Main Gain Card */}
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
              +0.066
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                Significant Accuracy Gain
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 16, color: "#6B5B6E", fontWeight: 700 }}>
                Direct CCC (0.293) &rarr; Hybrid CCC (0.359)
              </p>
            </div>
          </motion.div>

          {/* Detailed stats grids */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Help Share */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 14,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <div style={{ fontSize: 12, color: "#6B5B6E", fontWeight: 800 }}>Helped Share</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#7B2C8F", marginTop: 4 }}>
                92.8%
              </div>
              <div style={{ fontSize: 11, color: "#6B5B6E", marginTop: 2, fontWeight: 700 }}>of user-domain units</div>
            </div>

            {/* Dose Response */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(194, 24, 91, 0.15)",
                borderRadius: 14,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(194, 24, 91, 0.02)",
              }}
            >
              <div style={{ fontSize: 12, color: "#6B5B6E", fontWeight: 800 }}>Support Effect</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#4A1533", marginTop: 10 }}>
                Dose-Response
              </div>
              <div style={{ fontSize: 11, color: "#6B5B6E", marginTop: 2, fontWeight: 700 }}>More ratings = higher gain</div>
            </div>
          </motion.div>

          {/* Key takeaway */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 14,
              padding: "16px 20px",
              fontSize: 14,
              color: "#2B2230",
              lineHeight: 1.5,
              fontWeight: 600,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
            }}
          >
            <strong style={{ color: "#C2185B" }}>Dose-Response Effect: </strong>
            As user rating data grows, the accuracy improvement (Delta CCC) increases consistently. This confirms that collecting personalized preference data provides solid, scalable benefits.
          </motion.div>
        </div>

        {/* Right Column: Support Curve Plot */}
        <motion.div {...cardRise(0.25)} style={{ width: "100%" }}>
          <PlotImage
            src="/output/plots/emotion_help_scatter_n_unique.png"
            alt="Delta Gain vs Ratings Count (Dose-Response)"
            fallbackTitle="Dose-Response Support Curve"
            fallbackSubtitle="Delta (Hybrid - Direct) increases with user ratings size"
            fallbackStats={[
              { label: "Direct CCC", value: "0.293", color: "#6B5B6E" },
              { label: "Hybrid CCC", value: "0.359", color: "#C2185B" },
              { label: "Helped Share", value: "92.8%", color: "#7B2C8F" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={420}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
