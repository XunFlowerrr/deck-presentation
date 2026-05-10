/**
 * _template.tsx — Scaffold for new slides
 *
 * HOW TO ADD A NEW SLIDE (3 files, 3 steps):
 *
 * 1. Create content file:  src/content/slides/my-slide.ts
 *    - Define all text as BilingualText { th: string; en: string }
 *    - Use iconKey strings instead of JSX icon components in data
 *    - Export a header const and data arrays
 *
 * 2. Create this slide component:  src/slides/MySlide.tsx
 *    - Copy this file, rename the function, import from your content file
 *    - Build the JSX layout here
 *
 * 3. Register the slide:  src/content/deck.ts
 *    - Import and add to the `slides` array in the right position
 *    - Optionally add to a section in `sections`
 */

import { SlideHeader, SlideShell, ThaiText } from "../components/index.ts";
// import { mySlideHeader, myItems } from "../content/slides/my-slide";

// Optional: icon map if your content uses iconKey strings
// const ICON_MAP = {
//   Example: ExampleIcon,
// } satisfies Record<string, React.ComponentType<any>>;

export function MySlide() {
  return (
    <SlideShell>
      <SlideHeader
        label={/* mySlideHeader.label */ "Section"}
        title={/* mySlideHeader.title */ "Slide"}
        highlight={/* mySlideHeader.highlight */ "Title."}
        tagline={
          <ThaiText en={/* mySlideHeader.tagline.en */ "English tagline"}>
            {/* mySlideHeader.tagline.th */}ภาษาไทย
          </ThaiText>
        }
      />

      {/* Render content items */}
      {/* {myItems.map((item) => (
        <div key={item.id}>
          <ThaiText en={item.desc.en}>{item.desc.th}</ThaiText>
        </div>
      ))} */}
    </SlideShell>
  );
}
