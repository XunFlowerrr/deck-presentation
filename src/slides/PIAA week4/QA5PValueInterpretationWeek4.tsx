import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA5PValueInterpretationWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Backup"
        title="What p = 0.056 "
        highlight="does and does not say."
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
            How should p = 0.056 in the interaction test be interpreted?
          </h3>

          <div
            style={{
              background: "rgba(239, 68, 68, 0.06)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: 14,
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", textTransform: "uppercase" }}>
              Interaction Test: delta ~ emo_r × domain
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#EF4444", marginTop: 4 }}>
              p = 0.056 (Not unlikely to be chance)
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#111827" }}>Formal Decision</div>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                We fail to reject the null hypothesis at alpha = 0.05. We do NOT have statistical evidence that the mechanism in art differs from fashion/landscape.
              </p>
            </div>

            <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#111827" }}>Scientific Nuance</div>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4B5563", lineHeight: 1.45 }}>
                Failing to reject null is NOT proof that the mechanisms are identical. It sits on the border, so we state it as inconclusive / favoring ceiling.
              </p>
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
          <strong style={{ color: "#7C3AED" }}>Methodological Rigor: </strong>
          Absence of evidence is not evidence of absence. We report p = 0.056 transparently without claiming definitive proof that art shares the exact same mechanism.
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
        Q&A Slide — Statistical p-value interpretation
      </motion.div>
    </SlideShell>
  );
}
