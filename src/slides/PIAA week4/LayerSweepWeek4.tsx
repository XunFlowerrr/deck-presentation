import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 680, color: "59, 130, 246", opacity: 0.08 },
  { bottom: -200, right: -120, size: 620, color: "239, 68, 68", opacity: 0.06 },
];

// Direct CCC per layer (StandardScaler), layers 1..36. LT = text tokens, LV = image tokens.
const LT = [0.3313, 0.3361, 0.3419, 0.3458, 0.3441, 0.3458, 0.3472, 0.3433, 0.3510, 0.3614, 0.3603, 0.3676, 0.3728, 0.3700, 0.3756, 0.3738, 0.3751, 0.3734, 0.3758, 0.3763, 0.3717, 0.3713, 0.3693, 0.3670, 0.3678, 0.3694, 0.3718, 0.3747, 0.3725, 0.3723, 0.3748, 0.3779, 0.3777, 0.3764, 0.3769, 0.3732];
const LV = [0.3526, 0.3539, 0.3542, 0.3577, 0.3584, 0.3584, 0.3580, 0.3582, 0.3605, 0.3599, 0.3583, 0.3591, 0.3572, 0.3585, 0.3586, 0.3581, 0.3569, 0.3545, 0.3528, 0.3527, 0.3513, 0.3514, 0.3518, 0.3504, 0.3495, 0.3501, 0.3539, 0.3551, 0.3544, 0.3522, 0.3524, 0.3510, 0.3506, 0.3499, 0.3488, 0.3440];

const W = 1180;
const H = 430;
const padL = 78;
const padR = 32;
const padT = 24;
const padB = 56;
const XMIN = 1;
const XMAX = 36;
const YMIN = 0.29;
const YMAX = 0.385;
const CLIP = 0.293;

const sx = (l: number) => padL + ((l - XMIN) / (XMAX - XMIN)) * (W - padL - padR);
const sy = (v: number) => padT + ((YMAX - v) / (YMAX - YMIN)) * (H - padT - padB);

const ltPts = LT.map((v, i) => `${sx(i + 1).toFixed(1)},${sy(v).toFixed(1)}`).join(" ");
const lvPts = LV.map((v, i) => `${sx(i + 1).toFixed(1)},${sy(v).toFixed(1)}`).join(" ");

const BLUE = "#3B82F6";
const RED = "#EF4444";
const yTicks = [0.30, 0.32, 0.34, 0.36, 0.38];
const xTicks = [1, 5, 10, 15, 20, 25, 30, 36];

