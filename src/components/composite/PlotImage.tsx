import { useState } from "react";

interface PlotImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackStats?: { label: string; value: string; color?: string }[];
  style?: React.CSSProperties;
  maxHeight?: number | string;
}

export function PlotImage({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  fallbackStats,
  style,
  maxHeight = 360,
}: PlotImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        style={{
          width: "100%",
          maxHeight,
          minHeight: 220,
          background: "#F9FAFB",
          border: "1px dashed #D1D5DB",
          borderRadius: 16,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          textAlign: "center",
          ...style,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#F3E8FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7C3AED",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#111827" }}>
            {fallbackTitle || alt}
          </h4>
          {fallbackSubtitle && (
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6B7280" }}>
              {fallbackSubtitle}
            </p>
          )}
        </div>

        {fallbackStats && fallbackStats.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {fallbackStats.map((st, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  padding: "6px 14px",
                  borderRadius: 10,
                  fontSize: 12,
                  color: "#374151",
                }}
              >
                <span style={{ color: "#6B7280", marginRight: 6 }}>{st.label}:</span>
                <strong style={{ color: st.color || "#7C3AED" }}>{st.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      style={{
        width: "100%",
        maxHeight,
        objectFit: "contain",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        background: "#FFFFFF",
        ...style,
      }}
    />
  );
}
