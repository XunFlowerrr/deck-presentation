import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

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
        {/* Left Column: Placebo description and controls */}
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

        {/* Right Column: Placebo comparison graph */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/three_tests_diagram.png"
            alt="Placebo control comparison plot"
            fallbackTitle="Placebo Controls Performance"
            fallbackSubtitle="Personalization gains drop when real emotion data is replaced by shuffles or noise"
            fallbackStats={[
              { label: "Ours (Real)", value: "0.380", color: "#C2185B" },
              { label: "Placebo (Noise)", value: "0.160", color: "#6B5B6E" },
              { label: "Difference", value: "+0.220", color: "#7B2C8F" },
            ]}
            style={{ border: "1px solid #EEEDEA", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)" }}
            maxHeight={360}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
