import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

export function Finding3Slide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Block 2 — Baseline Comparison"
        title="Finding 3: Comparable to Baselines "
        highlight="Without User Traits."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left Column: Data Comparison Table */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(45, 49, 54, 0.08)",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 10px 30px rgba(45, 49, 54, 0.03)",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 955, color: "#2D3136", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            Performance Comparison (CCC Metrics)
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(45, 49, 54, 0.12)", paddingBottom: 12 }}>
                <th style={{ padding: "12px 8px", color: "#2D3136", fontWeight: 800, fontSize: 14 }}>Model</th>
                <th style={{ padding: "12px 8px", color: "#2D3136", fontWeight: 800, fontSize: 14 }}>User Traits</th>
                <th style={{ padding: "12px 8px", color: "#2D3136", fontWeight: 800, fontSize: 14 }}>Params</th>
                <th style={{ padding: "12px 8px", color: "#2D3136", fontWeight: 800, fontSize: 14 }}>CCC</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 800, color: "#626B74" }}>ICI (Baseline)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, color: "#2D3136" }}>Required (Big Five)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, color: "#626B74" }}>8B VLM</td>
                <td style={{ padding: "14px 8px", fontSize: 15, fontWeight: 800, color: "#626B74" }}>0.369</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 800, color: "#626B74" }}>MIR (Baseline)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, color: "#2D3136" }}>Required (Big Five)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, color: "#626B74" }}>8B VLM</td>
                <td style={{ padding: "14px 8px", fontSize: 15, fontWeight: 800, color: "#626B74" }}>0.385</td>
              </tr>
              <tr style={{ background: "rgba(194, 79, 113, 0.02)", borderBottom: "2px solid #C24F71" }}>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 900, color: "#C24F71" }}>Our Hybrid Model</td>
                <td style={{ padding: "14px 8px", fontSize: 13, fontWeight: 900, color: "#C24F71" }}>None (Traits-Free)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, fontWeight: 900, color: "#C24F71" }}>4B VLM</td>
                <td style={{ padding: "14px 8px", fontSize: 16, fontWeight: 950, color: "#C24F71" }}>0.380</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 16, fontSize: 12, color: "#9CA3AF", textAlign: "right" }}>
            *Note: Our Hybrid model utilizes Qwen-4B backbone, matching 8B baselines.
          </div>
        </motion.div>

        {/* Right Column: Key Contribution & Privacy Highlight */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 18,
              padding: "24px",
              boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)",
            }}
          >
            <h4 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
              Core Novelty &amp; Contribution
            </h4>
            <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
              We achieve competitive predictive accuracy compared to MIR and outperform ICI, all without requiring any intrusive user personality trait surveys.
            </p>
          </motion.div>

          {/* Privacy Highlight Card */}
          <motion.div
            {...fadeInUp(0.4)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              borderRadius: 16,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: "#C24F71", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Strong Argument for User Privacy
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#2D3136" }}>
              Protecting User Privacy
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: "#626B74", lineHeight: 1.45 }}>
              Evaluating subjective aesthetics via intermediate emotion states eliminates the need to collect sensitive personality indicators (like the Big Five), safeguarding user data privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
