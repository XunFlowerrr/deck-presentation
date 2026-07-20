import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../../components/index.ts";
import { bodyText, bottomStrip, heroTitle, topBar } from "../../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "124, 58, 237", opacity: 0.18 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.12 },
];

export function CoverWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Top bar */}
      <motion.div
        {...topBar()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
              boxShadow: "0 0 8px rgba(124, 58, 237,0.6)",
            }}
          />
          <span
            style={{
              fontSize: 17,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7C3AED",
              fontWeight: 700,
            }}
          >
            Research Presentation
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontSize: 16,
              color: "#7C3AED",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            Aesthetic Assessment
          </span>
          <div style={{ width: 1, height: 14, background: "#E5E7EB" }} />
          <span
            style={{ fontSize: 16, color: "#9CA3AF", letterSpacing: "0.06em" }}
          >
            July 21, 2026
          </span>
        </div>
      </motion.div>

      {/* Hero */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.span
          {...bodyText(0.1)}
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#7C3AED",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 16,
          }}
        >
          Weekly Progress Update #4
        </motion.span>

        <motion.h1
          {...heroTitle(0.12, 48)}
          style={{
            fontSize: 100,
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1.15,
            margin: "0 0 36px",
            color: "#0A0A0A",
            userSelect: "none",
          }}
        >
          Emotion-Mediated
          <br />
          Personalized Image
          <br />
          <GradientText>Aesthetic Assessment</GradientText>
        </motion.h1>

        <AccentLine delay={0.55} width={140} style={{ marginBottom: 36 }} />

        <motion.p
          {...bodyText(0.72)}
          style={{
            fontSize: 34,
            color: "#6B7280",
            margin: 0,
            fontWeight: 400,
            letterSpacing: "-0.3px",
            lineHeight: 1.5,
          }}
        >
          Predicting individual aesthetic preferences through emotional responses
        </motion.p>
      </div>

      {/* Bottom strip */}
      <motion.div
        {...bottomStrip(1.0)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #F3F4F6",
          paddingTop: 24,
        }}
      >
        <div style={{ display: "flex", gap: 28 }}>
          {["PIAA", "Emotion Mediation"].map((tag, i) => (
            <span
              key={tag}
              style={{
                fontSize: 16,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: i === 0 ? "#7C3AED" : "#9CA3AF",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: 20,
            color: "#374151",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Presenter: <span style={{ color: "#7C3AED" }}>Pinwa</span>
        </span>
      </motion.div>
    </SlideShell>
  );
}
