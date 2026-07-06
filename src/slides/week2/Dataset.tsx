import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
];

export function Dataset() {
  const stats = [
    { label: "Images", value: "6,526", sub: "Art, Fashion, Landscape" },
    { label: "Participants", value: "129", sub: "Individual evaluators" },
    { label: "Total Ratings", value: "87,836", sub: "Fully labeled examples" },
    {
      label: "Labels per Rating",
      value: "1 + 9",
      sub: "1 Beauty (1-7) + 9 Emotions (1-5)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Data Source"
        title="The XPASS-Vis"
        highlight="Dataset."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 64,
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {/* Left Side: Stats Grid */}
        <div
          style={{
            flex: 1.1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...cardRise(i * 0.1)}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E7EB",
                borderRadius: "24px",
                padding: "36px 40px",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 950,
                  color: "#7C3AED",
                  margin: "12px 0",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 20, color: "#4B5563" }}>{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Simplified Observer Metadata */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            flex: 0.9,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "40px 48px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#111827",
              margin: 0,
            }}
          >
            Observer Metadata Collected
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Demographics */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#7C3AED", marginTop: 8, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>Demographics</div>
                <div style={{ fontSize: 18, color: "#4B5563", marginTop: 4 }}>Nationality, Educational background</div>
              </div>
            </div>

            {/* Personality Traits */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EC4899", marginTop: 8, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>Personality Traits (TIPI)</div>
                <div style={{ fontSize: 18, color: "#4B5563", marginTop: 4 }}>Big Five: Openness, Conscientiousness, Extraversion, Agreeableness, Emotional Stability</div>
              </div>
            </div>

            {/* AESTHEMOS */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981", marginTop: 8, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>AESTHEMOS Emotions</div>
                <div style={{ fontSize: 18, color: "#4B5563", marginTop: 4 }}>9 Aesthetic emotional responses (categorized into Positive, Cognitive, and Negative groups)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
