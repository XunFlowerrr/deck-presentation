import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

export function Finding5Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
      <SlideHeader
        label="Block 3 — Backbone Redundancy"
        title="Stronger backbones "
        highlight="Need Emotion Less."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Saturation Concept */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Main Summary Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#185FA5", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Key Theoretical Insight
            </span>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#222222", lineHeight: 1.3 }}>
              &ldquo;Strong models already know about emotions.&rdquo;
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 14.5, color: "#888888", lineHeight: 1.5, fontWeight: 500 }}>
              As visual backbones grow stronger and represent high-level visual features more deeply, the relative gain of explicit emotion mediation diminishes.
            </p>
          </motion.div>

          {/* Caption */}
          <motion.div
            {...fadeInUp(0.35)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(29, 158, 117, 0.15)",
              borderRadius: 16,
              padding: "16px 24px",
              fontSize: 16,
              color: "#222222",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(29, 158, 117, 0.02)",
            }}
          >
            a strong backbone already captures emotion
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
              { label: "Trend", value: "Diminishing returns", color: "#BA7517" },
              { label: "Reason", value: "Redundant emotional features", color: "#222222" },
              { label: "Model Backbone", value: "Qwen-4B VLM", color: "#1D9E75" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
