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
        label="Finding 3"
        title="We match trait methods, "
        highlight="without traits."
        accentWidth={100}
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
            padding: "24px 32px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#4A1533", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Performance Comparison (CCC Metrics)
          </div>

          {/* Bar Chart Container */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: 180, paddingBottom: 16, borderBottom: "2px solid #EEEDEA", position: "relative" }}>
            {/* Grid Line 0.30 */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 45, borderBottom: "1px dashed #EEEDEA", zIndex: 0 }} />
            {/* Grid Line 0.35 */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 120, borderBottom: "1px dashed #EEEDEA", zIndex: 0 }} />

            {/* Bar 1: ICI */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#6B5B6E" }}>0.369</span>
              <div style={{ width: 56, height: 110, background: "#9E9E9E", borderRadius: "6px 6px 0 0" }} />
              <span style={{ fontSize: 12.5, fontWeight: 800, color: "#6B5B6E", textAlign: "center" }}>
                ICI<br /><span style={{ fontSize: 11, fontWeight: 550, color: "#6B5B6E" }}>(8B VLM + Traits)</span>
              </span>
            </div>

            {/* Bar 2: MIR */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#6B5B6E" }}>0.385</span>
              <div style={{ width: 56, height: 132, background: "#9E9E9E", borderRadius: "6px 6px 0 0" }} />
              <span style={{ fontSize: 12.5, fontWeight: 800, color: "#6B5B6E", textAlign: "center" }}>
                MIR<br /><span style={{ fontSize: 11, fontWeight: 550, color: "#6B5B6E" }}>(8B VLM + Traits)</span>
              </span>
            </div>

            {/* Bar 3: Ours */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1, position: "relative" }}>
              {/* Highlight Label */}
              <div
                style={{
                  position: "absolute",
                  top: -32,
                  background: "#FCE4EC", // Soft Pink
                  border: "1px solid rgba(194, 24, 91, 0.15)",
                  color: "#C2185B", // Chula Pink
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

              <span style={{ fontSize: 14, fontWeight: 900, color: "#C2185B" }}>0.380</span>
              <div style={{ width: 56, height: 124, background: "#C2185B", borderRadius: "6px 6px 0 0", boxShadow: "0 4px 10px rgba(194, 24, 91, 0.15)" }} />
              <span style={{ fontSize: 12.5, fontWeight: 900, color: "#C2185B", textAlign: "center" }}>
                Ours (Hybrid)<br /><span style={{ fontSize: 11, fontWeight: 700, color: "#C2185B" }}>(4B VLM Backbone)</span>
              </span>
            </div>
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
              padding: "20px 24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <h4 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 800, color: "#4A1533" }}>
              Core Novelty &amp; Contribution
            </h4>
            <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
              We achieve competitive predictive accuracy matching SOTA 8B baselines without requiring intrusive, multi-question user personality surveys (like the Big Five index).
            </p>
          </motion.div>

          {/* Privacy Highlight Card */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(123, 44, 143, 0.2)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxShadow: "0 4px 15px rgba(123, 44, 143, 0.01)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Strong Argument for User Privacy
            </div>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#4A1533" }}>
              Protecting User Privacy
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
              Predicting taste through intermediate aesthetic emotions allows us to completely bypass the storage or assessment of sensitive user profile traits.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Rigor Info */}
      <motion.div
        {...fadeInUp(0.5)}
        style={{
          marginTop: 20,
          background: "rgba(123, 44, 143, 0.04)",
          border: "1px dashed rgba(123, 44, 143, 0.15)",
          borderRadius: 12,
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 14.5,
          fontWeight: 700,
          color: "#7B2C8F", // Purple
        }}
      >
        <span>&bull; Stronger backbone &ne; always better (Qwen2 &approx; Qwen3)</span>
        <span>&bull; Fine-tuning not needed &mdash; matches Ryu &amp; Yanaka</span>
      </motion.div>
    </SlideShell>
  );
}
Finding3Slide.slideId = "Finding3";
