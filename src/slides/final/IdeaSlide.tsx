import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function IdeaSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Our Approach"
        title="Predict taste "
        highlight="Through Emotion."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 56,
          maxWidth: 1000,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Horizontal Flow Diagram */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* 1. Image Node */}
          <div
            style={{
              width: 150,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img
              src="/case-study/pink_purple_landscape.jpg"
              alt="Input"
              style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 8 }}
            />
            <span style={{ fontSize: 15, fontWeight: 800, color: "#4A1533" }}>Target Image</span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#C2185B" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 2. 7 Emotions Node */}
          <div
            style={{
              width: 170,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 900, color: "#C2185B" }}>7</div>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#4A1533" }}>Aesthetic Emotions</span>
            <span style={{ fontSize: 13, color: "#6B5B6E", fontWeight: 700 }}>e.g. peaceful, nostalgic</span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#C2185B" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 3. Linear formula node (Highlighted) */}
          <div
            style={{
              width: 250,
              background: "rgba(123, 44, 143, 0.04)",
              border: "2px solid #7B2C8F",
              borderRadius: 20,
              padding: "20px 16px",
              boxShadow: "0 10px 30px rgba(123, 44, 143, 0.03)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -12,
                background: "#7B2C8F",
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: 900,
                textTransform: "uppercase",
                padding: "2px 8px",
                borderRadius: 6,
                letterSpacing: "0.08em",
              }}
            >
              Explainable
            </div>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#7B2C8F", marginTop: 4 }}>
              Linear Weighting
            </span>
            <span style={{ fontSize: 14, color: "#2B2230", fontWeight: 700, lineHeight: 1.3 }}>
              Gives a readable per-person formula
            </span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#C2185B" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 4. Score Node */}
          <div
            style={{
              width: 140,
              background: "#FCE4EC",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              borderRadius: 16,
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 14, color: "#6B5B6E", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Output
            </span>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#4A1533", marginTop: 4 }}>
              Aesthetic Score
            </span>
          </div>
        </motion.div>

        {/* Bottom Tagline: The Core Research Question */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            maxWidth: 750,
            borderTop: "1px solid #EEEDEA",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <span style={{ fontSize: 15, color: "#C2185B", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            The Core Inquiry
          </span>
          <h2 style={{ margin: "6px 0 0", fontSize: 27, fontWeight: 800, color: "#4A1533", lineHeight: 1.4 }}>
            Research Question: Do users disagree because they{" "}
            <span style={{ color: "#C2185B" }}>feel differently</span> or{" "}
            <span style={{ color: "#7B2C8F" }}>weight emotions differently</span>?
          </h2>
        </motion.div>
      </div>
    </SlideShell>
  );
}
