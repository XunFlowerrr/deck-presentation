import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.1 },
  { bottom: -200, right: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
];

export function Experiment2() {
  const chartHeight = 360;

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Sources of Personalization"
        title="Experiment 2: Where does"
        highlight="Personalization Come From?"
      />

      <div style={{ flex: 1, display: "flex", gap: 56, alignItems: "center", minHeight: 0 }}>
        
        {/* Left Column: Custom Bar Chart */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            flex: 1.3,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "40px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
            {/* Bars Area */}
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: chartHeight, position: "relative", width: "100%" }}>
              
              {/* Background Grid Lines */}
              <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none", opacity: 0.4 }}>
                {[1.0, 0.8, 0.6, 0.4, 0.2, 0.0].map((v) => (
                  <div key={v} style={{ borderBottom: "1px dashed #E5E7EB", width: "100%", height: 0 }} />
                ))}
              </div>

              {/* Shaded area for Gap 1 */}
              <div style={{
                position: "absolute",
                top: chartHeight * (1 - 0.72),
                height: chartHeight * 0.39,
                left: "25%",
                width: "20%",
                background: "linear-gradient(180deg, rgba(124, 58, 237, 0.06), rgba(236, 72, 153, 0.06))",
                borderRadius: "8px",
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Shaded area for Gap 2 */}
              <div style={{
                position: "absolute",
                top: chartHeight * (1 - 0.33),
                height: chartHeight * 0.05,
                left: "55%",
                width: "20%",
                background: "linear-gradient(180deg, rgba(236, 72, 153, 0.06), rgba(156, 163, 175, 0.06))",
                borderRadius: "4px",
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Bar 1: Own Real Emotions */}
              <div style={{ position: "absolute", left: "10%", width: "20%", height: chartHeight, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: chartHeight * 0.72 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 96,
                    background: "linear-gradient(180deg, #7C3AED, #A855F7)",
                    borderRadius: "14px 14px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 16,
                    boxShadow: "0 8px 20px rgba(124, 58, 237, 0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 950, fontSize: 26 }}>0.72</span>
                </motion.div>
              </div>

              {/* Bar 2: Other People's Average Emotions */}
              <div style={{ position: "absolute", left: "40%", width: "20%", height: chartHeight, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: chartHeight * 0.33 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 96,
                    background: "linear-gradient(180deg, #EC4899, #F43F5E)",
                    borderRadius: "14px 14px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 16,
                    boxShadow: "0 8px 20px rgba(236, 72, 153, 0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 950, fontSize: 26 }}>0.33</span>
                </motion.div>
              </div>

              {/* Bar 3: No Personal Formula */}
              <div style={{ position: "absolute", left: "70%", width: "20%", height: chartHeight, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: 2 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: chartHeight * 0.28 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 96,
                    background: "linear-gradient(180deg, #9CA3AF, #4B5563)",
                    borderRadius: "14px 14px 0 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 16,
                    boxShadow: "0 8px 20px rgba(107, 114, 128, 0.2)",
                  }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 950, fontSize: 26 }}>0.28</span>
                </motion.div>
              </div>

              {/* Dashed guide lines */}
              <div style={{ position: "absolute", top: chartHeight * (1 - 0.72), left: "25%", width: "10%", borderBottom: "2px dashed #7C3AED", opacity: 0.6, pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", top: chartHeight * (1 - 0.33), left: "35%", width: "10%", borderBottom: "2px dashed #EC4899", opacity: 0.6, pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", top: chartHeight * (1 - 0.33), left: "55%", width: "10%", borderBottom: "2px dashed #EC4899", opacity: 0.6, pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", top: chartHeight * (1 - 0.28), left: "65%", width: "10%", borderBottom: "2px dashed #9CA3AF", opacity: 0.6, pointerEvents: "none", zIndex: 1 }} />

              {/* Gap 1 (0.39): FEELING differently */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  position: "absolute",
                  top: chartHeight * (1 - 0.72),
                  height: chartHeight * 0.39,
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
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "linear-gradient(180deg, #7C3AED, #EC4899)", transform: "translateX(-50%)" }} />
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#7C3AED" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#EC4899" }} />
                <div style={{ background: "#7C3AED", color: "#FFFFFF", padding: "6px 12px", borderRadius: "14px", fontSize: 13, fontWeight: 900, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(124, 58, 237, 0.15)", position: "relative", zIndex: 12 }}>
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
                  top: chartHeight * (1 - 0.33),
                  height: chartHeight * 0.05,
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
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "linear-gradient(180deg, #EC4899, #9CA3AF)", transform: "translateX(-50%)" }} />
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#EC4899" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 12, height: 2, backgroundColor: "#9CA3AF" }} />
                
                <div style={{ position: "absolute", top: -46.5, height: 46.5, left: "50%", width: 1.5, backgroundColor: "rgba(236, 72, 153, 0.5)", transform: "translateX(-50%)", zIndex: 5 }} />
                <div style={{ background: "#EC4899", color: "#FFFFFF", padding: "6px 12px", borderRadius: "14px", fontSize: 13, fontWeight: 900, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(236, 72, 153, 0.15)", position: "absolute", top: -58.5, left: "50%", transform: "translate(-50%, -50%)", zIndex: 12 }}>
                  Gap 2: 0.05
                </div>
              </motion.div>

            </div>

            {/* Labels Row below Bars Area (Line breaks added) */}
            <div style={{ position: "relative", width: "100%", height: 80, marginTop: 20 }}>
              <div style={{ position: "absolute", left: "5%", width: "30%", fontSize: 15, fontWeight: 800, color: "#111827", textAlign: "center", lineHeight: 1.4 }}>
                Condition 1:<br/>Own real emotions<br/>+ own formula
              </div>
              <div style={{ position: "absolute", left: "35%", width: "30%", fontSize: 15, fontWeight: 800, color: "#111827", textAlign: "center", lineHeight: 1.4 }}>
                Condition 2:<br/>Others' average emotions<br/>+ own formula
              </div>
              <div style={{ position: "absolute", left: "65%", width: "30%", fontSize: 15, fontWeight: 800, color: "#111827", textAlign: "center", lineHeight: 1.4 }}>
                Condition 3:<br/>Others' average emotions<br/>+ shared formula
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Detailed Explanations */}
        <motion.div
          {...fadeIn(0.42)}
          style={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: "20px",
            padding: "24px 28px",
          }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Gap 1 — Feeling Differently (0.39)
            </span>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: "8px 0 0" }}>
              Different people look at the exact same image and feel completely different emotions (nostalgic vs neutral). This accounts for <strong>88%</strong> of the personalization drop.
            </p>
          </div>

          <div style={{
            background: "#FAFAFA",
            border: "1px solid #F3F4F6",
            borderRadius: "20px",
            padding: "24px 28px",
          }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Gap 2 — Caring Differently (0.05)
            </span>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: "8px 0 0" }}>
              Even when feeling identical emotions, observers value/weight them slightly differently when judging beauty. This accounts for only <strong>12%</strong>.
            </p>
          </div>

          <div style={{
            background: "rgba(124, 58, 237, 0.03)",
            border: "1px solid rgba(124, 58, 237, 0.08)",
            borderRadius: "20px",
            padding: "20px 24px",
            fontSize: 18,
            color: "#4B5563",
            lineHeight: 1.5,
          }}
        >
          <strong>Crucial Insight:</strong> Taste personalization comes mainly from how people <i>feel</i> about an image, not how they <i>weigh</i> those feelings.
        </div>

          {/* Footnote on ICI */}
          <div style={{ fontSize: 15, color: "#9CA3AF", fontStyle: "italic", textAlign: "right" }}>
            * ICI baseline performance (0.423) is referenced from Table 5 of the XPASS-Vis paper.
          </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}
