import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { expandY } from "../../lib/motion.ts";

interface VerticalDividerProps {
  /** Animate scaleY from 0→1. Defaults to false (static). */
  animated?: boolean;
  /** Animation delay (only applies when animated). */
  delay?: number;
  style?: CSSProperties;
}

/**
 * Thin vertical 1px line with a soft gradient-fade at top and bottom.
 * Used between two-column layouts in slides 03, 05, 08.
 */
export function VerticalDivider({
  animated = false,
  delay = 0,
  style,
}: VerticalDividerProps) {
  const baseStyle: CSSProperties = {
    width: 1,
    background:
      "linear-gradient(180deg, transparent, #E5E7EB 15%, #E5E7EB 85%, transparent)",
    flexShrink: 0,
    ...style,
  };

  if (animated) {
    return (
      <motion.div
        {...expandY(delay)}
        style={{ ...baseStyle, transformOrigin: "top center" }}
      />
    );
  }
  return <div style={baseStyle} />;
}

/**
 * Thin horizontal 1px line with a gradient fade at both ends.
 * Used as a section divider inside columns (slide 04).
 */
export function HorizontalDivider({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        height: 1,
        background:
          "linear-gradient(90deg, transparent, #E5E7EB 10%, #E5E7EB 90%, transparent)",
        margin: "4px 0",
        ...style,
      }}
    />
  );
}
