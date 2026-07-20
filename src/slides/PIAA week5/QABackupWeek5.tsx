import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  SlideHeader,
  SlideShell,
  Equation,
  Var,
  Op,
  Sub,
  Sup,
  Frac,
  Sum,
} from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.12 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

/**
 * Every card follows the same anatomy so the four quadrants stay level:
 *   QA chip + question → description → body (equation / tiles / boxes) → note.
 */
interface QAItem {
  n: number;
  question: string;
  desc: ReactNode;
  body: ReactNode;
  note: ReactNode;
}

// ── Small building blocks shared by the cards ──────────────────────────────

function Tile({
  label,
  value,
  caption,
  color = "#111827",
  tint,
  border,
}: {
  label: string;
  value: string;
  caption?: string;
  color?: string;
  tint?: string;
  border?: string;
}) {
  return (
    <div
      style={{
        background: tint || "#F9FAFB",
        border: `1px solid ${border || "#F3F4F6"}`,
        borderRadius: 11,
        padding: "10px 12px",
      }}
    >
      <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, lineHeight: 1.25 }}>
        {label}
      </div>
      <div style={{ fontSize: 18, fontWeight: 900, color, marginTop: 2, lineHeight: 1.15 }}>
        {value}
      </div>
      {caption && (
        <div style={{ fontSize: 10.5, color: "#9CA3AF", marginTop: 2, lineHeight: 1.25 }}>
          {caption}
        </div>
      )}
    </div>
  );
}

/** Box with a small coloured heading and a paragraph under it. */
function TextBox({
  heading,
  headingColor = "#111827",
  children,
  tint,
  border,
}: {
  heading: string;
  headingColor?: string;
  children: ReactNode;
  tint?: string;
  border?: string;
}) {
  return (
    <div
      style={{
        background: tint || "#F9FAFB",
        border: `1px solid ${border || "#F3F4F6"}`,
        borderRadius: 11,
        padding: "10px 13px",
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 800, color: headingColor, lineHeight: 1.25 }}>
        {heading}
      </div>
      <p style={{ margin: "4px 0 0", fontSize: 11.5, color: "#4B5563", lineHeight: 1.4 }}>
        {children}
      </p>
    </div>
  );
}

function Row({ cols, children }: { cols: number; children: ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 9 }}>
      {children}
    </div>
  );
}

function Note({
  accent = "#7C3AED",
  title,
  children,
  tint,
  border,
  color,
}: {
  accent?: string;
  title: string;
  children: ReactNode;
  tint?: string;
  border?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        marginTop: "auto",
        background: tint || "#F9FAFB",
        border: `1px solid ${border || "#F3F4F6"}`,
        borderRadius: 11,
        padding: "10px 14px",
        fontSize: 12,
        color: color || "#374151",
        lineHeight: 1.45,
      }}
    >
      <strong style={{ color: accent }}>{title} </strong>
      {children}
    </div>
  );
}

function QACard({ item, delay }: { item: QAItem; delay: number }) {
  return (
    <motion.div
      {...cardRise(delay)}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 18,
        padding: "18px 22px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minHeight: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
        <span
          style={{
            flexShrink: 0,
            fontSize: 10.5,
            fontWeight: 800,
            color: "#7C3AED",
            background: "rgba(124, 58, 237, 0.1)",
            padding: "4px 9px",
            borderRadius: 8,
            letterSpacing: "0.06em",
          }}
        >
          QA-{item.n}
        </span>
        <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, color: "#111827", lineHeight: 1.3 }}>
          {item.question}
        </h3>
      </div>

      <p style={{ margin: 0, fontSize: 13, color: "#4B5563", lineHeight: 1.5 }}>{item.desc}</p>

      {item.body}
      {item.note}
    </motion.div>
  );
}

function QAGrid({
  label,
  title,
  highlight,
  items,
  footnote,
}: {
  label: string;
  title: string;
  highlight: string;
  items: QAItem[];
  footnote: string;
}) {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label={label} title={title} highlight={highlight} />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
          minHeight: 0,
          paddingBottom: 36,
        }}
      >
        {items.map((item, i) => (
          <QACard key={item.n} item={item} delay={0.12 + i * 0.08} />
        ))}
      </div>

      <motion.div
        {...fadeInUp(0.5)}
        style={{
          position: "absolute",
          bottom: 18,
          right: 32,
          background: "#F3F4F6",
          border: "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 11,
          color: "#6B7280",
        }}
      >
        {footnote}
      </motion.div>
    </SlideShell>
  );
}

