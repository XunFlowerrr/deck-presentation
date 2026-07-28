import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function DatasetProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 2 — Dataset & Protocol"
        title="Deep enough per person, "
        highlight="and leak-free"
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: Big Hero Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Stat 1 */}
            <motion.div
              {...cardRise(0.1)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <div style={{ fontSize: 50, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>129</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>People (Evaluators)</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              {...cardRise(0.15)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <div style={{ fontSize: 50, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>6,526</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>Images (Unique)</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              {...cardRise(0.2)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <div style={{ fontSize: 50, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>87,836</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>Ratings (Total)</div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              {...cardRise(0.25)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <div style={{ fontSize: 50, fontWeight: 900, color: "#C2185B", lineHeight: 1 }}>3</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>Categories</div>
              <div style={{ fontSize: 13, color: "#6B5B6E", fontWeight: 700, marginTop: 2 }}>Art / Fashion / Landscape</div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: soft pink box */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            background: "#FCE4EC", // soft pink
            border: "1.5px solid rgba(194, 24, 91, 0.15)",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 12px 40px rgba(194, 24, 91, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#C2185B", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              1
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                Deep Ratings Per Person
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 16.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 600 }}>
                Each person rated 200+ images &rarr; deep enough for a personal formula.
              </p>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(194, 24, 91, 0.1)" }} />

          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#C2185B", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              2
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                Test-Retest Setup
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 16.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 600 }}>
                Some images rated twice &rarr; used later to establish human noise ceilings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Leak-Free Protocol */}
      <motion.div
        {...fadeInUp(0.35)}
        style={{
          background: "rgba(123, 44, 143, 0.06)", // soft purple
          border: "1px solid rgba(123, 44, 143, 0.15)",
          borderRadius: 16,
          padding: "16px 24px",
          marginTop: 32,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em", background: "#FFFFFF", padding: "4px 8px", borderRadius: 6, border: "1px solid rgba(123, 44, 143, 0.2)" }}>
          Protocol
        </span>
        <span style={{ fontSize: 16.5, color: "#6B5B6E", fontWeight: 700 }}>
          <strong style={{ color: "#7B2C8F" }}>leak-free:</strong> test users &amp; images never seen in training
        </span>
      </motion.div>
    </SlideShell>
  );
}
