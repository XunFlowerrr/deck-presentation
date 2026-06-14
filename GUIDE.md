# Developer & Configurator Guide: React Slide Deck

This guide provides a comprehensive overview of the design philosophy, page configuration, content creation, and styling architecture of this React-based presentation deck application.

---

## 1. The Philosophy of This Project

Unlike traditional presentation tools (such as PowerPoint, Keynote, or online WYSIWYG editors), this project is built as a **code-first, high-fidelity presentation viewer**. It treats slides as standard React components powered by plain TypeScript data files.

The core principles guiding the architecture are:

1. **Pixel-Perfect Canvas Scaling (Responsive Scale-to-Fit)**
   - The presentation is locked to a native **16:9 aspect ratio (`1920x1080` canvas)**, defined in [PresentationFrame.tsx](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/layout/PresentationFrame.tsx).
   - Rather than reflow-based responsive design (which breaks positioning, spacing, and typography), the entire canvas scales up or down dynamically using CSS transforms (`scale(...)`) to fit the host screen size. This guarantees that your presentation looks exactly the same on a mobile phone, a laptop, a 4K monitor, or a projector.
2. **Clear Separation of Content and Presentation Layer**
   - **Content Files (`src/content/slides/*.ts`)**: Contain pure data, descriptive arrays, text configurations, and assets. They contain **no JSX, no styling, and no animation definitions**.
   - **Slide Views (`src/slides/*.tsx`)**: Consume the content files, structure the HTML/JSX layout, and define how elements behave visually.
3. **Vanilla Styling Over Utility Frameworks**
   - For maximum flexibility, layout precision, and self-contained slides, styling is done entirely using **Vanilla CSS variables** and **React inline styles (`style={{ ... }}`)**. There are no heavy CSS frameworks (like Tailwind CSS) to maintain.
4. **Built-in Presentation Utilities**
   - Presentation aids (laser pointer, canvas annotations, language toggling, slide-to-slide progress indicators, and keyboard navigation) are coded natively into the frame wrapper to run synchronously without external slide-viewer controls.

---

## 2. Where & How to Configure Pages

All slides, their order, and their groupings into sections are managed in a single file: [deck.ts](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/content/deck.ts).

### The Deck Array Structure
The slide layout is configured as an array of sections (`DeckSection[]`), where each section has:
- `label`: The section name displayed in the top progress bar.
- `slides`: An array of React slide components in their exact order of presentation.

```typescript
const deck: DeckSection[] = [
  {
    label: 'Intro',
    slides: [Cover, TableOfContents],
  },
  {
    label: 'Problem',
    slides: [ProblemDivider, ProblemOverview],
  },
  // Add more sections here...
];
```

### Adding a New Slide (3 Steps)
1. **Create the Content File**: Scaffold a plain TypeScript file in `src/content/slides/my-slide.ts` containing the text data.
2. **Create the Slide Component**: Create a TSX file in `src/slides/MySlide.tsx` using the slide layout template (using [SlideShell](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/layout/SlideShell.tsx)).
3. **Register the Slide**: Import the slide component in `src/content/deck.ts` and place it inside the appropriate section's `slides` array.

---

## 3. Page Content Structure & Localization

### Bilingual Content Model
Every user-facing text string is designed to support multilingual rendering. The project defines a `BilingualText` interface in [types.ts](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/content/types.ts):

```typescript
export interface BilingualText {
  th: string; // Thai translation (or mixed default)
  en: string; // English translation
}
```

Content files export structured objects using this format:
```typescript
export const myContent = {
  title: 'My Title',
  description: {
    th: 'คำอธิบายภาษาไทย',
    en: 'English description',
  }
} as const;
```

### Rendering Bilingual Text in Views
In your `.tsx` slide files, wrap text elements using the `<ThaiText>` component. It hooks into the global language state and automatically swaps out content when the user toggles languages:

```tsx
import { ThaiText } from "../components/index.ts";
import { myContent } from "../content/slides/my-slide";

export function MySlide() {
  return (
    <div>
      {/* Renders th by default, swaps to en if English mode is active */}
      <ThaiText en={myContent.description.en}>
        {myContent.description.th}
      </ThaiText>
    </div>
  );
}
```

---

## 4. How to Style & Animate

### A. Layout Primitives & Design System
Slides are styled using standard CSS in [index.css](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/index.css) combined with highly structured React components:
- **[SlideShell](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/layout/SlideShell.tsx)**: The main layout container for every slide. It provides the background grid texture, safe padding boundaries, and optional floating glowing blob configurations (`glows`).
- **[SlideHeader](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/layout/SlideHeader.tsx)**: Standardizes slide titles, subtitles, section labels, and bottom highlight rules with consistent spacing and typography sizes.
- **[SectionDivider](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/layout/SectionDivider.tsx)**: A full-screen dark transition slide template to demarcate major chapters in the presentation deck.

### B. Inline CSS & Colors
All visual elements use inline style maps. Color palettes are chosen using precise hex and RGB codes. Glow effects are achieved by passing configs to `SlideShell`:

