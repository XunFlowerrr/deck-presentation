import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding10Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 5 — Hard Users Analysis"
        title="Finding 10: Unusual Users are "
        highlight="Emotionally Hard to Read."
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
        {/* Left Column: Hard user results */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Main Statement Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.05em", background: "rgba(194, 79, 113, 0.05)", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", marginBottom: 12, border: "1px solid rgba(194, 79, 113, 0.12)" }}>
              Unusual User Challenge
            </span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
              Why Do Unusual Users Benefit Less?
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "#626B74", lineHeight: 1.5 }}>
              Users whose aesthetic taste deviates significantly from the crowd (Unusual Users) see the lowest relative personalization gains.
            </p>
          </motion.div>

          {/* Statistical justification */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Emotion Predictability vs Taste Deviation
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "#626B74", fontWeight: 700 }}>
                Unusual tastes correlate directly with lower emotion predictability.
              </span>
              <div style={{ background: "#FCFAF6", padding: "6px 12px", borderRadius: 10, border: "1px solid rgba(45, 49, 54, 0.08)", textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 10, color: "#9CA3AF", fontWeight: 700 }}>Agreement vs emo_r</div>
                <div style={{ fontSize: 18, fontWeight: 955, color: "#C24F71", marginTop: 2 }}>+0.531</div>
              </div>
            </div>
          </motion.div>

          {/* Key message */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
              fontSize: 13,
              color: "#2D3136",
              lineHeight: 1.45,
              fontWeight: 600,
            }}
          >
            <strong style={{ color: "#C24F71" }}>Consistent with Finding 4 Mechanism: </strong>
            This result reinforces our core mechanism: unusual users benefit less because their subjective emotional reactions are harder to predict from typical crowd patterns in Stage 1.
          </motion.div>
        </div>

        {/* Right Column: Domain Plot */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emo_r_by_domain.png"
            alt="emo_r across domains plot"
            fallbackTitle="Emotion Agreement vs Predictability"
            fallbackSubtitle="Users with lower agreement with population emotions also show lower emo_r (+0.531 correlation)"
            fallbackStats={[
              { label: "Agreement vs emo_r", value: "+0.531", color: "#C24F71" },
              { label: "Hard Users Gain", value: "Lower", color: "#2D3136" },
              { label: "Typical Users Gain", value: "Higher", color: "#C24F71" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
