import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SlideShell } from "./SlideShell.tsx";
import { GradientText } from "../primitives/GradientText.tsx";
import { AccentLine } from "../primitives/AccentLine.tsx";
import { BottomLabel } from "./BottomLabel.tsx";
import { DISTANCE, heroTitle, sectionLabel } from "../../lib/motion.ts";
import { useSlideNum } from "../../context/SlideContext.tsx";

const GLOWS = [
  {
    top: "50%",
    left: -300,
    size: 800,
    color: "124,58,237",
    opacity: 0.12,
    transform: "translateY(-50%)",
  },
  {
    top: "50%",
    right: -300,
    size: 800,
    color: "168,85,247",
    opacity: 0.1,
    transform: "translateY(-50%)",
  },
];

interface SectionDividerProps {
  /** First word(s) before the gradient highlight. */
  prefix: string;
  /** The gradient-highlighted word — typically the section name. */
  highlight: string;
  /** Label shown above the title (defaults to "Section"). */
  label?: string;
  /** Bottom-right footer (defaults to "AiQ — v1.0"). */
  footer?: ReactNode;
}

/**
 * Full-screen section-divider slide. Used between major chapters.
 * Renders the small "## — LABEL" tag, a huge two-line title with a
 * gradient highlight, an accent rule, and a footer. Slides 02, 07, 11.
 */
export function SectionDivider({
  prefix,
  highlight,
  label = "Section",
  footer = "AiQ — v1.0",
}: SectionDividerProps) {
  const slideNum = useSlideNum();
  const numLabel = String(slideNum).padStart(2, "0");

  return (
    <SlideShell
      glows={GLOWS}
      contentStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      {/* Section label with bracket dashes */}
      <motion.div
        {...sectionLabel()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            width: 28,
            height: 1,
            background: "linear-gradient(90deg, transparent, #7C3AED)",
          }}
        />
        <span
          style={{
            fontSize: 17,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7C3AED",
            fontWeight: 700,
          }}
        >
          {numLabel} — {label}
        </span>
        <div
          style={{
            width: 28,
            height: 1,
            background: "linear-gradient(90deg, #7C3AED, transparent)",
          }}
        />
      </motion.div>

      {/* Hero title */}
      <motion.h1
        {...heroTitle(0.1, DISTANCE.xl)}
        style={{
          fontSize: 192,
          fontWeight: 900,
          letterSpacing: "-7px",
          lineHeight: 1.0,
          margin: 0,
          textAlign: "center",
          color: "#0A0A0A",
          userSelect: "none",
          paddingTop: 8,
        }}
      >
        {prefix}
        <br />
        <GradientText>{highlight}</GradientText>
      </motion.h1>

      <AccentLine
        delay={0.55}
        width={80}
        style={{ marginTop: 52, transformOrigin: "center" }}
      />

      <BottomLabel>{footer}</BottomLabel>
    </SlideShell>
  );
}
