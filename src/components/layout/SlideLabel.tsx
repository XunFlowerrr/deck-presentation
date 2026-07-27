import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { topBar } from "../../lib/motion.ts";
import { useSlideNum } from "../../context/SlideContext.tsx";

interface SlideLabelProps {
  label: string;
  style?: CSSProperties;
}

export function SlideLabel({ label, style }: SlideLabelProps) {
  const slideNum = useSlideNum();
  const prefix = slideNum > 0 ? `${String(slideNum).padStart(2, "0")} — ` : "";

  return (
    <motion.div
      {...topBar()}
      style={{ display: "flex", alignItems: "center", gap: 10, ...style }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #C24F71, #E390A4)",
          boxShadow: "0 0 6px rgba(194, 79, 113, 0.3)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 17,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#C24F71",
          fontWeight: 700,
        }}
      >
        {prefix}
        {label}
      </span>
    </motion.div>
  );
}
