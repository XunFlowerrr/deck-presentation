import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function StudyOverviewSlide() {
  const mainResults = [
    "Does emotion help?",
    "Comparable to baselines?",
    "When does it help?",
    "How far can it go?",
    "Is the gain real?",
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Overview"
        title="We studied many aspects. "
        highlight="Today: the main results."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
          paddingBottom: 12,
        }}
      >
        {/* Main Content Layout */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
            margin: "auto 0",
          }}
        >
          {/* Left Side: Main Results (Highlighted in Pink) */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid rgba(194, 24, 91, 0.2)",
              borderRadius: 24,
              padding: "28px 32px",
              boxShadow: "0 12px 40px rgba(194, 24, 91, 0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#C2185B" }} />
              <span style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Main Results (Today's Talk)
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {mainResults.map((result, idx) => (
                <div key={result} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", background: "#FCE4EC",
                    color: "#C2185B", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 900, border: "1px solid rgba(194,24,91,0.15)"
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#4A1533" }}>{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Also Studied (Faded Grey) */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 24,
              padding: "28px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              opacity: 0.85,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#9E9E9E" }} />
              <span style={{ fontSize: 13, fontWeight: 900, color: "#9E9E9E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Also Studied (In the paper &amp; journal)
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { name: "Perception vs. Weighting", desc: "Understanding personal taste source" },
                { name: "Backbone Redundancy", desc: "Evaluating larger vision LLMs" },
                { name: "Hard Users", desc: "Analyzing high-variance profiles" },
                { name: "Trait-based Extensions", desc: "Aesthetic-personality connections" },
              ].map((item) => (
                <div key={item.name} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#6B5B6E" }}>{item.name}</span>
                  <span style={{ fontSize: 12, color: "#9E9E9E", fontWeight: 500 }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          {...fadeInUp(0.35)}
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#6B5B6E",
            fontWeight: 700,
            borderTop: "1px solid #EEEDEA",
            paddingTop: 16,
          }}
        >
          &ldquo;I'll focus on the main story, so it stays clear.&rdquo;
        </motion.div>
      </div>
    </SlideShell>
  );
}
