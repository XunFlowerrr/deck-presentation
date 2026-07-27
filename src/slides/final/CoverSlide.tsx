import { motion } from "framer-motion";
import { AccentLine, GradientText, SlideShell } from "../../components/index.ts";
import { bodyText, bottomStrip, heroTitle, topBar } from "../../lib/motion.ts";

const GLOWS = [
  { top: -320, right: -180, size: 960, color: "24, 95, 165", opacity: 0.08 },
  { bottom: -200, left: -120, size: 640, color: "29, 158, 117", opacity: 0.05 },
];

export function CoverSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
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
              background: "#185FA5",
              boxShadow: "0 0 6px rgba(24, 95, 165, 0.3)",
            }}
          />
          <span
            style={{
              fontSize: 17,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#185FA5",
              fontWeight: 800,
            }}
          >
            Research Presentation
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 16,
              color: "#222222",
              letterSpacing: "0.06em",
              fontWeight: 800,
            }}
          >
            Final Presentation | July 30, 2026
          </span>
        </div>
      </motion.div>

      {/* Main Content Layout: Centered Title and Descriptions */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          padding: "32px 0",
        }}
      >
        {/* Title / Hero Side */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <motion.span
            {...bodyText(0.1)}
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#185FA5",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Emotion Mediation for PIAA
          </motion.span>

          <motion.h1
            {...heroTitle(0.12, 40)}
            style={{
              fontSize: 56,
              fontWeight: 900,
              letterSpacing: "-2.5px",
              lineHeight: 1.1,
              margin: 0,
              color: "#222222",
              userSelect: "none",
            }}
          >
            Emotion-Mediated 
            <br />
            <GradientText from="#185FA5" to="#1D9E75">Personalized Image Aesthetic Assessment</GradientText>
          </motion.h1>

          <AccentLine delay={0.3} width={160} style={{ margin: "12px auto 0", background: "linear-gradient(90deg, #185FA5, #1D9E75)" }} />
        </div>

        {/* Short Description Tagline */}
        <motion.p
          {...bodyText(0.4)}
          style={{
            fontSize: 22,
            color: "#888888",
            margin: "0 auto",
            fontWeight: 700,
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          Predicting individual aesthetic preferences through emotional responses
        </motion.p>

        {/* Visual Mock Grid Showing PIAA Concept - Horizontal Side-by-Side Row */}
        <motion.div
          {...bodyText(0.5)}
          style={{
            display: "flex",
            gap: 24,
            width: "100%",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          {/* Image 1 Comparison */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#FFFFFF", borderRadius: 16, padding: "12px 20px", border: "1px solid #EEEDEA", width: 340, textAlign: "left", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="Sample 1"
              style={{ width: 68, height: 68, objectFit: "cover", borderRadius: 10, border: "1px solid #EEEDEA" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#222222", textTransform: "uppercase", letterSpacing: "0.05em" }}>Landscape Photo</div>
              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                <span style={{ fontSize: 11, background: "rgba(29, 158, 117, 0.05)", color: "#1D9E75", padding: "2px 6px", borderRadius: 6, fontWeight: 800, border: "1px solid rgba(29, 158, 117, 0.15)" }}>
                  User A: 5.5
                </span>
                <span style={{ fontSize: 11, background: "rgba(24, 95, 165, 0.05)", color: "#185FA5", padding: "2px 6px", borderRadius: 6, fontWeight: 800, border: "1px solid rgba(24, 95, 165, 0.15)" }}>
                  User B: 2.1
                </span>
              </div>
            </div>
          </div>

          {/* Image 2 Comparison */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#FFFFFF", borderRadius: 16, padding: "12px 20px", border: "1px solid #EEEDEA", width: 340, textAlign: "left", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)" }}>
            <img
              src="/case-study/helps-5632.jpg"
              alt="Sample 2"
              style={{ width: 68, height: 68, objectFit: "cover", borderRadius: 10, border: "1px solid #EEEDEA" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#222222", textTransform: "uppercase", letterSpacing: "0.05em" }}>Artistic Design</div>
              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                <span style={{ fontSize: 11, background: "rgba(24, 95, 165, 0.05)", color: "#185FA5", padding: "2px 6px", borderRadius: 6, fontWeight: 800, border: "1px solid rgba(24, 95, 165, 0.15)" }}>
                  User A: 1.8
                </span>
                <span style={{ fontSize: 11, background: "rgba(29, 158, 117, 0.05)", color: "#1D9E75", padding: "2px 6px", borderRadius: 6, fontWeight: 800, border: "1px solid rgba(29, 158, 117, 0.15)" }}>
                  User B: 4.9
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
          borderTop: "1px solid #EEEDEA",
          paddingTop: 24,
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
                color: i === 0 ? "#1D9E75" : "#888888",
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
            color: "#222222",
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          Presenter: <span style={{ color: "#185FA5" }}>Pinwa</span>
        </span>
      </motion.div>
    </SlideShell>
  );
}
