import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../../components/index.ts";
import { bodyText, bottomStrip, heroTitle, topBar } from "../../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "194, 79, 113", opacity: 0.1 },
  { bottom: -200, left: -120, size: 640, color: "194, 79, 113", opacity: 0.08 },
];

export function CoverSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
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
              background: "#C24F71",
              boxShadow: "0 0 6px rgba(194, 79, 113, 0.4)",
            }}
          />
          <span
            style={{
              fontSize: 17,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C24F71",
              fontWeight: 800,
            }}
          >
            Research Presentation
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontSize: 16,
              color: "#2D3136",
              letterSpacing: "0.08em",
              fontWeight: 800,
            }}
          >
            Final Thesis Review
          </span>
          <div style={{ width: 1, height: 14, background: "rgba(45, 49, 54, 0.2)" }} />
          <span
            style={{ fontSize: 16, color: "#2D3136", letterSpacing: "0.06em", fontWeight: 700 }}
          >
            JAIST
          </span>
        </div>
      </motion.div>

      {/* Main Content Layout: Split Title and Mock Rating Grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Title / Hero Side */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.span
            {...bodyText(0.1)}
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#C24F71",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 12,
            }}
          >
            Emotion Mediation for PIAA
          </motion.span>

          <motion.h1
            {...heroTitle(0.12, 40)}
            style={{
              fontSize: 74,
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: "0 0 24px",
              color: "#2D3136",
              userSelect: "none",
            }}
          >
            Emotion-Mediated
            <br />
            Personalized Image
            <br />
            <GradientText from="#C24F71" to="#E390A4">Aesthetic Assessment</GradientText>
          </motion.h1>

          <AccentLine delay={0.3} width={140} style={{ marginBottom: 24, background: "linear-gradient(90deg, #C24F71, #E390A4)" }} />

          <motion.p
            {...bodyText(0.4)}
            style={{
              fontSize: 22,
              color: "#626B74",
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.2px",
              lineHeight: 1.4,
            }}
          >
            Predicting individual aesthetic preferences through emotional responses.
          </motion.p>
        </div>

        {/* Visual Mock Grid Showing PIAA Concept */}
        <motion.div
          {...bodyText(0.5)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
            Personalized Aesthetic Disagreement (PIAA)
          </div>

          {/* Image 1 Comparison */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#FCFAF6", borderRadius: 16, padding: 12, border: "1px solid rgba(45, 49, 54, 0.06)" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="Sample 1"
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, border: "1px solid rgba(45, 49, 54, 0.08)" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136" }}>Landscape Photo</div>
              <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                <span style={{ fontSize: 12, background: "rgba(45, 49, 54, 0.03)", color: "#626B74", padding: "2px 8px", borderRadius: 6, fontWeight: 700, border: "1px solid rgba(45, 49, 54, 0.06)" }}>
                  User 1: 5.5 / 6.0
                </span>
                <span style={{ fontSize: 12, background: "rgba(194, 79, 113, 0.05)", color: "#C24F71", padding: "2px 8px", borderRadius: 6, fontWeight: 700, border: "1px solid rgba(194, 79, 113, 0.1)" }}>
                  User 2: 2.1 / 6.0
                </span>
              </div>
            </div>
          </div>

          {/* Image 2 Comparison */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#FCFAF6", borderRadius: 16, padding: 12, border: "1px solid rgba(45, 49, 54, 0.06)" }}>
            <img
              src="/case-study/helps-5632.jpg"
              alt="Sample 2"
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, border: "1px solid rgba(45, 49, 54, 0.08)" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136" }}>Artistic Design</div>
              <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                <span style={{ fontSize: 12, background: "rgba(194, 79, 113, 0.05)", color: "#C24F71", padding: "2px 8px", borderRadius: 6, fontWeight: 700, border: "1px solid rgba(194, 79, 113, 0.1)" }}>
                  User 1: 1.8 / 6.0
                </span>
                <span style={{ fontSize: 12, background: "rgba(45, 49, 54, 0.03)", color: "#626B74", padding: "2px 8px", borderRadius: 6, fontWeight: 700, border: "1px solid rgba(45, 49, 54, 0.06)" }}>
                  User 2: 4.9 / 6.0
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.div
        {...bottomStrip(0.8)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(45, 49, 54, 0.12)",
          paddingTop: 20,
        }}
      >
        <div style={{ display: "flex", gap: 28 }}>
          {["Emotion Mediation", "Explainable AI", "PIAA"].map((tag, i) => (
            <span
              key={tag}
              style={{
                fontSize: 14,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: i === 0 ? "#C24F71" : "#626B74",
                fontWeight: 800,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: 18,
            color: "#2D3136",
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          Presenter: <span style={{ color: "#C24F71" }}>Pinwa</span> &nbsp;
          <span style={{ color: "#626B74", fontWeight: 500, fontSize: 15 }}>JAIST / co-authors</span>
        </span>
      </motion.div>
    </SlideShell>
  );
}
