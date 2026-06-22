import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn, cardRise } from "../lib/motion.ts";
import { rq4DataFlowImg } from "../content/assets.ts";

const GLOWS = [
  { bottom: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.1 },
];

export function RQ4Setup() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="RQ4: Cross-Domain Consistency"
        title="RQ4 Setup: "
        highlight="Pipeline & Design."
      />

      <div style={{ flex: 1, display: "flex", gap: 48, alignItems: "center", minHeight: 0, paddingBottom: 20 }}>
        
        {/* Left Column: Full Pipeline Diagram */}
        <motion.div
          {...fadeIn(0.25)}
          style={{
            flex: 1.2,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            borderRadius: "28px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: 0,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Pipeline Setup
          </div>
          <div
            style={{
              width: "100%",
              flex: 1,
              borderRadius: "16px",
              border: "1px solid #F3F4F6",
              background: "#FAFAFA",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 0,
            }}
          >
            <img
              src={rq4DataFlowImg}
              alt="RQ4 Full Pipeline Diagram"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: Setup Details */}
        <motion.div
          {...fadeIn(0.35)}
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {/* Card 1: Domain Formula Vectors */}
          <motion.div
            {...cardRise(0.1)}
            style={{
              background: "rgba(236, 72, 153, 0.02)",
              border: "1px solid rgba(236, 72, 153, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#EC4899", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#EC4899", color: "white", padding: "2px 8px", borderRadius: "6px" }}>1</span>
              Three Formula Vectors
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              Each user has three distinct formula vectors (each with 7 weights) fit independently from their ratings across three image domains: <strong>Art</strong>, <strong>Fashion</strong>, and <strong>Landscape</strong>.
            </p>
          </motion.div>

          {/* Card 2: Pearson Correlation */}
          <motion.div
            {...cardRise(0.2)}
            style={{
              background: "rgba(59, 130, 246, 0.02)",
              border: "1px solid rgba(59, 130, 246, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#3B82F6", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#3B82F6", color: "white", padding: "2px 8px", borderRadius: "6px" }}>2</span>
              Same-User Correlation
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              For every user, calculate the Pearson correlation coefficient between their weight vectors for each pair of domains (e.g. Art & Fashion). A high correlation indicates a consistent personal aesthetic formula.
            </p>
          </motion.div>

          {/* Card 3: Permutation Test Baseline */}
          <motion.div
            {...cardRise(0.3)}
            style={{
              background: "rgba(245, 158, 11, 0.02)",
              border: "1px solid rgba(245, 158, 11, 0.1)",
              borderRadius: "20px",
              padding: "24px 28px",
            }}
          >
            <h4 style={{ fontSize: 21, fontWeight: 800, color: "#F59E0B", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, background: "#F59E0B", color: "white", padding: "2px 8px", borderRadius: "6px" }}>3</span>
              Permutation Baseline Test
            </h4>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.5, margin: 0 }}>
              To ensure similarity isn't accidental, construct a baseline by randomly pairing different users across domains <strong>2000 times</strong>, measuring their average correlation. Then compare: is same-user correlation significantly higher?
            </p>
          </motion.div>

        </motion.div>

      </div>
    </SlideShell>
  );
}
