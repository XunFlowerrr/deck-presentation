import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function EmotionHelpFramingWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — when do emotions help"
        title="From an average "
        highlight="to a reason."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
        }}
      >
        <motion.h2
          {...cardRise(0.15)}
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#111827",
            textAlign: "center",
            margin: 0,
            letterSpacing: "-1px",
            lineHeight: 1.25,
          }}
        >
          When does emotion-mediation <span style={{ color: "#10B981" }}>HELP</span>,
          <br />
          and when does it <span style={{ color: "#EF4444" }}>HURT</span>?
        </motion.h2>

        {/* 2 Angles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            width: "100%",
            maxWidth: 960,
          }}
        >
          {/* Angle 1: USER Level */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(124, 58, 237, 0.25)",
              borderRadius: 20,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "0 8px 30px rgba(124, 58, 237, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(124, 58, 237, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#7C3AED",
                }}
              >
                1
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                USER one by one
              </span>
            </div>

            <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>
              Which <span style={{ color: "#7C3AED" }}>PEOPLE</span> does emotion help?
            </h3>

            <p style={{ margin: 0, fontSize: 15, color: "#6B7280", lineHeight: 1.5 }}>
              We look at each of the 129 users one by one: how well we read their feelings, how strong the plain model already is, and whether the domain changes anything.
            </p>
          </motion.div>

          {/* Angle 2: IMAGE Level */}
          <motion.div
            {...cardRise(0.42)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(236, 72, 153, 0.25)",
              borderRadius: 20,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "0 8px 30px rgba(236, 72, 153, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(236, 72, 153, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#EC4899",
                }}
              >
                2
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#EC4899",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                IMAGE one by one
              </span>
            </div>

            <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>
              Which <span style={{ color: "#EC4899" }}>IMAGES</span> does emotion help?
            </h3>

            <p style={{ margin: 0, fontSize: 15, color: "#6B7280", lineHeight: 1.5 }}>
              Grouping images by dominant evoked emotions, emotional profile clarity, and emotional agreement across image categories.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Definition box corner */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Secondary analysis of existing experimental runs — zero retraining
      </motion.div>
    </SlideShell>
  );
}
