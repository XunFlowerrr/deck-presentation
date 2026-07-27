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
        title="What we'll "
        highlight="cover today."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Subtle Purple Connecting Line behind circles */}
        <div
          style={{
            position: "absolute",
            left: 45, // Centered with the 44px circles (24px padding + 22px half-width)
            top: 40,
            bottom: 40,
            width: 2,
            background: "linear-gradient(180deg, rgba(194, 24, 91, 0.1) 0%, rgba(123, 44, 143, 0.3) 50%, rgba(194, 24, 91, 0.1) 100%)",
            zIndex: 0,
          }}
        />

        {BLOCKS.map((block, idx) => (
          <motion.div
            key={block.num}
            {...cardRise(0.1 + idx * 0.08)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "12px 24px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
              display: "flex",
              alignItems: "center",
              gap: 24,
              zIndex: 1,
            }}
          >
            {/* Pink circle number */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#C2185B", // Primary Pink
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
                flexShrink: 0,
                boxShadow: "0 4px 10px rgba(194, 24, 91, 0.15)",
              }}
            >
              {block.num}
            </div>

            {/* Block content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#4A1533" }}>
                {block.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, color: "#6B5B6E", fontWeight: 500 }}>
                {block.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
AgendaSlide.slideId = "Agenda";
