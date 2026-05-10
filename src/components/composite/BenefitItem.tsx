import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { DISTANCE, fadeInLeft } from "../../lib/motion.ts";

interface BenefitItemProps {
  children: ReactNode;
  /** Hex color for the check ring. */
  color?: string;
  /** Same color in `r,g,b` for the translucent ring fill. */
  rgb?: string;
  /** Animation delay (s). */
  delay?: number;
  /** Disable animation entirely (for static lists). */
  animated?: boolean;
}

/**
 * Checkmark + label row. Used in benefit columns (slide 10).
 * Animates in from the left when given a delay.
 */
export function BenefitItem({
  children,
  color = "#7C3AED",
  rgb = "124,58,237",
  delay = 0,
  animated = true,
}: BenefitItemProps) {
  const inner = (
    <>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: `rgba(${rgb},0.12)`,
          border: `1.5px solid ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M1.5 5L4 7.5L8.5 2.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        style={{
          fontSize: "var(--slide-body)",
          color: "#374151",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {children}
      </span>
    </>
  );

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 0",
  } as const;

  if (animated) {
    return (
      <motion.div
        {...fadeInLeft(delay, { distance: DISTANCE.xs, duration: 0.5 })}
        style={baseStyle}
      >
        {inner}
      </motion.div>
    );
  }
  return <div style={baseStyle}>{inner}</div>;
}
