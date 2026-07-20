import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function CaseStudyWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — real examples"
        title="Two photos, "
        highlight="side by side."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {/* 2 Column Comparison: Helped vs Hurt */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          {/* Column 1: EMOTION HELPED */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 8px 30px rgba(16, 185, 129, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#10B981",
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "4px 14px",
                  borderRadius: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Emotions helped  ·  error 1.23 → 0.57
              </span>
              <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>clear feelings</span>
            </div>

            {/* Score Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Ground Truth</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#111827" }}>5.00</div>
              </div>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Direct Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#6B7280" }}>3.57</div>
              </div>
              <div style={{ background: "rgba(16, 185, 129, 0.08)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#065F46", fontWeight: 700 }}>Hybrid Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#10B981" }}>5.02</div>
              </div>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                Strong, clear feelings &nbsp;(spread = 1.35)
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.45 }}>
                This photo scores high on <strong style={{ color: "#10B981" }}>impressed, intellectual and amused</strong> (4 out of 5 each).
                The feelings are easy to read, so passing through them gives the model something useful to work with.
              </p>
            </div>
          </motion.div>

          {/* Column 2: EMOTION HURT */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 8px 30px rgba(239, 68, 68, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#EF4444",
                  background: "rgba(239, 68, 68, 0.1)",
                  padding: "4px 14px",
                  borderRadius: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Emotions hurt  ·  error 2.77 → 3.43
              </span>
              <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>vague feelings</span>
            </div>

            {/* Score Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Ground Truth</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#111827" }}>5.00</div>
              </div>
              <div style={{ background: "#F9FAFB", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Direct Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#6B7280" }}>2.23</div>
              </div>
              <div style={{ background: "rgba(239, 68, 68, 0.08)", padding: "12px", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#991B1B", fontWeight: 700 }}>Hybrid Score</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#EF4444" }}>1.57</div>
              </div>
            </div>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                Weak, unclear feelings &nbsp;(spread = 0.64)
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#4B5563", lineHeight: 1.45 }}>
                Nothing stands out — the highest feeling is only <strong style={{ color: "#EF4444" }}>motivated / amused at 3 out of 5</strong>,
                and the person still rated the photo 5.0. With no clear feeling to read, the emotion step passes on noise instead of information.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Takeaway */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            background: "#F9FAFB",
            border: "1px solid #F3F4F6",
            borderRadius: 14,
            padding: "14px 20px",
            fontSize: 14,
            color: "#374151",
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#7C3AED" }}>What this tells us: </strong>
          Going through emotions helps when the photo makes people feel something clear, and gets in the way when the feelings are vague.
        </motion.div>
      </div>

      {/* Small definition box at bottom right */}
      <motion.div
        {...fadeInUp(0.6)}
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
        Only 3 photos per side — these are examples, not proof
      </motion.div>
    </SlideShell>
  );
}
