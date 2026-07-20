import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const QUESTIONS = [
  {
    num: "1",
    q: "Should we run cross-dataset validation?",
    desc: "Should I validate the Hybrid pipeline on other datasets (like FLICKR-AES or PARA) to verify generalization, and do you have recommendations? Or is evaluating on a single unique dataset generally accepted in this community?",
  },
  {
    num: "2",
    q: "Should we fine-tune Qwen-4B end-to-end?",
    desc: "Is end-to-end fine-tuning on the recommended Qwen-4B model worth the computation for potential accuracy gains, or should we freeze the model here and start writing the paper?",
  },
  {
    num: "3",
    q: "Does the ICI baseline actually benefit from traits?",
    desc: "Should we run an ablation study by removing personality traits from the ICI baseline to verify whether its accuracy gain comes from traits or its architecture?",
  },
  {
    num: "4",
    q: "What is our weakest point for an ACM MM submission?",
    desc: "If we submit this work to ACM MM 2027, what do you think is our main weakness or the most likely reason reviewers might reject it?",
  },
  {
    num: "5",
    q: "ACM MM vs. ACII: Which is more suitable?",
    desc: "Which venue fits this project's profile better: a major multimedia conference like ACM MM, or an affective computing focus like ACII?",
  },
];

export function QuestionsWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion"
        title="What I would like "
        highlight="your view on."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
          minHeight: 0,
          paddingBottom: 12,
        }}
      >
        {QUESTIONS.map((item, idx) => (
          <motion.div
            key={item.num}
            {...cardRise(idx * 0.08)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "rgba(124, 58, 237, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 900,
                color: "#7C3AED",
                flexShrink: 0,
              }}
            >
              {item.num}
            </div>

            <div>
              <h4 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 800, color: "#111827" }}>
                {item.q}
              </h4>
              <p style={{ margin: 0, fontSize: 19, color: "#374151", fontWeight: 600, lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Small definition box at bottom right */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 15,
          color: "#6B7280",
        }}
      >
        Feedback & strategic guidance for next paper milestone
      </motion.div>
    </SlideShell>
  );
}
