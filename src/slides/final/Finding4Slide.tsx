import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding4Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 3 — Mechanism Analysis"
        title="It helps more "
        highlight="When We Read Emotions Well."
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
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Core Driving Factor
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>
                The more accurately the system predicts a specific user&apos;s emotions, the higher the aesthetic accuracy gain.
              </div>
            </div>
            <div style={{ background: "#FDFCFD", border: "1px solid #EEEDEA", borderRadius: 12, padding: "8px 16px", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>Spearman r</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#C2185B", marginTop: 2 }}>+0.273</div>
            </div>
          </motion.div>

          {/* Quartiles Comparison (Pink/Purple Gradient Bars) */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Emotion Predictability ($emo\_r$) Quartile Gain
            </div>
            
            {/* Horizontal gradient steps */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, height: 60, alignItems: "flex-end", marginTop: 8 }}>
              {/* Q1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.041</span>
                <div style={{ width: "100%", height: 20, background: "rgba(123, 44, 143, 0.2)", borderRadius: 4 }} />
                <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q1 (Low)</span>
              </div>
              {/* Q2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.049</span>
                <div style={{ width: "100%", height: 28, background: "rgba(123, 44, 143, 0.4)", borderRadius: 4 }} />
                <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q2</span>
              </div>
              {/* Q3 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.060</span>
                <div style={{ width: "100%", height: 38, background: "rgba(194, 24, 91, 0.7)", borderRadius: 4 }} />
                <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q3</span>
              </div>
              {/* Q4 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#C2185B" }}>+0.078</span>
                <div style={{ width: "100%", height: 48, background: "#C2185B", borderRadius: 4, boxShadow: "0 2px 6px rgba(194, 24, 91, 0.3)" }} />
                <span style={{ fontSize: 9, color: "#C2185B", fontWeight: 800 }}>Q4 (High)</span>
              </div>
            </div>
          </motion.div>

          {/* Key takeaway */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 14,
              padding: "16px 20px",
              fontSize: 14,
              color: "#4A1533",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(194, 24, 91, 0.02)",
            }}
          >
            one clean factor; the rival explanation was a confound
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
              { label: "Spearman r", value: "+0.273", color: "#C2185B" },
              { label: "Q1 Gain", value: "+0.041", color: "#6B5B6E" },
              { label: "Q4 Gain", value: "+0.078", color: "#7B2C8F" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
