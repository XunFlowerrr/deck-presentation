import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function DatasetProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 2 — Dataset & Protocol"
        title="DATASET: "
        highlight="XPASS-Vis."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: 4 Big Stats in 2x2 Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {/* Cell 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>129</span>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>People (Evaluators)</span>
            </div>

            {/* Cell 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>3</span>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Domains</span>
              <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                <span style={{ fontSize: 10, color: "#6B5B6E", fontWeight: 700, background: "rgba(107,91,110,0.06)", padding: "1px 5px", borderRadius: 4 }}>Art</span>
                <span style={{ fontSize: 10, color: "#6B5B6E", fontWeight: 700, background: "rgba(107,91,110,0.06)", padding: "1px 5px", borderRadius: 4 }}>Fashion</span>
                <span style={{ fontSize: 10, color: "#6B5B6E", fontWeight: 700, background: "rgba(107,91,110,0.06)", padding: "1px 5px", borderRadius: 4 }}>Land.</span>
              </div>
            </div>

            {/* Divider line */}
            <div style={{ gridColumn: "span 2", height: 1, background: "#EEEDEA" }} />

            {/* Cell 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>6,526</span>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Images (Unique)</span>
            </div>

            {/* Cell 4 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#7B2C8F", lineHeight: 1 }}>4,509</span>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Test-Retest Pairs</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 2 Main Logic Points */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Narrative &amp; Rigor
          </div>

          {/* Point 1 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(123, 44, 143, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7B2C8F", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(123, 44, 143, 0.15)" }}>
              1
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Deep Ratings Per Person
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5 }}>
                Evaluators rated hundreds of images, providing enough statistical depth to fit a robust personal weighting formula for each user.
              </p>
            </div>
          </div>

          <div style={{ width: "100%", height: 1, background: "#EEEDEA" }} />

          {/* Point 2 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(194, 24, 91, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C2185B", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              2
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Leak-Free CV Splits
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#6B5B6E", lineHeight: 1.5 }}>
                Strict disjoint splits prevent leakage: target users and their evaluation images are completely hidden from the Stage 1 emotion model.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
