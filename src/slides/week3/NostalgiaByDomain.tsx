import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeIn } from "../../lib/motion.ts";
import { nostalgiaByDomainImg } from "../../content/assets-week3.ts";

const GLOWS = [
  { top: -220, right: -120, size: 760, color: "236, 72, 153", opacity: 0.12 },
  { bottom: -180, left: -120, size: 560, color: "124, 58, 237", opacity: 0.08 },
];

export function NostalgiaByDomain() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="RQ4: Cross-Domain Consistency"
        title="Nostalgia Weight"
        highlight="Differs by Domain."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 22, minHeight: 0 }}>
        <motion.div
          {...cardRise(0.15)}
          style={{
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0,
          }}
        >
          <img
            src={nostalgiaByDomainImg}
            alt="Nostalgia weight by domain violin plot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </motion.div>

        <motion.div
          {...fadeIn(0.3)}
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.9fr 1.05fr",
            gap: 16,
          }}
        >
          <div style={{ background: "rgba(236, 72, 153, 0.03)", border: "1px solid rgba(236, 72, 153, 0.12)", borderRadius: "18px", padding: "16px 18px" }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#EC4899", marginBottom: 6 }}>Mean weights</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.4 }}>
              Art mean = +0.12 vs Fashion mean = -0.005
            </div>
          </div>

          <div style={{ background: "rgba(59, 130, 246, 0.03)", border: "1px solid rgba(59, 130, 246, 0.12)", borderRadius: "18px", padding: "16px 18px" }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#2563EB", marginBottom: 6 }}>Significance</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.4 }}>
              Mann-Whitney U test: p &lt; 0.0001 (art &gt; fashion)
            </div>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.03)", border: "1px solid rgba(16, 185, 129, 0.12)", borderRadius: "18px", padding: "16px 18px" }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#059669", marginBottom: 6 }}>Takeaway</div>
            <div style={{ fontSize: 18, color: "#374151", lineHeight: 1.4 }}>
              Nostalgic weight is the least cross-domain-stable emotion (r = 0.138)
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}