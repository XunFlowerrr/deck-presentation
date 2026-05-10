import type { CSSProperties } from "react";

interface BigGhostNumberProps {
  /** Two-digit string e.g. "01", "02". */
  children: string;
  /** RGB triple for the faded color. */
  rgb?: string;
  /** Font size in px. Defaults to 56. Use 96 for watermark-size. */
  size?: number;
  /** Text alignment. Defaults to "right". */
  align?: "left" | "right" | "center";
  /** Width — use to align number columns. */
  width?: number;
  /** Color opacity. Defaults to 0.12. */
  opacity?: number;
  style?: CSSProperties;
}

/**
 * Faded oversized ordinal number. Used as a big ghost numeric prefix
 * for list rows (slide 05) and as a watermark inside cards (slide 06).
 */
export function BigGhostNumber({
  children,
  rgb = "124,58,237",
  size = 56,
  align = "right",
  width,
  opacity = 0.12,
  style,
}: BigGhostNumberProps) {
  return (
    <span
      style={{
        fontSize: size,
        fontWeight: 900,
        letterSpacing: "-3px",
        lineHeight: 1,
        color: `rgba(${rgb},${opacity})`,
        fontVariantNumeric: "tabular-nums",
        flexShrink: 0,
        width,
        textAlign: align,
        userSelect: "none",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
