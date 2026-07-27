import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { Equation, Var, Sub, Sum, Op } from "../../components/primitives/Equation.tsx";
import { cardRise } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.04 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

function QABadge({ letter, label }: { letter: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <span
        style={{
          flexShrink: 0,
          fontSize: 11,
          fontWeight: 900,
          color: "#FFFFFF",
          background: "#C2185B", // Primary Pink
          padding: "2px 8px",
          borderRadius: 6,
          letterSpacing: "0.05em",
        }}
      >
        Q&amp;A-{letter}
      </span>
      <span style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </span>
    </div>
  );
}

// ── QA-A: Decomposition detail ──────────────────────────────────────────
export function QaaDecompositionSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — A" title="Decomposition " highlight="detail." accentWidth={100} />
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, alignItems: "center" }}>
        {/* Left: Table */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge letter="A" label="Variance Decomposition Comparison" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Definition</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Perception %</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Weighting %</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#2B2230" }}>Same-Session</td>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#6B5B6E" }}>60% <span style={{ fontSize: 10, opacity: 0.8 }}>[55%, 65%]</span></td>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#6B5B6E" }}>40% <span style={{ fontSize: 10, opacity: 0.8 }}>[35%, 45%]</span></td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#2B2230" }}>Cross-Session</td>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#6B5B6E" }}>40% <span style={{ fontSize: 10, opacity: 0.8 }}>[34%, 46%]</span></td>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#6B5B6E" }}>60% <span style={{ fontSize: 10, opacity: 0.8 }}>[54%, 66%]</span></td>
              </tr>
              <tr style={{ background: "#FCE4EC", borderBottom: "2px solid #C2185B" }}>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>Averaged (Mixed)</td>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>50% <span style={{ fontSize: 10, opacity: 0.8 }}>[42%, 58%]</span></td>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>50% <span style={{ fontSize: 10, opacity: 0.8 }}>[42%, 58%]</span></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Right: Explanatory text */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>3 Predictor Categories:</h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, color: "#6B5B6E", lineHeight: 1.5, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>
              <strong style={{ color: "#2B2230" }}>Perception (Feeling differences):</strong> How different users perceive the emotional content of an image.
            </li>
            <li>
              <strong style={{ color: "#2B2230" }}>Weighting (Formula differences):</strong> How differently users weigh emotions when forming aesthetic preferences (<Equation inline size={12} color="#7B2C8F"><Var>w</Var><Sub><Var>u</Var>,<Var>e</Var></Sub></Equation>).
            </li>
            <li>
              <strong style={{ color: "#2B2230" }}>Intercept (Baseline rating differences):</strong> Differences in user baseline rating scales (<Equation inline size={12} color="#7B2C8F"><Var>w</Var><Sub>0</Sub></Equation>).
            </li>
          </ul>
          <div style={{ marginTop: 12, borderTop: "1px dashed #EEEDEA", paddingTop: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
              Personalized PIAA Regression Model:
            </div>
            <Equation color="#4A1533" size={17} style={{ background: "#FCE4EC", border: "1px solid rgba(194, 24, 91, 0.1)" }}>
              <Var>Score</Var>(<Var>u</Var>, <Var>i</Var>)
              <Op>&nbsp;=&nbsp;</Op>
              <Var>w</Var><Sub>0</Sub>
              <Op>&nbsp;+&nbsp;</Op>
              <Sum from={<><Var>e</Var><Op>=1</Op></>} to={<Op>7</Op>}>
                <Var>w</Var><Sub><Var>u</Var>,<Var>e</Var></Sub>
                <Var>f</Var><Sub><Var>e</Var></Sub>(<Var>i</Var>)
              </Sum>
            </Equation>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaDecompositionSlide.slideId = "QaaDecomposition";

// ── QA-B: Ceiling detail ────────────────────────────────────────────────
export function QaaCeilingSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — B" title="Noise Ceiling " highlight="Estimates." accentWidth={100} />
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 24, alignItems: "center" }}>
        {/* Left: Table */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge letter="B" label="Noise Ceiling Configurations" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Configuration Case</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Ceiling (CCC)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#2B2230" }}>Case A: Same-Session, Single Annotation</td>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#6B5B6E" }}>0.81</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA", background: "#FCE4EC" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>Case B: Cross-Session, Single Annotation (Realistic)</td>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>0.64</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#2B2230" }}>Case C: Same-Session, Multi-Annotation Averaged</td>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#6B5B6E" }}>0.86</td>
              </tr>
              <tr style={{ borderBottom: "1.5px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, color: "#2B2230" }}>Case D: Cross-Session, Multi-Annotation Averaged</td>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#6B5B6E" }}>0.69</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Right: Key metrics */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>Statistical Rigor:</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "#6B5B6E" }}>
            <div>
              <strong style={{ color: "#2B2230" }}>Per-User Ceiling:</strong> Median self-agreement is 0.693 (CCC) when same users rate same images across sessions.
            </div>
            <div>
              <strong style={{ color: "#2B2230" }}>Ranking Stability:</strong> SROCC drops only marginally from 0.82 to 0.79, indicating ranking survives session noise well.
            </div>
            <div>
              <strong style={{ color: "#2B2230" }}>Kolmogorov-Smirnov Test:</strong> p &gt; 0.05, confirming that rating distributions across different sessions remain stationary.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaCeilingSlide.slideId = "QaaCeiling";

// ── QA-C: Leak-free protocol ─────────────────────────────────────────────
export function QaaProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — C" title="Leak-free " highlight="validation." accentWidth={100} />
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "center" }}>
        {/* Left: Scheme */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge letter="C" label="10-Group 5-Fold Cross-Validation" />
          <div style={{ fontSize: 13, color: "#6B5B6E", lineHeight: 1.5, display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <strong style={{ color: "#2B2230" }}>1. Disjoint User Splits:</strong>
              <br />
              129 users are split into 10 groups. One group is entirely held out for evaluation.
            </div>
            <div>
              <strong style={{ color: "#2B2230" }}>2. Stage 1 (Shared Emotion Model):</strong>
              <br />
              Trained on 9 groups. The held-out group&apos;s users and their rated images are never seen.
            </div>
            <div>
              <strong style={{ color: "#2B2230" }}>3. Stage 2 (Personal Fitting):</strong>
              <br />
              Evaluated on the held-out group using 5-fold CV to adapt weights.
            </div>
          </div>
        </motion.div>

        {/* Right: Split Details */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FCE4EC", border: "1px solid rgba(194, 24, 91, 0.15)", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>Disjoint Group Splits:</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "#6B5B6E" }}>
            <div style={{ background: "#FFFFFF", padding: "8px 12px", borderRadius: 8, border: "1px solid #EEEDEA" }}>
              <strong style={{ color: "#C2185B" }}>Adaptation split:</strong> 100 images per user used to customize the emotion weights.
            </div>
            <div style={{ background: "#FFFFFF", padding: "8px 12px", borderRadius: 8, border: "1px solid #EEEDEA" }}>
              <strong style={{ color: "#C2185B" }}>Validation split:</strong> 10 images per user used for validation.
            </div>
            <div style={{ background: "#FFFFFF", padding: "8px 12px", borderRadius: 8, border: "1px solid #EEEDEA" }}>
              <strong style={{ color: "#C2185B" }}>Evaluation split:</strong> 19 images per user used to report final model accuracy.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaProtocolSlide.slideId = "QaaProtocol";

// ── QA-D: emo_r partial correlation ──────────────────────────────────────
export function QaaPartialCorrSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — D" title="Partial " highlight="correlation." accentWidth={100} />
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, alignItems: "center" }}>
        {/* Left: Table */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge letter="D" label="Partial Correlation Analysis" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Metric</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Raw Correlation</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13 }}>Partial Correlation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 700, color: "#2B2230" }}>Pearson r</td>
                <td style={{ padding: "12px 6px", fontSize: 13, color: "#6B5B6E" }}>0.42 <span style={{ fontSize: 10, color: "#7B2C8F" }}>(p &lt; 0.01)</span></td>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 800, color: "#C2185B" }}>0.38 <span style={{ fontSize: 10, color: "#7B2C8F" }}>(p &lt; 0.01)</span></td>
              </tr>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 700, color: "#2B2230" }}>Spearman rho</td>
                <td style={{ padding: "12px 6px", fontSize: 13, color: "#6B5B6E" }}>0.39 <span style={{ fontSize: 10, color: "#7B2C8F" }}>(p &lt; 0.01)</span></td>
                <td style={{ padding: "12px 6px", fontSize: 13, fontWeight: 800, color: "#C2185B" }}>0.35 <span style={{ fontSize: 10, color: "#7B2C8F" }}>(p &lt; 0.01)</span></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Right: Explanation */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#4A1533" }}>Why Partial Correlation?</h4>
          <p style={{ margin: 0, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 550 }}>
            We must control for the baseline model&apos;s performance. If we do not control for it, the correlation between <Equation inline size={13} color="#7B2C8F"><Var>emo</Var><Sub><Var>r</Var></Sub></Equation> (emotion predictability) and performance gain could be a statistical artifact (e.g. simply predicting worse users better).
            <br />
            <br />
            The significant partial correlation confirms that <strong style={{ color: "#C2185B" }}>emotion accuracy is the primary driver of accuracy gain</strong>, independent of the baseline&apos;s prediction room.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaPartialCorrSlide.slideId = "QaaPartialCorr";

