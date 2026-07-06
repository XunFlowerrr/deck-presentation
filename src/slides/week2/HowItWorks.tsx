import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function HowItWorks() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Methodology"
        title="How This Works"
        highlight="in Practice."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 0 }}>
        
        {/* Operational Flow Table - Expanded for Full Page */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "28px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.04)",
            padding: "40px 48px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "3px solid #E5E7EB" }}>
                <th style={{ padding: "24px 28px", fontSize: 22, fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", width: "33%" }}>Stage</th>
                <th style={{ padding: "24px 28px", fontSize: 22, fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", width: "33%" }}>What's Needed</th>
                <th style={{ padding: "24px 28px", fontSize: 22, fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", width: "34%" }}>Where It Comes From</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: "1px solid #F3F4F6", background: "rgba(124, 58, 237, 0.02)" }}>
                <td style={{ padding: "28px" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#7C3AED" }}>Stage 1: Train Model 1</div>
                  <div style={{ fontSize: 16, color: "#6B7280", marginTop: 6 }}>(One-time setup by researchers)</div>
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#374151", lineHeight: 1.5 }}>
                  Images + emotional ratings from a large population
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#374151", lineHeight: 1.5 }}>
                  <strong>XPASS-Vis Dataset</strong><br/>(87,836 ratings already available; no custom collection needed)
                </td>
              </tr>
              {/* Row 2 */}
              <tr style={{ borderBottom: "1px solid #F3F4F6", background: "rgba(236, 72, 153, 0.02)" }}>
                <td style={{ padding: "28px" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#EC4899" }}>Stage 2: New User Signs Up</div>
                  <div style={{ fontSize: 16, color: "#6B7280", marginTop: 6 }}>(Personalizing the formula)</div>
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#374151", lineHeight: 1.5 }}>
                  ~50 to 100 beauty ratings from that specific user
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#374151", lineHeight: 1.5 }}>
                  <strong>Direct User Annotation</strong><br/>(User rates a small set of onboarding images)
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td style={{ padding: "28px" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#111827" }}>Stage 3: Predict on New Image</div>
                  <div style={{ fontSize: 16, color: "#6B7280", marginTop: 6 }}>(Instant personal assessment)</div>
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#374151", lineHeight: 1.5 }}>
                  Just the query image
                </td>
                <td style={{ padding: "28px", fontSize: 22, color: "#9CA3AF", textAlign: "left", fontWeight: 700 }}>
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
      </div>
    </SlideShell>
  );
}
