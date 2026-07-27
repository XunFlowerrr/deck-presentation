import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding3Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 2 — Baseline Comparison"
        title="We match trait methods, "
        highlight="Without Traits."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Custom CSS Bar Chart */}
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
            gap: 24,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#4A1533", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Performance Comparison (CCC Metrics)
          </div>

          {/* Bar Chart Container */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: 200, paddingBottom: 16, borderBottom: "2px solid #EEEDEA", position: "relative" }}>
            {/* Grid Line 0.30 */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 50, borderBottom: "1px dashed #EEEDEA", zIndex: 0 }} />
            {/* Grid Line 0.35 */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 130, borderBottom: "1px dashed #EEEDEA", zIndex: 0 }} />

            {/* Bar 1: ICI */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#6B5B6E" }}>0.369</span>
              <div style={{ width: 60, height: 120, background: "#6B5B6E", opacity: 0.5, borderRadius: "8px 8px 0 0" }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: "#6B5B6E", textAlign: "center" }}>
                ICI<br /><span style={{ fontSize: 11, fontWeight: 550 }}>(8B VLM + Traits)</span>
              </span>
            </div>

            {/* Bar 2: MIR */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#6B5B6E" }}>0.385</span>
              <div style={{ width: 60, height: 146, background: "#6B5B6E", opacity: 0.5, borderRadius: "8px 8px 0 0" }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: "#6B5B6E", textAlign: "center" }}>
                MIR<br /><span style={{ fontSize: 11, fontWeight: 550 }}>(8B VLM + Traits)</span>
              </span>
            </div>

            {/* Bar 3: Ours */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1, position: "relative" }}>
              {/* Highlight Label */}
              <div
                style={{
                  position: "absolute",
                  top: -36,
                  background: "rgba(194, 24, 91, 0.08)",
                  border: "1px solid rgba(194, 24, 91, 0.2)",
                  color: "#C2185B",
                  fontSize: 10,
                  fontWeight: 900,
                  padding: "2px 8px",
                  borderRadius: 6,
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 6px rgba(194, 24, 91, 0.05)",
                }}
              >
                no traits · interpretable
              </div>

              <span style={{ fontSize: 15, fontWeight: 900, color: "#C2185B" }}>0.380</span>
              <div style={{ width: 60, height: 138, background: "#C2185B", borderRadius: "8px 8px 0 0", boxShadow: "0 4px 12px rgba(194, 24, 91, 0.2)" }} />
              <span style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", textAlign: "center" }}>
                Ours (Hybrid)<br /><span style={{ fontSize: 11, fontWeight: 700 }}>(4B VLM Backbone)</span>
              </span>
            </div>
          </div>

          {/* Sub-tagline */}
          <div style={{ textAlign: "center", fontSize: 14, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>
            4B ties 8B &mdash; bigger backbone not needed
          </div>
        </motion.div>

        {/* Right Column: Key Contribution & Privacy Highlight */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            }}
          >
            <h4 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              Core Novelty &amp; Contribution
            </h4>
            <p style={{ margin: 0, fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
              We achieve competitive predictive accuracy matching SOTA 8B baselines without requiring intrusive, multi-question user personality surveys (like the Big Five index).
            </p>
          </motion.div>

          {/* Privacy Highlight Card */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(123, 44, 143, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 8px 24px rgba(123, 44, 143, 0.02)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Strong Argument for User Privacy
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              Protecting User Privacy
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 500 }}>
              Predicting taste through intermediate aesthetic emotions allows us to completely bypass the storage or assessment of sensitive user profile traits.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