// ── QA-E: Design choices ────────────────────────────────────────────────
export function QaaDesignChoiceSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — E" title="Design " highlight="choices." accentWidth={100} />
      
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "center" }}>
        {/* Left: Why Linear */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
            minHeight: 280, justifyContent: "space-between",
          }}
        >
          <div>
            <QABadge letter="E" label="Why Linear Model?" />
            <ul style={{ margin: "8px 0 0", paddingLeft: 20, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.5, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>
                <strong style={{ color: "#2B2230" }}>Cognitive Science basis:</strong> Aesthetic judgment behaves linearly when mediated by emotions (Iigaya et al., Nature Communications 2020).
              </li>
              <li>
                <strong style={{ color: "#2B2230" }}>Explainability:</strong> Yields a readable per-person weight vector (<Equation inline size={13} color="#7B2C8F"><Var>w</Var><Sub><Var>u</Var>,<Var>e</Var></Sub></Equation>) mapping specific emotions directly to taste.
              </li>
              <li>
                <strong style={{ color: "#2B2230" }}>Regularization:</strong> Ridge regression handles collinearity between the 7 emotions effectively. Non-linear models (MLPs) did not show statistically significant CCC improvements.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Why 7 Emotions */}
        <motion.div
          {...cardRise(0.2)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
            minHeight: 280, justifyContent: "space-between",
          }}
        >
          <div>
            <QABadge letter="E" label="Why exactly 7 Emotions?" />
            <ul style={{ margin: "8px 0 0", paddingLeft: 20, fontSize: 13.5, color: "#6B5B6E", lineHeight: 1.5, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>
                <strong style={{ color: "#2B2230" }}>Taxonomy:</strong> Selected from the 21 emotional sub-scales in the AESTHEMOS taxonomy.
              </li>
              <li>
                <strong style={{ color: "#2B2230" }}>Circular Reasoning Avoidance:</strong> Adjectives like &ldquo;beautiful&rdquo; or &ldquo;like&rdquo; are intentionally excluded to prevent predicting preference from preference.
              </li>
              <li>
                <strong style={{ color: "#2B2230" }}>Coverage:</strong> Spans positive (motivated, amused), negative (sad, distasteful), and intellectual aesthetic emotions.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaDesignChoiceSlide.slideId = "QaaDesignChoice";

// ── QA-F: Related Work ──────────────────────────────────────────────────
export function QaaRelatedWorkSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — F" title="Related " highlight="work." accentWidth={100} />
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.01)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge letter="F" label="Comparison with Prior PIAA Works" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "20%" }}>Prior Work</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "35%" }}>Approach</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "45%" }}>Our Key Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 12.5, fontWeight: 700, color: "#2B2230" }}>Ryu &amp; Yanaka (2022)</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}>Uses Big Five personality traits to group users.</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>Traits-free:</strong> We bypass sensitive personality tests, using visual emotion semantics.</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 12.5, fontWeight: 700, color: "#2B2230" }}>Liu &amp; Wagemans (2020)</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}>Focuses on shared (generic) consensus emotional ratings.</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>Personal weights:</strong> We adapt the weighting profiles *per user* for aesthetics.</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 12.5, fontWeight: 700, color: "#2B2230" }}>Lan et al. (2021)</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}>Deep end-to-end learning to predict personal score.</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>White-box explainability:</strong> Our formula yields readable, interpretable user preferences.</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 12.5, fontWeight: 700, color: "#2B2230" }}>Iigaya et al. (2020)</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}>Linear weighting on low-level features (brightness, contrast).</td>
                <td style={{ padding: "10px 6px", fontSize: 12, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>High-level VLM features:</strong> We model semantic visual emotions using pre-trained VLMs.</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}
QaaRelatedWorkSlide.slideId = "QaaRelatedWork";
