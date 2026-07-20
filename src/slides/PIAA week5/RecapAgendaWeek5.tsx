import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

const AGENDA = [
  {
    n: "01",
    color: "#EC4899",
    title: "Qwen3-VL-4B Model",
    desc: "Testing the smaller 4B model recommended in Ryu & Yanaka to check compute vs accuracy.",
  },
  {
    n: "02",
    color: "#7C3AED",
    title: "Mechanism Breakdown",
    desc: "In which cases does emotion help users, and in which cases does it hurt?",
  },
  {
    n: "03",
    color: "#06B6D4",
    title: "Noise Ceiling Analysis",
    desc: "Uncovering the true upper bound by accounting for human self-agreement.",
  },
];

function SectionLabel({
  text,
  color,
  tint,
}: {
  text: string;
  color: string;
  tint: string;
}) {
  return (
    <span
      style={{
        alignSelf: "flex-start",
        fontSize: 12,
        fontWeight: 800,
        color,
        background: tint,
        padding: "4px 12px",
        borderRadius: 12,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {text}
    </span>
  );
}

export function RecapAgendaWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Recap & Agenda"
        title="Previous Finding & "
        highlight="Today's Goals."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 22,
          minHeight: 0,
          paddingBottom: 44,
        }}
      >
        {/* Timeline: past checkpoint (subtle) → today (highlighted) */}
        <motion.div
          {...fadeInUp(0.08)}
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 32,
            alignItems: "center",
            height: 26,
            marginTop: 30,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              marginTop: -1,
              height: 2,
              borderRadius: 2,
              background:
                "linear-gradient(90deg, #E5E7EB 0%, #E5E7EB 40%, rgba(236, 72, 153, 0.5) 100%)",
            }}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{
                position: "relative",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#FFFBF5",
                border: "2px solid #D1D5DB",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{
                position: "relative",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#EC4899",
                border: "3px solid #FFFBF5",
                boxShadow: "0 0 0 5px rgba(236, 72, 153, 0.18)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginBottom: 12,
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#EC4899",
                  letterSpacing: "0.04em",
                }}
              >
                21 July 2026
              </span>
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 32,
            alignItems: "stretch",
          }}
        >
        {/* Left: Last Time */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 18,
            padding: "28px 30px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <SectionLabel
            text="Last Time (Update #3)"
            color="#7C3AED"
            tint="rgba(124, 58, 237, 0.1)"
          />

          <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827", lineHeight: 1.25 }}>
            Baseline Performance & Qwen Findings
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: "18px 22px",
              }}
            >
              <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 6 }}>
                Strongest Overall Baseline
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#10B981", lineHeight: 1.45 }}>
                Fine-tuned CLIP remains our highest performing model (CCC ≈ 0.400).
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: "18px 22px",
              }}
            >
              <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 6 }}>
                Qwen3-VL Finding (Ryu & Yanaka)
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#7C3AED", lineHeight: 1.45 }}>
                Tested 8B: The stronger the backbone, the smaller the Hybrid−Direct gap.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Today's Agenda */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            background: "#FFFFFF",
            border: "2px solid rgba(236, 72, 153, 0.35)",
            borderRadius: 18,
            padding: "28px 30px",
            boxShadow: "0 12px 40px rgba(236, 72, 153, 0.14)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <SectionLabel
            text="Today (Update #4)"
            color="#EC4899"
            tint="rgba(236, 72, 153, 0.1)"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {AGENDA.map((item) => (
              <div
                key={item.n}
                style={{
                  background: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  borderRadius: 14,
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 34,
                    fontWeight: 900,
                    color: item.color,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontSize: 19, fontWeight: 800, color: "#111827" }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: 15, color: "#6B7280", lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

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
        Baseline paper: Ryu & Yanaka (2024) · Dataset: Hayashi-san et al. (XPASS-Vis)
      </motion.div>
    </SlideShell>
  );
}
