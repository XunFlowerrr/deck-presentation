import { motion } from "framer-motion";
import {
  ChatUIIcon,
  DataIngestionIcon,
  EvaluationIcon,
  ImplementationIcon,
  ObjectiveColumnIcon,
  Pill,
  ResearchDesignIcon,
  ScopeColumnIcon,
  SectionTitle,
  SlideHeader,
  SlideShell,
  ThaiText,
  VerticalDivider,
  AISystemIcon,
} from "../../components/index.ts";
import {
  DISTANCE,
  DURATION,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
} from "../../lib/motion.ts";
import {
  objectives as OBJECTIVES,
  scopes as SCOPES,
  objectiveScopeHeader,
  objectiveColumnLabel,
  scopeColumnLabel,
} from "../../content/slides/objective-scope";

const GLOWS = [
  { top: -260, right: -120, size: 720, color: "124, 58, 237", opacity: 0.11 },
  { bottom: -180, left: -80, size: 580, color: "16,185,129", opacity: 0.08 },
];

const OBJECTIVE_ICON_MAP = {
  ResearchDesign: <ResearchDesignIcon />,
  Evaluation: <EvaluationIcon />,
  Implementation: <ImplementationIcon />,
} as const;

const SCOPE_ICON_MAP = {
  DataIngestion: <DataIngestionIcon />,
  AISystem: <AISystemIcon />,
  ChatUI: <ChatUIIcon />,
} as const;

export function ObjectiveScope() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label={objectiveScopeHeader.label}
        title={objectiveScopeHeader.title}
        highlight={objectiveScopeHeader.highlight}
        tagline={objectiveScopeHeader.tagline}
        marginBottom={28}
      />

      <div style={{ flex: 1, display: "flex", gap: 28, minHeight: 0 }}>
        {/* ── Left: Objective ── */}
        <motion.div
          {...fadeInLeft(0.28)}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          <SectionTitle
            icon={<ObjectiveColumnIcon />}
            sub={
              <ThaiText en={objectiveColumnLabel.en}>
                {objectiveColumnLabel.th}
              </ThaiText>
            }
            style={{ marginBottom: 6 }}
          >
            Objective
          </SectionTitle>

          {OBJECTIVES.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeInUp(stagger(0.38, 0.1, i), {
                distance: DISTANCE.sm,
                duration: DURATION.short,
              })}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              {OBJECTIVE_ICON_MAP[item.iconKey]}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "var(--slide-card-heading)",
                    fontWeight: 800,
                    color: "#0A0A0A",
                    marginBottom: 5,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  <ThaiText en={item.desc.en}>{item.desc.th}</ThaiText>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <VerticalDivider />

        {/* ── Right: Scope ── */}
        <motion.div
          {...fadeInRight(0.34)}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          <SectionTitle
            icon={<ScopeColumnIcon />}
            sub={
              <ThaiText en={scopeColumnLabel.en}>
                {scopeColumnLabel.th}
              </ThaiText>
            }
            style={{ marginBottom: 6 }}
          >
            Scope
          </SectionTitle>

          {SCOPES.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeInUp(stagger(0.44, 0.1, i), {
                distance: DISTANCE.sm,
                duration: DURATION.short,
              })}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              {SCOPE_ICON_MAP[item.iconKey]}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--slide-card-heading)",
                      fontWeight: 800,
                      color: "#0A0A0A",
                    }}
                  >
                    {item.title}
                  </span>
                  <Pill
                    color={item.pillColor}
                    rgb={item.tagRgb}
                    fontSize={10}
                    letterSpacing="0.06em"
                    padding="2px 8px"
                    uppercase={false}
                  >
                    {item.tag}
                  </Pill>
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  <ThaiText en={item.desc.en}>{item.desc.th}</ThaiText>
                </p>
              </div>
            </motion.div>
          ))}

          <div style={{ flex: 1 }} />
        </motion.div>
      </div>
    </SlideShell>
  );
}
