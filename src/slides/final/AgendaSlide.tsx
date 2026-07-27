import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

const BLOCKS = [
  {
    num: "01",
    title: "Problem & Idea",
    desc: "Black-box baseline limitations and the emotion mediation concept.",
    color: "#C24F71",
    tint: "rgba(194, 79, 113, 0.03)",
  },
  {
    num: "02",
    title: "Does it work?",
    desc: "Accuracy improvements and comparisons against trait-based baselines.",
    color: "#2D3136",
    tint: "rgba(45, 49, 54, 0.02)",
  },
  {
    num: "03",
    title: "When & Why?",
    desc: "Mechanism analysis and variance decomposition (Perception vs. Weighting).",
    color: "#C24F71",
    tint: "rgba(194, 79, 113, 0.03)",
  },
  {
    num: "04",
    title: "How far can it go?",
    desc: "Realistic noise ceilings and resolving the cold-start threshold.",
    color: "#2D3136",
    tint: "rgba(45, 49, 54, 0.02)",
  },
  {
    num: "05",
    title: "Is the gain real?",
    desc: "Placebo control experiments validating the value of emotional semantics.",
    color: "#C24F71",
    tint: "rgba(194, 79, 113, 0.03)",
  },
];

export function AgendaSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Agenda"
        title="Roadmap: "
        highlight="5 Core Blocks."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 36,
        }}
      >
        {/* Horizontal block sequence */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {BLOCKS.map((block, idx) => (
            <motion.div
              key={block.num}
              {...cardRise(0.1 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(45, 49, 54, 0.08)",
                borderRadius: 20,
                padding: "24px 20px",
                boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 280,
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Highlight bar at top of card */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: block.color }} />

              {/* Large background watermark number */}
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  fontSize: 100,
                  fontWeight: 900,
                  color: block.tint,
                  zIndex: 0,
                  userSelect: "none",
                }}
              >
                {block.num}
              </div>

              <div style={{ zIndex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: block.color === "#2D3136" ? "#2D3136" : "#C24F71",
                    background: block.tint,
                    padding: "4px 10px",
                    borderRadius: 8,
                    alignSelf: "flex-start",
                    border: `1px solid rgba(45, 49, 54, 0.08)`,
                  }}
                >
                  Block {block.num}
                </span>

                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#2D3136", lineHeight: 1.3 }}>
                  {block.title}
                </h3>
              </div>

              <p style={{ zIndex: 1, margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.5 }}>
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Narrative Tagline */}
        <motion.div
          {...fadeInUp(0.6)}
          style={{
            alignSelf: "center",
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.06)",
            borderRadius: 14,
            padding: "12px 24px",
            fontSize: 16,
            fontWeight: 800,
            color: "#2D3136",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(194, 79, 113, 0.04)",
          }}
        >
          Let&apos;s trace the narrative step-by-step from problem definition to validation.
        </motion.div>
      </div>
    </SlideShell>
  );
}
