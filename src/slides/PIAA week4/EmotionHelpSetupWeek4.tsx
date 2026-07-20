import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function EmotionHelpSetupWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — Analytical Setup"
        title="What We "
        highlight="Measure."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left: Dependent Variable (delta) */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 20,
            padding: "32px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#7C3AED",
                background: "rgba(124, 58, 237, 0.1)",
                padding: "4px 12px",
                borderRadius: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Dependent Variable
            </span>
            <h3 style={{ margin: "10px 0 0", fontSize: 24, fontWeight: 800, color: "#111827" }}>
              Delta (<span style={{ color: "#7C3AED" }}>delta</span>)
            </h3>
          </div>

          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "16px 20px",
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: 700,
              color: "#111827",
              textAlign: "center",
            }}
          >
            delta = Hybrid CCC − Direct CCC
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#10B981" }}>positive delta</span>
              <div style={{ fontSize: 13, color: "#065F46", marginTop: 2 }}>Emotion helped</div>
            </div>
            <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#EF4444" }}>negative delta</span>
              <div style={{ fontSize: 13, color: "#991B1B", marginTop: 2 }}>Emotion hurt</div>
            </div>
          </div>

          <div style={{ fontSize: 14, color: "#6B7280", textAlign: "center" }}>
            129 users × 3 domains = <strong style={{ color: "#111827" }}>387 units</strong> to analyze
          </div>
        </motion.div>

        {/* Right: Key Independent Variable (emo_r) */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            background: "#FFFFFF",
            border: "2px solid rgba(236, 72, 153, 0.25)",
            borderRadius: 20,
            padding: "32px 28px",
            boxShadow: "0 8px 30px rgba(236, 72, 153, 0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#EC4899",
                background: "rgba(236, 72, 153, 0.1)",
                padding: "4px 12px",
                borderRadius: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Key Independent Variable
            </span>
            <h3 style={{ margin: "10px 0 0", fontSize: 24, fontWeight: 800, color: "#111827" }}>
              Emotion Predictability (<span style={{ color: "#EC4899" }}>emo_r</span>)
            </h3>
          </div>

          <p style={{ margin: 0, fontSize: 15, color: "#4B5563", lineHeight: 1.5 }}>
            Measures how accurately Stage 1 predicts <strong>THIS specific user's</strong> 7 emotions:
          </p>

          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "16px 20px",
              fontFamily: "monospace",
              fontSize: 15,
              fontWeight: 700,
              color: "#111827",
              textAlign: "center",
            }}
          >
            emo_r = mean correlation(predicted, actual) across 7 emotions
          </div>

          {/* Dataset mean callout */}
          <div
            style={{
              background: "rgba(236, 72, 153, 0.06)",
              border: "1px border rgba(236, 72, 153, 0.2)",
              borderRadius: 14,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Dataset Mean emo_r</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#EC4899" }}>0.27</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#EC4899", maxWidth: 200, textAlign: "right" }}>
              System-wide Bottleneck
            </div>
          </div>
        </motion.div>
      </div>

      {/* Small definition box at bottom right */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "8px 14px",
          fontSize: 11,
          color: "#6B7280",
          maxWidth: 520,
        }}
      >
        Both settings use the SAME user, SAME images, SAME fold. No retraining — secondary analysis of existing results.
      </motion.div>
    </SlideShell>
  );
}
