import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -200, right: -100, size: 600, color: "59, 130, 246", opacity: 0.1 },
];

const CLIP_ROWS = [
  { n: "10", median: "+0.007", win: "68.0%", effect: "0.36" },
  { n: "25", median: "+0.057", win: "84.0%", effect: "0.70" },
  { n: "50", median: "+0.067", win: "89.9%", effect: "0.79" },
  { n: "100", median: "+0.071", win: "91.7%", effect: "0.82" },
];

const QWEN_ROWS = [
  { n: "10", median: "+0.004", win: "65.6%", effect: "0.29" },
  { n: "25", median: "+0.031", win: "80.6%", effect: "0.60" },
  { n: "50", median: "+0.045", win: "85.5%", effect: "0.73" },
  { n: "100", median: "+0.032", win: "82.9%", effect: "0.69" },
];

const HEADERS = ["n", "median Δ", "Hybrid win %", "effect r"];

function ResultTable({
  title,
  accent,
  rows,
  delay,
}: {
  title: string;
  accent: string;
  rows: typeof CLIP_ROWS;
  delay: number;
}) {
  return (
    <motion.div
      {...cardRise(delay)}
      style={{
        flex: 1,
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      }}
    >
      {/* Table title bar */}
      <div
        style={{
          padding: "14px 24px",
          background: `linear-gradient(135deg, ${accent}, ${accent}CC)`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
          }}
        />
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "0.03em",
          }}
        >
          {title}
        </span>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ background: "#1F2937" }}>
            {HEADERS.map((h) => (
              <th
                key={h}
                style={{
                  padding: "14px 16px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isHighlight = row.n === "100";
            return (
              <tr
                key={row.n}
                style={{
                  borderBottom:
                    idx === rows.length - 1 ? "none" : "1px solid #F3F4F6",
                  background: isHighlight
                    ? `${accent}0A`
                    : "transparent",
                }}
              >
                <td
                  style={{
                    padding: "16px",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#111827",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  {row.n}
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#10B981",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  {row.median}
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: isHighlight ? accent : "#374151",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  {row.win}
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#4B5563",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  {row.effect}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}

export function WilcoxonWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1 — Result"
        title="Does emotion mediation"
        highlight="really help?"
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          justifyContent: "center",
        }}
      >
        {/* Side-by-side tables */}
        <div style={{ display: "flex", gap: 28 }}>
          <ResultTable
            title="CLIP"
            accent="#7C3AED"
            rows={CLIP_ROWS}
            delay={0.15}
          />
          <ResultTable
            title="Qwen2-vision"
            accent="#3B82F6"
            rows={QWEN_ROWS}
            delay={0.25}
          />
        </div>

        {/* Key insight callout */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(59, 130, 246, 0.04))",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: 20,
            padding: "24px 32px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 28,
              lineHeight: 1,
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            💡
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#7C3AED",
              }}
            >
              Key Insight
            </span>
            <p
              style={{
                fontSize: 17,
                color: "#374151",
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              Both lines near zero at <strong>n=10</strong>, jump at{" "}
              <strong>n=25</strong>, stay high. CLIP benefits more than Qwen2
              because CLIP's direct version is weaker (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontWeight: 700,
                  color: "#7C3AED",
                }}
              >
                0.293
              </span>{" "}
              vs{" "}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontWeight: 700,
                  color: "#3B82F6",
                }}
              >
                0.321
              </span>
              ), so there is more room for the emotion pathway to add value. All{" "}
              <strong>p &lt; 0.001</strong> (Wilcoxon signed-rank test).
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
