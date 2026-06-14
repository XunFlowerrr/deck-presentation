import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
];

export function Experiment1() {
  const rows = [
    {
      name: "All 9 emotions",
      desc: "Using the full set of emotional responses",
      art: "0.819",
      fashion: "0.838",
      landscape: "0.843",
      avg: "0.833",
      isBest: true,
      color: "rgba(16,185,129,0.04)",
    },
    {
      name: "7 emotions (Real emotions)",
      desc: "Removed circular proxies: 'liked' & 'beautiful'",
      art: "0.716",
      fashion: "0.705",
      landscape: "0.740",
      avg: "0.720",
      isCeiling: true,
      color: "rgba(124, 58, 237,0.04)",
    },
    {
      name: "Best previous method (ICI)",
      desc: "Shi et al., 2024 (without emotions)",
      art: "0.493",
      fashion: "0.319",
      landscape: "0.458",
      avg: "0.423",
      isBaseline: true,
      color: "transparent",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Feasibility Analysis"
        title="Experiment 1: Is the Idea"
        highlight="Even Possible?"
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
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>METHOD / DATASET INPUT</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>ART</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>FASHION</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>LANDSCAPE</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#111827" }}>AVERAGE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.name}
                  style={{
                    borderBottom: idx === rows.length - 1 ? "none" : "1px solid #F3F4F6",
                    background: row.color,
                  }}
                >
                  <td style={{ padding: "20px" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>
                      {row.name}
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
                        color: row.isBest ? "#10B981" : row.isCeiling ? "#7C3AED" : "#111827",
                        background: row.isBest
                          ? "rgba(16,185,129,0.1)"
                          : row.isCeiling
                          ? "rgba(124, 58, 237,0.1)"
                          : "transparent",
                        padding: "6px 12px",
                        borderRadius: "8px",
                      }}
                    >
                      {row.avg}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-label */}
          <div style={{ padding: "12px 20px 0", borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, color: "#9CA3AF", fontStyle: "italic" }}>
              * Values represent Concordance Correlation Coefficient (CCC) score, max = 1.0 (higher is better).
            </span>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#7C3AED" }}>
              Theoretical Ceiling: 0.720
            </span>
          </div>
        </motion.div>

        {/* Analytical takeaways */}
        <div style={{ display: "flex", gap: 32 }}>
          <motion.div
            {...fadeIn(0.5)}
            style={{
              flex: 1,
              background: "rgba(124, 58, 237,0.03)",
              border: "1px solid rgba(124, 58, 237,0.08)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 22, fontWeight: 800, color: "#7C3AED", marginBottom: 8 }}>
              Evaluating with Circular Proxies
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              Using all 9 emotions yields a prediction score of <strong>0.833</strong>. However, emotions like "liked it" and "found it beautiful" are circular references for aesthetic preference.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn(0.65)}
            style={{
              flex: 1,
              background: "rgba(236, 72, 153,0.03)",
              border: "1px solid rgba(236, 72, 153,0.08)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 22, fontWeight: 800, color: "#EC4899", marginBottom: 8 }}>
              The Real Emotional Mediation
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              Removing circular proxies leaves 7 "pure" emotions. This still achieves a high score of <strong>0.720</strong>, nearly doubling the previous best method (<strong>0.423</strong>). This proves the feasibility of the concept.
            </p>
          </motion.div>
        </div>

      </div>
    </SlideShell>
  );
}
