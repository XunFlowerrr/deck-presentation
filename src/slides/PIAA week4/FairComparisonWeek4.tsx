import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "16, 185, 129", opacity: 0.1 },
];

const TABLE_ROWS = [
  { model: "P-oracle (ceiling)", art: "0.725", fashion: "0.715", landscape: "0.734", avg: "0.725", style: "oracle" },
  { model: "ICI (Hiyoshi-san)",  art: "0.480", fashion: "0.315", landscape: "0.430", avg: "0.409", style: "baseline" },
  { model: "MIR (Hiyoshi-san)",  art: "0.484", fashion: "0.313", landscape: "0.435", avg: "0.411", style: "baseline" },
  { model: "Ours: CLIP Hybrid",  art: "0.456", fashion: "0.264", landscape: "0.377", avg: "0.366", style: "ours" },
  { model: "Ours: CLIP Direct",  art: "0.384", fashion: "0.202", landscape: "0.292", avg: "0.293", style: "ours" },
];

const ROW_BG: Record<string, string> = {
  oracle: "rgba(124, 58, 237, 0.05)",
  baseline: "#fff",
  ours: "rgba(59, 130, 246, 0.05)",
};

export function FairComparisonWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1"
        title="Making the comparison "
        highlight="fair."
      />

      {/* ── Before / After cards ── */}
      <motion.div
        {...fadeInUp}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          marginTop: 36,
        }}
      >
        {/* BEFORE */}
        <div
          style={{
            background: "rgba(239, 68, 68, 0.04)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
            borderRadius: 20,
            padding: "28px 30px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(239, 68, 68, 0.12)",
              color: "#EF4444",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 8,
              padding: "4px 14px",
              marginBottom: 14,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            Before
          </div>
          <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#111827" }}>
            Random split, seed=42
          </h4>
          <p style={{ margin: "10px 0 0", fontSize: 19, lineHeight: 1.55, color: "#4B5563" }}>
            Same <strong>COUNT</strong> (100/50) but different <strong>IMAGES</strong> than ICI/MIR.
          </p>
        </div>

        {/* AFTER */}
        <div
          style={{
            background: "rgba(16, 185, 129, 0.04)",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            borderRadius: 20,
            padding: "28px 30px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(16, 185, 129, 0.12)",
              color: "#10B981",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 8,
              padding: "4px 14px",
              marginBottom: 14,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            After
          </div>
          <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#111827" }}>
            Read train_PIAA.txt / test_PIAA.txt directly
          </h4>
          <p style={{ margin: "10px 0 0", fontSize: 19, lineHeight: 1.55, color: "#4B5563" }}>
            Same images as ICI/MIR. Also found &amp; fixed duplicate ratings (test-retest) → averaged them.
          </p>
        </div>
      </motion.div>

      {/* ── Table ── */}
      <motion.div
        {...cardRise}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        style={{ marginTop: 32 }}
      >
        <h4
          style={{
            margin: "0 0 14px",
            fontSize: 18,
            fontWeight: 600,
            color: "#6B7280",
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
                  fontSize: 17,
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "14px 20px", width: "34%" }}>Model</th>
                <th style={{ padding: "14px 20px", textAlign: "center" }}>art</th>
                <th style={{ padding: "14px 20px", textAlign: "center" }}>fashion</th>
                <th style={{ padding: "14px 20px", textAlign: "center" }}>landscape</th>
                <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 800 }}>avg</th>
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
                  <td
                    style={{
                      padding: "13px 20px",
                      fontSize: 19,
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    {row.model}
                  </td>
                  {[row.art, row.fashion, row.landscape, row.avg].map(
                    (val, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "13px 20px",
                          fontSize: 19,
                          fontFamily: "'JetBrains Mono', monospace",
                          textAlign: "center",
                          color: j === 3 ? "#111827" : "#374151",
                          fontWeight: j === 3 ? 700 : 500,
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
