import { motion } from "framer-motion";
import { SlideHeader, SlideShell, Equation, Var, Sub, Sum } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 79, 113", opacity: 0.08 },
  { bottom: -200, right: -100, size: 600, color: "194, 79, 113", opacity: 0.06 },
];

function QABadge({ n }: { n: string }) {
  return (
    <span
      style={{
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 900,
        color: "#FFFFFF",
        background: "#C24F71",
        padding: "4px 12px",
        borderRadius: 8,
        letterSpacing: "0.05em",
        alignSelf: "flex-start",
        border: "1px solid rgba(45, 49, 54, 0.08)",
        boxShadow: "0 4px 12px rgba(194, 79, 113, 0.2)",
      }}
    >
      Q&A-{n}
    </span>
  );
}

// ── Q&A-A: Decomposition Detail ─────────────────────────────────────────────
export function QaaDecompositionSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader label="Q&A Backup — A" title="Decomposition: " highlight="Perception vs Weighting." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="A" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
            How do the 3 predictors isolate perception vs weighting differences?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
            We design 3 models to isolate and measure taste variance components:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 8 }}>
            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>1. Perception ($P$)</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136", marginTop: 4 }}>Personal $E$ + Global $W$</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>Each user perceives different emotional scores, but applies a shared global weight formula.</div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136" }}>2. Weighting ($S$)</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136", marginTop: 4 }}>Global $E$ + Personal $W$</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>Everyone perceives identical emotional scores, but applies a customized personal weight formula.</div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>3. Global ($S_{global}$)</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#2D3136", marginTop: 4 }}>Global $E$ + Global $W$</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>Applies shared average emotion scores alongside a shared population weight formula.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.15)",
            borderRadius: 14, padding: "16px 20px", fontSize: 14, color: "#2D3136", lineHeight: 1.5,
            fontWeight: 700, boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
          }}
        >
          <strong>Confidence Interval (CI) Findings:</strong> Confidence intervals of variance share overlap depending on variables normalization, proving empirically that both perception and weighting components are substantial taste drivers.
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-B: Ceiling Detail ──────────────────────────────────────────────────
export function QaaCeilingSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader label="Q&A Backup — B" title="Ceiling: " highlight="Measurement & KS Test." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="B" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
            How do we calculate the realistic ceiling and verify it with the KS test?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
            We estimate the correlation noise ceiling using 4 distinct calculations:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>Ceiling Grid Table (A/B/C/D)</div>
              <div style={{ fontSize: 13, color: "#626B74", lineHeight: 1.45, marginTop: 4 }}>
                Estimates human rating conflicts in population and per-user limits across sessions, identifying the realistic deployment noise ceiling at <strong>0.639</strong>.
              </div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136" }}>Kolmogorov-Smirnov (KS) Test</div>
              <div style={{ fontSize: 13, color: "#626B74", lineHeight: 1.45, marginTop: 4 }}>
                We perform Kolmogorov-Smirnov (KS) tests comparing population vs personal predictions, verifying statistically significant differences.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.15)",
            borderRadius: 14, padding: "16px 20px", fontSize: 14, color: "#2D3136", lineHeight: 1.5,
            fontWeight: 700, boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
          }}
        >
          <strong>Realistic Noise Ceiling Impact:</strong> Reporting a realistic noise ceiling avoids theoretical friction from inflated limits, allowing a fair assessment of the model&apos;s actual progress.
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-C: Leak-free Protocol Detail ────────────────────────────────────────
export function QaaProtocolSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader label="Q&A Backup — C" title="Protocol: " highlight="Folds & Disjoint Splits." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="C" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
            Can you explain the exact splits of the 10-group, 5-fold cross-validation?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
            Deep evaluations enforce a 10-group, 5-fold cross-validation split to secure data boundaries:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>1. Adaptation Fold</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>
                Uses 100 adaptation images from the target user to fit personalized linear weights (Stage 2).
              </div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136" }}>2. Validation Fold</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>
                Used to tune hyperparameters (e.g. Ridge regression Alpha regularization).
              </div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>3. Evaluation Fold</div>
              <div style={{ fontSize: 12, color: "#626B74", marginTop: 4 }}>
                Evaluation images are completely unseen until testing to calculate final CCC.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.15)",
            borderRadius: 14, padding: "16px 20px", fontSize: 14, color: "#2D3136", lineHeight: 1.5,
            fontWeight: 700, boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
          }}
        >
          <strong>Disjoint Folds Security:</strong> The Stage 1 emotion model is trained on independent crowd profiles. The Stage 2 personalization step only sees adaptation images, leaving evaluation folds completely disjoint.
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-D: emo_r Partial Correlation ────────────────────────────────────────
export function QaaPartialCorrSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader label="Q&A Backup — D" title="Confound: " highlight="Partial Correlation Analysis." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="D" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
            How do you prove that emo_r correlates with Delta independently of Direct CCC?
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#626B74", lineHeight: 1.5 }}>
            We analyze correlations under both uncontrolled and controlled environments:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71" }}>Pearson Correlation</div>
              <div style={{ fontSize: 24, fontWeight: 950, color: "#2D3136", marginTop: 4 }}>+0.273</div>
              <div style={{ fontSize: 11, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Uncontrolled (p &lt; 0.001)</div>
            </div>

            <div style={{ background: "#FCFAF6", padding: 14, borderRadius: 12, border: "1px solid rgba(45, 49, 54, 0.08)", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136" }}>Partial Spearman Correlation</div>
              <div style={{ fontSize: 24, fontWeight: 950, color: "#C24F71", marginTop: 4 }}>Significant</div>
              <div style={{ fontSize: 11, color: "#626B74", marginTop: 2, fontWeight: 700 }}>Controlled for Direct CCC strength (p = 1e-9)</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp(0.35)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(194, 79, 113, 0.15)",
            borderRadius: 14, padding: "16px 20px", fontSize: 14, color: "#2D3136", lineHeight: 1.5,
            fontWeight: 700, boxShadow: "0 8px 24px rgba(194, 79, 113, 0.04)",
          }}
        >
          <strong>Partial Correlation Result:</strong> Partial correlation analysis confirms that personalized emotion predictability ($emo_r$) is a direct, independent driver of aesthetic personalization gain (Delta).
        </motion.div>
      </div>
    </SlideShell>
  );
}

