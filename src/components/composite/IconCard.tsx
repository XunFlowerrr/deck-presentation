import type { CSSProperties, ReactNode } from "react";

interface IconCardProps {
  /** Left-side icon — typically an `<IconTile>` or `<IconBadge>`. */
  icon: ReactNode;
  /** Heading text (or React node, e.g. with extra inline elements). */
  title: ReactNode;
  /** Optional descriptive paragraph or any content under the title. */
  children?: ReactNode;
  /** Color for the title text (defaults to `#0A0A0A`). */
  titleColor?: string;
  /** Override card background. Defaults to "#FAFAFA". */
  background?: string;
  /** Override card border. Defaults to "1px solid #F0F0F0". */
  border?: string;
  /** Padding inside the card. Defaults to "14px 18px". */
  padding?: string;
  /** Border radius. Defaults to 14. */
  radius?: number;
  /** Vertical alignment of the icon. Defaults to "flex-start". */
  align?: "flex-start" | "center";
  style?: CSSProperties;
}

/**
 * Generic icon-on-the-left card — icon + heading + optional body.
 * Used in slides 03, 04, 08 and similar layouts.
 */
export function IconCard({
  icon,
  title,
  children,
  titleColor = "#0A0A0A",
  background = "#FAFAFA",
  border = "1px solid #F0F0F0",
  padding = "14px 18px",
  radius = 14,
  align = "flex-start",
  style,
}: IconCardProps) {
  return (
    <div
      style={{
        padding,
        background,
        borderRadius: radius,
        border,
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: align,
          gap: 12,
        }}
      >
        {icon}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "var(--slide-card-heading)",
              fontWeight: 700,
              color: titleColor,
              marginBottom: children ? 6 : 0,
              lineHeight: 1.3,
            }}
          >
            {title}
          </div>
          {children && (
            <div
              style={{
                fontSize: "var(--slide-body)",
                color: "#6B7280",
                lineHeight: 1.6,
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
