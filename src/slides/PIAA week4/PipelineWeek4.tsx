import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp, fadeIn } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const EMOTIONS = [
  "Amusement",
  "Awe",
  "Contentment",
  "Excitement",
  "Anger",
  "Disgust",
  "Sadness",
];

interface PipelineNode {
  label: string;
  sub?: string;
  color: string;
  rgb: string;
  icon: React.ReactNode;
  emotions?: string[];
}

const NODES: PipelineNode[] = [
  {
    label: "Image",
    sub: "Input",
    color: "#3B82F6",
    rgb: "59, 130, 246",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Backbone",
    sub: "CLIP / VLM",
    color: "#7C3AED",
    rgb: "124, 58, 237",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    sub: "Mediator",
    color: "#EC4899",
    rgb: "236, 72, 153",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    emotions: EMOTIONS,
  },
  {
    label: "Per-user Ridge",
    sub: "Personal model",
    color: "#06B6D4",
    rgb: "6, 182, 212",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v17" />
        <path d="M12 6H3" />
        <path d="M12 6h9" />
        <path d="M3 6l3 6H0l3-6" />
        <path d="M21 6l3 6h-6l3-6" />
        <path d="M12 20H8" />
        <path d="M12 20h4" />
      </svg>
    ),
  },
  {
    label: "Aesthetic Score",
    sub: "Output",
    color: "#10B981",
    rgb: "16, 185, 129",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

function Arrow({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.div
      {...fadeIn(delay)}
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        margin: "0 2px",
      }}
    >
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <line x1="0" y1="10" x2="28" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="28,4 38,10 28,16" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Pipeline Recap"
        title="System "
        highlight="Architecture."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        {/* Top flow indicator */}
        <motion.div
          {...fadeInUp(0.15)}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#F3F4F6",
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              color: "#4B5563",
            }}
          >
            <span style={{ color: "#9CA3AF" }}>Direct:</span>
            <span>Image → Score (skips emotion layer)</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(236, 72, 153, 0.08)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              color: "#EC4899",
            }}
          >
            <span>Hybrid:</span>
            <span>Image → 7 Emotions → Personal Score</span>
          </div>
        </motion.div>

        {/* Horizontal pipeline row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            margin: "auto 0",
          }}
        >
          {NODES.map((node, i) => {
            const delay = i * 0.12;
            const isEmotion = i === 2;
            return (
              <div
                key={node.label}
                style={{ display: "flex", alignItems: "center" }}
              >
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: isEmotion ? 220 : 180,
                    background: `rgba(${node.rgb}, 0.03)`,
                    border: `2px ${isEmotion ? "solid" : "solid"} rgba(${node.rgb}, ${isEmotion ? "0.4" : "0.2"})`,
                    borderRadius: 16,
                    padding: "20px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    position: "relative",
                    boxShadow: isEmotion
                      ? "0 8px 24px rgba(236, 72, 153, 0.12)"
                      : "0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: `rgba(${node.rgb}, 0.08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {node.icon}
                  </div>

                  <h4
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#111827",
                      margin: 0,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {node.label}
                  </h4>

                  {node.sub && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: node.color,
                        background: `rgba(${node.rgb}, 0.1)`,
                        padding: "3px 10px",
                        borderRadius: 10,
                        textTransform: "uppercase",
                        letterSpacing: 0.3,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  {node.emotions && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 10,
                            color: "#EC4899",
                            background: "rgba(236, 72, 153, 0.06)",
                            padding: "2px 6px",
                            borderRadius: 6,
                            fontWeight: 600,
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                {i < NODES.length - 1 && (
                  <Arrow
                    color={`rgba(${node.rgb}, 0.4)`}
                    delay={delay + 0.06}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom row: Note + Definitions Box */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginTop: 16,
          }}
        >
          <motion.div
            {...fadeInUp(0.7)}
            style={{
              flex: 1,
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: 14,
              padding: "14px 20px",
              fontSize: 14,
              color: "#4B5563",
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: "#7C3AED" }}>Core Principle: </strong>
            Direct skips the emotion layer; Hybrid passes features through 7 emotion predictors into a per-user Ridge regression. The intermediate emotion layer provides interpretability.
          </motion.div>

          {/* Definition box corner (small text) */}
          <motion.div
            {...fadeInUp(0.8)}
            style={{
              width: 440,
              background: "#F3F4F6",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: "10px 14px",
              fontSize: 11,
              color: "#6B7280",
              lineHeight: 1.45,
            }}
          >
            <div style={{ fontWeight: 700, color: "#374151", marginBottom: 4 }}>Definitions & Dataset</div>
            <div><strong style={{ color: "#4B5563" }}>Direct</strong>: image → score</div>
            <div><strong style={{ color: "#4B5563" }}>Hybrid</strong>: image → emotion → score</div>
            <div><strong style={{ color: "#4B5563" }}>CCC</strong>: agreement metric (0–1), penalises wrong ranking AND wrong scale</div>
            <div><strong style={{ color: "#4B5563" }}>Dataset</strong>: XPASS-Vis · 129 users · 6,526 images · 3 domains · 87,836 ratings</div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
