import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { Equation, Var, Sub, Sum, Op } from "../../components/primitives/Equation.tsx";
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
        title="We define preference "
        highlight="through feeling."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 56,
          maxWidth: 960,
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
            gap: 16,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* 1. Image Node */}
          <div
            style={{
              width: 130,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <img
              src="/case-study/helps-3099.jpg"
              alt="Input target image"
              style={{ width: "100%", height: 70, objectFit: "cover", borderRadius: 6 }}
            />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#2B2230" }}>Image</span>
          </div>

          {/* Grey Arrow */}
          <svg width="24" height="24" viewBox="0 0 32 24" fill="none" stroke="#9E9E9E" strokeWidth="3">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="18,5 26,12 18,19" />
          </svg>

          {/* 2. 7 Emotions Node (Purple Filled) */}
          <div
            style={{
              width: 170,
              background: "#7B2C8F", // Secondary Purple
              borderRadius: 16,
              padding: "18px 12px",
              boxShadow: "0 6px 20px rgba(123, 44, 143, 0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 950 }}>7</div>
            <span style={{ fontSize: 14, fontWeight: 800 }}>Emotions</span>
            <span style={{ fontSize: 11, opacity: 0.8, fontWeight: 500 }}>nostalgic, distasteful...</span>
          </div>

          {/* Grey Arrow */}
          <svg width="24" height="24" viewBox="0 0 32 24" fill="none" stroke="#9E9E9E" strokeWidth="3">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="18,5 26,12 18,19" />
          </svg>

          {/* 3. Linear Formula Node (Pink Border Highlighted) */}
          <div
            style={{
              width: 230,
              background: "#FCE4EC", // Soft Pink Background
              border: "2px solid #C2185B", // Primary Pink Border
              borderRadius: 16,
              padding: "14px 12px",
              boxShadow: "0 6px 20px rgba(194, 24, 91, 0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 900, color: "#C2185B" }}>
              Linear Formula
            </span>
            <div style={{ margin: "2px 0" }}>
              <Equation inline size={14} color="#C2185B">
                <Var>y</Var>
                <Op>&nbsp;=&nbsp;</Op>
                <Var>w</Var><Sub>0</Sub>
                <Op>&nbsp;+&nbsp;</Op>
                <Sum from={<Var>e</Var>} to={<Op>7</Op>}>
                  <Var>w</Var><Sub><Var>e</Var></Sub>
                  <Var>x</Var><Sub><Var>e</Var></Sub>
                </Sum>
              </Equation>
            </div>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, lineHeight: 1.3 }}>
              readable per-person weights
            </span>
          </div>

          {/* Grey Arrow */}
          <svg width="24" height="24" viewBox="0 0 32 24" fill="none" stroke="#9E9E9E" strokeWidth="3">
            <line x1="0" y1="12" x2="26" y2="12" />
            <polyline points="18,5 26,12 18,19" />
          </svg>

          {/* 4. Score Node */}
          <div
            style={{
              width: 140,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "18px 12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 800, color: "#2B2230" }}>
              Preference Score
            </span>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 600, marginTop: 4 }}>
              (Aesthetic Rating)
            </span>
          </div>
        </motion.div>

        {/* Bottom Tagline: The Quote */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            maxWidth: 720,
            borderTop: "1px solid #EEEDEA",
            paddingTop: 32,
            width: "100%",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 700,
              color: "#4A1533", // Deep Plum
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            &ldquo;This image makes me feel X, so I like it this much.&rdquo;
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
IdeaSlide.slideId = "Idea";
