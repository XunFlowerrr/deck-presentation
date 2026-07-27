import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding2Slide() {
  return (
    <SlideShell glows={GLOWS}>
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
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>Same-Session</h4>
              <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>Single recording interval</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "60%", background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>60%</div>
              <div style={{ height: "40%", background: "#7B2C8F", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>40%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#C2185B" }}>● Perception</span>
              <span style={{ color: "#7B2C8F" }}>● Weighting</span>
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
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>Cross-Session</h4>
              <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>Across recording sessions</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "40%", background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>40%</div>
              <div style={{ height: "60%", background: "#7B2C8F", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>60%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#C2185B" }}>● Perception</span>
              <span style={{ color: "#7B2C8F" }}>● Weighting</span>
            </div>
          </motion.div>

          {/* Case 3: Averaged (Highlighted in Chula Pink) */}
          <motion.div
            {...cardRise(0.35)}
            style={{
              background: "#FFFFFF",
              border: "2px dashed #C2185B",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(194, 24, 91, 0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              position: "relative",
            }}
          >
            {/* Chula Pink Badge */}
            <div
              style={{
                position: "absolute",
                top: -12,
                background: "#C2185B",
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
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#C2185B" }}>Averaged (Mixed)</h4>
              <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>Overlap limit</span>
            </div>

            {/* Stacked bar */}
            <div style={{ width: 44, height: 160, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "50%", background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>50%</div>
              <div style={{ height: "50%", background: "#7B2C8F", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 900 }}>50%</div>
            </div>

            <div style={{ display: "flex", gap: 12, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: "#C2185B" }}>● Perception</span>
              <span style={{ color: "#7B2C8F" }}>● Weighting</span>
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
            color: "#4A1533",
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
