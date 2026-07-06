import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.08 },
];

export function RecapWeek4() {
  const findings = [
    {
      num: "Week 1",
      title: "Emotion mediation is feasible",
      desc: "P-oracle = 0.72 (upper bound). When we feed in the true emotions, we clearly beat predicting beauty directly.",
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.03)",
    },
    {
      num: "Week 2a",
      title: "Emotion formula vs personality",
      desc: "No strong link found. The beauty formula does not reduce to Big Five personality traits in any simple way.",
      accent: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.03)",
    },
    {
      num: "Week 2b",
      title: "Formula stable across image types",
      desc: "The personal emotion formula stays consistent across Art, Fashion, and Landscape domains. New finding.",
      accent: "#10B981",
      bg: "rgba(16, 185, 129, 0.03)",
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Quick Recap"
        title="Last two weeks'"
        highlight="Key findings."
      />

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24, alignItems: "stretch", justifyContent: "center", minHeight: 0, paddingBottom: 12, maxWidth: 1400, margin: "0 auto" }}>
        {findings.map((f, i) => (
          <motion.div
            key={f.num}
            {...cardRise(i * 0.1)}
            style={{
              background: f.bg,
              border: `1px solid ${f.accent}24`,
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
                backgroundColor: f.accent,
                padding: "5px 11px",
                borderRadius: "9px",
                textTransform: "uppercase",
                flexShrink: 0,
                alignSelf: "center",
              }}
            >
              {f.num}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
              <h4 style={{ fontSize: 25, fontWeight: 850, color: "#111827", margin: 0, lineHeight: 1.18 }}>
                {f.title}
              </h4>
              <p style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.55, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
