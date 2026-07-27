import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

export function IdeaSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
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
              width: 140,
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
              src="/case-study/helps-3099.jpg"
              alt="Input"
              style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 8 }}
            />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#222222" }}>Target Image</span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#185FA5" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 2. 7 Emotions Node */}
          <div
            style={{
              width: 160,
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
            <div style={{ fontSize: 24, fontWeight: 900, color: "#1D9E75" }}>7</div>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#222222" }}>Aesthetic Emotions</span>
            <span style={{ fontSize: 11, color: "#888888", fontWeight: 700 }}>e.g. peaceful, nostalgic</span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#185FA5" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 3. Linear formula node (Highlighted) */}
          <div
            style={{
              width: 240,
              background: "rgba(29, 158, 117, 0.04)",
              border: "2px solid #1D9E75",
              borderRadius: 20,
              padding: "20px 16px",
              boxShadow: "0 10px 30px rgba(29, 158, 117, 0.03)",
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
                background: "#1D9E75",
                color: "#FFFFFF",
                fontSize: 10,
                fontWeight: 900,
                textTransform: "uppercase",
                padding: "2px 8px",
                borderRadius: 6,
                letterSpacing: "0.08em",
              }}
            >
              Explainable
            </div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#1D9E75", marginTop: 4 }}>
              Linear Weighting
            </span>
            <span style={{ fontSize: 12, color: "#222222", fontWeight: 700, lineHeight: 1.3 }}>
              Gives a readable per-person formula
            </span>
          </div>

          {/* Arrow */}
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#185FA5" strokeWidth="2.5">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="20,6 26,12 20,18" />
          </svg>

          {/* 4. Score Node */}
          <div
            style={{
              width: 130,
              background: "#EEEDEA",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 12, color: "#888888", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Output
            </span>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#222222", marginTop: 4 }}>
              Aesthetic Score
            </span>
          </div>
        </motion.div>

        {/* Bottom Tagline: The Core Research Question */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            maxWidth: 720,
            borderTop: "1px solid #EEEDEA",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <span style={{ fontSize: 13, color: "#185FA5", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            The Core Inquiry
          </span>
          <h2 style={{ margin: "6px 0 0", fontSize: 24, fontWeight: 800, color: "#222222", lineHeight: 1.4 }}>
            Research Question: Do users disagree because they{" "}
            <span style={{ color: "#BA7517" }}>feel differently</span> or{" "}
            <span style={{ color: "#1D9E75" }}>weight emotions differently</span>?
          </h2>
        </motion.div>
      </div>
    </SlideShell>
  );
}
