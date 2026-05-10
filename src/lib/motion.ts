import type { MotionProps, Transition, Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Eases
// ─────────────────────────────────────────────────────────────────────────────

/** Default ease — soft accelerated start, smooth decel. Used by all slide animations. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Slide swipe-transition ease (App.tsx page-to-page). */
export const EASE_SOFT = [0.4, 0, 0.2, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Common durations (s) and offset distances (px)
// ─────────────────────────────────────────────────────────────────────────────

export const DURATION = {
  quick: 0.4,
  short: 0.55,
  base: 0.65,
  med: 0.7,
  slow: 0.8,
  hero: 1.0,
} as const;

export const DISTANCE = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 32,
  xl: 56,
  xxl: 64,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** Trio of motion props every preset returns — spread directly into <motion.x>. */
export type AnimProps = Pick<MotionProps, "initial" | "animate" | "transition">;

/** Optional overrides — pass `{ duration, distance, ease }` to tune any preset. */
export interface AnimOpts {
  duration?: number;
  distance?: number;
  ease?: Transition["ease"];
}

// ─────────────────────────────────────────────────────────────────────────────
// Generic primitives
// ─────────────────────────────────────────────────────────────────────────────

/** Plain opacity fade-in. Default: 0.8s, EASE curve. */
export function fadeIn(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: opts.duration ?? DURATION.slow,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Fade up from below (`y: distance` → `y: 0`). Default: 0.8s, 20px. */
export function fadeInUp(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0, y: opts.distance ?? DISTANCE.md },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: opts.duration ?? DURATION.slow,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Fade down from above (`y: -distance` → `y: 0`). Default: 0.6s, 12px. */
export function fadeInDown(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0, y: -(opts.distance ?? DISTANCE.xs) },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: opts.duration ?? DURATION.base,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Fade in from the left (`x: -distance` → `x: 0`). Default: 0.7s, 20px. */
export function fadeInLeft(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0, x: -(opts.distance ?? DISTANCE.md) },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: opts.duration ?? DURATION.med,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Fade in from the right (`x: distance` → `x: 0`). Default: 0.7s, 20px. */
export function fadeInRight(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0, x: opts.distance ?? DISTANCE.md },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: opts.duration ?? DURATION.med,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Pop in (scale 0.5 → 1 + opacity). Default: 0.4s. */
export function scaleIn(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: opts.duration ?? DURATION.quick,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Horizontal expand (`scaleX: 0` → `scaleX: 1`). Default: 0.75s. */
export function expandX(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: {
      duration: opts.duration ?? 0.75,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

/** Vertical expand (`scaleY: 0` → `scaleY: 1`). Default: 0.8s. */
export function expandY(delay = 0, opts: AnimOpts = {}): AnimProps {
  return {
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
    transition: {
      duration: opts.duration ?? DURATION.slow,
      delay,
      ease: opts.ease ?? EASE,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Semantic presets
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Standard slide header block (label + h1 + accent line).
 * Used by the modern slide template (slides 04, 05, 06, 08, 09, 10, 12).
 */
export function slideHeader(delay = 0.1): AnimProps {
  return fadeInUp(delay, { distance: DISTANCE.md, duration: DURATION.slow });
}

/**
 * Sticky top bar / brand row / SlideLabel (cover-style intros).
 * Used in slides 01, 02, 07, 11 and the SlideLabel component.
 */
export function topBar(delay = 0): AnimProps {
  return fadeInDown(delay, { distance: DISTANCE.xs, duration: DURATION.base });
}

/**
 * Section label with `y: -16` (slides 02, 07, 11).
 * Slightly larger overshoot than `topBar`.
 */
export function sectionLabel(delay = 0): AnimProps {
  return fadeInDown(delay, { distance: DISTANCE.sm, duration: DURATION.base });
}

/**
 * Hero h1 — large title rising from below.
 * Used by cover slides (01, 02, 07, 11) and big-headline slides (03).
 */
export function heroTitle(delay = 0.12, distance: number = DISTANCE.xxl): AnimProps {
  return fadeInUp(delay, { distance, duration: DURATION.hero });
}

/**
 * Body / subtitle paragraph that follows the hero title.
 */
export function bodyText(delay = 0.72): AnimProps {
  return fadeInUp(delay, { distance: DISTANCE.sm, duration: DURATION.slow });
}

/**
 * Late-arriving footer / bottom strip — opacity-only, no ease.
 * (Matches the original slow opacity fade with default framer ease.)
 */
export function bottomStrip(delay = 1.0): AnimProps {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: DURATION.slow, delay },
  };
}

/**
 * Card rising into view — pair with `stagger()` for grids.
 * Used by Slide06 cards, Slide08 list items, Slide10 panels.
 */
export function cardRise(delay = 0): AnimProps {
  return fadeInUp(delay, { distance: DISTANCE.lg, duration: DURATION.base });
}

// ─────────────────────────────────────────────────────────────────────────────
// Stagger helper
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Computes a staggered delay: `base + i * step`.
 * @example
 *   {items.map((item, i) => (
 *     <motion.div {...cardRise(stagger(0.28, 0.12, i))} />
 *   ))}
 */
export function stagger(base: number, step: number, i: number): number {
  return base + i * step;
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide swipe (App.tsx page-to-page transition)
// ─────────────────────────────────────────────────────────────────────────────

export const slideSwipeVariants: Variants = {
  enter: (dir: 1 | -1) => ({ x: dir * 1920 }),
  center: () => ({ x: 0 }),
  exit: (dir: 1 | -1) => ({ x: dir * -1920 }),
};

export const slideSwipeTransition: Transition = {
  duration: 0.45,
  ease: EASE_SOFT,
};
