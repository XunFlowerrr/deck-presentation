import { SectionDivider } from "../../components/index.ts";
import { dividers } from "../../content/slides/dividers";

export function EvalDivider() {
  return (
    <SectionDivider
      prefix={dividers.eval.prefix}
      highlight={dividers.eval.highlight}
    />
  );
}
