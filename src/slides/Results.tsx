import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
];

export function Results() {
  const tableData = {
    headers: ["support = 10", "support = 25", "support = 50", "support = 100"],
    rows: [
      {
        name: "Direct (No Emotion)",
        desc: "Predicting aesthetic score directly from pixels",
        values: ["0.109", "0.187", "0.245", "0.294"],
        color: "transparent",
      },
      {
        name: "Through Emotion + Correction (Hybrid)",
        desc: "Proposed emotion-mediated route",
        values: ["0.153", "0.238", "0.299", "0.334"],
        color: "rgba(124, 58, 237,0.03)",
        isProposed: true,
      },
      {
        name: "Improvement",
        desc: "Relative performance gain",
        values: ["+40%", "+27%", "+22%", "+14%"],
        color: "rgba(16,185,129,0.06)",
        isHighlight: true,
      },
    ],
  };

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Performance"
        title="Final Evaluation"
        highlight="Results."
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
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>MODEL METHOD</th>
                {tableData.headers.map((h) => (
                  <th key={h} style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>
                    {h.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, idx) => (
                <tr
                  key={row.name}
                  style={{
                    borderBottom: idx === tableData.rows.length - 1 ? "none" : "1px solid #F3F4F6",
                    background: row.color,
                  }}
                >
                  <td style={{ padding: "20px" }}>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: row.isHighlight || row.isProposed ? 800 : 700,
                        color: row.isHighlight ? "#10B981" : row.isProposed ? "#7C3AED" : "#111827",
                      }}
                    >
                      {row.name}
                    </div>
                    <div style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>
                      {row.desc}
                    </div>
                  </td>
                  {row.values.map((val, vidx) => (
                    <td key={vidx} style={{ padding: "20px" }}>
                      <span
                        style={{
                          fontSize: row.isHighlight ? 24 : 20,
                          fontWeight: row.isHighlight ? 900 : 500,
                          color: row.isHighlight ? "#10B981" : row.isProposed ? "#7C3AED" : "#4B5563",
                          background: row.isHighlight ? "rgba(16,185,129,0.12)" : "transparent",
                          padding: row.isHighlight ? "4px 8px" : "0",
                          borderRadius: "6px",
                        }}
                      >
                        {val}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footnotes / Baselines */}
          <div style={{ padding: "16px 20px 0", borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, color: "#9CA3AF" }}>
              * Support represents the number of images rated by the person used to train their personalized formula.
            </span>
            <div style={{ display: "flex", gap: 24, fontSize: 18, fontWeight: 700 }}>
              <span style={{ color: "#374151" }}>
                ICI State-of-the-Art: <span style={{ color: "#EF4444" }}>0.423</span>
              </span>
              <span style={{ color: "#374151" }}>
                Theoretical Ceiling: <span style={{ color: "#7C3AED" }}>0.720</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Takeaway Cards */}
        <div style={{ display: "flex", gap: 32 }}>
          <motion.div
            {...fadeIn(0.5)}
            style={{
              flex: 1,
              background: "rgba(16,185,129,0.03)",
              border: "1px solid rgba(16,185,129,0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 800, color: "#10B981", marginBottom: 6 }}>
              🚀 Highest Gain in Scarce Data
            </h4>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              The improvement is largest (<strong>+40%</strong>) when we have the least data (only 10 images per user). This highlights how using emotional mediation acts as a strong prior, preventing overfitting.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn(0.6)}
            style={{
              flex: 1,
              background: "rgba(124, 58, 237,0.03)",
              border: "1px solid rgba(124, 58, 237,0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 800, color: "#7C3AED", marginBottom: 6 }}>
              📈 Consistent Outperformance
            </h4>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              Going through predicted emotions and applying correction consistently beats direct score prediction at all support levels (10 to 100 images).
            </p>
          </motion.div>

          <motion.div
            {...fadeIn(0.7)}
            style={{
              flex: 1,
              background: "rgba(239,68,68,0.03)",
              border: "1px solid rgba(239,68,68,0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 800, color: "#EF4444", marginBottom: 6 }}>
              🔍 Room for Improvement
            </h4>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              We are currently at <strong>0.334</strong>, which is below ICI (<strong>0.423</strong>). However, the theoretical ceiling is <strong>0.720</strong>, indicating that refining the emotion predictor offers a huge path forward.
            </p>
          </motion.div>
        </div>

      </div>
    </SlideShell>
  );
}
