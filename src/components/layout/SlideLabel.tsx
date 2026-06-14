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
          background: "linear-gradient(135deg, #9B72CF, #C4A3E8)",
          boxShadow: "0 0 8px rgba(155, 114, 207, 0.5)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 17,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9B72CF",
          fontWeight: 700,
        }}
      >
        {prefix}
        {label}
      </span>
    </motion.div>
  );
}
