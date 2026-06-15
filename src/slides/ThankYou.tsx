import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../components/index.ts";
import { bodyText, heroTitle, topBar } from "../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "124, 58, 237", opacity: 0.18 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.12 },
];

export function ThankYou() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Top Brand Bar */}
      <motion.div
        {...topBar()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
              boxShadow: "0 0 8px rgba(124, 58, 237,0.6)",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7C3AED",
              fontWeight: 700,
            }}
          >
            Aesthetic Assessment
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
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
        <motion.h1
          {...heroTitle(0.12, 48)}
          style={{
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1.1,
            margin: "0 0 36px",
            color: "#0A0A0A",
            userSelect: "none",
          }}
        >
          Thank <GradientText>You!</GradientText>
        </motion.h1>

        <AccentLine delay={0.45} width={100} style={{ marginBottom: 36 }} />

        <motion.p
          {...bodyText(0.6)}
          style={{
            fontSize: 34,
            color: "#4B5563",
            margin: 0,
            fontWeight: 500,
            letterSpacing: "-0.2px",
            lineHeight: 1.5,
          }}
        >
          Happy to take any questions or suggestions.
        </motion.p>
      </div>

      {/* Bottom info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #F3F4F6",
          paddingTop: 24,
          fontSize: 18,
          color: "#9CA3AF",
          fontWeight: 500,
        }}
      >
        Emotion-Mediated Personalized Image Aesthetic Assessment (PIAA)
      </div>
    </SlideShell>
  );
}
