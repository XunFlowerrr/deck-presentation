import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function InterpretSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Interpretability Example"
        title="What does emotion "
        highlight="explain?"
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: Narrative Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* User A Details */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "16px 20px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C2185B" }} />
              <span style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em" }}>User A (Impressed)</span>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
              The aesthetic preference is heavily driven by feeling <strong style={{ color: "#C2185B" }}>Impressed</strong> (represented by the long pink positive bar).
            </p>
          </motion.div>

          {/* User B Details */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 16,
              padding: "16px 20px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7B2C8F" }} />
              <span style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.05em" }}>User B (Nostalgic &amp; Amused)</span>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
              Aesthetic score is driven by <strong style={{ color: "#7B2C8F" }}>Nostalgic</strong> and <strong style={{ color: "#7B2C8F" }}>Amused</strong> (long purple positive bars).
            </p>
          </motion.div>

          {/* Contrast card */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FCE4EC",
              border: "1px dashed rgba(194, 24, 91, 0.3)",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 14,
              color: "#4A1533",
              lineHeight: 1.5,
              fontWeight: 700,
            }}
          >
            &ldquo;We can explain exactly WHY User A and User B rate the same image differently. A standard black-box model cannot reveal this.&rdquo;
          </motion.div>
        </div>

        {/* Right Column: Matplotlib Plot Image */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: 16,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/output/plots/fig_interpret.png"
            alt="Subjective Emotion Weights (User A vs User B)"
            style={{ width: "100%", maxHeight: 310, objectFit: "contain", borderRadius: 8 }}
          />
          <div style={{ fontSize: 11, color: "#9E9E9E", fontWeight: 700, marginTop: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Positive bars (Right) push beauty up · Negative bars (Left) pull it down
          </div>
        </motion.div>
      </div>

      {/* Bottom Caption */}
      <motion.div
        {...fadeInUp(0.35)}
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#6B5B6E",
          fontWeight: 700,
          borderTop: "1px solid #EEEDEA",
          paddingTop: 14,
          marginTop: 16,
        }}
      >
        Because the last step is linear, we read each person's emotion weights
      </motion.div>
    </SlideShell>
  );
}
