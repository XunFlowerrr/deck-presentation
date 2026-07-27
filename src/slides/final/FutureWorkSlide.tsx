import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function FutureWorkSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Outro"
        title="Future Work & "
        highlight="Thank You."
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
        {/* Left Column: Future work items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Research Bottleneck
            </span>
            <h3 style={{ margin: "4px 0 8px", fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
              1. Improving Stage-1 Emotion Predictor
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              The main bottleneck is Stage-1 emotion prediction accuracy. Improving the backbone predictor is the clearest path to unlocking the full potential of this approach.
            </p>
          </motion.div>

          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(194, 79, 113, 0.03)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900, color: "#2D3136", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Generalization
            </span>
            <h3 style={{ margin: "4px 0 8px", fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
              2. Cross-Dataset Validation
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              Evaluating this emotion-mediated PIAA framework across external datasets (Cross-Dataset Validation) to verify its generalization capabilities for commercial deployments.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Thank You Page */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 40,
            boxShadow: "0 12px 40px rgba(194, 79, 113, 0.04)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            minHeight: 380,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#C24F71",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(194, 79, 113, 0.2)",
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: 900,
              border: "1.5px solid rgba(45, 49, 54, 0.08)",
            }}
          >
            !
          </div>

          <div>
            <h2 style={{ margin: 0, fontSize: 38, fontWeight: 955, color: "#2D3136" }}>
              Thank You
            </h2>
            <p style={{ margin: "8px 0 0", fontSize: 16, color: "#626B74", fontWeight: 750 }}>
              Thank you very much for your time and attention.
            </p>
          </div>

          <div style={{ width: "100%", height: 1, background: "rgba(45, 49, 54, 0.12)" }} />

          <div>
            <span style={{ fontSize: 13, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Questions &amp; Answers
            </span>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "#2D3136", fontWeight: 700 }}>
              I am happy to take any questions and feedback.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
