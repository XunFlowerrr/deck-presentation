import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -120, size: 800, color: "16, 185, 129", opacity: 0.12 },
  { bottom: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
];

const experiments = [
  {
    title: "Cold-start analysis",
    desc: "How many ratings needed before personal model beats population formula?",
  },
  {
    title: "Noise-ceiling analysis",
    desc: "~4,500 test-retest cases. Estimate human self-consistency → true upper bound for any model.",
  },
  {
    title: "Trait-conditioned emotion prediction",
    desc: "Can trait vectors predict how a user's emotions deviate from population? If yes → zero-shot personalization.",
  },
];

const questions = [
  "Is it worth fine-tuning Qwen too, or is \"small fine-tuned CLIP beats giant frozen Qwen\" strong enough?",
  "Should I keep chasing accuracy, or start focusing on interpretability findings?",
  "Can I use my reproduced ICI/MIR numbers (0.409/0.411) as the official comparison, since they're on exactly the same split?",
  "Given these findings, is IEEE Access still the right venue? Related work to check?",
];

export function NextStepsWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Next Steps"
        title="What comes "
        highlight="next."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 32,
          alignItems: "stretch",
          minHeight: 0,
          paddingBottom: 8,
        }}
      >
        {/* Left panel — Planned Experiments */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            flex: 1,
            background: "rgba(16, 185, 129, 0.02)",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            borderRadius: 24,
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <h3
            style={{
              fontSize: 23,
              fontWeight: 900,
              color: "#10B981",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            🧪 Planned Experiments
          </h3>

          <ol
            style={{
              margin: 0,
              paddingLeft: 24,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {experiments.map((exp) => (
              <li
                key={exp.title}
                style={{
                  fontSize: 18,
                  color: "#374151",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#111827" }}>{exp.title}</strong>
                <br />
                <span style={{ color: "#4B5563" }}>{exp.desc}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Right panel — Questions for Discussion */}
        <motion.div
          {...cardRise(0.22)}
          style={{
            flex: 1,
            background: "rgba(124, 58, 237, 0.02)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: 24,
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <h3
            style={{
              fontSize: 23,
              fontWeight: 900,
              color: "#7C3AED",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            💬 Questions for Discussion
          </h3>

          <ol
            style={{
              margin: 0,
              paddingLeft: 24,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {questions.map((q, i) => (
              <li
                key={i}
                style={{
                  fontSize: 18,
                  color: "#4B5563",
                  lineHeight: 1.6,
                }}
              >
                {q}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Bottom note */}
      <motion.div
        {...fadeInUp(0.5)}
        style={{
          textAlign: "center",
          padding: "16px 0 8px",
          fontSize: 17,
          color: "#9CA3AF",
          fontStyle: "italic",
        }}
      >
        Not in a hurry — can continue from Thailand after the internship if needed.
      </motion.div>
    </SlideShell>
  );
}
