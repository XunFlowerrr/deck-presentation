import type { ReactNode, CSSProperties } from "react";
import { useContext } from "react";
import { SlideContext } from "../../context/SlideContext.tsx";

interface GlowConfig {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  size?: number;
  color?: string;
  opacity?: number;
  transform?: string;
}

interface SlideShellProps {
  children: ReactNode;
  glows?: GlowConfig[];
  contentStyle?: CSSProperties;
}

export function SlideShell({
  children,
  glows = [],
  contentStyle,
}: SlideShellProps) {
  const { slideNum } = useContext(SlideContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FAFAF8",
        position: "relative",
        overflow: "hidden",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        color: "#222222",
      }}
    >
      {/* Glow blobs */}
      {glows.map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: g.top,
            right: g.right,
            bottom: g.bottom,
            left: g.left,
            width: g.size ?? 900,
            height: g.size ?? 900,
            transform: g.transform,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${g.color ?? "24, 95, 165"},${g.opacity ?? 0.05}) 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 88px 72px 88px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          ...contentStyle,
        }}
      >
        {children}
      </div>

      {/* Footer */}
      {slideNum > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 88,
            fontSize: 14,
            fontWeight: 500,
            color: "#888888",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          Emotion-Mediated PIAA | {slideNum}
        </div>
      )}
    </div>
  );
}
