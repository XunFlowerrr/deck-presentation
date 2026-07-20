import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA7FailureCasesWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-7"
        title="QA-7: Emotion Hurt "
        highlight="Failure Cases."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 18,
            padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
            Characterizing the 32 Failure Units Where Emotion Mediation Hurt (Negative Delta)
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Failure Proportion</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#EF4444", marginTop: 4 }}>32 / 387</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>8.3% of user-domain pairs</div>
            </div>

            <div style={{ background: "rgba(239, 68, 68, 0.06)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#991B1B", fontWeight: 600 }}>Mean emo_r (Hurt)</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#EF4444", marginTop: 4 }}>0.153</div>
              <div style={{ fontSize: 12, color: "#991B1B", marginTop: 4 }}>Significantly lower accuracy</div>
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#065F46", fontWeight: 600 }}>Mean emo_r (Helped)</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#10B981", marginTop: 4 }}>0.283</div>
              <div style={{ fontSize: 12, color: "#065F46", marginTop: 4 }}>High emotion accuracy</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#F9FAFB",
            border: "1px solid #F3F4F6",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 14,
            color: "#374151",
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: "#7C3AED" }}>Root Cause of Failure: </strong>
          Emotion mediation fails almost exclusively when Stage-1 emotion prediction fails to capture the user's emotion profile (emo_r ≤ 0.15). Feeding inaccurate emotion predictions into Stage 2 injects noise into personal rating predictions.
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.5)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Q&A Slide — Negative delta failure case analysis
      </motion.div>
    </SlideShell>
  );
}
