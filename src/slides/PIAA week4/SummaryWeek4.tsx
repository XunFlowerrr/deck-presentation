import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const SUMMARY_ITEMS = [
  {
    num: "01",
    title: "Real Noise Ceiling ≈ 0.69 (Not 0.725)",
    desc: "The original P-oracle (0.725) was inflated by same-session mood noise. Accounting for human self-agreement (CCC 0.693), our 0.400 reaches ~58% of the true reachable ceiling.",
    color: "#7C3AED",
  },
  {
    num: "02",
    title: "Broad Benefit Driven by emo_r (Dose-Response)",
    desc: "91.7% of users benefit (+0.071 median gain). Benefit tracks emotion prediction accuracy (emo_r) with no threshold and zero direct strength effect after partial control.",
    color: "#EC4899",
  },
  {
    num: "03",
    title: "Art Difference Explained by Baseline Ceiling Effect",
    desc: "Weaker correlation in art stems from high Direct baseline (0.384), limiting headroom (art p=0.048 controlled, interaction p=0.056 ns). Reported transparently as borderline.",
    color: "#06B6D4",
  },
  {
    num: "04",
    title: "Qwen 4B Matches 8B & Confirms Redundancy (r = -0.95)",
    desc: "Smaller 4B model (LT17) reaches 0.385 Hybrid CCC, saving compute. Trend across 6 backbones proves strong VLMs already implicitly encode emotion representations.",
    color: "#10B981",
  },
  {
    num: "05",
    title: "Performance Plateau Bounded by Stage-1 (emo_r = 0.27)",
    desc: "Model accuracy has plateaued (~0.40 vs ICI/MIR 0.409/0.411). The fundamental bottleneck is Stage-1 image-to-emotion prediction accuracy.",
    color: "#F59E0B",
  },
];

export function SummaryWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 4 — Summary"
        title="Key "
        highlight="Takeaways."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          justifyContent: "center",
        }}
      >
        {SUMMARY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.num}
            {...cardRise(idx * 0.1)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 14,
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: item.color,
                width: 36,
                flexShrink: 0,
              }}
            >
              {item.num}
            </div>

            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#111827" }}>
                {item.title}
              </h4>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Small definition box at bottom right */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Verified results across 129 users, 6,526 images, 3 domains (XPASS-Vis)
      </motion.div>
    </SlideShell>
  );
}
