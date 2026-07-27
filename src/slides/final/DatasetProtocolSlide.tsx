import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function DatasetProtocolSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 2 — Dataset & Protocol"
        title="Why We Focus on "
        highlight="XPASS-Vis."
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
        {/* Left Column: Dataset Stats & Depth */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Stats Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Dataset Statistics
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#2D3136" }}>129</div>
                <div style={{ fontSize: 12, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Total Evaluators</div>
              </div>
              <div style={{ background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#C24F71" }}>6,526</div>
                <div style={{ fontSize: 12, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Unique Images</div>
              </div>
              <div style={{ background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#2D3136" }}>3</div>
                <div style={{ fontSize: 12, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Domains (Art/Fash/Land)</div>
              </div>
              <div style={{ background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#C24F71" }}>87,836</div>
                <div style={{ fontSize: 12, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Total Rating Pairs</div>
              </div>
            </div>
          </motion.div>

          {/* Depth Justification */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 16,
              padding: "18px 22px",
              fontSize: 14,
              color: "#2D3136",
              lineHeight: 1.5,
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.02)",
            }}
          >
            <strong style={{ color: "#C24F71" }}>Why XPASS-Vis? </strong>
            This dataset provides deep ratings per individual evaluator (often hundreds of photos), which provides enough statistical depth to fit personalized linear weights. Other PIAA datasets are too sparse for this task.
          </motion.div>
        </div>

        {/* Right Column: Leak-Free Evaluation Protocol */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Academic Rigor &amp; Integrity
          </div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#2D3136", lineHeight: 1.3 }}>
            Honest Leak-Free Protocol
          </h3>
          <p style={{ margin: 0, fontSize: 13.5, color: "#626B74", lineHeight: 1.5 }}>
            Unlike prior work that trained emotion models on target user photos causing data leakage, we enforce strictly disjoint splits:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.06)" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#2D3136", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, flexShrink: 0 }}>
                1
              </div>
              <div>
                <strong style={{ color: "#2D3136", fontSize: 13.5 }}>Stage 1 Split: General Users (104 users)</strong>
                <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "#626B74" }}>
                  Trained to predict general aesthetic emotions without ever seeing the target evaluation users.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, background: "#FCFAF6", padding: 12, borderRadius: 12, border: "1px solid rgba(194, 79, 113, 0.2)" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#C24F71", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, flexShrink: 0, border: "1.5px solid rgba(45, 49, 54, 0.08)" }}>
                2
              </div>
              <div>
                <strong style={{ color: "#2D3136", fontSize: 13.5 }}>Stage 2 Split: Target Users (25 users)</strong>
                <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "#626B74" }}>
                  Fits the personal linear weights on the adaptation fold and evaluates on completely unseen photos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
