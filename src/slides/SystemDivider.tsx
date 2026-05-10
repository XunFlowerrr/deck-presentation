import { SectionDivider } from "../components/index.ts";
import { dividers } from "../content/slides/dividers";

export function SystemDivider() {
  return (
    <SectionDivider
      prefix={dividers.system.prefix}
      highlight={dividers.system.highlight}
    />
  );
}
