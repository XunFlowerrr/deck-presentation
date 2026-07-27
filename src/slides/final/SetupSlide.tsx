import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function SetupSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Setup"
        title="Evaluation Setup: "
        highlight="Metrics & Baselines."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {/* Left Column: Evaluation Metrics */}
        <motion.div
          {...cardRise(0.12)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ borderBottom: "2px solid #C2185B", paddingBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Evaluation Metrics
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 21, fontWeight: 800, color: "#4A1533" }}>
              How We Measure Performance
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, justifyContent: "flex-start" }}>
            {/* CCC Metric */}
            <div
              style={{
                background: "rgba(194,24,91,0.04)",
                border: "1px solid rgba(194,24,91,0.18)",
                borderRadius: 16,
                padding: "18px 20px",
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#C2185B",
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 900,
                  padding: "10px 14px",
                  borderRadius: 12,
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(194,24,91,0.2)",
                  letterSpacing: "0.04em",
                }}
              >
                CCC
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                  Concordance Correlation Coefficient
                </h4>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 500 }}>
                  Measures agreement between predicted preference scores and real human ratings — accounting for scale &amp; bias.
                </p>
              </div>
            </div>

            {/* SROCC Metric */}
            <div
              style={{
                background: "rgba(123,44,143,0.04)",
                border: "1px solid rgba(123,44,143,0.18)",
                borderRadius: 16,
                padding: "18px 20px",
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#7B2C8F",
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 900,
                  padding: "10px 12px",
                  borderRadius: 12,
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(123,44,143,0.2)",
                  letterSpacing: "0.04em",
                }}
              >
                SROCC
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>
                  Spearman Rank Correlation
                </h4>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 500 }}>
                  Measures monotonic rank ordering of preferences — evaluating relative taste consistency across photos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Direct vs Hybrid with Visual Structural Contrast */}
        <motion.div
          {...cardRise(0.22)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ borderBottom: "2px solid #7B2C8F", paddingBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Two Compared Pathways
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 21, fontWeight: 800, color: "#4A1533" }}>
              Direct vs. Hybrid
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
            {/* Hybrid (Ours) — 3-step Emotion Mediated Flow with vibrant colors */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(194,24,91,0.06), rgba(123,44,143,0.04))",
                border: "2px solid #C2185B",
                borderRadius: 16,
                padding: "20px 20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: "0 6px 20px rgba(194,24,91,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 17, fontWeight: 900, color: "#C2185B" }}>Hybrid Pathway</span>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: "linear-gradient(90deg, #C2185B, #7B2C8F)",
                    padding: "3px 10px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    boxShadow: "0 2px 6px rgba(194,24,91,0.2)",
                  }}
                >
                  Ours (Emotion-Mediated)
                </span>
              </div>

              {/* Hybrid 3-Step Flow SVG Diagram */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#FFFFFF",
                  borderRadius: 12,
                  padding: "12px 14px",
                  border: "1px solid rgba(194,24,91,0.15)",
                }}
              >
                {/* Photo Node */}
                <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(74,21,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A1533" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#4A1533" }}>Photo</span>
                </div>

                {/* Arrow 1 */}
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" style={{ flexShrink: 0 }}>
                  <line x1="0" y1="6" x2="16" y2="6" stroke="#C2185B" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="16,2 22,6 16,10" fill="#C2185B" />
                </svg>

                {/* 7 Emotions Node (Highlighted Step) */}
                <div style={{ display: "flex", flex: 1.3, flexDirection: "column", alignItems: "center", gap: 4, background: "rgba(194,24,91,0.08)", padding: "6px 8px", borderRadius: 10, border: "1.5px solid rgba(194,24,91,0.3)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 8px rgba(194,24,91,0.25)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B" }}>7 Emotions</span>
                </div>

                {/* Arrow 2 */}
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" style={{ flexShrink: 0 }}>
                  <line x1="0" y1="6" x2="16" y2="6" stroke="#7B2C8F" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="16,2 22,6 16,10" fill="#7B2C8F" />
                </svg>

                {/* Preference Score Node */}
                <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(123,44,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#7B2C8F" stroke="#7B2C8F" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#7B2C8F" }}>Score</span>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 13, color: "#4A1533", lineHeight: 1.45, fontWeight: 600 }}>
                Explains preference via 7 emotion dimensions — fits a transparent 7-weight formula per user.
              </p>
            </div>

            {/* Direct (Baseline) — 2-step Shortcut Flow with neutral grey style */}
            <div
              style={{
                background: "#FAFAFA",
                border: "1.5px dashed #D6D5D2",
                borderRadius: 16,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#716B75" }}>Direct Pathway</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#716B75",
                    background: "#EEEDEA",
                    padding: "2px 8px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Baseline (Skips Emotion)
                </span>
              </div>

              {/* Direct 2-Step Bypass SVG Diagram */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#FFFFFF",
                  borderRadius: 12,
                  padding: "10px 20px",
                  border: "1px solid #EEEDEA",
                }}
              >
                {/* Photo Node */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 6, background: "#F3F2F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#716B75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#716B75" }}>Photo</span>
                </div>

                {/* Direct Long Bypass Line */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", margin: "0 16px" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#A09BA4", marginBottom: 2 }}>
                    Direct VLM Features
                  </span>
                  <svg width="100%" height="12" viewBox="0 0 120 12" fill="none" preserveAspectRatio="none">
                    <line x1="0" y1="6" x2="110" y2="6" stroke="#A09BA4" strokeWidth="2" strokeDasharray="4 3" />
                    <polygon points="108,2 118,6 108,10" fill="#A09BA4" />
                  </svg>
                </div>

                {/* Score Node */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 6, background: "#F3F2F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#716B75" stroke="#716B75" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#716B75" }}>Score</span>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 12.5, color: "#716B75", lineHeight: 1.4, fontWeight: 500 }}>
                Maps VLM features directly to score — black box model, skipping emotion mediation entirely.
              </p>
            </div>
          </div>

          {/* Footnote */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: "#7B2C8F",
              fontStyle: "italic",
              textAlign: "center",
              borderTop: "1px solid #EEEDEA",
              paddingTop: 10,
            }}
          >
            &ldquo;We keep comparing Direct and Hybrid the whole time.&rdquo;
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
