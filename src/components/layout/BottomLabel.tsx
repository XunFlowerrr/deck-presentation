import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { bottomStrip } from "../../lib/motion.ts";

interface BottomLabelProps {
  children?: ReactNode;
  delay?: number;
  /** When omitted, renders inline (no absolute positioning). */
  position?: "absolute" | "inline";
  style?: CSSProperties;
}

/**
 * Late-fading footer text. Defaults to absolute bottom-right (matches
 * cover/section slides), pass `position="inline"` for in-flow placement.
 */
export function BottomLabel({
  children = "AiQ — v1.0",
  delay = 0.9,
  position = "absolute",
  style,
}: BottomLabelProps) {
  const baseStyle: CSSProperties =
    position === "absolute"
      ? {
          position: "absolute",
          bottom: 72,
          right: 108,
          fontSize: 14,
          color: "#E5E7EB",
          letterSpacing: "0.08em",
        }
      : {
          fontSize: 14,
          color: "#E5E7EB",
          letterSpacing: "0.08em",
        };

  return (
    <motion.div {...bottomStrip(delay)} style={{ ...baseStyle, ...style }}>
      {children}
    </motion.div>
  );
}
