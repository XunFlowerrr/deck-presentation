import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.16 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.12 },
];

export function RedundancyTrendWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 3 — the pattern"
        title="The better the model, "
        highlight="the less emotions add."
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
        {/* Top Summary Banner */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: 18,
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Core Finding Across All Tested Backbones
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginTop: 2 }}>
              The stronger the vision backbone, the less explicit emotion-mediation adds on top.
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(124, 58, 237, 0.3)",
              borderRadius: 14,
              padding: "10px 20px",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>Linear Correlation</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#7C3AED" }}>
              r = −0.95
            </div>
            <div style={{ fontSize: 11, color: "#9CA3AF" }}>across 6 independent models</div>
          </div>
        </motion.div>

        {/* Middle Plot Image & Description */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 28,
            alignItems: "center",
            minHeight: 0,
          }}
        >
          <motion.div {...cardRise(0.25)}>
            <PlotImage
              src="/output/plots/redundancy_scatter.png"
              alt="Backbone Direct CCC vs Emotion Mediation Gain (r = -0.95)"
              fallbackTitle="Direct CCC vs Emotion Mediation Gain (6 Backbones)"
              fallbackSubtitle="Frozen CLIP gains +0.073; the strongest model, Qwen3-VL-8B, gains only +0.006"
              fallbackStats={[
                { label: "Trend across 6 models", value: "r = −0.95", color: "#7C3AED" },
                { label: "Frozen CLIP gain", value: "+0.073", color: "#EC4899" },
                { label: "Qwen3-VL-8B gain", value: "+0.006", color: "#10B981" },
              ]}
              maxHeight={540}
            />
          </motion.div>

          <motion.div
            {...cardRise(0.35)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 16,
                padding: "26px 24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 800, color: "#111827" }}>
                Implicit vs Explicit Representations
              </h4>
              <p style={{ margin: 0, fontSize: 16, color: "#4B5563", lineHeight: 1.55 }}>
                Strong VLMs already encode emotional semantics implicitly within their feature space. Making emotions explicit in Stage 2 yields diminishing returns as backbone capacity grows.
              </p>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "20px 24px",
                fontSize: 15,
                color: "#374151",
                lineHeight: 1.55,
              }}
            >
              <strong style={{ color: "#7C3AED" }}>Multi-Backbone Rigor: </strong>
              This systematic trend only emerges when evaluating multiple diverse backbones (CLIP, ViT, ResNet, Qwen8B, Qwen4B) rather than relying on a single architecture.
            </div>
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
        6 backbones tested: CLIP-ViT-B/32, CLIP-ViT-L/14, ConvNeXt, Swin-v2, Qwen3-VL-8B, Qwen3-VL-4B
      </motion.div>
    </SlideShell>
  );
}
