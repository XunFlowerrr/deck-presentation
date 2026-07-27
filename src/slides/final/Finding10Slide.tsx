import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding10Slide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 5 — Hard Users Analysis"
        title="Unusual users: "
        highlight="Weighting Makes Them Different."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: Hard user results & Analysis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(194, 24, 91, 0.05)", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", border: "1px solid rgba(194, 24, 91, 0.15)" }}>
              Analysis of Deviant Taste
            </span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              How Do We Explain Deviance?
            </h3>
            <p style={{ margin: 0, fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
              Users with highly unusual tastes are not random; their decision boundary is governed by unique personal weighting patterns that prioritize feelings ignored by the crowd.
            </p>
          </motion.div>

          {/* Caption */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(123, 44, 143, 0.15)",
              borderRadius: 16,
              padding: "16px 24px",
              fontSize: 16,
              color: "#4A1533",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(123, 44, 143, 0.02)",
            }}
          >
            weighting differences explain why they do not align with the crowd
          </motion.div>
        </div>

        {/* Right Column: Visual Side-by-Side Weight Comparison */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: "28px 32px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#4A1533", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Personal Weighting Patterns ({"$w_{u,e}$"})
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* User 1: Typical User */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, background: "#FDFCFD", padding: 16, borderRadius: 16, border: "1px solid #EEEDEA" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#C2185B" }}>Typical User</span>
                <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, marginTop: 2 }}>Likes consensus feelings</div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
                {/* peaceful */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: "#4A1533" }}>
                    <span>peaceful</span>
                    <span style={{ color: "#C2185B" }}>+1.2</span>
                  </div>
                  <div style={{ height: 8, background: "#EEEDEA", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
                    <div style={{ width: "100%", height: "100%", background: "#C2185B" }} />
                  </div>
                </div>
                {/* sad */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: "#4A1533" }}>
                    <span>sad</span>
                    <span>-0.1</span>
                  </div>
                  <div style={{ height: 8, background: "#EEEDEA", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
                    <div style={{ width: "10%", height: "100%", background: "#6B5B6E", marginLeft: "auto" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* User 2: Unusual User */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, background: "#FDFCFD", padding: 16, borderRadius: 16, border: "1px solid rgba(123, 44, 143, 0.15)" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#7B2C8F" }}>Unusual User</span>
                <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, marginTop: 2 }}>Aesthetic rebel</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
                {/* sad */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: "#4A1533" }}>
                    <span>sad</span>
                    <span style={{ color: "#7B2C8F" }}>+0.8</span>
                  </div>
                  <div style={{ height: 8, background: "#EEEDEA", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
                    <div style={{ width: "67%", height: "100%", background: "#7B2C8F" }} />
                  </div>
                </div>
                {/* distasteful */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: "#4A1533" }}>
                    <span>distasteful</span>
                    <span style={{ color: "#C2185B" }}>+0.6</span>
                  </div>
                  <div style={{ height: 8, background: "#EEEDEA", borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
                    <div style={{ width: "50%", height: "100%", background: "#C2185B" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
