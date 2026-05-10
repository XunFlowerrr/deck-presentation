import { SectionDivider } from "../components/index.ts";
import { dividers } from "../content/slides/dividers";

export function ApproachDivider() {
  return (
    <SectionDivider
      prefix={dividers.approach.prefix}
      highlight={dividers.approach.highlight}
    />
  );
}
