import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp, fadeIn } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
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
    color: "#222222",
    rgb: "34, 34, 34",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#222222",
    rgb: "34, 34, 34",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#1D9E75",
    rgb: "29, 158, 117",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#BA7517",
    rgb: "186, 117, 23",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#222222",
    rgb: "34, 34, 34",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        title="Two pathways: "
        highlight="Direct and Hybrid."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 8,
        }}
      >
        {/* Pathway Comparison */}
        <motion.div
          {...fadeInUp(0.15)}
          style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 4 }}
        >
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#FFFFFF", border: "1px solid #EEEDEA",
              padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 700, color: "#185FA5",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Direct Pathway:</span>
            <span>photo &rarr; score &nbsp;(skips the emotion mediation step)</span>
          </div>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#FFFFFF",
              border: "1px solid rgba(29, 158, 117, 0.2)",
              padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 700, color: "#1D9E75",
              boxShadow: "0 6px 16px rgba(29, 158, 117, 0.02)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Hybrid Pathway:</span>
            <span>photo &rarr; 7 emotions &rarr; score (mediates via explainable emotions)</span>
          </div>
        </motion.div>

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
                      ? "3px solid #BA7517" // Highlight annotation circle/ring
                      : isEmotion
                      ? "1px solid rgba(29, 158, 117, 0.25)"
                      : "1px solid #EEEDEA",
                    borderRadius: 16,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: isFormula
                      ? "0 10px 30px rgba(186, 117, 23, 0.05)"
                      : isEmotion
                      ? "0 8px 30px rgba(29, 158, 117, 0.02)"
                      : "0 6px 20px rgba(0, 0, 0, 0.015)",
                    position: "relative",
                  }}
                >
                  {/* Shared vs Personalized tag */}
                  {node.typeLabel && (
                    <div style={{
                      position: "absolute",
                      top: -12,
                      background: node.color === "#1D9E75" ? "#1D9E75" : node.color === "#BA7517" ? "#BA7517" : "#222222",
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

                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#222222", margin: 0, textAlign: "center", lineHeight: 1.2 }}>
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

                  <div style={{ fontSize: 11.5, color: "#888888", textAlign: "center", lineHeight: 1.4 }}>
                    {node.detail}
                  </div>

                  {node.emotions && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginTop: 4 }}>
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 10, color: "#1D9E75",
                            background: "rgba(29, 158, 117, 0.05)",
                            padding: "2px 6px", borderRadius: 6, fontWeight: 700,
                            border: "1px solid rgba(29, 158, 117, 0.15)",
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
                      fontSize: 10, color: "#888888", fontWeight: 500, textAlign: "center",
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
                      <polygon points="6,0 12,12 0,12" fill="#BA7517" transform="rotate(180 6 6)" />
                    </svg>
                    <span
                      style={{
                        background: "#BA7517",
                        color: "#FFFFFF",
                        fontSize: 11,
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: 6,
                        boxShadow: "0 4px 12px rgba(186, 117, 23, 0.2)",
                      }}
                    >
                      this is what we can read
                    </span>
                  </motion.div>
                )}

                {i < NODES.length - 1 && <Arrow color="rgba(34, 34, 34, 0.15)" delay={delay + 0.05} />}
              </div>
            );
          })}
        </div>

        {/* Bottom Details */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 16, marginTop: 12 }}>
          <motion.div
            {...fadeInUp(0.7)}
            style={{
              flex: 1.1,
              background: "#FFFFFF", border: "1px solid #EEEDEA",
              borderRadius: 14, padding: "14px 20px",
              fontSize: 14, color: "#888888", lineHeight: 1.5,
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div style={{ fontWeight: 800, color: "#222222", marginBottom: 4, fontSize: 15 }}>
              Shared Perception vs. Personalized Judgment
            </div>
            • <strong style={{ color: "#222222" }}>Stage 1 (Perception) is Shared:</strong> Predicts general aesthetic emotions, trained across 104 users to extract standard emotional features.
            <br />
            • <strong style={{ color: "#222222" }}>Stage 2 (Judgment) is Personalized:</strong> Subjective weighting is customized, fitting weights on target user&apos;s adaptation ratings.
          </motion.div>

          <motion.div
            {...fadeInUp(0.8)}
            style={{
              flex: 0.9,
              background: "#FFFFFF", border: "1px solid #EEEDEA",
              borderRadius: 14, padding: "14px 20px",
              fontSize: 13, color: "#888888", lineHeight: 1.45,
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div style={{ fontWeight: 800, color: "#222222", marginBottom: 4, fontSize: 15 }}>Core Statistics &amp; Metrics</div>
            <div><strong style={{ color: "#185FA5" }}>CCC</strong> &mdash; Lin&apos;s Concordance Correlation Coefficient (measures prediction accuracy).</div>
            <div><strong style={{ color: "#1D9E75" }}>emo_r</strong> &mdash; Emotion predictability (individual emotion correlation).</div>
            <div><strong style={{ color: "#BA7517" }}>XPASS-Vis</strong> &mdash; Deep aesthetic dataset: 129 users &middot; 6,526 images.</div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
