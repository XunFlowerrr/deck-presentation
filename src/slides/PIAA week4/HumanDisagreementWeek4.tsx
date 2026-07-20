import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function HumanDisagreementWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 1 — Noise Ceiling"
        title="Humans Disagree "
        highlight="With Themselves."
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
        {/* Left column: Key numbers & analysis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Main takeaway card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              Built-in Test-Retest Design
            </div>
            <p style={{ margin: 0, fontSize: 16, color: "#374151", lineHeight: 1.5 }}>
              The dataset shown to users includes repeated pairs: users rated the <strong>SAME image twice</strong> under identical conditions.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(124, 58, 237, 0.08)",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                color: "#7C3AED",
                marginTop: 14,
              }}
            >
              4,509 Repeated Pairs Analyzed
            </div>
          </motion.div>

          {/* Large statistic box */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: 18,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>Human Self-Agreement</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#7C3AED", lineHeight: 1.1 }}>
                  CCC = 0.693
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>Exact Score Consistency</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#EC4899" }}>
                  44%
                </div>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.45 }}>
              People gave the exact same score only 44% of the time. The P-oracle (0.725) sits <strong>ABOVE human self-agreement</strong> because emotions & scores share same-session state noise.
            </p>
          </motion.div>

          {/* Honest ceiling impact */}
          <motion.div
            {...fadeInUp(0.45)}
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
            <strong style={{ color: "#7C3AED" }}>Honest Upper Bound: </strong>
            Real noise ceiling is ~<strong>0.69</strong> (not 0.725). Measured against 0.69, our model's 0.400 achieves <strong>~58%</strong> of maximum reachable performance!
          </motion.div>
        </div>

        {/* Right column: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/noise_ceiling_bar.png"
            alt="Noise Ceiling Comparison Bar Chart"
            fallbackTitle="Noise Ceiling Comparison"
            fallbackSubtitle="Comparing Model CCC (0.400) vs Human Self-Agreement (0.693) vs P-Oracle (0.725)"
            fallbackStats={[
              { label: "Model CCC", value: "0.400", color: "#3B82F6" },
              { label: "Human Self-Agreement", value: "0.693", color: "#7C3AED" },
              { label: "P-Oracle (Inflated)", value: "0.725", color: "#EC4899" },
            ]}
            maxHeight={420}
          />
        </motion.div>
      </div>

      {/* Definition box corner */}
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
        }}
      >
        <strong style={{ color: "#374151" }}>test-retest</strong> = same user, same image, rated twice (built into the dataset design)
      </motion.div>
    </SlideShell>
  );
}
