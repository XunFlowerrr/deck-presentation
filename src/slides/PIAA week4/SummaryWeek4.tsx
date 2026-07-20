import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 700, color: "16, 185, 129", opacity: 0.1 },
];

const findings = [
  {
    icon: "01",
    title: "The honest ceiling is ~0.69",
    desc: "Self-agreement consistency of 0.693 shows our 0.400 model is at 58% of the reachable ceiling, not 55% as compared to the inflated 0.725 ceiling.",
  },
  {
    icon: "02",
    title: "Emotion helps 92% of users",
    desc: "Expected gain is driven continuously by emo_r (r = +0.30) with no hard threshold—even the hardest-to-read group gains +0.031 on average.",
  },
  {
    icon: "03",
    title: "Art difference is a ceiling effect",
    desc: "High baseline Direct performance (0.384) leaves less headroom for improvement, though statistical significance tests sit right on the borderline.",
  },
  {
    icon: "04",
    title: "Smaller Qwen-4B holds its own",
    desc: "Achieves slightly higher Hybrid CCC (0.385) than the 8B model (0.382) on XPASS-Vis while saving significant computational resources.",
  },
  {
    icon: "05",
    title: "Strong backbones need emotion less",
    desc: "A near-perfect negative correlation (r = −0.95) across 6 models confirms that powerful vision backbones already carry emotional information.",
  },
];

export function SummaryWeek4() {
  const themeColor = "#7C3AED";
  const themeRgb = "124, 58, 237";

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Summary"
        title="Key findings "
        highlight="this round."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 24,
          alignItems: "stretch",
          minHeight: 0,
          paddingBottom: 12,
        }}
      >
        {findings.map((f, i) => (
          <motion.div
            key={f.title}
            {...cardRise(0.1 + i * 0.08)}
            style={{
              background: "#FFFFFF",
              border: `1.5px solid rgba(${themeRgb}, 0.18)`,
              borderRadius: 20,
              padding: "26px 30px",
              minHeight: 140,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              justifyContent: "flex-start",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
              ...(i === findings.length - 1 && findings.length % 2 !== 0
                ? { gridColumn: "span 2" }
                : {}),
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  width: 42,
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 11,
                  background: `rgba(${themeRgb}, 0.12)`,
                  color: themeColor,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </span>
              <h4
                style={{
                  fontSize: 23,
                  fontWeight: 850,
                  color: "#111827",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {f.title}
              </h4>
            </div>
            <p
              style={{
                fontSize: 19,
                color: "#1F2937",
                fontWeight: 500,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
