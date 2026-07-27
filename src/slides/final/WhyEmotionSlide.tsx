import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function WhyEmotionSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Motivation"
        title="What makes a person "
        highlight="like an image?"
        accentWidth={120}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 16,
        }}
      >
        {/* Main Flow: See Image -> Feel Something -> Like It */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            margin: "auto 0",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* Node 1: See Image */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              width: 190,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "20px 16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.01)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Step 1: Perception
            </div>
            <img
              src="/case-study/helps-3099.jpg"
              alt="Target Visual Input"
              style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 8 }}
            />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>See Image</span>
          </motion.div>

          {/* Arrow */}
          <motion.div {...fadeInUp(0.18)}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#7B2C8F" strokeWidth="3">
              <line x1="0" y1="12" x2="26" y2="12" />
              <polyline points="18,5 26,12 18,19" />
            </svg>
          </motion.div>

          {/* Node 2: Feel Something (Highlighted in Pink) */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              width: 220,
              background: "#FCE4EC", // Soft Pink
              border: "2.5px solid #C2185B", // Primary Pink
              borderRadius: 20,
              padding: "24px 16px",
              boxShadow: "0 8px 24px rgba(194, 24, 91, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Key Badge */}
            <div style={{
              position: "absolute", top: -11, background: "#C2185B", color: "#FFFFFF",
              fontSize: 9, fontWeight: 900, padding: "2px 8px", borderRadius: 6, letterSpacing: "0.05em"
            }}>
              KEY COGNITIVE BRIDGE
            </div>

            <div style={{ fontSize: 11, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Step 2: Emotion
            </div>
            
            {/* Icon representation */}
            <div style={{
              width: 50, height: 50, borderRadius: "50%", background: "#FFFFFF",
              border: "1.5px solid rgba(194,24,91,0.2)", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2185B" strokeWidth="2.2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>

            <span style={{ fontSize: 15, fontWeight: 900, color: "#C2185B" }}>Feel Something</span>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700 }}>feels calm, nostalgic...</span>
          </motion.div>

          {/* Arrow */}
          <motion.div {...fadeInUp(0.28)}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="#7B2C8F" strokeWidth="3">
              <line x1="0" y1="12" x2="26" y2="12" />
              <polyline points="18,5 26,12 18,19" />
            </svg>
          </motion.div>

          {/* Node 3: Like It */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              width: 190,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "20px 16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.01)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 900, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Step 3: Judgment
            </div>
            
            <div style={{
              width: 44, height: 44, borderRadius: "50%", background: "#FDFCFD",
              border: "1px solid #EEEDEA", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7B2C8F" strokeWidth="2.2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>

            <span style={{ fontSize: 14, fontWeight: 800, color: "#4A1533" }}>Like It</span>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          {...fadeInUp(0.38)}
          style={{
            textAlign: "center",
            maxWidth: 720,
            width: "100%",
            marginTop: 16,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#4A1533", lineHeight: 1.4 }}>
            &ldquo;You feel first, then you judge. So emotion explains taste.&rdquo;
          </h3>
        </motion.div>

        {/* Small Footnote */}
        <motion.div
          {...fadeInUp(0.44)}
          style={{
            fontSize: 12,
            color: "#6B5B6E",
            borderTop: "1px solid #EEEDEA",
            paddingTop: 12,
            width: "100%",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Prior work opens the black box (e.g. Ryu &amp; Yanaka), but not in a human way. We explain through emotion.
        </motion.div>
      </div>
    </SlideShell>
  );
}
WhyEmotionSlide.slideId = "WhyEmotion";
