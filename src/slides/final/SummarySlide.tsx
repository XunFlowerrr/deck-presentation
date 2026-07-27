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
    title: "Explainable PIAA",
    desc: "Provides readable weights per person, achieving positive performance gains for 93% of users.",
  },
  {
    num: "2",
    title: "No Intrusive Traits",
    desc: "Matches SOTA baselines using emotional intermediate representations, fully protecting user privacy.",
  },
  {
    num: "3",
    title: "Realistic Ceiling",
    desc: "Temporal ceiling is capped at 0.64 due to measurement noise rather than model capacity.",
  },
  {
    num: "4",
    title: "Cold-Start Limit",
    desc: "Requires approximately 50 ratings to outperform the generic population average model.",
  },
];

export function SummarySlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Conclusion"
        title="Key "
        highlight="takeaways."
        accentWidth={100}
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
        {/* 2x2 Grid for the 4 Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            maxWidth: 900,
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
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              {/* Pink Circle Number */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#C2185B", // Primary Pink
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 900,
                  flexShrink: 0,
                  boxShadow: "0 2px 6px rgba(194, 24, 91, 0.15)",
                }}
              >
                {item.num}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#4A1533" }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.4, fontWeight: 550 }}>
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
            maxWidth: 720,
            margin: "12px auto 0",
            borderTop: "1px solid #EEEDEA",
            paddingTop: 16,
            width: "100%",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 19,
              fontWeight: 800,
              color: "#4A1533", // Deep Plum
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
SummarySlide.slideId = "Summary";
