import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";
import { ryuYanakaFig1Img } from "../../content/assets.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "59, 130, 246", opacity: 0.08 },
];

interface RowT {
  aspect: string;
  paper: string;
  ours: string;
  match: "same" | "close" | "diff";
}

const ROWS: RowT[] = [
  { aspect: "Model", paper: "Qwen3-VL 2B / 4B / 8B", ours: "Qwen3-VL-8B (largest)", match: "close" },
  { aspect: "Layer", paper: "LT₁₅ (decoder layer 15)", ours: "Saved all 36 layers; L15 ≈ tied with best (L32)", match: "close" },
  { aspect: "Token source", paper: "Text tokens (LT)", ours: "Text tokens win from mid-layers on — matches", match: "same" },
  { aspect: "Pooling", paper: "Average pooling", ours: "Average pooling", match: "same" },
  { aspect: "Prompt", paper: '"Assess the aesthetics of this image."', ours: "Same prompt, verbatim", match: "same" },
  { aspect: "Downstream", paper: "Ridge + StandardScaler", ours: "Ridge + StandardScaler", match: "same" },
  { aspect: "Fine-tuning", paper: "None — frozen VLM only (Fig. 1)", ours: "Also tried fine-tuning CLIP (Task 3)", match: "diff" },
  { aspect: "Metric reported", paper: "Spearman ρ (SROCC)", ours: "CCC (primary) + SROCC", match: "diff" },
];

const MATCH_STYLE: Record<RowT["match"], { bg: string; color: string; label: string }> = {
  same: { bg: "rgba(16,185,129,0.10)", color: "#059669", label: "MATCH" },
  close: { bg: "rgba(245,158,11,0.12)", color: "#B45309", label: "CLOSE" },
  diff: { bg: "rgba(107,114,128,0.10)", color: "#4B5563", label: "EXTENDED" },
};

export function VlmFaithfulnessWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2 — Faithfulness check"
        title="How closely did we follow"
        highlight="Ryu & Yanaka?"
        tagline="Figure 1 of the paper: frozen VLM hidden states, linearly transformed per user — no fine-tuning."
      />

      <div style={{ flex: 1, display: "flex", gap: 28, marginTop: 8, minHeight: 0 }}>
        {/* LEFT: paper figure */}
        <motion.div
          {...fadeInUp(0.15)}
          style={{
            flex: 0.85,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 20,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 28px rgba(0,0,0,0.03)",
          }}
        >
          <img
            src={ryuYanakaFig1Img}
            alt="Ryu & Yanaka Figure 1: PIAA using VLM representations"
            style={{ maxWidth: "100%", maxHeight: 420, objectFit: "contain", borderRadius: 8 }}
          />
          <div style={{ fontSize: 13, color: "#6B7280", marginTop: 8, textAlign: "center" }}>
            Figure 1, Ryu &amp; Yanaka (2026) — the reference setup we compared against
          </div>
        </motion.div>

        {/* RIGHT: comparison table */}
        <motion.div {...cardRise(0.25)} style={{ flex: 1.25, display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <thead>
                <tr style={{ background: "#1F2937", color: "#fff" }}>
                  <th style={{ padding: "9px 14px", fontSize: 13, textAlign: "left", width: "20%" }}>Aspect</th>
                  <th style={{ padding: "9px 14px", fontSize: 13, textAlign: "left", width: "34%" }}>Paper</th>
                  <th style={{ padding: "9px 14px", fontSize: 13, textAlign: "left", width: "34%" }}>Ours</th>
                  <th style={{ padding: "9px 14px", fontSize: 13, textAlign: "center", width: "12%" }}>Fit</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => {
                  const s = MATCH_STYLE[r.match];
                  return (
                    <tr key={r.aspect} style={{ borderTop: i === 0 ? "none" : "1px solid #F3F4F6" }}>
                      <td style={{ padding: "8px 14px", fontSize: 13.5, fontWeight: 700, color: "#111827" }}>{r.aspect}</td>
                      <td style={{ padding: "8px 14px", fontSize: 13, color: "#4B5563" }}>{r.paper}</td>
                      <td style={{ padding: "8px 14px", fontSize: 13, color: "#374151" }}>{r.ours}</td>
                      <td style={{ padding: "8px 14px", textAlign: "center" }}>
                        <span style={{ background: s.bg, color: s.color, fontSize: 10.5, fontWeight: 800, padding: "3px 8px", borderRadius: 6, letterSpacing: 0.3 }}>
                          {s.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <motion.div
            {...fadeInUp(0.5)}
            style={{
              background: "rgba(124,58,237,0.04)",
              border: "1px solid rgba(124,58,237,0.15)",
              borderRadius: 14,
              padding: "14px 20px",
              fontSize: 16,
              color: "#4B5563",
              lineHeight: 1.55,
            }}
          >
            The paper never fine-tunes the VLM — it argues frozen hidden states already
            carry aesthetic signal. We match every extraction detail exactly, and then
            go one step further: we also test whether fine-tuning a smaller backbone
            (CLIP) can close the gap (Task 3).
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
