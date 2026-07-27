import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { Equation, Var, Sub } from "../../components/primitives/Equation.tsx";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding4Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Finding 4"
        title="It helps more "
        highlight="when we read emotions well."
        accentWidth={120}
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
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Core Driving Factor
              </div>
              <h3 style={{ margin: "4px 0 0", fontSize: 16.5, fontWeight: 800, color: "#4A1533", lineHeight: 1.35 }}>
                One clean factor: emotion accuracy
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#6B5B6E", fontWeight: 550 }}>
                The more accurately we predict emotions, the more the emotion pathway helps.
              </p>
            </div>
            <div style={{ background: "#FDFCFD", border: "1px solid #EEEDEA", borderRadius: 12, padding: "8px 16px", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>Spearman r</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#C2185B", marginTop: 2 }}>+0.273</div>
            </div>
          </motion.div>

          {/* Quartiles Comparison (Teal Gradient Bars) */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.08em", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
              <span>Emotion Predictability (</span>
              <Equation inline size={12} color="#6B5B6E"><Var>emo</Var><Sub><Var>r</Var></Sub></Equation>
              <span>) Quartile Gain</span>
            </div>
            
            {/* Horizontal gradient steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
              <div style={{ fontSize: 14.5, color: "#6B5B6E", fontWeight: 600 }}>
                gain rises <span style={{ color: "#C2185B", fontWeight: 800 }}>0.041 &rarr; 0.078</span> across groups
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, height: 60, alignItems: "flex-end" }}>
                {/* Q1 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.041</span>
                  <div style={{ width: "100%", height: 20, background: "rgba(194, 24, 91, 0.15)", borderRadius: 4 }} />
                  <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q1 (Low)</span>
                </div>
                {/* Q2 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.049</span>
                  <div style={{ width: "100%", height: 28, background: "rgba(194, 24, 91, 0.35)", borderRadius: 4 }} />
                  <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q2</span>
                </div>
                {/* Q3 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#6B5B6E" }}>+0.060</span>
                  <div style={{ width: "100%", height: 38, background: "rgba(123, 44, 143, 0.6)", borderRadius: 4 }} />
                  <span style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>Q3</span>
                </div>
                {/* Q4 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#C2185B" }}>+0.078</span>
                  <div style={{ width: "100%", height: 48, background: "#C2185B", borderRadius: 4, boxShadow: "0 2px 6px rgba(194, 24, 91, 0.2)" }} />
                  <span style={{ fontSize: 9, color: "#C2185B", fontWeight: 800 }}>Q4 (High)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Scatter Plot */}
        <motion.div {...cardRise(0.22)}>
          <PlotImage
            src="/output/plots/emotion_help_scatter_emo_r.png"
            alt="Delta Gain vs Emotion Predictability (emo_r)"
            fallbackTitle="Gain vs Emotion Predictability (emo_r)"
            fallbackSubtitle="Delta (Hybrid - Direct) scales with emotion prediction accuracy (Spearman +0.273)"
            fallbackStats={[
              { label: "Spearman r", value: "+0.273", color: "#7B2C8F" },
              { label: "Q1 Gain", value: "+0.041", color: "#9E9E9E" },
              { label: "Q4 Gain", value: "+0.078", color: "#C2185B" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>

      {/* Bottom Caption */}
      <motion.div
        {...fadeInUp(0.35)}
        style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 800,
          color: "#6B5B6E",
        }}
      >
        the rival explanation was a confound
      </motion.div>
    </SlideShell>
  );
}
Finding4Slide.slideId = "Finding4";
