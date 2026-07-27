import { motion } from "framer-motion";
import { SlideHeader, SlideShell, Equation, Var, Sub, Sum } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function IdeaSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Our Approach"
        title="Predicting Scores "
        highlight="via Emotion Mediation."
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
        {/* Left: Explainable Concept and Formulas */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Conceptual Card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Emphasized Interpretable Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#626B74", textTransform: "uppercase", letterSpacing: "0.05em", background: "rgba(45, 49, 54, 0.03)", padding: "4px 10px", borderRadius: 8, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
                Key Paradigm
              </span>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", background: "#C24F71", padding: "4px 12px", borderRadius: 8, border: "1px solid rgba(45, 49, 54, 0.08)", boxShadow: "0 4px 12px rgba(194, 79, 113, 0.2)" }}>
                INTERPRETABLE
              </span>
            </div>

            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
              Emotion-Mediated PIAA
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              Instead of predicting preference directly, we predict a 7-dimensional emotion representation, which a user-specific linear equation maps to the final aesthetic score.
            </p>
          </motion.div>

          {/* Equation card */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 10px 30px rgba(194, 79, 113, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Linear Regression Weight Formula
            </div>
            <Equation size={22} color="#2D3136">
              <Var>Score</Var>(<Var>u</Var>, <Var>i</Var>) =
              <Var>w</Var><Sub><Var>0</Var></Sub> +
              <Sum from={<Var>e=1</Var>} to={<Var>7</Var>}>
                <Var>w</Var><Sub><Var>u,e</Var></Sub> &times; <Var>Emotion</Var><Sub><Var>e</Var></Sub>(<Var>i</Var>)
              </Sum>
            </Equation>
            <p style={{ margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.4 }}>
              where <Var>w</Var><Sub><Var>u,e</Var></Sub> represents the <strong>personalized emotional weight</strong> of user <Var>u</Var> for emotion <Var>e</Var> (e.g. nostalgic, sad, distasteful).
            </p>
          </motion.div>
        </div>

        {/* Right: Value Proposition */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 12px 40px rgba(45, 49, 54, 0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Core Advantages
          </div>

          {/* Point 1 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(194, 79, 113, 0.05)", display: "flex", alignItems: "center", justifyBox: "center", justifyContent: "center", color: "#C24F71", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(194, 79, 113, 0.15)" }}>
              ✓
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#2D3136" }}>
                100% Explainable &amp; <span style={{ color: "#C24F71" }}>Interpretable</span>
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#626B74", lineHeight: 1.45 }}>
                Since the final decision logic is a simple linear model, we can inspect and explain personalized taste directly without any black-box constraints.
              </p>
            </div>
          </div>

          <div style={{ width: "100%", height: 1, background: "rgba(45, 49, 54, 0.06)" }} />

          {/* Point 2 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(45, 49, 54, 0.03)", display: "flex", alignItems: "center", justifyBox: "center", justifyContent: "center", color: "#626B74", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              ?
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: "#2D3136" }}>Research Question Answered</h4>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#626B74", lineHeight: 1.45 }}>
                Allows the system to isolate whether individual disagreements stem from differing emotional perceptions or subjective weighting choices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
