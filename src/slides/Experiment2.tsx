import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.1 },
  { bottom: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
];

export function Experiment2() {

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Sources of Personalization"
        title="Experiment 2: Where does"
        highlight="Personalization Come From?"
      />

      <div style={{ flex: 1, display: "flex", gap: 72, alignItems: "center", minHeight: 0 }}>
        
        {/* Left Column: Custom Bar Chart */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            flex: 1.2,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "40px",
            height: "100%",
            maxHeight: "520px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Chart container card content */}
          <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
            {/* Bars Area (Height: 300px) */}
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 300, position: "relative", width: "100%" }}>
              
              {/* Background Grid Lines */}
              <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none", opacity: 0.4 }}>
                {[1.0, 0.8, 0.6, 0.4, 0.2, 0.0].map((v) => (
                  <div key={v} style={{ borderBottom: "1px dashed #E5E7EB", width: "100%", height: 0 }} />
                ))}
              </div>

              {/* Shaded area for Gap 1 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.72),
                height: 300 * 0.39,
                left: "26%",
                width: "18%",
                background: "linear-gradient(180deg, rgba(124, 58, 237, 0.06), rgba(236, 72, 153, 0.06))",
                borderRadius: "8px",
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Shaded area for Gap 2 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.33),
                height: 300 * 0.05,
                left: "56%",
                width: "18%",
                background: "linear-gradient(180deg, rgba(236, 72, 153, 0.06), rgba(156, 163, 175, 0.06))",
                borderRadius: "4px",
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Bar 1: Own Real Emotions */}
              <div style={{ position: "absolute", left: "10%", width: "20%", height: 300, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 300 * 0.72 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 72,
                    background: "linear-gradient(180deg, #7C3AED, #A855F7)",
                    borderRadius: "12px 12px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 12,
                    boxShadow: "0 8px 20px rgba(124, 58, 237,0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 22 }}>0.72</span>
                </motion.div>
              </div>

              {/* Bar 2: Other People's Average Emotions */}
              <div style={{ position: "absolute", left: "40%", width: "20%", height: 300, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 300 * 0.33 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 72,
                    background: "linear-gradient(180deg, #EC4899, #F43F5E)",
                    borderRadius: "12px 12px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 12,
                    boxShadow: "0 8px 20px rgba(236, 72, 153,0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 22 }}>0.33</span>
                </motion.div>
              </div>

              {/* Bar 3: No Personal Formula */}
              <div style={{ position: "absolute", left: "70%", width: "20%", height: 300, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 300 * 0.28 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 72,
                    background: "linear-gradient(180deg, #9CA3AF, #4B5563)",
                    borderRadius: "12px 12px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 12,
                    boxShadow: "0 8px 20px rgba(107,114,128,0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 22 }}>0.28</span>
                </motion.div>
              </div>

              {/* Dashed guide line from Bar 1 right edge to Gap 1 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.72),
                left: "26%",
                width: "9%",
                borderBottom: "1.5px dashed #7C3AED",
                opacity: 0.6,
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Dashed guide line from Bar 2 left edge to Gap 1 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.33),
                left: "35%",
                width: "9%",
                borderBottom: "1.5px dashed #EC4899",
                opacity: 0.6,
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Dashed guide line from Bar 2 right edge to Gap 2 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.33),
                left: "56%",
                width: "9%",
                borderBottom: "1.5px dashed #EC4899",
                opacity: 0.6,
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Dashed guide line from Bar 3 left edge to Gap 2 */}
              <div style={{
                position: "absolute",
                top: 300 * (1 - 0.28),
                left: "65%",
                width: "9%",
                borderBottom: "1.5px dashed #9CA3AF",
                opacity: 0.6,
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Gap 1 (0.39): FEELING differently */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  position: "absolute",
                  top: 300 * (1 - 0.72),
                  height: 300 * 0.39,
                  left: "35%",
                  width: 40,
                  marginLeft: -20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                {/* Vertical line */}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "linear-gradient(180deg, #7C3AED, #EC4899)", transform: "translateX(-50%)" }} />
                {/* Ticks instead of arrowheads */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#7C3AED" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#EC4899" }} />
                
                {/* Badge centered on line */}
                <div
                  style={{
                    background: "#7C3AED",
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: 12,
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(124, 58, 237,0.15)",
                    position: "relative",
                    zIndex: 12,
                  }}
                >
                  Gap 1: 0.39
                </div>
              </motion.div>

              {/* Gap 2 (0.05): CARING differently */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                style={{
                  position: "absolute",
                  top: 300 * (1 - 0.33),
                  height: 300 * 0.05,
                  left: "65%",
                  width: 40,
                  marginLeft: -20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                {/* Vertical line */}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "linear-gradient(180deg, #EC4899, #9CA3AF)", transform: "translateX(-50%)" }} />
                {/* Ticks instead of arrowheads */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#EC4899" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#9CA3AF" }} />
                
                {/* Pointer Line going up to the aligned badge height */}
                <div style={{
                  position: "absolute",
                  top: -46.5, // starts from badge bottom
                  height: 46.5,
                  left: "50%",
                  width: 1.5,
                  backgroundColor: "rgba(236, 72, 153,0.5)",
                  transform: "translateX(-50%)",
                  zIndex: 5,
                }} />

                {/* Badge offset vertically to align with Gap 1 badge */}
                <div
                  style={{
                    background: "#EC4899",
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: 12,
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(236, 72, 153,0.15)",
                    position: "absolute",
                    top: -58.5, // Centered vertically at 142.5px height from parent top
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 12,
                  }}
                >
                  Gap 2: 0.05
                </div>
              </motion.div>

            </div>

            {/* Labels Row below Bars Area (Absolutely aligned to the bars) */}
            <div style={{ position: "relative", width: "100%", height: 50, marginTop: 16 }}>
              <div style={{ position: "absolute", left: "10%", width: "20%", fontSize: 16, fontWeight: 700, color: "#111827", textAlign: "center" }}>
                Own Real Emotions
              </div>
              <div style={{ position: "absolute", left: "40%", width: "20%", fontSize: 16, fontWeight: 700, color: "#111827", textAlign: "center" }}>
                Others' Avg Emotions
              </div>
              <div style={{ position: "absolute", left: "70%", width: "20%", fontSize: 16, fontWeight: 700, color: "#111827", textAlign: "center" }}>
                No Personal Formula
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Detailed Explanations */}
        <motion.div
          {...fadeIn(0.42)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: "20px",
            padding: "24px 28px",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Gap 1 — Feeling Differently (0.39)
            </span>
            <p style={{ fontSize: "var(--slide-body)", color: "#4B5563", lineHeight: 1.5, margin: "8px 0 0" }}>
              This represents observer subjectivity in emotional response. Different people look at the exact same image and feel completely different emotions (e.g. nostalgic vs neutral). This accounts for <strong>88%</strong> of the personalization drop.
            </p>
          </div>

          <div style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: "20px",
            padding: "24px 28px",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Gap 2 — Caring Differently (0.05)
            </span>
            <p style={{ fontSize: "var(--slide-body)", color: "#4B5563", lineHeight: 1.5, margin: "8px 0 0" }}>
              This represents observer difference in weightings. Even if two people feel the exact same emotions, they value them differently when assessing overall beauty. This accounts for only <strong>12%</strong> of the difference.
            </p>
          </div>

          <div style={{
            background: "rgba(124, 58, 237,0.03)",
            border: "1px solid rgba(124, 58, 237,0.08)",
            borderRadius: "20px",
            padding: "20px 24px",
            fontSize: 18,
            color: "#4B5563",
            lineHeight: 1.5,
          }}
        >
          <strong>Crucial Insight:</strong> Personalization comes mainly from <strong>how people feel about an image</strong>, not how they weigh those feelings. This finding is completely unique to the XPASS-Vis dataset.
        </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}
