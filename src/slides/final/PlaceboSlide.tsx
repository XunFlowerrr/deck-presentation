import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";
import { Var, Op, Sub } from "../../components/primitives/Equation.tsx";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function PlaceboSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 5 — Placebo Control & Mechanism Tests"
        title="Validation: "
        highlight="Placebo Controls & Ceiling Verification."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {/* Left Column: Placebo Experiment Control Results */}
        <motion.div
          {...cardRise(0.12)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ borderBottom: "2px solid #C2185B", paddingBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Control Experiment
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 800, color: "#4A1533" }}>
              Real vs. Placebo Noise
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Ours (Real Emotions) */}
            <div
              style={{
                background: "rgba(194,24,91,0.05)",
                border: "1.5px solid rgba(194,24,91,0.2)",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>
                  Ours (Real Emotions)
                </span>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#C2185B" }}>
                  0.380
                </span>
              </div>
              <div style={{ width: "100%", height: 8, background: "rgba(194,24,91,0.15)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "#C2185B", borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 12, color: "#6B5B6E", fontWeight: 500 }}>
                Lin&apos;s <Op>CCC</Op> using genuine 7 emotion predictions
              </span>
            </div>

            {/* Placebo Noise */}
            <div
              style={{
                background: "rgba(107,91,110,0.05)",
                border: "1.5px dashed rgba(107,91,110,0.25)",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>
                  Placebo (Shuffled / Noise)
                </span>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#6B5B6E" }}>
                  0.160
                </span>
              </div>
              <div style={{ width: "100%", height: 8, background: "rgba(107,91,110,0.15)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "42%", height: "100%", background: "#6B5B6E", borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 12, color: "#6B5B6E", fontWeight: 500 }}>
                Performance drops significantly when emotions are randomized
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              background: "rgba(123,44,143,0.05)",
              border: "1px solid rgba(123,44,143,0.15)",
              borderRadius: 14,
              padding: "14px 16px",
              fontSize: 13.5,
              color: "#4A1533",
              lineHeight: 1.45,
              fontWeight: 700,
            }}
          >
            Gain is <span style={{ color: "#C2185B" }}>+0.220 CCC</span> above placebo noise — confirming genuine emotional semantics.
          </div>
        </motion.div>

        {/* Right Column: Native React Component for the 3 Statistical Tests */}
        <motion.div
          {...cardRise(0.22)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ borderBottom: "2px solid #7B2C8F", paddingBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Mechanism Verification
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 19, fontWeight: 800, color: "#4A1533" }}>
              Three Tests — Ceiling or Different Mechanism?
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            {/* Test 1: Partial Correlation */}
            <div
              style={{
                background: "rgba(194, 24, 91, 0.03)",
                border: "1px solid rgba(194, 24, 91, 0.18)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>
                  1. Partial Correlation — Control for Direct Strength
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: "#C2185B",
                    padding: "2px 8px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  leans ceiling
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: "#6B5B6E", lineHeight: 1.35, fontWeight: 500 }}>
                If it&apos;s a ceiling, art&apos;s correlation should recover once baseline strength is removed.
              </p>
              {/* Equation renderer formula */}
              <div
                style={{
                  fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#4A1533",
                  background: "#FFFFFF",
                  border: "1px solid rgba(194,24,91,0.15)",
                  borderRadius: 8,
                  padding: "6px 12px",
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>art:</span>
                <span style={{ color: "#6B5B6E" }}>+0.13 <Var>(ns)</Var></span>
                <span style={{ color: "#C2185B" }}>&rarr;</span>
                <span style={{ color: "#C2185B", fontWeight: 800 }}>+0.18</span>
                <span style={{ color: "#6B5B6E", fontSize: 13 }}>&middot; <Var>p</Var> = 0.048</span>
              </div>
            </div>

            {/* Test 2: Spread of the Gain (SD) */}
            <div
              style={{
                background: "rgba(123, 44, 143, 0.03)",
                border: "1px solid rgba(123, 44, 143, 0.18)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>
                  2. Spread of Gain within Category (SD)
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: "#7B2C8F",
                    padding: "2px 8px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  weak / borderline
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: "#6B5B6E", lineHeight: 1.35, fontWeight: 500 }}>
                If art is capped, its gain should vary the least — lowest spread.
              </p>
              {/* Equation renderer formula */}
              <div
                style={{
                  fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#4A1533",
                  background: "#FFFFFF",
                  border: "1px solid rgba(123,44,143,0.15)",
                  borderRadius: 8,
                  padding: "6px 12px",
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>art <Op>SD</Op> =</span>
                <span style={{ color: "#7B2C8F", fontWeight: 800 }}>0.054</span>
                <span style={{ color: "#6B5B6E", fontSize: 13 }}>(lowest)</span>
                <span style={{ color: "#6B5B6E", fontSize: 13 }}>&middot; Levene <Var>p</Var> = 0.21</span>
              </div>
            </div>

            {/* Test 3: Interaction Test */}
            <div
              style={{
                background: "rgba(107, 91, 110, 0.03)",
                border: "1px solid rgba(107, 91, 110, 0.18)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>
                  3. Interaction Test — <Var>emo_r</Var> vs. Gain Slope
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    background: "#6B5B6E",
                    padding: "2px 8px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  no evidence for H2
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: "#6B5B6E", lineHeight: 1.35, fontWeight: 500 }}>
                If art had a different mechanism, this would show up clearly in slope interaction.
              </p>
              {/* Equation renderer formula */}
              <div
                style={{
                  fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#4A1533",
                  background: "#FFFFFF",
                  border: "1px solid rgba(107,91,110,0.15)",
                  borderRadius: 8,
                  padding: "6px 12px",
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#6B5B6E" }}><Var>p</Var> =</span>
                <span style={{ color: "#4A1533", fontWeight: 800 }}>0.056</span>
                <span style={{ color: "#6B5B6E", fontSize: 13 }}>(not significant)</span>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FAFAFA",
              border: "1px solid #EEEDEA",
              borderRadius: 12,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <span style={{ fontSize: 12.5, fontWeight: 800, color: "#4A1533" }}>
              All three lean toward &ldquo;ceiling&rdquo; &mdash; but every number sits on the 0.05 border
            </span>
            <span style={{ fontSize: 11.5, fontWeight: 500, color: "#6B5B6E", fontStyle: "italic" }}>
              So: no evidence art works differently &mdash; not proof they are the same
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
