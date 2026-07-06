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

        {/* ── Callout 1: Primary insight ── */}
        <motion.div
          {...fadeInUp(0.7)}
          style={{
            background: "rgba(59, 130, 246, 0.04)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            borderRadius: 14,
            padding: "20px 28px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: 18,
            }}
          >
            🔍
          </div>
          <div>
            <div
              style={{
                fontSize: 19,
                color: "#1E3A5F",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              <strong>CLIP (512 dims) barely changes</strong> — only the
              4096-dim VLM collapses.{" "}
              <span style={{ color: "#3B82F6", fontWeight: 700 }}>
                It's a dimensionality problem.
              </span>{" "}
              StandardScaler is essential for high-dim features.
            </div>
          </div>
        </motion.div>

        {/* ── Callout 2: Secondary insight ── */}
        <motion.div
          {...fadeInUp(0.85)}
          style={{
            background: "rgba(16, 185, 129, 0.04)",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            borderRadius: 14,
            padding: "20px 28px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "rgba(16, 185, 129, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: 18,
            }}
          >
            ✅
          </div>
          <div>
            <div
              style={{
                fontSize: 19,
                color: "#1E3A5F",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              With StandardScaler fixed,{" "}
              <strong style={{ color: "#059669" }}>
                VLM beats CLIP by ~0.08 CCC
              </strong>
              , and text tokens beat image tokens at every layer — matching the
              paper.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
