import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";
import { rq3DataFlowImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
];

export function RQ3Setup() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="RQ3: Psychological Grounding"
        title="RQ3 — How we tested it"
        highlight="Pipeline & Design."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0, paddingBottom: 20 }}>
        
        {/* Left Column: Full Pipeline Diagram */}
        <motion.div
          {...fadeIn(0.25)}
          style={{
            flex: 1.2,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: 0,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Pipeline Setup
          </div>
          <div
            style={{
              width: "100%",
              flex: 1,
              borderRadius: "16px",
              border: "1px solid #F3F4F6",
              background: "#FAFAFA",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 0,
            }}
          >
            <img
              src={rq3DataFlowImg}
              alt="RQ3 Full Pipeline Diagram"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: Setup Details */}
        <motion.div
          {...fadeIn(0.35)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {/* Card 1: Ridge Regression */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              background: "rgba(124, 58, 237, 0.02)",
              border: "1px solid rgba(124, 58, 237, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#7C3AED", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#7C3AED", color: "white", padding: "2px 8px", borderRadius: "6px" }}>1</span>
              Fit a personal formula per user per domain
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.55, margin: 0 }}>
              Used real emotion scores, not predicted ones, plus beauty scores as input.
              <br />
              Ridge Regression produces <strong>7 weight numbers</strong> per person (e.g. nostalgic_w = 0.12).
              <br />
              Done for Art, Fashion, and Landscape, then averaged to 1 formula per user.
            </p>
          </motion.div>

          {/* Card 2: TIPI / Big Five Traits */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              background: "rgba(59, 130, 246, 0.02)",
              border: "1px solid rgba(59, 130, 246, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#3B82F6", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#3B82F6", color: "white", padding: "2px 8px", borderRadius: "6px" }}>2</span>
              Calculate Big Five personality scores
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.55, margin: 0 }}>
              XPASS-Vis already has TIPI survey answers for all 129 users.
              <br />
              Applied the standard Gosling et al. 2003 formula to get 5 trait scores per person.
            </p>
          </motion.div>

          {/* Card 3: Spearman Correlation */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "rgba(16, 185, 129, 0.02)",
              border: "1px solid rgba(16, 185, 129, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#10B981", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#10B981", color: "white", padding: "2px 8px", borderRadius: "6px" }}>3</span>
              Measure correlation between formula and personality
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.55, margin: 0 }}>
              Use Spearman rank correlation for every emotion weight × every trait.
              <br />
              7 emotions × 5 traits = <strong>35 pairs tested</strong>.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </SlideShell>
  );
}
