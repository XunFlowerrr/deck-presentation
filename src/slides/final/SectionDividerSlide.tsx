import { motion } from "framer-motion";
import { SlideShell } from "../../components/index.ts";
import { cardRise, fadeInUp } from "../../lib/motion.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "194, 24, 91", opacity: 0.06 },
  { bottom: -200, right: -100, size: 600, color: "123, 44, 143", opacity: 0.05 },
];

interface SectionDividerProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  topics?: string[];
}

export function SectionDividerSlide({ badge, title, highlight, subtitle, topics }: SectionDividerProps) {
  return (
    <SlideShell glows={GLOWS}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
          gap: 32,
        }}
      >
        {/* Section Badge & Main Heading */}
        <motion.div {...fadeInUp(0.1)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 900,
              color: "#C2185B",
              background: "rgba(194, 24, 91, 0.06)",
              border: "1px solid rgba(194, 24, 91, 0.2)",
              padding: "6px 18px",
              borderRadius: 20,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 16,
            }}
          >
            {badge}
          </span>

          <h2
            style={{
              margin: 0,
              fontSize: 48,
              fontWeight: 900,
              color: "#4A1533",
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
            }}
          >
            {title}{" "}
            {highlight && (
              <span
                style={{
                  background: "linear-gradient(135deg, #C2185B, #7B2C8F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {highlight}
              </span>
            )}
          </h2>

          <p
            style={{
              margin: "16px 0 0",
              fontSize: 18,
              color: "#6B5B6E",
              fontWeight: 600,
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #C2185B, #7B2C8F)",
              margin: "24px auto 0",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
