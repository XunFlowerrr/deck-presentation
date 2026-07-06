import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -180, left: -100, size: 700, color: "16, 185, 129", opacity: 0.08 },
  { bottom: -200, right: -80, size: 600, color: "124, 58, 237", opacity: 0.06 },
];

function Box({
  x, y, w, h, title, sub, variant,
}: {
  x: number; y: number; w: number; h: number;
  title: string; sub?: string; variant?: "train" | "frozen" | "plain";
}) {
  const fill =
    variant === "train" ? "#DBEAFE" : variant === "frozen" ? "#E5E7EB" : "#F3F4F6";
  const stroke =
    variant === "train" ? "#2563EB" : variant === "frozen" ? "#6B7280" : "#D1D5DB";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={stroke} strokeWidth={variant === "train" ? 2.5 : 1.5} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 5)} fontSize={17} fontWeight={700} fill="#111827" textAnchor="middle">
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 18} fontSize={13} fill="#6B7280" textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = "#6B7280" }: { x1: number; y1: number; x2: number; y2: number; color?: string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2} markerEnd="url(#ftar)" />;
}

const W = 1180;
const H = 360;

export function FineTuneHowWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Task 3 — How fine-tuning works"
        title="Fine-tune, then freeze,"
        highlight="then personalize."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, marginTop: 8 }}>
        <motion.div
          {...cardRise(0.2)}
          style={{
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
            background: "rgba(255,255,255,0.6)",
            padding: "14px 20px",
          }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" fontFamily="'Inter', system-ui, sans-serif">
            <title>Two-stage fine-tuning: update CLIP on population emotions, then freeze and add a per-user Ridge</title>
            <defs>
              <marker id="ftar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#6B7280" />
              </marker>
              <marker id="ftarR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#DC2626" />
              </marker>
            </defs>

            {/* STAGE A */}
            <text x={20} y={24} fontSize={17} fontWeight={800} fill="#111827">
              Stage A — fine-tune (population, per fold)
            </text>
            <Box x={20} y={40} w={200} h={62} title="Images + emotion" sub="target: general users only" />
            <Arrow x1={220} y1={71} x2={272} y2={71} />
            <Box x={274} y={40} w={190} h={62} title="CLIP encoder" sub="weights UPDATED" variant="train" />
            <Arrow x1={464} y1={71} x2={516} y2={71} />
            <Box x={518} y={40} w={130} h={62} title="linear head" variant="train" />
            <Arrow x1={648} y1={71} x2={700} y2={71} />
            <Box x={702} y={40} w={150} h={62} title="predict 9 emotions" />
            <Arrow x1={852} y1={71} x2={904} y2={71} />
            <Box x={906} y={40} w={130} h={62} title="MSE loss" />

            {/* backprop */}
            <path d="M971,104 L971,128 L369,128 L369,104" fill="none" stroke="#DC2626" strokeWidth={2} strokeDasharray="6,4" markerEnd="url(#ftarR)" />
            <text x={670} y={122} fontSize={13} fill="#DC2626" fontWeight={700} textAnchor="middle">
              backprop → updates CLIP + head together (Ridge not involved yet)
            </text>

            {/* divider */}
            <line x1={20} y1={150} x2={W - 20} y2={150} stroke="#D1D5DB" strokeWidth={1} strokeDasharray="2,3" />
            <text x={W / 2} y={172} fontSize={15} fontWeight={700} fill="#374151" textAnchor="middle">
              ↓ training done → FREEZE the fine-tuned CLIP (weights never change again)
            </text>

            {/* STAGE B */}
            <text x={20} y={208} fontSize={17} fontWeight={800} fill="#111827">
              Stage B — freeze + personalize (per user, no backprop into CLIP)
            </text>
            <Box x={20} y={224} w={175} h={62} title="all 6,526 images" sub="train + test" />
            <Arrow x1={195} y1={255} x2={247} y2={255} />
            <Box x={249} y={224} w={190} h={62} title="🔒 CLIP (frozen)" sub="the fine-tuned one" variant="frozen" />
            <Arrow x1={439} y1={255} x2={491} y2={255} />
            <Box x={493} y={224} w={130} h={62} title="768-d features" />
            <Arrow x1={623} y1={255} x2={675} y2={255} />
            <Box x={677} y={224} w={175} h={62} title="per-user Ridge" sub="~100 of their ratings" />
            <Arrow x1={852} y1={255} x2={904} y2={255} />
            <Box x={906} y={224} w={130} h={62} title="personal score" />

            <text x={20} y={322} fontSize={13} fill="#6B7280">
              Same idea as the baselines: pretrain the backbone on the population, then personalize on top — not one joint model.
            </text>
          </svg>
        </motion.div>

        <motion.div
          {...fadeInUp(0.6)}
          style={{
            background: "rgba(16,185,129,0.05)",
            border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: 14,
            padding: "16px 26px",
            fontSize: 18,
            color: "#065F46",
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          Why two stages, not one joint model? Each user has only ~100 images —
          fine-tuning CLIP per user would overfit. Keeping a fixed backbone plus a
          small linear per-user formula stays data-efficient and interpretable.
        </motion.div>
      </div>
    </SlideShell>
  );
}
