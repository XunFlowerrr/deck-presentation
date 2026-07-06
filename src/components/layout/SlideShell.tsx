import type { ReactNode, CSSProperties } from "react";

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
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
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
            background: `radial-gradient(circle, rgba(${g.color ?? "155, 114, 207"},${g.opacity ?? 0.15}) 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "72px 108px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          ...contentStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}
