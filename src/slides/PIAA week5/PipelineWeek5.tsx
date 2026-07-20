import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp, fadeIn } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

// The 7 emotions actually used (AESTHEMOS core7 = 9 items minus Like / Beautiful)
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
}

const NODES: PipelineNode[] = [
  {
    label: "Image",
    sub: "input",
    detail: "6,526 photos",
    trainedOn: "art / fashion / landscape",
    color: "#3B82F6",
    rgb: "59, 130, 246",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Backbone",
    sub: "frozen",
    detail: "image → numbers",
    trainedOn: "not trained by us",
    color: "#7C3AED",
    rgb: "124, 58, 237",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    label: "Guess 7 emotions",
    sub: "step 1",
    detail: "how does this photo feel?",
    trainedOn: "trained on 104 other users",
    color: "#EC4899",
    rgb: "236, 72, 153",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    emotions: EMOTIONS,
  },
  {
    label: "Personal formula",
    sub: "step 2",
    detail: "7 weights, one per emotion",
    trainedOn: "trained on this user's 100 photos",
    color: "#06B6D4",
    rgb: "6, 182, 212",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16" />
        <path d="M4 12h10" />
        <path d="M4 19h7" />
        <circle cx="18" cy="14" r="3" />
      </svg>
    ),
  },
  {
    label: "Score",
    sub: "output",
    detail: "0 – 6",
    trainedOn: "how much THIS user likes it",
    color: "#10B981",
    rgb: "16, 185, 129",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="34" height="18" viewBox="0 0 34 18" fill="none">
        <line x1="0" y1="9" x2="23" y2="9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="23,3.5 32,9 23,14.5" fill={color} />
      </svg>
    </motion.div>
  );
}

export function PipelineWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Recap"
        title="How the system "
        highlight="predicts a score."
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
        {/* The two settings we always compare */}
        <motion.div
          {...fadeInUp(0.15)}
          style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 4 }}
        >
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#F3F4F6", padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 600, color: "#4B5563",
            }}
          >
            <span style={{ fontWeight: 800, color: "#6B7280" }}>Direct</span>
            <span>photo → score &nbsp;(skips the emotion step)</span>
          </div>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(236, 72, 153, 0.08)",
              border: "1px solid rgba(236, 72, 153, 0.25)",
              padding: "7px 18px", borderRadius: 20,
              fontSize: 14, fontWeight: 700, color: "#EC4899",
            }}
          >
            <span style={{ fontWeight: 800 }}>Hybrid</span>
            <span>photo → 7 emotions → score</span>
          </div>
        </motion.div>

        {/* Pipeline */}
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center", margin: "auto 0" }}>
          {NODES.map((node, i) => {
            const delay = i * 0.1;
            const isEmotion = i === 2;
            return (
              <div key={node.label} style={{ display: "flex", alignItems: "center" }}>
                <motion.div
                  {...cardRise(delay)}
                  style={{
                    width: isEmotion ? 208 : 168,
                    minHeight: 232,
                    background: `rgba(${node.rgb}, 0.03)`,
                    border: `2px solid rgba(${node.rgb}, ${isEmotion ? "0.4" : "0.2"})`,
                    borderRadius: 16,
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 7,
                    boxShadow: isEmotion
                      ? "0 8px 24px rgba(236, 72, 153, 0.12)"
                      : "0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: `rgba(${node.rgb}, 0.08)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    {node.icon}
                  </div>

                  <h4 style={{ fontSize: 15.5, fontWeight: 800, color: "#111827", margin: 0, textAlign: "center", lineHeight: 1.2 }}>
                    {node.label}
                  </h4>

                  {node.sub && (
                    <span
                      style={{
                        fontSize: 10, fontWeight: 700, color: node.color,
                        background: `rgba(${node.rgb}, 0.1)`,
                        padding: "2px 9px", borderRadius: 10,
                        textTransform: "uppercase", letterSpacing: 0.3,
                      }}
                    >
                      {node.sub}
                    </span>
                  )}

                  <div style={{ fontSize: 11.5, color: "#4B5563", textAlign: "center", lineHeight: 1.35 }}>
                    {node.detail}
                  </div>

                  {node.emotions && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
                      {node.emotions.map((e) => (
                        <span
                          key={e}
                          style={{
                            fontSize: 9.5, color: "#EC4899",
                            background: "rgba(236, 72, 153, 0.07)",
                            padding: "2px 6px", borderRadius: 6, fontWeight: 600,
                          }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* who trains this box — the part people always ask about */}
                  <div
                    style={{
                      marginTop: "auto",
                      fontSize: 10, color: "#9CA3AF", textAlign: "center",
                      lineHeight: 1.3, borderTop: "1px dashed #E5E7EB",
                      paddingTop: 6, width: "100%",
                    }}
                  >
                    {node.trainedOn}
                  </div>
                </motion.div>

                {i < NODES.length - 1 && <Arrow color={`rgba(${node.rgb}, 0.4)`} delay={delay + 0.05} />}
              </div>
            );
          })}
        </div>

        {/* Bottom: how it is trained + definitions */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 16, marginTop: 12 }}>
          <motion.div
            {...fadeInUp(0.7)}
            style={{
              flex: 1.15,
              background: "#F9FAFB", border: "1px solid #E5E7EB",
              borderRadius: 14, padding: "12px 18px",
              fontSize: 13, color: "#4B5563", lineHeight: 1.5,
            }}
          >
            <div style={{ fontWeight: 800, color: "#374151", marginBottom: 5 }}>
              Two separate steps, each fitted on different people
            </div>
            The emotion step learns from <strong style={{ color: "#EC4899" }}>104 other users</strong>, so it
            is the same for everyone. The formula is fitted on the{" "}
            <strong style={{ color: "#06B6D4" }}>target user's own 100 photos</strong> — that is where
            personalisation happens. Both steps are simple ridge regression, not neural networks.
          </motion.div>

          <motion.div
            {...fadeInUp(0.8)}
            style={{
              flex: 1,
              background: "#F3F4F6", border: "1px solid #E5E7EB",
              borderRadius: 14, padding: "12px 16px",
              fontSize: 11.5, color: "#6B7280", lineHeight: 1.5,
            }}
          >
            <div style={{ fontWeight: 800, color: "#374151", marginBottom: 4 }}>Terms &amp; data</div>
            <div><strong style={{ color: "#4B5563" }}>CCC</strong> — how close predictions are to real scores (0–1). Punishes wrong order <em>and</em> wrong size.</div>
            <div><strong style={{ color: "#4B5563" }}>emo_r</strong> — how well we guess this person's emotions. Average now <strong>0.27</strong>.</div>
            <div style={{ marginTop: 3 }}>
              <strong style={{ color: "#4B5563" }}>XPASS-Vis</strong> — 129 users · 6,526 photos · 3 domains · 87,836 ratings · scores 0–6
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
