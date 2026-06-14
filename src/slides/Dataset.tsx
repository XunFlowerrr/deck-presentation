import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

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

  const emotions = [
    { name: "Liked it", type: "positive" },
    { name: "Found it beautiful", type: "positive" },
    { name: "Impressed", type: "positive" },
    { name: "Motivated", type: "positive" },
    { name: "Amused", type: "positive" },
    { name: "Nostalgic", type: "cognitive" },
    { name: "Intellectually challenged", type: "cognitive" },
    { name: "Sad", type: "negative" },
    { name: "Distasteful", type: "negative" },
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
            gap: 24,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...cardRise(i * 0.1)}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E7EB",
                borderRadius: "20px",
                padding: "24px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#7C3AED",
                  margin: "8px 0",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 18, color: "#4B5563" }}>{stat.sub}</div>
            </motion.div>
          ))}

          <motion.div
            {...fadeIn(0.5)}
            style={{
              gridColumn: "span 2",
              background: "rgba(124, 58, 237,0.03)",
              border: "1px solid rgba(124, 58, 237,0.1)",
              borderRadius: "20px",
              padding: "20px 24px",
              fontSize: 18,
              color: "#4B5563",
              lineHeight: 1.5,
            }}
          >
            <strong>Note:</strong> Created by Hayashi-san's lab. The inclusion
            of granular, multi-dimensional emotional ratings per person is what
            makes our personalized approach uniquely possible. Most traditional
            datasets only contain general aesthetic averages.
          </motion.div>
        </div>

        {/* Right Side: 9 Emotions List */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            flex: 0.9,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "24px",
            padding: "28px 32px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h3
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 16,
            }}
          >
            List of 9 Rated Emotions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {(["positive", "cognitive", "negative"] as const).map((type) => {
              const groupEmotions = emotions.filter((e) => e.type === type);
              const config = {
                positive: {
                  label: "Positive",
                  dot: "#10B981",
                  bg: "rgba(16,185,129,0.06)",
                  color: "#059669",
                  border: "1px solid rgba(16,185,129,0.2)",
                },
                cognitive: {
                  label: "Cognitive",
                  dot: "#9B72CF",
                  bg: "rgba(155,114,207,0.08)",
                  color: "#9B72CF",
                  border: "1px solid rgba(155,114,207,0.2)",
                },
                negative: {
                  label: "Negative",
                  dot: "#EF4444",
                  bg: "rgba(239,68,68,0.06)",
                  color: "#DC2626",
                  border: "1px solid rgba(239,68,68,0.2)",
                },
              }[type];

              return (
                <div key={type}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: config.dot,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#6B7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {config.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {groupEmotions.map((emo, idx) => (
                      <motion.div
                        key={emo.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.06, duration: 0.3 }}
                        style={{
                          padding: "10px 18px",
                          borderRadius: "12px",
                          background: config.bg,
                          color: config.color,
                          border: config.border,
                          fontSize: 18,
                          fontWeight: 600,
                        }}
                      >
                        {emo.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
