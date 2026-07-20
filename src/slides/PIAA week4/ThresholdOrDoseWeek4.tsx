import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function ThresholdOrDoseWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — is there a cut-off?"
        title="How good must the "
        highlight="emotion guess be?"
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left column: Key analysis & argument */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Question & Answer card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "22px 26px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <h4 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: "#111827" }}>
              Is there an accuracy cut-off below which emotion isn't worth it?
            </h4>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(239, 68, 68, 0.08)",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                color: "#EF4444",
                marginBottom: 10,
              }}
            >
              No Threshold in Our Data
            </div>
            <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.5 }}>
              Even the group we read worst still gains <strong>+0.031</strong> on average. The fitted line only reaches zero at <strong>emo_r = −0.29</strong>, which is below anything we actually see in the data.
            </p>
          </motion.div>

          {/* Dose-Response core model */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(6, 182, 212, 0.05))",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: 18,
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Dose-Response Model
            </div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
              <span style={{ color: "#7C3AED" }}>emo_r</span> controls HOW MUCH it helps and HOW RISKY it is
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
              <div style={{ background: "#FFFFFF", padding: "12px", borderRadius: 12, border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Worst Quartile Risk</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#EF4444" }}>31% hurt</div>
              </div>
              <div style={{ background: "#FFFFFF", padding: "12px", borderRadius: 12, border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Best Quartile Risk</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#10B981" }}>3% hurt</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "14px 18px",
              fontSize: 13,
              color: "#374151",
              lineHeight: 1.45,
            }}
          >
            <strong style={{ color: "#7C3AED" }}>Conclusion: </strong>
            Higher emotion accuracy increases expected gain while minimizing risk of negative delta, but emotion mediation remains net positive across all observed emotion accuracy ranges.
          </motion.div>
        </div>

        {/* Right: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emo_r_threshold.png"
            alt="emo_r vs Delta Regression Fitted Line"
            fallbackTitle="Dose-Response Regression: Delta vs emo_r"
            fallbackSubtitle="Linear fit shows positive gain throughout, zero-crossing at -0.29"
            fallbackStats={[
              { label: "Line reaches zero at", value: "emo_r = −0.29", color: "#EF4444" },
              { label: "Worst group: made worse", value: "31% of users", color: "#F59E0B" },
              { label: "Best group: made worse", value: "3% of users", color: "#10B981" },
            ]}
            maxHeight={400}
          />
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
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        In other words: reading feelings better does not switch the benefit on — it just makes it bigger, and safer.
      </motion.div>
    </SlideShell>
  );
}
