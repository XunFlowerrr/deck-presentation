import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 680, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -120, size: 620, color: "59, 130, 246", opacity: 0.1 },
];

const REFERENCE_ITEMS = [
  { icon: "•", text: "Qwen3-VL model" },
  { icon: "•", text: "Layer 15, using the text tokens" },
  { icon: "•", text: "Average pooling" },
  { icon: "•", text: "A specific prompt" },
  { icon: "•", text: "StandardScaler before Ridge" },
];

const MY_ITEMS = [
  { icon: "•", text: "Used the largest 8B model, not the 4B they recommend" },
  { icon: "•", text: "Saved every layer in a single GPU run to explore" },
  { icon: "•", text: "Allows picking the best layer afterward without running extraction multiple times" },
];

function ConfigCard({
  title,
  badge,
  accent,
  accentRgb,
  items,
  delay,
  isHighlight = true,
}: {
  title: string;
  badge: string;
  accent: string;
  accentRgb: string;
  items: { icon: string; text: string }[];
  delay: number;
  isHighlight?: boolean;
}) {
  return (
    <motion.div
      {...cardRise(delay)}
      style={{
        flex: 1,
        background: isHighlight ? `rgba(${accentRgb}, 0.02)` : "rgba(243, 244, 246, 0.4)",
        border: isHighlight ? `2px solid rgba(${accentRgb}, 0.15)` : "1px dashed rgba(156, 163, 175, 0.3)",
        borderRadius: 24,
        padding: "32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Top badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            background: isHighlight ? accent : "#9CA3AF",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
            padding: "6px 16px",
            borderRadius: 100,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 26,
          fontWeight: 900,
          color: isHighlight ? "#111827" : "#4B5563",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: 48,
          height: 4,
          borderRadius: 2,
          background: isHighlight ? `linear-gradient(90deg, ${accent}, ${accent}88)` : "#D1D5DB",
        }}
      />

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {items.map((item) => (
          <div
            key={item.text}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1.3, flexShrink: 0, color: isHighlight ? accent : "#9CA3AF", fontWeight: 800 }}>
              {item.icon}
            </span>
            <span
              style={{
                fontSize: 20,
                color: isHighlight ? "#374151" : "#6B7280",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function VlmBackboneWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2"
        title="Trying a VLM backbone:"
        highlight="Qwen3-VL-8B."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ConfigCard
          title="Ryu & Yanaka Configuration"
          badge="Reference Paper"
          accent="#9CA3AF"
          accentRgb="156, 163, 175"
          items={REFERENCE_ITEMS}
          delay={0.15}
          isHighlight={false}
        />
        <ConfigCard
          title="My Implementation"
          badge="Our Approach"
          accent="#3B82F6"
          accentRgb="59, 130, 246"
          items={MY_ITEMS}
          delay={0.25}
          isHighlight={true}
        />
      </div>
    </SlideShell>
  );
}
