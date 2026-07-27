import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding4Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 3 — Mechanism Analysis"
        title="Finding 4: Expected Gain depends on "
        highlight="Emotion Accuracy (emo_r)."
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
        {/* Left Column: Metrics & Confounders */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Correlation card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Core Driving Factor
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#2D3136", marginTop: 4 }}>
                The more accurately the system predicts a specific user&apos;s emotions, the higher the aesthetic accuracy gain.
              </div>
            </div>
            <div style={{ background: "#FCFAF6", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 12, padding: "8px 16px", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 700 }}>Spearman r</div>
              <div style={{ fontSize: 20, fontWeight: 955, color: "#C24F71", marginTop: 2 }}>+0.273</div>
            </div>
          </motion.div>

          {/* Quartiles Comparison */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 14, padding: "16px", boxShadow: "0 8px 30px rgba(45, 49, 54, 0.02)" }}>
              <div style={{ fontSize: 11, color: "#626B74", fontWeight: 800 }}>Worst Quartile Gain</div>
              <div style={{ fontSize: 26, fontWeight: 955, color: "#2D3136", marginTop: 4 }}>+0.041</div>
              <div style={{ fontSize: 11, color: "#626B74", marginTop: 2, fontWeight: 600 }}>Low emotion accuracy</div>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.15)", borderRadius: 14, padding: "16px", boxShadow: "0 10px 30px rgba(194, 79, 113, 0.03)" }}>
              <div style={{ fontSize: 11, color: "#626B74", fontWeight: 800 }}>Best Quartile Gain</div>
              <div style={{ fontSize: 26, fontWeight: 955, color: "#C24F71", marginTop: 4 }}>+0.078</div>
              <div style={{ fontSize: 11, color: "#626B74", marginTop: 2, fontWeight: 600 }}>High emotion accuracy</div>
            </div>
          </motion.div>

          {/* Confound card - Simplified */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 14,
              padding: "16px 20px",
              fontSize: 14,
              color: "#2D3136",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
            }}
          >
            <strong style={{ color: "#C24F71" }}>Statistical Confound Check: </strong>
            We checked if this was just a statistical side-effect, but the tests confirmed that predicting emotions accurately is the only thing that matters.
          </motion.div>
        </div>

        {/* Right Column: Scatter Plot */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emotion_help_scatter_emo_r.png"
            alt="Delta Gain vs Emotion Predictability (emo_r)"
            fallbackTitle="Gain vs Emotion Predictability (emo_r)"
            fallbackSubtitle="Delta (Hybrid - Direct) scales with emotion prediction accuracy (Spearman +0.273)"
            fallbackStats={[
              { label: "Spearman r", value: "+0.273", color: "#C24F71" },
              { label: "Q1 Gain", value: "+0.041", color: "#2D3136" },
              { label: "Q4 Gain", value: "+0.078", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
