import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "16, 185, 129", opacity: 0.1 },
];

const TABLE_ROWS = [
  { group: "Ceiling", model: "P-oracle (ceiling)", art: "0.725", fashion: "0.715", landscape: "0.734", avg: "0.725", style: "oracle", badgeColor: "#7C3AED" },
  { group: "Baseline", model: "ICI (Hiyoshi-san)",  art: "0.480", fashion: "0.315", landscape: "0.430", avg: "0.409", style: "baseline", badgeColor: "#4B5563" },
  { group: "Baseline", model: "MIR (Hiyoshi-san)",  art: "0.484", fashion: "0.313", landscape: "0.435", avg: "0.411", style: "baseline", badgeColor: "#4B5563" },
  { group: "Ours", model: "Ours: CLIP Hybrid",  art: "0.456", fashion: "0.264", landscape: "0.377", avg: "0.366", style: "ours", badgeColor: "#10B981" },
  { group: "Ours", model: "Ours: CLIP Direct",  art: "0.384", fashion: "0.202", landscape: "0.292", avg: "0.293", style: "ours", badgeColor: "#10B981" },
];

const ROW_BG: Record<string, string> = {
  oracle: "rgba(124, 58, 237, 0.04)",
  baseline: "#fff",
  ours: "rgba(16, 185, 129, 0.03)",
};

export function FairComparisonWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1"
        title="Making the comparison "
        highlight="fair."
        tagline="Aligning the data split and resolving duplicates to make the baseline comparison valid."
      />

      {/* ── Before / After cards ── */}
      <motion.div
        {...fadeInUp(0.1)}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          marginTop: 20,
        }}
      >
        {/* BEFORE */}
        <div
          style={{
            background: "rgba(239, 68, 68, 0.03)",
            border: "1.5px solid rgba(239, 68, 68, 0.15)",
            borderRadius: 20,
            padding: "24px 28px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(239, 68, 68, 0.1)",
              color: "#EF4444",
              fontWeight: 800,
              fontSize: 13,
              borderRadius: 8,
              padding: "4px 12px",
              marginBottom: 10,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            Before: Unaligned Data Split
          </div>
          <h4 style={{ margin: 0, fontSize: 21, fontWeight: 800, color: "#111827" }}>
            Random split, seed=42
          </h4>
          <p style={{ margin: "8px 0 0", fontSize: 18, lineHeight: 1.5, color: "#4B5563" }}>
            Had the same <strong>COUNT</strong> (100 train / 50 test) but used completely different <strong>IMAGES</strong> than ICI/MIR, making direct comparison invalid.
          </p>
        </div>

        {/* AFTER */}
        <div
          style={{
            background: "rgba(16, 185, 129, 0.03)",
            border: "1.5px solid rgba(16, 185, 129, 0.15)",
            borderRadius: 20,
            padding: "24px 28px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(16, 185, 129, 0.12)",
              color: "#10B981",
              fontWeight: 800,
              fontSize: 13,
              borderRadius: 8,
              padding: "4px 12px",
              marginBottom: 10,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            After: Aligned Split & Deduplication
          </div>
          <h4 style={{ margin: 0, fontSize: 21, fontWeight: 800, color: "#111827" }}>
            Read train_PIAA.txt / test_PIAA.txt directly
          </h4>
          <p style={{ margin: "8px 0 0", fontSize: 18, lineHeight: 1.5, color: "#4B5563" }}>
            Guarantees exact image alignment. Identified and fixed a <strong>test-retest duplication issue</strong> by averaging repeated ratings instead of pulling double rows.
          </p>
        </div>
      </motion.div>

      {/* ── Table ── */}
      <motion.div
        {...cardRise(0.25)}
        style={{ marginTop: 24 }}
      >
        <h4
          style={{
            margin: "0 0 10px",
            fontSize: 16,
            fontWeight: 700,
            color: "#4B5563",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Table 1 — Fair comparison, CCC by domain (n_train=100)
        </h4>

        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
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
              <tr
                style={{
                  background: "#1F2937",
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "12px 20px", width: "16%" }}>Type</th>
                <th style={{ padding: "12px 20px", width: "24%" }}>Model</th>
                <th style={{ padding: "12px 20px", textAlign: "center", width: "15%" }}>art</th>
                <th style={{ padding: "12px 20px", textAlign: "center", width: "15%" }}>fashion</th>
                <th style={{ padding: "12px 20px", textAlign: "center", width: "15%" }}>landscape</th>
                <th style={{ padding: "12px 20px", textAlign: "center", width: "15%", fontWeight: 800 }}>avg</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: ROW_BG[row.style],
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Type Badge */}
                  <td style={{ padding: "10px 20px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        backgroundColor: `${row.badgeColor}18`,
                        color: row.badgeColor,
                        border: `1px solid ${row.badgeColor}30`,
                      }}
                    >
                      {row.group}
                    </span>
                  </td>
                  {/* Model Name */}
                  <td
                    style={{
                      padding: "10px 20px",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {row.model}
                  </td>
                  {/* Metrics */}
                  {[row.art, row.fashion, row.landscape, row.avg].map(
                    (val, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "10px 20px",
                          fontSize: 18,
                          fontFamily: "'JetBrains Mono', monospace",
                          textAlign: "center",
                          color: j === 3 ? "#111827" : "#374151",
                          fontWeight: j === 3 ? 800 : 500,
                          ...(j === 3 ? { backgroundColor: `${row.badgeColor}04` } : {}),
                        }}
                      >
                        {val}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SlideShell>
  );
}
