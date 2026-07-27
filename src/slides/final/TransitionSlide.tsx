import { motion } from "framer-motion";
import { SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

export function TransitionSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
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
              fontSize: 18,
              fontWeight: 800,
              color: "#185FA5",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Transition
          </span>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: "#222222",
              letterSpacing: "-1.5px",
            }}
          >
            It Works.
            <br />
            <span style={{ color: "#1D9E75" }}>But When, Why, and How Far?</span>
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #185FA5, #1D9E75)",
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
              num: "01",
              q: "When does it help?",
              desc: "Analyzing visual backbone strength and user emotion predictability.",
              color: "#185FA5",
            },
            {
              num: "02",
              q: "How far can it go?",
              desc: "Defining realistic noise ceilings and resolving the cold-start rating threshold.",
              color: "#BA7517",
            },
            {
              num: "03",
              q: "Is the gain real?",
              desc: "Testing semantic validity via placebo control controls and unusual users.",
              color: "#1D9E75",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.q}
              {...cardRise(0.2 + idx * 0.08)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 18,
                padding: "24px 28px",
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
                Question {item.num}
              </span>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#222222" }}>
                {item.q}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#888888", lineHeight: 1.5, fontWeight: 500 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
