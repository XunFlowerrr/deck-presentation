import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { SlideLabel } from "./SlideLabel.tsx";
import { GradientText } from "../primitives/GradientText.tsx";
import { AccentLine } from "../primitives/AccentLine.tsx";
import { ThaiText } from "../primitives/ThaiText.tsx";
import { slideHeader } from "../../lib/motion.ts";

interface SlideHeaderProps {
  /** Small uppercase label above the title (e.g. "Aingo", "Problems"). */
  label: string;
  /** First word(s) before the gradient highlight. */
  title: string;
  /** Gradient-highlighted ending of the title (e.g. "Problem.", "Approach."). */
  highlight: string;
  /** Optional uppercase tagline shown next to the accent line. */
  tagline?: ReactNode;
  /** Override h1 font size (defaults to 72). Slide10 uses 64. */
  titleSize?: number;
  /** Padding below the bottom border. Defaults to 22. */
  paddingBottom?: number;
  /** Margin below the entire header. Defaults to 24. */
  marginBottom?: number;
  /** Width of the accent line. Defaults to 80. */
  accentWidth?: number;
  /** Wrap Thai text in `<ThaiText>` for the tagline. Defaults to false. */
  thaiTagline?: boolean;
  style?: CSSProperties;
}

/**
 * Standard "modern" slide header — small label, big two-tone title,
 * accent line plus optional tagline. Used by slides 04, 05, 06, 08, 09, 10, 12.
 */
export function SlideHeader({
  label,
  title,
  highlight,
  tagline,
  titleSize = 72,
  paddingBottom = 22,
  marginBottom = 24,
  accentWidth = 80,
  thaiTagline = false,
  style,
}: SlideHeaderProps) {
  return (
    <motion.div
      {...slideHeader()}
      style={{
        paddingBottom,
        borderBottom: "1px solid #F0F0F0",
        marginBottom,
        ...style,
      }}
    >
      <SlideLabel label={label} style={{ marginBottom: 14 }} />
      <h1
        style={{
          fontSize: titleSize,
          fontWeight: 900,
          letterSpacing: "-2.5px",
          lineHeight: 1.0,
          margin: `0 0 ${tagline ? 16 : 18}px`,
          color: "#0A0A0A",
          userSelect: "none",
          paddingTop: 4,
        }}
      >
        {title} <GradientText>{highlight}</GradientText>
      </h1>
      {tagline ? (
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <AccentLine delay={0.4} width={accentWidth} />
          <span
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {thaiTagline ? <ThaiText>{tagline}</ThaiText> : tagline}
          </span>
        </div>
      ) : (
        <AccentLine delay={0.4} width={accentWidth} />
      )}
    </motion.div>
  );
}
