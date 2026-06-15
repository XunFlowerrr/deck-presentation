import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";
import { iciArchitectureImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "239, 68, 68", opacity: 0.1 },
  { bottom: -200, left: -100, size: 600, color: "124, 58, 237", opacity: 0.12 },
];

export function IciArchitecture() {
  const comparison = [
    {
      feature: "Input",
      ici: "Image + image attributes (45-dim) + user attributes (114-dim)",
      ours: "Image only",
    },
    {
      feature: "Core Module",
      ici: "Graph Neural Network",
      ours: "CLIP + Ridge Regression",
    },
    {
      feature: "Personalization",
      ici: "Fine-tune entire GNN network per user (needs 100 images)",
      ours: "Fit a simple 9-number formula per user",
    },
    {
      feature: "Output",
      ici: "Score (black box)",
      ours: "Score + readable emotion weights (explainable)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Related Work Context"
        title="Baseline: The ICI"
        highlight="Architecture."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0 }}>
        
        {/* Left Column: Architecture Diagram */}
        <motion.div
          {...fadeIn(0.2)}
          style={{
            flex: 1.4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "24px",
            padding: "12px",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src={iciArchitectureImg}
            alt="ICI Architecture Diagram"
            style={{
              maxWidth: "100%",
              maxHeight: "480px",
              objectFit: "contain",
              display: "block",
            }}
          />
          <div style={{ fontSize: 16, color: "#6B7280", marginTop: 12, fontStyle: "italic", textAlign: "center" }}>
            ICI model flow: graph neural network mapping image embeddings, visual features, and user metrics.
          </div>
        </motion.div>

        {/* Right Column: Comparison Table */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h3 style={{ fontSize: 26, fontWeight: 900, color: "#111827", margin: 0 }}>
            ICI vs. Our Proposed Approach
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "12px 16px", fontSize: 16, fontWeight: 800, color: "#6B7280", width: "25%" }}>Feature</th>
                <th style={{ padding: "12px 16px", fontSize: 16, fontWeight: 800, color: "#EF4444", width: "40%" }}>ICI Baseline</th>
                <th style={{ padding: "12px 16px", fontSize: 16, fontWeight: 800, color: "#7C3AED", width: "35%" }}>Our Approach</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={row.feature} style={{ borderBottom: idx === comparison.length - 1 ? "none" : "1px solid #F3F4F6" }}>
                  <td style={{ padding: "16px", fontSize: 16, fontWeight: 800, color: "#111827", verticalAlign: "top" }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: "16px", fontSize: 16, color: "#4B5563", lineHeight: 1.4, verticalAlign: "top" }}>
                    {row.ici}
                  </td>
                  <td style={{ padding: "16px", fontSize: 16, fontWeight: 700, color: "#7C3AED", lineHeight: 1.4, verticalAlign: "top", background: "rgba(124, 58, 237, 0.02)" }}>
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </SlideShell>
  );
}
