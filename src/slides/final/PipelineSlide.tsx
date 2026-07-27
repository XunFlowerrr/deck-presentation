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
    color: "#6B5B6E",
    rgb: "107, 91, 110",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B5B6E" strokeWidth="2.2">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Backbone",
    sub: "direct",
    detail: "image → features",
    trainedOn: "Qwen-4B VLM features",
    color: "#9E9E9E",
    rgb: "158, 158, 158",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2.2">
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M12 8V4H8" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
      </svg>
    ),
  },
  {
    label: "7 Emotions",
    sub: "hybrid",
    detail: "how does this photo feel?",
    trainedOn: "trained on 104 general users",
    color: "#7B2C8F", // Secondary Purple
    rgb: "123, 44, 143",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B2C8F" strokeWidth="2.2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    emotions: EMOTIONS,
    typeLabel: "SHARED (GENERIC)",
  },
  {
    label: "Personal Formula",
    sub: "mediator",
    detail: "7 weights, one per emotion",
    trainedOn: "trained on target's training split",
    color: "#C2185B", // Primary Pink
    rgb: "194, 24, 91",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2185B" strokeWidth="2.2">
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
    color: "#4A1533", // Deep Plum
    rgb: "74, 21, 51",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A1533" strokeWidth="2.2">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
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
      <svg width="24" height="18" viewBox="0 0 37 18" fill="none">
        <line x1="0" y1="9" x2="26" y2="9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="26,3.5 35,9 26,14.5" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Pipeline"
        title="Two pathways: "
        highlight="Direct and Hybrid."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 24,
        }}
      >
        {/* Pathway Comparison Header Tag */}
        <motion.div
          {...fadeInUp(0.12)}
          style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              color: "#9E9E9E",
              boxShadow: "0 2px 10px rgba(0,0,0,0.01)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Direct Pathway:</span>
            <span>photo &rarr; score</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#FCE4EC",
              border: "1px solid rgba(194, 24, 91, 0.15)",
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              color: "#C2185B",
              boxShadow: "0 4px 12px rgba(194, 24, 91, 0.02)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Hybrid Pathway:</span>
            <span>photo &rarr; 7 emotions &rarr; score</span>
          </div>
        </motion.div>

        {/* Pipeline Diagram */}
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center", margin: "auto 0", position: "relative" }}>
          {NODES.map((node, i) => {
            const delay = i * 0.08;
            const isEmotion = i === 2;
            const isFormula = i === 3;

            return (
              <div key={node.label} style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: isEmotion ? 220 : 170,
                    minHeight: 250,
                    background: "#FFFFFF",
                    border: isFormula
                      ? "3px solid #C2185B" // Pink highlight border
                      : isEmotion
                      ? "1px solid rgba(123, 44, 143, 0.25)" // Purple border
                      : "1px solid #EEEDEA",
                    borderRadius: 16,
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: isFormula
                      ? "0 8px 24px rgba(194, 24, 91, 0.08)"
                      : "0 4px 15px rgba(0, 0, 0, 0.01)",
                    position: "relative",
                  }}
                >
                  {/* Shared vs Personalized tag */}
                  {node.typeLabel && (
                    <div style={{
                      position: "absolute",
                      top: -10,
                      background: node.color,
                      color: "#FFFFFF",
                      fontSize: 8.5,
                      fontWeight: 900,
                      padding: "2px 8px",
                      borderRadius: 6,
                      border: "1.5px solid #FFFFFF",
                      whiteSpace: "nowrap",
                    }}>
                      {node.typeLabel}
                    </div>
                  )}

                  <div
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: `rgba(${node.rgb}, 0.06)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    {node.icon}
                  </div>

                  <h4 style={{ fontSize: 15, fontWeight: 800, color: "#4A1533", margin: 0, textAlign: "center" }}>
                    {node.label}
                  </h4>

                  {node.sub && (
                    <span
                      style={{
                        fontSize: 9.5, fontWeight: 700, color: node.color,
                        background: `rgba(${node.rgb}, 0.06)`,
                        padding: "1px 8px", borderRadius: 8,
                        textTransform: "uppercase", letterSpacing: 0.3,
                        border: `1px solid rgba(${node.rgb}, 0.15)`,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  <div style={{ fontSize: 11, color: "#6B5B6E", textAlign: "center", lineHeight: 1.35, marginTop: 2 }}>
                    {node.detail}
                  </div>

                  {node.emotions && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center", marginTop: 4 }}>
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 9.5, color: "#7B2C8F",
                            background: "rgba(123, 44, 143, 0.05)",
                            padding: "1px 5px", borderRadius: 4, fontWeight: 700,
                            border: "1px solid rgba(123, 44, 143, 0.12)",
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
                      lineHeight: 1.3, borderTop: "1px dashed #EEEDEA",
                      paddingTop: 6, width: "100%",
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
                      bottom: -44,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      zIndex: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12">
                      <polygon points="6,0 12,12 0,12" fill="#C2185B" transform="rotate(180 6 6)" />
                    </svg>
                    <span
                      style={{
                        background: "#C2185B",
                        color: "#FFFFFF",
                        fontSize: 10.5,
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: 6,
                        boxShadow: "0 4px 10px rgba(194, 24, 91, 0.15)",
                      }}
                    >
                      this is what we can read
                    </span>
                  </motion.div>
                )}

                {/* Annotation for shared image->emotion pathway */}
                {isEmotion && (
                  <motion.div
                    {...fadeIn(0.65)}
                    style={{
                      position: "absolute",
                      bottom: -44,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      zIndex: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12">
                      <polygon points="6,0 12,12 0,12" fill="#6B5B6E" transform="rotate(180 6 6)" />
                    </svg>
                    <span
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EEEDEA",
                        color: "#6B5B6E",
                        fontSize: 10.5,
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: 6,
                      }}
                    >
                      shared (trained on general users)
                    </span>
                  </motion.div>
                )}

                {i < NODES.length - 1 && <Arrow color="rgba(43, 34, 48, 0.15)" delay={delay + 0.05} />}
              </div>
            );
          })}
        </div>

        {/* Bottom Caption Box */}
        <motion.div
          {...fadeInUp(0.6)}
          style={{
            alignSelf: "center",
            background: "#FCE4EC",
            border: "1px solid rgba(194, 24, 91, 0.15)",
            borderRadius: 12,
            padding: "12px 28px",
            fontSize: 16,
            fontWeight: 800,
            color: "#4A1533",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            marginTop: 16,
          }}
        >
          The gap between Direct and Hybrid = what emotion adds
        </motion.div>
      </div>
    </SlideShell>
  );
}
PipelineSlide.slideId = "Pipeline";
