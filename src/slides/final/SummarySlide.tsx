import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

const TAKE_HOMES = [
  {
    num: "01",
    title: "Interpretable Pipeline",
    desc: "Intermediate emotional representations (7 dimensions) enable readable, personalized aesthetic weight formulas.",
    color: "#C24F71",
  },
  {
    num: "02",
    title: "Comparable & Traits-Free",
    desc: "Achieves accuracy comparable to state-of-the-art baselines without requiring intrusive user personality surveys.",
    color: "#2D3136",
  },
  {
    num: "03",
    title: "Predictability Driven",
    desc: "Personalization gains scale in direct proportion to how accurately the system predicts the target user's emotions.",
    color: "#C24F71",
  },
  {
    num: "04",
    title: "Ceilings & Cold-Start",
    desc: "Establishes a realistic ceiling of 0.639 (reaching 59%) and demonstrates that emotion mediation resolves cold-start barriers.",
    color: "#2D3136",
  },
  {
    num: "05",
    title: "Semantic Reality",
    desc: "Placebo control tests confirm the +0.026 gain stems from real emotional semantics, not structural bottleneck artifacts.",
    color: "#C24F71",
  },
];

export function SummarySlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Conclusion"
        title="Summary: "
        highlight="5 Take-Home Messages."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {/* Sequence of 5 summaries */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 14,
          }}
        >
          {TAKE_HOMES.map((item, idx) => (
            <motion.div
              key={item.num}
              {...cardRise(0.1 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(45, 49, 54, 0.08)",
                borderRadius: 18,
                padding: "20px 16px",
                boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 260,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top highlight bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: item.color }} />

              <div style={{ display: "flex", alignItems: "center", gap: 8, zIndex: 1 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: item.color,
                    padding: "2px 8px",
                    borderRadius: 6,
                    border: "1px solid rgba(45, 49, 54, 0.08)",
                  }}
                >
                  {item.num}
                </span>
                <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 900, color: "#2D3136", lineHeight: 1.2 }}>
                  {item.title}
                </h4>
              </div>

              <p style={{ margin: 0, fontSize: 12, color: "#626B74", lineHeight: 1.45, zIndex: 1 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concluding sentence */}
        <motion.div
          {...fadeInUp(0.6)}
          style={{
            alignSelf: "center",
            background: "#FFFFFF",
            border: "1px solid rgba(194, 79, 113, 0.15)",
            borderRadius: 16,
            padding: "16px 36px",
            fontSize: 20,
            fontWeight: 900,
            color: "#2D3136",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
          }}
        >
          &ldquo;Not a new SOTA, but an explanation of <span style={{ color: "#C24F71" }}>when, why, and how far</span>.&rdquo;
        </motion.div>
      </div>
    </SlideShell>
  );
}
