import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function CaseStudyWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — Case Study"
        title="Qualitative "
        highlight="Interpretability."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {/* 2 Column Comparison: Helped vs Hurt */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          {/* Column 1: EMOTION HELPED */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 8px 30px rgba(16, 185, 129, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#10B981",
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "4px 14px",
                  borderRadius: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Emotion Helped (+1.45 CCC)
              </span>
              <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>Peaked Signal</span>
            </div>

            {/* Score Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Ground Truth</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#111827" }}>5.00</div>
              </div>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Direct Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#6B7280" }}>3.57</div>
              </div>
              <div style={{ background: "rgba(16, 185, 129, 0.08)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#065F46", fontWeight: 700 }}>Hybrid Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#10B981" }}>5.02</div>
              </div>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                Vivid Emotion Profile (Spread SD = 1.35)
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.45 }}>
                Image evokes clear, peaked emotions (e.g. strong Amusement & Awe). The intermediate emotion layer captures distinct signals that drive accurate personalized scoring.
              </p>
            </div>
          </motion.div>

          {/* Column 2: EMOTION HURT */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 8px 30px rgba(239, 68, 68, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#EF4444",
                  background: "rgba(239, 68, 68, 0.1)",
                  padding: "4px 14px",
                  borderRadius: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Emotion Hurt (-0.66 CCC)
              </span>
              <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>Flat Signal</span>
            </div>

            {/* Score Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Ground Truth</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#111827" }}>5.00</div>
              </div>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Direct Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#6B7280" }}>2.23</div>
              </div>
              <div style={{ background: "rgba(239, 68, 68, 0.08)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#991B1B", fontWeight: 700 }}>Hybrid Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#EF4444" }}>1.57</div>
              </div>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                Flat Emotion Profile (Spread SD = 0.64)
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.45 }}>
                Image evokes ambiguous or flat emotions across all 7 categories. When there is no clear emotional response to detect, routing through emotion layer injects unnecessary noise.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Takeaway */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            background: "#F9FAFB",
            border: "1px solid #F3F4F6",
            borderRadius: 14,
            padding: "14px 20px",
            fontSize: 14,
            color: "#374151",
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#7C3AED" }}>Mechanistic Takeaway: </strong>
          Emotion mediation helps when emotional response is peaked and vivid, and adds noise when emotional response is flat or ambiguous.
        </motion.div>
      </div>

      {/* Small definition box at bottom right */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Illustrative case study (3 images per group from exp3_case_images.csv)
      </motion.div>
    </SlideShell>
  );
}
