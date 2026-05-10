import type { CSSProperties, ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  /** Hex color for text + accent (also used to derive bg / border). */
  color?: string;
  /** Same color in `r,g,b` form for translucent bg/border. */
  rgb?: string;
  /** Show the leading dot (with optional glow). */
  dot?: boolean;
  /** Make dot glow with same color (slide 06 status pills). */
  dotGlow?: boolean;
  /** Letter spacing — defaults to 0.08em (use 0.1em for status pills). */
  letterSpacing?: string;
  /** Override font size — defaults to 11. */
  fontSize?: number;
  /** Override padding — defaults to "3px 10px". */
  padding?: string;
  /** Force uppercase. Defaults to true. */
  uppercase?: boolean;
  style?: CSSProperties;
}

/**
 * Generic colored pill used for status badges, tags, and labels.
 * Accepts a hex `color` (text/accent) and optional `rgb` triple for
 * translucent background/border. Used in slides 03, 04, 05, 06, 09.
 */
export function Pill({
  children,
  color = "#7C3AED",
  rgb = "124,58,237",
  dot = false,
  dotGlow = false,
  letterSpacing = "0.08em",
  fontSize = 11,
  padding = "3px 10px",
  uppercase = true,
  style,
}: PillProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: dot ? 6 : 0,
        padding,
        borderRadius: 99,
        background: `rgba(${rgb}, 0.08)`,
        border: `1px solid rgba(${rgb}, 0.25)`,
        flexShrink: 0,
        ...style,
      }}
    >
      {dot && (
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: color,
            boxShadow: dotGlow ? `0 0 5px ${color}` : undefined,
            flexShrink: 0,
          }}
        />
      )}
      <span
        style={{
          fontSize,
          fontWeight: 700,
          color,
          letterSpacing,
          textTransform: uppercase ? "uppercase" : "none",
        }}
      >
        {children}
      </span>
    </div>
  );
}
