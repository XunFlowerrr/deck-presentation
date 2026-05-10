import { motion } from "framer-motion";
import {
  HydeIcon,
  LayersIcon,
  Pill,
  PulseRings,
  SlideHeader,
  SlideShell,
  SyncIcon,
  ThaiText,
} from "../components/index.ts";
import { EASE } from "../lib/motion.ts";
import {
  approachCards as CARDS,
  ourApproachHeader,
} from "../content/slides/our-approach";

const GLOWS = [
  { top: -200, right: -100, size: 640, color: "124,58,237", opacity: 0.1 },
  { bottom: -150, left: -80, size: 500, color: "16,185,129", opacity: 0.08 },
];

const ICON_MAP = {
  Layers: LayersIcon,
  Hyde: HydeIcon,
  Sync: SyncIcon,
} as const;

export function OurApproach() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label={ourApproachHeader.label}
        title={ourApproachHeader.title}
        highlight={ourApproachHeader.highlight}
        tagline={
          <ThaiText en={ourApproachHeader.tagline.en}>
            {ourApproachHeader.tagline.th}
          </ThaiText>
        }
        marginBottom={24}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 16,
          minHeight: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.title}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: card.cardDelay,
                  ease: EASE,
                },
              },
              hover: { y: -6, transition: { duration: 0.2, ease: "easeOut" } },
            }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 22,
              padding: "24px 12px 12px",
              cursor: "default",
            }}
          >
            {/* Circle icon */}
            <motion.div
              variants={{
                visible: {
                  boxShadow: `0 4px 24px rgba(${card.gapRgb},0.18), 0 0 0 3px rgba(${card.gapRgb},0.12)`,
                },
                hover: {
                  boxShadow:
                    card.hoverShadow + `, 0 0 0 4px rgba(${card.gapRgb},0.22)`,
                },
              }}
              style={{
                width: 178,
                height: 178,
                borderRadius: "50%",
                background: `linear-gradient(145deg, ${card.grad[0]}, ${card.grad[1]})`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 96,
                  height: 96,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PulseRings
                  color={card.ringColor}
                  delay={card.cardDelay + 1.5}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `scale(${card.iconScale ?? 1})`,
                    transformOrigin: "center",
                  }}
                >
                  {(() => {
                    const I = ICON_MAP[card.iconKey];
                    return <I delay={card.cardDelay + 0.2} />;
                  })()}
                </div>
              </div>
            </motion.div>

            {/* Text below circle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                textAlign: "center",
                width: "100%",
                maxWidth: 316,
              }}
            >
              <Pill
                color={card.gapColor}
                rgb={card.gapRgb}
                fontSize={11}
                letterSpacing="0.05em"
                uppercase={false}
              >
                {card.gap}
              </Pill>

              <div
                style={{
                  fontSize: "var(--slide-card-heading)",
                  fontWeight: 800,
                  color: "#0A0A0A",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  width: 32,
                  height: 3,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${card.grad[0]}, ${card.grad[1]})`,
                }}
              />

              <p
                style={{
                  fontSize: "var(--slide-body)",
                  color: "#6B7280",
                  margin: 0,
                  lineHeight: 1.65,
                  maxWidth: "100%",
                }}
              >
                <ThaiText en={card.desc.en}>{card.desc.th}</ThaiText>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
