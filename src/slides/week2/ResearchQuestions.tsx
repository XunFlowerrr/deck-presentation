import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function ResearchQuestions() {
  const questions = [
    {
      num: "Q1",
      title: "Accuracy vs. Direct Prediction",
      question: "Can emotion-mediated modeling perform as accurately as direct aesthetic prediction?",
      desc: "Comparing our explainable two-stage pipeline against traditional black-box deep models to see if we sacrifice performance for transparency.",
      color: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
      border: "1px solid rgba(124, 58, 237, 0.15)",
    },
    {
      num: "Q2",
      title: "Mediation Redundancy",
      question: "Should 'Liked' or 'Found it beautiful' be excluded as mediating emotions?",
      desc: "Two emotions ('Liked it', 'Found it beautiful') are very close to the final score itself. Should we keep them, or remove them?",
      color: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
      border: "1px solid rgba(59, 130, 246, 0.15)",
    },
    {
      num: "Q3",
      title: "Psychological Grounding",
      question: "Does the personal formula correlate with real-world personality traits?",
      desc: "Testing if users' personal formulas reflect real personality traits (e.g. Openness to Experience correlating with 'Intellectually Challenged' weight).",
      color: "#D946EF",
      bg: "rgba(217, 70, 239, 0.03)",
      border: "1px solid rgba(217, 70, 239, 0.15)",
    },
    {
      num: "Q4",
      title: "Cross-Category Consistency",
      question: "Is a person's 'personal emotion formula' consistent across different image categories?",
      desc: "If a user appreciates fine art due to nostalgia, do they use the same criteria for fashion or landscape photos, or does their formula shift?",
      color: "#F59E0B",
      bg: "rgba(245, 158, 11, 0.03)",
      border: "1px solid rgba(245, 158, 11, 0.15)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Core Hypotheses"
        title="Research"
        highlight="Questions."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
          alignItems: "stretch",
          justifyContent: "center",
          margin: "16px 0",
        }}
      >
        {questions.map((q, idx) => (
          <motion.div
            key={q.num}
            {...cardRise(idx * 0.1)}
            style={{
              background: q.bg,
              border: q.border,
              borderRadius: "28px",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 900,
                    color: "white",
                    backgroundColor: q.color,
                    padding: "5px 12px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {q.num}
                </span>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 950,
                    color: "#111827",
                    margin: 0,
                  }}
                >
                  {q.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#374151",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {q.question}
              </p>
            </div>

            <p
              style={{
                fontSize: 20,
                color: "#4B5563",
                margin: "12px 0 0 0",
                lineHeight: 1.5,
              }}
            >
              {q.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