```tsx
const GLOWS = [
  { top: -320, right: -180, size: 960, color: "124,58,237", opacity: 0.18 }, // Purple glow
];
```

### C. Standardizing Animations
Animations are powered by **Framer Motion**. Instead of writing ad-hoc transition values in every component, import animation presets from [motion.ts](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/lib/motion.ts).

Common presets include:
- `fadeIn(delay)`: Opacity fade.
- `fadeInUp(delay)`: Smooth rise from below.
- `fadeInLeft(delay)` / `fadeInRight(delay)`: Slide in from the sides.
- `scaleIn(delay)`: Pop-in scale transition.
- `stagger(base, step, index)`: Utility to offset animations for list items or grid cards.

**Usage Example:**
```tsx
import { motion } from "framer-motion";
import { cardRise, stagger } from "../lib/motion.ts";

{items.map((item, i) => (
  <motion.div
    key={item.id}
    {...cardRise(stagger(0.2, 0.1, i))} // Cards stagger in sequentially
    style={{ padding: 20, background: '#f5f5f5' }}
  >
    {item.title}
  </motion.div>
))}
```

---

## 5. The Multi-Step Stage Engine (Interactive Sub-steps)

For slides displaying detailed sequences, workflows, or architectures (such as flowcharts or process pipelines), the project features a sub-navigation framework that allows you to step through multiple phases **within a single slide** before moving to the next.

This is implemented using the utilities in [StepNav.tsx](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/components/composite/StepNav.tsx):

### A. The Hook: `useStepNav`
This hook manages the active sub-step index and sets up standard keyboard shortcuts:
- **`activeStep`**: `0` represents the "Overview" stage (all items displayed, overview mode), and `1` through `N` represent specific sequential steps.
- **Shortcuts**: Pressing the **`,`** key moves backward, and the **`.`** key moves forward.
- **Auto-binding**: It automatically adds window event listeners for these keypresses and handles clean teardown.

```tsx
const { activeStep, setActiveStep, advance, retreat } = useStepNav(totalSteps);
```

### B. The Control: `<StepNavBar>`
A floating pill component (rendered at the bottom of the slide) displaying step dots, navigation arrows, and a status label (e.g., `Overview` or `Step 2 / 5`).
- Click dots to jump to a specific sub-step.
- Hover dots to view step tooltips.
- The active dot dynamically expands and glows with the theme color configured in the step definition.

```tsx
<StepNavBar
  compact // Set true for a smaller, bottom-right aligned pill
  activeStep={activeStep}
  steps={STEP_CONFIG}
  onAdvance={advance}
  onRetreat={retreat}
  onJump={setActiveStep}
/>
```

### C. The Highlight Ring: `<NodeRing>`
An animated glowing boundary circle to wrap around the active node of the current sub-step. It uses Framer Motion's `AnimatePresence` to fade in and pulse when the parent node becomes active.

---

## 6. Built-in Presentation Features & Secrets

This project includes several interactive modules built directly into the core shell code that are highly useful during live presentations:

### 1. Interactive Laser Pointer & Annotation Canvas
- **Activation**: Press the **`L`** key on your keyboard or click the **"Laser Pointer"** button on the top-right toolbar.
- **Action**: A red glowing laser dot will follow your mouse. Click and drag to draw lines directly on the slide canvas.
- **Auto-Decay**: Handdrawn lines automatically fade out after **1 second** so you don't clutter the screen with permanent drawings.

### 2. Celebratory Confetti Keybind
- **Activation**: Press the **`C`** key on your keyboard.
- **Action**: Triggers a burst of multi-colored confetti particles emanating from the center of the screen, powered by `canvas-confetti`.

### 3. Glassmorphic Toolbar & Fullscreen Control
- **Activation**: Move your cursor to the top 80 pixels of the screen.
- **Action**: A floating glassmorphic toolbar slides down, allowing you to:
  - Toggle between **English** and **TH + EN** bilingual text render modes.
  - Turn the **Laser Pointer** on or off.
  - Toggle **Fullscreen** mode (can also be activated by pressing the **`F`** key).

### 4. Interactive Slide Navigation (SlideContext)
- Every slide is rendered inside a `SlideContext.Provider`.
- Slide components can call the `useGoTo` hook to navigate to any slide programmatically:
  ```tsx
  import { useGoTo } from "../context/SlideContext.tsx";

  export function TableOfContents() {
    const goTo = useGoTo();
    return (
      <button onClick={() => goTo(5)}>Jump to Section 2</button>
    );
  }
  ```

### 5. Centralized Asset Registry
- To avoid brittle relative imports (e.g. `../../assets/image.png`) inside slide files, register all media in [assets.ts](file:///Users/xunflowerrr/Main/Work/GithubRepository/deck-presentation/src/content/assets.ts).
- Slide components then import their assets from a single central module:
  ```tsx
  import { systemOverviewImg } from "../content/assets.ts";
  ```

