import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 680, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -120, size: 620, color: "59, 130, 246", opacity: 0.1 },
];

const COMPARISON_DATA = [
  { aspect: "Model", paper: "Qwen3-VL 2B / 4B / 8B", ours: "8B (Largest)", status: "Close", color: "#3B82F6", bg: "rgba(59, 130, 246, 0.1)" },
  { aspect: "Layer", paper: "LT₁₅", ours: "Stored 36 layers (L15 ≈ L32)", status: "Close", color: "#3B82F6", bg: "rgba(59, 130, 246, 0.1)" },
  { aspect: "Token", paper: "Text tokens", ours: "Same (wins from mid-layer up)", status: "Match", color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
  { aspect: "Pooling", paper: "Average", ours: "Average", status: "Match", color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
  { aspect: "Prompt", paper: `"Assess the aesthetics..."`, ours: "Same words", status: "Match", color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
  { aspect: "Downstream", paper: "Ridge + StandardScaler", ours: "Same", status: "Match", color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
  { aspect: "Fine-tune", paper: "None (frozen, per Fig. 1)", ours: "We tried fine-tuning (Task 3)", status: "Extended", color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
  { aspect: "Metric", paper: "Spearman ρ", ours: "CCC (primary) + SROCC", status: "Extended", color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
];

export function VlmBackboneWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2"
        title="Trying a VLM backbone:"
        highlight="Qwen3-VL-8B."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          minHeight: 0,
          paddingBottom: 8,
        }}
      >
        {/* TOP: Comparison Table (Wide & Centered) */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 20,
            padding: "16px 24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.01)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Table 5 — Side-by-Side Comparison with Ryu & Yanaka
          </h4>
          
          <div style={{ overflow: "hidden", borderRadius: 12, border: "1px solid #E5E7EB" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
                  <th style={{ padding: "8px 16px", fontSize: 14, fontWeight: 700, color: "#374151" }}>Aspect</th>
                  <th style={{ padding: "8px 16px", fontSize: 14, fontWeight: 700, color: "#374151" }}>Reference Paper</th>
                  <th style={{ padding: "8px 16px", fontSize: 14, fontWeight: 700, color: "#374151" }}>Our Approach</th>
                  <th style={{ padding: "8px 16px", fontSize: 14, fontWeight: 700, color: "#374151" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: idx === COMPARISON_DATA.length - 1 ? "none" : "1px solid #F3F4F6", background: idx % 2 === 0 ? "rgba(255,255,255,0.7)" : "#F9FAFB" }}>
                    <td style={{ padding: "8px 16px", fontSize: 14, fontWeight: 800, color: "#111827" }}>{row.aspect}</td>
                    <td style={{ padding: "8px 16px", fontSize: 14, color: "#4B5563" }}>{row.paper}</td>
                    <td style={{ padding: "8px 16px", fontSize: 14, color: "#111827", fontWeight: row.status === "Extended" ? 600 : 500 }}>{row.ours}</td>
                    <td style={{ padding: "8px 16px" }}>
                      <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, color: row.color, background: row.bg, padding: "2px 8px", borderRadius: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* BOTTOM: Horizontal Our Implementation Card */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "rgba(59, 130, 246, 0.035)",
            border: "1.5px solid rgba(59, 130, 246, 0.25)",
            borderRadius: 20,
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Our Implementation Details
          </h4>
          
          <div style={{ display: "flex", gap: 32 }}>
            <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 16, color: "#3B82F6", lineHeight: 1.3 }}>•</span>
              <p style={{ margin: 0, fontSize: 16, color: "#374151", lineHeight: 1.45, fontWeight: 500 }}>
                We extracted features from all layers in a single run. We stored both <strong>text ("LT")</strong> and <strong>image ("LV")</strong> tokens from all 36 layers, then tested them to choose the best layer.
              </p>
            </div>
            
            <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 16, color: "#3B82F6", lineHeight: 1.3 }}>•</span>
              <p style={{ margin: 0, fontSize: 16, color: "#374151", lineHeight: 1.45, fontWeight: 500 }}>
                We followed the paper exactly for feature extraction (model, layers, tokens, prompt, and scaling). We only made two changes: we used the larger 8B model instead of 4B, and we went further by fine-tuning the backbone (which the paper did not do).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
