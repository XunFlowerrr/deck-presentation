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
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: "#4A1533",
              letterSpacing: "-1.5px",
            }}
          >
            It Works.
            <br />
            <span style={{ color: "#C2185B" }}>Now three questions.</span>
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

        {/* The 3 Core Questions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            maxWidth: 960,
            width: "100%",
          }}
        >
          {[
            {
              num: "1",
              q: "When does it help?",
              color: "#C2185B",
            },
            {
              num: "2",
              q: "How far can it go?",
              color: "#7B2C8F",
            },
            {
              num: "3",
              q: "Is the gain real?",
              color: "#C2185B",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.q}
              {...cardRise(0.2 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 20,
                padding: "36px 20px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                position: "relative",
                overflow: "hidden",
                minHeight: 200,
              }}
            >
              {/* Highlight bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: item.color }} />

              <span
                style={{
                  fontSize: 52,
                  fontWeight: 950,
                  color: item.color,
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#4A1533", lineHeight: 1.3 }}>
                {item.q}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
