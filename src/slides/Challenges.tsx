import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -240, left: -120, size: 700, color: "239,68,68", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "124, 58, 237", opacity: 0.1 },
];

export function Challenges() {
  const challenges = [
    {
      title: "Predicting Personal Emotions",
      desc: "An image can make different people feel very different things. A general AI model typically only learns the average human reaction, not individual emotional subjectivity.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "rgba(124, 58, 237,0.04)",
      border: "1px solid rgba(124, 58, 237,0.12)",
    },
    {
      title: "Rare Emotion Sparsity",
      desc: "Certain emotions occur very rarely in particular domains. For instance, almost no one feels 'sad' looking at fashion photos, causing data imbalance that is hard to train.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </svg>
      ),
      color: "rgba(239,68,68,0.04)",
      border: "1px solid rgba(239,68,68,0.12)",
    },
    {
      title: "Limited Personalized Data",
      desc: "Each participant in XPASS-Vis rated roughly 100 images. Fitting the 9-dimensional personal formula on such limited local samples poses a significant risk of overfitting.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      desc: "To compare fairly against existing baselines (like ICI), we need to ensure models are trained and tested on the exact same cross-validation data splits.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion"
        title="Research"
        highlight="Challenges."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        
        {/* Grid layout for challenges */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              {...cardRise(i * 0.1)}
              style={{
                background: c.color,
                border: c.border,
                borderRadius: "20px",
                padding: "28px 32px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4 }}>{c.icon}</span>
              <div>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
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
