/** Generated from official Tailwind CSS v4 draft llms.txt (md-endpoints). */
export type RefItem = {
  name: string;
  summary: string;
  examples: string[];
  docs: string;
};
export type RefSection = {
  id: string;
  title: string;
  items: RefItem[];
};
export type MetaSection = {
  id: string;
  title: string;
  body: string;
};

export const REFERENCE_META: MetaSection[] = [
  {
    "id": "syntax",
    "title": "Core Syntax",
    "body": "| Pattern | Example | Description |\n|---------|---------|-------------|\n| `{utility}` | `flex` | Base utility |\n| `{variant}:{utility}` | `hover:bg-blue-500` | Conditional application |\n| `{utility}-{value}` | `p-4`, `text-lg` | Value from scale |\n| `{utility}-[{value}]` | `p-[13px]`, `grid-cols-[1fr_2fr]` | Arbitrary value |\n| `{utility}-(--var)` | `p-(--my-spacing)` | CSS variable shorthand |\n| `{utility}-({type}:--var)` | `text-(color:--my-var)` | Type hint + variable shorthand |\n| `{utility}-[{type}:{value}]` | `text-[color:var(--my-var)]` | Type hint for arbitrary values |\n| `{utility}/{opacity}` | `bg-black/50`, `text-white/75` | Opacity modifier |\n| `-{utility}` | `-mt-4`, `-translate-x-2` | Negative value |\n| `{utility}!` | `hidden!`, `flex!` | !important modifier |\n\n### Stacking Variants\nVariants stack left-to-right: `dark:md:hover:bg-blue-500`\n\n### Type Hints\nWhen a utility namespace is ambiguous (e.g., `text-*` maps to both `font-size` and `color`), use type hints:\n- `text-(length:--my-var)` or `text-[length:var(--my-var)]` → `font-size`\n- `text-(color:--my-var)` or `text-[color:var(--my-var)]` → `color`\n- `bg-(url:--my-img)` or `bg-[url:var(--my-img)]` → `background-image`\n\n---"
  },
  {
    "id": "variants",
    "title": "Variants Reference",
    "body": "### Pseudo-classes\n\n| Variant | Selector |\n|---------|----------|\n| `hover` | `:hover` |\n| `focus` | `:focus` |\n| `focus-within` | `:focus-within` |\n| `focus-visible` | `:focus-visible` |\n| `active` | `:active` |\n| `visited` | `:visited` |\n| `target` | `:target` |\n| `first` | `:first-child` |\n| `last` | `:last-child` |\n| `only` | `:only-child` |\n| `odd` | `:nth-child(odd)` |\n| `even` | `:nth-child(even)` |\n| `first-of-type` | `:first-of-type` |\n| `last-of-type` | `:last-of-type` |\n| `only-of-type` | `:only-of-type` |\n| `nth-{n}` | `:nth-child({n})` |\n| `nth-last-{n}` | `:nth-last-child({n})` |\n| `nth-of-type-{n}` | `:nth-of-type({n})` |\n| `nth-last-of-type-{n}` | `:nth-last-of-type({n})` |\n| `empty` | `:empty` |\n| `disabled` | `:disabled` |\n| `enabled` | `:enabled` |\n| `checked` | `:checked` |\n| `indeterminate` | `:indeterminate` |\n| `default` | `:default` |\n| `optional` | `:optional` |\n| `required` | `:required` |\n| `valid` | `:valid` |\n| `invalid` | `:invalid` |\n| `user-valid` | `:user-valid` |\n| `user-invalid` | `:user-invalid` |\n| `in-range` | `:in-range` |\n| `out-of-range` | `:out-of-range` |\n| `placeholder-shown` | `:placeholder-shown` |\n| `autofill` | `:autofill` |\n| `read-only` | `:read-only` |\n| `has-*` | `:has()` — e.g., `has-[:checked]`, `has-[img]`, `has-checked` |\n| `not-*` | `:not()` — e.g., `not-hover`, `not-focus`, `not-disabled` |\n\n### Pseudo-elements\n\n| Variant | Selector |\n|---------|----------|\n| `before` | `::before` (auto adds `content: ''`) |\n| `after` | `::after` (auto adds `content: ''`) |\n| `placeholder` | `::placeholder` |\n| `file` | `::file-selector-button` |\n| `marker` | `::marker` |\n| `selection` | `::selection` |\n| `first-line` | `::first-line` |\n| `first-letter` | `::first-letter` |\n| `backdrop` | `::backdrop` |\n| `details-content` | `::details-content` |\n\n### Media Queries\n\n| Variant | Media Query |\n|---------|-------------|\n| `sm` | `width >= 40rem` (640px) |\n| `md` | `width >= 48rem` (768px) |\n| `lg` | `width >= 64rem` (1024px) |\n| `xl` | `width >= 80rem` (1280px) |\n| `2xl` | `width >= 96rem` (1536px) |\n| `max-sm` | `width < 40rem` |\n| `max-md` | `width < 48rem` |\n| `max-lg` | `width < 64rem` |\n| `max-xl` | `width < 80rem` |\n| `max-2xl` | `width < 96rem` |\n| `min-[{value}]` | `width >= {value}` |\n| `max-[{value}]` | `width < {value}` |\n| `dark` | `prefers-color-scheme: dark` |\n| `light` | `prefers-color-scheme: light` |\n| `motion-safe` | `prefers-reduced-motion: no-preference` |\n| `motion-reduce` | `prefers-reduced-motion: reduce` |\n| `contrast-more` | `prefers-contrast: more` |\n| `contrast-less` | `prefers-contrast: less` |\n| `forced-colors` | `forced-colors: active` |\n| `not-forced-colors` | `forced-colors: none` |\n| `inverted-colors` | `inverted-colors: inverted` |\n| `portrait` | `orientation: portrait` |\n| `landscape` | `orientation: landscape` |\n| `print` | `print` |\n| `noscript` | `scripting: none` |\n| `pointer-fine` | `pointer: fine` |\n| `pointer-coarse` | `pointer: coarse` |\n| `pointer-none` | `pointer: none` |\n| `any-pointer-fine` | `any-pointer: fine` |\n| `any-pointer-coarse` | `any-pointer: coarse` |\n\nNegate with `not-` prefix: `not-dark`, `not-print`, `not-forced-colors`, etc.\n\n### Container Queries\n\n| Variant | Min-width |\n|---------|-----------|\n| `@3xs` | 16rem |\n| `@2xs` | 18rem |\n| `@xs` | 20rem |\n| `@sm` | 24rem |\n| `@md` | 28rem |\n| `@lg` | 32rem |\n| `@xl` | 36rem |\n| `@2xl` | 42rem |\n| `@3xl` | 48rem |\n| `@4xl` | 56rem |\n| `@5xl` | 64rem |\n| `@6xl` | 72rem |\n| `@7xl` | 80rem |\n| `@[{value}]` | `width >= {value}` |\n| `@max-[{value}]` | `width < {value}` |\n\nContainer: `@container` class on parent, or `@container/{name}` for named containers.\n\n### State Variants\n\n| Variant | Description |\n|---------|-------------|\n| `open` | `<details>` or `<dialog>` is open, or `:popover-open` |\n| `inert` | Element has `inert` attribute |\n| `starting` | `@starting-style` for entry animations |\n\n### Parent/Sibling State\n\n**Group** (style based on parent):\n```html\n<div class=\"group\">\n  <span c"
  },
  {
    "id": "theme",
    "title": "Theme System",
    "body": "### @theme Directive\n\n```css\n@import \"tailwindcss\";\n\n@theme {\n  --color-brand: #3b82f6;\n  --font-display: \"Inter\", sans-serif;\n  --spacing: 0.25rem;\n}\n```\n\n### Theme Namespaces\n\n| Namespace | Generates |\n|-----------|-----------|\n| `--color-*` | Color utilities: `bg-*`, `text-*`, `border-*`, `fill-*`, `stroke-*`, etc. |\n| `--font-*` | `font-*` utilities |\n| `--text-*` | `text-*` font-size utilities |\n| `--font-weight-*` | `font-*` weight utilities |\n| `--tracking-*` | `tracking-*` letter-spacing |\n| `--leading-*` | `leading-*` line-height |\n| `--breakpoint-*` | `sm:`, `md:`, etc. variants |\n| `--container-*` | `@sm:`, `@md:`, etc. + `max-w-*`, `w-*` |\n| `--spacing` | Base spacing multiplier for `p-*`, `m-*`, `gap-*`, `w-*`, `h-*`, etc. |\n| `--radius-*` | `rounded-*` utilities |\n| `--shadow-*` | `shadow-*` utilities |\n| `--inset-shadow-*` | `inset-shadow-*` utilities |\n| `--drop-shadow-*` | `drop-shadow-*` utilities |\n| `--text-shadow-*` | `text-shadow-*` utilities |\n| `--blur-*` | `blur-*` utilities |\n| `--perspective-*` | `perspective-*` utilities |\n| `--aspect-*` | `aspect-*` utilities |\n| `--ease-*` | `ease-*` timing functions |\n| `--animate-*` | `animate-*` animations |\n\n### Overriding Defaults\n\n```css\n@theme {\n  --color-*: initial;  /* Clear all default colors */\n  --*: initial;        /* Clear entire default theme */\n\n  /* Then define your own */\n  --color-primary: #3b82f6;\n}\n```\n\n### Animation Keyframes\n\n```css\n@theme {\n  --animate-fade-in: fade-in 0.3s ease-out;\n\n  @keyframes fade-in {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n}\n```\n\nDefining keyframes inside `@theme` ensures they are only emitted if the animation is used.\n\n### Theme Options\n\n**inline** — Inline values directly in utilities instead of using CSS variables:\n```css\n@theme inline {\n  --color-primary: #3b82f6;\n}\n/* bg-primary outputs: background-color: #3b82f6; */\n/* instead of: background-color: var(--color-primary); */\n```\n\n**static** — Always emit CSS variables, even if not used in any utility:\n```css\n@theme static {\n  --color-primary: #3b82f6;\n}\n/* Always emits: --color-primary: #3b82f6; in :root */\n```\n\n---"
  },
  {
    "id": "directives",
    "title": "Directives",
    "body": "### @import\nImport CSS files, including Tailwind itself:\n```css\n@import \"tailwindcss\";\n```\n\n### @source\nSpecify additional source files for class detection:\n```css\n@source \"../node_modules/@my-company/ui-lib\";\n```\n\n### @utility\nDefine custom utilities that work with variants:\n```css\n@utility tab-4 {\n  tab-size: 4;\n}\n```\n\n### @variant\nApply a Tailwind variant to styles in custom CSS:\n```css\n.my-element {\n  background: white;\n  @variant dark {\n    background: black;\n  }\n}\n```\n\n### @custom-variant\nCreate a custom variant:\n```css\n@custom-variant theme-midnight (&:where([data-theme=\"midnight\"] *));\n```\nUsage: `theme-midnight:bg-black`\n\n### @apply\nInline utility classes in custom CSS:\n```css\n.select2-dropdown {\n  @apply rounded-b-lg shadow-md;\n}\n```\n\n### @reference\nImport stylesheet for reference without emitting CSS (for Vue/Svelte `<style>` blocks, CSS modules):\n```css\n@reference \"../../app.css\";\n```\n\n### @plugin\nLoad a JavaScript plugin (v3 compatibility):\n```css\n@plugin \"@tailwindcss/typography\";\n```\n\n### @config\nLoad a legacy JavaScript config (v3 compatibility):\n```css\n@config \"../../tailwind.config.js\";\n```\n\n---"
  },
  {
    "id": "functions",
    "title": "Functions",
    "body": "### --alpha()\nAdjust color opacity:\n```css\ncolor: --alpha(var(--color-lime-300) / 50%);\n/* Outputs: color-mix(in oklab, var(--color-lime-300) 50%, transparent) */\n```\n\n### --spacing()\nGenerate spacing value from theme:\n```css\nmargin: --spacing(4);\n/* Outputs: calc(var(--spacing) * 4) */\n```\n\nUseful in arbitrary values:\n```html\n<div class=\"py-[calc(--spacing(4)-1px)]\">\n```\n\n---"
  },
  {
    "id": "themevars",
    "title": "Default Theme Variables",
    "body": "### Spacing\n`--spacing: 0.25rem` (4px)\nUtilities use `calc(var(--spacing) * n)` for values like `p-4`, `m-8`, `gap-2`, etc.\n\n### Breakpoints\n| Variable | Value |\n|----------|-------|\n| `--breakpoint-sm` | 40rem (640px) |\n| `--breakpoint-md` | 48rem (768px) |\n| `--breakpoint-lg` | 64rem (1024px) |\n| `--breakpoint-xl` | 80rem (1280px) |\n| `--breakpoint-2xl` | 96rem (1536px) |\n\n### Container Sizes\n| Variable | Value |\n|----------|-------|\n| `--container-3xs` | 16rem (256px) |\n| `--container-2xs` | 18rem (288px) |\n| `--container-xs` | 20rem (320px) |\n| `--container-sm` | 24rem (384px) |\n| `--container-md` | 28rem (448px) |\n| `--container-lg` | 32rem (512px) |\n| `--container-xl` | 36rem (576px) |\n| `--container-2xl` | 42rem (672px) |\n| `--container-3xl` | 48rem (768px) |\n| `--container-4xl` | 56rem (896px) |\n| `--container-5xl` | 64rem (1024px) |\n| `--container-6xl` | 72rem (1152px) |\n| `--container-7xl` | 80rem (1280px) |\n\n### Font Sizes\n| Variable | Size | Line Height |\n|----------|------|-------------|\n| `--text-xs` | 0.75rem | 1rem |\n| `--text-sm` | 0.875rem | 1.25rem |\n| `--text-base` | 1rem | 1.5rem |\n| `--text-lg` | 1.125rem | 1.75rem |\n| `--text-xl` | 1.25rem | 1.75rem |\n| `--text-2xl` | 1.5rem | 2rem |\n| `--text-3xl` | 1.875rem | 2.25rem |\n| `--text-4xl` | 2.25rem | 2.5rem |\n| `--text-5xl` | 3rem | 1 |\n| `--text-6xl` | 3.75rem | 1 |\n| `--text-7xl` | 4.5rem | 1 |\n| `--text-8xl` | 6rem | 1 |\n| `--text-9xl` | 8rem | 1 |\n\n### Font Weights\n| Variable | Value |\n|----------|-------|\n| `--font-weight-thin` | 100 |\n| `--font-weight-extralight` | 200 |\n| `--font-weight-light` | 300 |\n| `--font-weight-normal` | 400 |\n| `--font-weight-medium` | 500 |\n| `--font-weight-semibold` | 600 |\n| `--font-weight-bold` | 700 |\n| `--font-weight-extrabold` | 800 |\n| `--font-weight-black` | 900 |\n\n### Letter Spacing\n| Variable | Value |\n|----------|-------|\n| `--tracking-tighter` | -0.05em |\n| `--tracking-tight` | -0.025em |\n| `--tracking-normal` | 0em |\n| `--tracking-wide` | 0.025em |\n| `--tracking-wider` | 0.05em |\n| `--tracking-widest` | 0.1em |\n\n### Line Height\n| Variable | Value |\n|----------|-------|\n| `--leading-none` | 1 |\n| `--leading-tight` | 1.25 |\n| `--leading-snug` | 1.375 |\n| `--leading-normal` | 1.5 |\n| `--leading-relaxed` | 1.625 |\n| `--leading-loose` | 2 |\n\n### Border Radius\n| Variable | Value |\n|----------|-------|\n| `--radius-xs` | 0.125rem |\n| `--radius-sm` | 0.25rem |\n| `--radius-md` | 0.375rem |\n| `--radius-lg` | 0.5rem |\n| `--radius-xl` | 0.75rem |\n| `--radius-2xl` | 1rem |\n| `--radius-3xl` | 1.5rem |\n| `--radius-4xl` | 2rem |\n\n### Box Shadows\n| Variable | Value |\n|----------|-------|\n| `--shadow-2xs` | 0 1px rgb(0 0 0 / 0.05) |\n| `--shadow-xs` | 0 1px 2px 0 rgb(0 0 0 / 0.05) |\n| `--shadow-sm` | 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) |\n| `--shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) |\n| `--shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) |\n| `--shadow-xl` | 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) |\n| `--shadow-2xl` | 0 25px 50px -12px rgb(0 0 0 / 0.25) |\n\n### Inset Shadows\n| Variable | Value |\n|----------|-------|\n| `--inset-shadow-2xs` | inset 0 1px rgb(0 0 0 / 0.05) |\n| `--inset-shadow-xs` | inset 0 1px 1px rgb(0 0 0 / 0.05) |\n| `--inset-shadow-sm` | inset 0 2px 4px rgb(0 0 0 / 0.05) |\n\n### Blur\n| Variable | Value |\n|----------|-------|\n| `--blur-xs` | 4px |\n| `--blur-sm` | 8px |\n| `--blur-md` | 12px |\n| `--blur-lg` | 16px |\n| `--blur-xl` | 24px |\n| `--blur-2xl` | 40px |\n| `--blur-3xl` | 64px |\n\n### Transition Timing\n| Variable | Value |\n|----------|-------|\n| `--ease-linear` | linear |\n| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) |\n| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) |\n| `--ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) |\n\n### Animations\n| Variable | Value |\n|----------|-------|\n| `--animate-spin` | spin 1s linear infinite |\n| `--animate-ping` | ping 1s cubic-bezier(0, 0, 0.2, 1) infinite |\n| `--animate-pu"
  }
];

