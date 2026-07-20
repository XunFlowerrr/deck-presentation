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
    q: "Should I stop chasing accuracy and start writing up?",
    desc: "Our accuracy has plateaued within ~0.01 of the ICI and MIR baselines. This limit is fundamentally constrained by how well we can predict emotion from the image alone (average emo_r = 0.27).",
  },
  {
    num: "2",
    q: "Which target venue should we aim for?",
    desc: "Is this emotion-mediation story strong enough to target ACM MM 2027, or is ACII (Affective Computing) a better and more natural fit for our current contribution?",
  },
  {
    num: "3",
    q: "Is the mechanism story substantial enough for its own section?",
    desc: "Is our detailed analysis of when and why emotion helps (dose-response behavior, controlling for Direct model confound, and exploring the art baseline ceiling) strong enough for a major paper section?",
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
          gap: 20,
          justifyContent: "center",
        }}
      >
        {QUESTIONS.map((item, idx) => (
          <motion.div
            key={item.num}
            {...cardRise(idx * 0.1)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 20,
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
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
              <h4 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800, color: "#111827" }}>
                {item.q}
              </h4>
              <p style={{ margin: 0, fontSize: 17, color: "#4B5563", lineHeight: 1.5 }}>
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
          fontSize: 14,
          color: "#6B7280",
        }}
      >
        Feedback & strategic guidance for next paper milestone
      </motion.div>
    </SlideShell>
  );
}
