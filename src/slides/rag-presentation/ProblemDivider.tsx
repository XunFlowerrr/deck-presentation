import { SectionDivider } from "../../components/index.ts";
import { dividers } from "../../content/slides/dividers";

export function ProblemDivider() {
  return (
    <SectionDivider
      prefix={dividers.problem.prefix}
      highlight={dividers.problem.highlight}
    />
  );
}