// ── QA 1–4: how the analysis is set up ─────────────────────────────────────
const SETUP_ITEMS: QAItem[] = [
  {
    n: 1,
    question: "How is delta computed?",
    desc: "A per-user pairwise difference, taken for every user in every domain from results that already existed.",
    body: (
      <>
        <Equation size={19}>
          <Var>Δ</Var>
          <Sub>
            <Var>u,d</Var>
          </Sub>
          &nbsp;=&nbsp;
          <Op>CCC</Op>
          <Sup>
            <Op>Hybrid</Op>
          </Sup>
          <Sub>
            <Var>u,d</Var>
          </Sub>
          &nbsp;−&nbsp;
          <Op>CCC</Op>
          <Sup>
            <Op>Direct</Op>
          </Sup>
          <Sub>
            <Var>u,d</Var>
          </Sub>
        </Equation>
        <Row cols={3}>
          <Tile label="Data source" value="exp1_per_user" />
          <Tile label="Rows" value="387" caption="129 users × 3 domains" />
          <Tile label="Retraining" value="Zero" color="#10B981" caption="secondary analysis" />
        </Row>
      </>
    ),
    note: (
      <Note title="Strict controls:">
        Hybrid and Direct come from the exact same test split, the same user ratings and identical
        folds.
      </Note>
    ),
  },
  {
    n: 2,
    question: "Isn't Direct CCC a second cause?",
    desc: (
      <>
        A backbone that represents images well is good at <strong>both</strong> direct scoring and
        emotion prediction, so the two move together (r = +0.66).
      </>
    ),
    body: (
      <Row cols={2}>
        <Tile
          label="Uncontrolled correlation"
          value="+0.15"
          caption="looks like a second factor"
          color="#EF4444"
          tint="rgba(239, 68, 68, 0.06)"
          border="rgba(239, 68, 68, 0.2)"
        />
        <Tile
          label="Partial, controlling emo_r"
          value="−0.04"
          caption="effect vanishes"
          color="#10B981"
          tint="rgba(16, 185, 129, 0.06)"
          border="rgba(16, 185, 129, 0.2)"
        />
      </Row>
    ),
    note: (
      <Note title="Classic confound:">
        Like shoe size correlating with reading ability when age is the real cause. Direct CCC
        tracks delta only because both are driven by emo_r.
      </Note>
    ),
  },
  {
    n: 3,
    question: "Is there any data leakage?",
    desc: "The pipeline is fitted in two stages, on two groups of users that never overlap.",
    body: (
      <Row cols={2}>
        <TextBox heading="Stage 1 · General set, 104 users" headingColor="#7C3AED">
          Trained exclusively on general users to learn the generic image → emotion mapping.
        </TextBox>
        <TextBox heading="Stage 2 · Target set, 25 users" headingColor="#EC4899">
          Personal ridge model fit strictly per target user, on their own training fold only.
        </TextBox>
      </Row>
    ),
    note: (
      <Note
        title="Zero user overlap:"
        accent="#10B981"
        tint="rgba(16, 185, 129, 0.06)"
        border="rgba(16, 185, 129, 0.2)"
        color="#065F46"
      >
        Leakage would require seeing target-user ratings during Stage 1, which this split makes
        impossible.
      </Note>
    ),
  },
  {
    n: 4,
    question: "What exactly is emo_r?",
    desc: "Emotion predictability for one specific user: how well Stage 1 recovers their 7 emotion ratings.",
    body: (
      <>
        <Equation size={18}>
          <Op>emo_r</Op>(<Var>u</Var>) =
          <Frac num={<Op>1</Op>} den={<Op>7</Op>} color="#7C3AED" />
          <Sum from={<Var>e=1</Var>} to={<Op>7</Op>}>
            <Var>r</Var>
            <span style={{ fontStyle: "normal" }}>
              ( <Var>ê</Var>
              <Sub>
                <Var>e</Var>
              </Sub>
              , <Var>e</Var>
              <Sub>
                <Var>e</Var>
              </Sub>{" "}
              )
            </span>
          </Sum>
        </Equation>
        <Row cols={2}>
          <Tile
            label="Stage 1 bottleneck"
            value="0.27"
            caption="mean emotion accuracy"
            color="#EC4899"
          />
          <Tile
            label="Stage 2 headroom"
            value="0.693"
            caption="P-oracle, true emotions"
            color="#10B981"
          />
        </Row>
      </>
    ),
    note: (
      <Note title="The bottleneck:">
        Stage 2 could reach 0.69 given perfect emotions, so the pipeline is capped by Stage 1.
      </Note>
    ),
  },
];

