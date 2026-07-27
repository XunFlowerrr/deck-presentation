import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";
import { Var, Op } from "../../components/primitives/Equation.tsx";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function PlaceboSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Block 5 — Placebo Control"
        title="Validation: "
        highlight="Placebo Control is Random Noise."
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
        {/* Left Column: Original Placebo Description & Controls Table */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Mini comparison table */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 900, color: "#4A1533", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Control Experiment Results (CCC)
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {/* Ours Row */}
                <tr style={{ background: "rgba(194, 24, 91, 0.06)", border: "1px solid rgba(194, 24, 91, 0.2)", borderRadius: 10 }}>
                  <td style={{ padding: "12px 16px", fontSize: 15, fontWeight: 800, color: "#4A1533" }}>
                    Ours (Real Emotions)
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: 18, fontWeight: 900, color: "#C2185B", textAlign: "right" }}>
                    0.380
                  </td>
                </tr>
                {/* Space between rows */}
                <tr style={{ height: 10 }}></tr>
                {/* Placebo Row */}
                <tr style={{ background: "rgba(107, 91, 110, 0.06)", border: "1px dashed rgba(107, 91, 110, 0.2)", borderRadius: 10 }}>
                  <td style={{ padding: "12px 16px", fontSize: 15, fontWeight: 700, color: "#6B5B6E" }}>
                    Placebo (Random Noise / PCA)
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: 18, fontWeight: 900, color: "#6B5B6E", textAlign: "right" }}>
                    0.160
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Caption */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(123, 44, 143, 0.15)",
              borderRadius: 16,
              padding: "16px 24px",
              fontSize: 16,
              color: "#4A1533",
              lineHeight: 1.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(123, 44, 143, 0.02)",
            }}
          >
            Ours: 0.380, Placebo: 0.160. Emotion semantics are real.
          </motion.div>
        </div>

        {/* Right Column: Native React Component for 3 Tests placed in the exact image bounding area with horizontal margin */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            padding: "0 12px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ borderBottom: "2px solid #7B2C8F", paddingBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Mechanism Verification
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Three tests &mdash; do they point to &ldquo;ceiling&rdquo; or &ldquo;different mechanism&rdquo;?
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Test 1 */}
              <div
                style={{
                  background: "rgba(194, 24, 91, 0.03)",
                  border: "1px solid rgba(194, 24, 91, 0.18)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 800, color: "#4A1533" }}>
                    1. Partial correlation &mdash; control for Direct strength
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 900, color: "#FFFFFF", background: "#C2185B", padding: "2px 8px", borderRadius: 6 }}>
                    leans ceiling
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#6B5B6E", lineHeight: 1.35 }}>
                  If it&apos;s a ceiling, art&apos;s correlation should recover once baseline strength is removed.
                </p>
                <div
                  style={{
                    fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#4A1533",
                    background: "#FFFFFF",
                    border: "1px solid rgba(194,24,91,0.15)",
                    borderRadius: 8,
                    padding: "5px 10px",
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
                  <span style={{ color: "#6B5B6E", fontSize: 12.5 }}>&middot; <Var>p</Var> = 0.048</span>
                </div>
              </div>

              {/* Test 2 */}
              <div
                style={{
                  background: "rgba(123, 44, 143, 0.03)",
                  border: "1px solid rgba(123, 44, 143, 0.18)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 800, color: "#4A1533" }}>
                    2. Spread of the gain within each category (SD)
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 900, color: "#FFFFFF", background: "#7B2C8F", padding: "2px 8px", borderRadius: 6 }}>
                    weak / borderline
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#6B5B6E", lineHeight: 1.35 }}>
                  If art is capped, its gain should vary the least &mdash; lowest spread.
                </p>
                <div
                  style={{
                    fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#4A1533",
                    background: "#FFFFFF",
                    border: "1px solid rgba(123,44,143,0.15)",
                    borderRadius: 8,
                    padding: "5px 10px",
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>art <Op>SD</Op> =</span>
                  <span style={{ color: "#7B2C8F", fontWeight: 800 }}>0.054</span>
                  <span style={{ color: "#6B5B6E", fontSize: 12.5 }}>(lowest)</span>
                  <span style={{ color: "#6B5B6E", fontSize: 12.5 }}>&middot; Levene <Var>p</Var> = 0.21</span>
                </div>
              </div>

              {/* Test 3 */}
              <div
                style={{
                  background: "rgba(107, 91, 110, 0.03)",
                  border: "1px solid rgba(107, 91, 110, 0.18)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 800, color: "#4A1533" }}>
                    3. Interaction test &mdash; is the <Var>emo_r</Var>&rarr;gain slope different in art?
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 900, color: "#FFFFFF", background: "#6B5B6E", padding: "2px 8px", borderRadius: 6 }}>
                    no evidence for H2
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#6B5B6E", lineHeight: 1.35 }}>
                  If art had a different mechanism, this would show up clearly.
                </p>
                <div
                  style={{
                    fontFamily: '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, serif',
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#4A1533",
                    background: "#FFFFFF",
                    border: "1px solid rgba(107,91,110,0.15)",
                    borderRadius: 8,
                    padding: "5px 10px",
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#6B5B6E" }}><Var>p</Var> =</span>
                  <span style={{ color: "#4A1533", fontWeight: 800 }}>0.056</span>
                  <span style={{ color: "#6B5B6E", fontSize: 12.5 }}>(not significant)</span>
                </div>
              </div>
            </div>

            {/* Bottom summary ribbon */}
            <div
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
              <span style={{ fontSize: 12, fontWeight: 800, color: "#4A1533" }}>
                All three lean toward &ldquo;ceiling&rdquo; &mdash; but every number sits on the 0.05 border
              </span>
              <span style={{ fontSize: 11, fontWeight: 500, color: "#6B5B6E", fontStyle: "italic" }}>
                So: no evidence art works differently &mdash; not proof they&apos;re the same
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
