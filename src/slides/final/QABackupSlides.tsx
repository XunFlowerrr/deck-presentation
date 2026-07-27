import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";
import { Equation, Var, Op, Sub, Frac } from "../../components/primitives/Equation.tsx";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.05 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.04 },
];

function QABadge({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <span
        style={{
          flexShrink: 0,
          fontSize: 12,
          fontWeight: 900,
          color: "#FFFFFF",
          background: "#C2185B",
          padding: "3px 10px",
          borderRadius: 6,
          letterSpacing: "0.05em",
        }}
      >
        Q&amp;A-{n}
      </span>
      <span style={{ fontSize: 13, fontWeight: 800, color: "#6B5B6E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </span>
    </div>
  );
}

// ── Q&A-1: Table 1 (All Performance Metrics) ──────────────────────────────
export function QaaDecompositionSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 1" title="Table 1: " highlight="Comprehensive Model Metrics." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="1" label="All Performance Metrics" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Model Type</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Traits Required</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>CCC</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>PLCC</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>SRCC</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>Direct Baseline (VLM Only)</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>No</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>0.293</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.301</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.297</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>ICI Baseline (8B VLM)</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>Yes (Big Five Traits)</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>0.369</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.372</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.365</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>MIR Baseline (8B VLM)</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>Yes (Big Five Traits)</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#6B5B6E" }}>0.385</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.390</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>0.382</td>
              </tr>
              <tr style={{ background: "rgba(194, 24, 91, 0.05)", borderBottom: "2px solid #C2185B" }}>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 900, color: "#C2185B" }}>Ours (Hybrid, Explainable)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>None (Traits-Free)</td>
                <td style={{ padding: "14px 8px", fontSize: 15, fontWeight: 900, color: "#C2185B" }}>0.380</td>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 900, color: "#C2185B" }}>0.386</td>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 900, color: "#C2185B" }}>0.378</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-2: Table 2 (Dataset Details) ──────────────────────────────────────