// ── QA 5–8: statistics and metric choices ──────────────────────────────────
const STATS_ITEMS: QAItem[] = [
  {
    n: 5,
    question: "p = 0.056 — proven or not?",
    desc: (
      <Equation inline size={15} color="#EF4444">
        <Var>Δ</Var> ~ <Op>emo_r</Op> × <Op>domain</Op> &nbsp;→&nbsp; <Var>p</Var> = 0.056 (not
        significant)
      </Equation>
    ),
    body: (
      <Row cols={2}>
        <TextBox heading="Formal decision">
          We fail to reject the null at alpha = 0.05. We do <strong>not</strong> have statistical
          evidence that the mechanism in art differs from fashion or landscape.
        </TextBox>
        <TextBox heading="Scientific nuance">
          Failing to reject is <strong>not</strong> proof the mechanisms are identical. It sits on
          the border, so we state it as inconclusive, favouring ceiling.
        </TextBox>
      </Row>
    ),
    note: (
      <Note title="Methodological rigor:">
        Absence of evidence is not evidence of absence. We report the value transparently.
      </Note>
    ),
  },
  {
    n: 6,
    question: "Did you correct for multiple comparisons?",
    desc: "28 candidate predictors of delta were screened, so the significance threshold has to be tightened.",
    body: (
      <>
        <Equation size={17}>
          <Var>α</Var>
          <Sub>
            <Op>adj</Op>
          </Sub>{" "}
          =
          <Frac num={<Op>0.05</Op>} den={<Op>28</Op>} color="#7C3AED" />= 0.00179
        </Equation>
        <Row cols={3}>
          <Tile label="Predictors" value="28" caption="traits, stats, baselines" />
          <Tile label="Method" value="Bonferroni" color="#7C3AED" />
          <Tile
            label="Survivor"
            value="emo_r"
            caption="p = 1e-9"
            color="#10B981"
            tint="rgba(16, 185, 129, 0.06)"
            border="rgba(16, 185, 129, 0.2)"
          />
        </Row>
      </>
    ),
    note: (
      <Note title="Robust significance:">
        Only emotion-reading accuracy survives strict correction, accounting for R² = 0.13 of delta
        variance.
      </Note>
    ),
  },
  {
    n: 7,
    question: "Which cases failed?",
    desc: "Characterising the 32 user × domain units where emotion mediation made the prediction worse.",
    body: (
      <Row cols={3}>
        <Tile
          label="Failure proportion"
          value="32 / 387"
          caption="8.3% of units"
          color="#EF4444"
          tint="rgba(239, 68, 68, 0.06)"
          border="rgba(239, 68, 68, 0.2)"
        />
        <Tile label="Mean emo_r, hurt" value="0.153" caption="read badly" color="#EF4444" />
        <Tile label="Mean emo_r, helped" value="0.283" caption="read well" color="#10B981" />
      </Row>
    ),
    note: (
      <Note title="Root cause:">
        Mediation fails almost exclusively where Stage 1 misses the user's emotion profile, which
        injects noise into Stage 2.
      </Note>
    ),
  },
  {
    n: 8,
    question: "Why CCC and not RMSE or Spearman?",
    desc: "Three candidate metrics, and what each one is blind to.",
    body: (
      <Row cols={3}>
        <TextBox heading="Lin's CCC" headingColor="#7C3AED">
          Ranking agreement <strong>and</strong> absolute scale. Punishes the right order at the
          wrong scale.
        </TextBox>
        <TextBox heading="RMSE / MSE" headingColor="#6B7280">
          Absolute error only. Does not isolate linear agreement or ranking quality.
        </TextBox>
        <TextBox heading="Spearman rank" headingColor="#6B7280">
          Ordinal ranking only, ignores scale entirely. Reported as a secondary metric.
        </TextBox>
      </Row>
    ),
    note: (
      <Note title="Literature standard:">
        CCC is the benchmark used by Hayashi-san et al. (XPASS-Vis) and Ryu &amp; Yanaka (2024).
      </Note>
    ),
  },
];

export function QASetupWeek5() {
  return (
    <QAGrid
      label="Q&A Backup — QA 1–4"
      title="Backup: how the "
      highlight="analysis is set up."
      items={SETUP_ITEMS}
      footnote="Q&A backup · delta, confounds, splits, emo_r"
    />
  );
}

export function QAStatsWeek5() {
  return (
    <QAGrid
      label="Q&A Backup — QA 5–8"
      title="Backup: statistics "
      highlight="and metrics."
      items={STATS_ITEMS}
      footnote="Q&A backup · significance, corrections, failures, metric choice"
    />
  );
}