export const REFERENCE_UTILITIES: RefSection[] = [
  {
    "id": "layout",
    "title": "Layout",
    "items": [
      {
        "name": "display",
        "summary": "`block` `inline-block` `inline` `flex` `inline-flex` `grid` `inline-grid` `contents` `flow-root` `list-item` `hidden` (none) `table` `inline-table` `table-caption` `table-cell` `table-column` `table-column-group` `table-",
        "examples": [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "grid",
          "inline-grid",
          "contents"
        ],
        "docs": "https://tailwindcss.com/docs/display"
      },
      {
        "name": "position",
        "summary": "`static` `fixed` `absolute` `relative` `sticky`",
        "examples": [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        "docs": "https://tailwindcss.com/docs/position"
      },
      {
        "name": "top / right / bottom / left / inset",
        "summary": "`{top|right|bottom|left|inset|inset-x|inset-y|start|end}-{n}` → spacing scale `{...}-auto` `{...}-full` (100%) `{...}-px` (1px) `{...}-{fraction}` → percentage (e.g., `top-1/2`) `{...}-[value]` Negative: `-{top|right|bot",
        "examples": [
          "top-1/2"
        ],
        "docs": "https://tailwindcss.com/docs/top-right-bottom-left-inset"
      },
      {
        "name": "visibility",
        "summary": "`visible` `invisible` (hidden) `collapse`",
        "examples": [
          "visible",
          "invisible",
          "collapse"
        ],
        "docs": "https://tailwindcss.com/docs/visibility"
      },
      {
        "name": "z-index",
        "summary": "`z-{n}` `z-auto` `z-[value]`",
        "examples": [
          "z-auto",
          "z-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/z-index"
      },
      {
        "name": "float / clear",
        "summary": "`float-{left|right|none|start|end}` `clear-{left|right|both|none|start|end}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/float-clear"
      },
      {
        "name": "isolation",
        "summary": "`isolate` `isolation-auto`",
        "examples": [
          "isolate",
          "isolation-auto"
        ],
        "docs": "https://tailwindcss.com/docs/isolation"
      },
      {
        "name": "overflow",
        "summary": "`overflow-{auto|hidden|clip|visible|scroll}` `overflow-x-{...}` `overflow-y-{...}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/overflow"
      },
      {
        "name": "overscroll-behavior",
        "summary": "`overscroll-{auto|contain|none}` `overscroll-x-{...}` `overscroll-y-{...}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/overscroll-behavior"
      },
      {
        "name": "object-fit",
        "summary": "`object-{contain|cover|fill|none|scale-down}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/object-fit"
      },
      {
        "name": "object-position",
        "summary": "`object-{top|bottom|left|right|center|top-left|top-right|bottom-left|bottom-right}` `object-[value]`",
        "examples": [
          "object-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/object-position"
      },
      {
        "name": "aspect-ratio",
        "summary": "`aspect-auto` `aspect-square` (1/1) `aspect-video` (16/9) `aspect-{n}/{m}` `aspect-[value]`",
        "examples": [
          "aspect-auto",
          "aspect-square",
          "aspect-video",
          "aspect-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/aspect-ratio"
      },
      {
        "name": "columns",
        "summary": "`columns-{n}` `columns-auto` `columns-{3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl}` `columns-[value]`",
        "examples": [
          "columns-auto",
          "columns-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/columns"
      },
      {
        "name": "break-before / break-after",
        "summary": "`break-{before|after}-{auto|avoid|all|avoid-page|page|left|right|column}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/break-before-break-after"
      },
      {
        "name": "break-inside",
        "summary": "`break-inside-{auto|avoid|avoid-page|avoid-column}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/break-inside"
      },
      {
        "name": "box-decoration-break",
        "summary": "`box-decoration-{clone|slice}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/box-decoration-break"
      },
      {
        "name": "box-sizing",
        "summary": "`box-border` (border-box) `box-content` (content-box) ---",
        "examples": [
          "box-border",
          "box-content"
        ],
        "docs": "https://tailwindcss.com/docs/box-sizing"
      }
    ]
  },
  {
    "id": "flexbox-grid",
    "title": "Flexbox & Grid",
    "items": [
      {
        "name": "flex-direction",
        "summary": "`flex-row` `flex-row-reverse` `flex-col` (column) `flex-col-reverse`",
        "examples": [
          "flex-row",
          "flex-row-reverse",
          "flex-col",
          "flex-col-reverse"
        ],
        "docs": "https://tailwindcss.com/docs/flex-direction"
      },
      {
        "name": "flex-wrap",
        "summary": "`flex-wrap` `flex-wrap-reverse` `flex-nowrap`",
        "examples": [
          "flex-wrap",
          "flex-wrap-reverse",
          "flex-nowrap"
        ],
        "docs": "https://tailwindcss.com/docs/flex-wrap"
      },
      {
        "name": "flex",
        "summary": "`flex-{n}` `flex-{fraction}` `flex-auto` `flex-initial` `flex-none` `flex-[value]`",
        "examples": [
          "flex-auto",
          "flex-initial",
          "flex-none",
          "flex-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/flex"
      },
      {
        "name": "flex-grow",
        "summary": "`grow` (1) `grow-{n}` `grow-[value]`",
        "examples": [
          "grow",
          "grow-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/flex-grow"
      },
      {
        "name": "flex-shrink",
        "summary": "`shrink` (1) `shrink-{n}` `shrink-[value]`",
        "examples": [
          "shrink",
          "shrink-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/flex-shrink"
      },
      {
        "name": "flex-basis",
        "summary": "`basis-{n}` (spacing) `basis-auto` `basis-full` `basis-px` `basis-{fraction}` `basis-{3xs-7xl}` (container sizes) `basis-[value]`",
        "examples": [
          "basis-auto",
          "basis-full",
          "basis-px",
          "basis-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/flex-basis"
      },
      {
        "name": "order",
        "summary": "`order-{n}` `-order-{n}` `order-first` (-9999) `order-last` (9999) `order-none` (0) `order-[value]`",
        "examples": [
          "order-first",
          "order-last",
          "order-none",
          "order-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/order"
      },
      {
        "name": "grid-template-columns",
        "summary": "`grid-cols-{n}` (repeat(n, minmax(0, 1fr))) `grid-cols-none` `grid-cols-subgrid` `grid-cols-[value]` (e.g., `grid-cols-[200px_1fr_2fr]`)",
        "examples": [
          "grid-cols-none",
          "grid-cols-subgrid",
          "grid-cols-[value]",
          "grid-cols-[200px_1fr_2fr]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-template-columns"
      },
      {
        "name": "grid-template-rows",
        "summary": "`grid-rows-{n}` (repeat(n, minmax(0, 1fr))) `grid-rows-none` `grid-rows-subgrid` `grid-rows-[value]`",
        "examples": [
          "grid-rows-none",
          "grid-rows-subgrid",
          "grid-rows-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-template-rows"
      },
      {
        "name": "grid-column",
        "summary": "`col-span-{n}` `col-span-full` `col-start-{n}` `-col-start-{n}` `col-start-auto` `col-end-{n}` `-col-end-{n}` `col-end-auto` `col-{n}` `-col-{n}` `col-auto` `col-[value]`",
        "examples": [
          "col-span-full",
          "col-start-auto",
          "col-end-auto",
          "col-auto",
          "col-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-column"
      },
      {
        "name": "grid-row",
        "summary": "`row-span-{n}` `row-span-full` `row-start-{n}` `-row-start-{n}` `row-start-auto` `row-end-{n}` `-row-end-{n}` `row-end-auto` `row-{n}` `-row-{n}` `row-auto` `row-[value]`",
        "examples": [
          "row-span-full",
          "row-start-auto",
          "row-end-auto",
          "row-auto",
          "row-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-row"
      },
      {
        "name": "grid-auto-flow",
        "summary": "`grid-flow-row` `grid-flow-col` `grid-flow-dense` `grid-flow-row-dense` `grid-flow-col-dense`",
        "examples": [
          "grid-flow-row",
          "grid-flow-col",
          "grid-flow-dense",
          "grid-flow-row-dense",
          "grid-flow-col-dense"
        ],
        "docs": "https://tailwindcss.com/docs/grid-auto-flow"
      },
      {
        "name": "grid-auto-columns",
        "summary": "`auto-cols-auto` `auto-cols-min` `auto-cols-max` `auto-cols-fr` (minmax(0, 1fr)) `auto-cols-[value]`",
        "examples": [
          "auto-cols-auto",
          "auto-cols-min",
          "auto-cols-max",
          "auto-cols-fr",
          "auto-cols-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-auto-columns"
      },
      {
        "name": "grid-auto-rows",
        "summary": "`auto-rows-auto` `auto-rows-min` `auto-rows-max` `auto-rows-fr` (minmax(0, 1fr)) `auto-rows-[value]`",
        "examples": [
          "auto-rows-auto",
          "auto-rows-min",
          "auto-rows-max",
          "auto-rows-fr",
          "auto-rows-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grid-auto-rows"
      },
      {
        "name": "gap",
        "summary": "`gap-{n}` `gap-px` `gap-[value]` `gap-x-{...}` `gap-y-{...}`",
        "examples": [
          "gap-px",
          "gap-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/gap"
      },
      {
        "name": "justify-content",
        "summary": "`justify-start` `justify-end` `justify-center` `justify-between` `justify-around` `justify-evenly` `justify-stretch` `justify-end-safe` `justify-center-safe` `justify-baseline` `justify-normal`",
        "examples": [
          "justify-start",
          "justify-end",
          "justify-center",
          "justify-between",
          "justify-around",
          "justify-evenly",
          "justify-stretch",
          "justify-end-safe"
        ],
        "docs": "https://tailwindcss.com/docs/justify-content"
      },
      {
        "name": "justify-items",
        "summary": "`justify-items-start` `justify-items-end` `justify-items-center` `justify-items-stretch` `justify-items-normal`",
        "examples": [
          "justify-items-start",
          "justify-items-end",
          "justify-items-center",
          "justify-items-stretch",
          "justify-items-normal"
        ],
        "docs": "https://tailwindcss.com/docs/justify-items"
      },
      {
        "name": "justify-self",
        "summary": "`justify-self-auto` `justify-self-start` `justify-self-end` `justify-self-center` `justify-self-stretch`",
        "examples": [
          "justify-self-auto",
          "justify-self-start",
          "justify-self-end",
          "justify-self-center",
          "justify-self-stretch"
        ],
        "docs": "https://tailwindcss.com/docs/justify-self"
      },
      {
        "name": "align-content",
        "summary": "`content-start` `content-end` `content-center` `content-between` `content-around` `content-evenly` `content-stretch` `content-baseline` `content-normal`",
        "examples": [
          "content-start",
          "content-end",
          "content-center",
          "content-between",
          "content-around",
          "content-evenly",
          "content-stretch",
          "content-baseline"
        ],
        "docs": "https://tailwindcss.com/docs/align-content"
      },
      {
        "name": "align-items",
        "summary": "`items-start` `items-end` `items-center` `items-baseline` `items-stretch` `items-end-safe` `items-center-safe` `items-baseline-last`",
        "examples": [
          "items-start",
          "items-end",
          "items-center",
          "items-baseline",
          "items-stretch",
          "items-end-safe",
          "items-center-safe",
          "items-baseline-last"
        ],
        "docs": "https://tailwindcss.com/docs/align-items"
      },
      {
        "name": "align-self",
        "summary": "`self-auto` `self-start` `self-end` `self-center` `self-baseline` `self-stretch` `self-end-safe` `self-center-safe` `self-baseline-last`",
        "examples": [
          "self-auto",
          "self-start",
          "self-end",
          "self-center",
          "self-baseline",
          "self-stretch",
          "self-end-safe",
          "self-center-safe"
        ],
        "docs": "https://tailwindcss.com/docs/align-self"
      },
      {
        "name": "place-content",
        "summary": "`place-content-{start|end|center|between|around|evenly|stretch|baseline}` `place-content-center-safe` `place-content-end-safe`",
        "examples": [
          "place-content-center-safe",
          "place-content-end-safe"
        ],
        "docs": "https://tailwindcss.com/docs/place-content"
      },
      {
        "name": "place-items",
        "summary": "`place-items-{start|end|center|baseline|stretch}` `place-items-end-safe` `place-items-center-safe`",
        "examples": [
          "place-items-end-safe",
          "place-items-center-safe"
        ],
        "docs": "https://tailwindcss.com/docs/place-items"
      },
      {
        "name": "place-self",
        "summary": "`place-self-{auto|start|end|center|stretch}` `place-self-end-safe` `place-self-center-safe` ---",
        "examples": [
          "place-self-end-safe",
          "place-self-center-safe"
        ],
        "docs": "https://tailwindcss.com/docs/place-self"
      }
    ]
  },
  {
    "id": "spacing",
    "title": "Spacing",
    "items": [
      {
        "name": "padding",
        "summary": "`p-{n}` → `padding: calc(var(--spacing) * n)` `px-{n}` (inline) `py-{n}` (block) `pt-{n}` `pr-{n}` `pb-{n}` `pl-{n}` `ps-{n}` (inline-start) `pe-{n}` (inline-end) All support: `{...}-px` `{...}-[value]`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/padding"
      },
      {
        "name": "margin",
        "summary": "`m-{n}` `mx-{n}` `my-{n}` `mt-{n}` `mr-{n}` `mb-{n}` `ml-{n}` `ms-{n}` `me-{n}` `m-auto` `mx-auto` etc. Negative: `-m-{n}` `-mt-{n}` etc.",
        "examples": [
          "m-auto",
          "mx-auto"
        ],
        "docs": "https://tailwindcss.com/docs/margin"
      },
      {
        "name": "space-between",
        "summary": "`space-x-{n}` → `& > * + * { margin-inline-start: ... }` `space-y-{n}` → `& > * + * { margin-top: ... }` `space-x-reverse` `space-y-reverse` ---",
        "examples": [
          "space-x-reverse",
          "space-y-reverse"
        ],
        "docs": "https://tailwindcss.com/docs/space-between"
      }
    ]
  },
  {
    "id": "sizing",
    "title": "Sizing",
    "items": [
      {
        "name": "width",
        "summary": "`w-{n}` (spacing) `w-px` `w-auto` `w-full` (100%) `w-screen` (100vw) `w-{fraction}` (e.g., `w-1/2`, `w-2/3`) `w-{3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl}` (container sizes) `w-min` `w-max` `w-fit` `w-dvw` `w-dvh` ",
        "examples": [
          "w-px",
          "w-auto",
          "w-full",
          "w-screen",
          "w-1/2",
          "w-2/3",
          "w-min",
          "w-max"
        ],
        "docs": "https://tailwindcss.com/docs/width"
      },
      {
        "name": "min-width",
        "summary": "`min-w-{n}` `min-w-px` `min-w-auto` `min-w-full` `min-w-screen` `min-w-min` `min-w-max` `min-w-fit` `min-w-{fraction}` `min-w-{3xs-7xl}` `min-w-dvw` `min-w-dvh` `min-w-lvw` `min-w-lvh` `min-w-svw` `min-w-svh` `min-w-[val",
        "examples": [
          "min-w-px",
          "min-w-auto",
          "min-w-full",
          "min-w-screen",
          "min-w-min",
          "min-w-max",
          "min-w-fit",
          "min-w-dvw"
        ],
        "docs": "https://tailwindcss.com/docs/min-width"
      },
      {
        "name": "max-width",
        "summary": "`max-w-{n}` `max-w-px` `max-w-none` `max-w-full` `max-w-screen` `max-w-min` `max-w-max` `max-w-fit` `max-w-{fraction}` `max-w-{3xs-7xl}` `container` `max-w-dvw` `max-w-dvh` `max-w-lvw` `max-w-lvh` `max-w-svw` `max-w-svh`",
        "examples": [
          "max-w-px",
          "max-w-none",
          "max-w-full",
          "max-w-screen",
          "max-w-min",
          "max-w-max",
          "max-w-fit",
          "container"
        ],
        "docs": "https://tailwindcss.com/docs/max-width"
      },
      {
        "name": "height",
        "summary": "`h-{n}` `h-px` `h-auto` `h-full` `h-screen` (100vh) `h-lh` (1lh) `h-{fraction}` `h-min` `h-max` `h-fit` `h-dvh` `h-dvw` `h-lvh` `h-lvw` `h-svh` `h-svw` (viewport units) `h-[value]`",
        "examples": [
          "h-px",
          "h-auto",
          "h-full",
          "h-screen",
          "h-lh",
          "h-min",
          "h-max",
          "h-fit"
        ],
        "docs": "https://tailwindcss.com/docs/height"
      },
      {
        "name": "min-height",
        "summary": "`min-h-{n}` `min-h-px` `min-h-auto` `min-h-full` `min-h-screen` `min-h-lh` `min-h-min` `min-h-max` `min-h-fit` `min-h-{fraction}` `min-h-dvh` `min-h-dvw` `min-h-lvh` `min-h-lvw` `min-h-svh` `min-h-svw` `min-h-[value]`",
        "examples": [
          "min-h-px",
          "min-h-auto",
          "min-h-full",
          "min-h-screen",
          "min-h-lh",
          "min-h-min",
          "min-h-max",
          "min-h-fit"
        ],
        "docs": "https://tailwindcss.com/docs/min-height"
      },
      {
        "name": "max-height",
        "summary": "`max-h-{n}` `max-h-px` `max-h-none` `max-h-full` `max-h-screen` `max-h-lh` `max-h-min` `max-h-max` `max-h-fit` `max-h-{fraction}` `max-h-dvh` `max-h-dvw` `max-h-lvh` `max-h-lvw` `max-h-svh` `max-h-svw` `max-h-[value]`",
        "examples": [
          "max-h-px",
          "max-h-none",
          "max-h-full",
          "max-h-screen",
          "max-h-lh",
          "max-h-min",
          "max-h-max",
          "max-h-fit"
        ],
        "docs": "https://tailwindcss.com/docs/max-height"
      },
      {
        "name": "size (width + height)",
        "summary": "`size-{n}` `size-px` `size-auto` `size-full` `size-min` `size-max` `size-fit` `size-{fraction}` `size-[value]` ---",
        "examples": [
          "size-px",
          "size-auto",
          "size-full",
          "size-min",
          "size-max",
          "size-fit",
          "size-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/size-width-+-height"
      }
    ]
  },
  {
    "id": "typography",
    "title": "Typography",
    "items": [
      {
        "name": "font-family",
        "summary": "`font-sans` `font-serif` `font-mono` `font-{custom}` (from `--font-*` theme vars) `font-[value]`",
        "examples": [
          "font-sans",
          "font-serif",
          "font-mono",
          "font-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/font-family"
      },
      {
        "name": "font-size",
        "summary": "`text-{xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl}` Each includes line-height. Override with `text-{size}/{leading}` (e.g., `text-lg/7`) `text-[value]` `text-(length:--var)`",
        "examples": [
          "text-lg/7",
          "text-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/font-size"
      },
      {
        "name": "font-weight",
        "summary": "`font-{thin|extralight|light|normal|medium|semibold|bold|extrabold|black}` (100-900)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/font-weight"
      },
      {
        "name": "font-style",
        "summary": "`italic` `not-italic` (normal)",
        "examples": [
          "italic",
          "not-italic"
        ],
        "docs": "https://tailwindcss.com/docs/font-style"
      },
      {
        "name": "font-smoothing",
        "summary": "`antialiased` (grayscale) `subpixel-antialiased` (auto)",
        "examples": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "docs": "https://tailwindcss.com/docs/font-smoothing"
      },
      {
        "name": "font-stretch",
        "summary": "`font-stretch-{ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded}` `font-stretch-{n%}` `font-stretch-[value]`",
        "examples": [
          "font-stretch-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/font-stretch"
      },
      {
        "name": "font-variant-numeric",
        "summary": "`normal-nums` `ordinal` `slashed-zero` `lining-nums` `oldstyle-nums` `proportional-nums` `tabular-nums` `diagonal-fractions` `stacked-fractions`",
        "examples": [
          "normal-nums",
          "ordinal",
          "slashed-zero",
          "lining-nums",
          "oldstyle-nums",
          "proportional-nums",
          "tabular-nums",
          "diagonal-fractions"
        ],
        "docs": "https://tailwindcss.com/docs/font-variant-numeric"
      },
      {
        "name": "letter-spacing",
        "summary": "`tracking-{tighter|tight|normal|wide|wider|widest}` `tracking-[value]`",
        "examples": [
          "tracking-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/letter-spacing"
      },
      {
        "name": "line-height",
        "summary": "`leading-none` (1) `leading-{n}` (spacing-based) `leading-[value]` Or via font-size modifier: `text-{size}/{n}` `text-{size}/[value]`",
        "examples": [
          "leading-none",
          "leading-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/line-height"
      },
      {
        "name": "line-clamp",
        "summary": "`line-clamp-{n}` `line-clamp-none` `line-clamp-[value]`",
        "examples": [
          "line-clamp-none",
          "line-clamp-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/line-clamp"
      },
      {
        "name": "list-style-type",
        "summary": "`list-none` `list-disc` `list-decimal` `list-[value]`",
        "examples": [
          "list-none",
          "list-disc",
          "list-decimal",
          "list-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/list-style-type"
      },
      {
        "name": "list-style-position",
        "summary": "`list-inside` `list-outside`",
        "examples": [
          "list-inside",
          "list-outside"
        ],
        "docs": "https://tailwindcss.com/docs/list-style-position"
      },
      {
        "name": "list-style-image",
        "summary": "`list-image-none` `list-image-[url(...)]`",
        "examples": [
          "list-image-none"
        ],
        "docs": "https://tailwindcss.com/docs/list-style-image"
      },
      {
        "name": "text-align",
        "summary": "`text-left` `text-center` `text-right` `text-justify` `text-start` `text-end`",
        "examples": [
          "text-left",
          "text-center",
          "text-right",
          "text-justify",
          "text-start",
          "text-end"
        ],
        "docs": "https://tailwindcss.com/docs/text-align"
      },
      {
        "name": "text-color",
        "summary": "`text-{color}-{shade}` (e.g., `text-blue-500`) `text-inherit` `text-current` `text-transparent` `text-black` `text-white` `text-{color}/{opacity}` (e.g., `text-black/50`) `text-[value]`",
        "examples": [
          "text-blue-500",
          "text-inherit",
          "text-current",
          "text-transparent",
          "text-black",
          "text-white",
          "text-black/50",
          "text-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-color"
      },
      {
        "name": "text-decoration-line",
        "summary": "`underline` `overline` `line-through` `no-underline` (none)",
        "examples": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "docs": "https://tailwindcss.com/docs/text-decoration-line"
      },
      {
        "name": "text-decoration-color",
        "summary": "`decoration-{color}-{shade}` `decoration-inherit` `decoration-current` `decoration-transparent` `decoration-[value]`",
        "examples": [
          "decoration-inherit",
          "decoration-current",
          "decoration-transparent",
          "decoration-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-decoration-color"
      },
      {
        "name": "text-decoration-style",
        "summary": "`decoration-solid` `decoration-double` `decoration-dotted` `decoration-dashed` `decoration-wavy`",
        "examples": [
          "decoration-solid",
          "decoration-double",
          "decoration-dotted",
          "decoration-dashed",
          "decoration-wavy"
        ],
        "docs": "https://tailwindcss.com/docs/text-decoration-style"
      },
      {
        "name": "text-decoration-thickness",
        "summary": "`decoration-auto` `decoration-from-font` `decoration-{n}` `decoration-[value]`",
        "examples": [
          "decoration-auto",
          "decoration-from-font",
          "decoration-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-decoration-thickness"
      },
      {
        "name": "text-underline-offset",
        "summary": "`underline-offset-auto` `underline-offset-{n}` `-underline-offset-{n}` `underline-offset-[value]`",
        "examples": [
          "underline-offset-auto",
          "underline-offset-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-underline-offset"
      },
      {
        "name": "text-transform",
        "summary": "`uppercase` `lowercase` `capitalize` `normal-case` (none)",
        "examples": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "docs": "https://tailwindcss.com/docs/text-transform"
      },
      {
        "name": "text-overflow",
        "summary": "`truncate` (overflow: hidden + text-overflow: ellipsis + white-space: nowrap) `text-ellipsis` `text-clip`",
        "examples": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "docs": "https://tailwindcss.com/docs/text-overflow"
      },
      {
        "name": "text-wrap",
        "summary": "`text-wrap` `text-nowrap` `text-balance` `text-pretty`",
        "examples": [
          "text-wrap",
          "text-nowrap",
          "text-balance",
          "text-pretty"
        ],
        "docs": "https://tailwindcss.com/docs/text-wrap"
      },
      {
        "name": "text-indent",
        "summary": "`indent-{n}` `-indent-{n}` `indent-px` `-indent-px` `indent-[value]`",
        "examples": [
          "indent-px",
          "-indent-px",
          "indent-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-indent"
      },
      {
        "name": "vertical-align",
        "summary": "`align-{baseline|top|middle|bottom|text-top|text-bottom|sub|super}` `align-[value]`",
        "examples": [
          "align-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/vertical-align"
      },
      {
        "name": "white-space",
        "summary": "`whitespace-normal` `whitespace-nowrap` `whitespace-pre` `whitespace-pre-line` `whitespace-pre-wrap` `whitespace-break-spaces`",
        "examples": [
          "whitespace-normal",
          "whitespace-nowrap",
          "whitespace-pre",
          "whitespace-pre-line",
          "whitespace-pre-wrap",
          "whitespace-break-spaces"
        ],
        "docs": "https://tailwindcss.com/docs/white-space"
      },
      {
        "name": "word-break",
        "summary": "`break-normal` `break-all` `break-keep`",
        "examples": [
          "break-normal",
          "break-all",
          "break-keep"
        ],
        "docs": "https://tailwindcss.com/docs/word-break"
      },
      {
        "name": "overflow-wrap",
        "summary": "`wrap-break-word` `wrap-anywhere` `wrap-normal`",
        "examples": [
          "wrap-break-word",
          "wrap-anywhere",
          "wrap-normal"
        ],
        "docs": "https://tailwindcss.com/docs/overflow-wrap"
      },
      {
        "name": "hyphens",
        "summary": "`hyphens-none` `hyphens-manual` `hyphens-auto`",
        "examples": [
          "hyphens-none",
          "hyphens-manual",
          "hyphens-auto"
        ],
        "docs": "https://tailwindcss.com/docs/hyphens"
      },
      {
        "name": "content",
        "summary": "`content-none` `content-[value]` (e.g., `content-['hello']`) ---",
        "examples": [
          "content-none",
          "content-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/content"
      }
    ]
  },
  {
    "id": "backgrounds",
    "title": "Backgrounds",
    "items": [
      {
        "name": "background-color",
        "summary": "`bg-{color}-{shade}` `bg-inherit` `bg-current` `bg-transparent` `bg-black` `bg-white` `bg-{color}/{opacity}` `bg-[value]`",
        "examples": [
          "bg-inherit",
          "bg-current",
          "bg-transparent",
          "bg-black",
          "bg-white",
          "bg-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/background-color"
      },
      {
        "name": "background-image",
        "summary": "`bg-none` `bg-linear-{to-t|to-tr|to-r|to-br|to-b|to-bl|to-l|to-tl}` (linear gradients) `bg-linear-[angle]` (e.g., `bg-linear-[45deg]`) `bg-radial` `bg-radial-[shape]` `bg-conic` `bg-conic-[angle]` `bg-[url(...)]` `bg-[va",
        "examples": [
          "bg-none",
          "bg-linear-[angle]",
          "bg-linear-[45deg]",
          "bg-radial",
          "bg-radial-[shape]",
          "bg-conic",
          "bg-conic-[angle]",
          "bg-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/background-image"
      },
      {
        "name": "background-position",
        "summary": "`bg-{top|bottom|left|right|center}` `bg-{top-left|top-right|bottom-left|bottom-right}` `bg-position-[value]`",
        "examples": [
          "bg-position-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/background-position"
      },
      {
        "name": "background-size",
        "summary": "`bg-auto` `bg-cover` `bg-contain` `bg-size-[value]`",
        "examples": [
          "bg-auto",
          "bg-cover",
          "bg-contain",
          "bg-size-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/background-size"
      },
      {
        "name": "background-repeat",
        "summary": "`bg-repeat` `bg-no-repeat` `bg-repeat-x` `bg-repeat-y` `bg-repeat-round` `bg-repeat-space`",
        "examples": [
          "bg-repeat",
          "bg-no-repeat",
          "bg-repeat-x",
          "bg-repeat-y",
          "bg-repeat-round",
          "bg-repeat-space"
        ],
        "docs": "https://tailwindcss.com/docs/background-repeat"
      },
      {
        "name": "background-attachment",
        "summary": "`bg-fixed` `bg-local` `bg-scroll`",
        "examples": [
          "bg-fixed",
          "bg-local",
          "bg-scroll"
        ],
        "docs": "https://tailwindcss.com/docs/background-attachment"
      },
      {
        "name": "background-origin",
        "summary": "`bg-origin-border` `bg-origin-padding` `bg-origin-content`",
        "examples": [
          "bg-origin-border",
          "bg-origin-padding",
          "bg-origin-content"
        ],
        "docs": "https://tailwindcss.com/docs/background-origin"
      },
      {
        "name": "background-clip",
        "summary": "`bg-clip-border` `bg-clip-padding` `bg-clip-content` `bg-clip-text` ---",
        "examples": [
          "bg-clip-border",
          "bg-clip-padding",
          "bg-clip-content",
          "bg-clip-text"
        ],
        "docs": "https://tailwindcss.com/docs/background-clip"
      }
    ]
  },
  {
    "id": "borders",
    "title": "Borders",
    "items": [
      {
        "name": "border-width",
        "summary": "`border` (1px all) `border-{n}` `border-{t|r|b|l|x|y}` `border-{t|r|b|l|x|y}-{n}` `border-{s|e}` (inline start/end) `border-[value]`",
        "examples": [
          "border",
          "border-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/border-width"
      },
      {
        "name": "border-color",
        "summary": "`border-{color}-{shade}` `border-inherit` `border-current` `border-transparent` `border-{t|r|b|l|x|y}-{color}` `border-{s|e}-{color}` `border-[value]`",
        "examples": [
          "border-inherit",
          "border-current",
          "border-transparent",
          "border-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/border-color"
      },
      {
        "name": "border-style",
        "summary": "`border-solid` `border-dashed` `border-dotted` `border-double` `border-hidden` `border-none`",
        "examples": [
          "border-solid",
          "border-dashed",
          "border-dotted",
          "border-double",
          "border-hidden",
          "border-none"
        ],
        "docs": "https://tailwindcss.com/docs/border-style"
      },
      {
        "name": "border-radius",
        "summary": "`rounded-{xs|sm|md|lg|xl|2xl|3xl|4xl}` `rounded-none` `rounded-full` `rounded-{t|r|b|l|tl|tr|br|bl|s|e|ss|se|es|ee}-{size}` `rounded-[value]`",
        "examples": [
          "rounded-none",
          "rounded-full",
          "rounded-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/border-radius"
      },
      {
        "name": "divide-width",
        "summary": "`divide-x` `divide-x-{n}` `divide-y` `divide-y-{n}` `divide-x-reverse` `divide-y-reverse`",
        "examples": [
          "divide-x",
          "divide-y",
          "divide-x-reverse",
          "divide-y-reverse"
        ],
        "docs": "https://tailwindcss.com/docs/divide-width"
      },
      {
        "name": "divide-color",
        "summary": "`divide-{color}-{shade}` `divide-inherit` `divide-current` `divide-transparent`",
        "examples": [
          "divide-inherit",
          "divide-current",
          "divide-transparent"
        ],
        "docs": "https://tailwindcss.com/docs/divide-color"
      },
      {
        "name": "divide-style",
        "summary": "`divide-solid` `divide-dashed` `divide-dotted` `divide-double` `divide-none`",
        "examples": [
          "divide-solid",
          "divide-dashed",
          "divide-dotted",
          "divide-double",
          "divide-none"
        ],
        "docs": "https://tailwindcss.com/docs/divide-style"
      },
      {
        "name": "border-collapse",
        "summary": "`border-collapse` `border-separate`",
        "examples": [
          "border-collapse",
          "border-separate"
        ],
        "docs": "https://tailwindcss.com/docs/border-collapse"
      },
      {
        "name": "border-spacing",
        "summary": "`border-spacing-{n}` `border-spacing-x-{n}` `border-spacing-y-{n}` `border-spacing-px` `border-spacing-[value]`",
        "examples": [
          "border-spacing-px",
          "border-spacing-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/border-spacing"
      },
      {
        "name": "outline-width",
        "summary": "`outline-{n}` `outline` (1px) `outline-[value]`",
        "examples": [
          "outline",
          "outline-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/outline-width"
      },
      {
        "name": "outline-color",
        "summary": "`outline-{color}-{shade}` `outline-inherit` `outline-current` `outline-transparent` `outline-[value]`",
        "examples": [
          "outline-inherit",
          "outline-current",
          "outline-transparent",
          "outline-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/outline-color"
      },
      {
        "name": "outline-style",
        "summary": "`outline-none` `outline-hidden` `outline-solid` `outline-dashed` `outline-dotted` `outline-double`",
        "examples": [
          "outline-none",
          "outline-hidden",
          "outline-solid",
          "outline-dashed",
          "outline-dotted",
          "outline-double"
        ],
        "docs": "https://tailwindcss.com/docs/outline-style"
      },
      {
        "name": "outline-offset",
        "summary": "`outline-offset-{n}` `-outline-offset-{n}` `outline-offset-[value]`",
        "examples": [
          "outline-offset-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/outline-offset"
      },
      {
        "name": "ring (box-shadow based outline)",
        "summary": "`ring` (1px) `ring-{n}` `ring-{color}-{shade}` `ring-inherit` `ring-current` `ring-transparent` `ring-[value]`",
        "examples": [
          "ring",
          "ring-inherit",
          "ring-current",
          "ring-transparent",
          "ring-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/ring-box-shadow-based-outline"
      },
      {
        "name": "inset-ring (inset box-shadow based outline)",
        "summary": "`inset-ring` (1px) `inset-ring-{n}` `inset-ring-{color}-{shade}` `inset-ring-inherit` `inset-ring-current` `inset-ring-transparent` `inset-ring-[value]` ---",
        "examples": [
          "inset-ring",
          "inset-ring-inherit",
          "inset-ring-current",
          "inset-ring-transparent",
          "inset-ring-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/inset-ring-inset-box-shadow-based-outline"
      }
    ]
  },
  {
    "id": "effects",
    "title": "Effects",
    "items": [
      {
        "name": "box-shadow",
        "summary": "`shadow-{2xs|xs|sm|md|lg|xl|2xl}` `shadow-none` `shadow-{color}-{shade}` (sets shadow color) `shadow-[value]`",
        "examples": [
          "shadow-none",
          "shadow-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/box-shadow"
      },
      {
        "name": "inset-shadow",
        "summary": "`inset-shadow-{2xs|xs|sm}` `inset-shadow-none` `inset-shadow-{color}-{shade}`",
        "examples": [
          "inset-shadow-none"
        ],
        "docs": "https://tailwindcss.com/docs/inset-shadow"
      },
      {
        "name": "text-shadow",
        "summary": "`text-shadow-{2xs|xs|sm|md|lg}` `text-shadow-none` `text-shadow-{color}-{shade}` `text-shadow-[value]`",
        "examples": [
          "text-shadow-none",
          "text-shadow-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/text-shadow"
      },
      {
        "name": "opacity",
        "summary": "`opacity-{n}` (0-100) `opacity-[value]`",
        "examples": [
          "opacity-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/opacity"
      },
      {
        "name": "mix-blend-mode",
        "summary": "`mix-blend-{normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity|plus-darker|plus-lighter}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mix-blend-mode"
      },
      {
        "name": "background-blend-mode",
        "summary": "`bg-blend-{...}` (same values as mix-blend)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/background-blend-mode"
      },
      {
        "name": "mask-image",
        "summary": "`mask-none` `mask-[value]` Linear: `mask-linear-{n}` `mask-{t|r|b|l}-from-{n|%}` `mask-{t|r|b|l}-to-{n|%}` Radial: `mask-radial-from-{n|%}` `mask-radial-to-{n|%}` `mask-radial-at-{position}` `mask-circle` `mask-ellipse` ",
        "examples": [
          "mask-none",
          "mask-[value]",
          "mask-circle",
          "mask-ellipse"
        ],
        "docs": "https://tailwindcss.com/docs/mask-image"
      },
      {
        "name": "mask-size",
        "summary": "`mask-auto` `mask-cover` `mask-contain` `mask-[value]`",
        "examples": [
          "mask-auto",
          "mask-cover",
          "mask-contain",
          "mask-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/mask-size"
      },
      {
        "name": "mask-position",
        "summary": "`mask-{center|top|bottom|left|right|...}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-position"
      },
      {
        "name": "mask-repeat",
        "summary": "`mask-repeat` `mask-no-repeat` `mask-repeat-x` `mask-repeat-y` `mask-repeat-round` `mask-repeat-space`",
        "examples": [
          "mask-repeat",
          "mask-no-repeat",
          "mask-repeat-x",
          "mask-repeat-y",
          "mask-repeat-round",
          "mask-repeat-space"
        ],
        "docs": "https://tailwindcss.com/docs/mask-repeat"
      },
      {
        "name": "mask-origin",
        "summary": "`mask-origin-{border|padding|content}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-origin"
      },
      {
        "name": "mask-clip",
        "summary": "`mask-clip-{border|padding|content|no-clip}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-clip"
      },
      {
        "name": "mask-composite",
        "summary": "`mask-composite-{add|subtract|intersect|exclude}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-composite"
      },
      {
        "name": "mask-mode",
        "summary": "`mask-mode-{alpha|luminance|match-source}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-mode"
      },
      {
        "name": "mask-type",
        "summary": "`mask-type-{alpha|luminance}` ---",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/mask-type"
      }
    ]
  },
  {
    "id": "filters",
    "title": "Filters",
    "items": [
      {
        "name": "blur",
        "summary": "`blur-{xs|sm|md|lg|xl|2xl|3xl}` `blur-none` `blur-[value]`",
        "examples": [
          "blur-none",
          "blur-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/blur"
      },
      {
        "name": "brightness",
        "summary": "`brightness-{n}` (%) `brightness-[value]`",
        "examples": [
          "brightness-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/brightness"
      },
      {
        "name": "contrast",
        "summary": "`contrast-{n}` (%) `contrast-[value]`",
        "examples": [
          "contrast-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/contrast"
      },
      {
        "name": "grayscale",
        "summary": "`grayscale` (100%) `grayscale-{n}` (%) `grayscale-[value]`",
        "examples": [
          "grayscale",
          "grayscale-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/grayscale"
      },
      {
        "name": "hue-rotate",
        "summary": "`hue-rotate-{n}` `-hue-rotate-{n}` (negative) `hue-rotate-[value]`",
        "examples": [
          "hue-rotate-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/hue-rotate"
      },
      {
        "name": "invert",
        "summary": "`invert` (100%) `invert-{n}` (%) `invert-[value]`",
        "examples": [
          "invert",
          "invert-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/invert"
      },
      {
        "name": "saturate",
        "summary": "`saturate-{n}` (%) `saturate-[value]`",
        "examples": [
          "saturate-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/saturate"
      },
      {
        "name": "sepia",
        "summary": "`sepia` (100%) `sepia-{n}` (%) `sepia-[value]`",
        "examples": [
          "sepia",
          "sepia-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/sepia"
      },
      {
        "name": "drop-shadow",
        "summary": "`drop-shadow-{xs|sm|md|lg|xl|2xl}` `drop-shadow-none` `drop-shadow-{color}-{shade}` `drop-shadow-[value]` Backdrop filter utilities compose on `backdrop-filter`. Reset with `backdrop-filter-none`.",
        "examples": [
          "drop-shadow-none",
          "drop-shadow-[value]",
          "backdrop-filter",
          "backdrop-filter-none"
        ],
        "docs": "https://tailwindcss.com/docs/drop-shadow"
      },
      {
        "name": "backdrop-blur",
        "summary": "`backdrop-blur-{xs|sm|md|lg|xl|2xl|3xl}` `backdrop-blur-none`",
        "examples": [
          "backdrop-blur-none"
        ],
        "docs": "https://tailwindcss.com/docs/backdrop-blur"
      },
      {
        "name": "backdrop-brightness",
        "summary": "`backdrop-brightness-{n}` (%)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/backdrop-brightness"
      },
      {
        "name": "backdrop-contrast",
        "summary": "`backdrop-contrast-{n}` (%)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/backdrop-contrast"
      },
      {
        "name": "backdrop-grayscale",
        "summary": "`backdrop-grayscale` (100%) `backdrop-grayscale-{n}` (%)",
        "examples": [
          "backdrop-grayscale"
        ],
        "docs": "https://tailwindcss.com/docs/backdrop-grayscale"
      },
      {
        "name": "backdrop-hue-rotate",
        "summary": "`backdrop-hue-rotate-{n}` `-backdrop-hue-rotate-{n}` (negative)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/backdrop-hue-rotate"
      },
      {
        "name": "backdrop-invert",
        "summary": "`backdrop-invert` (100%) `backdrop-invert-{n}` (%)",
        "examples": [
          "backdrop-invert"
        ],
        "docs": "https://tailwindcss.com/docs/backdrop-invert"
      },
      {
        "name": "backdrop-opacity",
        "summary": "`backdrop-opacity-{n}` (0-100)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/backdrop-opacity"
      },
      {
        "name": "backdrop-saturate",
        "summary": "`backdrop-saturate-{n}` (%)",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/backdrop-saturate"
      },
      {
        "name": "backdrop-sepia",
        "summary": "`backdrop-sepia` (100%) `backdrop-sepia-{n}` (%) ---",
        "examples": [
          "backdrop-sepia"
        ],
        "docs": "https://tailwindcss.com/docs/backdrop-sepia"
      }
    ]
  },
  {
    "id": "tables",
    "title": "Tables",
    "items": [
      {
        "name": "table-layout",
        "summary": "`table-auto` `table-fixed`",
        "examples": [
          "table-auto",
          "table-fixed"
        ],
        "docs": "https://tailwindcss.com/docs/table-layout"
      },
      {
        "name": "caption-side",
        "summary": "`caption-top` `caption-bottom` ---",
        "examples": [
          "caption-top",
          "caption-bottom"
        ],
        "docs": "https://tailwindcss.com/docs/caption-side"
      }
    ]
  },
  {
    "id": "transitions-animation",
    "title": "Transitions & Animation",
    "items": [
      {
        "name": "transition-property",
        "summary": "`transition` (color, bg, border, text-decoration, fill, stroke, opacity, shadow, transform, filter, backdrop-filter) `transition-all` `transition-colors` `transition-opacity` `transition-shadow` `transition-transform` `t",
        "examples": [
          "transition",
          "transition-all",
          "transition-colors",
          "transition-opacity",
          "transition-shadow",
          "transition-transform",
          "transition-none",
          "transition-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transition-property"
      },
      {
        "name": "transition-behavior",
        "summary": "`transition-normal` `transition-discrete`",
        "examples": [
          "transition-normal",
          "transition-discrete"
        ],
        "docs": "https://tailwindcss.com/docs/transition-behavior"
      },
      {
        "name": "transition-duration",
        "summary": "`duration-{n}` (ms) `duration-[value]`",
        "examples": [
          "duration-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transition-duration"
      },
      {
        "name": "transition-timing-function",
        "summary": "`ease-linear` `ease-in` `ease-out` `ease-in-out` `ease-[value]`",
        "examples": [
          "ease-linear",
          "ease-in",
          "ease-out",
          "ease-in-out",
          "ease-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transition-timing-function"
      },
      {
        "name": "transition-delay",
        "summary": "`delay-{n}` (ms) `delay-[value]`",
        "examples": [
          "delay-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transition-delay"
      },
      {
        "name": "animation",
        "summary": "`animate-none` `animate-spin` `animate-ping` `animate-pulse` `animate-bounce` `animate-{custom}` (from `--animate-*` theme vars) `animate-[value]` ---",
        "examples": [
          "animate-none",
          "animate-spin",
          "animate-ping",
          "animate-pulse",
          "animate-bounce",
          "animate-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/animation"
      }
    ]
  },
  {
    "id": "transforms",
    "title": "Transforms",
    "items": [
      {
        "name": "transform",
        "summary": "Transforms are composable. Each utility adds to the transform: `transform-gpu` `transform-cpu` `transform-none` `transform-[value]`",
        "examples": [
          "transform-gpu",
          "transform-cpu",
          "transform-none",
          "transform-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transform"
      },
      {
        "name": "scale",
        "summary": "`scale-{n}` (%) `-scale-{n}` `scale-none` `scale-3d` `scale-x-{n}` `scale-y-{n}` `scale-z-{n}` `scale-[value]`",
        "examples": [
          "scale-none",
          "scale-3d",
          "scale-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/scale"
      },
      {
        "name": "rotate",
        "summary": "`rotate-{n}` (degrees) `-rotate-{n}` `rotate-none` `rotate-x-{n}` `rotate-y-{n}` `rotate-z-{n}` (3D rotations) `rotate-[value]`",
        "examples": [
          "rotate-none",
          "rotate-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/rotate"
      },
      {
        "name": "translate",
        "summary": "`translate-{n}` (both axes) `translate-x-{n}` `translate-y-{n}` `translate-z-{n}` (spacing scale) `translate-{x|y}-{fraction}` `translate-{x|y}-full` `translate-{x|y}-px` `-translate-{...}` (negative) `translate-none` `t",
        "examples": [
          "translate-none",
          "translate-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/translate"
      },
      {
        "name": "skew",
        "summary": "`skew-{n}` `-skew-{n}` (both axes, degrees) `skew-x-{n}` `skew-y-{n}` `-skew-x-{n}` `-skew-y-{n}` `skew-[value]`",
        "examples": [
          "skew-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/skew"
      },
      {
        "name": "transform-origin",
        "summary": "`origin-{center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left}` `origin-[value]`",
        "examples": [
          "origin-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/transform-origin"
      },
      {
        "name": "transform-style",
        "summary": "`transform-3d` (preserve-3d) `transform-flat` (flat)",
        "examples": [
          "transform-3d",
          "transform-flat"
        ],
        "docs": "https://tailwindcss.com/docs/transform-style"
      },
      {
        "name": "perspective",
        "summary": "`perspective-{dramatic|near|normal|midrange|distant}` `perspective-none` (100px, 300px, 500px, 800px, 1200px) `perspective-[value]`",
        "examples": [
          "perspective-none",
          "perspective-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/perspective"
      },
      {
        "name": "perspective-origin",
        "summary": "`perspective-origin-{center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left}` `perspective-origin-[value]`",
        "examples": [
          "perspective-origin-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/perspective-origin"
      },
      {
        "name": "backface-visibility",
        "summary": "`backface-visible` `backface-hidden` ---",
        "examples": [
          "backface-visible",
          "backface-hidden"
        ],
        "docs": "https://tailwindcss.com/docs/backface-visibility"
      }
    ]
  },
  {
    "id": "interactivity",
    "title": "Interactivity",
    "items": [
      {
        "name": "accent-color",
        "summary": "`accent-{color}-{shade}` `accent-inherit` `accent-current` `accent-transparent` `accent-[value]`",
        "examples": [
          "accent-inherit",
          "accent-current",
          "accent-transparent",
          "accent-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/accent-color"
      },
      {
        "name": "appearance",
        "summary": "`appearance-none` `appearance-auto`",
        "examples": [
          "appearance-none",
          "appearance-auto"
        ],
        "docs": "https://tailwindcss.com/docs/appearance"
      },
      {
        "name": "caret-color",
        "summary": "`caret-{color}-{shade}` `caret-inherit` `caret-current` `caret-transparent` `caret-[value]`",
        "examples": [
          "caret-inherit",
          "caret-current",
          "caret-transparent",
          "caret-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/caret-color"
      },
      {
        "name": "color-scheme",
        "summary": "`scheme-normal` `scheme-light` `scheme-dark` `scheme-light-dark` `scheme-only-dark` `scheme-only-light`",
        "examples": [
          "scheme-normal",
          "scheme-light",
          "scheme-dark",
          "scheme-light-dark",
          "scheme-only-dark",
          "scheme-only-light"
        ],
        "docs": "https://tailwindcss.com/docs/color-scheme"
      },
      {
        "name": "cursor",
        "summary": "`cursor-{auto|default|pointer|wait|text|move|help|not-allowed|none|context-menu|progress|cell|crosshair|vertical-text|alias|copy|no-drop|grab|grabbing|all-scroll|col-resize|row-resize|n-resize|e-resize|s-resize|w-resize|",
        "examples": [
          "cursor-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/cursor"
      },
      {
        "name": "field-sizing",
        "summary": "`field-sizing-fixed` `field-sizing-content`",
        "examples": [
          "field-sizing-fixed",
          "field-sizing-content"
        ],
        "docs": "https://tailwindcss.com/docs/field-sizing"
      },
      {
        "name": "pointer-events",
        "summary": "`pointer-events-auto` `pointer-events-none`",
        "examples": [
          "pointer-events-auto",
          "pointer-events-none"
        ],
        "docs": "https://tailwindcss.com/docs/pointer-events"
      },
      {
        "name": "resize",
        "summary": "`resize` (both) `resize-none` `resize-x` `resize-y`",
        "examples": [
          "resize",
          "resize-none",
          "resize-x",
          "resize-y"
        ],
        "docs": "https://tailwindcss.com/docs/resize"
      },
      {
        "name": "scroll-behavior",
        "summary": "`scroll-auto` `scroll-smooth`",
        "examples": [
          "scroll-auto",
          "scroll-smooth"
        ],
        "docs": "https://tailwindcss.com/docs/scroll-behavior"
      },
      {
        "name": "scroll-margin",
        "summary": "`scroll-m-{n}` `scroll-mx-{n}` `scroll-my-{n}` `scroll-mt-{n}` `scroll-mr-{n}` `scroll-mb-{n}` `scroll-ml-{n}` `scroll-ms-{n}` `scroll-me-{n}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/scroll-margin"
      },
      {
        "name": "scroll-padding",
        "summary": "`scroll-p-{n}` `scroll-px-{n}` `scroll-py-{n}` `scroll-pt-{n}` `scroll-pr-{n}` `scroll-pb-{n}` `scroll-pl-{n}` `scroll-ps-{n}` `scroll-pe-{n}`",
        "examples": [],
        "docs": "https://tailwindcss.com/docs/scroll-padding"
      },
      {
        "name": "scroll-snap-type",
        "summary": "`snap-none` `snap-x` `snap-y` `snap-both` `snap-mandatory` `snap-proximity` (strictness modifiers)",
        "examples": [
          "snap-none",
          "snap-x",
          "snap-y",
          "snap-both",
          "snap-mandatory",
          "snap-proximity"
        ],
        "docs": "https://tailwindcss.com/docs/scroll-snap-type"
      },
      {
        "name": "scroll-snap-align",
        "summary": "`snap-start` `snap-end` `snap-center` `snap-align-none`",
        "examples": [
          "snap-start",
          "snap-end",
          "snap-center",
          "snap-align-none"
        ],
        "docs": "https://tailwindcss.com/docs/scroll-snap-align"
      },
      {
        "name": "scroll-snap-stop",
        "summary": "`snap-normal` `snap-always`",
        "examples": [
          "snap-normal",
          "snap-always"
        ],
        "docs": "https://tailwindcss.com/docs/scroll-snap-stop"
      },
      {
        "name": "touch-action",
        "summary": "`touch-auto` `touch-none` `touch-pan-x` `touch-pan-left` `touch-pan-right` `touch-pan-y` `touch-pan-up` `touch-pan-down` `touch-pinch-zoom` `touch-manipulation`",
        "examples": [
          "touch-auto",
          "touch-none",
          "touch-pan-x",
          "touch-pan-left",
          "touch-pan-right",
          "touch-pan-y",
          "touch-pan-up",
          "touch-pan-down"
        ],
        "docs": "https://tailwindcss.com/docs/touch-action"
      },
      {
        "name": "user-select",
        "summary": "`select-none` `select-text` `select-all` `select-auto`",
        "examples": [
          "select-none",
          "select-text",
          "select-all",
          "select-auto"
        ],
        "docs": "https://tailwindcss.com/docs/user-select"
      },
      {
        "name": "will-change",
        "summary": "`will-change-auto` `will-change-scroll` `will-change-contents` `will-change-transform` `will-change-[value]` ---",
        "examples": [
          "will-change-auto",
          "will-change-scroll",
          "will-change-contents",
          "will-change-transform",
          "will-change-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/will-change"
      }
    ]
  },
  {
    "id": "svg",
    "title": "SVG",
    "items": [
      {
        "name": "fill",
        "summary": "`fill-{color}-{shade}` `fill-none` `fill-inherit` `fill-current` `fill-transparent` `fill-[value]`",
        "examples": [
          "fill-none",
          "fill-inherit",
          "fill-current",
          "fill-transparent",
          "fill-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/fill"
      },
      {
        "name": "stroke",
        "summary": "`stroke-{color}-{shade}` `stroke-none` `stroke-inherit` `stroke-current` `stroke-transparent` `stroke-[value]`",
        "examples": [
          "stroke-none",
          "stroke-inherit",
          "stroke-current",
          "stroke-transparent",
          "stroke-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/stroke"
      },
      {
        "name": "stroke-width",
        "summary": "`stroke-{n}` `stroke-[value]` ---",
        "examples": [
          "stroke-[value]"
        ],
        "docs": "https://tailwindcss.com/docs/stroke-width"
      }
    ]
  },
  {
    "id": "accessibility",
    "title": "Accessibility",
    "items": [
      {
        "name": "forced-color-adjust",
        "summary": "`forced-color-adjust-auto` `forced-color-adjust-none` ---",
        "examples": [
          "forced-color-adjust-auto",
          "forced-color-adjust-none"
        ],
        "docs": "https://tailwindcss.com/docs/forced-color-adjust"
      }
    ]
  }
];

export const REFERENCE_SOURCE = "Adapted from Tailwind Labs draft llms.txt (md-endpoints branch). Official live site currently does not ship /llms.txt.";
export const OFFICIAL_DOCS = "https://tailwindcss.com/docs";
