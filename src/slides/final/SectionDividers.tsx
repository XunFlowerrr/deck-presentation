import { SectionDividerSlide } from "./SectionDividerSlide.tsx";

export function BackgroundDividerSlide() {
  return (
    <SectionDividerSlide
      badge="BACKGROUND"
      title="From Average Opinion"
      highlight="To Personal Feeling"
      subtitle="Understanding IAA vs PIAA and opening the black box of aesthetic preference"
      topics={["IAA vs PIAA", "Black Box Limitation", "Ryu & Yanaka (2024)", "Preference Through Feeling"]}
    />
  );
}

export function Block1DividerSlide() {
  return (
    <SectionDividerSlide
      badge="BLOCK 1"
      title="Pipeline & Data"
      highlight="Architecture & Setup"
      subtitle="Two-stage emotion-mediated pipeline, XPASS-Vis dataset, and evaluation metrics"
      topics={["Shared Emotion Predictor", "Personal Weighting Formula", "XPASS-Vis Dataset", "Direct vs Hybrid Setup"]}
    />
  );
}

export function Block2DividerSlide() {
  return (
    <SectionDividerSlide
      badge="BLOCK 2"
      title="Does It Work?"
      highlight="Evaluating Performance"
      subtitle="Demonstrating preference prediction gains over direct VLM baselines"
      topics={["Hybrid > Direct (93% Users)", "SOTA Baseline Parity (ICI & MIR)", "Backbone Scale Effects", "Transition to Mechanisms"]}
    />
  );
}

export function Block3DividerSlide() {
  return (
    <SectionDividerSlide
      badge="BLOCK 3"
      title="When & Why?"
      highlight="Mechanism Analysis"
      subtitle="Analyzing emotion predictability (emo_r) and decomposing taste differences"
      topics={["Emotion Predictability (emo_r)", "Variance Decomposition", "Shared Perception", "Personal Weighting"]}
    />
  );
}

export function Block4DividerSlide() {
  return (
    <SectionDividerSlide
      badge="BLOCK 4"
      title="How Far?"
      highlight="Ceilings & Cold-Start"
      subtitle="Determining realistic human noise ceilings and adaptation thresholds"
      topics={["Cross-Session Ceiling (0.64)", "Measurement Noise Limit", "Cold-Start Threshold (50 ratings)", "Direct Failure Limit"]}
    />
  );
}

export function Block5DividerSlide() {
  return (
    <SectionDividerSlide
      badge="BLOCK 5"
      title="Is the Gain Real?"
      highlight="Placebo Validation"
      subtitle="Verifying that performance gains stem from genuine emotional semantics"
      topics={["Placebo Control Setup", "PCA Feature Projection", "Real Emotions (0.380) vs Placebo (0.160)", "Semantic Validity"]}
    />
  );
}

export function ClosingDividerSlide() {
  return (
    <SectionDividerSlide
      badge="CLOSING"
      title="Summary"
      highlight="&amp; Future Work"
      subtitle="Key takeaways, future directions, and Q&amp;A discussion"
    />
  );
}
