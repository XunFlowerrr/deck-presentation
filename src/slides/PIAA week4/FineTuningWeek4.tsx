import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 700, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -200, right: -80, size: 600, color: "236, 72, 153", opacity: 0.06 },
];

interface TableRow {
  backbone: string;
  directCcc: string;
  hybridCcc: string;
  emotionAdds: string;
  kind: "ours" | "best" | "ref" | "oracle";
}

const TABLE_DATA: TableRow[] = [
  {
    backbone: "CLIP frozen",
    directCcc: "0.293",
    hybridCcc: "0.366",
    emotionAdds: "+0.073",
    kind: "ours",
  },
  {
    backbone: "CLIP-ft (emotion) ★",
    directCcc: "0.386",
    hybridCcc: "0.400",
    emotionAdds: "+0.014",
    kind: "best",
  },
  {
    backbone: "CLIP-ft (overall)",
    directCcc: "0.368",
    hybridCcc: "0.387",
    emotionAdds: "+0.019",
    kind: "ours",
  },
  {
    backbone: "Qwen2-vision",
    directCcc: "0.321",
    hybridCcc: "0.357",
    emotionAdds: "+0.036",
    kind: "ours",
  },
  {
    backbone: "Qwen3-VL-8B",
    directCcc: "0.376",
    hybridCcc: "0.382",
    emotionAdds: "+0.006",
    kind: "ours",
  },
  {
    backbone: "ICI (Hayashi-san)",
    directCcc: "–",
    hybridCcc: "0.409",
    emotionAdds: "",
    kind: "ref",
  },
  {
    backbone: "MIR (Hayashi-san)",
    directCcc: "–",
    hybridCcc: "0.411",
    emotionAdds: "",
    kind: "ref",
  },
  {
    backbone: "P-oracle (ceiling)",
    directCcc: "–",
    hybridCcc: "0.725",
    emotionAdds: "",
    kind: "oracle",
  },
];

function getEmotionColor(val: string): string {
  switch (val) {
    case "+0.073":
      return "#059669";
    case "+0.036":
      return "#65A30D";
    case "+0.019":
      return "#CA8A04";
    case "+0.014":
      return "#D97706";
    case "+0.006":
      return "#DC2626";
    default:
      return "#9CA3AF";
  }
}

function getRowBg(kind: string): string {
  switch (kind) {
    case "best":
      return "rgba(234, 179, 8, 0.06)";
    case "ref":
      return "rgba(107, 114, 128, 0.04)";
    case "oracle":
      return "rgba(107, 114, 128, 0.02)";
    default:
      return "transparent";
  }
}

const headerStyle: React.CSSProperties = {
  background: "#1F2937",
  color: "#FFFFFF",
  padding: "14px 20px",
  fontSize: 16,
  fontWeight: 700,
  textAlign: "left",
  letterSpacing: "0.02em",
};

const cellStyle: React.CSSProperties = {
  padding: "12px 20px",
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

export function FineTuningWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 3 — Results"
        title="Fine-tuning &"
        highlight="Main Comparison."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 8,
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
                <th
                  style={{
                    ...headerStyle,
                    width: "30%",
                    borderTopLeftRadius: 16,
                  }}
                >
                  Backbone
                </th>
                <th style={{ ...headerStyle, width: "18%", textAlign: "center" }}>
                  Direct CCC
                </th>
                <th style={{ ...headerStyle, width: "18%", textAlign: "center" }}>
                  Hybrid CCC
                </th>
                <th
                  style={{
                    ...headerStyle,
                    width: "34%",
                    textAlign: "center",
                    borderTopRightRadius: 16,
                  }}
                >
                  How much the emotion step helps
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row, i) => {
                const isRefSep = row.kind === "ref" && row.backbone.startsWith("ICI");
                return (
                  <motion.tr
                    key={row.backbone}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                    style={{
                      background: getRowBg(row.kind),
                      ...(row.kind === "best"
                        ? {
                            borderLeft: "4px solid #EAB308",
                            borderRight: "4px solid #EAB308",
                          }
                        : { borderLeft: "4px solid transparent" }),
                      ...(isRefSep
                        ? { borderTop: "2px dashed rgba(107, 114, 128, 0.25)" }
                        : {}),
                    }}
                  >
                    {/* Backbone */}
                    <td
                      style={{
                        ...cellStyle,
                        fontWeight: 700,
                        color:
                          row.kind === "best"
                            ? "#92400E"
                            : row.kind === "oracle"
                              ? "#9CA3AF"
                              : row.kind === "ref"
                                ? "#6B7280"
                                : "#111827",
                        fontSize: row.kind === "best" ? 21 : 20,
                      }}
                    >
                      {row.kind === "best" && (
                        <span style={{ color: "#EAB308", marginRight: 4 }}>★</span>
                      )}
                      {row.backbone.replace(" ★", "")}
                    </td>

                    {/* Direct CCC */}
                    <td
                      style={{
                        ...numericCell,
                        color: row.directCcc === "–" ? "#D1D5DB" : "#374151",
                        fontSize: row.directCcc === "–" ? 24 : 20,
                      }}
                    >
                      {row.directCcc}
                    </td>

                    {/* Hybrid CCC */}
                    <td
                      style={{
                        ...numericCell,
                        ...(row.kind === "best"
                          ? { color: "#059669", fontWeight: 900, fontSize: 22 }
                          : row.kind === "oracle"
                            ? { color: "#9CA3AF", fontStyle: "italic" }
                            : {}),
                      }}
                    >
                      {row.hybridCcc}
                    </td>

                    {/* how much the emotion step helps */}
                    <td
                      style={{
                        ...numericCell,
                        color: getEmotionColor(row.emotionAdds),
                        fontWeight: row.emotionAdds ? 800 : 400,
                      }}
                    >
                      {row.emotionAdds || "—"}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* ── Callout Row ── */}
        <div style={{ display: "flex", gap: 16 }}>
          {/* Callout 1: Green — best backbone */}
          <motion.div
            {...fadeInUp(0.75)}
            style={{
              flex: 1,
              background: "rgba(16, 185, 129, 0.04)",
              border: "1px solid rgba(16, 185, 129, 0.15)",
              borderRadius: 14,
              padding: "18px 24px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: "#1E3A5F",
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              A small fine-tuned{" "}
              <strong style={{ color: "#059669" }}>CLIP (0.400)</strong> does
              better than the much larger frozen{" "}
              <strong style={{ color: "#6B7280" }}>Qwen3 (0.382)</strong>. We
              don't need a huge model to get good results.
            </div>
          </motion.div>

          {/* Callout 2: Purple — redundancy pattern */}
          <motion.div
            {...fadeInUp(0.85)}
            style={{
              flex: 1,
              background: "rgba(124, 58, 237, 0.04)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: 14,
              padding: "18px 24px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: "#1E3A5F",
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              <strong style={{ color: "#7C3AED" }}>
                A pattern worth noting:
              </strong>{" "}
              the stronger the backbone, the less the emotion step adds{" "}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 16,
                }}
              >
                (<span style={{ color: "#059669" }}>+0.073</span> →{" "}
                <span style={{ color: "#DC2626" }}>+0.006</span>)
              </span>
              . A good backbone already captures emotion on its own.
            </div>
          </motion.div>
        </div>

        {/* ── Data leak note ── */}
        <motion.div
          {...fadeInUp(0.95)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            background: "rgba(107, 114, 128, 0.04)",
            borderRadius: 10,
            border: "1px solid rgba(107, 114, 128, 0.1)",
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: "#6B7280",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            These numbers are leak-free: the people we test on are never used to
            build the training target.
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
