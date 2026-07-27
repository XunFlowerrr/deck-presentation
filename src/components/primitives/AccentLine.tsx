import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { expandX } from "../../lib/motion.ts";

interface AccentLineProps {
  delay?: number;
  width?: number;
  style?: CSSProperties;
}

export function AccentLine({ delay = 0, width = 140, style }: AccentLineProps) {
  return (
    <motion.div
      {...expandX(delay)}
      style={{
        height: 3,
        width,
        background: "linear-gradient(90deg, #C2185B, #7B2C8F)",
        borderRadius: 2,
        transformOrigin: "left center",
        ...style,
      }}
    />
  );
}
