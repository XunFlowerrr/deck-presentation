import { motion } from "framer-motion";
import { AccentLine, SlideShell } from "../../components/index.ts";
import { bodyText, bottomStrip, heroTitle, topBar } from "../../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "194, 24, 91", opacity: 0.08 },
  { bottom: -200, left: -120, size: 640, color: "123, 44, 143", opacity: 0.05 },
];

export function CoverSlide() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Top bar */}
      <motion.div
        {...topBar()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 16,
          borderBottom: "1px solid #EEEDEA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#C2185B",
              boxShadow: "0 0 6px rgba(194, 24, 91, 0.3)",
            }}
          />
          <span
            style={{
              fontSize: 16,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C2185B",
              fontWeight: 800,
            }}
          >
            Research Presentation
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 15,
              color: "#6B5B6E",
              letterSpacing: "0.06em",
              fontWeight: 700,
            }}
          >
            Final presentation | July 30, 2026
          </span>
        </div>
      </motion.div>

      {/* Main Content Layout: Centered Title, Subtitle, Presenter */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
          padding: "36px 0 20px 0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          {/* Top Label */}
          <motion.span
            {...bodyText(0.08)}
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#6B5B6E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            When, Why, and How Far It Helps
          </motion.span>

          {/* Main Title */}
          <motion.h1
            {...heroTitle(0.1, 40)}
            style={{
              fontSize: 48,
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.15,
              margin: "8px 0 4px",
              color: "#4A1533",
              maxWidth: 900,
              userSelect: "none",
            }}
          >
            Emotion-Mediated Personalized Image
            <br />
            Aesthetic Assessment
          </motion.h1>

          <AccentLine delay={0.25} width={160} style={{ margin: "16px auto 0", background: "linear-gradient(90deg, #C2185B, #7B2C8F)" }} />
        </div>

        {/* Presenter Info */}
        <motion.div
          {...bodyText(0.35)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginTop: 4,
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800, color: "#2B2230" }}>Pinwa</span>
        </motion.div>

        {/* Visual Mock Grid Showing Subjective Aesthetic Disagreement */}
        <motion.div
          {...bodyText(0.45)}
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            marginTop: 16,
            width: "100%",
          }}
        >
          {[
            { user: "User A", score: "2.0 / 7.0", label: "Sad / Distasteful", bg: "rgba(194, 24, 91, 0.04)", border: "rgba(194, 24, 91, 0.15)", color: "#C2185B" },
            { user: "User B", score: "5.0 / 7.0", label: "Intellectual / Motivated", bg: "rgba(123, 44, 143, 0.04)", border: "rgba(123, 44, 143, 0.15)", color: "#7B2C8F" },
            { user: "User C", score: "6.0 / 7.0", label: "Impressed / Nostalgic", bg: "#FCE4EC", border: "rgba(194, 24, 91, 0.2)", color: "#C2185B" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "10px 16px",
                border: "1px solid #EEEDEA",
                width: 280,
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.01)",
              }}
            >
              <img
                src="/case-study/helps-3099.jpg"
                alt="Sample landscape photo"
                style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 8, border: "1px solid #EEEDEA" }}
              />
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.03em" }}>{item.user}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 4, alignItems: "center" }}>
                  <span style={{ fontSize: 12, background: item.bg, color: item.color, padding: "1px 6px", borderRadius: 4, fontWeight: 800, border: `1px solid ${item.border}` }}>
                    {item.score}
                  </span>
                  <span style={{ fontSize: 10, color: "#6B5B6E", fontWeight: 500 }}>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.div
        {...bottomStrip(0.55)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #EEEDEA",
          paddingTop: 16,
        }}
      >
        <div style={{ display: "flex", gap: 24 }}>
          {["Emotion Mediation", "Explainable AI", "PIAA"].map((tag, i) => (
            <span
              key={tag}
              style={{
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: i === 0 ? "#C2185B" : "#6B5B6E",
                fontWeight: 800,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FCE4EC" }} />
      </motion.div>
    </SlideShell>
  );
}
