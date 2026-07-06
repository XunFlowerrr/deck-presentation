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
  { n: "10", median: "+0.001", win: "68.0%", effect: "0.38" },
  { n: "25", median: "+0.053", win: "78.3%", effect: "0.62" },
  { n: "50", median: "+0.058", win: "79.3%", effect: "0.64" },
  { n: "100", median: "+0.049", win: "80.1%", effect: "0.62" },
];

const HEADERS = ["n", "Median Δ", "Win %", "Effect r"];

function ResultTable({
  title,
  accent,
  rows,
}: {
  title: string;
  accent: string;
  rows: typeof CLIP_ROWS;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      }}
    >
      {/* Table title bar */}
      <div
        style={{
          padding: "10px 18px",
          background: `linear-gradient(135deg, ${accent}, ${accent}CC)`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.6)",
          }}
        />
        <span
          style={{
            fontSize: 16,
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
                  padding: "10px 12px",
                  fontSize: 13,
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
                    ? `${accent}08`
                    : "transparent",
                }}
              >
                {/* n */}
                <td
                  style={{
                    padding: "11px 12px",
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#111827",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {row.n}
                </td>
                {/* Median Δ */}
                <td
                  style={{
                    padding: "11px 12px",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#10B981",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {row.median}
                </td>
                {/* Win % */}
                <td
                  style={{
                    padding: "11px 12px",
                    fontSize: 16,
                    fontWeight: 800,
                    color: isHighlight ? accent : "#374151",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {row.win}
                </td>
                {/* Effect r */}
                <td
                  style={{
                    padding: "11px 12px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#4B5563",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {row.effect}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function WilcoxonWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1 — Result"
        title="Does emotion mediation"
        highlight="really help?"
        tagline="Wilcoxon signed-rank test evaluates whether routing predictions through emotions significantly improves CCC."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 700,
              color: "#4B5563",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Table 4 — Wilcoxon Signed-Rank Test Results (Comparing Hybrid vs Direct)
          </h4>
          
          {/* Tables side-by-side taking full width */}
          <div style={{ display: "flex", gap: 32 }}>
            <ResultTable
              title="CLIP Backbone (Direct vs Hybrid)"
              accent="#7C3AED"
              rows={CLIP_ROWS}
            />
            <ResultTable
              title="Qwen2-vision Backbone (Direct vs Hybrid)"
              accent="#3B82F6"
              rows={QWEN_ROWS}
            />
          </div>
        </div>

        {/* Key insight callout */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(59, 130, 246, 0.04))",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: 20,
            padding: "20px 28px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: "#7C3AED",
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Interpretation & Analysis
            </span>
            <ul
              style={{
                fontSize: 16,
                color: "#374151",
                margin: 0,
                lineHeight: 1.55,
                paddingLeft: 20,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <li>
                <strong>n</strong> is the number of personalization images per user (support size).
              </li>
              <li>
                <strong>Median Δ</strong> is the median of Hybrid minus Direct CCC score per user. Higher positive value means emotion mediation helps more (e.g. <strong>+0.071 CCC</strong> for CLIP at n=100).
              </li>
              <li>
                <strong>Win %</strong> is the percentage of users who see positive gains (Hybrid CCC &gt; Direct CCC). At n=100, it is <strong>91.7%</strong>, showing almost everyone benefits.
              </li>
              <li>
                <strong>Effect r</strong> is the Wilcoxon effect size showing how strong the difference is (0.3 = small, 0.5 = large). At n=100, we get <strong>0.82</strong>, which is extremely large.
              </li>
              <li>
                All results are statistically significant (Wilcoxon signed-rank test, <strong>p &lt; 0.001</strong>).
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
