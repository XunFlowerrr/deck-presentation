import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const CARDS = [
  {
    number: 1,
    accent: "#7C3AED",
    title: "Fair Comparison",
    description:
      "Re-ran ICI/MIR baselines on the exact same data split for a truly fair comparison.",
  },
  {
    number: 2,
    accent: "#3B82F6",
    title: "VLM Backbone",
    description:
      "Tried a Vision-Language Model (Qwen3-VL-8B) as the backbone instead of CLIP, following Ryu & Yanaka.",
  },
  {
    number: 3,
    accent: "#10B981",
    title: "Fine-tuning",
    description:
      "Tried fine-tuning the backbone on emotion prediction instead of keeping it frozen.",
  },
];

export function AgendaWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="This Week" title="Three things " highlight="I did." />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 28,
          marginTop: 48,
        }}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.number}
            {...cardRise}
            transition={{ delay: 0.15 * i, duration: 0.5, ease: "easeOut" }}
            style={{
              background: `rgba(${hexToRgb(card.accent)}, 0.03)`,
              border: `1px solid rgba(${hexToRgb(card.accent)}, 0.15)`,
              borderRadius: 24,
              padding: "36px 32px",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Number badge */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: card.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 26,
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {card.number}
            </div>

            {/* Title */}
            <h4
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {card.title}
            </h4>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontSize: 20,
                lineHeight: 1.6,
                color: "#4B5563",
              }}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
