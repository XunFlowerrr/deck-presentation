import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -200, left: -100, size: 700, color: "59, 130, 246", opacity: 0.08 },
];

export function WilcoxonGraphWeek4() {
  const clipPoints = [
    { x: 100, y: 380, val: "68.0%", label: "n=10" },
    { x: 300, y: 220, val: "84.0%", label: "n=25" },
    { x: 500, y: 161, val: "89.9%", label: "n=50" },
    { x: 700, y: 143, val: "91.7%", label: "n=100" },
  ];
  
  const qwenPoints = [
    { x: 100, y: 380, val: "68.0%", label: "n=10" },
    { x: 300, y: 277, val: "78.3%", label: "n=25" },
    { x: 500, y: 267, val: "79.3%", label: "n=50" },
    { x: 700, y: 259, val: "80.1%", label: "n=100" },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1 — Visualizing Wilcoxon"
        title="Win rate by"
        highlight="support size (n)."
        tagline="How the percentage of users with positive gains (Hybrid CCC > Direct CCC) scales as more user ratings are available."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {/* LEFT: SVG Graph (Larger) */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            flex: 1.4,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 24,
            padding: "30px 40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ position: "relative", width: "100%", height: 380 }}>
            <svg viewBox="0 0 800 440" style={{ width: "100%", height: "100%" }}>
              {/* Gridlines */}
              <line x1="80" y1="60" x2="740" y2="60" stroke="#F3F4F6" strokeWidth={1} />
              <line x1="80" y1="160" x2="740" y2="160" stroke="#F3F4F6" strokeWidth={1} />
              <line x1="80" y1="260" x2="740" y2="260" stroke="#F3F4F6" strokeWidth={1} />
              <line x1="80" y1="380" x2="740" y2="380" stroke="#F3F4F6" strokeWidth={1.5} />
              <line x1="80" y1="420" x2="740" y2="420" stroke="#E5E7EB" strokeWidth={2} />
              
              {/* Y-axis Title */}
              <text x="25" y="220" fontSize="14" fontWeight="700" fill="#4B5563" textAnchor="middle" transform="rotate(-90 25 220)">
                Hybrid Win % (Users with Hybrid &gt; Direct CCC)
              </text>

              {/* Y-axis Labels */}
              <text x="68" y="64" fontSize="13" fontWeight="600" fill="#9CA3AF" textAnchor="end">100%</text>
              <text x="68" y="164" fontSize="13" fontWeight="600" fill="#9CA3AF" textAnchor="end">90%</text>
              <text x="68" y="264" fontSize="13" fontWeight="600" fill="#9CA3AF" textAnchor="end">80%</text>
              <text x="68" y="384" fontSize="13" fontWeight="600" fill="#9CA3AF" textAnchor="end">70%</text>
              
              {/* X-axis Labels */}
              <text x="100" y="405" fontSize="13" fontWeight="700" fill="#4B5563" textAnchor="middle">n = 10</text>
              <text x="300" y="405" fontSize="13" fontWeight="700" fill="#4B5563" textAnchor="middle">n = 25</text>
              <text x="500" y="405" fontSize="13" fontWeight="700" fill="#4B5563" textAnchor="middle">n = 50</text>
              <text x="700" y="405" fontSize="13" fontWeight="700" fill="#4B5563" textAnchor="middle">n = 100</text>

              {/* X-axis Title */}
              <text x="410" y="434" fontSize="14" fontWeight="700" fill="#4B5563" textAnchor="middle">
                Support Size (n) — Number of User Ratings Available
              </text>

              {/* Qwen2 Line */}
              <path
                d="M 100 380 L 300 277 L 500 267 L 700 259"
                fill="none"
                stroke="#3B82F6"
                strokeWidth={4.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* CLIP Line */}
              <path
                d="M 100 380 L 300 220 L 500 161 L 700 143"
                fill="none"
                stroke="#7C3AED"
                strokeWidth={4.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Qwen2 Points */}
              {qwenPoints.map((pt) => (
                <g key={pt.x}>
                  <circle cx={pt.x} cy={pt.y} r="8" fill="#3B82F6" stroke="#FFFFFF" strokeWidth={2} />
                  <text x={pt.x} y={pt.y + 24} fontSize="13" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                    {pt.val}
                  </text>
                </g>
              ))}

              {/* CLIP Points */}
              {clipPoints.map((pt) => (
                <g key={pt.x}>
                  <circle cx={pt.x} cy={pt.y} r="8" fill="#7C3AED" stroke="#FFFFFF" strokeWidth={2} />
                  <text x={pt.x} y={pt.y - 16} fontSize="13" fontWeight="800" fill="#5B21B6" textAnchor="middle">
                    {pt.val}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          
          {/* Legend */}
          <div style={{ display: "flex", gap: 32, justifyContent: "center", fontSize: 15, fontWeight: 800 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 6, borderRadius: 3, background: "#7C3AED" }} />
              <span style={{ color: "#7C3AED" }}>CLIP (Direct vs Hybrid)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3B82F6" }} />
              <span style={{ color: "#3B82F6" }}>Qwen2-vision (Direct vs Hybrid)</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Explanations Callout */}
        <motion.div
          {...fadeInUp(0.3)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              background: "rgba(124, 58, 237, 0.03)",
              border: "1.5px solid rgba(124, 58, 237, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
            }}
          >
            <h4 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: "#7C3AED" }}>
              Data Threshold: n ≥ 25
            </h4>
            <p style={{ margin: 0, fontSize: 18, color: "#4B5563", lineHeight: 1.6 }}>
              At <strong>n=10</strong> ratings per user, the emotion step barely adds value (68% win rate). 
              But from <strong>n=25</strong> ratings and above, it jumps and remains consistently high.
            </p>
          </div>

          <div
            style={{
              background: "rgba(59, 130, 246, 0.03)",
              border: "1.5px solid rgba(59, 130, 246, 0.15)",
              borderRadius: 20,
              padding: "24px 28px",
            }}
          >
            <h4 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: "#3B82F6" }}>
              Why CLIP gains more
            </h4>
            <p style={{ margin: 0, fontSize: 18, color: "#4B5563", lineHeight: 1.6 }}>
              CLIP's direct prediction is weaker, leaving a larger gap for the emotion bottleneck pathway to contribute. 
              Qwen2-vision starts with a stronger direct representation, so the emotion step has less headroom to add.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
