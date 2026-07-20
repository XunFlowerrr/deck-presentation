import { motion } from "framer-motion";
import { SlideHeader, SlideShell, PlotImage } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.13 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

// Order and colors mirror the noise-ceiling bar chart on the right.
const NUMBERS = [
  { label: "Our best model", value: "0.400", color: "#2563EB" },
  { label: "Human self-agreement", value: "0.693", color: "#0E9F6E" },
  { label: "P-oracle (inflated)", value: "0.725", color: "#9CA3AF" },
];

export function NoiseCeilingWeek5() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 1 — the ceiling"
        title="Is that ceiling "
        highlight="actually real?"
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {/* Left column: the question + the answer */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Headline numbers */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "24px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            {NUMBERS.map((n) => (
              <div key={n.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    fontWeight: 600,
                    marginBottom: 6,
                    lineHeight: 1.3,
                    minHeight: 34,
                  }}
                >
                  {n.label}
                </div>
                <div style={{ fontSize: 42, fontWeight: 900, color: n.color }}>
                  {n.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Test-retest evidence */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: "26px 30px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#7C3AED",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}
            >
              People do not agree with themselves
            </div>
            <p style={{ margin: 0, fontSize: 17, color: "#374151", lineHeight: 1.55 }}>
              The dataset has a built-in test-retest design: users rated the{" "}
              <strong>SAME image twice</strong> under identical conditions. People gave the
              exact same score only <strong>44%</strong> of the time.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(124, 58, 237, 0.08)",
                padding: "7px 16px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                color: "#7C3AED",
                marginTop: 14,
              }}
            >
              4,509 Repeated Pairs Analyzed
            </div>
          </motion.div>

          {/* Honest ceiling impact */}
          <motion.div
            {...fadeInUp(0.45)}
            style={{
              background:
                "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: 14,
              padding: "20px 24px",
              fontSize: 16,
              color: "#374151",
              lineHeight: 1.55,
            }}
          >
            <strong style={{ color: "#7C3AED" }}>Honest Upper Bound: </strong>
            The P-oracle (0.725) sits <strong>above</strong> human self-agreement because
            emotions &amp; scores share same-session state noise. The real ceiling is ~
            <strong>0.69</strong> — so our 0.400 reaches <strong>~58%</strong> of what is
            actually reachable.
          </motion.div>
        </div>

        {/* Right column: Plot Image */}
        <motion.div {...cardRise(0.25)}>
          <PlotImage
            src="/output/plots/noise_ceiling_bar.png"
            alt="Noise Ceiling Comparison Bar Chart"
            fallbackTitle="Noise Ceiling Comparison"
            fallbackSubtitle="Comparing Model CCC (0.400) vs Human Self-Agreement (0.693) vs P-Oracle (0.725)"
            fallbackStats={[
              { label: "Our best model", value: "0.400", color: "#2563EB" },
              { label: "Human self-agreement", value: "0.693", color: "#0E9F6E" },
              { label: "P-oracle (inflated)", value: "0.725", color: "#9CA3AF" },
            ]}
            maxHeight={560}
          />
        </motion.div>
      </div>

      {/* Definition box corner */}
      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "8px 14px",
          fontSize: 11,
          color: "#6B7280",
          maxWidth: 560,
          lineHeight: 1.4,
        }}
      >
        <strong style={{ color: "#374151" }}>P-oracle</strong> = model given ground-truth user
        emotion ratings &nbsp;·&nbsp;{" "}
        <strong style={{ color: "#374151" }}>test-retest</strong> = same user, same image, rated
        twice
      </motion.div>
    </SlideShell>
  );
}
