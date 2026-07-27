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
        {/* Future Work Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            maxWidth: 900,
            margin: "0 auto",
            width: "100%",
            marginTop: 16,
          }}
        >
          {/* Point 1 */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7B2C8F" }} />
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Context-Dynamic Weighting
              </h4>
            </div>
            <p style={{ margin: "10px 0 0 20px", fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
              Weights dynamically update depending on context, ambient conditions, or user mood shifts over time.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C2185B" }} />
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Active Learning Querying
              </h4>
            </div>
            <p style={{ margin: "10px 0 0 20px", fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
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
            marginTop: 40,
            gap: 8,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 54,
              fontWeight: 900,
              color: "#4A1533", // Deep Plum
              letterSpacing: "-2px",
            }}
          >
            Thank you
          </h2>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#C2185B", // Primary Pink
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
FutureWorkSlide.slideId = "FutureWork";
