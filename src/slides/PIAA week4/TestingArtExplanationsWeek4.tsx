import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function TestingArtExplanationsWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — Hypothesis Testing"
        title="Testing the Two "
        highlight="Explanations."
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
        {/* Table of 3 Diagnostic Tests */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 20,
            padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.5fr", gap: 16, marginBottom: 12, borderBottom: "1px solid #F3F4F6", paddingBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Diagnostic Test</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Statistical Result</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Finding Interpretation</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Test 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.5fr", gap: 16, alignItems: "center", padding: "12px 14px", background: "#F9FAFB", borderRadius: 12 }}>
              <div>
                <strong style={{ color: "#111827", fontSize: 14 }}>1. Partial Correlation (controlling Direct CCC)</strong>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Removes the baseline strength ceiling confound</div>
              </div>
              <div>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#10B981" }}>Art p = 0.048 ✓</span>
              </div>
              <div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED" }}>Supports Ceiling (H1)</span>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Art becomes significant once controlled</div>
              </div>
            </div>

            {/* Test 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.5fr", gap: 16, alignItems: "center", padding: "12px 14px", background: "#F9FAFB", borderRadius: 12 }}>
              <div>
                <strong style={{ color: "#111827", fontSize: 14 }}>2. Variance of Delta per Domain (SD)</strong>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Measures available headroom for gain</div>
              </div>
              <div>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#7C3AED" }}>Art Lowest SD</span>
              </div>
              <div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED" }}>Supports Ceiling (H1)</span>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Less headroom limits correlation variance</div>
              </div>
            </div>

            {/* Test 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.5fr", gap: 16, alignItems: "center", padding: "12px 14px", background: "#F9FAFB", borderRadius: 12 }}>
              <div>
                <strong style={{ color: "#111827", fontSize: 14 }}>3. Domain Interaction Test</strong>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Regression: delta ~ emo_r × domain</div>
              </div>
              <div>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#EF4444" }}>p = 0.056 (ns)</span>
              </div>
              <div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#4B5563" }}>No Evidence for H2</span>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Slopes do not statistically differ</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion Callout & Borderline Warning */}
        <motion.div
          {...cardRise(0.35)}
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(239, 68, 68, 0.05))",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: 16,
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#7C3AED" }}>
              Conclusion: Evidence Favours CEILING EFFECT (H1)
            </div>
            <div style={{ fontSize: 14, color: "#4B5563", marginTop: 2 }}>
              We have no evidence for a different aesthetic mechanism in art; the weaker correlation is explained by high baseline performance.
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px border rgba(239, 68, 68, 0.3)",
              padding: "10px 16px",
              borderRadius: 12,
              fontSize: 12,
              color: "#991B1B",
              fontWeight: 700,
              maxWidth: 320,
              textAlign: "right",
            }}
          >
            Borderline Note: All three p-values sit right on the p = 0.05 boundary (p=0.048, lowest SD, p=0.056).
          </div>
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
        <strong style={{ color: "#374151" }}>"not significant" ≠ "proven the same"</strong> — absence of evidence is not evidence of absence
      </motion.div>
    </SlideShell>
  );
}
