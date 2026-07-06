import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -100, size: 700, color: "16, 185, 129", opacity: 0.1 },
];

const findings = [
  {
    icon: "1",
    title: "The comparison is now fair",
    desc: "Same data split, and duplicate ratings averaged. We now compare with ICI and MIR on exactly the same images.",
    color: "#10B981",
    rgb: "16, 185, 129",
  },
  {
    icon: "2",
    title: "The emotion step really helps",
    desc: "The Wilcoxon test shows a significant improvement for both backbones (p < 0.001), so it isn't down to chance.",
    color: "#7C3AED",
    rgb: "124, 58, 237",
  },
  {
    icon: "3",
    title: "It helps once you have 25+ images",
    desc: "With fewer than 25 images per person, the emotion step barely helps. Above that, it clearly does.",
    color: "#3B82F6",
    rgb: "59, 130, 246",
  },
  {
    icon: "4",
    title: "Scaling matters for big features",
    desc: "The 4096-number VLM features collapse without StandardScaler. The 512-number CLIP features are barely affected.",
    color: "#06B6D4",
    rgb: "6, 182, 212",
  },
  {
    icon: "5",
    title: "A small tuned model can win",
    desc: "Fine-tuned CLIP (0.400) does better than the frozen Qwen3-VL-8B (0.382). We don't need a huge model.",
    color: "#EC4899",
    rgb: "236, 72, 153",
  },
  {
    icon: "6",
    title: "Better backbone, less to add",
    desc: "The stronger the backbone, the less the emotion step adds, because a good backbone already carries emotion.",
    color: "#F59E0B",
    rgb: "245, 158, 11",
  },
];

export function SummaryWeek4() {
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
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
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
              background: `rgba(${f.rgb}, 0.03)`,
              border: `1px solid rgba(${f.rgb}, 0.15)`,
              borderRadius: 20,
              padding: "28px 28px",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  background: `rgba(${f.rgb}, 0.1)`,
                  color: f.color,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </span>
              <h4
                style={{
                  fontSize: 21,
                  fontWeight: 850,
                  color: f.color,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h4>
            </div>
            <p
              style={{
                fontSize: 18,
                color: "#4B5563",
                lineHeight: 1.6,
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
