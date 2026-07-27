import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding2aSlide() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Legend in top-right */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 64,
          display: "flex",
          gap: 16,
          zIndex: 10,
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, background: "#C2185B" }} />
          <span style={{ color: "#C2185B" }}>Personal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, background: "#9E9E9E" }} />
          <span style={{ color: "#6B5B6E" }}>Shared (Average)</span>
        </div>
      </div>

      <SlideHeader
        label="Finding 2a"
        title="Where does personal "
        highlight="taste come from?"
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Horizontal Block Configuration Flow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            padding: "0 12px",
          }}
        >
          {/* 1. Block P */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              width: 180,
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
              }}
            >
              {/* Top Layer */}
              <div style={{ background: "#C2185B", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                own emotions
              </div>
              {/* Bottom Layer */}
              <div style={{ background: "#C2185B", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900 }}>
                own formula
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>P</div>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, textTransform: "uppercase" }}>full personal</span>
          </motion.div>

          {/* Connection Arrow P -> S */}
          <motion.div
            {...fadeInUp(0.18)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              textAlign: "center",
              padding: "0 8px",
            }}
          >
            <span style={{ fontSize: 11, color: "#7B2C8F", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              difference = FEELING
            </span>
            <span style={{ fontSize: 10, color: "#7B2C8F", fontWeight: 700 }}>
              (perception)
            </span>
            <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none">
              <line x1="0" y1="8" x2="92" y2="8" stroke="#7B2C8F" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="92,4 100,8 92,12" fill="#7B2C8F" />
            </svg>
          </motion.div>

          {/* 2. Block S */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              width: 180,
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
              }}
            >
              {/* Top Layer */}
              <div style={{ background: "#9E9E9E", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                average emotions
              </div>
              {/* Bottom Layer */}
              <div style={{ background: "#C2185B", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900 }}>
                own formula
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>S</div>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, textTransform: "uppercase" }}>isolates weighting</span>
          </motion.div>

          {/* Connection Arrow S -> S-global */}
          <motion.div
            {...fadeInUp(0.33)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              textAlign: "center",
              padding: "0 8px",
            }}
          >
            <span style={{ fontSize: 11, color: "#C2185B", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              difference =
            </span>
            <span style={{ fontSize: 11, color: "#C2185B", fontWeight: 900, textTransform: "uppercase" }}>
              WEIGHTING
            </span>
            <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none">
              <line x1="0" y1="8" x2="92" y2="8" stroke="#C2185B" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="92,4 100,8 92,12" fill="#C2185B" />
            </svg>
          </motion.div>

          {/* 3. Block S-global */}
          <motion.div
            {...cardRise(0.4)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              width: 180,
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid #EEEDEA",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
              }}
            >
              {/* Top Layer */}
              <div style={{ background: "#9E9E9E", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                average emotions
              </div>
              {/* Bottom Layer */}
              <div style={{ background: "#9E9E9E", padding: "12px 8px", textAlign: "center", color: "#FFFFFF", fontSize: 13, fontWeight: 900 }}>
                shared formula
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#4A1533", marginTop: 4 }}>S-global</div>
            <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, textTransform: "uppercase" }}>no personalization</span>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          {...fadeInUp(0.48)}
          style={{
            alignSelf: "center",
            background: "#FCE4EC",
            border: "1px dashed rgba(194, 24, 91, 0.3)",
            borderRadius: 12,
            padding: "12px 28px",
            fontSize: 16,
            fontWeight: 800,
            color: "#4A1533",
            fontFamily: "monospace",
          }}
        >
          perception share = (P &minus; S) / (P &minus; S-global)
        </motion.div>
      </div>
    </SlideShell>
  );
}
Finding2aSlide.slideId = "Finding2a";
