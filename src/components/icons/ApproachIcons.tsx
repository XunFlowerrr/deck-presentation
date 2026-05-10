import { motion } from "framer-motion";

/** Animated pulse rings radiating outward from a circle icon. */
export function PulseRings({ color, delay }: { color: string; delay: number }) {
  return (
    <>
      {[0, 0.9, 1.8].map((d, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `1.5px solid ${color}`,
            pointerEvents: "none",
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.4, 2.2], opacity: [0, 0.55, 0] }}
          transition={{
            duration: 2.5,
            delay: delay + d,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}

/** Animated stacked-layers icon — draws paths sequentially. */
export function LayersIcon({ delay }: { delay: number }) {
  const p = (d: string, sw: number, extra: number) => (
    <motion.path
      d={d}
      stroke="white"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { duration: 0.7, delay: delay + extra, ease: "easeInOut" },
        opacity: { duration: 0.01, delay: delay + extra },
      }}
    />
  );
  return (
    <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none">
      {p("M12 2L2 7l10 5 10-5-10-5z", 1.8, 0)}
      {p("M2 17l10 5 10-5", 1.8, 0.55)}
      {p("M2 12l10 5 10-5", 1.8, 0.9)}
    </motion.svg>
  );
}

/** Animated graph/hub icon — draws spokes and dots sequentially. */
export function GraphIcon({ delay }: { delay: number }) {
  const p = (d: string, sw: number, extra: number, opacity = 1) => (
    <motion.path
      d={d}
      stroke={`rgba(255,255,255,${opacity})`}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { duration: 0.5, delay: delay + extra, ease: "easeInOut" },
        opacity: { duration: 0.01, delay: delay + extra },
      }}
    />
  );
  const dot = (cx: number, cy: number, extra: number) => (
    <motion.circle
      cx={cx}
      cy={cy}
      r={1.8}
      fill="white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.9 }}
      transition={{ duration: 0.25, delay: delay + extra, ease: "backOut" }}
    />
  );
  return (
    <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none">
      {p("M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0", 1.8, 0)}
      {p("M12 9.5V4", 1.1, 0.4, 0.65)}
      {p("M14.5 10.5L19.5 5.5", 1.1, 0.5, 0.65)}
      {p("M14.5 12H20", 1.1, 0.6, 0.65)}
      {p("M14.5 13.5L19.5 18.5", 1.1, 0.7, 0.65)}
      {p("M12 14.5V20", 1.1, 0.8, 0.65)}
      {p("M9.5 13.5L4.5 18.5", 1.1, 0.9, 0.65)}
      {p("M9.5 12H4", 1.1, 1.0, 0.65)}
      {p("M9.5 10.5L4.5 5.5", 1.1, 1.1, 0.65)}
      {dot(12, 3, 1.2)}
      {dot(20.5, 4.5, 1.3)}
      {dot(21, 12, 1.4)}
      {dot(20.5, 19.5, 1.5)}
      {dot(12, 21, 1.6)}
      {dot(3.5, 19.5, 1.7)}
      {dot(3, 12, 1.8)}
      {dot(3.5, 4.5, 1.9)}
    </motion.svg>
  );
}

/** Animated sync/refresh icon — draws arrows sequentially. */
export function SyncIcon({ delay }: { delay: number }) {
  const p = (d: string, sw: number, extra: number) => (
    <motion.path
      d={d}
      stroke="white"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { duration: 0.8, delay: delay + extra, ease: "easeInOut" },
        opacity: { duration: 0.01, delay: delay + extra },
      }}
    />
  );
  return (
    <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none">
      {p("M1 4v6h6", 1.8, 0)}
      {p("M23 20v-6h-6", 1.8, 0.3)}
      {p(
        "M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15",
        1.8,
        0.55,
      )}
    </motion.svg>
  );
}
