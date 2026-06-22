import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { fadeIn } from "../lib/motion.ts";
import { permutationConvergenceImg } from "../content/assets-week3.ts";

const GLOWS = [
  { top: -220, left: -140, size: 760, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -220, right: -140, size: 620, color: "236, 72, 153", opacity: 0.08 },
];

export function AppendixPermutationConvergence() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Appendix"
        title="Permutation Test"
        highlight="Convergence."
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, minHeight: 0 }}>
        <motion.div
          {...fadeIn(0.2)}
          style={{
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0,
          }}
        >
          <img
            src={permutationConvergenceImg}
            alt="Permutation test convergence plot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </motion.div>

        <motion.div
          {...fadeIn(0.32)}
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#6B7280",
            lineHeight: 1.5,
            padding: "0 24px",
          }}
        >
          Running mean stabilizes by ~n=500 rounds. Difference between n=2,000 and n=5,000 is only 0.001 — confirming 2,000 rounds is sufficient.
        </motion.div>
      </div>
    </SlideShell>
  );
}