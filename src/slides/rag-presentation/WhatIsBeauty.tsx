import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { fadeIn, fadeInRight, cardRise } from "../../lib/motion.ts";
import { piaaSampleImg } from "../../content/assets.ts";

const GLOWS = [
  { bottom: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { top: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function WhatIsBeauty() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Introduction"
        title="What is"
        highlight="Beauty?"
      />

      <div style={{ flex: 1, display: "flex", gap: 56, alignItems: "center", minHeight: 0 }}>
        {/* Left Column: Content */}
        <motion.div
          {...fadeIn(0.3)}
          style={{
            flex: 1.2,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Aesthetic Subjectivity
            </span>
            <h3 style={{ fontSize: 36, fontWeight: 900, color: "#111827", margin: 0 }}>
              The Subjectivity of Aesthetic Assessment
            </h3>
            <p style={{ fontSize: "var(--slide-body)", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              Beauty is not a single objective score. It is a multi-dimensional construct shaped by personal experiences, cognitive interpretations, and emotional resonance.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Dimension 1 */}
            <motion.div
              {...cardRise(0.1)}
              style={{
                background: "rgba(124, 58, 237, 0.02)",
                border: "1px solid rgba(124, 58, 237, 0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <div>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "0 0 4px 0" }}>
                  Emotional Resonance
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
                  Human judgment of beauty is closely bound to emotional reactions. A stunning mountain sunset evokes feelings of awe, calm, or nostalgia.
                </p>
              </div>
            </motion.div>

            {/* Dimension 2 */}
            <motion.div
              {...cardRise(0.2)}
              style={{
                background: "rgba(59, 130, 246, 0.02)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2Z" />
              </svg>
              <div>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "0 0 4px 0" }}>
                  Cognitive Variations
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
                  Individuals bring their unique cognitive backgrounds, personal experiences, and preferences to every viewing, leading to wide variations in ratings.
                </p>
              </div>
            </motion.div>

            {/* Dimension 3 */}
            <motion.div
              {...cardRise(0.3)}
              style={{
                background: "rgba(217, 70, 239, 0.02)",
                border: "1px solid rgba(217, 70, 239, 0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6M10 22h4" />
              </svg>
              <div>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "0 0 4px 0" }}>
                  Beyond Numeric Regressions
                </h4>
                <p style={{ fontSize: 18, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
                  Conventional models simplify beauty into a single number. Modern assessment requires capturing the emotional mediators behind that judgment.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Clean Image */}
        <motion.div
          {...fadeInRight(0.5)}
          style={{
            flex: 0.9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
            }}
          >
            <img
              src={piaaSampleImg}
              alt="Subjective Beauty PIAA Sample"
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
