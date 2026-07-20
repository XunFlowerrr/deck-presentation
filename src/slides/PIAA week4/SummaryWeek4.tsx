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
    title: "The true human ceiling is about 0.69, not 0.725",
    desc: "Measuring 4,509 image rating pairs where the same person rated the exact same photo twice shows a self-agreement of 0.693. The old 0.725 ceiling was inflated by shared mood noise because emotions and scores were rated in the same sitting.",
  },
  {
    icon: "02",
    title: "Emotion helps 92 percent of people",
    desc: "Expected gain is a gradual effect driven by how well we read their feelings, not a fixed cutoff, and not about how strong the plain model is on its own. Even the hardest-to-read group still sees a small average gain (+0.031).",
  },
  {
    icon: "03",
    title: "Direct model strength is not the real driver of the gain",
    desc: "Direct strength correlates with gains at r = +0.15, but it moves closely with emo_r at +0.66. Removing emo_r's influence via partial correlation drops Direct's correlation to −0.08 (non-significant), showing that only emotion accuracy truly matters.",
  },
  {
    icon: "04",
    title: "Art difference is a ceiling effect, not a new mechanism",
    desc: "Art looks different mostly because it's already close to its ceiling, not because it works by a different mechanism—though the evidence there is borderline. Controlling for baseline strength via partial correlation restores significance (+0.175, p=0.048).",
  },
  {
    icon: "05",
    title: "Stronger backbones need emotion less",
    desc: "A near-perfect negative correlation (r = −0.95) across 6 models confirms that powerful backbones already capture emotional features. The smaller 4B model holds up fine, adding a sixth data point to this clean pattern.",
  },
];

export function SummaryWeek4() {
  const themeColor = "#7C3AED";
  const themeRgb = "124, 58, 237";

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Summary"
        title="To sum "
        highlight="up."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
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
              borderRadius: 18,
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
            }}
          >
            <span
              style={{
                fontSize: 20,
                width: 46,
                height: 46,
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
                {f.title}
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
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
