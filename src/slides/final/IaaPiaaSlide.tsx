import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function IaaPiaaSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Introduction"
        title="From average taste "
        highlight="to personal taste."
        accentWidth={120}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr 0.95fr",
          gap: 20,
          alignItems: "stretch",
          padding: "16px 0",
        }}
      >
        {/* Block 1: IAA */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "100%", textAlign: "left" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Generic Model
            </span>
            <h4 style={{ margin: "2px 0 0", fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
              Image Aesthetic Assessment
            </h4>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", margin: "16px 0" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="IAA Landscape"
              style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 8, filter: "grayscale(80%)", opacity: 0.7 }}
            />
            <div style={{ background: "#FDFCFD", border: "1px solid #EEEDEA", padding: "6px 20px", borderRadius: 10, fontSize: 20, fontWeight: 900, color: "#6B5B6E" }}>
              3.5 / 7.0
            </div>
          </div>

          <span style={{ fontSize: 13, color: "#6B5B6E", fontWeight: 700 }}>
            IAA: one score, the average opinion
          </span>
        </motion.div>

        {/* Block 2: PIAA */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FCE4EC", // Soft Pink Background
            border: "1px solid rgba(194, 24, 91, 0.2)",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 6px 24px rgba(194, 24, 91, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "100%", textAlign: "left" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Personalized Model
            </span>
            <h4 style={{ margin: "2px 0 0", fontSize: 18, fontWeight: 800, color: "#C2185B" }}>
              Personal Taste (PIAA)
            </h4>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", margin: "16px 0" }}>
            <img
              src="/case-study/helps-3099.jpg"
              alt="PIAA Landscape"
              style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 8 }}
            />
            <div style={{ display: "flex", gap: 6, width: "100%" }}>
              {[
                { u: "User A", s: "2.0" },
                { u: "User B", s: "5.0" },
                { u: "User C", s: "6.0" },
              ].map((item, idx) => (
                <div key={idx} style={{ background: "#FFFFFF", border: "1px solid rgba(194, 24, 91, 0.1)", borderRadius: 8, padding: "4px 8px", flex: 1 }}>
                  <div style={{ fontSize: 9, color: "#6B5B6E", fontWeight: 700 }}>{item.u}</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", marginTop: 2 }}>{item.s}/7</div>
                </div>
              ))}
            </div>
          </div>

          <span style={{ fontSize: 13, color: "#C2185B", fontWeight: 800 }}>
            PIAA: how much does THIS person like it?
          </span>
        </motion.div>

        {/* Block 3: The Problem (Black Box) */}
        <motion.div
          {...cardRise(0.35)}
          style={{
            background: "#2B2230", // Dark plum-black box
            border: "1px solid #3D3343",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          <div style={{ width: "100%", textAlign: "left" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              The Challenge
            </span>
            <h4 style={{ margin: "2px 0 0", fontSize: 18, fontWeight: 800, color: "#FDFCFD" }}>
              Black-Box Paradigm
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "12px 0",
              position: "relative",
              width: "100%",
            }}
          >
            {/* Diagram representation */}
            <div style={{ fontSize: 12, color: "#6B5B6E", fontFamily: "monospace", display: "flex", flexDirection: "column", gap: 6 }}>
              <span>User ID</span>
              <span style={{ color: "#9E9E9E" }}>&darr;</span>
              <div style={{ border: "1px solid #3D3343", background: "#1F1823", padding: "6px 12px", borderRadius: 6, fontSize: 11, color: "#9E9E9E", fontWeight: 700 }}>
                Black-Box model
              </div>
              <span style={{ color: "#9E9E9E" }}>&darr;</span>
              <span>Predicted Score</span>
            </div>

            {/* Giant Pink Question Mark */}
            <div
              style={{
                position: "absolute",
                fontSize: 72,
                fontWeight: 900,
                color: "#C2185B",
                opacity: 0.95,
                textShadow: "0 0 15px rgba(194, 24, 91, 0.4)",
                pointerEvents: "none",
              }}
            >
              ?
            </div>
          </div>

          <span style={{ fontSize: 13, color: "#FCE4EC", fontWeight: 700 }}>
            accurate, but cannot explain WHY
          </span>
        </motion.div>
      </div>

      {/* Bottom use cases strip */}
      <motion.div
        {...fadeInUp(0.45)}
        style={{
          background: "#FDFCFD",
          border: "1px solid #EEEDEA",
          borderRadius: 12,
          padding: "10px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          fontSize: 14.5,
          fontWeight: 700,
          color: "#6B5B6E",
        }}
      >
        <span style={{ color: "#C2185B", fontWeight: 900 }}>Applications:</span>
        <span>Photo Recommendation</span>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C2185B" }} />
        <span>Album Curation</span>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C2185B" }} />
        <span>Ranking AI-Generated Images</span>
      </motion.div>
    </SlideShell>
  );
}
IaaPiaaSlide.slideId = "IaaPiaa";
