import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function IaaPiaaSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Introduction"
        title="What is "
        highlight="IAA vs PIAA?"
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: Conceptual Breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* IAA Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#626B74", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Standard Paradigm
            </span>
            <h3 style={{ margin: "4px 0 8px", fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
              IAA: Image Aesthetic Assessment
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              Evaluates <strong>&ldquo;how beautiful is this image?&rdquo;</strong> by predicting a single consensus score representing the average population preference, ignoring individual taste variations.
            </p>
          </motion.div>

          {/* PIAA Card */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Personalized Paradigm
            </span>
            <h3 style={{ margin: "4px 0 8px", fontSize: 20, fontWeight: 900, color: "#C24F71" }}>
              PIAA: Personalized Aesthetic Assessment
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              Evaluates <strong>&ldquo;how much will this specific person like this image?&rdquo;</strong> by incorporating individual personalization to capture subjective and diverse aesthetic judgments.
            </p>
          </motion.div>

          {/* Use cases card */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#FFFFFF",
              borderRadius: 14,
              padding: "16px 20px",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", marginBottom: 8 }}>
              Real-world Applications
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Recommendation Systems", "Photo Curation", "AI Image Ranking"].map((app) => (
                <span
                  key={app}
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    background: "#FCFAF6",
                    border: "1px solid rgba(45, 49, 54, 0.08)",
                    padding: "4px 10px",
                    borderRadius: 8,
                    color: "#2D3136",
                  }}
                >
                  {app}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image Demonstration */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <PlotImage
            src="/src/assets/images/general/piaa_sample.png"
            alt="IAA vs PIAA ratings sample"
            fallbackTitle="PIAA Disagreement Demonstration"
            fallbackSubtitle="Single image rated differently by three distinct individuals"
            fallbackStats={[
              { label: "User A Score", value: "5.4 / 6.0", color: "#C24F71" },
              { label: "User B Score", value: "3.2 / 6.0", color: "#2D3136" },
              { label: "User C Score", value: "1.5 / 6.0", color: "#626B74" },
            ]}
            style={{ border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)" }}
            maxHeight={440}
          />
          <span style={{ fontSize: 13, color: "#626B74", fontWeight: 700, textAlign: "center" }}>
            Figure: Single image receives divergent ratings based on individual aesthetic styles
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
