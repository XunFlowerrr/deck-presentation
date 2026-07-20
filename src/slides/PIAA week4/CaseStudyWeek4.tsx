import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

interface CasePhoto {
  src: string;
  trueScore: string;
  direct: string;
  hybrid: string;
  topFeelings: string;
}

const HELPED: CasePhoto[] = [
  { src: "/case-study/helps-5632.jpg", trueScore: "5.0", direct: "3.57", hybrid: "5.02", topFeelings: "impressed, intellectual (4/5)" },
  { src: "/case-study/helps-5502.jpg", trueScore: "0.0", direct: "3.14", hybrid: "2.00", topFeelings: "distasteful (5/5)" },
  { src: "/case-study/helps-3099.jpg", trueScore: "0.0", direct: "3.34", hybrid: "2.22", topFeelings: "distasteful (5/5)" },
];

const HURT: CasePhoto[] = [
  { src: "/case-study/hurts-5017.jpg", trueScore: "5.0", direct: "2.23", hybrid: "1.57", topFeelings: "motivated, amused (3/5)" },
  { src: "/case-study/hurts-5048.jpg", trueScore: "3.0", direct: "1.75", hybrid: "1.08", topFeelings: "amused (2/5)" },
  { src: "/case-study/hurts-5201.jpg", trueScore: "1.0", direct: "3.46", hybrid: "4.07", topFeelings: "distasteful, amused (3/5)" },
];

function PhotoCard({ photo, good }: { photo: CasePhoto; good: boolean }) {
  const accent = good ? "#10B981" : "#EF4444";
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: `1px solid ${good ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={photo.src}
        alt="case study photo"
        style={{ width: "100%", height: 108, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#4B5563" }}>
          <span>true <strong style={{ color: "#111827" }}>{photo.trueScore}</strong></span>
          <span>direct <strong style={{ color: "#6B7280" }}>{photo.direct}</strong></span>
          <span>hybrid <strong style={{ color: accent }}>{photo.hybrid}</strong></span>
        </div>
        <div style={{ fontSize: 10, color: "#9CA3AF", lineHeight: 1.3 }}>{photo.topFeelings}</div>
      </div>
    </div>
  );
}

export function CaseStudyWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — real examples"
        title="Six real photos, "
        highlight="side by side."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
        {/* Row 1: helped */}
        <motion.div {...cardRise(0.1)} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 12, fontWeight: 800, color: "#10B981",
                background: "rgba(16, 185, 129, 0.1)", padding: "3px 12px",
                borderRadius: 10, textTransform: "uppercase", letterSpacing: "0.06em",
              }}
            >
              Emotions helped &nbsp;·&nbsp; avg error 2.64 → 1.41
            </span>
            <span style={{ fontSize: 12, color: "#6B7280" }}>the feeling is clear and strong</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {HELPED.map((p) => <PhotoCard key={p.src} photo={p} good />)}
          </div>
        </motion.div>

        {/* Row 2: hurt */}
        <motion.div {...cardRise(0.25)} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 12, fontWeight: 800, color: "#EF4444",
                background: "rgba(239, 68, 68, 0.1)", padding: "3px 12px",
                borderRadius: 10, textTransform: "uppercase", letterSpacing: "0.06em",
              }}
            >
              Emotions hurt &nbsp;·&nbsp; avg error 2.16 → 2.81
            </span>
            <span style={{ fontSize: 12, color: "#6B7280" }}>the feeling is weak or mixed</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {HURT.map((p) => <PhotoCard key={p.src} photo={p} good={false} />)}
          </div>
        </motion.div>

        {/* Bottom takeaway */}
        <motion.div
          {...fadeInUp(0.45)}
          style={{
            background: "#F9FAFB", border: "1px solid #F3F4F6", borderRadius: 14,
            padding: "12px 20px", fontSize: 13.5, color: "#374151", textAlign: "center",
          }}
        >
          <strong style={{ color: "#7C3AED" }}>What this tells us: </strong>
          when a photo makes people feel one strong, clear thing, guessing the feeling first helps the score.
          When the feeling is faint or mixed, guessing it just adds a wrong guess on top of a wrong guess.
        </motion.div>
      </div>

      <motion.div
        {...fadeInUp(0.6)}
        style={{
          position: "absolute", bottom: 20, right: 32,
          background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: 10,
          padding: "6px 14px", fontSize: 11, color: "#6B7280",
        }}
      >
        Real photos from the dataset — 3 per side, examples not proof
      </motion.div>
    </SlideShell>
  );
}
