import type { CSSProperties, ReactNode } from "react";

interface IconTileProps {
  children: ReactNode;
  /** RGB triple (e.g. "239,68,68") for tinted bg + border. */
  rgb?: string;
  /** Tile edge size in px. Defaults to 40. */
  size?: number;
  /** Border radius. Defaults to 11 (8 for `mini`, 14 for large). */
  radius?: number;
  /** Background opacity. Defaults to 0.08. */
  bgOpacity?: number;
  /** Border opacity. Defaults to 0.18. */
  borderOpacity?: number;
  style?: CSSProperties;
}

/**
 * Square icon container with tinted background and matching border.
 * Pass an SVG (or any ReactNode) as the child. Used for IconBox-style
 * icons across slides 04, 05, 06.
 */
export function IconTile({
  children,
  rgb = "124,58,237",
  size = 40,
  radius = 11,
  bgOpacity = 0.08,
  borderOpacity = 0.18,
  style,
}: IconTileProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `rgba(${rgb}, ${bgOpacity})`,
        border: `1px solid rgba(${rgb}, ${borderOpacity})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
