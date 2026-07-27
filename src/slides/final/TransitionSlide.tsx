import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function TransitionSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      {/* Centered layout for transition */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
          textAlign: "center",
        }}
      >
        <motion.div {...fadeInUp(0.1)}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: "#C24F71",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Transition
          </span>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 56,
              fontWeight: 900,
              color: "#2D3136",
              letterSpacing: "-1.5px",
            }}
          >
            OK, It Works.
            <br />
            <span style={{ color: "#C24F71" }}>But When, Why, and How Far?</span>
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(95deg, #C24F71, #2D3136)",
              margin: "24px auto 0",
              borderRadius: 2,
            }}
          />
        </motion.div>

        {/* The 3 Core Questions We Will Answer Next */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            maxWidth: 1000,
            width: "100%",
          }}
        >
          {[
            {
              q: "When does it help?",
              desc: "Theoretical mechanism: Is the accuracy boost driven by how well we predict a user's emotions?",
              color: "#C24F71",
              tint: "rgba(194, 79, 113, 0.03)",
            },
            {
              q: "Perception vs Weighting?",
              desc: "Source of diversity: Do users disagree because they feel different emotions, or weight them differently?",
              color: "#2D3136",
              tint: "rgba(45, 49, 54, 0.02)",
            },
            {
              q: "How far can it go?",
              desc: "Systemic limits: Where is the realistic noise ceiling, and how do we resolve the cold-start barrier?",
              color: "#C24F71",
              tint: "rgba(194, 79, 113, 0.03)",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.q}
              {...cardRise(0.25 + idx * 0.1)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(45, 49, 54, 0.08)",
                borderRadius: 18,
                padding: "20px 24px",
                boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top highlight bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: item.color }} />

              <span
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  color: item.color === "#2D3136" ? "#2D3136" : "#C24F71",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Question 0{idx + 1}
              </span>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
                {item.q}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
