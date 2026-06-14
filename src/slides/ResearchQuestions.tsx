import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function ResearchQuestions() {
  const questions = [
    {
      num: "Q1",
      title: "Accuracy vs. Direct Prediction",
      question:
        "Can emotion-mediated modeling perform as accurately as direct aesthetic prediction?",
      desc: "Comparing our explainable two-stage pipeline against traditional black-box deep models to see if we sacrifice performance for transparency.",
      color: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
      border: "1px solid rgba(124, 58, 237, 0.12)",
    },
    {
      num: "Q2",
      title: "Cross-Category Consistency",
      question:
        'Is a person\'s "personal emotion formula" consistent across different image categories?',
      desc: "If a user appreciates fine art due to nostalgia, do they use the same criteria for fashion or landscape photos, or does their formula shift?",
      color: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
      border: "1px solid rgba(59, 130, 246, 0.12)",
    },
    {
      num: "Q3",
      title: "Psychological Grounding",
      question:
        "Does the personal formula correlate with real-world personality traits?",
      desc: "Testing if users high in Openness to Experience show stronger weights for 'Intellectually Challenged' in their formula, confirming psychological grounding rather than random data fitting.",
      color: "#D946EF",
      bg: "rgba(217, 70, 239, 0.03)",
      border: "1px solid rgba(217, 70, 239, 0.12)",
    },
    {
      num: "Q4",
      title: "Mediation Redundancy",
      question:
        "Should 'Liked' or 'Beautiful' be excluded as mediating emotions?",
      desc: "Since these dimensions are close to the final aesthetic rating, does including them make prediction trivial? We report on both 9-emotion and 7-emotion models to ensure robustness.",
      color: "#F59E0B",
      bg: "rgba(245, 158, 11, 0.03)",
      border: "1px solid rgba(245, 158, 11, 0.12)",
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
          gap: 28,
          alignItems: "stretch",
          justifyContent: "center",
          margin: "12px 0",
        }}
      >
        {questions.map((q, idx) => (
          <motion.div
            key={q.num}
            {...cardRise(idx * 0.1)}
            style={{
              background: q.bg,
              border: q.border,
              borderRadius: "24px",
              padding: "26px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "white",
                    backgroundColor: q.color,
                    padding: "4px 10px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {q.num}
                </span>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: "#111827",
                    margin: 0,
                  }}
                >
                  {q.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
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
                fontSize: 18,
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