export function QaaCeilingSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 2" title="Table 2: " highlight="Dataset Domain Breakdown." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="2" label="XPASS-Vis Dataset Breakdown" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Visual Domain</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Evaluators</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Unique Images</th>
                <th style={{ padding: "10px 8px", color: "#4A1533", fontWeight: 800, fontSize: 14 }}>Total Ratings</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#4A1533" }}>Artistic Images</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>129</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#4A1533" }}>2,186</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#C2185B" }}>29,278</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#4A1533" }}>Fashion Photos</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>129</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#4A1533" }}>2,170</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#C2185B" }}>29,270</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#4A1533" }}>Landscape Photos</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#6B5B6E" }}>129</td>
                <td style={{ padding: "12px 8px", fontSize: 13, color: "#4A1533" }}>2,170</td>
                <td style={{ padding: "12px 8px", fontSize: 14, fontWeight: 700, color: "#C2185B" }}>29,288</td>
              </tr>
              <tr style={{ background: "rgba(194, 24, 91, 0.05)", borderBottom: "2px solid #C2185B" }}>
                <td style={{ padding: "14px 8px", fontSize: 14, fontWeight: 900, color: "#C2185B" }}>Total Dataset (XPASS-Vis)</td>
                <td style={{ padding: "14px 8px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>129</td>
                <td style={{ padding: "14px 8px", fontSize: 13, fontWeight: 900, color: "#C2185B" }}>6,526</td>
                <td style={{ padding: "14px 8px", fontSize: 15, fontWeight: 900, color: "#C2185B" }}>87,836</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-3: Noise Ceiling Calculation (from preferred-v.02) ────────────────
export function QaaNoiseCeilingSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 3" title="Noise Ceiling: " highlight="Upper Limit Derivation." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 14,
          }}
        >
          <QABadge n="3" label="Human Noise Ceiling Calculation" />
          
          <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
            The upper bound for preference prediction is bounded by human test-retest reliability across sessions:
          </p>

          <Equation size={20} color="#7B2C8F">
            <Var>Ceiling</Var> = <Var>r</Var><Sub><Var>test-retest</Var></Sub> = <Frac num={<><Var>Cov</Var>(<Var>S</Var><Sub>1</Sub>, <Var>S</Var><Sub>2</Sub>)</>} den={<><Var>&sigma;</Var><Sub>1</Sub> <Var>&sigma;</Var><Sub>2</Sub></>} /> = 0.639 &asymp; 0.64
          </Equation>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 4 }}>
            <div style={{ background: "#FDFCFD", padding: 14, borderRadius: 12, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B" }}>Same-Session Consistency</div>
              <div style={{ fontSize: 13, color: "#4A1533", marginTop: 4, fontWeight: 700 }}>
                CCC = 0.81 (High intra-rater agreement)
              </div>
            </div>

            <div style={{ background: "#FDFCFD", padding: 14, borderRadius: 12, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F" }}>Cross-Session (Days Later)</div>
              <div style={{ fontSize: 13, color: "#4A1533", marginTop: 4, fontWeight: 700 }}>
                CCC = 0.64 (Realistic Deployment Ceiling)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-4: PCA Details & Formula (from HEAD) ──────────────────────────────
export function QaaProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 4" title="Placebo: " highlight="PCA Details & Formula." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="4" label="PCA Baseline Construction" />
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
            How are the placebo PCA features projected?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
            To check if the gain is from actual emotional semantics, we swap emotion dimensions with PCA features of the same length (7 dimensions) extracted from VLM features:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "6px 0" }}>
            <Equation size={18} color="#4A1533">
              <Var>z</Var><Sub><Op>PCA</Op></Sub>(<Var>i</Var>) = <Var>f</Var><Sub><Op>VLM</Op></Sub>(<Var>i</Var>) &middot; <Var>W</Var><Sub><Op>PCA</Op></Sub> &nbsp;&nbsp; <span style={{ fontSize: "0.75em", color: "#6B5B6E", fontFamily: "sans-serif" }}>(7-dim PCA projection)</span>
            </Equation>

            <Equation size={18} color="#C2185B">
              <Var>Score</Var>(<Var>u</Var>, <Var>i</Var>) = <Var>w</Var><Sub>0</Sub> + <Var>w</Var><Sub><Var>u</Var>,1</Sub> <Var>z</Var><Sub><Op>PCA</Op>,1</Sub>(<Var>i</Var>) + &dots; + <Var>w</Var><Sub><Var>u</Var>,7</Sub> <Var>z</Var><Sub><Op>PCA</Op>,7</Sub>(<Var>i</Var>)
            </Equation>
          </div>

          <div style={{ display: "flex", gap: 12, background: "rgba(123, 44, 143, 0.05)", border: "1px dashed rgba(123, 44, 143, 0.2)", borderRadius: 12, padding: 14 }}>
            <span style={{ color: "#7B2C8F", fontWeight: 900 }}>★ Placebo Result:</span>
            <span style={{ fontSize: 13, color: "#6B5B6E", fontWeight: 500, lineHeight: 1.4 }}>
              The PCA baseline drops personalization CCC gain from <strong>0.380</strong> down to <strong>0.160</strong>. This verifies that actual human emotional semantics drive aesthetic personalization.
            </span>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-5: Partial Correlation Analysis (from preferred-v.02) ──────────────
export function QaaPartialCorrSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 5" title="Analysis: " highlight="Partial Correlation Driver." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="5" label="Partial Correlation Analysis" />
          
          <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
            Controlling for the Direct baseline model&apos;s performance confirms that emotion predictability (<Equation inline size={14} color="#7B2C8F"><Var>emo</Var><Sub><Var>r</Var></Sub></Equation>) is the true driver of gain:
          </p>

          <Equation size={20} color="#C2185B">
            <Var>r</Var><Sub><Var>gain</Var>, <Var>emo_r</Var> &middot; <Var>Direct</Var></Sub> = 0.42 &nbsp; (<Var>p</Var> &lt; 0.001)
          </Equation>

          <div style={{ background: "rgba(194, 24, 91, 0.05)", border: "1px solid rgba(194, 24, 91, 0.15)", borderRadius: 14, padding: 16 }}>
            <span style={{ fontSize: 13.5, color: "#4A1533", fontWeight: 700, lineHeight: 1.5 }}>
              Key Insight: Emotion accuracy (<Equation inline size={13} color="#C2185B"><Var>emo</Var><Sub><Var>r</Var></Sub></Equation>) is the primary driver of accuracy gain, independent of how much prediction room the baseline provides.
            </span>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-6: Hyperparameters & Regularization (from HEAD) ────────────────────
export function QaaHyperparamsSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 6" title="Parameters: " highlight="Hyperparameter Settings." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="6" label="Regularization & Training Details" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }}>
            <div style={{ background: "#FDFCFD", padding: 16, borderRadius: 14, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", textTransform: "uppercase" }}>
                Stage 1 (Shared Predictor)
              </div>
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, fontSize: 13, color: "#6B5B6E", lineHeight: 1.6, fontWeight: 500 }}>
                <li><strong>Backbone:</strong> Qwen-VL-4B (Frozen VLM features, dimension = 4,096)</li>
                <li><strong>MLP Arch:</strong> 3 layers (4,096 &rarr; 512 &rarr; 7)</li>
                <li><strong>Epochs:</strong> 20 (Early stopping)</li>
                <li><strong>Optimizer:</strong> AdamW (learning rate = 1e-4)</li>
              </ul>
            </div>

            <div style={{ background: "#FDFCFD", padding: 16, borderRadius: 14, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase" }}>
                Stage 2 (Personal Weights)
              </div>
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, fontSize: 13, color: "#6B5B6E", lineHeight: 1.6, fontWeight: 500 }}>
                <li><strong>Fitting Model:</strong> L2-Regularized Ridge Regression</li>
                <li><strong>Alpha parameter:</strong> $\alpha = 10$ (regularization weight)</li>
                <li><strong>Search Range:</strong> Grid search over $[0.1, 1.0, 10.0, 100.0]$</li>
                <li><strong>Folds:</strong> 5-fold cross-validation (100 adaptation ratings)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-7: Design Choices (Why Linear & Why 7 Emotions) ────────────────────
export function QaaDesignChoiceSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 7" title="Design Choice: " highlight="Why Linear & Why 7 Emotions?" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="7" label="Model Architecture Rationale" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }}>
            <div style={{ background: "#FDFCFD", padding: 16, borderRadius: 14, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B", textTransform: "uppercase" }}>
                Why Linear Model?
              </div>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18, fontSize: 12.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                <li><strong>Cognitive Science:</strong> Linear weighting on mediated emotions matches human cognitive findings (Iigaya et al. 2020).</li>
                <li><strong>Explainability:</strong> Yields a transparent per-person weight vector (<Equation inline size={12} color="#C2185B"><Var>w</Var><Sub><Var>u,e</Var></Sub></Equation>).</li>
                <li><strong>Regularization:</strong> Ridge regression handles emotion collinearity without overfitting.</li>
              </ul>
            </div>

            <div style={{ background: "#FDFCFD", padding: 16, borderRadius: 14, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F", textTransform: "uppercase" }}>
                Why Exactly 7 Emotions?
              </div>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18, fontSize: 12.5, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
                <li><strong>Taxonomy:</strong> Selected from the 21 emotional sub-scales in AESTHEMOS.</li>
                <li><strong>No Circularity:</strong> Excludes adjectives like &ldquo;beautiful&rdquo; to prevent predicting preference from preference.</li>
                <li><strong>Sparsity:</strong> Small feature space prevents overfitting while preserving granularity.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-8: Comparison with Prior PIAA Works (from preferred-v.02) ──────────
export function QaaRelatedWorkSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 8" title="Related Work: " highlight="Comparison with Prior PIAA." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="8" label="Comparison with Prior PIAA Literature" />
          
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: 8 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "22%" }}>Prior Work</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "35%" }}>Approach</th>
                <th style={{ padding: "8px 6px", color: "#4A1533", fontWeight: 800, fontSize: 13, width: "43%" }}>Our Key Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#4A1533" }}>Ryu &amp; Yanaka (2022)</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}>Big Five personality traits to group users.</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>Traits-free:</strong> Bypasses intrusive surveys using emotion semantics.</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#4A1533" }}>Liu &amp; Wagemans (2020)</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}>Shared (generic) consensus emotional ratings.</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>Personal weights:</strong> Adapts weighting profiles per user.</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#4A1533" }}>Lan et al. (2021)</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}>Deep end-to-end black-box personalization.</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>White-box explainability:</strong> Yields readable user weights.</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #EEEDEA" }}>
                <td style={{ padding: "10px 6px", fontSize: 13, fontWeight: 700, color: "#4A1533" }}>Iigaya et al. (2020)</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}>Linear weighting on low-level features.</td>
                <td style={{ padding: "10px 6px", fontSize: 12.5, color: "#6B5B6E" }}><strong style={{ color: "#C2185B" }}>High-level VLM features:</strong> Models semantic visual emotions.</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}
