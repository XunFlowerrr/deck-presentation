import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "239, 68, 68", opacity: 0.06 },
  { bottom: -200, left: -100, size: 600, color: "16, 185, 129", opacity: 0.08 },
];

function Chip({ n, dup, color }: { n: string; dup?: boolean; color: string }) {
  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: 8,
        background: dup ? "rgba(239,68,68,0.12)" : `${color}12`,
        border: dup ? "2px solid #EF4444" : `1.5px solid ${color}55`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 800,
        color: dup ? "#DC2626" : color,
        position: "relative",
      }}
    >
      {n}
    </div>
  );
}

export function DedupProblemWeek4() {
  const base = Array.from({ length: 14 }, (_, i) => `img${i + 1}`);
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1 — Bug found"
        title="Same user, same image,"
        highlight="rated twice."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 6 }}>
        {/* why it exists */}
        <motion.div
          {...fadeInUp(0.1)}
          style={{
            background: "rgba(59,130,246,0.05)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 14,
            padding: "14px 22px",
            fontSize: 17,
            color: "#1E3A5F",
            lineHeight: 1.55,
          }}
        >
          The dataset intentionally re-shows a few images to the same user, to check
          how consistent people are with their own ratings — a test-retest design.
          About <strong>5% of ratings</strong> are these repeats, across all 129 users.
        </motion.div>

        {/* Visual: rows becoming 106 instead of 100 */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,0.08)",
            background: "#FFFFFF",
            boxShadow: "0 8px 28px rgba(0,0,0,0.03)",
            padding: "22px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {/* BEFORE row */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ background: "rgba(239,68,68,0.12)", color: "#DC2626", fontSize: 12, fontWeight: 800, padding: "3px 10px", borderRadius: 6, textTransform: "uppercase" }}>
                Before fix
              </span>
              <span style={{ fontSize: 15, color: "#374151" }}>
                Naively selecting a user's 100 training images
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              {base.map((b, i) => (
                <Chip key={b} n={`${i + 1}`} color="#3B82F6" dup={i === 3 || i === 9} />
              ))}
              <span style={{ fontSize: 22, color: "#D1D5DB", margin: "0 4px" }}>…</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 900, color: "#DC2626", fontFamily: "'JetBrains Mono', monospace" }}>106</span>
                <span style={{ fontSize: 14, color: "#9CA3AF" }}>rows loaded, not 100</span>
              </div>
            </div>
            <div style={{ fontSize: 13.5, color: "#6B7280", marginTop: 8 }}>
              Two of the images (outlined in red) each appear <strong>twice</strong> — the
              duplicate rating rows get pulled in alongside the originals.
            </div>
          </div>

          <div style={{ height: 1, background: "#F3F4F6" }} />

          {/* AFTER row */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ background: "rgba(16,185,129,0.12)", color: "#059669", fontSize: 12, fontWeight: 800, padding: "3px 10px", borderRadius: 6, textTransform: "uppercase" }}>
                After fix
              </span>
              <span style={{ fontSize: 15, color: "#374151" }}>
                Average the two ratings first, then pick 100 unique images
              </span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              {base.map((b, i) => (
                <Chip key={b} n={`${i + 1}`} color="#10B981" />
              ))}
              <span style={{ fontSize: 22, color: "#D1D5DB", margin: "0 4px" }}>…</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 900, color: "#059669", fontFamily: "'JetBrains Mono', monospace" }}>100</span>
                <span style={{ fontSize: 14, color: "#9CA3AF" }}>exactly, every user</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* two ways to dedup + measured impact */}
        <motion.div {...fadeInUp(0.55)} style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              flex: 1,
              background: "rgba(107,114,128,0.04)",
              border: "1px solid rgba(107,114,128,0.15)",
              borderRadius: 14,
              padding: "16px 22px",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 800, color: "#4B5563", marginBottom: 6 }}>
              Hayashi-san's code
            </div>
            <div style={{ fontSize: 16, color: "#374151", lineHeight: 1.5 }}>
              Keeps the <strong>first</strong> rating, drops the repeat.
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(16,185,129,0.04)",
              border: "1px solid rgba(16,185,129,0.15)",
              borderRadius: 14,
              padding: "16px 22px",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 800, color: "#059669", marginBottom: 6 }}>
              My fix
            </div>
            <div style={{ fontSize: 16, color: "#374151", lineHeight: 1.5 }}>
              <strong>Averages</strong> the two ratings — uses all the data instead of discarding it.
            </div>
          </div>
          <div
            style={{
              flex: 0.8,
              background: "rgba(124,58,237,0.05)",
              border: "1px solid rgba(124,58,237,0.15)",
              borderRadius: 14,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 2 }}>measured impact on CCC</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#7C3AED", fontFamily: "'JetBrains Mono', monospace" }}>+0.004</div>
            <div style={{ fontSize: 12, color: "#9CA3AF" }}>smaller than fold-to-fold noise</div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
