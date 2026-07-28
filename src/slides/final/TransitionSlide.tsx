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
      {/* Top-Right Agenda Tracker */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 60,
          display: "flex",
          gap: 8,
          alignItems: "center",
          background: "#FFFFFF",
          border: "1px solid #EEEDEA",
          padding: "6px 12px",
          borderRadius: 30,
          boxShadow: "0 4px 15px rgba(0,0,0,0.01)",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 900, color: "#6B5B6E", marginRight: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Progress:</span>
        {[1, 2, 3, 4, 5].map((num) => {
          const isCurrent = num === 2;
          return (
            <div
              key={num}
              style={{
                width: isCurrent ? 24 : 18,
                height: isCurrent ? 24 : 18,
                borderRadius: "50%",
                background: isCurrent ? "#C2185B" : "transparent",
                color: isCurrent ? "#FFFFFF" : "#9E9E9E",
                border: isCurrent ? "none" : "1px solid #EEEDEA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isCurrent ? 12 : 10,
                fontWeight: 900,
              }}
            >
              {num}
            </div>
          );
        })}
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
          gap: 24,
        }}
      >
        <motion.div {...fadeInUp(0.15)}>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 950,
              color: "#4A1533",
              letterSpacing: "-2px",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Part 2 &mdash; Does it actually work?
          </h2>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#C2185B",
              margin: "32px auto 0",
            }}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
