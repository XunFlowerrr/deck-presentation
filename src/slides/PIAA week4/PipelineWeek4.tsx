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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Backbone",
    sub: "CLIP or VLM",
    color: "#7C3AED",
    rgb: "124, 58, 237",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    sub: "Predicted scores",
    color: "#EC4899",
    rgb: "236, 72, 153",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    emotions: EMOTIONS,
  },
  {
    label: "Per-user Ridge",
    sub: "7 personal weights",
    color: "#06B6D4",
    rgb: "6, 182, 212",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        margin: "0 4px",
      }}
    >
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
        <line x1="0" y1="12" x2="36" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="36,6 48,12 36,18" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="The Pipeline"
        title="How it "
        highlight="works."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 40,
        }}
      >
        {/* Horizontal pipeline row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {NODES.map((node, i) => {
            const delay = i * 0.14;
            return (
              <div
                key={node.label}
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* Node card */}
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: 240,
                    background: `rgba(${node.rgb}, 0.03)`,
                    border: `2px solid rgba(${node.rgb}, 0.25)`,
                    borderRadius: 20,
                    padding: "28px 20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    position: "relative",
                    boxShadow: `0 8px 32px rgba(${node.rgb}, 0.08)`,
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
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

                  {/* Title */}
                  <h4
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#111827",
                      margin: 0,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {node.label}
                  </h4>

                  {/* Subtitle badge */}
                  {node.sub && (
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: node.color,
                        background: `rgba(${node.rgb}, 0.1)`,
                        padding: "4px 12px",
                        borderRadius: 12,
                        textTransform: "uppercase",
                        letterSpacing: 0.3,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  {/* Emotion list for the Emotions node */}
                  {node.emotions && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 11,
                            color: "#EC4899",
                            background: "rgba(236, 72, 153, 0.06)",
                            padding: "2px 8px",
                            borderRadius: 8,
                            fontWeight: 600,
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Arrow between nodes */}
                {i < NODES.length - 1 && (
                  <Arrow
                    color={`rgba(${node.rgb}, 0.5)`}
                    delay={delay + 0.08}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Interpretability note */}
        <motion.div
          {...fadeInUp(0.8)}
          style={{
            background: "rgba(236, 72, 153, 0.03)",
            border: "1px dashed rgba(236, 72, 153, 0.3)",
            borderRadius: 20,
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p
            style={{
              fontSize: 20,
              color: "#4B5563",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            The emotion layer in the middle makes the whole thing{" "}
            <strong style={{ color: "#EC4899" }}>interpretable</strong>.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
