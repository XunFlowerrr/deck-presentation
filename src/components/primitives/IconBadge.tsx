import type { CSSProperties, ReactNode } from "react";

interface IconBadgeProps {
  children: ReactNode;
  /** Two-stop gradient as `[from, to]` hex (e.g. ["#7C3AED", "#A855F7"]). */
  gradient: [string, string];
  /** Optional drop shadow color, e.g. `"rgba(124,58,237,0.35)"`. */
  shadow?: string;
  /** Edge size in px. Defaults to 32. */
  size?: number;
  /** Border radius. Defaults to 9 (use 12 for size=44, 16 for icon containers). */
  radius?: number;
  style?: CSSProperties;
}

/**
 * Solid gradient icon tile with white-stroke icon inside.
 * Used as the "column header" indicator in slides 08 and 10, and as
 * card icons in slide 08.
 */
export function IconBadge({
  children,
  gradient,
  shadow,
  size = 32,
  radius = 9,
  style,
}: IconBadgeProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
        boxShadow: shadow ? `0 4px 14px ${shadow}` : undefined,
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
