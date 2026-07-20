import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function WhichImagesBenefitWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — Image Level Analysis"
        title="Which Images "
        highlight="Benefit?"
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
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              Grouped by Dominant Evoked Emotion
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(16, 185, 129, 0.08)", borderRadius: 8 }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>Distasteful</span>
                <span style={{ fontWeight: 800, color: "#10B981" }}>+0.043 (helps most)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#F9FAFB", borderRadius: 8 }}>
                <span style={{ fontWeight: 600, color: "#374151" }}>Impressed</span>
                <span style={{ fontWeight: 700, color: "#7C3AED" }}>+0.021</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#F9FAFB", borderRadius: 8 }}>
                <span style={{ fontWeight: 600, color: "#374151" }}>Amused</span>
                <span style={{ fontWeight: 700, color: "#7C3AED" }}>+0.014</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#F9FAFB", borderRadius: 8 }}>
                <span style={{ fontWeight: 600, color: "#374151" }}>Nostalgic</span>
                <span style={{ fontWeight: 700, color: "#7C3AED" }}>+0.006</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(239, 68, 68, 0.06)", borderRadius: 8 }}>
                <span style={{ fontWeight: 600, color: "#374151" }}>Intellectual</span>
                <span style={{ fontWeight: 800, color: "#EF4444" }}>+0.001 (helps least)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(239, 68, 68, 0.25)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#EF4444", textTransform: "uppercase" }}>
              Stability Hypothesis & Power Limit
            </div>
            <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.45 }}>
              Hypothesis: Images evoking stable/consistent emotions benefit more.
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F3F4F6", padding: "10px 14px", borderRadius: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#4B5563" }}>Spearman r = +0.39, n = 7</span>
              <span style={{ fontSize: 14, fontWeight: 900, color: "#EF4444" }}>p = 0.38 (INCONCLUSIVE)</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 12,
              padding: "12px 16px",
              fontSize: 13,
              color: "#374151",
              lineHeight: 1.4,
            }}
          >
            <strong style={{ color: "#EF4444" }}>Honest Reporting: </strong>
            With only n=7 emotion categories, the statistical test lacks sufficient power. Direction matches hypothesis (+0.39), but result must be reported as inconclusive.
          </motion.div>
        </div>

        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/emotion_help_by_emotion.png"
            alt="Delta gain breakdown by dominant emotion"
            fallbackTitle="Average Delta Gain by Dominant Emotion Category"
            fallbackSubtitle="Ranks from Distasteful (+0.043) down to Intellectual (+0.001)"
            fallbackStats={[
              { label: "Top Benefit", value: "Distasteful (+0.043)", color: "#10B981" },
              { label: "Lowest Benefit", value: "Intellectual (+0.001)", color: "#EF4444" },
              { label: "Spearman Test", value: "r=+0.39 (p=0.38 ns)", color: "#F59E0B" },
            ]}
            maxHeight={410}
          />
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.6)}
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
        Unit of analysis changed from 129 users to 6,526 images categorized by dominant emotion label
      </motion.div>
    </SlideShell>
  );
}
