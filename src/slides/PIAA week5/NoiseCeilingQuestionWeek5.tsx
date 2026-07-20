import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function NoiseCeilingQuestionWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 1 — Noise Ceiling"
        title="Re-evaluating the "
        highlight="Upper Bound."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <motion.div
          {...cardRise(0.2)}
          style={{
            width: "100%",
            maxWidth: 1000,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 24,
            padding: "48px 56px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", gap: 32, justifyContent: "center" }}>
            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 16,
                padding: "20px 36px",
              }}
            >
              <div style={{ fontSize: 14, color: "#6B7280", fontWeight: 600, marginBottom: 4 }}>
                Reported Model CCC
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#7C3AED" }}>
                0.400
              </div>
            </div>

            <div style={{ fontSize: 32, fontWeight: 300, color: "#D1D5DB", alignSelf: "center" }}>
              vs
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 16,
                padding: "20px 36px",
              }}
            >
              <div style={{ fontSize: 14, color: "#6B7280", fontWeight: 600, marginBottom: 4 }}>
                P-Oracle Baseline ("Ceiling")
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#EC4899" }}>
                0.725
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 1,
              background: "#F3F4F6",
              margin: "4px 0",
            }}
          />

          <motion.h2
            {...fadeInUp(0.4)}
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            But is that ceiling <span style={{ color: "#7C3AED" }}>actually real?</span>
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 32,
          right: 48,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 12,
          padding: "10px 16px",
          fontSize: 12,
          color: "#6B7280",
          maxWidth: 420,
        }}
      >
        <strong style={{ color: "#374151" }}>P-oracle</strong> = the model given ground-truth user emotion ratings = supposed theoretical upper bound
      </motion.div>
    </SlideShell>
  );
}
