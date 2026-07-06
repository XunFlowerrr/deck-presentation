import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function DiscussionQuestions() {
  const questions = [
    {
      num: "01",
      title: "Improving Personal Emotion Prediction",
      desc: "In Experiment 3, we found that the bottleneck is predicting personalized emotions accurately from pixels. Do you think we should focus on refining this (e.g., trying different image features or more complex models), or is there another direction you suggest first?",
      color: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
      border: "1px solid rgba(124, 58, 237, 0.15)",
    },
    {
      num: "02",
      title: "Access to ICI Baseline Code",
      desc: "Would it be possible to obtain the code for the ICI baseline (Shi et al., 2024)? Currently we are comparing against the results reported in their paper. Accessing the code would allow for a direct, fair evaluation on our exact cross-validation splits.",
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.03)",
      border: "1px solid rgba(236, 72, 153, 0.15)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion"
        title="Questions for"
        highlight="Discussion."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28, justifyContent: "center", alignItems: "center" }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: "100%", maxWidth: "800px" }}>
          {questions.map((q, i) => (
            <motion.div
              key={q.num}
              {...cardRise(i * 0.15)}
              style={{
                background: q.bg,
                border: q.border,
                borderRadius: "24px",
                padding: "32px 40px",
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.01)",
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: q.color,
                  background: q.bg.replace("0.03", "0.12"),
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {q.num}
              </span>
              <div>
                <h4 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 6 }}>
                  {q.title}
                </h4>
                <p style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  {q.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideShell>
  );
}
