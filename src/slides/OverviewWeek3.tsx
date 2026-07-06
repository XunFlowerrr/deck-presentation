import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function OverviewWeek3() {
  const topics = [
    {
      qNum: "RQ3",
      title: "Does the formula connect to personality?",
      desc: "Do users who score high in Openness also care more about intellectually challenging images?",
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
      border: "1px solid rgba(124, 58, 237, 0.15)",
      bullets: [
        "Test whether emotion weights connect to broad personality traits.",
        "Look for links between Openness and intellectually challenging images.",
        "Check whether negative emotion weights align with Emotional Stability.",
      ],
    },
    {
      qNum: "RQ4",
      title: "Does the formula stay the same across image types?",
      desc: "If someone cares a lot about nostalgia in art images, do they also care about it in fashion images?",
      accent: "#EC4899",
      bg: "rgba(236, 72, 153, 0.03)",
      border: "1px solid rgba(236, 72, 153, 0.15)",
      bullets: [
        "Check whether the personal formula is stable across Art, Fashion, and Landscape.",
        "Compare same-user consistency against a permutation baseline.",
        "Identify which emotions are most and least stable across domains.",
      ],
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Weekly Update Overview"
        title="This week: two analysis questions"
        highlight="about the personal formula."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.qNum}
            {...cardRise(idx * 0.15)}
            style={{
              background: topic.bg,
              border: topic.border,
              borderRadius: "28px",
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              height: "460px",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    color: "white",
                    backgroundColor: topic.accent,
                    padding: "6px 14px",
                    borderRadius: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {topic.qNum}
                </span>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 950,
                    color: "#111827",
                    margin: 0,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {topic.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: 20,
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {topic.desc}
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                paddingTop: 20,
              }}
            >
              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#374151", marginBottom: 12 }}>
                Key Questions Explored:
              </h4>
              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 18, color: "#6B7280", lineHeight: 1.6 }}>
                {topic.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
