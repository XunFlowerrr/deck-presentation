import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../../components/index.ts";
import { bodyText, heroTitle } from "../../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "124, 58, 237", opacity: 0.18 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.12 },
];

export function ThankYouWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <motion.span
          {...bodyText(0.1)}
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#7C3AED",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: 16,
          }}
        >
          Progress Update #4
        </motion.span>

        <motion.h1
          {...heroTitle(0.12, 48)}
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            lineHeight: 1.1,
            margin: "0 0 28px",
            color: "#0A0A0A",
            userSelect: "none",
          }}
        >
          Thank <GradientText>You</GradientText>
        </motion.h1>

        <AccentLine delay={0.4} width={140} style={{ marginBottom: 28 }} />

        <motion.p
          {...bodyText(0.5)}
          style={{
            fontSize: 24,
            color: "#6B7280",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Pinwa
        </motion.p>
      </div>
    </SlideShell>
  );
}
