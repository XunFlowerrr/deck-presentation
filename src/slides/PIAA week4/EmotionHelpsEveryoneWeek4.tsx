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
        label="Part 2 — first answer"
        title="It helps "
        highlight="almost everyone."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 32,
          alignItems: "stretch",
          minHeight: 0,
        }}
      >
        {/* Left: Step-by-step story that annotates the chart */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>

          {/* Step 1: The zero line is the verdict */}
          <motion.div
            {...cardRise(0.12)}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5E7EB",
              borderRadius: 18,
              padding: "18px 22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              What the histogram shows
            </div>
            <p style={{ margin: 0, fontSize: 17, color: "#374151", fontWeight: 600, lineHeight: 1.5 }}>
              Each bar is one user × domain unit. Bars to the <strong style={{ color: "#7C3AED" }}>right of zero</strong> = emotion helped. Bars to the <strong style={{ color: "#EF4444" }}>left</strong> = emotion hurt.
            </p>
          </motion.div>

          {/* Step 2: The big number — the main finding */}
          <motion.div
            {...cardRise(0.22)}
            style={{
              background: "rgba(16, 185, 129, 0.04)",
              border: "1.5px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 18,
              padding: "18px 22px",
              boxShadow: "0 4px 16px rgba(16, 185, 129, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 52, fontWeight: 900, color: "#10B981", lineHeight: 1 }}>91.7%</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#374151" }}>of units sit right of zero</span>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              {[
                { label: "p-value", value: "< 0.001" },
                { label: "Median gain", value: "+0.071" },
                { label: "Effect r", value: "0.82" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 10,
                    padding: "8px 10px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: "#10B981", marginTop: 2 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step 3: The clue — left tail is NOT random */}
          <motion.div
            {...cardRise(0.34)}
            style={{
              background: "rgba(239, 68, 68, 0.03)",
              border: "1.5px solid rgba(239, 68, 68, 0.2)",
              borderRadius: 18,
              padding: "18px 22px",
              boxShadow: "0 4px 16px rgba(239, 68, 68, 0.03)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              The left tail (8.3%, 32 units)
            </div>
            <p style={{ margin: "0 0 10px", fontSize: 17, color: "#374151", fontWeight: 600, lineHeight: 1.5 }}>
              Not random. They cluster exactly where emotion prediction was poor:
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, background: "#FFFFFF", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>Left-tail avg emo_r</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#EF4444", marginTop: 2 }}>0.153</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 20, color: "#9CA3AF" }}>vs</div>
              <div style={{ flex: 1, background: "#FFFFFF", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>Rest avg emo_r</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#10B981", marginTop: 2 }}>0.283</div>
              </div>
            </div>
          </motion.div>

          {/* Step 4: The next question */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background: "rgba(124, 58, 237, 0.04)",
              border: "1.5px dashed rgba(124, 58, 237, 0.3)",
              borderRadius: 14,
              padding: "14px 18px",
            }}
          >
            <p style={{ margin: 0, fontSize: 16, color: "#7C3AED", fontWeight: 700, lineHeight: 1.45 }}>
              → So emotion accuracy (<strong>emo_r</strong>) seems to decide whether it helps or hurts. Is that true?
            </p>
          </motion.div>
        </div>

        {/* Right: Plot Image — wider and more prominent */}
        <motion.div
          {...cardRise(0.2)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <PlotImage
            src="/output/plots/emotion_help_hist.png"
            alt="Delta Hybrid-Direct CCC Distribution Histogram"
            fallbackTitle="Distribution of Delta (Hybrid - Direct CCC)"
            fallbackSubtitle="387 user-domain units — bars right of zero = emotion helped"
            fallbackStats={[
              { label: "Positive (right of zero)", value: "91.7%", color: "#10B981" },
              { label: "Negative (left tail)", value: "8.3%", color: "#EF4444" },
              { label: "Mean gain", value: "+0.073", color: "#7C3AED" },
            ]}
            maxHeight={480}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
