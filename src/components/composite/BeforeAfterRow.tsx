import type { ReactNode } from "react";

interface SidePanelProps {
  /** "BEFORE" / "AFTER" eyebrow label. */
  eyebrow: ReactNode;
  /** Body text or React node. */
  body: ReactNode;
  /** Hex accent color (red for "before", green for "after"). */
  color: string;
  /** Border color hex. */
  borderColor: string;
  /** Background tint. */
  bg: string;
  /** Glyph rendered inside the round badge ("✕" / a checkmark, etc.). */
  glyph: ReactNode;
}

interface BeforeAfterRowProps {
  before: Omit<SidePanelProps, never>;
  after: Omit<SidePanelProps, never>;
  /** Arrow glyph rendered between the two panels. Defaults to "→". */
  arrow?: ReactNode;
}

function SidePanel({ eyebrow, body, color, borderColor, bg, glyph }: SidePanelProps) {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 14,
        border: `1px solid ${borderColor}`,
        background: bg,
        padding: "14px 18px",
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 1,
        }}
      >
        {glyph}
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color,
            marginBottom: 5,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: "var(--slide-body)",
            color: "#374151",
            lineHeight: 1.6,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

/**
 * Two side-by-side panels separated by an arrow.
 * Used in slide 10 to contrast the "Before" (red) and "After" (green) state.
 */
export function BeforeAfterRow({ before, after, arrow = "→" }: BeforeAfterRowProps) {
  return (
    <>
      <SidePanel {...before} />
      <div
        style={{
          flexShrink: 0,
          alignSelf: "center",
          color: "#9CA3AF",
          fontSize: 22,
          fontWeight: 300,
        }}
      >
        {arrow}
      </div>
      <SidePanel {...after} />
    </>
  );
}
