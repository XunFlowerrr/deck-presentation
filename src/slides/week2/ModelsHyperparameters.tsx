import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "3B82F6", opacity: 0.1 },
];

export function ModelsHyperparameters() {
  const specs = [
    {
      component: "Image Features",
      method: "CLIP ViT-B/16",
      settings: "Frozen, pretrained by OpenAI — produces 512-dimensional embedding per image",
      color: "rgba(124, 58, 237, 0.02)",
    },
    {
      component: "Emotion Prediction (Step 1)",
      method: "Ridge Regression",
      settings: "Regularization strength alpha selected via cross-validation from 13 values between 0.01 and 1000",
      color: "rgba(59, 130, 246, 0.02)",
    },
    {
      component: "Personal Formula (Step 2)",
      method: "Ridge Regression",
      settings: "Same cross-validation approach for individual user emotion weighting",
      color: "rgba(236, 72, 153, 0.02)",
    },
    {
      component: "Evaluation Setup",
      method: "5-Fold User-Level Split",
      settings: "80% users for training, 20% held out as new users — repeated 5 times so every user is tested",
      color: "rgba(16, 185, 129, 0.02)",
    },
    {
      component: "Performance Metrics",
      method: "CCC & SCC",
      settings: "CCC checks agreement in both ranking & scale; SCC checks ordinal ranking agreement only",
      color: "rgba(245, 158, 11, 0.02)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Technical Details"
        title="Models &amp;"
        highlight="Hyperparameters."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
        
        {/* Table representation */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            overflow: "hidden",
            padding: "24px 32px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "25%" }}>Component</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "25%" }}>Method</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "50%" }}>Key Settings / Details</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, idx) => (
                <tr
                  key={row.component}
                  style={{
                    borderBottom: idx === specs.length - 1 ? "none" : "1px solid #F3F4F6",
                    background: row.color,
                  }}
                >
                  <td style={{ padding: "18px 20px" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#111827" }}>
                      {row.component}
                    </div>
                  </td>
                  <td style={{ padding: "18px 20px", fontSize: 18, fontWeight: 700, color: "#4B5563" }}>
                    {row.method}
                  </td>
                  <td style={{ padding: "18px 20px", fontSize: 18, color: "#4B5563", lineHeight: 1.5 }}>
                    {row.settings}
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
