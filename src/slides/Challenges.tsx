import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -240, left: -120, size: 700, color: "239,68,68", opacity: 0.07 },
  {
    bottom: -200,
    right: -100,
    size: 600,
    color: "124, 58, 237",
    opacity: 0.09,
  },
];

export function Challenges() {
  const challenges = [
    {
      title: "Predicting Personal Emotions",
      desc: "An image can make different people feel very different things. As shown in experiment 2, the hardest part is predicting how a specific person feels.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9B72CF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "rgba(155,114,207,0.05)",
      border: "1px solid rgba(155,114,207,0.15)",
    },
    {
      title: "Rare Emotion Sparsity",
      desc: "some emotions don't appear very often in the data — for example, very few people feel sad when looking at fashion photos — which makes them harder to learn.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EF4444"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </svg>
      ),
      color: "rgba(239,68,68,0.04)",
      border: "1px solid rgba(239,68,68,0.12)",
    },
    {
      title: "Limited Personalized Data",
      desc: "in training a 9-number personal formula while each person only rated about 100 images carries a risk of overfitting.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      color: "rgba(245,158,11,0.04)",
      border: "1px solid rgba(245,158,11,0.12)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion"
        title="Research"
        highlight="Challenges."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 36 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              {...cardRise(i * 0.1)}
              style={{
                background: c.color,
                border: c.border,
                borderRadius: "24px",
                padding: "40px 48px",
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: c.color.replace("0.05", "0.15").replace("0.04", "0.12"),
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </span>
              <div>
                <h4
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontSize: 22,
                    color: "#4B5563",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
