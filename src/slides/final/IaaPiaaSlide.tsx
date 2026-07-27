import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.06 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function IaaPiaaSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Introduction"
        title="Taste is "
        highlight="Personal."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: IAA (Generic) */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div style={{ alignSelf: "flex-start" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Standard Paradigm
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 800, color: "#4A1533" }}>
              IAA: Image Aesthetic Assessment
            </h3>
          </div>

          {/* IAA Concept Image & Single Rating */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="Consensus Image"
              style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, filter: "grayscale(100%)", opacity: 0.8 }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#EEEDEA", padding: "10px 24px", borderRadius: 12, border: "1px solid #EEEDEA" }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: "#4A1533" }}>3.5 / 5.0</span>
            </div>
            <span style={{ fontSize: 14, color: "#6B5B6E", fontWeight: 700 }}>
              &ldquo;One score for everyone&rdquo;
            </span>
          </div>
        </motion.div>

        {/* Right Column: PIAA (Personalized) */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(194, 24, 91, 0.15)",
            borderRadius: 20,
            padding: "28px",
            boxShadow: "0 10px 30px rgba(194, 24, 91, 0.03)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div style={{ alignSelf: "flex-start" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Personalized Paradigm
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 800, color: "#C2185B" }}>
              PIAA: Personalized Aesthetic Assessment
            </h3>
          </div>

          {/* PIAA Concept Image & Personalized Ratings */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="Personalized Image"
              style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12 }}
            />
            <div style={{ display: "flex", gap: 12, justifyContent: "center", width: "100%" }}>
              <div style={{ background: "rgba(123, 44, 143, 0.06)", border: "1px solid rgba(123, 44, 143, 0.2)", borderRadius: 10, padding: "6px 12px", textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>User A</div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#7B2C8F", marginTop: 2 }}>5.0 / 5.0</div>
              </div>
              <div style={{ background: "rgba(194, 24, 91, 0.06)", border: "1px solid rgba(194, 24, 91, 0.2)", borderRadius: 10, padding: "6px 12px", textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>User B</div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#C2185B", marginTop: 2 }}>4.0 / 5.0</div>
              </div>
              <div style={{ background: "rgba(74, 21, 51, 0.06)", border: "1px solid rgba(74, 21, 51, 0.2)", borderRadius: 10, padding: "6px 12px", textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>User C</div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#4A1533", marginTop: 2 }}>2.0 / 5.0</div>
              </div>
            </div>
            <span style={{ fontSize: 14, color: "#C2185B", fontWeight: 800 }}>
              &ldquo;How much do YOU like it?&rdquo;
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom use cases ribbon */}
      <motion.div
        {...fadeInUp(0.45)}
        style={{
          marginTop: 24,
          background: "#FCE4EC",
          border: "1px solid rgba(194, 24, 91, 0.15)",
          borderRadius: 12,
          padding: "10px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          fontSize: 14,
          fontWeight: 700,
          color: "#4A1533",
        }}
      >
        <span style={{ color: "#C2185B", fontWeight: 900 }}>Used in:</span>
        <span>Photo Applications</span>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6B5B6E" }} />
        <span>Recommendation Systems</span>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6B5B6E" }} />
        <span>Ranking AI-Generated Images</span>
      </motion.div>
    </SlideShell>
  );
}
