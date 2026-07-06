import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
];

export function RelatedWork() {
  const works = [
    {
      paper: "ICI (Shi et al., 2024)",
      contribution: "Predicts personal aesthetic score directly using image features and user metadata.",
      difference: "Ours uses emotions as an explainable intermediate step rather than a black-box end-to-end mapping.",
      isTheory: false,
    },
    {
      paper: "HNEF (Lan et al., 2024)",
      contribution: "Leverages emotional attributes as supplementary features to improve general (non-personal) aesthetic predictions.",
      difference: "Ours focuses on personalization, using emotional reactions as the primary signal to capture individual preference.",
      isTheory: false,
    },
    {
      paper: "Iigaya et al. (2021, Nature Human Behaviour)",
      contribution: "Demonstrated that human aesthetic preferences can be modeled as a weighted linear combination of visual features.",
      difference: "Serves as the theoretical backing for our 'personal formula' concept (modeling beauty as a weighted sum of emotions).",
      isTheory: true,
    },
    {
      paper: "Schindler et al. (2017)",
      contribution: "Developed AESTHEMOS, the aesthetic emotion scale our 9 emotions are based on.",
      difference: "Provides the psychological grounding for which emotions we use in our design.",
      isTheory: true,
    },
    {
      paper: "Liu & Wagemans (2026, arXiv:2603.18108)",
      contribution: "Interpretable IAA via concept activation vectors + residual predictor.",
      difference: "Our 'Hybrid' residual-correction idea follows a similar interpretable-core + residual structure.",
      isTheory: false,
    },
    {
      paper: "Ryu & Yanaka (2026, arXiv:2604.11374)",
      contribution: "Shows VLM hidden representations work well for PIAA via simple linear probes.",
      difference: "A candidate stronger image feature for our emotion predictor (Phase 1B direction).",
      isTheory: false,
    },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Context"
        title="Literature &amp; Related"
        highlight="Work."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
        
        {/* Table comparison */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            overflow: "hidden",
            padding: "24px 32px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "25%" }}>PAPER</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "38%" }}>CONTRIBUTION</th>
                <th style={{ padding: "16px 20px", fontSize: 18, fontWeight: 700, color: "#6B7280", width: "37%" }}>RELATION TO OUR WORK</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work, idx) => (
                <tr
                  key={work.paper}
                  style={{
                    borderBottom: idx === works.length - 1 ? "none" : "1px solid #F3F4F6",
                    background: work.isTheory ? "rgba(124, 58, 237,0.03)" : "transparent",
                  }}
                >
                  <td style={{ padding: "24px 20px", verticalAlign: "top" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#111827" }}>
                      {work.paper}
                    </div>
                  </td>
                  <td style={{ padding: "24px 20px", fontSize: 18, lineHeight: 1.6, color: "#4B5563", verticalAlign: "top" }}>
                    {work.contribution}
                  </td>
                  <td style={{ padding: "24px 20px", fontSize: 18, lineHeight: 1.6, color: work.isTheory ? "#7C3AED" : "#374151", fontWeight: work.isTheory ? 500 : 400, verticalAlign: "top" }}>
                    {work.difference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}
