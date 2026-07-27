import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp, fadeIn } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

const EMOTIONS = [
  "impressed",
  "intellectual",
  "motivated",
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
    color: "#2D3136",
    rgb: "45, 49, 54",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#2D3136" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#2D3136",
    rgb: "45, 49, 54",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#2D3136" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#C24F71",
    rgb: "194, 79, 113",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#C24F71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#2D3136",
    rgb: "45, 49, 54",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#2D3136" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    color: "#2D3136",
    rgb: "45, 49, 54",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#2D3136" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="37" height="18" viewBox="0 0 37 18" fill="none">
        <line x1="0" y1="9" x2="26" y2="9" stroke={color} strokeWidth="2.0" strokeLinecap="round" />
        <polygon points="26,3.5 35,9 26,14.5" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader
        label="Pipeline"
        title="Direct vs Hybrid "
        highlight="System Pathways."
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
              background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)",
              padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 700, color: "#2D3136",
              boxShadow: "0 4px 12px rgba(45, 49, 54, 0.02)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Direct Pathway</span>
            <span>photo &rarr; score &nbsp;(skips the emotion mediation step)</span>
          </div>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#FFFFFF",
              border: "1px solid rgba(194, 79, 113, 0.15)",
              padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 700, color: "#C24F71",
              boxShadow: "0 6px 16px rgba(194, 79, 113, 0.04)",
            }}
          >
            <span style={{ fontWeight: 800 }}>Hybrid Pathway</span>
            <span>photo &rarr; 7 emotions &rarr; score (mediates via explainable emotions)</span>
          </div>
        </motion.div>

        {/* Pipeline Diagram */}
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center", margin: "auto 0" }}>
          {NODES.map((node, i) => {
            const delay = i * 0.1;
            const isEmotion = i === 2;
            const isFormula = i === 3;
            return (
              <div key={node.label} style={{ display: "flex", alignItems: "center" }}>
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: isEmotion ? 250 : 210,
                    minHeight: 290,
                    background: "#FFFFFF",
                    border: isEmotion || isFormula
                      ? "1px solid rgba(194, 79, 113, 0.25)"
                      : "1px solid rgba(45, 49, 54, 0.08)",
                    borderRadius: 16,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: isEmotion || isFormula
                      ? "0 8px 30px rgba(194, 79, 113, 0.04)"
                      : "0 6px 20px rgba(45, 49, 54, 0.03)",
                    position: "relative",
                  }}
                >
                  {/* Shared vs Personalized tag */}
                  {node.typeLabel && (
                    <div style={{
                      position: "absolute",
                      top: -12,
                      background: node.color === "#C24F71" ? "#C24F71" : "#2D3136",
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
                      background: `rgba(${node.rgb === "194, 79, 113" ? "194, 79, 113" : "45, 49, 54"}, 0.06)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    {node.icon}
                  </div>

                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#2D3136", margin: 0, textAlign: "center", lineHeight: 1.2 }}>
                    {node.label}
                  </h4>

                  {node.sub && (
                    <span
                      style={{
                        fontSize: 10, fontWeight: 700, color: node.color,
                        background: `rgba(${node.rgb === "194, 79, 113" ? "194, 79, 113" : "45, 49, 54"}, 0.06)`,
                        padding: "2px 10px", borderRadius: 10,
                        textTransform: "uppercase", letterSpacing: 0.3,
                        border: `1.5px solid ${node.color === "#C24F71" ? "rgba(194, 79, 113, 0.2)" : "rgba(45, 49, 54, 0.15)"}`,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  <div style={{ fontSize: 11, color: "#626B74", textAlign: "center", lineHeight: 1.4 }}>
                    {node.detail}
                  </div>

                  {node.emotions && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 10, color: "#C24F71",
                            background: "rgba(194, 79, 113, 0.05)",
                            padding: "2px 6px", borderRadius: 6, fontWeight: 600,
                            border: "1px solid rgba(194, 79, 113, 0.15)",
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
                      fontSize: 10, color: "#9CA3AF", textAlign: "center",
                      lineHeight: 1.35, borderTop: "1px dashed #E5E7EB",
                      paddingTop: 8, width: "100%",
                    }}
                  >
                    {node.trainedOn}
                  </div>
                </motion.div>

                {i < NODES.length - 1 && <Arrow color="rgba(45, 49, 54, 0.2)" delay={delay + 0.05} />}
              </div>
            );
          })}
        </div>

        {/* Bottom Details */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 16, marginTop: 8 }}>
          <motion.div
            {...fadeInUp(0.7)}
            style={{
              flex: 1.15,
              background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)",
              borderRadius: 14, padding: "14px 20px",
              fontSize: 14, color: "#626B74", lineHeight: 1.5,
              boxShadow: "0 6px 20px rgba(45, 49, 54, 0.02)",
            }}
          >
            <div style={{ fontWeight: 800, color: "#2D3136", marginBottom: 4, fontSize: 15 }}>
              Shared Perception vs. Personalized Judgment
            </div>
            • <strong>Stage 1 (Perception) is Shared:</strong> The emotion predictor is general, trained across 104 typical users to extract objective emotional characteristics.
            <br />
            • <strong>Stage 2 (Judgment) is Personalized:</strong> Subjective evaluation is customized, fitting linear weights on the target user&apos;s 100 adaptation ratings.
          </motion.div>

          <motion.div
            {...fadeInUp(0.8)}
            style={{
              flex: 1,
              background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.12)",
              borderRadius: 14, padding: "14px 20px",
              fontSize: 13, color: "#626B74", lineHeight: 1.45,
              boxShadow: "0 6px 20px rgba(194, 79, 113, 0.02)",
            }}
          >
            <div style={{ fontWeight: 800, color: "#2D3136", marginBottom: 4, fontSize: 15 }}>Core Statistics &amp; Metrics</div>
            <div><strong style={{ color: "#2D3136" }}>CCC</strong> &mdash; Lin&apos;s Concordance Correlation Coefficient (measures alignment &amp; scale).</div>
            <div><strong style={{ color: "#2D3136" }}>emo_r</strong> &mdash; Emotion prediction accuracy (measures user emotion alignment).</div>
            <div><strong style={{ color: "#2D3136" }}>XPASS-Vis</strong> &mdash; Aesthetic dataset: 129 users &middot; 6,526 images &middot; 87k ratings.</div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
