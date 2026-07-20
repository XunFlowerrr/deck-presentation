import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -120, size: 800, color: "16, 185, 129", opacity: 0.12 },
  { bottom: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.1 },
];

const nextSteps = [
  {
    num: "1",
    title: "Cold-start analysis",
    desc: "How many ratings needed before personal model beats population formula?",
  },
  {
    num: "2",
    title: "Trait-conditioned emotion prediction",
    desc: "Can trait vectors predict how a user's emotions deviate from population? If yes → zero-shot personalization.",
  },
];

export function NextStepsWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Next Steps"
        title="What comes "
        highlight="next."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 0,
          paddingBottom: 24,
        }}
      >
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF",
            border: "2px solid rgba(16, 185, 129, 0.25)",
            borderRadius: 24,
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: "#10B981",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            What I plan to try next
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {nextSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  background: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  padding: "20px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.1)",
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </span>

                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#111827",
                      margin: "0 0 6px",
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 19,
                      color: "#374151",
                      fontWeight: 600,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom note */}
      <motion.div
        {...fadeInUp(0.4)}
        style={{
          textAlign: "center",
          padding: "8px 0 8px",
          fontSize: 19,
          color: "#6B7280",
          fontStyle: "italic",
          fontWeight: 500,
        }}
      >
        Not in a hurry — can continue from Thailand after the internship if needed.
      </motion.div>
    </SlideShell>
  );
}
