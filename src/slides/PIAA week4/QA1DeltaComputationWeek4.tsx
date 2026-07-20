import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function QA1DeltaComputationWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Backup"
        title="How we measure "
        highlight=""emotion helped"."
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
            gap: 14,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#111827" }}>
            Per-User Pairwise Difference Calculation
          </h3>

          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #F3F4F6",
              borderRadius: 14,
              padding: "16px 20px",
              fontFamily: "monospace",
              fontSize: 16,
              fontWeight: 700,
              color: "#7C3AED",
            }}
          >
            delta_(u,d) = Hybrid_CCC_(u,d) − Direct_CCC_(u,d)
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 8 }}>
            <div style={{ background: "#F9FAFB", padding: "14px", borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Data Source</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginTop: 2 }}>exp1_per_user.csv</div>
            </div>
            <div style={{ background: "#F9FAFB", padding: "14px", borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Total Rows</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginTop: 2 }}>387 units (129×3)</div>
            </div>
            <div style={{ background: "#F9FAFB", padding: "14px", borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Retraining Required?</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#10B981", marginTop: 2 }}>Zero (secondary analysis)</div>
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
          <strong style={{ color: "#7C3AED" }}>Strict Experimental Controls: </strong>
          Hybrid and Direct scores are calculated on the exact same test splits, exact same user ratings, and evaluated on identical test folds.
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
        Q&A Slide — Delta computation details
      </motion.div>
    </SlideShell>
  );
}
