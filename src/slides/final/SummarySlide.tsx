import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

const POINTS = [
  {
    num: "1",
    title: "Explainable Emotion Model",
    desc: "Built an explainable model that predicts preference through 7 intermediate emotions.",
  },
  {
    num: "2",
    title: "Trait-Free Parity",
    desc: "Comparable to trait-based baselines while using only emotion (protecting user privacy).",
  },
  {
    num: "3",
    title: "Accuracy-Driven Gain",
    desc: "Helps more when we predict a person's emotions more accurately ($emo\\_r$).",
  },
  {
    num: "4",
    title: "Ceiling & Cold-Start",
    desc: "Realistic ceiling is 0.63, and emotion is what makes personalizing worthwhile (from 50 ratings).",
  },
];

export function SummarySlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Conclusion"
        title="Key "
        highlight="takeaways."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 16,
        }}
      >
        {/* 2x2 Grid for the 4 Takeaways */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            maxWidth: 920,
            margin: "auto auto",
            width: "100%",
          }}
        >
          {POINTS.map((item, idx) => (
            <motion.div
              key={item.num}
              {...cardRise(0.1 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 18,
                padding: "22px 26px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.015)",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              {/* Pink Circle Number */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: idx % 2 === 0 ? "#C2185B" : "#7B2C8F",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 900,
                  flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(194, 24, 91, 0.2)",
                }}
              >
                {item.num}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline Quote */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "12px auto 0",
            borderTop: "1px solid #EEEDEA",
            paddingTop: 16,
            width: "100%",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 800,
              color: "#4A1533",
              fontStyle: "italic",
            }}
          >
            &ldquo;Emotion is a powerful, explainable bridge to subjective taste.&rdquo;
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
