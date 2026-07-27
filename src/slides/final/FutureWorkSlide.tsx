import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function FutureWorkSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Outro"
        title="Next "
        highlight="Steps."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        {/* Left Column: Method limits */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: "28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ borderBottom: "2px solid #C2185B", paddingBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Limitations
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 800, color: "#4A1533" }}>
              Method Limits
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                1. Emotion Dimensionality Limits
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                7 basic emotions are not enough for describing complex visual art or abstract aesthetics.
              </p>
            </div>

            <div style={{ height: 1, background: "#EEEDEA" }} />

            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                2. Temporal Drift &amp; Bias
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                Individual tastes change over time. Stationary weights do not adapt to user fatigue or seasonality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: New directions */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: "28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ borderBottom: "2px solid #7B2C8F", paddingBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Opportunities
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 800, color: "#4A1533" }}>
              New Directions
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                1. Context-Dynamic Weighting
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                Weights dynamically update depending on context, ambient conditions, or user mood shifts.
              </p>
            </div>

            <div style={{ height: 1, background: "#EEEDEA" }} />

            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                2. Active Learning Querying
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                Query users strategically to fit weights faster, reducing the 50-ratings cold-start threshold.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom thank you / Q&A ribbon */}
      <div
        style={{
          marginTop: 24,
          background: "#FCE4EC",
          border: "1px solid rgba(194, 24, 91, 0.15)",
          borderRadius: 12,
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 900, color: "#4A1533" }}>Thank you very much.</span>
        <span style={{ fontSize: 16, fontWeight: 900, color: "#C2185B" }}>Questions &amp; Answers</span>
      </div>
    </SlideShell>
  );
}
