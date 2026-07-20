import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA2DirectConfoundWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Q&A Backup — QA-2"
        title="QA-2: Direct CCC "
        highlight="Confound Explanation."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 18,
            padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
            Why does Direct CCC correlate with Delta before controlling for emo_r?
          </h3>

          <p style={{ margin: 0, fontSize: 15, color: "#4B5563", lineHeight: 1.5 }}>
            A backbone that represents images well produces high quality representations for <strong>BOTH</strong> direct aesthetic scoring and emotion prediction. Thus, Direct CCC and emo_r move together (r = +0.66).
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "rgba(239, 68, 68, 0.06)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "14px", borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: "#991B1B", fontWeight: 700 }}>Uncontrolled Correlation</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#EF4444", marginTop: 2 }}>Direct CCC ↔ delta = +0.15</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>Appears to be a second factor</div>
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "14px", borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: "#065F46", fontWeight: 700 }}>Controlled Partial Correlation</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#10B981", marginTop: 2 }}>Direct CCC ↔ delta | emo_r = −0.04</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>Effect completely vanishes</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#F9FAFB",
            border: "1px solid #F3F4F6",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 14,
            color: "#374151",
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: "#7C3AED" }}>Classic Confounding Variable: </strong>
          Just like children's shoe size correlates with reading ability (where age is the underlying true cause), Direct CCC correlates with delta only because both are driven by backbone quality / emo_r.
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.5)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        Q&A Slide — Confound analysis details
      </motion.div>
    </SlideShell>
  );
}
