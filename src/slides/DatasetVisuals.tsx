import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";
import { correlationImg, emotionRatingImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 }, // Purple
  { bottom: -200, left: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },  // Pink
];

export function DatasetVisuals() {
  const visualizations = [
    {
      title: "Emotion Correlations with Aesthetics",
      desc: "Positive emotions like 'Beautiful' and 'Like' show high correlation with overall aesthetics, while negative emotions like 'Distasteful' are highly negatively correlated.",
      img: correlationImg,
    },
    {
      title: "Average Emotion Ratings by Genre",
      desc: "Aesthetic ratings vary significantly across different genres (Art, Fashion, Scenery), with positive emotions scoring higher on average for Scenery images.",
      img: emotionRatingImg,
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Data Exploration"
        title="Dataset"
        highlight="Visualizations."
      />

      <div style={{ flex: 1, display: "flex", gap: 40, alignItems: "center", minHeight: 0 }}>
        {visualizations.map((vis, i) => (
          <motion.div
            key={vis.title}
            {...cardRise(i * 0.15 + 0.2)}
            style={{
              flex: 1,
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.04)",
              borderRadius: "24px",
              padding: "28px 32px",
              height: "100%",
              maxHeight: "680px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            {/* Chart Title */}
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: 0 }}>
              {vis.title}
            </h3>

            {/* Image Container */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #F3F4F6",
                background: "#FAFAFA",
                minHeight: 0,
              }}
            >
              <img
                src={vis.img}
                alt={vis.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Description/Takeaway */}
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              {vis.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
