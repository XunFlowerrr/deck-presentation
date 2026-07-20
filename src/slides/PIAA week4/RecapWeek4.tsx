import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, left: -120, size: 640, color: "236, 72, 153", opacity: 0.08 },
];

export function RecapWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Quick Recap"
        title="Last two meetings'"
        highlight="Key findings."
      />

      <div style={{ flex: 1, display: "flex", gap: 32, alignItems: "stretch", justifyContent: "center", minHeight: 0, paddingBottom: 12 }}>
        
        {/* Meeting 1 Group */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            flex: 1,
            background: "rgba(124, 58, 237, 0.02)",
            border: "1.5px solid rgba(124, 58, 237, 0.15)",
            borderRadius: "28px",
            padding: "36px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 14, fontWeight: 900, color: "white", backgroundColor: "#7C3AED", padding: "6px 14px", borderRadius: "10px" }}>MEETING 1</span>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#7C3AED", margin: 0 }}>Emotion Mediation is Feasible</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Meeting 1a */}
              <div style={{ background: "rgba(124, 58, 237, 0.055)", border: "1px solid rgba(124, 58, 237, 0.2)", borderRadius: "20px", padding: "20px 24px" }}>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: "0 0 8px 0" }}>Feasibility & Upper Bound</h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  We tested if using emotion as a middle step is possible. Yes: true emotions reach <strong>0.72 (upper bound)</strong>, beating direct beauty prediction.
                </p>
              </div>

              {/* Meeting 1b */}
              <div style={{ background: "rgba(124, 58, 237, 0.055)", border: "1px solid rgba(124, 58, 237, 0.2)", borderRadius: "20px", padding: "20px 24px" }}>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: "0 0 8px 0" }}>The Emotion Bottleneck & Signature</h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  We must predict emotions accurately to predict beauty well.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meeting 2 Group */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            flex: 1,
            background: "rgba(59, 130, 246, 0.035)",
            border: "1.5px dashed rgba(59, 130, 246, 0.35)",
            borderRadius: "28px",
            padding: "36px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 14, fontWeight: 900, color: "white", backgroundColor: "#3B82F6", padding: "6px 14px", borderRadius: "10px" }}>MEETING 2</span>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#3B82F6", margin: 0 }}>Exploring the Emotion Formula</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Meeting 2a */}
              <div style={{ background: "rgba(59, 130, 246, 0.055)", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: "20px", padding: "20px 24px" }}>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: "0 0 8px 0" }}>No Strong Connection to Personality</h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  A person's emotion formula does not match their Big Five personality traits in any strong way.
                </p>
              </div>

              {/* Meeting 2b */}
              <div style={{ background: "rgba(16, 185, 129, 0.055)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "20px", padding: "20px 24px" }}>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: "0 0 8px 0" }}>Stable Across Image Types</h4>
                <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
                  The personal emotion weights stay highly consistent across Art, Fashion, and Landscape. Formulas correlate highly across domains (<strong>p &lt; 10⁻⁹</strong>) — showing a unique personal signature (except nostalgia in Art).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
