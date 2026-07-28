import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function DatasetSampleSlide() {
  const emotions = [
    { name: "Nostalgic", value: 5 },
    { name: "Impressed", value: 4 },
    { name: "Motivated", value: 4 },
    { name: "Serene (Calm)", value: 4 },
    { name: "Intellectual", value: 3 },
    { name: "Amused", value: 2 },
    { name: "Melancholic (Sad)", value: 1 },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 2 — Dataset (XPASS-Vis)"
        title="What one rating "
        highlight="looks like"
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: Sample Image Card */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: 16,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Visual Input (Landscape Domain)
          </div>
          <img
            src="/case-study/pink_purple_landscape.jpg"
            alt="Sample Landscape Image"
            style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }}
          />
          <div style={{ fontSize: 12, color: "#6B5B6E", fontWeight: 600, textAlign: "center" }}>
            Image ID: 4102 (XPASS-Vis Dataset)
          </div>
        </motion.div>

        {/* Right Column: User Rating Details Card */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: "24px 28px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Header Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              User Evaluator Response
            </span>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>
              AESTHEMOS Framework (7 Core dimensions)
            </span>
          </div>

          {/* Aesthetic Score Row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(194, 24, 91, 0.04)", padding: "12px 20px", borderRadius: 14, border: "1px solid rgba(194, 24, 91, 0.1)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <span style={{ fontSize: 40, fontWeight: 950, color: "#C2185B", lineHeight: 1 }}>6</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#6B5B6E" }}>/ 7</span>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#4A1533" }}>Aesthetic Score</h4>
              <p style={{ margin: 0, fontSize: 11.5, color: "#6B5B6E", fontWeight: 600 }}>Subjective beauty score rated on a 7-point Likert scale</p>
            </div>
          </div>

          {/* 7 Emotions Progress Bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: "#4A1533" }}>7 Intermediate Emotions (Scale 1–5):</div>
            {emotions.map((emo) => (
              <div key={emo.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 130, fontSize: 12, fontWeight: 700, color: "#2B2230" }}>{emo.name}</span>
                {/* Bar */}
                <div style={{ flex: 1, height: 8, background: "#EEEDEA", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                  <div style={{ width: `${(emo.value / 5) * 100}%`, height: "100%", background: "linear-gradient(90deg, #7B2C8F, #C2185B)", borderRadius: 4 }} />
                </div>
                <span style={{ width: 12, fontSize: 12, fontWeight: 800, color: "#7B2C8F", textAlign: "right" }}>{emo.value}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 11.5, color: "#6B5B6E", fontWeight: 600, borderTop: "1px solid #EEEDEA", paddingTop: 10, marginTop: 4 }}>
            * each person gives a beauty score (1-7) and 7 emotion ratings (1-5) per image
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
