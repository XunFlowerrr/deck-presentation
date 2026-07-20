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
    q: "Target Venue",
    desc: "Is this story strong enough for ACM MM 2027, or is ACII (Affective Computing) a better fit? What is our main weakness?",
  },
  {
    num: "2",
    q: "Cross-Dataset Validation",
    desc: "Should I validate on FLICKR-AES / PARA? (Note: they lack emotion labels, so only direct/transferred evaluation is possible)",
  },
  {
    num: "3",
    q: "Next Computational Step",
    desc: "Worth fine-tuning Qwen4B end-to-end for potential accuracy gains, or should I freeze the code and start writing?",
  },
  {
    num: "4",
    q: "ICI Baseline Ablation",
    desc: "Should I run an ICI ablation without personality traits to isolate whether its gain comes from traits or architecture?",
  },
  {
    num: "5",
    q: "Model Ablation Options",
    desc: "Any baseline ablation missing? (e.g. replacing Ridge regression with Elastic Net for Stage-2 personal fitting)",
  },
  {
    num: "6",
    q: "Presentation Style",
    desc: "Are animated slides considered unprofessional in Japanese academic lab culture?",
  },
];

export function QuestionsWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 4 — Discussion"
        title="Questions for "
        highlight="Discussion."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          alignContent: "center",
        }}
      >
        {QUESTIONS.map((item, idx) => (
          <motion.div
            key={item.num}
            {...cardRise(idx * 0.08)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 16,
              padding: "16px 20px",
              display: "flex",
              gap: 16,
              boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(124, 58, 237, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: 800,
                color: "#7C3AED",
                flexShrink: 0,
              }}
            >
              {item.num}
            </div>

            <div>
              <h4 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 800, color: "#111827" }}>
                {item.q}
              </h4>
              <p style={{ margin: 0, fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Feedback & strategic guidance for next paper milestone
      </motion.div>
    </SlideShell>
  );
}
