import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.16 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.12 },
];

export function WhatDecidesWhoWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Main finding"
        title="Who does it help, "
        highlight="and why?"
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          minHeight: 0,
          paddingBottom: 40,
        }}
      >
        {/* Top: Hypothesis & Summary Banner */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(236, 72, 153, 0.04))",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: 16,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Our guess before testing
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginTop: 2 }}>
              Emotions should help more when we guess that person's feelings well — and hurt when we guess them badly.
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: "8px 16px",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 11, color: "#6B7280" }}>Across all 387 users</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#7C3AED" }}>
              r = +0.30 &nbsp;(p = 1e-9)
            </div>
          </div>
        </motion.div>

        {/* Middle: Quartile Grid comparison + Plot Image */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 28,
            alignItems: "center",
            minHeight: 0,
          }}
        >
          {/* Left Quartile Breakdown */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <motion.div
              {...cardRise(0.25)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 14,
                padding: "22px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase" }}>Hardest to read (bottom 25%)</span>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#4B5563" }}>emo_r ≈ 0.09</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#F59E0B" }}>+0.040 gain</div>
                <div style={{ fontSize: 13, color: "#6B7280" }}>80% helped</div>
              </div>
            </motion.div>

            <motion.div
              {...cardRise(0.35)}
              style={{
                background: "#FFFFFF",
                border: "2px solid rgba(124, 58, 237, 0.3)",
                borderRadius: 14,
                padding: "22px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 16px rgba(124, 58, 237, 0.08)",
              }}
            >
              <div>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>Easiest to read (top 25%)</span>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>emo_r ≈ 0.45</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#10B981" }}>+0.092 gain</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#10B981" }}>97% helped</div>
              </div>
            </motion.div>

            {/* Failure case callout */}
            <motion.div
              {...fadeInUp(0.45)}
              style={{
                background: "rgba(239, 68, 68, 0.04)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                borderRadius: 14,
                padding: "18px 22px",
                fontSize: 15,
                color: "#7F1D1D",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "#EF4444" }}>The 32 users it made worse: </strong>
              for them we read feelings at only <strong>0.15</strong>, against <strong>0.28</strong> for
              everyone else. Emotions hurt exactly where we read them badly.
            </motion.div>
          </div>

          {/* Right: Full width plot */}
          <motion.div {...cardRise(0.3)}>
            <PlotImage
              src="/output/plots/emo_r_quartile.png"
              alt="Gain by emo_r Quartiles Boxplot / Bar Plot"
              fallbackTitle="How much emotions help, by how well we read them"
              fallbackSubtitle="Gain rises steadily from +0.040 to +0.092"
              fallbackStats={[
                { label: "Q1 Gain", value: "+0.040", color: "#F59E0B" },
                { label: "Q4 Gain", value: "+0.092", color: "#10B981" },
                { label: "Spearman r", value: "+0.30", color: "#7C3AED" },
              ]}
              maxHeight={520}
            />
          </motion.div>
        </div>
      </div>

      {/* Small definition box at bottom right */}
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
        <strong style={{ color: "#374151" }}>emo_r</strong> = how well we guess this person's feelings (average match across the 7 emotions, 0–1)
      </motion.div>
    </SlideShell>
  );
}
