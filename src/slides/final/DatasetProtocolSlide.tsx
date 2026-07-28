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
        highlight="XPASS-Vis"
        accentWidth={100}
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
        {/* Left Column: 2x2 Stats Grid Card */}
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
            {/* Stat 1: 129 People */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>129</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>People (Evaluators)</span>
            </div>

            {/* Stat 2: 6,526 Images */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>6,526</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Images (Unique)</span>
            </div>

            {/* Divider spanning 2 columns */}
            <div style={{ gridColumn: "span 2", height: 1, background: "#EEEDEA" }} />

            {/* Stat 3: 3 Domains */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>3</span>
                <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Domains</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B5B6E", fontWeight: 700 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C2185B" }} /> Art
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B5B6E", fontWeight: 700 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7B2C8F" }} /> Fashion
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B5B6E", fontWeight: 700 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C2185B" }} /> Landscape
                </div>
              </div>
            </div>

            {/* Stat 4: 4,509 Test-Retest Pairs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#7B2C8F", lineHeight: 1 }}>4,509</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 850, color: "#4A1533" }}>Test-Retest Pairs</span>
              <p style={{ margin: 0, fontSize: 11, color: "#6B5B6E", fontWeight: 600, lineHeight: 1.35 }}>
                Same image rated twice by same user across sessions to establish human self-consistency.
              </p>
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
