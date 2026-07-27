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
        label="Finding 1"
        title="Going through emotion "
        highlight="helps 93% of users."
        accentWidth={100}
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
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main Gain Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: "#6B5B6E", fontWeight: 700 }}>
              <span>Direct CCC: 0.293</span>
              <span style={{ color: "#7B2C8F" }}>&rarr;</span>
              <span style={{ color: "#7B2C8F", fontWeight: 800 }}>Hybrid CCC: 0.359</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 64, fontWeight: 950, color: "#C2185B", lineHeight: 1, letterSpacing: "-2px" }}>
                +0.066
              </span>
              <span style={{ fontSize: 20, fontWeight: 850, color: "#4A1533" }}>
                Gain (Delta CCC)
              </span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 750, color: "#7B2C8F", marginTop: 4 }}>
              helps 92.8% (93%) of people
            </div>
          </motion.div>

          {/* Details Card */}
          <motion.div
            {...cardRise(0.28)}
            style={{
              background: "#FCE4EC", // Soft Pink Box
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 14.5,
              color: "#2B2230",
              lineHeight: 1.45,
              fontWeight: 550,
            }}
          >
            <strong style={{ color: "#C2185B" }}>Dose-Response Behavior:</strong>
            <br />
            As the number of ratings per user increases, the accuracy improvement becomes larger and more stable. Emotion mediation prevents model overfitting when adapting to small amounts of personal taste data.
          </motion.div>
        </div>

        {/* Right Column: Support Curve Plot */}
        <motion.div {...cardRise(0.22)} style={{ width: "100%" }}>
          <PlotImage
            src="/output/plots/emotion_help_scatter_n_unique.png"
            alt="Delta Gain vs Ratings Count (Dose-Response)"
            fallbackTitle="Dose-Response Support Curve"
            fallbackSubtitle="Delta (Hybrid - Direct) increases with user ratings size"
            fallbackStats={[
              { label: "Direct Baseline", value: "0.293", color: "#9E9E9E" },
              { label: "Hybrid Pathway", value: "0.359", color: "#7B2C8F" },
              { label: "Accuracy Gain", value: "+0.066 (helps 93%)", color: "#C2185B" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>

      {/* Bottom Caption */}
      <motion.div
        {...fadeInUp(0.35)}
        style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 800,
          color: "#7B2C8F", // Secondary purple
        }}
      >
        more personal data &rarr; more help
      </motion.div>
    </SlideShell>
  );
}
Finding1Slide.slideId = "Finding1";
