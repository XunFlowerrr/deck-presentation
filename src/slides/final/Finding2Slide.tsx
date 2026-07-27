import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding2Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 3 — Variance Decomposition"
        title="Finding 2: Perception vs Weighting "
        highlight="are Both Substantial."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Conceptual Breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Intro Card */}
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
            <h4 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 900, color: "#2D3136" }}>
              Isolating Aesthetic Variance Share
            </h4>
            <p style={{ margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.45 }}>
              We analyze individual taste characteristics via 3 distinct predictors:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              <div style={{ fontSize: 12.5, color: "#2D3136", fontWeight: 700 }}>
                1. <span style={{ color: "#C24F71" }}>$P$ (Perception):</span> Personal Emotion $E$ + Global Weight $W$
              </div>
              <div style={{ fontSize: 12.5, color: "#2D3136", fontWeight: 700 }}>
                2. <span style={{ color: "#C24F71" }}>$S$ (Weighting):</span> Global Emotion $E$ + Personal Weight $W$
              </div>
              <div style={{ fontSize: 12.5, color: "#2D3136", fontWeight: 700 }}>
                3. <span>$S_{global}$ (Global):</span> Global Emotion $E$ + Global Weight $W$
              </div>
            </div>
          </motion.div>

          {/* Honest conclusion card */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 16,
              padding: "16px 20px",
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
              Scientific Integrity
            </div>
            <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 900, color: "#2D3136" }}>
              Scientific Integrity &amp; Transparency
            </h4>
            <p style={{ margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.4 }}>
              Since the confidence intervals overlap the 50% boundary, we report that both components are substantial contributors to personalized aesthetic variation.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual CI Bar Chart */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Confidence Intervals of Variance Share
          </div>

          {/* Table / CI Visual Representation */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "8px 0" }}>
            {/* Perception bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 800, color: "#2D3136", marginBottom: 6 }}>
                <span>Perception Share ($P$)</span>
                <span style={{ color: "#C24F71" }}>CI [40.2%, 63.8%]</span>
              </div>
              <div style={{ height: 24, background: "#FCFAF6", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 6, position: "relative", overflow: "hidden" }}>
                {/* 50% line indicator */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#C24F71", zIndex: 2 }} />
                {/* CI Range */}
                <div style={{ position: "absolute", left: "40.2%", width: "23.6%", top: 4, bottom: 4, background: "rgba(194, 79, 113, 0.12)", border: "1px dashed #C24F71", borderRadius: 4 }} />
              </div>
            </div>

            {/* Weighting bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 800, color: "#2D3136", marginBottom: 6 }}>
                <span>Weighting Share ($S$)</span>
                <span style={{ color: "#C24F71" }}>CI [43.1%, 67.5%]</span>
              </div>
              <div style={{ height: 24, background: "#FCFAF6", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 6, position: "relative", overflow: "hidden" }}>
                {/* 50% line indicator */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#C24F71", zIndex: 2 }} />
                {/* CI Range */}
                <div style={{ position: "absolute", left: "43.1%", width: "24.4%", top: 4, bottom: 4, background: "rgba(194, 79, 113, 0.12)", border: "1px dashed #C24F71", borderRadius: 4 }} />
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(45, 49, 54, 0.02)", border: "1.5px dashed rgba(45, 49, 54, 0.08)", borderRadius: 12, padding: "12px 14px", fontSize: 12, color: "#626B74", lineHeight: 1.4 }}>
            <span style={{ color: "#C24F71", fontWeight: 800 }}>★ Integrity Note:</span> Inconclusive boundary (crosses 50% line). We treat this as a supporting analysis that respects experimental noise with high academic integrity rather than forcing a singular conclusion.
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
