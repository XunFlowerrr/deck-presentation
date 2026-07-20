import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function EmotionHelpsEveryoneWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — User Level Finding"
        title="It Helps "
        highlight="Almost Everyone."
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
        {/* Left: Big numbers & stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* 91.7% card */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(124, 58, 237, 0.05))",
              border: "2px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 20,
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: "#10B981", lineHeight: 1 }}>
              91.7%
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
                of users benefit from emotion-mediation
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6B7280" }}>
                355 out of 387 user-domain units gained positive delta (Hybrid &gt; Direct)
              </p>
            </div>
          </motion.div>

          {/* Key statistical metrics grid */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 14,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Median Gain</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#7C3AED", marginTop: 4 }}>
                +0.071
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 14,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Wilcoxon Test</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#EC4899", marginTop: 4 }}>
                p &lt; 0.001
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 14,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>Effect Size</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#06B6D4", marginTop: 4 }}>
                r = 0.82
              </div>
            </div>
          </motion.div>

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
            <strong style={{ color: "#7C3AED" }}>Broad Population Effect: </strong>
            Emotion mediation provides a consistent, highly statistically significant improvement across almost the entire dataset, rather than being driven by a small outlier subset.
          </motion.div>
        </div>

        {/* Right: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emotion_help_hist.png"
            alt="Delta Hybrid-Direct CCC Distribution Histogram"
            fallbackTitle="Distribution of Delta (Hybrid - Direct CCC)"
            fallbackSubtitle="Histogram showing 91.7% of 387 user-domain units strictly above 0"
            fallbackStats={[
              { label: "Positive Benefit Share", value: "91.7%", color: "#10B981" },
              { label: "Median Gain", value: "+0.071", color: "#7C3AED" },
              { label: "Effect Size r", value: "0.82 (Large)", color: "#06B6D4" },
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
          padding: "8px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        <strong style={{ color: "#374151" }}>Wilcoxon signed-rank</strong> = paired, non-parametric test (assumes no normal distribution)
      </motion.div>
    </SlideShell>
  );
}
