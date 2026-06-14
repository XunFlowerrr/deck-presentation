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
      desc: "An image can make different people feel very different things. A general AI model typically only learns the average human reaction, not individual emotional subjectivity.",
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
      desc: "Certain emotions occur very rarely in particular domains, causing data imbalance that is hard to train.",
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
      desc: "Each participant rated ~100 images. Fitting the 9-dimensional personal formula on such limited samples poses a significant risk of overfitting.",
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
    {
      title: "Evaluation Alignment",
      desc: "To compare fairly against existing baselines, we need identical cross-validation data splits across all models.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v17" />
          <path d="M12 6H3" />
          <path d="M12 6h9" />
          <path d="M3 6l3 6h-6l3-6" />
          <path d="M21 6l3 6h-6l3-6" />
          <path d="M12 20H8" />
          <path d="M12 20h4" />
        </svg>
      ),
      color: "rgba(16,185,129,0.04)",
      border: "1px solid rgba(16,185,129,0.12)",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Complete 5-Fold Cross-Validation",
      desc: "Run comprehensive experiments across all remaining folds to secure robust, stable benchmark metrics against ICI.",
    },
    {
      num: "02",
      title: "Correlate with Personality (Big Five)",
      desc: "Cross-reference each person's emotion weightings with their Big Five personality profiles in XPASS-Vis.",
    },
    {
      num: "03",
      title: "Test Domain Consistency",
      desc: "Analyze whether an individual's personal formula stays consistent across different image domains.",
    },
    {
      num: "04",
      title: "Paper Write-up & Submission",
      desc: "Synthesize findings, document the explainability advantages of emotion mediation, and draft the paper.",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion"
        title="Challenges &"
        highlight="Next Steps."
      />

      <div style={{ flex: 1, display: "flex", gap: 40, minHeight: 0 }}>
        {/* Left: Research Challenges */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                width: 4,
                height: 28,
                borderRadius: 4,
                background: "linear-gradient(180deg, #EF4444, #F9A8C9)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Research Challenges
            </span>
          </div>
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              {...cardRise(i * 0.08)}
              style={{
                background: c.color,
                border: c.border,
                borderRadius: "16px",
                padding: "18px 22px",
                display: "flex",
                flex: 1,
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 3,
                }}
              >
                {c.icon}
              </span>
              <div>
                <h4
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontSize: 16,
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

        {/* Divider */}
        <div
          style={{
            width: 1,
            background: "#E5E7EB",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        />

        {/* Right: Next Research Steps */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                width: 4,
                height: 28,
                borderRadius: 4,
                background: "linear-gradient(180deg, #9B72CF, #C4A3E8)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Next Research Steps
            </span>
          </div>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...cardRise(i * 0.08 + 0.1)}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "18px 22px",
                display: "flex",
                flex: 1,
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#9B72CF",
                  background: "rgba(155,114,207,0.1)",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {step.num}
              </span>
              <div>
                <h4
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#4B5563",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
