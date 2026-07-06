import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, right: -120, size: 700, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -160, left: -100, size: 600, color: "16, 185, 129", opacity: 0.06 },
];

const TABLE_DATA = [
  {
    backbone: "Qwen3-VL-8B (4096d)",
    preprocessing: "L2-norm",
    ccc: "0.006",
    srocc: "0.385",
    group: "qwen-l2",
  },
  {
    backbone: "Qwen3-VL-8B (4096d)",
    preprocessing: "StandardScaler",
    ccc: "0.376",
    srocc: "0.413",
    group: "qwen-ss",
  },
  {
    backbone: "CLIP (512d)",
    preprocessing: "L2-norm",
    ccc: "0.301",
    srocc: "0.413",
    group: "clip-l2",
  },
  {
    backbone: "CLIP (512d)",
    preprocessing: "StandardScaler",
    ccc: "0.293",
    srocc: "0.399",
    group: "clip-ss",
  },
];

function getRowStyle(group: string): React.CSSProperties {
  switch (group) {
    case "qwen-l2":
      return { background: "rgba(239, 68, 68, 0.04)" };
    case "qwen-ss":
      return { background: "rgba(16, 185, 129, 0.05)" };
    default:
      return { background: "rgba(255, 255, 255, 0.5)" };
  }
}

function getCccStyle(group: string): React.CSSProperties {
  if (group === "qwen-l2")
    return { color: "#DC2626", fontWeight: 900, fontSize: 22 };
  if (group === "qwen-ss")
    return { color: "#059669", fontWeight: 900, fontSize: 22 };
  return {};
}

const headerStyle: React.CSSProperties = {
  background: "#1F2937",
  color: "#FFFFFF",
  padding: "16px 24px",
  fontSize: 17,
  fontWeight: 700,
  textAlign: "left",
  letterSpacing: "0.02em",
};

const cellStyle: React.CSSProperties = {
  padding: "14px 24px",
  fontSize: 20,
  color: "#374151",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
};

const numericCell: React.CSSProperties = {
  ...cellStyle,
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  textAlign: "center",
  fontWeight: 600,
};

export function StandardScalerWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2 — Insight"
        title="Why StandardScaler"
        highlight="matters."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          marginTop: 12,
        }}
      >
        {/* ── Table ── */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr>
                <th style={{ ...headerStyle, width: "32%", borderTopLeftRadius: 16 }}>
                  Backbone
                </th>
                <th style={{ ...headerStyle, width: "26%" }}>Preprocessing</th>
                <th style={{ ...headerStyle, width: "21%", textAlign: "center" }}>
                  CCC ↑
                </th>
                <th
                  style={{
                    ...headerStyle,
                    width: "21%",
                    textAlign: "center",
                    borderTopRightRadius: 16,
                  }}
                >
                  SROCC ↑
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row, i) => (
                <motion.tr
                  key={row.group}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
                  style={{
                    ...getRowStyle(row.group),
                    ...(row.group === "qwen-l2"
                      ? { borderLeft: "4px solid rgba(239, 68, 68, 0.4)" }
                      : row.group === "qwen-ss"
                        ? { borderLeft: "4px solid rgba(16, 185, 129, 0.4)" }
                        : { borderLeft: "4px solid transparent" }),
                  }}
                >
                  <td style={{ ...cellStyle, fontWeight: 700, color: "#111827" }}>
                    {row.backbone}
                  </td>
                  <td style={cellStyle}>
                    <span
                      style={{
                        padding: "4px 14px",
                        borderRadius: 8,
                        fontSize: 16,
                        fontWeight: 700,
                        background:
                          row.preprocessing === "L2-norm"
                            ? "rgba(107, 114, 128, 0.1)"
                            : "rgba(124, 58, 237, 0.08)",
                        color:
                          row.preprocessing === "L2-norm"
                            ? "#6B7280"
                            : "#7C3AED",
                      }}
                    >
                      {row.preprocessing}
                    </span>
                  </td>
                  <td style={{ ...numericCell, ...getCccStyle(row.group) }}>
                    {row.ccc}
                  </td>
                  <td style={numericCell}>{row.srocc}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ── Callouts ── */}
        <div style={{ display: "flex", gap: 20 }}>
          {/* Callout 1: Explaining how it helps */}
          <motion.div
            {...fadeInUp(0.7)}
            style={{
              flex: 1.1,
              background: "rgba(59, 130, 246, 0.04)",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              borderRadius: 16,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, color: "#2563EB", textTransform: "uppercase" }}>
              How StandardScaler Saves High-Dim Features
            </span>
            <div style={{ fontSize: 17, color: "#374151", lineHeight: 1.55, fontWeight: 500 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                <li>
                  <strong>L2-norm shrinks values:</strong> L2-normalizing 4096 dimensions makes individual values extremely tiny (near 0).
                </li>
                <li>
                  <strong>Ridge weight penalty:</strong> Under tiny values, the Ridge weight decay (regularization) penalizes weights heavily, forcing predictions to collapse to the average. This destroys CCC (variance score) while SROCC (ranking) survives.
                </li>
                <li>
                  <strong>StandardScaler preserves variance:</strong> Scaling each dimension individually to unit variance (\(\mu=0, \sigma=1\)) allows Ridge to assign appropriate weights.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Callout 2: Results & Paper match */}
          <motion.div
            {...fadeInUp(0.8)}
            style={{
              flex: 0.9,
              background: "rgba(16, 185, 129, 0.04)",
              border: "1px solid rgba(16, 185, 129, 0.15)",
              borderRadius: 16,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, color: "#059669", textTransform: "uppercase" }}>
              Key Findings & Alignment
            </span>
            <div style={{ fontSize: 17, color: "#374151", lineHeight: 1.55, fontWeight: 500 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                <li>
                  <strong>CLIP vs VLM:</strong> CLIP (512d) is barely affected. The issue is strictly a high-dimensionality side effect.
                </li>
                <li>
                  <strong>VLM Outperforms CLIP:</strong> With StandardScaler, the VLM beats CLIP by <strong>+0.08 CCC</strong>.
                </li>
                <li>
                  <strong>Text > Image Tokens:</strong> Text tokens consistently beat image tokens in middle-to-late layers, matching the Ryu &amp; Yanaka findings.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
