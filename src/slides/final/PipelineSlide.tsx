import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp, fadeIn } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

const EMOTIONS = [
  "impressed",
  "intellectual",
  "amused",
  "nostalgic",
  "sad",
  "distasteful",
];

interface PipelineNode {
  label: string;
  sub?: string;
  detail: string;
  trainedOn: string;
  color: string;
  rgb: string;
  icon: React.ReactNode;
  emotions?: string[];
  typeLabel?: string;
}

const NODES: PipelineNode[] = [
  {
    label: "Image",
    sub: "input",
    detail: "6,526 photos",
    trainedOn: "art / fashion / landscape",
    color: "#4A1533",
    rgb: "74, 21, 51",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#4A1533" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Backbone",
    sub: "frozen",
    detail: "image → features",
    trainedOn: "Qwen-4B VLM features",
    color: "#4A1533",
    rgb: "74, 21, 51",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#4A1533" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    label: "7 Emotions",
    sub: "step 1",
    detail: "how does this photo feel?",
    trainedOn: "trained on 104 general users",
    color: "#C2185B",
    rgb: "194, 24, 91",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#C2185B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    emotions: EMOTIONS,
    typeLabel: "SHARED (GENERIC)",
  },
  {
    label: "Personal Formula",
    sub: "step 2",
    detail: "7 weights, one per emotion",
    trainedOn: "trained on target's training split",
    color: "#7B2C8F",
    rgb: "123, 44, 143",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#7B2C8F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16" />
        <path d="M4 12h10" />
        <path d="M4 19h7" />
        <circle cx="18" cy="14" r="3" />
      </svg>
    ),
    typeLabel: "PERSONALIZED (PER-USER)",
  },
  {
    label: "Score",
    sub: "output",
    detail: "0 – 6 score",
    trainedOn: "predicted user aesthetic score",
    color: "#4A1533",
    rgb: "74, 21, 51",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#4A1533" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

function Arrow({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.div
      {...fadeIn(delay)}
      style={{ display: "flex", alignItems: "center", flexShrink: 0, margin: "0 2px" }}
    >
      <svg width="32" height="18" viewBox="0 0 37 18" fill="none">
        <line x1="0" y1="9" x2="26" y2="9" stroke={color} strokeWidth="2.0" strokeLinecap="round" />
        <polygon points="26,3.5 35,9 26,14.5" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
      <SlideHeader
        label="Pipeline"
        title="Two-Stage Architecture: "
        highlight="Shared Perception & Personal Weighting."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 8,
        }}
      >

        {/* Pipeline Diagram */}
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center", margin: "auto 0", position: "relative" }}>
          {NODES.map((node, i) => {
            const delay = i * 0.1;
            const isEmotion = i === 2;
            const isFormula = i === 3;

            return (
              <div key={node.label} style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: isEmotion ? 240 : 190,
                    minHeight: 280,
                    background: "#FFFFFF",
                    border: isFormula
                      ? "3px solid #7B2C8F"
                      : isEmotion
                      ? "1px solid rgba(194, 24, 91, 0.25)"
                      : "1px solid #EEEDEA",
                    borderRadius: 16,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: isFormula
                      ? "0 10px 30px rgba(123, 44, 143, 0.05)"
                      : isEmotion
                      ? "0 8px 30px rgba(194, 24, 91, 0.02)"
                      : "0 6px 20px rgba(0, 0, 0, 0.015)",
                    position: "relative",
                  }}
                >
                  {/* Shared vs Personalized tag */}
                  {node.typeLabel && (
                    <div style={{
                      position: "absolute",
                      top: -12,
                      background: node.color,
                      color: "#FFFFFF",
                      fontSize: 9,
                      fontWeight: 900,
                      padding: "2px 8px",
                      borderRadius: 6,
                      border: "1.5px solid #FFFFFF",
                    }}>
                      {node.typeLabel}
                    </div>
                  )}

                  <div
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: `rgba(${node.rgb}, 0.06)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    {node.icon}
                  </div>

                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#4A1533", margin: 0, textAlign: "center", lineHeight: 1.2 }}>
                    {node.label}
                  </h4>

                  {node.sub && (
                    <span
                      style={{
                        fontSize: 10, fontWeight: 700, color: node.color,
                        background: `rgba(${node.rgb}, 0.06)`,
                        padding: "2px 10px", borderRadius: 10,
                        textTransform: "uppercase", letterSpacing: 0.3,
                        border: `1.5px solid rgba(${node.rgb}, 0.2)`,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  <div style={{ fontSize: 11.5, color: "#6B5B6E", textAlign: "center", lineHeight: 1.4 }}>
                    {node.detail}
                  </div>

                  {node.emotions && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginTop: 4 }}>
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 10, color: "#C2185B",
                            background: "rgba(194, 24, 91, 0.05)",
                            padding: "2px 6px", borderRadius: 6, fontWeight: 700,
                            border: "1px solid rgba(194, 24, 91, 0.15)",
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      marginTop: "auto",
                      fontSize: 10, color: "#6B5B6E", fontWeight: 500, textAlign: "center",
                      lineHeight: 1.35, borderTop: "1px dashed #EEEDEA",
                      paddingTop: 8, width: "100%",
                    }}
                  >
                    {node.trainedOn}
                  </div>
                </motion.div>

                {/* Arrow Annotation overlay pointing to per-user formula */}
                {isFormula && (
                  <motion.div
                    {...fadeIn(0.6)}
                    style={{
                      position: "absolute",
                      bottom: -50,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      zIndex: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <polygon points="6,0 12,12 0,12" fill="#7B2C8F" transform="rotate(180 6 6)" />
                    </svg>
                    <span
                      style={{
                        background: "#7B2C8F",
                        color: "#FFFFFF",
                        fontSize: 11,
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: 6,
                        boxShadow: "0 4px 12px rgba(123, 44, 143, 0.2)",
                      }}
                    >
                      this is what we can read
                    </span>
                  </motion.div>
                )}

                {i < NODES.length - 1 && <Arrow color="rgba(74, 21, 51, 0.15)" delay={delay + 0.05} />}
              </div>
            );
          })}
        </div>

      </div>
    </SlideShell>
  );
}
