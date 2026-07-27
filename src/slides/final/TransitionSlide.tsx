import { motion } from "framer-motion";
import { SlideShell } from "../../components/index.ts";
import { fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function TransitionSlide() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Mini Agenda indicator in top-right corner */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 64,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: 4 }}>
          Roadmap:
        </span>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: n === 2 ? "#C2185B" : "#FCE4EC",
              color: n === 2 ? "#FFFFFF" : "#6B5B6E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 900,
              border: n === 2 ? "none" : "1px solid rgba(194, 24, 91, 0.05)",
            }}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Centered layout for transition */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div {...fadeInUp(0.1)}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#C2185B", // Accent
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Section Divider
          </span>
          <h2
            style={{
              margin: "16px 0 0",
              fontSize: 48,
              fontWeight: 900,
              color: "#4A1533", // Deep Plum
              letterSpacing: "-2.0px",
              lineHeight: 1.15,
            }}
          >
            Part 2 &mdash; Does it actually work?
          </h2>
          <div
            style={{
              width: 120,
              height: 4,
              background: "linear-gradient(90deg, #C2185B, #7B2C8F)",
              margin: "24px auto 0",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
TransitionSlide.slideId = "Transition";
