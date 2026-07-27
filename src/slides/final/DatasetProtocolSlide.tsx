import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function DatasetProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Dataset & Protocol"
        title="One dataset "
        highlight="deep enough per person."
        accentWidth={120}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: 3 Big Hero Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingLeft: 20 }}>
          {[
            { num: "129", label: "people", detail: "(evaluators)" },
            { num: "6,526", label: "images", detail: "(unique photos)" },
            { num: "3", label: "categories", detail: "(art, fashion, landscape)" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              {...cardRise(0.1 + idx * 0.08)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 52, fontWeight: 950, color: "#C2185B", lineHeight: 1, letterSpacing: "-1px" }}>
                {item.num}
              </span>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#4A1533", textTransform: "capitalize" }}>
                {item.label} <span style={{ fontSize: 15, color: "#6B5B6E", fontWeight: 500 }}>{item.detail}</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right Column: 2 Main Logic Points in Soft Pink Box */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FCE4EC", // Soft Pink
            border: "1px solid rgba(194, 24, 91, 0.15)",
            borderRadius: 24,
            padding: "36px 32px",
            boxShadow: "0 8px 24px rgba(194, 24, 91, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* Point 1 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0, fontWeight: 900 }}>
              1
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Deep Per Person
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
                Each evaluator rated hundreds of images &rarr; we can fit a robust, personal formula.
              </p>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(194, 24, 91, 0.1)" }} />

          {/* Point 2 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0, fontWeight: 900 }}>
              2
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
                Test-Retest Design
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14.5, color: "#6B5B6E", lineHeight: 1.45, fontWeight: 550 }}>
                A subset of images were rated twice by the same user &rarr; used later to calculate the ceiling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Leak-Free Banner */}
      <motion.div
        {...fadeInUp(0.4)}
        style={{
          marginTop: 24,
          background: "rgba(123, 44, 143, 0.08)", // Light purple tint
          border: "1px solid rgba(123, 44, 143, 0.15)",
          borderRadius: 12,
          padding: "12px 24px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 800, color: "#7B2C8F", letterSpacing: "0.03em" }}>
          leak-free: test users &amp; images never seen in training
        </span>
      </motion.div>
    </SlideShell>
  );
}
DatasetProtocolSlide.slideId = "DatasetProtocol";
