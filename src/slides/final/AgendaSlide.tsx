import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.06 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

const BLOCKS = [
  {
    num: "1",
    title: "The problem & our idea",
    desc: "Understanding individual taste disagreement and introducing the emotion mediation framework.",
  },
  {
    num: "2",
    title: "Does it work?",
    desc: "Evaluating the predictive gain of intermediate emotions and comparing with trait-based baselines.",
  },
  {
    num: "3",
    title: "When & why does it help?",
    desc: "Analyzing the driving mechanism, variance decomposition, and redundancy in stronger backbones.",
  },
  {
    num: "4",
    title: "How far can it go?",
    desc: "Estimating realistic cross-session noise ceilings and solving the cold-start rating threshold.",
  },
  {
    num: "5",
    title: "Is the gain real?",
    desc: "Verifying semantic validity using placebo control controls and explaining unusual users.",
  },
];

export function AgendaSlide() {
  return (
    <SlideShell glows={GLOWS}>
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
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
          gap: 20,
        }}
      >
        {BLOCKS.map((block, idx) => (
          <motion.div
            key={block.num}
            {...cardRise(0.1 + idx * 0.08)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "16px 24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {/* Pink circle number */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#C2185B",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
                flexShrink: 0,
              }}
            >
              {block.num}
            </div>

            {/* Block content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
                {block.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: "#6B5B6E", fontWeight: 500 }}>
                {block.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
