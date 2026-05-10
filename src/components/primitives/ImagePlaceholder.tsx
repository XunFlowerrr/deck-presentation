import type { CSSProperties, ReactNode } from "react";

interface ImagePlaceholderProps {
  /** Optional label below the icon. Defaults to "Image Placeholder". */
  label?: ReactNode;
  /**
   * Visual variant.
   * - `"dotted"` — dotted radial pattern with purple wash + image icon (slide 05)
   * - `"dashed"` — neutral dashed border with grayscale icon (slide 10)
   */
  variant?: "dotted" | "dashed";
  /** Override radius. Defaults to 16 (dotted) / 14 (dashed). */
  radius?: number;
  style?: CSSProperties;
}

/** Mountain-image SVG icon used inside both variants. */
function ImageIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        x="2"
        y="6"
        width="28"
        height="20"
        rx="3"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="10" cy="13" r="2.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M2 22L9 16L14 20L20 14L30 22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Empty image area with a placeholder icon and label. Used for upcoming
 * screenshots (slides 05 and 10).
 */
export function ImagePlaceholder({
  label = "Image Placeholder",
  variant = "dashed",
  radius,
  style,
}: ImagePlaceholderProps) {
  if (variant === "dotted") {
    return (
      <div
        style={{
          flex: 1,
          borderRadius: radius ?? 16,
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          background: "#F8F8FC",
          position: "relative",
          minHeight: 0,
          ...style,
        }}
      >
        {/* Radial dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Purple wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(124,58,237,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Centered icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="3"
                stroke="#7C3AED"
                strokeWidth="1.8"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="1.5"
                fill="#7C3AED"
                opacity="0.6"
              />
              <path
                d="M3 15l5-5 4 4 3-3 6 6"
                stroke="#7C3AED"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#A78BFA",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    );
  }

  // dashed variant
  return (
    <div
      style={{
        flex: 1,
        borderRadius: radius ?? 14,
        border: "1px dashed #D1D5DB",
        background: "rgba(249,250,251,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#9CA3AF",
        }}
      >
        <ImageIcon color="#D1D5DB" />
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