// ── Q&A-E: Why Linear / Why 7 Emotions ─────────────────────────────────────
export function QaaDesignChoiceSlide() {
  return (
    <SlideShell glows={GLOWS} contentStyle={{ background: "#FCFAF6" }}>
      <SlideHeader label="Q&A Backup — E" title="Design Choice: " highlight="Model Interpretability." />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
        <motion.div
          {...cardRise(0.1)}
          style={{
            background: "#FFFFFF", border: "1px solid rgba(45, 49, 54, 0.08)", borderRadius: 20, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(45, 49, 54, 0.03)", display: "flex", flexDirection: "column", gap: 12,
          }}
        >
          <QABadge n="E" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#2D3136" }}>
            Why choose a linear formula and exactly these 7 emotions?
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }}>
            <div style={{ background: "#FCFAF6", padding: 16, borderRadius: 14, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#C24F71", textTransform: "uppercase" }}>
                1. Why Linear Regression?
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "#626B74", lineHeight: 1.45 }}>
                • <strong>Explainability:</strong> Allows direct inspection of weights to understand the direction and magnitude of each emotional impact.
                <br />
                • <strong>Overfitting Prevention:</strong> Small parameter footprint (7 weights) prevents memorizing noise patterns.
              </p>
            </div>

            <div style={{ background: "#FCFAF6", padding: 16, borderRadius: 14, border: "1px solid rgba(45, 49, 54, 0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#2D3136", textTransform: "uppercase" }}>
                2. Why 7 core emotions?
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "#626B74", lineHeight: 1.45 }}>
                • <strong>Isolates Specific Emotions:</strong> Curated from AESTHEMOS, excluding general terms like &ldquo;Like&rdquo; and &ldquo;Beautiful&rdquo; to focus strictly on psychological reactions.
                <br />
                • <strong>Broad Spectrum:</strong> The 7 core emotions span the primary positive and negative aesthetic reactions of human experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
