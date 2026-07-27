import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

const TAKE_HOMES = [
  {
    num: "01",
    label: "Predict",
    title: "Emotion Mediation",
    desc: "Achieve comparable personalization accuracy to standard SOTA methods while safeguarding user privacy (no intrusive personality surveys required).",
    color: "#185FA5",
    glow: "rgba(24, 95, 165, 0.04)",
  },
  {
    num: "02",
    label: "Understand",
    title: "Transparent Rationale",
    desc: "Cleanly decompose and analyze individual aesthetic differences into shared perception vs. subjective personal weighting formulas.",
    color: "#1D9E75",
    glow: "rgba(29, 158, 117, 0.04)",
  },
  {
    num: "03",
    label: "Deploy",
    title: "Cold-Start & Ceiling",
    desc: "Requires 50 user ratings to outperform population-level baselines, aiming for a realistic temporal ceiling of 0.64.",
    color: "#BA7517",
    glow: "rgba(186, 117, 23, 0.04)",
  },
];

export function SummarySlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
      <SlideHeader
        label="Conclusion"
        title="Takeaways"
        highlight=""
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
        {/* Sequence of 3 summaries */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {TAKE_HOMES.map((item, idx) => (
            <motion.div
              key={item.num}
              {...cardRise(0.1 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: `1px solid #EEEDEA`,
                borderRadius: 20,
                padding: "28px 24px",
                boxShadow: `0 8px 30px ${item.glow}`,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 260,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top highlight bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: item.color }} />

              <div style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 1 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: item.color,
                    padding: "2px 8px",
                    borderRadius: 6,
                  }}
                >
                  {item.num}
                </span>
                <span style={{ fontSize: 13, fontWeight: 900, color: item.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {item.label}
                </span>
              </div>

              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#222222", lineHeight: 1.2, zIndex: 1 }}>
                {item.title}
              </h4>

              <p style={{ margin: 0, fontSize: 14, color: "#888888", lineHeight: 1.5, zIndex: 1, fontWeight: 500 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concluding publication statement */}
        <motion.div
          {...fadeInUp(0.4)}
          style={{
            alignSelf: "center",
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 14,
            padding: "12px 28px",
            fontSize: 14,
            fontWeight: 800,
            color: "#888888",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
          }}
        >
          Publication Plan: <span style={{ color: "#185FA5" }}>Preparing conference submission for ACMMM / CVPR</span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
