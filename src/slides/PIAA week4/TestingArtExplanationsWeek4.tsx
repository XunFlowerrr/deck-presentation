import { SlideHeader, SlideShell } from "../../components/index.ts";

const GLOWS = [
  { top: -200, left: -100, size: 700, color: "124, 58, 237", opacity: 0.14 },
  { bottom: -200, right: -100, size: 600, color: "236, 72, 153", opacity: 0.1 },
];

export function TestingArtExplanationsWeek4() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Part 2 — the odd one out"
        title="Testing the two "
        highlight="possible reasons."
      />
    </SlideShell>
  );
}
