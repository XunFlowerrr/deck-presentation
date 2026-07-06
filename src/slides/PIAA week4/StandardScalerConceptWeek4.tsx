import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 680, color: "239, 68, 68", opacity: 0.06 },
  { bottom: -200, right: -120, size: 620, color: "16, 185, 129", opacity: 0.07 },
];

function MiniBars({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values.map(Math.abs), 0.001);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 56 }}>
      {values.map((v, i) => (
        <div
          key={i}
          style={{
            width: 10,
            height: Math.max(3, (Math.abs(v) / max) * 52),
            background: color,
            borderRadius: 2,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

// Illustrative — a 4096-d vector L2-normalized has each entry ~ 1/sqrt(4096) ≈ 0.016 (tiny)
// vs a 512-d CLIP vector ~ 1/sqrt(512) ≈ 0.044 (still small, but Ridge can cope)
const rawVec = [0.8, -0.5, 1.1, -0.3, 0.6, -0.9, 0.4, -0.7, 0.5, -0.4];
const l2Vec4096 = rawVec.map((v) => v * 0.016);
const stdVec = [0.9, -1.2, 1.4, -0.6, 1.0, -1.5, 0.7, -1.1, 0.8, -0.9];

export function StandardScalerConceptWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2 — Concept"
        title="Why does L2-norm break"
        highlight="a 4096-d vector?"
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, marginTop: 6 }}>
        <div style={{ display: "flex", gap: 24 }}>
          {/* LEFT: L2-norm path */}
          <motion.div
            {...cardRise(0.15)}
            style={{
              flex: 1,
              background: "rgba(239,68,68,0.04)",
              border: "1.5px solid rgba(239,68,68,0.18)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 800, color: "#DC2626", textTransform: "uppercase", letterSpacing: 0.4 }}>
              L2-normalization
            </div>

            <div>
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>raw feature vector (illustrative)</div>
              <MiniBars values={rawVec} color="#9CA3AF" />
            </div>

            <div style={{ fontSize: 22, textAlign: "center", color: "#D1D5DB" }}>↓ ÷ vector length</div>

            <div>
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>
                after L2-norm — each value ≈ 1/√4096 ≈ <strong>0.016</strong>
              </div>
              <MiniBars values={l2Vec4096} color="#EF4444" />
            </div>

            <div style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.55, marginTop: 4 }}>
              Every number becomes tiny. Ridge regression can't find a useful pattern,
              so it plays it safe and predicts <strong>close to the average score</strong> for
              everyone.
            </div>

            <div
              style={{
                marginTop: "auto",
                background: "rgba(239,68,68,0.08)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 14,
                color: "#991B1B",
                fontWeight: 600,
              }}
            >
              Ranking (SROCC) survives — relative order is preserved.<br />
              Calibration (CCC) collapses — predicted values barely vary.
            </div>
          </motion.div>

          {/* RIGHT: StandardScaler path */}
          <motion.div
            {...cardRise(0.25)}
            style={{
              flex: 1,
              background: "rgba(16,185,129,0.04)",
              border: "1.5px solid rgba(16,185,129,0.18)",
              borderRadius: 18,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 800, color: "#059669", textTransform: "uppercase", letterSpacing: 0.4 }}>
              StandardScaler
            </div>

            <div>
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>raw feature vector (same one)</div>
              <MiniBars values={rawVec} color="#9CA3AF" />
            </div>

            <div style={{ fontSize: 22, textAlign: "center", color: "#D1D5DB" }}>↓ per-dimension (x−mean)/std</div>

            <div>
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>
                after StandardScaler — every dimension has unit variance
              </div>
              <MiniBars values={stdVec} color="#10B981" />
            </div>

            <div style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.55, marginTop: 4 }}>
              Each of the 4096 dimensions is rescaled on its <strong>own</strong> spread, no
              matter how many dimensions there are. Ridge sees normal-sized numbers and
              fits properly.
            </div>

            <div
              style={{
                marginTop: "auto",
                background: "rgba(16,185,129,0.08)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 14,
                color: "#065F46",
                fontWeight: 600,
              }}
            >
              Both ranking AND calibration recover: CCC 0.006 → 0.376.
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp(0.6)}
          style={{
            background: "rgba(124,58,237,0.04)",
            border: "1px solid rgba(124,58,237,0.15)",
            borderRadius: 14,
            padding: "14px 22px",
            fontSize: 17,
            color: "#4B5563",
            lineHeight: 1.55,
          }}
        >
          Why CLIP (512-d) barely changes: 1/√512 ≈ 0.044 is small but still workable
          for Ridge. At 4096 dimensions, 1/√4096 ≈ 0.016 is four times smaller —
          that's the dimensionality tipping point where L2-norm stops working.
        </motion.div>
      </div>
    </SlideShell>
  );
}
