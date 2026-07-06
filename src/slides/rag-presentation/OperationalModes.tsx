import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  SlideHeader,
  SlideShell,
  AnimatedBeam,
  IconBadge,
  Pill,
  BigGhostNumber,
  ThaiText,
  SearchFlowServiceIcon,
  LookupIcon,
  RobotIcon,
} from "../../components/index.ts";
import { fadeInUp } from "../../lib/motion.ts";

import {
  modes as MODES,
  operationalModesHeader,
} from "../../content/slides/operational-modes";

const GLOWS = [
  { top: -200, right: -100, size: 640, color: "124, 58, 237", opacity: 0.1 },
  { bottom: -150, left: -80, size: 500, color: "249,115,22", opacity: 0.08 },
];

export function OperationalModes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);
  const searchToolRef = useRef<HTMLDivElement>(null);
  const lookupToolRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState(MODES[0]);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through modes for demo unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => {
        const nextIndex =
          (MODES.findIndex((m) => m.id === prev.id) + 1) % MODES.length;
        return MODES[nextIndex];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label={operationalModesHeader.label}
        title={operationalModesHeader.title}
        highlight={operationalModesHeader.highlight}
        tagline={operationalModesHeader.tagline}
        marginBottom={16}
      />

      <div
        style={{ flex: 1, display: "flex", gap: 32, alignItems: "center" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left: Architecture Diagram */}
        <motion.div
          {...fadeInUp(0.3)}
          style={{
            flex: 0.45,
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            borderRadius: 32,
            border: "1px solid rgba(0,0,0,0.05)",
            padding: "32px 40px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            isolation: "isolate",
          }}
          ref={containerRef}
        >
          <div
            style={{
              marginBottom: 32,
              textAlign: "center",
              position: "relative",
              zIndex: 20,
            }}
          >
            <Pill color={activeMode.color}>
              Mode: {activeMode.title} Connectivity
            </Pill>
          </div>

          {/* Animated Beams MUST BE RENDERED BEFORE NODES TO STAY BEHIND */}
          {activeMode.tools.includes("search") && (
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={agentRef}
              toRef={searchToolRef}
              gradientStartColor={activeMode.color}
              gradientStopColor="#3B82F6"
              duration={2}
              pathColor={activeMode.color}
              showArrow
            />
          )}
          {activeMode.tools.includes("lookup") && (
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={agentRef}
              toRef={lookupToolRef}
              gradientStartColor={activeMode.color}
              gradientStopColor="#10B981"
              duration={2}
              pathColor={activeMode.color}
              showArrow
            />
          )}

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingTop: 60,
              paddingBottom: 0,
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Agent */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 80,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  ref={agentRef}
                  style={{
                    position: "relative",
                    zIndex: 10,
                    background: "rgba(255,255,255,1)",
                    borderRadius: 28,
                    padding: 4,
                  }}
                >
                  <IconBadge
                    size={100}
                    radius={28}
                    gradient={["#7C3AED", "#D946EF"]}
                    shadow="rgba(124, 58, 237,0.3)"
                  >
                    <div style={{ color: "white" }}>
                      <RobotIcon />
                    </div>
                  </IconBadge>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: 20,
                    position: "relative",
                    zIndex: 10,
                    textShadow: "0 2px 4px rgba(255,255,255,0.8)",
                  }}
                >
                  AINGO Agent
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <Pill color={activeMode.color}>{activeMode.promptType}</Pill>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  opacity: activeMode.tools.includes("search") ? 1 : 0.15,
                  transition: "opacity 0.5s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  ref={searchToolRef}
                  style={{
                    position: "relative",
                    zIndex: 10,
                    background: "rgba(255,255,255,1)",
                    borderRadius: 18,
                    padding: 4,
                  }}
                >
                  <IconBadge
                    size={72}
                    radius={18}
                    gradient={["#3B82F6", "#60A5FA"]}
                    shadow="rgba(59,130,246,0.2)"
                  >
                    <SearchFlowServiceIcon />
                  </IconBadge>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 12,
                    fontWeight: 600,
                    fontSize: 14,
                    position: "relative",
                    zIndex: 10,
                    textShadow: "0 2px 4px rgba(255,255,255,0.8)",
                  }}
                >
                  Search Tool
                </div>
              </div>

              <div
                ref={lookupToolRef}
                style={{
                  opacity: activeMode.tools.includes("lookup") ? 1 : 0.15,
                  transition: "opacity 0.5s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  ref={lookupToolRef}
                  style={{
                    position: "relative",
                    zIndex: 10,
                    background: "rgba(255,255,255,1)",
                    borderRadius: 18,
                    padding: 4,
                  }}
                >
                  <IconBadge
                    size={72}
                    radius={18}
                    gradient={["#10B981", "#34D399"]}
                    shadow="rgba(16,185,129,0.2)"
                  >
                    <LookupIcon />
                  </IconBadge>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 12,
                    fontWeight: 600,
                    fontSize: 14,
                    position: "relative",
                    zIndex: 10,
                    textShadow: "0 2px 4px rgba(255,255,255,0.8)",
                  }}
                >
                  Lookup Tool
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "rgba(0,0,0,0.5)",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            *Architecture dynamically adapts based on selected mode.
          </div>
        </motion.div>

        {/* Right: Mode Cards & Prompts */}
        <div
          style={{
            flex: 0.55,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {MODES.map((mode, idx) => (
              <motion.div
                key={mode.id}
                {...fadeInUp(0.4 + idx * 0.1)}
                onClick={() => setActiveMode(mode)}
                style={{
                  background:
                    activeMode.id === mode.id
                      ? "white"
                      : "rgba(255,255,255,0.4)",
                  padding: 20,
                  borderRadius: 24,
                  border: `2px solid ${activeMode.id === mode.id ? mode.color : "transparent"}`,
                  boxShadow:
                    activeMode.id === mode.id
                      ? `0 12px 32px rgba(0,0,0,0.08)`
                      : "none",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease",
                  isolation: "isolate",
                }}
              >
                <BigGhostNumber
                  opacity={0.05}
                  size={64}
                  style={{ position: "absolute", top: 8, right: 12 }}
                >
                  {String(idx + 1)}
                </BigGhostNumber>

                <div style={{ marginBottom: 8 }}>
                  <Pill color={mode.color}>{mode.title}</Pill>
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 16,
                    color: "#1F2937",
                    marginBottom: 6,
                  }}
                >
                  {mode.subtitle}
                </div>

                <div
                  style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.5 }}
                >
                  <ThaiText en={mode.desc.en}>{mode.desc.th}</ThaiText>
                </div>

                {activeMode.id === mode.id && (
                  <motion.div
                    layoutId="active-indicator"
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: mode.color,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Dynamic Prompt Logic */}
          <motion.div
            {...fadeInUp(0.8)}
            style={{
              background: "linear-gradient(135deg, #1F2937, #111827)",
              color: "white",
              padding: 24,
              borderRadius: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              borderLeft: `4px solid ${activeMode.color}`,
              transition: "border-color 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                System Prompt Strategy
              </div>
              <Pill color={activeMode.color}>Mode: {activeMode.title}</Pill>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: activeMode.color,
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    OPERATIONAL RULES
                  </div>
                  <div
                    style={{ fontSize: 14, lineHeight: 1.5, color: "#E5E7EB" }}
                  >
                    {activeMode.promptRules}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#EF4444",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    REJECTION CRITERIA
                  </div>
                  <div
                    style={{ fontSize: 14, lineHeight: 1.5, color: "#E5E7EB" }}
                  >
                    {activeMode.rejectRule}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
