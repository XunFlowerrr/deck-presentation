import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 600, color: "91, 37, 245", opacity: 0.1 },
];

export function WhatIsAesthemos() {
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
        label="Psychology Foundation"
        title="What is"
        highlight="AESTHEMOS?"
      />

      <div style={{ flex: 1, display: "flex", gap: 64, alignItems: "center", minHeight: 0 }}>
        
        {/* Left Column: Context Card */}
        <motion.div
          {...fadeIn(0.2)}
          style={{
            flex: 1.1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ background: "#FAFAFA", border: "1px solid #E5E7EB", borderRadius: "28px", padding: "40px 48px" }}>
            <h3 style={{ fontSize: 32, fontWeight: 950, color: "#111827", margin: "0 0 20px 0" }}>
              Aesthetic Emotion Scale
            </h3>
            <p style={{ fontSize: 22, color: "#4B5563", lineHeight: 1.6, margin: "0 0 24px 0" }}>
              <strong>AESTHEMOS</strong> (Schindler et al., 2017) is a validated psychology questionnaire designed to measure the specific emotional responses people feel when experiencing beauty and art.
            </p>
            <p style={{ fontSize: 22, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
              Rather than random descriptive tags, XPASS-Vis selected <strong>9 core dimensions</strong> that represent three primary aesthetic emotion families. This provides solid scientific grounding for our explainable pipeline.
            </p>
          </div>
        </motion.div>

        {/* Right Column: 3 Families List */}
        <motion.div
          {...cardRise(0.3)}
          style={{
            flex: 0.9,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 15px 35px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 900, color: "#111827", margin: "0 0 4px 0" }}>
            The 3 Emotion Families
          </h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {(["positive", "cognitive", "negative"] as const).map((type) => {
              const groupEmotions = emotions.filter((e) => e.type === type);
              const config = {
                positive: {
                  label: "Positive Emotions",
                  dot: "#10B981",
                  bg: "rgba(16,185,129,0.06)",
                  color: "#059669",
                  border: "1px solid rgba(16,185,129,0.2)",
                },
                cognitive: {
                  label: "Cognitive Emotions",
                  dot: "#9B72CF",
                  bg: "rgba(155,114,207,0.08)",
                  color: "#9B72CF",
                  border: "1px solid rgba(155,114,207,0.2)",
                },
                negative: {
                  label: "Negative Emotions",
                  dot: "#EF4444",
                  bg: "rgba(239,68,68,0.06)",
                  color: "#DC2626",
                  border: "1px solid rgba(239,68,68,0.2)",
                },
              }[type];

              return (
                <div key={type}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: config.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: 16, fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      {config.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {groupEmotions.map((emo, idx) => (
                      <motion.div
                        key={emo.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05, duration: 0.25 }}
                        style={{
                          padding: "10px 18px",
                          borderRadius: "12px",
                          background: config.bg,
                          color: config.color,
                          border: config.border,
                          fontSize: 18,
                          fontWeight: 700,
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