export function LayerSweepWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 2 — Layer sweep"
        title="Which layer, and"
        highlight="text vs image tokens."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
        <motion.div
          {...cardRise(0.2)}
          style={{
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
            background: "rgba(255,255,255,0.6)",
            padding: "18px 22px",
          }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
               fontFamily="'Inter', system-ui, sans-serif">
            <title>Direct CCC per Qwen3-VL layer for text tokens vs image tokens</title>

            {/* region shading */}
            <rect x={sx(1)} y={padT} width={sx(9.5) - sx(1)} height={H - padT - padB}
                  fill="rgba(239,68,68,0.06)" />
            <rect x={sx(9.5)} y={padT} width={sx(36) - sx(9.5)} height={H - padT - padB}
                  fill="rgba(59,130,246,0.05)" />
            <text x={sx(5)} y={padT + 22} fontSize={15} fill={RED} fontWeight={700} textAnchor="middle">
              image tokens win
            </text>
            <text x={sx(23)} y={padT + 22} fontSize={15} fill={BLUE} fontWeight={700} textAnchor="middle">
              text tokens win (mid–late layers)
            </text>

            {/* y grid + ticks */}
            {yTicks.map((t) => (
              <g key={t}>
                <line x1={padL} y1={sy(t)} x2={W - padR} y2={sy(t)}
                      stroke="rgba(0,0,0,0.06)" strokeWidth={1} />
                <text x={padL - 10} y={sy(t) + 4} fontSize={13} fill="#6B7280" textAnchor="end">
                  {t.toFixed(2)}
                </text>
              </g>
            ))}
            {/* Axis Titles */}
            <text x={padL - 52} y={(padT + H - padB) / 2 - 10} fontSize={14} fill="#4B5563" fontWeight={700} textAnchor="middle" transform={`rotate(-90 ${padL - 52} ${(padT + H - padB) / 2 - 10})`}>
              Direct CCC Score
            </text>
            
            {/* x ticks */}
            {xTicks.map((t) => (
              <text key={t} x={sx(t)} y={H - padB + 22} fontSize={13} fill="#6B7280" textAnchor="middle">
                {t}
              </text>
            ))}
            <text x={(padL + W - padR) / 2} y={H - 8} fontSize={14} fill="#374151" fontWeight={700} textAnchor="middle">
              Qwen3-VL-8B Layer Index (1 = early … 36 = last)
            </text>

            {/* CLIP baseline */}
            <line x1={padL} y1={sy(CLIP)} x2={W - padR} y2={sy(CLIP)}
                  stroke="#9CA3AF" strokeWidth={1.5} strokeDasharray="6,4" />
            <text x={W - padR - 4} y={sy(CLIP) - 6} fontSize={13} fill="#6B7280" textAnchor="end">
              CLIP frozen 0.293
            </text>

            {/* crossover line */}
            <line x1={sx(9.5)} y1={padT} x2={sx(9.5)} y2={H - padB}
                  stroke="#9CA3AF" strokeWidth={1} strokeDasharray="3,3" />
            <text x={sx(9.5)} y={H - padB + 40} fontSize={12} fill="#6B7280" textAnchor="middle">
              crossover ≈ layer 10
            </text>

            {/* lines */}
            <polyline points={lvPts} fill="none" stroke={RED} strokeWidth={2.5} />
            <polyline points={ltPts} fill="none" stroke={BLUE} strokeWidth={2.5} />

            {/* marker: paper layer 15 */}
            <line x1={sx(15)} y1={padT} x2={sx(15)} y2={H - padB}
                  stroke="#7C3AED" strokeWidth={1} strokeDasharray="2,3" />
            <circle cx={sx(15)} cy={sy(LT[14])} r={6} fill="#7C3AED" />
            <text x={sx(15)} y={sy(LT[14]) - 12} fontSize={12} fill="#7C3AED" fontWeight={700} textAnchor="middle">
              paper L15 · 0.376
            </text>

            {/* marker: best layer 32 */}
            <circle cx={sx(32)} cy={sy(LT[31])} r={8} fill="none" stroke="#059669" strokeWidth={2.5} />
            <text x={sx(32)} y={sy(LT[31]) - 14} fontSize={12} fill="#059669" fontWeight={700} textAnchor="middle">
              best L32 · 0.378
            </text>

            {/* legend */}
            <g>
              <line x1={padL + 10} y1={padT + 42} x2={padL + 42} y2={padT + 42} stroke={BLUE} strokeWidth={3} />
              <text x={padL + 48} y={padT + 46} fontSize={14} fill="#374151">LT — text tokens</text>
              <line x1={padL + 200} y1={padT + 42} x2={padL + 232} y2={padT + 42} stroke={RED} strokeWidth={3} />
              <text x={padL + 238} y={padT + 46} fontSize={14} fill="#374151">LV — image tokens</text>
            </g>
          </svg>
        </motion.div>

        <motion.div
          {...fadeInUp(0.6)}
          style={{
            background: "rgba(59,130,246,0.04)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 14,
            padding: "18px 26px",
            fontSize: 19,
            color: "#1E3A5F",
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          As the model reads deeper, the image information moves from the image
          tokens into the text tokens. So the best features are text tokens at a
          middle-to-late layer. Layer 15 (the paper's choice) is within 0.002 of my
          overall best — effectively tied.
        </motion.div>
      </div>
    </SlideShell>
  );
}
