import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function FutureWorkSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Outro"
        title="Future "
        highlight="work."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 24,
        }}
      >
        {/* Future Work Cards (Expanded & Larger Layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            maxWidth: 960,
            margin: "0 auto",
            width: "100%",
            marginTop: 20,
          }}
        >
          {/* Point 1 */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 24,
              padding: "28px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#7B2C8F" }} />
              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                Context-Dynamic Weighting
              </h4>
            </div>
            <p style={{ margin: "4px 0 0 26px", fontSize: 15, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 550 }}>
              Weights dynamically update depending on context, ambient conditions, or user mood shifts over time.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 24,
              padding: "28px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#C2185B" }} />
              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                Active Learning Querying
              </h4>
            </div>
            <p style={{ margin: "4px 0 0 26px", fontSize: 15, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 550 }}>
              Query users strategically to fit weights faster, reducing the 50-ratings cold-start threshold significantly.
            </p>
          </motion.div>
        </div>

        {/* Large Centered Thank You Message */}
        <motion.div
          {...fadeInUp(0.4)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 36,
            gap: 8,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 56,
              fontWeight: 900,
              color: "#4A1533",
              letterSpacing: "-2px",
            }}
          >
            Thank you
          </h2>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#C2185B",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Questions &amp; Answers
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
