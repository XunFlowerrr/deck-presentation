import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.08 },
];

export function RecapWeek3() {
  const experiments = [
    {
      num: "1",
      title: "We found each person's \"beauty formula\"",
      desc: "A set of 7 numbers showing how much each person cares about each emotion when judging beauty.",
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
    },
    {
      num: "2",
      title: "Beauty preference is personal at the perception level",
      desc: "When we replaced a person's own emotion scores with the average from other people viewing the same image, accuracy dropped from 0.72 → 0.33.",
      accent: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
    },
    {
      num: "3",
      title: "Hybrid pipeline beats Direct prediction at every data level",
      desc: "Biggest gain: +40% when we only have 10 images per person (0.153 vs 0.109 CCC).",
      accent: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Quick Recap"
        title="Last week's key findings"
        highlight="Quick recap."
      />

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24, alignItems: "stretch", justifyContent: "center", minHeight: 0, paddingBottom: 12, maxWidth: 1400, margin: "0 auto" }}>
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.num}
            {...cardRise(i * 0.1)}
            style={{
              background: exp.bg,
              border: `1px solid ${exp.accent}24`,
              borderRadius: "24px",
              padding: "30px 30px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              minHeight: 320,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 900,
                color: "white",
                backgroundColor: exp.accent,
                padding: "5px 11px",
                borderRadius: "9px",
                textTransform: "uppercase",
                flexShrink: 0,
                alignSelf: "center",
              }}
            >
              {exp.num}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
              <h4 style={{ fontSize: 25, fontWeight: 850, color: "#111827", margin: 0, lineHeight: 1.18 }}>
                {exp.title}
              </h4>
              <p style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.55, margin: 0 }}>
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
