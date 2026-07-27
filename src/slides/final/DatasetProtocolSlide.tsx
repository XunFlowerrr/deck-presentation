import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "24, 95, 165", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "29, 158, 117", opacity: 0.04 },
];

export function DatasetProtocolSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FAFAF8" }}>
      <SlideHeader
        label="Block 2 — Dataset & Protocol"
        title="One dataset "
        highlight="Deep Enough Per Person."
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Column: 3 Big Orange Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            {...cardRise(0.15)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Stat 1 */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 56, fontWeight: 900, color: "#BA7517", lineHeight: 1 }}>129</span>
              <span style={{ fontSize: 18, fontWeight: 850, color: "#222222" }}>People (Evaluators)</span>
            </div>

            <div style={{ height: 1, background: "#EEEDEA" }} />

            {/* Stat 2 */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 56, fontWeight: 900, color: "#BA7517", lineHeight: 1 }}>6,526</span>
              <span style={{ fontSize: 18, fontWeight: 850, color: "#222222" }}>Images (Unique)</span>
            </div>

            <div style={{ height: 1, background: "#EEEDEA" }} />

            {/* Stat 3 with Domain Icons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 56, fontWeight: 900, color: "#BA7517", lineHeight: 1 }}>3</span>
                <span style={{ fontSize: 18, fontWeight: 850, color: "#222222" }}>Domains</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                {/* Art */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#888888", fontWeight: 700 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  Art
                </div>
                {/* Fashion */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#888888", fontWeight: 700 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5">
                    <path d="M20.38 3.46 16 7.84V20h-2V10l-2-2-2 2v10H8V7.84L3.62 3.46a2 2 0 0 0-2.83 0l-.09.09a2 2 0 0 0 0 2.83L5 10.76V22h14V10.76l4.3-4.38a2 2 0 0 0 0-2.83l-.09-.09a2 2 0 0 0-2.83 0z" />
                  </svg>
                  Fashion
                </div>
                {/* Landscape */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#888888", fontWeight: 700 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5">
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M12 22a8 8 0 0 0-8-8c0 4.42 4 8 8 8z" />
                    <path d="M20 22a8 8 0 0 0-8-8c0 4.42 4 8 8 8z" />
                  </svg>
                  Landscape
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 2 Main Logic Points */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#185FA5", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Narrative &amp; Rigor
          </div>

          {/* Point 1 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(29, 158, 117, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D9E75", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(29, 158, 117, 0.15)" }}>
              1
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#222222" }}>
                Deep Ratings Per Person
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888888", lineHeight: 1.5 }}>
                Evaluators rated hundreds of images, providing enough statistical depth to fit a robust personal weighting formula for each user.
              </p>
            </div>
          </div>

          <div style={{ width: "100%", height: 1, background: "#EEEDEA" }} />

          {/* Point 2 */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(24, 95, 165, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#185FA5", flexShrink: 0, fontWeight: 900, border: "1px solid rgba(24, 95, 165, 0.15)" }}>
              2
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#222222" }}>
                Leak-Free CV Splits
              </h4>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888888", lineHeight: 1.5 }}>
                Strict disjoint splits prevent leakage: target users and their evaluation images are completely hidden from the Stage 1 emotion model.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
