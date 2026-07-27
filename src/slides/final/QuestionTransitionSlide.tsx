import { motion } from "framer-motion";
import { SlideShell } from "../../components/index.ts";
import { bodyText, heroTitle } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function QuestionTransitionSlide() {
  const questions = [
    "When does it help?",
    "How far can it go?",
    "Is the gain real?",
  ];

  return (
    <SlideShell glows={GLOWS}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 40,
        }}
      >
        <motion.h2
          {...heroTitle(0.1, 30)}
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#4A1533", // Deep Plum
            margin: 0,
            letterSpacing: "-1.5px",
          }}
        >
          It works. Now three questions.
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 24,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {questions.map((q, i) => (
            <motion.div
              key={q}
              {...bodyText(0.2 + i * 0.15)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FCE4EC", // Soft Pink
                  color: "#C2185B", // Chula Pink
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                  border: "1px solid rgba(194, 24, 91, 0.15)",
                }}
              >
                {i + 1}
              </div>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#2B2230", // Main text
                  letterSpacing: "-0.5px",
                }}
              >
                {q}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
QuestionTransitionSlide.slideId = "QuestionTransition";
