import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function Qwen4BComparisonWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 3 — Qwen3-VL-4B"
        title="Smaller Model: "
        highlight="Same or Better."
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
        {/* Left column: Findings & Model Comparison */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Motivation & Layer Sweep findings */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase" }}>
              Model Validation & Layer Sweeping
            </div>
            <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.45 }}>
              Ryu & Yanaka noted 4B performed best on AADB. We evaluated whether this holds on XPASS-Vis.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                background: "#F9FAFB",
                padding: "10px 14px",
                borderRadius: 12,
                fontSize: 13,
              }}
            >
              <div><strong style={{ color: "#7C3AED" }}>4B Best Layer:</strong> LT17</div>
              <div style={{ width: 1, height: 16, background: "#D1D5DB" }} />
              <div><strong style={{ color: "#EC4899" }}>8B Best Layer:</strong> LT15</div>
            </div>
          </motion.div>

          {/* Performance Comparison Table */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(124, 58, 237, 0.25)",
              borderRadius: 18,
              padding: "20px 24px",
              boxShadow: "0 8px 30px rgba(124, 58, 237, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Performance Comparison (CCC)
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 12, alignItems: "center" }}>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 700 }}>Model (Dimensions)</div>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 700, textAlign: "center" }}>Direct CCC</div>
              <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 700, textAlign: "center" }}>Hybrid CCC</div>

              {/* 4B Row */}
              <div style={{ fontWeight: 800, color: "#111827", fontSize: 14 }}>Qwen4B (2560-d)</div>
              <div style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#4B5563" }}>0.370</div>
              <div style={{ textAlign: "center", fontSize: 18, fontWeight: 900, color: "#10B981", background: "rgba(16, 185, 129, 0.1)", padding: "4px 8px", borderRadius: 8 }}>
                0.385 ⭐
              </div>

              {/* 8B Row */}
              <div style={{ fontWeight: 700, color: "#6B7280", fontSize: 14 }}>Qwen8B (4096-d)</div>
              <div style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#4B5563" }}>0.376</div>
              <div style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#6B7280" }}>0.382</div>
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
            <strong style={{ color: "#7C3AED" }}>Efficiency Gain: </strong>
            The smaller 4B model (2,560 features) achieves slightly higher Hybrid CCC than 8B (4,096 features), saving significant GPU compute while maintaining performance.
          </motion.div>
        </div>

        {/* Right: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/qwen4b_vs_8b.png"
            alt="Qwen 4B vs 8B Layer Sweep Comparison Plot"
            fallbackTitle="Layer Sweep & CCC: Qwen 4B vs 8B"
            fallbackSubtitle="4B peaks at layer LT17 with Hybrid CCC = 0.385"
            fallbackStats={[
              { label: "4B Hybrid CCC", value: "0.385", color: "#10B981" },
              { label: "8B Hybrid CCC", value: "0.382", color: "#6B7280" },
              { label: "4B Feature Dim", value: "2560-d", color: "#7C3AED" },
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
        <strong style={{ color: "#374151" }}>LT</strong> = features extracted from text tokens · <strong style={{ color: "#374151" }}>number</strong> = layer index · <strong style={{ color: "#374151" }}>sweep</strong> = test all model layers per dataset
      </motion.div>
    </SlideShell>
  );
}
