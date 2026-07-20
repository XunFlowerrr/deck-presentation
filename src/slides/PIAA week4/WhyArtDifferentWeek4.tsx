import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function WhyArtDifferentWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — the odd one out"
        title="Why is art "
        highlight="different?"
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left column: Domain correlations & Hypotheses */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Domain correlations table */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              emo_r → Delta Gain Correlation by Domain
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 17 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "rgba(16, 185, 129, 0.06)", borderRadius: 10 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>Fashion</span>
                <span style={{ fontWeight: 800, color: "#10B981" }}>r = +0.38 ✓ (significant)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "rgba(16, 185, 129, 0.06)", borderRadius: 10 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>Landscape</span>
                <span style={{ fontWeight: 800, color: "#10B981" }}>r = +0.34 ✓ (significant)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "rgba(239, 68, 68, 0.06)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: 10 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>Art</span>
                <span style={{ fontWeight: 800, color: "#EF4444" }}>r = +0.14 ✗ (not significant, p = 0.11)</span>
              </div>
            </div>
          </motion.div>

          {/* 2 Competing Explanations */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <motion.div
              {...cardRise(0.3)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>H1: Ceiling Effect</span>
              <p style={{ margin: 0, fontSize: 16, color: "#4B5563", lineHeight: 1.5 }}>
                Art Direct baseline is already high (<strong>0.384</strong> vs fashion <strong>0.202</strong>). Less headroom → delta varies less → correlation harder to detect statistically.
              </p>
            </motion.div>

            <motion.div
              {...cardRise(0.4)}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(236, 72, 153, 0.25)",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: "#EC4899", textTransform: "uppercase" }}>H2: Different Mechanism</span>
              <p style={{ margin: 0, fontSize: 16, color: "#4B5563", lineHeight: 1.5 }}>
                Aesthetic judgments in artistic works stem from non-emotional features like technique, composition, or historical context rather than emotions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emo_r_by_domain.png"
            alt="Correlation between emo_r and Delta by Domain"
            fallbackTitle="emo_r vs Delta Gain across 3 Domains"
            fallbackSubtitle="Fashion & Landscape show strong positive trends; Art shows flatter relationship"
            fallbackStats={[
              { label: "Fashion r", value: "+0.38 (p<0.001)", color: "#10B981" },
              { label: "Landscape r", value: "+0.34 (p<0.001)", color: "#10B981" },
              { label: "Art r", value: "+0.14 (p=0.11 ns)", color: "#EF4444" },
            ]}
            maxHeight={460}
          />
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
          fontSize: 13,
          color: "#6B7280",
        }}
      >
        Domain split: Fashion (129 users), Landscape (129 users), Art (129 users)
      </motion.div>
    </SlideShell>
  );
}
