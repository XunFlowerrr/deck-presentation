import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.08 },
  { bottom: -200, left: -100, size: 700, color: "59, 130, 246", opacity: 0.08 },
];

export function WilcoxonGraphWeek4() {
  // Graph 1 (Win %) Coordinates
  const winClipPoints = [
    { x: 50, y: 158, val: "68.0%", label: "n=10" },
    { x: 130, y: 94, val: "84.0%", label: "n=25" },
    { x: 210, y: 70, val: "89.9%", label: "n=50" },
    { x: 290, y: 63, val: "91.7%", label: "n=100" },
  ];
  
  const winQwenPoints = [
    { x: 50, y: 158, val: "68.0%", label: "n=10" },
    { x: 130, y: 118, val: "78.3%", label: "n=25" },
    { x: 210, y: 113, val: "79.3%", label: "n=50" },
    { x: 290, y: 110, val: "80.1%", label: "n=100" },
  ];

  // Graph 2 (Median Delta) Coordinates
  const medianClipPoints = [
    { x: 50, y: 141, val: "+0.021", label: "n=10" },
    { x: 130, y: 94, val: "+0.046", label: "n=25" },
    { x: 210, y: 73, val: "+0.057", label: "n=50" },
    { x: 700, y: 47, val: "+0.071", label: "n=100" },
  ];
  
  const medianQwenPoints = [
    { x: 50, y: 141, val: "+0.021", label: "n=10" },
    { x: 130, y: 109, val: "+0.038", label: "n=25" },
    { x: 210, y: 103, val: "+0.041", label: "n=50" },
    { x: 290, y: 101, val: "+0.042", label: "n=100" },
  ];

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 1 — Visualizing Wilcoxon"
        title="Win Rate & Median Δ by"
        highlight="support size (n)."
        tagline="Comparing how both the percentage of improved users and the magnitude of CCC gains scale as more user ratings are available."
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "stretch",
          justifyContent: "center",
          marginTop: 6,
        }}
      >
        {/* TOP ROW: Side-by-side graphs */}
        <div style={{ display: "flex", gap: 24, alignItems: "stretch", width: "100%" }}>
          {/* LEFT GRAPH: Win % */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              flex: 1,
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 20,
              padding: "12px 20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h5 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: 0.5, textAlign: "center" }}>
              Hybrid Win % by Support Size (n)
            </h5>
            <div style={{ position: "relative", width: "100%", height: 300 }}>
              <svg viewBox="0 0 340 200" style={{ width: "100%", height: "100%" }}>
                {/* Gridlines */}
                <line x1="40" y1="30" x2="310" y2="30" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="70" x2="310" y2="70" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="110" x2="310" y2="110" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="150" x2="310" y2="150" stroke="#F3F4F6" strokeWidth={1.5} />
                <line x1="40" y1="180" x2="310" y2="180" stroke="#E5E7EB" strokeWidth={1.5} />
                
                {/* Y-axis Labels */}
                <text x="32" y="34" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">100%</text>
                <text x="32" y="74" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">90%</text>
                <text x="32" y="114" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">80%</text>
                <text x="32" y="154" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">70%</text>
                
                {/* X-axis Labels */}
                <text x="50" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=10</text>
                <text x="130" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=25</text>
                <text x="210" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=50</text>
                <text x="290" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=100</text>

                {/* Qwen2 Line */}
                <path
                  d="M 50 158 L 130 118 L 210 113 L 290 110"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* CLIP Line */}
                <path
                  d="M 50 158 L 130 94 L 210 70 L 290 63"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Qwen2 Points */}
                {winQwenPoints.map((pt) => (
                  <g key={pt.x}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth={1.5} />
                    <text x={pt.x} y={pt.y + 16} fontSize="9.5" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                      {pt.val}
                    </text>
                  </g>
                ))}

                {/* CLIP Points */}
                {winClipPoints.map((pt) => (
                  <g key={pt.x}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth={1.5} />
                    <text x={pt.x} y={pt.y - 8} fontSize="9.5" fontWeight="800" fill="#5B21B6" textAnchor="middle">
                      {pt.val}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* RIGHT GRAPH: Median Δ */}
          <motion.div
            {...cardRise(0.18)}
            style={{
              flex: 1,
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 20,
              padding: "12px 20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.01)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h5 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: 0.5, textAlign: "center" }}>
              Median Δ by Support Size (n)
            </h5>
            <div style={{ position: "relative", width: "100%", height: 300 }}>
              <svg viewBox="0 0 340 200" style={{ width: "100%", height: "100%" }}>
                {/* Gridlines */}
                <line x1="40" y1="30" x2="310" y2="30" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="67" x2="310" y2="67" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="105" x2="310" y2="105" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="142" x2="310" y2="142" stroke="#F3F4F6" strokeWidth={1} />
                <line x1="40" y1="180" x2="310" y2="180" stroke="#E5E7EB" strokeWidth={1.5} />
                
                {/* Y-axis Labels */}
                <text x="32" y="34" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">+0.08</text>
                <text x="32" y="71" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">+0.06</text>
                <text x="32" y="109" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">+0.04</text>
                <text x="32" y="146" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">+0.02</text>
                <text x="32" y="184" fontSize="10" fontWeight="600" fill="#9CA3AF" textAnchor="end">0.00</text>
                
                {/* X-axis Labels */}
                <text x="50" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=10</text>
                <text x="130" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=25</text>
                <text x="210" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=50</text>
                <text x="290" y="195" fontSize="10" fontWeight="700" fill="#6B7280" textAnchor="middle">n=100</text>

                {/* Qwen2 Line */}
                <path
                  d="M 50 141 L 130 109 L 210 103 L 290 101"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* CLIP Line */}
                <path
                  d="M 50 141 L 130 94 L 210 73 L 290 47"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Qwen2 Points */}
                {medianQwenPoints.map((pt) => (
                  <g key={pt.label}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth={1.5} />
                    <text x={pt.x} y={pt.y + 16} fontSize="9.5" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                      {pt.val}
                    </text>
                  </g>
                ))}

                {/* CLIP Points */}
                {medianClipPoints.map((pt) => (
                  <g key={pt.label}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth={1.5} />
                    <text x={pt.x} y={pt.y - 8} fontSize="9.5" fontWeight="800" fill="#5B21B6" textAnchor="middle">
                      {pt.val}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* SHARED LEGEND */}
        <div style={{ display: "flex", gap: 32, justifyContent: "center", fontSize: 14, fontWeight: 800, marginTop: -4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 16, height: 4, borderRadius: 2, background: "#7C3AED" }} />
            <span style={{ color: "#7C3AED" }}>CLIP (Direct vs Hybrid)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 16, height: 4, borderRadius: 2, background: "#3B82F6" }} />
            <span style={{ color: "#3B82F6" }}>Qwen2-vision (Direct vs Hybrid)</span>
          </div>
        </div>

        {/* BOTTOM ROW: Explanations side-by-side */}
        <div style={{ display: "flex", gap: 24, width: "100%", marginTop: 4 }}>
          <motion.div
            {...fadeInUp(0.25)}
            style={{
              flex: 1,
              background: "rgba(124, 58, 237, 0.03)",
              border: "1.5px solid rgba(124, 58, 237, 0.15)",
              borderRadius: 18,
              padding: "16px 20px",
            }}
          >
            <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 800, color: "#7C3AED" }}>
              Data Threshold: n ≥ 25
            </h4>
            <p style={{ margin: 0, fontSize: 16, color: "#4B5563", lineHeight: 1.5 }}>
              At <strong>n=10</strong> (very few images), the emotion step helps only slightly (Median Δ = +0.021, win rate 68%). 
              But from <strong>n=25</strong> and above, the improvement jumps and stays high (win rate &gt;84%, Median Δ reaches +0.071 for CLIP and +0.042 for Qwen2).
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp(0.35)}
            style={{
              flex: 1,
              background: "rgba(59, 130, 246, 0.03)",
              border: "1.5px solid rgba(59, 130, 246, 0.15)",
              borderRadius: 18,
              padding: "16px 20px",
            }}
          >
            <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 800, color: "#3B82F6" }}>
              Robust Across Backbones
            </h4>
            <p style={{ margin: 0, fontSize: 16, color: "#4B5563", lineHeight: 1.5 }}>
              Both CLIP and Qwen2-vision show the exact same pattern. This means the result is robust across different backbones and is not a fluke of a single model.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
