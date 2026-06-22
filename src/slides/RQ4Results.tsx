import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "236, 72, 153", opacity: 0.12 },
];

export function RQ4Results() {
  const domainPairs = [
    {
      pair: "Art & Fashion",
      sameUser: "0.776",
      randomBaseline: "0.655",
      diff: "+0.120",
      pValue: "<0.0001",
      color: "rgba(124, 58, 237, 0.03)",
    },
    {
      pair: "Art & Landscape",
      sameUser: "0.786",
      randomBaseline: "0.654",
      diff: "+0.132",
      pValue: "<0.0001",
      color: "rgba(59, 130, 246, 0.03)",
    },
    {
      pair: "Fashion & Landscape",
      sameUser: "0.805",
      randomBaseline: "0.682",
      diff: "+0.124",
      pValue: "<0.0001",
      color: "rgba(16, 185, 129, 0.03)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="RQ4: Cross-Domain Consistency"
        title="RQ4 Results: "
        highlight="Stable Personal Signatures."
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
            Cross-Domain Formula Consistency (Pearson Correlation)
          </h3>
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280" }}>DOMAIN PAIR</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#7C3AED", textAlign: "center" }}>SAME-USER CORRELATION</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", textAlign: "center" }}>RANDOM-PAIR BASELINE</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#10B981", textAlign: "center" }}>DIFFERENCE (GAIN)</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", textAlign: "center" }}>P-VALUE</th>
              </tr>
            </thead>
            <tbody>
              {domainPairs.map((row) => (
                <tr key={row.pair} style={{ borderBottom: "1px solid #F3F4F6", background: row.color }}>
                  <td style={{ padding: "20px", fontSize: 22, fontWeight: 800, color: "#111827" }}>{row.pair}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 800, color: "#7C3AED", textAlign: "center" }}>{row.sameUser}</td>
                  <td style={{ padding: "20px", fontSize: 20, color: "#4B5563", textAlign: "center" }}>{row.randomBaseline}</td>
                  <td style={{ padding: "20px", fontSize: 20, fontWeight: 800, color: "#10B981", background: "rgba(16,185,129,0.04)", textAlign: "center" }}>{row.diff}</td>
                  <td style={{ padding: "20px", fontSize: 20, color: "#4B5563", textAlign: "center" }}>{row.pValue}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 14, marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, color: "#9CA3AF", fontStyle: "italic" }}>
              * Same-user correlation is significantly higher than the random-pair baseline (p &lt; 0.0001 for all pairs).
            </span>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#7C3AED" }}>
              Permutations Run: 2000
            </span>
          </div>
        </motion.div>

        {/* Full-width Grid of Takeaway Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr 1fr", gap: 24 }}>
          
          {/* Emotion Consistency Card */}
          <motion.div
            {...fadeIn(0.4)}
            style={{
              background: "rgba(236, 72, 153, 0.02)",
              border: "1px solid rgba(236, 72, 153, 0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#EC4899", marginBottom: 10, marginTop: 0 }}>
              📊 Emotion Consistency Rankings
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>😄 Amused (Most Consistent)</span>
                <span style={{ fontWeight: 800, color: "#10B981" }}>r ≈ 0.57</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>⏳ Nostalgic (Least Consistent)</span>
                <span style={{ fontWeight: 800, color: "#EF4444" }}>r ≈ 0.14</span>
              </div>
            </div>
          </motion.div>

          {/* Baseline Interpretation Card */}
          <motion.div
            {...fadeIn(0.5)}
            style={{
              background: "rgba(245, 158, 11, 0.02)",
              border: "1px solid rgba(245, 158, 11, 0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F59E0B", marginBottom: 6, marginTop: 0 }}>
              🔍 Shared Baseline Context
            </h4>
            <p style={{ fontSize: 14, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
              The high baseline (~0.65) reflects shared human preferences (e.g., negative distasteful weights). The +0.12 same-user gain confirms an identifiable personal signature.
            </p>
          </motion.div>

          {/* Conclusion Card */}
          <motion.div
            {...fadeIn(0.6)}
            style={{
              background: "linear-gradient(135deg, rgba(236, 72, 153, 0.04), rgba(59, 130, 246, 0.04))",
              border: "1px solid rgba(236, 72, 153, 0.15)",
              borderRadius: "20px",
              padding: "20px 24px",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "#EC4899", marginBottom: 6, marginTop: 0 }}>
              💡 Key Conclusion
            </h4>
            <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.5 }}>
              A user's beauty formula represents a stable personal signature that does not shift across image types. This supports the personalization approach in our pipeline.
            </p>
          </motion.div>

        </div>

      </div>
    </SlideShell>
  );
}
