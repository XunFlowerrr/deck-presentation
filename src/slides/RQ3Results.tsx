import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function RQ3Results() {
  const significantPairs = [
    {
      pair: "Impressed Weight × Conscientiousness",
      r: "-0.18",
      pValue: "0.041",
      bonferroni: "No (p > 0.0014)",
      color: "rgba(124, 58, 237, 0.03)",
    },
    {
      pair: "Motivated Weight × Openness",
      r: "+0.18",
      pValue: "0.037",
      bonferroni: "No (p > 0.0014)",
      color: "rgba(59, 130, 246, 0.03)",
    },
    {
      pair: "Sad Weight × Agreeableness",
      r: "+0.20",
      pValue: "0.024",
      bonferroni: "No (p > 0.0014)",
      color: "rgba(16, 185, 129, 0.03)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="RQ3: Psychological Grounding"
        title="RQ3 — What we found"
        highlight="Weak personality link."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, justifyContent: "center", paddingBottom: 16 }}>
        
        {/* Full-width Centered Table */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "24px 32px",
            width: "100%",
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", margin: "0 0 16px 0", textAlign: "center" }}>
            3 pairs appeared significant at p &lt; 0.05
          </h3>
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "40%" }}>PAIR RELATIONSHIP</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", textAlign: "center" }}>CORRELATION (R)</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", textAlign: "center" }}>P-VALUE</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#EF4444", textAlign: "center" }}>SURVIVES BONFERRONI?</th>
              </tr>
            </thead>
            <tbody>
              {significantPairs.map((row) => (
                <tr key={row.pair} style={{ borderBottom: "1px solid #F3F4F6", background: row.color }}>
                  <td style={{ padding: "20px", fontSize: 22, fontWeight: 800, color: "#111827" }}>{row.pair}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 700, color: "#4B5563", textAlign: "center" }}>{row.r}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 700, color: "#4B5563", textAlign: "center" }}>{row.pValue}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 800, color: "#EF4444", textAlign: "center" }}>{row.bonferroni}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 14, marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, color: "#9CA3AF", fontStyle: "italic" }}>
              * But we tested 35 pairs — Bonferroni correction requires alpha = 0.0014 (0.05 / 35).
            </span>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#EF4444" }}>
              Hypothesis Test Count: 35
            </span>
          </div>
        </motion.div>

        {/* Full-width Grid of Takeaway Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr 1fr", gap: 24 }}>
          
          {/* Main Hypotheses Card */}
          <motion.div
            {...fadeIn(0.4)}
            style={{
              background: "rgba(239, 68, 68, 0.02)",
              border: "1px solid rgba(239, 68, 68, 0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#EF4444", marginBottom: 10, marginTop: 0 }}>
              ❌ Pre-specified hypotheses not supported
            </h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, color: "#4B5563", lineHeight: 1.5 }}>
              <li>
                <strong>Openness × intellect weight:</strong> r = -0.10, p = 0.26.
              </li>
              <li>
                <strong>Emotional Stability × negative emotion weights:</strong> r = -0.01, p = 0.95.
              </li>
            </ul>
          </motion.div>

          {/* Statistical Tempering Card */}
          <motion.div
            {...fadeIn(0.5)}
            style={{
              background: "rgba(245, 158, 11, 0.02)",
              border: "1px solid rgba(245, 158, 11, 0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F59E0B", marginBottom: 10, marginTop: 0 }}>
              ⚠️ Statistical Tempering
            </h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, color: "#4B5563", lineHeight: 1.5 }}>
              <li>
                <strong>Small effects:</strong> Correlations range around <em>r</em> = 0.18 to 0.20.
              </li>
              <li>
                <strong>False positives:</strong> 1–2 false positives are expected by chance alone under 35 tests.
              </li>
            </ul>
          </motion.div>

          {/* Honest Summary Card */}
          <motion.div
            {...fadeIn(0.6)}
            style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(59, 130, 246, 0.04))",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#7C3AED", marginBottom: 6, marginTop: 0 }}>
              💡 Honest Summary
            </h4>
            <p style={{ fontSize: 15, color: "#374151", margin: 0, lineHeight: 1.5 }}>
              No strong evidence that the personal formula reflects Big Five personality. Personal preferences are more specific than broad traits can capture, consistent with Experiment 2 finding that 88% of personalization comes from perceiving emotions differently, not weighting them differently.
            </p>
          </motion.div>

        </div>

      </div>
    </SlideShell>
  );
}
