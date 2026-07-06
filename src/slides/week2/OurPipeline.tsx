import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { fadeIn, cardRise, expandX } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function OurPipeline() {
  const steps = [
    {
      title: "Input Image",
      desc: "Any artwork, fashion photograph, or landscape scene.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      ),
    },
    {
      title: "Step 1: Shared AI",
      badge: "Trained on all users",
      desc: "A generic model that predicts the 9 emotion scores from picture (e.g. nostalgia = 4/5).",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      ),
      color: "rgba(124, 58, 237,0.06)",
      border: "1px dashed #7C3AED",
    },
    {
      title: "Step 2: Personal Formula",
      badge: "9 weights per user",
      desc: "Each person has a unique set of weights representing how much they care about each emotion when judging beauty.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v17" />
          <path d="M12 6H3" />
          <path d="M12 6h9" />
          <path d="M3 6l3 6h-6l3-6" />
          <path d="M21 6l3 6h-6l3-6" />
          <path d="M12 20H8" />
          <path d="M12 20h4" />
        </svg>
      ),
      color: "rgba(236, 72, 153,0.06)",
      border: "1px dashed #EC4899",
    },
    {
      title: "Personal Score",
      desc: "A custom aesthetic prediction tailored to that specific user.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
      ),
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Architecture"
        title="The Prediction"
        highlight="Pipeline."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 48 }}>
        
        {/* Horizontal Flow Diagram */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {steps.map((step, i) => (
            <div key={step.title} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              
              {/* Step Card */}
              <motion.div
                {...cardRise(i * 0.15)}
                style={{
                  flex: 1,
                  background: step.color || "#FFFFFF",
                  border: step.border || "1px solid #E5E7EB",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                  borderRadius: "20px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 28 }}>{step.icon}</span>
                  {step.badge && (
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: i === 1 ? "#7C3AED" : "#EC4899",
                        background: i === 1 ? "rgba(124, 58, 237,0.1)" : "rgba(236, 72, 153,0.1)",
                        padding: "3px 8px",
                        borderRadius: "12px",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h4 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "0 0 6px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* Connecting Arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  {...expandX(i * 0.15 + 0.1)}
                  style={{
                    width: 32,
                    height: 2,
                    background: "linear-gradient(90deg, #7C3AED, #EC4899)",
                    opacity: 0.6,
                    margin: "0 8px",
                    transformOrigin: "left",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 2 Ridge Regression explanation card */}
        <motion.div
          {...fadeIn(0.6)}
          style={{
            background: "rgba(59, 130, 246, 0.03)",
            border: "1px dashed rgba(59, 130, 246, 0.3)",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p style={{ fontSize: 20, color: "#4B5563", margin: 0, lineHeight: 1.5 }}>
            <strong>Technical Note:</strong> Step 2 is not a trained deep model — it is a simple <strong>Ridge Regression formula</strong> (9 weights per user) computed almost instantly to map emotions to the personal beauty score.
          </p>
        </motion.div>
        
      </div>
    </SlideShell>
  );
}
