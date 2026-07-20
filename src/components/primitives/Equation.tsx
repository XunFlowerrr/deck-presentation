import type { CSSProperties, ReactNode } from "react";

/**
 * Lightweight math renderer.
 *
 * Deliberately not KaTeX: this deck is built with vite-plugin-singlefile, and
 * KaTeX ships web fonts that cannot be inlined cleanly. These primitives cover
 * what the slides actually need — italic variables, sub/superscripts, fractions
 * and a summation with limits — using a math-capable serif stack.
 */
const MATH_FONT =
  '"Latin Modern Math", "STIX Two Math", "Cambria Math", Cambria, "Times New Roman", serif';

/** Italic variable name, e.g. <Var>u</Var>. */
export function Var({ children }: { children: ReactNode }) {
  return <span style={{ fontStyle: "italic" }}>{children}</span>;
}

/** Upright operator or function name, e.g. <Op>CCC</Op>. */
export function Op({ children }: { children: ReactNode }) {
  return <span style={{ fontStyle: "normal" }}>{children}</span>;
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        fontSize: "0.66em",
        fontStyle: "normal",
        verticalAlign: "-0.28em",
        lineHeight: 0,
        margin: "0 0.04em",
      }}
    >
      {children}
    </span>
  );
}

export function Sup({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        fontSize: "0.66em",
        fontStyle: "normal",
        verticalAlign: "0.5em",
        lineHeight: 0,
        margin: "0 0.04em",
      }}
    >
      {children}
    </span>
  );
}

/** Stacked fraction with a horizontal rule. */
export function Frac({
  num,
  den,
  color = "currentColor",
}: {
  num: ReactNode;
  den: ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        verticalAlign: "middle",
        margin: "0 0.22em",
        fontSize: "0.82em",
        lineHeight: 1.15,
      }}
    >
      <span style={{ padding: "0 0.2em" }}>{num}</span>
      <span
        style={{
          alignSelf: "stretch",
          height: 1,
          background: color,
          opacity: 0.8,
          margin: "0.1em 0",
        }}
      />
      <span style={{ padding: "0 0.2em" }}>{den}</span>
    </span>
  );
}

/** Big sigma with upper and lower limits. */
export function Sum({
  from,
  to,
  children,
}: {
  from: ReactNode;
  to: ReactNode;
  children?: ReactNode;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", margin: "0 0.15em" }}>
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize: "0.5em", fontStyle: "normal" }}>{to}</span>
        <span style={{ fontSize: "1.5em", lineHeight: 0.9, fontStyle: "normal" }}>∑</span>
        <span style={{ fontSize: "0.5em", fontStyle: "normal" }}>{from}</span>
      </span>
      {children && <span style={{ marginLeft: "0.25em" }}>{children}</span>}
    </span>
  );
}

interface EquationProps {
  children: ReactNode;
  /** Font size in px for the base line. */
  size?: number;
  color?: string;
  /** Render as a bare inline formula instead of a boxed display block. */
  inline?: boolean;
  style?: CSSProperties;
}

/** Display-style equation block. */
export function Equation({
  children,
  size = 22,
  color = "#7C3AED",
  inline = false,
  style,
}: EquationProps) {
  const base: CSSProperties = {
    fontFamily: MATH_FONT,
    fontSize: size,
    color,
    lineHeight: 1.6,
    whiteSpace: "nowrap",
  };

  if (inline) {
    return <span style={{ ...base, ...style }}>{children}</span>;
  }

  return (
    <div
      style={{
        ...base,
        background: "#F9FAFB",
        border: "1px solid #F3F4F6",
        borderRadius: 12,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
