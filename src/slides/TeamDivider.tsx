import { SectionDivider } from "../components/index.ts";
import { dividers } from "../content/slides/dividers";

export function TeamDivider() {
  return (
    <SectionDivider
      prefix={dividers.team.prefix}
      highlight={dividers.team.highlight}
    />
  );
}
