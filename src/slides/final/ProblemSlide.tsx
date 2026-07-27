import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function ProblemSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="The Problem"
        title="Accurate, but "
        highlight="It Can't Explain."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Centered Black Box Flow */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* Inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "right" }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#4A1533" }}>User &amp; Traits</span>
            <span style={{ fontSize: 14, color: "#6B5B6E", fontWeight: 700 }}>Demographics / Persona</span>
            <div style={{ height: 1, background: "#EEEDEA", margin: "4px 0" }} />
            <span style={{ fontSize: 18, fontWeight: 800, color: "#C2185B" }}>Target Image</span>
          </div>

          {/* Arrow In */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#6B5B6E" strokeWidth="2.5">
              <line x1="0" y1="12" x2="42" y2="12" />
              <polyline points="36,6 42,12 36,18" />
            </svg>
          </div>

          {/* Black Box */}
          <div
            style={{
              width: 240,
              height: 180,
              background: "#2B2230",
              borderRadius: 24,
              border: "1px solid #EEEDEA",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Massive Pink "?" symbol */}
            <span
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: "#C2185B",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              ?
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: -10,
              }}
            >
              Black-Box Model
            </span>
          </div>

          {/* Arrow Out */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#7B2C8F" strokeWidth="2.5">
              <line x1="0" y1="12" x2="42" y2="12" />
              <polyline points="36,6 42,12 36,18" />
            </svg>
          </div>

          {/* Output */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: "#7B2C8F" }}>Aesthetic Score</span>
            <span style={{ fontSize: 14, color: "#6B5B6E", fontWeight: 700 }}>Personalized Rating</span>
          </div>
        </motion.div>

        {/* Central Dilemma Question Tagline */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 720,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#4A1533", lineHeight: 1.35 }}>
            Why does this person like it?
          </h2>
          <p style={{ margin: 0, fontSize: 20, color: "#C2185B", fontWeight: 700, letterSpacing: "-0.2px" }}>
            Do they feel differently, or weight feelings differently?
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
