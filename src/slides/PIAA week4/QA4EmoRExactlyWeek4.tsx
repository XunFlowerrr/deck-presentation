import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA4EmoRExactlyWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-4"
        title="QA-4: What Is emo_r "
        highlight="Exactly?"
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
            Formal Definition & Role of Emotion Predictability (emo_r)
          </h3>

          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "16px 20px",
              fontFamily: "monospace",
              fontSize: 15,
              fontWeight: 700,
              color: "#7C3AED",
            }}
          >
            {"emo_r(u) = (1/7) * sum_{e=1}^7 PearsonCorr( pred_emotion_e(u), true_emotion_e(u) )"}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Stage-1 Bottleneck</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#EC4899", marginTop: 4 }}>0.27</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>Mean emotion prediction accuracy</div>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Stage-2 Headroom</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#10B981", marginTop: 4 }}>0.693</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>P-oracle given true ground-truth emotions</div>
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
          <strong style={{ color: "#7C3AED" }}>The Fundamental Bottleneck: </strong>
          Stage 2 personal fitting is capable of achieving 0.69 CCC if given perfect emotion features. The performance limit of the entire pipeline is locked by Stage 1 image-to-emotion prediction quality (0.27).
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
        Q&A Slide — emo_r definition and bottleneck
      </motion.div>
    </SlideShell>
  );
}
