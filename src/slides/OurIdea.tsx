import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";
import { signaturePaintingImg } from "../content/assets.ts";

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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
        
        {/* 3-Column Top Layout */}
        <div style={{ display: "flex", gap: 32, alignItems: "stretch" }}>
          
          {/* Previous Methods */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              flex: 1,
              background: "#FAFAFA",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#EF4444",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Traditional Methods
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 6, marginBottom: 16 }}>
                Direct Prediction
              </h3>
              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  marginBottom: 16,
                  fontSize: 16,
                }}
              >
                <div style={{ fontWeight: 700, color: "#4B5563" }}>Image</div>
                <div style={{ color: "#9CA3AF" }}>➔</div>
                <div style={{ fontWeight: 800, color: "#EF4444", background: "rgba(239,68,68,0.1)", padding: "4px 10px", borderRadius: "8px" }}>
                  Deep AI
                </div>
                <div style={{ color: "#9CA3AF" }}>➔</div>
                <div style={{ fontWeight: 700, color: "#4B5563" }}>Beauty Score</div>
              </div>

              <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                Most previous methods map the image directly to a personal aesthetic score, operating as a black box with zero transparency.
              </p>
            </div>
          </motion.div>

          {/* Our Idea */}
          <motion.div
            {...cardRise(0.4)}
            style={{
              flex: 1,
              background: "linear-gradient(135deg, #FFFFFF, rgba(124, 58, 237,0.02))",
              border: "2px solid #7C3AED",
              boxShadow: "0 10px 30px rgba(124, 58, 237,0.05)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: 14,
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
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    background: "#7C3AED",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  Explainable
                </span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 6, marginBottom: 16 }}>
                Emotion-Mediated Prediction
              </h3>
              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "14px 10px",
                  marginBottom: 16,
                  fontSize: 15,
                }}
              >
                <div style={{ fontWeight: 700, color: "#4B5563" }}>Image</div>
                <div style={{ color: "#9CA3AF" }}>➔</div>
                <div style={{ fontWeight: 700, color: "#7C3AED", background: "rgba(124, 58, 237,0.08)", padding: "3px 6px", borderRadius: "6px" }}>Emo</div>
                <div style={{ color: "#9CA3AF" }}>➔</div>
                <div style={{ fontWeight: 700, color: "#EC4899", background: "rgba(236, 72, 153,0.08)", padding: "3px 6px", borderRadius: "6px" }}>formula</div>
                <div style={{ color: "#9CA3AF" }}>➔</div>
                <div style={{ fontWeight: 700, color: "#111827" }}>Score</div>
              </div>

              <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                We predict emotions as intermediate steps. Each user is modeled by a <strong>personal formula</strong> (emotion weights).
              </p>
            </div>
          </motion.div>

          {/* Signature Image */}
          <motion.div
            {...cardRise(0.5)}
            style={{
              width: "280px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              display: "flex",
              flexShrink: 0,
            }}
          >
            <img
              src={signaturePaintingImg}
              alt="PIAA Signature Painting"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

        </div>

        {/* Psychological basis callout */}
        <motion.div
          {...fadeIn(0.7)}
          style={{
            background: "rgba(124, 58, 237, 0.04)",
            border: "1px solid rgba(124, 58, 237, 0.1)",
            borderRadius: "20px",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: "#7C3AED", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
            </svg> Grounded in Psychology Research
          </div>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
            Our method is based on human psychological pathways: people do not judge beauty directly from raw image pixels. First, the image triggers an emotional response (e.g. nostalgic, amused, or impressed), and that feeling serves as the foundation for the aesthetic judgment.
          </p>
        </motion.div>
        
      </div>
    </SlideShell>
  );
}
