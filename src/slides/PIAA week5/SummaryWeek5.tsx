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
    title: "Real Noise Ceiling is ~0.69 (Model reaches ~58% of true upper bound)",
    desc: "The original P-oracle (0.725) was inflated by same-session mood noise. Accounting for human self-agreement (0.693), our 0.400 model reaches ~58% of the true reachable ceiling.",
    color: "#7C3AED",
  },
  {
    num: "02",
    title: "Emotion Helps 91.7% of Users (Benefit scales with emo_r)",
    desc: "Median gain is +0.071 (p < 0.001). Higher emotion prediction accuracy (emo_r) directly drives higher gain across users, with no minimum accuracy threshold.",
    color: "#EC4899",
  },
  {
    num: "03",
    title: "Art Gains Less Due to High Direct Baseline (Ceiling Effect)",
    desc: "Art direct baseline is already high (0.384), leaving less headroom for gain. Controlling for baseline strength makes art gain statistically significant (p = 0.048).",
    color: "#06B6D4",
  },
  {
    num: "04",
    title: "Smaller Qwen 4B Matches 8B & Confirms Backbone Redundancy (r = -0.95)",
    desc: "4B model reaches 0.385 Hybrid CCC while saving compute. Stronger vision backbones already implicitly encode emotion semantics, leaving less room for explicit emotion features.",
    color: "#10B981",
  },
  {
    num: "05",
    title: "Main System Bottleneck is Stage-1 Emotion Accuracy (emo_r = 0.27)",
    desc: "Overall model performance plateaus around ~0.400. Breaking this performance limit requires improving Stage-1 image-to-emotion prediction accuracy first.",
    color: "#F59E0B",
  },
];

export function SummaryWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 4 — Summary"
        title="Summary of "
        highlight="Key Findings."
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
