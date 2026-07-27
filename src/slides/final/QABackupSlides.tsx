import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../../components/index.ts";
import { cardRise } from "../../lib/motion.ts";

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

// ── Q&A-1: Table 1 (All Metrics) ──────────────────────────────────────────
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

// ── Q&A-3: PCA Details & Formula ──────────────────────────────────────────
export function QaaProtocolSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 3" title="Placebo: " highlight="PCA Details & Formula." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="3" label="PCA Baseline Construction" />
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
            How are the placebo PCA features projected?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
            To check if the gain is from actual emotional semantics, we swap emotion dimensions with PCA features of the same length (7 dimensions) extracted from VLM features:
          </p>

          <div style={{ background: "#FDFCFD", padding: "16px 20px", borderRadius: 12, border: "1px solid #EEEDEA", fontFamily: "monospace", fontSize: 15, color: "#4A1533", margin: "8px 0" }}>
            {`PCA_Features(i) = VLM_Features(i) * PCA_Projection_Matrix`}
            <br />
            <br />
            {`Score(u, i) = w_0 + w_{u,1}*PCA_1(i) + ... + w_{u,7}*PCA_7(i)`}
          </div>

          <div style={{ display: "flex", gap: 12, background: "rgba(123, 44, 143, 0.05)", border: "1px dashed rgba(123, 44, 143, 0.2)", borderRadius: 12, padding: 14 }}>
            <span style={{ color: "#7B2C8F", fontWeight: 900 }}>★ Placebo Result:</span>
            <span style={{ fontSize: 13, color: "#6B5B6E", fontWeight: 500, lineHeight: 1.4 }}>
              The PCA baseline drops personalization CCC gain from <strong>0.380</strong> down to <strong>0.160</strong>. This verifies that actual human emotional semantics (not just generic bottlenecks) drive aesthetic personalization.
            </span>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-4: Hyperparameters & Regularization ──────────────────────────────
export function QaaPartialCorrSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 4" title="Parameters: " highlight="Hyperparameter Settings." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="4" label="Regularization & Training Details" />
          
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

// ── Q&A-5: Why 7 Emotions? ────────────────────────────────────────────────
export function QaaDesignChoiceSlide() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Q&A Backup — 5" title="Design Choice: " highlight="Why 7 Core Emotions?" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid #EEEDEA", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.015)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="5" label="Taxonomy Selection" />
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#4A1533" }}>
            Why choose exactly these 7 emotions?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#6B5B6E", lineHeight: 1.5, fontWeight: 500 }}>
            The 7 emotions (impressed, intellectual, motivated, amused, nostalgic, sad, distasteful) are selected based on these academic design rules:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16, marginTop: 8 }}>
            <div style={{ background: "#FDFCFD", padding: 14, borderRadius: 12, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C2185B" }}>Source: AESTHEMOS</div>
              <div style={{ fontSize: 12, color: "#6B5B6E", marginTop: 4, lineHeight: 1.4, fontWeight: 500 }}>
                Selected from the 21 emotional sub-scales in the AESTHEMOS taxonomy. Excludes direct evaluative adjectives (like &ldquo;beautiful&rdquo; or &ldquo;like&rdquo;) to prevent circular reasoning.
              </div>
            </div>

            <div style={{ background: "#FDFCFD", padding: 14, borderRadius: 12, border: "1px solid #EEEDEA" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#7B2C8F" }}>Sufficient Coverage &amp; Sparsity</div>
              <div style={{ fontSize: 12, color: "#6B5B6E", marginTop: 4, lineHeight: 1.4, fontWeight: 500 }}>
                Spans both positive (amused, motivated) and negative (sad, distasteful) aesthetic experiences. A small feature space prevents regression overfitting while preserving explainable granularity.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
