import { motion } from "framer-motion";
import { SlideHeader, SlideShell, GradientText } from "../components/index.ts";
import { fadeIn, fadeInRight, cardRise } from "../lib/motion.ts";
import { piaaSampleImg } from "../content/assets.ts";

const GLOWS = [
  { bottom: -260, left: -140, size: 680, color: "239,68,68", opacity: 0.07 },
  { top: -180, right: -100, size: 560, color: "124, 58, 237", opacity: 0.1 },
];

export function TheProblem() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Introduction"
        title="The Core"
        highlight="Problem."
      />

      <div style={{ flex: 1, display: "flex", gap: 56, alignItems: "center", minHeight: 0 }}>
        {/* Left Column: Image with Rating Overlays */}
        <motion.div
          {...fadeIn(0.3)}
          style={{
            flex: 1.2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
            }}
          >
            <img
              src={piaaSampleImg}
              alt="Sample Sunset Landscape"
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />

            {/* Person A Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                position: "absolute",
                top: "30px",
                left: "24px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                padding: "14px 20px",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 8px #10B981",
                }}
              />
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#6B7280" }}>Person A</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#111827" }}>
                  Rating: <span style={{ color: "#10B981" }}>6/7</span>
                </div>
              </div>
            </motion.div>

            {/* Person B Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "30px",
                right: "24px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                padding: "14px 20px",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                  boxShadow: "0 0 8px #EF4444",
                }}
              />
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#6B7280" }}>Person B</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#111827" }}>
                  Rating: <span style={{ color: "#EF4444" }}>2/7</span>
                </div>
              </div>
            </motion.div>
          </div>
          <span style={{ marginTop: 16, fontSize: 18, color: "#6B7280", fontStyle: "italic" }}>
            The exact same image receives completely different beauty scores from different people.
          </span>
        </motion.div>

        {/* Right Column: Explanations */}
        <motion.div
          {...fadeInRight(0.42)}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <motion.div {...cardRise(0.5)} style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: 20,
            padding: "28px 32px",
          }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 12 }}>
              Subjectivity of Beauty
            </h2>
            <p style={{ fontSize: "var(--slide-body)", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              Beauty is in the eye of the beholder. If we show the same picture to different observers, their responses exhibit high variance. Predicting a single average rating fails to capture individual preference.
            </p>
          </motion.div>

          <motion.div {...cardRise(0.65)} style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: 20,
            padding: "28px 32px",
          }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#7C3AED", marginBottom: 12 }}>
              What is PIAA?
            </h2>
            <p style={{ fontSize: "var(--slide-body)", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              <strong>Personalized Image Aesthetic Assessment (PIAA)</strong> is a specialized field in AI. Instead of predicting a generic general aesthetic score, the goal is to train an AI model capable of predicting the specific aesthetic score that a <strong>particular individual</strong> would assign to an image.
            </p>
          </motion.div>

          <motion.div {...cardRise(0.8)} style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237,0.05), rgba(236, 72, 153,0.05))",
            border: "1px solid rgba(124, 58, 237,0.15)",
            borderRadius: 20,
            padding: "24px 32px",
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#7C3AED" }}>
              Our Ultimate Goal:
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginTop: 4 }}>
              Predict the score for <GradientText>one specific person</GradientText>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
