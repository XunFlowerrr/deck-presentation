import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function ProblemSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="The Problem"
        title="Black-Box Models are "
        highlight="Uninterpretable."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Side: Current State vs Limits */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Card 1: Black box mapping */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.05em", background: "rgba(194, 79, 113, 0.05)", padding: "4px 10px", borderRadius: 8, alignSelf: "flex-start", border: "1px solid rgba(194, 79, 113, 0.15)" }}>
              Current PIAA Baseline
            </span>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
              Black-Box Personalization
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              Most models map <strong>User ID or User Traits alongside the image</strong> directly through complex neural networks to predict individual scores without explaining the underlying reasons.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, borderTop: "1px solid rgba(45, 49, 54, 0.08)", paddingTop: 12, marginTop: 4 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C24F71" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#C24F71" }}>
                Limitation: Cannot explain why a specific user likes an image.
              </span>
            </div>
          </motion.div>

          {/* Core limitation tagline */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 14,
              color: "#2D3136",
              fontWeight: 700,
              lineHeight: 1.5,
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
            }}
          >
            <strong style={{ color: "#C24F71" }}>Research Goal: </strong>
            We design an interpretable model to uncover the psychological and emotional drivers of personalized aesthetic taste.
          </motion.div>
        </div>

        {/* Right Side: Visual Black Box & Question Mark Diagram */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Diagram Header */}
          <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Conceptual Limitation of Baselines
          </div>

          {/* Box 1: Black Box Diagram */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FCFAF6", border: "1px solid rgba(45, 49, 54, 0.08)", padding: "16px 20px", borderRadius: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#626B74" }}>
              Input: User ID & Image
            </div>
            
            {/* The Black Box */}
            <div style={{ width: 100, height: 50, background: "#2D3136", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: 11, fontWeight: 800 }}>
              BLACK BOX
            </div>

            <div style={{ fontSize: 12, fontWeight: 800, color: "#C24F71", textAlign: "right" }}>
              Output: Score
            </div>
          </div>

          {/* Connector Arrow */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D3136" strokeWidth="2.0">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19,12 12,19 5,12" />
            </svg>
          </div>

          {/* Box 2: The Perception vs Weighting Dilemma */}
          <div style={{ display: "flex", gap: 16, background: "#FCFAF6", border: "1.5px dashed rgba(194, 79, 113, 0.4)", padding: "16px 20px", borderRadius: 16 }}>
            {/* Question Mark Circle */}
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C24F71", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, flexShrink: 0, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              ?
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136" }}>
                Unresolved Dilemma: Perception vs. Weighting
              </div>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: "#626B74", lineHeight: 1.45 }}>
                Do people disagree because they <strong>&ldquo;feel differently&rdquo;</strong> (Perception) or because they <strong>&ldquo;evaluate feelings differently&rdquo;</strong> (Weighting) in their decision making?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
