import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function PipelineSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Pipeline"
        title="Two pathways: "
        highlight="Direct and Hybrid"
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        {/* Main Pipeline Image Container */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "24px 16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
          }}
        >
          <img
            src="/output/plots/fig1_pipeline.svg"
            alt="Two pathways: Direct and Hybrid Pipeline"
            style={{ width: "100%", maxHeight: 330, objectFit: "contain" }}
          />

          {/* Annotation Overlay: Ring around per-user formula */}
          <motion.div
            {...fadeInUp(0.6)}
            style={{
              position: "absolute",
              bottom: 12,
              right: 64,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              zIndex: 100,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                background: "#7B2C8F",
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 900,
                padding: "4px 10px",
                borderRadius: 6,
                boxShadow: "0 4px 12px rgba(123, 44, 143, 0.2)",
              }}
            >
              per-user formula: this is what we can read
            </span>
          </motion.div>

          {/* Annotation Overlay: Shared label */}
          <motion.div
            {...fadeInUp(0.5)}
            style={{
              position: "absolute",
              top: 140,
              left: 280,
              zIndex: 100,
            }}
          >
            <span
              style={{
                background: "rgba(194, 24, 91, 0.08)",
                border: "1px dashed #C2185B",
                color: "#C2185B",
                fontSize: 10,
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              shared (trained on general users)
            </span>
          </motion.div>
        </motion.div>

        {/* Caption */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#6B5B6E",
            fontWeight: 700,
            marginTop: 20,
          }}
        >
          The gap between Direct and Hybrid = what emotion adds
        </motion.div>
      </div>
    </SlideShell>
  );
}
