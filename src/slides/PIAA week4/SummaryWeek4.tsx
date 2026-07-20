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
    title: "The comparison is now fair",
    desc: "Same data split, and duplicate ratings averaged. We now compare with ICI and MIR on exactly the same images.",
  },
  {
    icon: "02",
    title: "The emotion step really helps",
    desc: "A paired test (Wilcoxon) shows a significant improvement for both backbones (p < 0.001), so it isn't down to chance.",
  },
  {
    icon: "03",
    title: "It helps once you have 25+ images",
    desc: "With fewer than 25 images per person, the emotion step barely helps. Above that, it clearly does.",
  },
  {
    icon: "04",
    title: "Scaling matters for big features",
    desc: "The 4096-number VLM features collapse without StandardScaler. The 512-number CLIP features are barely affected.",
  },
  {
    icon: "05",
    title: "A small tuned model can win",
    desc: "Fine-tuned CLIP (0.400) does better than the frozen Qwen3-VL-8B (0.382). We don't need a huge model.",
  },
  {
    icon: "06",
    title: "Better backbone, less to add",
    desc: "The stronger the backbone, the less the emotion step adds, because a good backbone already carries emotion.",
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
