import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

export function Finding2bSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Finding 2b"
        title="The answer depends on "
        highlight="how we measure the emotions."
        accentWidth={100}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        {/* Left Column: Test-Retest Diagram */}
        <motion.div
          {...cardRise(0.15)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EEEDEA",
            borderRadius: 20,
            padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Emotion Sources
            </span>
            <h4 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 800, color: "#4A1533" }}>
              Test-Retest Setup
            </h4>
            <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "#6B5B6E", fontWeight: 550 }}>
              The same user rated the exact same photo twice across distinct sessions (S1 &amp; S2).
            </p>
          </div>

          {/* Graphical Diagram */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "12px 0", position: "relative" }}>
            {/* Session boxes */}
            <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
              <div style={{ border: "1px solid #EEEDEA", padding: "8px 12px", borderRadius: 8, background: "#FDFCFD", fontSize: 12, fontWeight: 700 }}>
                Session 1 (S1)
              </div>
              <div style={{ border: "1px solid #EEEDEA", padding: "8px 12px", borderRadius: 8, background: "#FDFCFD", fontSize: 12, fontWeight: 700 }}>
                Session 2 (S2)
              </div>
            </div>

            {/* Arrows pointing to P */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8, paddingLeft: 8 }}>
              {/* Same Session */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 2, background: "#9E9E9E", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#9E9E9E", textTransform: "uppercase" }}>unfair:</span>
                <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 650 }}>emotions &amp; scores from S1</span>
              </div>
              {/* Cross Session */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 2, background: "#C2185B", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#C2185B", textTransform: "uppercase" }}>honest:</span>
                <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 650 }}>emotions from S1, scores from S2</span>
              </div>
              {/* Averaged */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 2, background: "#7B2C8F", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#7B2C8F", textTransform: "uppercase" }}>fairest:</span>
                <span style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 650 }}>average emotions S1 &amp; S2</span>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: "#6B5B6E", fontWeight: 700, borderTop: "1px dashed #EEEDEA", paddingTop: 8, textAlign: "center" }}>
            * only P changes; S and S-global stay fixed
          </div>
        </motion.div>

        {/* Right Column: Table + Conclusion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div
            {...cardRise(0.22)}
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEEDEA",
              borderRadius: 20,
              padding: "20px 24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                  <th style={{ padding: "8px", fontSize: 13, color: "#4A1533", fontWeight: 900 }}>Measure</th>
                  <th style={{ padding: "8px", fontSize: 13, color: "#4A1533", fontWeight: 900 }}>Perception (CCC)</th>
                  <th style={{ padding: "8px", fontSize: 13, color: "#4A1533", fontWeight: 900 }}>Winner</th>
                </tr>
              </thead>
              <tbody>
                {/* Same-Session */}
                <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                  <td style={{ padding: "10px 8px", fontSize: 13, fontWeight: 700, color: "#6B5B6E" }}>same-session</td>
                  <td style={{ padding: "10px 8px", fontSize: 13, color: "#6B5B6E" }}>58% <span style={{ fontSize: 11, opacity: 0.8 }}>[52%, 65%]</span></td>
                  <td style={{ padding: "10px 8px" }}>
                    <span style={{ fontSize: 11, background: "rgba(123,44,143,0.06)", border: "1px solid rgba(123,44,143,0.15)", color: "#7B2C8F", padding: "2px 8px", borderRadius: 6, fontWeight: 800 }}>
                      feeling
                    </span>
                  </td>
                </tr>
                {/* Cross-Session */}
                <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                  <td style={{ padding: "10px 8px", fontSize: 13, fontWeight: 700, color: "#6B5B6E" }}>cross-session</td>
                  <td style={{ padding: "10px 8px", fontSize: 13, color: "#6B5B6E" }}>38% <span style={{ fontSize: 11, opacity: 0.8 }}>[30%, 46%]</span></td>
                  <td style={{ padding: "10px 8px" }}>
                    <span style={{ fontSize: 11, background: "#FCE4EC", border: "1px solid rgba(194,24,91,0.15)", color: "#C2185B", padding: "2px 8px", borderRadius: 6, fontWeight: 800 }}>
                      weighting
                    </span>
                  </td>
                </tr>
                {/* Averaged (fairest) */}
                <tr style={{ background: "#FCE4EC", borderBottom: "2px solid #C2185B" }}>
                  <td style={{ padding: "12px 8px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>averaged (fairest)</td>
                  <td style={{ padding: "12px 8px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>55% <span style={{ fontSize: 11, opacity: 0.8 }}>[48%, 62%]</span></td>
                  <td style={{ padding: "12px 8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 900, color: "#7B2C8F" }}>&approx; 50/50 (tie)</span>
                      <span style={{ fontSize: 9.5, color: "#C2185B", fontWeight: 800 }}>both matter</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Tie Badge Card */}
          <motion.div
            {...cardRise(0.32)}
            style={{
              background: "#FCE4EC",
              border: "1px dashed rgba(194, 24, 91, 0.3)",
              borderRadius: 16,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{
              width: 10, height: 10, borderRadius: "50%", background: "#C2185B",
              boxShadow: "0 0 6px rgba(194, 24, 91, 0.3)", flexShrink: 0
            }} />
            <span style={{ fontSize: 13.5, color: "#4A1533", fontWeight: 800 }}>
              can&apos;t tell &rarr; both perception &amp; weighting are equally important.
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Caption */}
      <motion.div
        {...fadeInUp(0.4)}
        style={{
          marginTop: 8,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 800,
          color: "#6B5B6E",
        }}
      >
        so we report it honestly, as a supporting result with ranges
      </motion.div>
    </SlideShell>
  );
}
Finding2bSlide.slideId = "Finding2b";
