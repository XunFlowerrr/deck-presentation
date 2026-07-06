import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
];

export function Experiment3a() {
  const approaches = [
    {
      name: "Direct (No Emotion)",
      desc: "Baseline model predicting beauty score straight from CLIP visual features",
      art: "0.379",
      fashion: "0.191",
      landscape: "0.312",
      avg: "0.294",
      bg: "transparent",
    },
    {
      name: "Population-emo",
      desc: "Predicts general average emotions first, then maps via personal formula",
      art: "0.387",
      fashion: "0.245",
      landscape: "0.373",
      avg: "0.335",
      bg: "rgba(59, 130, 246, 0.02)",
    },
    {
      name: "Personal-emo",
      desc: "Attempts to predict personalized emotions using only user's 100 images (overfits)",
      art: "0.337",
      fashion: "0.118",
      landscape: "0.254",
      avg: "0.237",
      bg: "rgba(239, 68, 68, 0.02)",
      isWeakest: true,
    },
    {
      name: "Hybrid (Proposed)",
      desc: "Starts with stable average emotions and adds a learned personal correction",
      art: "0.420",
      fashion: "0.234",
      landscape: "0.347",
      avg: "0.334",
      bg: "rgba(124, 58, 237, 0.04)",
      isBest: true,
      border: "2px solid #7C3AED",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Model Feasibility"
        title="Experiment 3a: Comparing"
        highlight="the 4 Approaches."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
        
        {/* Table Card */}
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
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "40%" }}>APPROACH (SUPPORT = 100)</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>ART</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>FASHION</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>LANDSCAPE</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#111827" }}>AVERAGE</th>
              </tr>
            </thead>
            <tbody>
              {approaches.map((row, idx) => (
                <tr
                  key={row.name}
                  style={{
                    borderBottom: idx === approaches.length - 1 ? "none" : "1px solid #F3F4F6",
                    background: row.bg,
                    outline: row.border ? row.border : "none",
                  }}
                >
                  <td style={{ padding: "20px" }}>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: row.isBest ? "#7C3AED" : row.isWeakest ? "#EF4444" : "#111827",
                      }}
                    >
                      {row.name}
                      {row.isBest && <span style={{ marginLeft: 8, fontSize: 14, fontWeight: 700, background: "#7C3AED", color: "white", padding: "2px 8px", borderRadius: "8px", textTransform: "uppercase" }}>Best</span>}
                      {row.isWeakest && <span style={{ marginLeft: 8, fontSize: 14, fontWeight: 700, background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "2px 8px", borderRadius: "8px", textTransform: "uppercase" }}>Overfit</span>}
                    </div>
                    <div style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>
                      {row.desc}
                    </div>
                  </td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 500, color: "#4B5563" }}>{row.art}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 500, color: "#4B5563" }}>{row.fashion}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 500, color: "#4B5563" }}>{row.landscape}</td>
                  <td style={{ padding: "20px" }}>
                    <span
                      style={{
                        fontSize: 24,
                        fontWeight: 900,
                        color: row.isBest ? "#7C3AED" : row.isWeakest ? "#EF4444" : "#111827",
                        background: row.isBest
                          ? "rgba(124,58,237,0.12)"
                          : "transparent",
                        padding: row.isBest ? "4px 8px" : "0",
                        borderRadius: "6px",
                      }}
                    >
                      {row.avg}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Reference ceiling / baselines */}
          <div style={{ padding: "16px 20px 0", borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, color: "#9CA3AF" }}>
              * Values represent Concordance Correlation Coefficient (CCC) score, higher is better.
            </span>
            <div style={{ display: "flex", gap: 24, fontSize: 18, fontWeight: 700 }}>
              <span style={{ color: "#374151" }}>
                ICI (State-of-the-Art): <span style={{ color: "#EF4444" }}>0.423</span>
              </span>
              <span style={{ color: "#374151" }}>
                Theoretical Ceiling (P-oracle): <span style={{ color: "#7C3AED" }}>0.720</span>
              </span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </SlideShell>
  );
}
