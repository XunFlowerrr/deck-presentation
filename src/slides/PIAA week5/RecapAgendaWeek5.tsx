import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function RecapAgendaWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Recap & Agenda"
        title="Previous Finding & "
        highlight="Today's Goals."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {/* Top Section: Last Time */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "rgba(124, 58, 237, 0.03)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: 18,
            padding: "24px 28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            }}
          >
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
              Last Time (Update #3)
            </span>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
              Baseline Performance & Qwen Findings
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>Strongest Overall Baseline</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#10B981" }}>
                Fine-tuned CLIP remains our highest performing model (CCC ≈ 0.400).
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>Qwen3-VL Finding (Ryu & Yanaka)</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#7C3AED" }}>
                Tested 8B: The stronger the backbone, the smaller the Hybrid−Direct gap.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Today's Agenda */}
        <motion.div
          {...cardRise(0.35)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 18,
            padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ marginBottom: 16 }}>
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
              Today (Update #4)
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 900, color: "#EC4899", lineHeight: 1 }}>01</span>
              <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#111827" }}>
                Qwen3-VL-4B Model
              </h4>
              <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.4 }}>
                Testing the smaller 4B model recommended in Ryu & Yanaka to check compute vs accuracy.
              </p>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 900, color: "#7C3AED", lineHeight: 1 }}>02</span>
              <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#111827" }}>
                Mechanism Breakdown
              </h4>
              <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.4 }}>
                In which cases does emotion help users, and in which cases does it hurt?
              </p>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 900, color: "#06B6D4", lineHeight: 1 }}>03</span>
              <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#111827" }}>
                Noise Ceiling Analysis
              </h4>
              <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.4 }}>
                Uncovering the true upper bound by accounting for human self-agreement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Baseline paper: Ryu & Yanaka (2024) · Dataset: Hayashi-san et al. (XPASS-Vis)
      </motion.div>
    </SlideShell>
  );
}
