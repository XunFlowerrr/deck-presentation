import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function PlaceboSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 5 — Placebo Control"
        title="Finding 9: Placebo Control Confirms "
        highlight="Real Semantic Gain."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Placebo description and controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main Gain Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 20,
              padding: "20px 24px",
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div style={{ fontSize: 44, fontWeight: 955, color: "#C24F71", lineHeight: 1 }}>
              +0.026
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
                Emotion Semantics Advantage
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#626B74", fontWeight: 700 }}>
                Absolute gain difference when comparing real emotional features against PCA baseline.
              </p>
            </div>
          </motion.div>

          {/* Placebo Controls Description */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Answering the Skeptic&apos;s Question
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136", lineHeight: 1.4 }}>
              &ldquo;Does the accuracy improvement come from actual emotions, or just from adding an intermediate bottleneck layer?&rdquo;
            </div>
            <div style={{ fontSize: 12.5, color: "#626B74" }}>
              Replacing real emotion predictions with <strong>PCA dimensions or random numbers</strong> reduces personalization gains to zero. This comparison proves that <strong>actual emotional semantics</strong> drive the preference prediction.
            </div>
          </motion.div>
        </div>

        {/* Right Column: Placebo comparison graph */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/three_tests_diagram.png"
            alt="Placebo control comparison plot"
            fallbackTitle="Placebo Controls Performance"
            fallbackSubtitle="Personalization gains drop to zero when real emotion data is replaced by shuffles/noise"
            fallbackStats={[
              { label: "Real Semantics Gain", value: "+0.026", color: "#C24F71" },
              { label: "Shuffled/Random", value: "≈ 0.000", color: "#2D3136" },
              { label: "PCA (No emotion)", value: "Lower limit", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
