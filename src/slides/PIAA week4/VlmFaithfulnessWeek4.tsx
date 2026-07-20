import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";
import { ryuYanakaFig1Img } from "../../content/assets.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "59, 130, 246", opacity: 0.08 },
];

export function VlmFaithfulnessWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix — Reference Setup"
        title="Ryu & Yanaka (2026)"
        highlight="Figure 1."
        tagline="The reference pipeline for PIAA using VLM representations: VLM hidden states linearly transformed per user — no fine-tuning."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 0, marginTop: 10 }}>
        {/* Full-size paper figure */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 24,
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
            maxWidth: 1000,
            width: "100%",
          }}
        >
          <img
            src={ryuYanakaFig1Img}
            alt="Ryu & Yanaka Figure 1: PIAA using VLM representations"
            style={{ maxWidth: "100%", maxHeight: 420, objectFit: "contain", borderRadius: 8 }}
          />
          <div style={{ fontSize: 15, color: "#6B7280", marginTop: 12, textAlign: "center", fontWeight: 550 }}>
            Figure 1 from Ryu &amp; Yanaka (2026) — demonstrating feature extraction without model fine-tuning.
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
