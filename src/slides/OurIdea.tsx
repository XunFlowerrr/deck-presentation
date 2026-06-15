import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";
import { piaaSampleImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function OurIdea() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Methodology"
        title="Our Proposed"
        highlight="Core Idea."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 32,
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {/* Left Column: Flow & Details */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
        >
          {/* Traditional Methods Card */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              background: "#FAFAFA",
              border: "1px solid #E5E7EB",
              borderRadius: "24px",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#EF4444",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Traditional Methods
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#EF4444",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  background: "rgba(239, 68, 68, 0.03)",
                  padding: "3px 8px",
                  borderRadius: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Black Box
              </span>
            </div>

            {/* Title & Description & Flow Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#111827",
                    margin: "0 0 8px 0",
                  }}
                >
                  Direct Prediction (Black Box)
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#4B5563",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Most previous methods map the image directly to a personal
                  aesthetic score, operating as an uninterpretable black box.
                </p>
              </div>

              {/* Flow diagram */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: "#4B5563" }}
                >
                  Image
                </div>
                <span style={{ color: "#9CA3AF", fontWeight: 700 }}>➔</span>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.08)",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#EF4444",
                  }}
                >
                  AI
                </div>
                <span style={{ color: "#9CA3AF", fontWeight: 700 }}>➔</span>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: "#4B5563" }}
                >
                  Score
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Approach Card */}
          <motion.div
            {...cardRise(0.4)}
            style={{
              background:
                "linear-gradient(135deg, #FFFFFF, rgba(124, 58, 237, 0.02))",
              border: "1.5px solid #7C3AED",
              boxShadow: "0 10px 30px rgba(124, 58, 237, 0.04)",
              borderRadius: "24px",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Our Approach
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  background: "#7C3AED",
                  padding: "3px 8px",
                  borderRadius: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Explainable
              </span>
            </div>

            {/* Title & Description & Flow Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#111827",
                    margin: "0 0 8px 0",
                  }}
                >
                  Emotion-Mediated Prediction
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#4B5563",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  We predict emotions as intermediate steps. Each user is
                  modeled by a <strong>personal formula</strong> (emotion
                  weights).
                </p>
              </div>

              {/* Flow diagram */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: "#4B5563" }}
                >
                  Image
                </div>
                <span style={{ color: "#9CA3AF", fontWeight: 700 }}>➔</span>
                <div
                  style={{
                    background: "rgba(124, 58, 237, 0.08)",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#7C3AED",
                  }}
                >
                  Emo
                </div>
                <span style={{ color: "#9CA3AF", fontWeight: 700 }}>➔</span>
                <div
                  style={{
                    background: "rgba(236, 72, 153, 0.08)",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#EC4899",
                  }}
                >
                  formula
                </div>
                <span style={{ color: "#9CA3AF", fontWeight: 700 }}>➔</span>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}
                >
                  Score
                </div>
              </div>
            </div>
          </motion.div>

          {/* Psychological Research Callout */}
          <motion.div
            {...fadeIn(0.6)}
            style={{
              background: "rgba(124, 58, 237, 0.03)",
              borderRadius: "20px",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: "#7C3AED",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
              </svg>
              Grounded in Psychology Research
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#4B5563",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Based on human pathways: people judge beauty through emotional
              responses (e.g. nostalgic, amused, impressed), not directly from
              pixels.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Image without rating overlays */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            paddingRight: 20,
          }}
        >
          {/* Soft Backlight Glow */}
          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <motion.div
            {...cardRise(0.5)}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
              zIndex: 1,
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
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
