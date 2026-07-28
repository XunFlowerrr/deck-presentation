import { motion } from "framer-motion";
import { SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function TransitionSlide() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Centered layout for transition */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
          textAlign: "center",
        }}
      >
        <motion.div {...fadeInUp(0.1)}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#C2185B",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Part Two
          </span>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 48,
              fontWeight: 950,
              color: "#4A1533",
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
            }}
          >
            Showing That Our Idea Actually Works
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #C2185B, #7B2C8F)",
              margin: "24px auto 0",
              borderRadius: 2,
            }}
          />
        </motion.div>

        {/* The 2 Core Results Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            maxWidth: 800,
            width: "100%",
          }}
        >
          {[
            {
              num: "01",
              title: "Hybrid > Direct",
              desc: "Proving that routing aesthetic predictions through intermediate emotional responses significantly improves CCC/SRCC scores.",
              color: "#C2185B",
            },
            {
              num: "02",
              title: "Comparable to Baselines",
              desc: "Demonstrating that our emotion-mediated model matches trait-based benchmarks without requiring any personal trait data.",
              color: "#7B2C8F",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              {...cardRise(0.2 + idx * 0.1)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 18,
                padding: "32px 28px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Highlight bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: item.color }} />

              <span
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  color: item.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Section {item.num}
              </span>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#4A1533" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
