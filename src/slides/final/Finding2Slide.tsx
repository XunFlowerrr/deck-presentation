import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

export function Finding2Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
      <SlideHeader
        label="Block 3 — Variance Decomposition"
        title="Feeling vs weighting: "
        highlight="It Depends How We Measure."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 32,
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Three Columns side-by-side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            width: "100%",
          }}
        >
          {/* Case 1: Same-Session */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#222222" }}>Same-Session</h4>
              <span style={{ fontSize: 11, color: "#888888", fontWeight: 700 }}>Single recording interval</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "60%", background: "#185FA5", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>60%</div>
              <div style={{ height: "40%", background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>40%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#185FA5" }}>● Perception</span>
              <span style={{ color: "#1D9E75" }}>● Weighting</span>
            </div>
          </motion.div>

          {/* Case 2: Cross-Session */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#222222" }}>Cross-Session</h4>
              <span style={{ fontSize: 11, color: "#888888", fontWeight: 700 }}>Across recording sessions</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "40%", background: "#185FA5", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>40%</div>
              <div style={{ height: "60%", background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>60%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#185FA5" }}>● Perception</span>
              <span style={{ color: "#1D9E75" }}>● Weighting</span>
            </div>
          </motion.div>

          {/* Case 3: Averaged (Highlighted in Orange) */}
          <motion.div
            {...cardRise(0.35)}
            style={{
              background: "#FFFFFF",
              border: "2px dashed #BA7517",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(186, 117, 23, 0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              position: "relative",
            }}
          >
            {/* Orange Badge */}
            <div
              style={{
                position: "absolute",
                top: -12,
                background: "#BA7517",
                color: "#FFFFFF",
                fontSize: 10,
                fontWeight: 900,
                padding: "2px 8px",
                borderRadius: 6,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              &approx; 50/50, can&apos;t tell
            </div>

            <div style={{ textAlign: "center" }}>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#BA7517" }}>Averaged (Mixed)</h4>
              <span style={{ fontSize: 11, color: "#888888", fontWeight: 700 }}>Overlap limit</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "50%", background: "#185FA5", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>50%</div>
              <div style={{ height: "50%", background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>50%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#185FA5" }}>● Perception</span>
              <span style={{ color: "#1D9E75" }}>● Weighting</span>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          {...fadeInUp(0.5)}
          style={{
            alignSelf: "center",
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 14,
            padding: "12px 28px",
            fontSize: 16,
            fontWeight: 800,
            color: "#222222",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
          }}
        >
          so we report it honestly, as a supporting result with ranges
        </motion.div>
      </div>
    </SlideShell>
  );
}
