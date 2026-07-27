import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding5Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 3 — Backbone Redundancy"
        title="Finding 5: Stronger Backbones "
        highlight="Saturate Emotion Benefits."
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
        {/* Left Column: Saturation Concept */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main Summary Quote Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Key Theoretical Insight
            </span>
            <div style={{ fontSize: 28, fontWeight: 955, color: "#2D3136", lineHeight: 1.25, letterSpacing: "-1px" }}>
              &ldquo;Strong AI models already know about emotions.&rdquo;
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#626B74", lineHeight: 1.5 }}>
              We observe that as the visual backbone gets stronger and larger, the relative accuracy improvement gained from intermediate emotion mediation decreases.
            </p>
          </motion.div>

          {/* Explanation Card */}
          <motion.div
            {...fadeInUp(0.35)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 13.5,
              color: "#2D3136",
              lineHeight: 1.5,
              fontWeight: 600,
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.02)",
            }}
          >
            <strong style={{ color: "#C24F71" }}>Redundancy &amp; Saturation Effect: </strong>
            Stronger backbones (e.g. large VLMs) implicitly embed high-level emotional characteristics within their feature space. Hence, explicitly mediating via emotion labels yields diminishing returns.
          </motion.div>
        </div>

        {/* Right Column: Saturation Scatter Plot */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/redundancy_scatter.png"
            alt="Delta Gain vs Backbone strength (Redundancy Saturation)"
            fallbackTitle="Backbone Saturation Saturation Graph"
            fallbackSubtitle="Delta (Hybrid - Direct) diminishes as backbone feature representation gets stronger"
            fallbackStats={[
              { label: "Trend", value: "Negative correlation", color: "#C24F71" },
              { label: "Reason", value: "Redundant emotional features", color: "#2D3136" },
              { label: "Backbone used", value: "Qwen-4B VLM", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
