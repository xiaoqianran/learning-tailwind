/**
 * 1:1 migration of official Tailwind CSS docs sidebar.
 * Source: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/app/(docs)/docs/index.tsx
 */
export type OfficialDocItem = {
  titleEn: string;
  titleZh: string;
  path: string;
  slug: string;
  docs: string;
  descriptionZh: string;
  examples: string[];
  lesson?: string;
};

export type OfficialDocSection = {
  id: string;
  titleEn: string;
  titleZh: string;
  items: OfficialDocItem[];
};

export const OFFICIAL_DOCS_SECTIONS: OfficialDocSection[] = [
  {
    "id": "getting-started",
    "titleEn": "Getting started",
    "items": [
      {
        "titleEn": "Installation",
        "path": "/docs/installation",
        "slug": "installation",
        "titleZh": "安装",
        "docs": "https://tailwindcss.com/docs/installation",
        "lesson": "setup",
        "descriptionZh": "安装 Tailwind：Vite、PostCSS、CLI、Play CDN 与框架指南。",
        "examples": []
      },
      {
        "titleEn": "Editor setup",
        "path": "/docs/editor-setup",
        "slug": "editor-setup",
        "titleZh": "编辑器设置",
        "docs": "https://tailwindcss.com/docs/editor-setup",
        "lesson": "editor-setup",
        "descriptionZh": "IntelliSense、Prettier 类名排序与编辑器体验。",
        "examples": []
      },
      {
        "titleEn": "Compatibility",
        "path": "/docs/compatibility",
        "slug": "compatibility",
        "titleZh": "浏览器兼容",
        "docs": "https://tailwindcss.com/docs/compatibility",
        "lesson": "compatibility",
        "descriptionZh": "浏览器兼容与现代 CSS 特性基线。",
        "examples": []
      },
      {
        "titleEn": "Upgrade guide",
        "path": "/docs/upgrade-guide",
        "slug": "upgrade-guide",
        "titleZh": "升级指南",
        "docs": "https://tailwindcss.com/docs/upgrade-guide",
        "lesson": "upgrade-guide",
        "descriptionZh": "v3 → v4 升级步骤与破坏性变更。",
        "examples": []
      }
    ],
    "titleZh": "入门 Getting started"
  },
  {
    "id": "core-concepts",
    "titleEn": "Core concepts",
    "items": [
      {
        "titleEn": "Styling with utility classes",
        "path": "/docs/styling-with-utility-classes",
        "slug": "styling-with-utility-classes",
        "titleZh": "用工具类写样式",
        "docs": "https://tailwindcss.com/docs/styling-with-utility-classes",
        "lesson": "utility-first",
        "descriptionZh": "Utility-first：用原子类组合界面。",
        "examples": []
      },
      {
        "titleEn": "Hover, focus, and other states",
        "path": "/docs/hover-focus-and-other-states",
        "slug": "hover-focus-and-other-states",
        "titleZh": "悬停、焦点与其他状态",
        "docs": "https://tailwindcss.com/docs/hover-focus-and-other-states",
        "lesson": "states",
        "descriptionZh": "伪类/伪元素、group、peer、ARIA、data 状态变体。",
        "examples": []
      },
      {
        "titleEn": "Responsive design",
        "path": "/docs/responsive-design",
        "slug": "responsive-design",
        "titleZh": "响应式设计",
        "docs": "https://tailwindcss.com/docs/responsive-design",
        "lesson": "responsive",
        "descriptionZh": "移动优先断点与响应式前缀。",
        "examples": []
      },
      {
        "titleEn": "Dark mode",
        "path": "/docs/dark-mode",
        "slug": "dark-mode",
        "titleZh": "暗色模式",
        "docs": "https://tailwindcss.com/docs/dark-mode",
        "lesson": "dark-mode",
        "descriptionZh": "dark 变体与 class/media 策略。",
        "examples": []
      },
      {
        "titleEn": "Theme variables",
        "path": "/docs/theme",
        "slug": "theme",
        "titleZh": "主题变量",
        "docs": "https://tailwindcss.com/docs/theme",
        "lesson": "custom",
        "descriptionZh": "@theme 设计令牌与主题命名空间。",
        "examples": []
      },
      {
        "titleEn": "Colors",
        "path": "/docs/colors",
        "slug": "colors",
        "titleZh": "颜色系统",
        "docs": "https://tailwindcss.com/docs/colors",
        "lesson": "colors",
        "descriptionZh": "默认色板、透明度与自定义颜色。",
        "examples": []
      },
      {
        "titleEn": "Adding custom styles",
        "path": "/docs/adding-custom-styles",
        "slug": "adding-custom-styles",
        "titleZh": "添加自定义样式",
        "docs": "https://tailwindcss.com/docs/adding-custom-styles",
        "lesson": "custom-styles",
        "descriptionZh": "任意值、自定义 utility/variant、扩展主题。",
        "examples": []
      },
      {
        "titleEn": "Detecting classes in source files",
        "path": "/docs/detecting-classes-in-source-files",
        "slug": "detecting-classes-in-source-files",
        "titleZh": "源码中检测类名",
        "docs": "https://tailwindcss.com/docs/detecting-classes-in-source-files",
        "lesson": "detecting-classes",
        "descriptionZh": "类名扫描、动态拼接陷阱、@source。",
        "examples": []
      },
      {
        "titleEn": "Functions and directives",
        "path": "/docs/functions-and-directives",
        "slug": "functions-and-directives",
        "titleZh": "函数与指令",
        "docs": "https://tailwindcss.com/docs/functions-and-directives",
        "lesson": "directives",
        "descriptionZh": "@import @theme @utility @apply、--spacing/--alpha。",
        "examples": []
      }
    ],
    "titleZh": "核心概念 Core concepts"
  },
  {
    "id": "base-styles",
    "titleEn": "Base styles",
    "items": [
      {
        "titleEn": "Preflight",
        "path": "/docs/preflight",
        "slug": "preflight",
        "titleZh": "Preflight 基础重置",
        "docs": "https://tailwindcss.com/docs/preflight",
        "lesson": "preflight",
        "descriptionZh": "基于 modern-normalize 的全局基础重置。",
        "examples": []
      }
    ],
    "titleZh": "基础样式 Base styles"
  },
  {
    "id": "layout",
    "titleEn": "Layout",
    "items": [
      {
        "titleEn": "aspect-ratio",
        "path": "/docs/aspect-ratio",
        "slug": "aspect-ratio",
        "titleZh": "aspect-ratio",
        "docs": "https://tailwindcss.com/docs/aspect-ratio",
        "lesson": "sizing",
        "descriptionZh": "官网文档「aspect-ratio」——完整 class 表与示例见官方单页。",
        "examples": [
          "aspect-video",
          "aspect-square"
        ]
      },
      {
        "titleEn": "columns",
        "path": "/docs/columns",
        "slug": "columns",
        "titleZh": "columns",
        "docs": "https://tailwindcss.com/docs/columns",
        "lesson": "layout-display",
        "descriptionZh": "官网文档「columns」——完整 class 表与示例见官方单页。",
        "examples": [
          "columns-2",
          "columns-3"
        ]
      },
      {
        "titleEn": "break-after",
        "path": "/docs/break-after",
        "slug": "break-after",
        "titleZh": "break-after",
        "docs": "https://tailwindcss.com/docs/break-after",
        "descriptionZh": "官网文档「break-after」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "break-before",
        "path": "/docs/break-before",
        "slug": "break-before",
        "titleZh": "break-before",
        "docs": "https://tailwindcss.com/docs/break-before",
        "descriptionZh": "官网文档「break-before」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "break-inside",
        "path": "/docs/break-inside",
        "slug": "break-inside",
        "titleZh": "break-inside",
        "docs": "https://tailwindcss.com/docs/break-inside",
        "descriptionZh": "官网文档「break-inside」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "box-decoration-break",
        "path": "/docs/box-decoration-break",
        "slug": "box-decoration-break",
        "titleZh": "box-decoration-break",
        "docs": "https://tailwindcss.com/docs/box-decoration-break",
        "descriptionZh": "官网文档「box-decoration-break」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "box-sizing",
        "path": "/docs/box-sizing",
        "slug": "box-sizing",
        "titleZh": "box-sizing",
        "docs": "https://tailwindcss.com/docs/box-sizing",
        "descriptionZh": "官网文档「box-sizing」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "display",
        "path": "/docs/display",
        "slug": "display",
        "titleZh": "display",
        "docs": "https://tailwindcss.com/docs/display",
        "lesson": "layout-display",
        "descriptionZh": "官网文档「display」——完整 class 表与示例见官方单页。",
        "examples": [
          "block",
          "flex",
          "grid",
          "hidden"
        ]
      },
      {
        "titleEn": "float",
        "path": "/docs/float",
        "slug": "float",
        "titleZh": "float",
        "docs": "https://tailwindcss.com/docs/float",
        "lesson": "layout-display",
        "descriptionZh": "官网文档「float」——完整 class 表与示例见官方单页。",
        "examples": [
          "float-left",
          "float-right"
        ]
      },
      {
        "titleEn": "clear",
        "path": "/docs/clear",
        "slug": "clear",
        "titleZh": "clear",
        "docs": "https://tailwindcss.com/docs/clear",
        "descriptionZh": "官网文档「clear」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "isolation",
        "path": "/docs/isolation",
        "slug": "isolation",
        "titleZh": "isolation",
        "docs": "https://tailwindcss.com/docs/isolation",
        "descriptionZh": "官网文档「isolation」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "object-fit",
        "path": "/docs/object-fit",
        "slug": "object-fit",
        "titleZh": "object-fit",
        "docs": "https://tailwindcss.com/docs/object-fit",
        "lesson": "layout-display",
        "descriptionZh": "官网文档「object-fit」——完整 class 表与示例见官方单页。",
        "examples": [
          "object-cover",
          "object-contain"
        ]
      },
      {
        "titleEn": "object-position",
        "path": "/docs/object-position",
        "slug": "object-position",
        "titleZh": "object-position",
        "docs": "https://tailwindcss.com/docs/object-position",
        "descriptionZh": "官网文档「object-position」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "overflow",
        "path": "/docs/overflow",
        "slug": "overflow",
        "titleZh": "overflow",
        "docs": "https://tailwindcss.com/docs/overflow",
        "lesson": "layout-display",
        "descriptionZh": "官网文档「overflow」——完整 class 表与示例见官方单页。",
        "examples": [
          "overflow-hidden",
          "overflow-auto"
        ]
      },
      {
        "titleEn": "overscroll-behavior",
        "path": "/docs/overscroll-behavior",
        "slug": "overscroll-behavior",
        "titleZh": "overscroll-behavior",
        "docs": "https://tailwindcss.com/docs/overscroll-behavior",
        "descriptionZh": "官网文档「overscroll-behavior」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "position",
        "path": "/docs/position",
        "slug": "position",
        "titleZh": "position",
        "docs": "https://tailwindcss.com/docs/position",
        "lesson": "position",
        "descriptionZh": "官网文档「position」——完整 class 表与示例见官方单页。",
        "examples": [
          "relative",
          "absolute",
          "fixed",
          "sticky"
        ]
      },
      {
        "titleEn": "top / right / bottom / left",
        "path": "/docs/top-right-bottom-left",
        "slug": "top-right-bottom-left",
        "titleZh": "top / right / bottom / left",
        "docs": "https://tailwindcss.com/docs/top-right-bottom-left",
        "lesson": "position",
        "descriptionZh": "官网文档「top / right / bottom / left」——完整 class 表与示例见官方单页。",
        "examples": [
          "inset-0",
          "top-0",
          "-left-2"
        ]
      },
      {
        "titleEn": "visibility",
        "path": "/docs/visibility",
        "slug": "visibility",
        "titleZh": "visibility",
        "docs": "https://tailwindcss.com/docs/visibility",
        "descriptionZh": "官网文档「visibility」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "z-index",
        "path": "/docs/z-index",
        "slug": "z-index",
        "titleZh": "z-index",
        "docs": "https://tailwindcss.com/docs/z-index",
        "lesson": "position",
        "descriptionZh": "官网文档「z-index」——完整 class 表与示例见官方单页。",
        "examples": [
          "z-0",
          "z-10",
          "z-50"
        ]
      }
    ],
    "titleZh": "布局 Layout"
  },
  {
    "id": "flexbox-grid",
    "titleEn": "Flexbox & Grid",
    "items": [
      {
        "titleEn": "flex-basis",
        "path": "/docs/flex-basis",
        "slug": "flex-basis",
        "titleZh": "flex-basis",
        "docs": "https://tailwindcss.com/docs/flex-basis",
        "descriptionZh": "官网文档「flex-basis」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "flex-direction",
        "path": "/docs/flex-direction",
        "slug": "flex-direction",
        "titleZh": "flex-direction",
        "docs": "https://tailwindcss.com/docs/flex-direction",
        "descriptionZh": "官网文档「flex-direction」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "flex-wrap",
        "path": "/docs/flex-wrap",
        "slug": "flex-wrap",
        "titleZh": "flex-wrap",
        "docs": "https://tailwindcss.com/docs/flex-wrap",
        "descriptionZh": "官网文档「flex-wrap」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "flex",
        "path": "/docs/flex",
        "slug": "flex",
        "titleZh": "flex",
        "docs": "https://tailwindcss.com/docs/flex",
        "lesson": "flex",
        "descriptionZh": "官网文档「flex」——完整 class 表与示例见官方单页。",
        "examples": [
          "flex-1",
          "flex-none"
        ]
      },
      {
        "titleEn": "flex-grow",
        "path": "/docs/flex-grow",
        "slug": "flex-grow",
        "titleZh": "flex-grow",
        "docs": "https://tailwindcss.com/docs/flex-grow",
        "descriptionZh": "官网文档「flex-grow」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "flex-shrink",
        "path": "/docs/flex-shrink",
        "slug": "flex-shrink",
        "titleZh": "flex-shrink",
        "docs": "https://tailwindcss.com/docs/flex-shrink",
        "descriptionZh": "官网文档「flex-shrink」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "order",
        "path": "/docs/order",
        "slug": "order",
        "titleZh": "order",
        "docs": "https://tailwindcss.com/docs/order",
        "descriptionZh": "官网文档「order」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-template-columns",
        "path": "/docs/grid-template-columns",
        "slug": "grid-template-columns",
        "titleZh": "grid-template-columns",
        "docs": "https://tailwindcss.com/docs/grid-template-columns",
        "lesson": "grid",
        "descriptionZh": "官网文档「grid-template-columns」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-column",
        "path": "/docs/grid-column",
        "slug": "grid-column",
        "titleZh": "grid-column",
        "docs": "https://tailwindcss.com/docs/grid-column",
        "descriptionZh": "官网文档「grid-column」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-template-rows",
        "path": "/docs/grid-template-rows",
        "slug": "grid-template-rows",
        "titleZh": "grid-template-rows",
        "docs": "https://tailwindcss.com/docs/grid-template-rows",
        "descriptionZh": "官网文档「grid-template-rows」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-row",
        "path": "/docs/grid-row",
        "slug": "grid-row",
        "titleZh": "grid-row",
        "docs": "https://tailwindcss.com/docs/grid-row",
        "descriptionZh": "官网文档「grid-row」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-auto-flow",
        "path": "/docs/grid-auto-flow",
        "slug": "grid-auto-flow",
        "titleZh": "grid-auto-flow",
        "docs": "https://tailwindcss.com/docs/grid-auto-flow",
        "descriptionZh": "官网文档「grid-auto-flow」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-auto-columns",
        "path": "/docs/grid-auto-columns",
        "slug": "grid-auto-columns",
        "titleZh": "grid-auto-columns",
        "docs": "https://tailwindcss.com/docs/grid-auto-columns",
        "descriptionZh": "官网文档「grid-auto-columns」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "grid-auto-rows",
        "path": "/docs/grid-auto-rows",
        "slug": "grid-auto-rows",
        "titleZh": "grid-auto-rows",
        "docs": "https://tailwindcss.com/docs/grid-auto-rows",
        "descriptionZh": "官网文档「grid-auto-rows」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "gap",
        "path": "/docs/gap",
        "slug": "gap",
        "titleZh": "gap",
        "docs": "https://tailwindcss.com/docs/gap",
        "lesson": "grid",
        "descriptionZh": "官网文档「gap」——完整 class 表与示例见官方单页。",
        "examples": [
          "gap-2",
          "gap-4"
        ]
      },
      {
        "titleEn": "justify-content",
        "path": "/docs/justify-content",
        "slug": "justify-content",
        "titleZh": "justify-content",
        "docs": "https://tailwindcss.com/docs/justify-content",
        "descriptionZh": "官网文档「justify-content」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "justify-items",
        "path": "/docs/justify-items",
        "slug": "justify-items",
        "titleZh": "justify-items",
        "docs": "https://tailwindcss.com/docs/justify-items",
        "descriptionZh": "官网文档「justify-items」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "justify-self",
        "path": "/docs/justify-self",
        "slug": "justify-self",
        "titleZh": "justify-self",
        "docs": "https://tailwindcss.com/docs/justify-self",
        "descriptionZh": "官网文档「justify-self」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "align-content",
        "path": "/docs/align-content",
        "slug": "align-content",
        "titleZh": "align-content",
        "docs": "https://tailwindcss.com/docs/align-content",
        "descriptionZh": "官网文档「align-content」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "align-items",
        "path": "/docs/align-items",
        "slug": "align-items",
        "titleZh": "align-items",
        "docs": "https://tailwindcss.com/docs/align-items",
        "descriptionZh": "官网文档「align-items」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "align-self",
        "path": "/docs/align-self",
        "slug": "align-self",
        "titleZh": "align-self",
        "docs": "https://tailwindcss.com/docs/align-self",
        "descriptionZh": "官网文档「align-self」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "place-content",
        "path": "/docs/place-content",
        "slug": "place-content",
        "titleZh": "place-content",
        "docs": "https://tailwindcss.com/docs/place-content",
        "descriptionZh": "官网文档「place-content」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "place-items",
        "path": "/docs/place-items",
        "slug": "place-items",
        "titleZh": "place-items",
        "docs": "https://tailwindcss.com/docs/place-items",
        "descriptionZh": "官网文档「place-items」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "place-self",
        "path": "/docs/place-self",
        "slug": "place-self",
        "titleZh": "place-self",
        "docs": "https://tailwindcss.com/docs/place-self",
        "descriptionZh": "官网文档「place-self」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "Flexbox & Grid"
  },
  {
    "id": "spacing",
    "titleEn": "Spacing",
    "items": [
      {
        "titleEn": "padding",
        "path": "/docs/padding",
        "slug": "padding",
        "titleZh": "padding",
        "docs": "https://tailwindcss.com/docs/padding",
        "lesson": "spacing",
        "descriptionZh": "官网文档「padding」——完整 class 表与示例见官方单页。",
        "examples": [
          "p-4",
          "px-6",
          "py-2"
        ]
      },
      {
        "titleEn": "margin",
        "path": "/docs/margin",
        "slug": "margin",
        "titleZh": "margin",
        "docs": "https://tailwindcss.com/docs/margin",
        "lesson": "spacing",
        "descriptionZh": "官网文档「margin」——完整 class 表与示例见官方单页。",
        "examples": [
          "m-4",
          "mx-auto",
          "-mt-2"
        ]
      }
    ],
    "titleZh": "间距 Spacing"
  },
  {
    "id": "sizing",
    "titleEn": "Sizing",
    "items": [
      {
        "titleEn": "width",
        "path": "/docs/width",
        "slug": "width",
        "titleZh": "width",
        "docs": "https://tailwindcss.com/docs/width",
        "lesson": "sizing",
        "descriptionZh": "官网文档「width」——完整 class 表与示例见官方单页。",
        "examples": [
          "w-full",
          "w-1/2",
          "w-64"
        ]
      },
      {
        "titleEn": "min-width",
        "path": "/docs/min-width",
        "slug": "min-width",
        "titleZh": "min-width",
        "docs": "https://tailwindcss.com/docs/min-width",
        "descriptionZh": "官网文档「min-width」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "max-width",
        "path": "/docs/max-width",
        "slug": "max-width",
        "titleZh": "max-width",
        "docs": "https://tailwindcss.com/docs/max-width",
        "descriptionZh": "官网文档「max-width」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "height",
        "path": "/docs/height",
        "slug": "height",
        "titleZh": "height",
        "docs": "https://tailwindcss.com/docs/height",
        "lesson": "sizing",
        "descriptionZh": "官网文档「height」——完整 class 表与示例见官方单页。",
        "examples": [
          "h-full",
          "min-h-dvh"
        ]
      },
      {
        "titleEn": "min-height",
        "path": "/docs/min-height",
        "slug": "min-height",
        "titleZh": "min-height",
        "docs": "https://tailwindcss.com/docs/min-height",
        "descriptionZh": "官网文档「min-height」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "max-height",
        "path": "/docs/max-height",
        "slug": "max-height",
        "titleZh": "max-height",
        "docs": "https://tailwindcss.com/docs/max-height",
        "descriptionZh": "官网文档「max-height」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "inline-size",
        "path": "/docs/inline-size",
        "slug": "inline-size",
        "titleZh": "inline-size",
        "docs": "https://tailwindcss.com/docs/inline-size",
        "lesson": "sizing",
        "descriptionZh": "官网文档「inline-size」——完整 class 表与示例见官方单页。",
        "examples": [
          "min-inline-size-0"
        ]
      },
      {
        "titleEn": "min-inline-size",
        "path": "/docs/min-inline-size",
        "slug": "min-inline-size",
        "titleZh": "min-inline-size",
        "docs": "https://tailwindcss.com/docs/min-inline-size",
        "descriptionZh": "官网文档「min-inline-size」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "max-inline-size",
        "path": "/docs/max-inline-size",
        "slug": "max-inline-size",
        "titleZh": "max-inline-size",
        "docs": "https://tailwindcss.com/docs/max-inline-size",
        "descriptionZh": "官网文档「max-inline-size」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "block-size",
        "path": "/docs/block-size",
        "slug": "block-size",
        "titleZh": "block-size",
        "docs": "https://tailwindcss.com/docs/block-size",
        "lesson": "sizing",
        "descriptionZh": "官网文档「block-size」——完整 class 表与示例见官方单页。",
        "examples": [
          "block-size-full"
        ]
      },
      {
        "titleEn": "min-block-size",
        "path": "/docs/min-block-size",
        "slug": "min-block-size",
        "titleZh": "min-block-size",
        "docs": "https://tailwindcss.com/docs/min-block-size",
        "descriptionZh": "官网文档「min-block-size」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "max-block-size",
        "path": "/docs/max-block-size",
        "slug": "max-block-size",
        "titleZh": "max-block-size",
        "docs": "https://tailwindcss.com/docs/max-block-size",
        "descriptionZh": "官网文档「max-block-size」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "尺寸 Sizing"
  },
  {
    "id": "typography",
    "titleEn": "Typography",
    "items": [
      {
        "titleEn": "font-family",
        "path": "/docs/font-family",
        "slug": "font-family",
        "titleZh": "font-family",
        "docs": "https://tailwindcss.com/docs/font-family",
        "descriptionZh": "官网文档「font-family」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-size",
        "path": "/docs/font-size",
        "slug": "font-size",
        "titleZh": "font-size",
        "docs": "https://tailwindcss.com/docs/font-size",
        "lesson": "typography",
        "descriptionZh": "官网文档「font-size」——完整 class 表与示例见官方单页。",
        "examples": [
          "text-sm",
          "text-lg"
        ]
      },
      {
        "titleEn": "font-smoothing",
        "path": "/docs/font-smoothing",
        "slug": "font-smoothing",
        "titleZh": "font-smoothing",
        "docs": "https://tailwindcss.com/docs/font-smoothing",
        "descriptionZh": "官网文档「font-smoothing」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-style",
        "path": "/docs/font-style",
        "slug": "font-style",
        "titleZh": "font-style",
        "docs": "https://tailwindcss.com/docs/font-style",
        "descriptionZh": "官网文档「font-style」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-weight",
        "path": "/docs/font-weight",
        "slug": "font-weight",
        "titleZh": "font-weight",
        "docs": "https://tailwindcss.com/docs/font-weight",
        "descriptionZh": "官网文档「font-weight」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-stretch",
        "path": "/docs/font-stretch",
        "slug": "font-stretch",
        "titleZh": "font-stretch",
        "docs": "https://tailwindcss.com/docs/font-stretch",
        "descriptionZh": "官网文档「font-stretch」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-variant-numeric",
        "path": "/docs/font-variant-numeric",
        "slug": "font-variant-numeric",
        "titleZh": "font-variant-numeric",
        "docs": "https://tailwindcss.com/docs/font-variant-numeric",
        "descriptionZh": "官网文档「font-variant-numeric」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "font-feature-settings",
        "path": "/docs/font-feature-settings",
        "slug": "font-feature-settings",
        "titleZh": "font-feature-settings",
        "docs": "https://tailwindcss.com/docs/font-feature-settings",
        "descriptionZh": "官网文档「font-feature-settings」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "letter-spacing",
        "path": "/docs/letter-spacing",
        "slug": "letter-spacing",
        "titleZh": "letter-spacing",
        "docs": "https://tailwindcss.com/docs/letter-spacing",
        "descriptionZh": "官网文档「letter-spacing」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "line-clamp",
        "path": "/docs/line-clamp",
        "slug": "line-clamp",
        "titleZh": "line-clamp",
        "docs": "https://tailwindcss.com/docs/line-clamp",
        "descriptionZh": "官网文档「line-clamp」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "line-height",
        "path": "/docs/line-height",
        "slug": "line-height",
        "titleZh": "line-height",
        "docs": "https://tailwindcss.com/docs/line-height",
        "descriptionZh": "官网文档「line-height」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "list-style-image",
        "path": "/docs/list-style-image",
        "slug": "list-style-image",
        "titleZh": "list-style-image",
        "docs": "https://tailwindcss.com/docs/list-style-image",
        "descriptionZh": "官网文档「list-style-image」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "list-style-position",
        "path": "/docs/list-style-position",
        "slug": "list-style-position",
        "titleZh": "list-style-position",
        "docs": "https://tailwindcss.com/docs/list-style-position",
        "descriptionZh": "官网文档「list-style-position」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "list-style-type",
        "path": "/docs/list-style-type",
        "slug": "list-style-type",
        "titleZh": "list-style-type",
        "docs": "https://tailwindcss.com/docs/list-style-type",
        "lesson": "typography",
        "descriptionZh": "官网文档「list-style-type」——完整 class 表与示例见官方单页。",
        "examples": [
          "list-disc",
          "list-none"
        ]
      },
      {
        "titleEn": "text-align",
        "path": "/docs/text-align",
        "slug": "text-align",
        "titleZh": "text-align",
        "docs": "https://tailwindcss.com/docs/text-align",
        "descriptionZh": "官网文档「text-align」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "color",
        "path": "/docs/color",
        "slug": "color",
        "titleZh": "color",
        "docs": "https://tailwindcss.com/docs/color",
        "lesson": "typography",
        "descriptionZh": "官网文档「color」——完整 class 表与示例见官方单页。",
        "examples": [
          "text-sky-500",
          "text-slate-400"
        ]
      },
      {
        "titleEn": "text-decoration-line",
        "path": "/docs/text-decoration-line",
        "slug": "text-decoration-line",
        "titleZh": "text-decoration-line",
        "docs": "https://tailwindcss.com/docs/text-decoration-line",
        "lesson": "typography",
        "descriptionZh": "官网文档「text-decoration-line」——完整 class 表与示例见官方单页。",
        "examples": [
          "underline",
          "no-underline"
        ]
      },
      {
        "titleEn": "text-decoration-color",
        "path": "/docs/text-decoration-color",
        "slug": "text-decoration-color",
        "titleZh": "text-decoration-color",
        "docs": "https://tailwindcss.com/docs/text-decoration-color",
        "descriptionZh": "官网文档「text-decoration-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-decoration-style",
        "path": "/docs/text-decoration-style",
        "slug": "text-decoration-style",
        "titleZh": "text-decoration-style",
        "docs": "https://tailwindcss.com/docs/text-decoration-style",
        "descriptionZh": "官网文档「text-decoration-style」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-decoration-thickness",
        "path": "/docs/text-decoration-thickness",
        "slug": "text-decoration-thickness",
        "titleZh": "text-decoration-thickness",
        "docs": "https://tailwindcss.com/docs/text-decoration-thickness",
        "descriptionZh": "官网文档「text-decoration-thickness」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-underline-offset",
        "path": "/docs/text-underline-offset",
        "slug": "text-underline-offset",
        "titleZh": "text-underline-offset",
        "docs": "https://tailwindcss.com/docs/text-underline-offset",
        "descriptionZh": "官网文档「text-underline-offset」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-transform",
        "path": "/docs/text-transform",
        "slug": "text-transform",
        "titleZh": "text-transform",
        "docs": "https://tailwindcss.com/docs/text-transform",
        "descriptionZh": "官网文档「text-transform」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-overflow",
        "path": "/docs/text-overflow",
        "slug": "text-overflow",
        "titleZh": "text-overflow",
        "docs": "https://tailwindcss.com/docs/text-overflow",
        "descriptionZh": "官网文档「text-overflow」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-wrap",
        "path": "/docs/text-wrap",
        "slug": "text-wrap",
        "titleZh": "text-wrap",
        "docs": "https://tailwindcss.com/docs/text-wrap",
        "descriptionZh": "官网文档「text-wrap」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "text-indent",
        "path": "/docs/text-indent",
        "slug": "text-indent",
        "titleZh": "text-indent",
        "docs": "https://tailwindcss.com/docs/text-indent",
        "descriptionZh": "官网文档「text-indent」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "tab-size",
        "path": "/docs/tab-size",
        "slug": "tab-size",
        "titleZh": "tab-size",
        "docs": "https://tailwindcss.com/docs/tab-size",
        "descriptionZh": "官网文档「tab-size」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "vertical-align",
        "path": "/docs/vertical-align",
        "slug": "vertical-align",
        "titleZh": "vertical-align",
        "docs": "https://tailwindcss.com/docs/vertical-align",
        "descriptionZh": "官网文档「vertical-align」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "white-space",
        "path": "/docs/white-space",
        "slug": "white-space",
        "titleZh": "white-space",
        "docs": "https://tailwindcss.com/docs/white-space",
        "descriptionZh": "官网文档「white-space」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "word-break",
        "path": "/docs/word-break",
        "slug": "word-break",
        "titleZh": "word-break",
        "docs": "https://tailwindcss.com/docs/word-break",
        "descriptionZh": "官网文档「word-break」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "overflow-wrap",
        "path": "/docs/overflow-wrap",
        "slug": "overflow-wrap",
        "titleZh": "overflow-wrap",
        "docs": "https://tailwindcss.com/docs/overflow-wrap",
        "descriptionZh": "官网文档「overflow-wrap」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "hyphens",
        "path": "/docs/hyphens",
        "slug": "hyphens",
        "titleZh": "hyphens",
        "docs": "https://tailwindcss.com/docs/hyphens",
        "descriptionZh": "官网文档「hyphens」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "content",
        "path": "/docs/content",
        "slug": "content",
        "titleZh": "content",
        "docs": "https://tailwindcss.com/docs/content",
        "lesson": "typography",
        "descriptionZh": "官网文档「content」——完整 class 表与示例见官方单页。",
        "examples": [
          "before:content-['']"
        ]
      }
    ],
    "titleZh": "排版 Typography"
  },
  {
    "id": "backgrounds",
    "titleEn": "Backgrounds",
    "items": [
      {
        "titleEn": "background-attachment",
        "path": "/docs/background-attachment",
        "slug": "background-attachment",
        "titleZh": "background-attachment",
        "docs": "https://tailwindcss.com/docs/background-attachment",
        "descriptionZh": "官网文档「background-attachment」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-clip",
        "path": "/docs/background-clip",
        "slug": "background-clip",
        "titleZh": "background-clip",
        "docs": "https://tailwindcss.com/docs/background-clip",
        "descriptionZh": "官网文档「background-clip」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-color",
        "path": "/docs/background-color",
        "slug": "background-color",
        "titleZh": "background-color",
        "docs": "https://tailwindcss.com/docs/background-color",
        "lesson": "backgrounds",
        "descriptionZh": "官网文档「background-color」——完整 class 表与示例见官方单页。",
        "examples": [
          "bg-sky-500",
          "bg-slate-900"
        ]
      },
      {
        "titleEn": "background-image",
        "path": "/docs/background-image",
        "slug": "background-image",
        "titleZh": "background-image",
        "docs": "https://tailwindcss.com/docs/background-image",
        "lesson": "backgrounds",
        "descriptionZh": "官网文档「background-image」——完整 class 表与示例见官方单页。",
        "examples": [
          "bg-gradient-to-r",
          "from-sky-500",
          "to-indigo-500"
        ]
      },
      {
        "titleEn": "background-origin",
        "path": "/docs/background-origin",
        "slug": "background-origin",
        "titleZh": "background-origin",
        "docs": "https://tailwindcss.com/docs/background-origin",
        "descriptionZh": "官网文档「background-origin」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-position",
        "path": "/docs/background-position",
        "slug": "background-position",
        "titleZh": "background-position",
        "docs": "https://tailwindcss.com/docs/background-position",
        "descriptionZh": "官网文档「background-position」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-repeat",
        "path": "/docs/background-repeat",
        "slug": "background-repeat",
        "titleZh": "background-repeat",
        "docs": "https://tailwindcss.com/docs/background-repeat",
        "descriptionZh": "官网文档「background-repeat」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-size",
        "path": "/docs/background-size",
        "slug": "background-size",
        "titleZh": "background-size",
        "docs": "https://tailwindcss.com/docs/background-size",
        "descriptionZh": "官网文档「background-size」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "背景 Backgrounds"
  },
  {
    "id": "borders",
    "titleEn": "Borders",
    "items": [
      {
        "titleEn": "border-radius",
        "path": "/docs/border-radius",
        "slug": "border-radius",
        "titleZh": "border-radius",
        "docs": "https://tailwindcss.com/docs/border-radius",
        "lesson": "borders",
        "descriptionZh": "官网文档「border-radius」——完整 class 表与示例见官方单页。",
        "examples": [
          "rounded-md",
          "rounded-xl"
        ]
      },
      {
        "titleEn": "border-width",
        "path": "/docs/border-width",
        "slug": "border-width",
        "titleZh": "border-width",
        "docs": "https://tailwindcss.com/docs/border-width",
        "lesson": "borders",
        "descriptionZh": "官网文档「border-width」——完整 class 表与示例见官方单页。",
        "examples": [
          "border",
          "border-2"
        ]
      },
      {
        "titleEn": "border-color",
        "path": "/docs/border-color",
        "slug": "border-color",
        "titleZh": "border-color",
        "docs": "https://tailwindcss.com/docs/border-color",
        "descriptionZh": "官网文档「border-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "border-style",
        "path": "/docs/border-style",
        "slug": "border-style",
        "titleZh": "border-style",
        "docs": "https://tailwindcss.com/docs/border-style",
        "descriptionZh": "官网文档「border-style」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "outline-width",
        "path": "/docs/outline-width",
        "slug": "outline-width",
        "titleZh": "outline-width",
        "docs": "https://tailwindcss.com/docs/outline-width",
        "lesson": "borders",
        "descriptionZh": "官网文档「outline-width」——完整 class 表与示例见官方单页。",
        "examples": [
          "outline",
          "outline-2"
        ]
      },
      {
        "titleEn": "outline-color",
        "path": "/docs/outline-color",
        "slug": "outline-color",
        "titleZh": "outline-color",
        "docs": "https://tailwindcss.com/docs/outline-color",
        "descriptionZh": "官网文档「outline-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "outline-style",
        "path": "/docs/outline-style",
        "slug": "outline-style",
        "titleZh": "outline-style",
        "docs": "https://tailwindcss.com/docs/outline-style",
        "descriptionZh": "官网文档「outline-style」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "outline-offset",
        "path": "/docs/outline-offset",
        "slug": "outline-offset",
        "titleZh": "outline-offset",
        "docs": "https://tailwindcss.com/docs/outline-offset",
        "descriptionZh": "官网文档「outline-offset」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "边框 Borders"
  },
  {
    "id": "effects",
    "titleEn": "Effects",
    "items": [
      {
        "titleEn": "box-shadow",
        "path": "/docs/box-shadow",
        "slug": "box-shadow",
        "titleZh": "box-shadow",
        "docs": "https://tailwindcss.com/docs/box-shadow",
        "lesson": "effects",
        "descriptionZh": "官网文档「box-shadow」——完整 class 表与示例见官方单页。",
        "examples": [
          "shadow-sm",
          "shadow-lg"
        ]
      },
      {
        "titleEn": "text-shadow",
        "path": "/docs/text-shadow",
        "slug": "text-shadow",
        "titleZh": "text-shadow",
        "docs": "https://tailwindcss.com/docs/text-shadow",
        "lesson": "effects",
        "descriptionZh": "官网文档「text-shadow」——完整 class 表与示例见官方单页。",
        "examples": [
          "text-shadow-sm"
        ]
      },
      {
        "titleEn": "opacity",
        "path": "/docs/opacity",
        "slug": "opacity",
        "titleZh": "opacity",
        "docs": "https://tailwindcss.com/docs/opacity",
        "lesson": "effects",
        "descriptionZh": "官网文档「opacity」——完整 class 表与示例见官方单页。",
        "examples": [
          "opacity-50",
          "opacity-100"
        ]
      },
      {
        "titleEn": "mix-blend-mode",
        "path": "/docs/mix-blend-mode",
        "slug": "mix-blend-mode",
        "titleZh": "mix-blend-mode",
        "docs": "https://tailwindcss.com/docs/mix-blend-mode",
        "descriptionZh": "官网文档「mix-blend-mode」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "background-blend-mode",
        "path": "/docs/background-blend-mode",
        "slug": "background-blend-mode",
        "titleZh": "background-blend-mode",
        "docs": "https://tailwindcss.com/docs/background-blend-mode",
        "descriptionZh": "官网文档「background-blend-mode」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-clip",
        "path": "/docs/mask-clip",
        "slug": "mask-clip",
        "titleZh": "mask-clip",
        "docs": "https://tailwindcss.com/docs/mask-clip",
        "descriptionZh": "官网文档「mask-clip」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-composite",
        "path": "/docs/mask-composite",
        "slug": "mask-composite",
        "titleZh": "mask-composite",
        "docs": "https://tailwindcss.com/docs/mask-composite",
        "descriptionZh": "官网文档「mask-composite」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-image",
        "path": "/docs/mask-image",
        "slug": "mask-image",
        "titleZh": "mask-image",
        "docs": "https://tailwindcss.com/docs/mask-image",
        "lesson": "masks",
        "descriptionZh": "官网文档「mask-image」——完整 class 表与示例见官方单页。",
        "examples": [
          "mask-none"
        ]
      },
      {
        "titleEn": "mask-mode",
        "path": "/docs/mask-mode",
        "slug": "mask-mode",
        "titleZh": "mask-mode",
        "docs": "https://tailwindcss.com/docs/mask-mode",
        "descriptionZh": "官网文档「mask-mode」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-origin",
        "path": "/docs/mask-origin",
        "slug": "mask-origin",
        "titleZh": "mask-origin",
        "docs": "https://tailwindcss.com/docs/mask-origin",
        "descriptionZh": "官网文档「mask-origin」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-position",
        "path": "/docs/mask-position",
        "slug": "mask-position",
        "titleZh": "mask-position",
        "docs": "https://tailwindcss.com/docs/mask-position",
        "descriptionZh": "官网文档「mask-position」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-repeat",
        "path": "/docs/mask-repeat",
        "slug": "mask-repeat",
        "titleZh": "mask-repeat",
        "docs": "https://tailwindcss.com/docs/mask-repeat",
        "descriptionZh": "官网文档「mask-repeat」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-size",
        "path": "/docs/mask-size",
        "slug": "mask-size",
        "titleZh": "mask-size",
        "docs": "https://tailwindcss.com/docs/mask-size",
        "descriptionZh": "官网文档「mask-size」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "mask-type",
        "path": "/docs/mask-type",
        "slug": "mask-type",
        "titleZh": "mask-type",
        "docs": "https://tailwindcss.com/docs/mask-type",
        "descriptionZh": "官网文档「mask-type」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "效果 Effects"
  },
  {
    "id": "filters",
    "titleEn": "Filters",
    "items": [
      {
        "titleEn": "blur",
        "path": "/docs/filter-blur",
        "slug": "filter-blur",
        "titleZh": "blur",
        "docs": "https://tailwindcss.com/docs/filter-blur",
        "descriptionZh": "官网文档「blur」——完整 class 表与示例见官方单页。",
        "examples": [
          "blur-sm",
          "blur"
        ]
      },
      {
        "titleEn": "brightness",
        "path": "/docs/filter-brightness",
        "slug": "filter-brightness",
        "titleZh": "brightness",
        "docs": "https://tailwindcss.com/docs/filter-brightness",
        "descriptionZh": "官网文档「brightness」——完整 class 表与示例见官方单页。",
        "examples": [
          "brightness-sm",
          "brightness"
        ]
      },
      {
        "titleEn": "contrast",
        "path": "/docs/filter-contrast",
        "slug": "filter-contrast",
        "titleZh": "contrast",
        "docs": "https://tailwindcss.com/docs/filter-contrast",
        "descriptionZh": "官网文档「contrast」——完整 class 表与示例见官方单页。",
        "examples": [
          "contrast-sm",
          "contrast"
        ]
      },
      {
        "titleEn": "drop-shadow",
        "path": "/docs/filter-drop-shadow",
        "slug": "filter-drop-shadow",
        "titleZh": "drop-shadow",
        "docs": "https://tailwindcss.com/docs/filter-drop-shadow",
        "descriptionZh": "官网文档「drop-shadow」——完整 class 表与示例见官方单页。",
        "examples": [
          "drop-shadow-sm",
          "drop-shadow"
        ]
      },
      {
        "titleEn": "grayscale",
        "path": "/docs/filter-grayscale",
        "slug": "filter-grayscale",
        "titleZh": "grayscale",
        "docs": "https://tailwindcss.com/docs/filter-grayscale",
        "descriptionZh": "官网文档「grayscale」——完整 class 表与示例见官方单页。",
        "examples": [
          "grayscale-sm",
          "grayscale"
        ]
      },
      {
        "titleEn": "hue-rotate",
        "path": "/docs/filter-hue-rotate",
        "slug": "filter-hue-rotate",
        "titleZh": "hue-rotate",
        "docs": "https://tailwindcss.com/docs/filter-hue-rotate",
        "descriptionZh": "官网文档「hue-rotate」——完整 class 表与示例见官方单页。",
        "examples": [
          "hue-rotate-sm",
          "hue-rotate"
        ]
      },
      {
        "titleEn": "invert",
        "path": "/docs/filter-invert",
        "slug": "filter-invert",
        "titleZh": "invert",
        "docs": "https://tailwindcss.com/docs/filter-invert",
        "descriptionZh": "官网文档「invert」——完整 class 表与示例见官方单页。",
        "examples": [
          "invert-sm",
          "invert"
        ]
      },
      {
        "titleEn": "saturate",
        "path": "/docs/filter-saturate",
        "slug": "filter-saturate",
        "titleZh": "saturate",
        "docs": "https://tailwindcss.com/docs/filter-saturate",
        "descriptionZh": "官网文档「saturate」——完整 class 表与示例见官方单页。",
        "examples": [
          "saturate-sm",
          "saturate"
        ]
      },
      {
        "titleEn": "sepia",
        "path": "/docs/filter-sepia",
        "slug": "filter-sepia",
        "titleZh": "sepia",
        "docs": "https://tailwindcss.com/docs/filter-sepia",
        "descriptionZh": "官网文档「sepia」——完整 class 表与示例见官方单页。",
        "examples": [
          "sepia-sm",
          "sepia"
        ]
      },
      {
        "titleEn": "blur",
        "path": "/docs/backdrop-filter-blur",
        "slug": "backdrop-filter-blur",
        "titleZh": "blur",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-blur",
        "descriptionZh": "官网文档「blur」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-blur"
        ]
      },
      {
        "titleEn": "brightness",
        "path": "/docs/backdrop-filter-brightness",
        "slug": "backdrop-filter-brightness",
        "titleZh": "brightness",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-brightness",
        "descriptionZh": "官网文档「brightness」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-brightness"
        ]
      },
      {
        "titleEn": "contrast",
        "path": "/docs/backdrop-filter-contrast",
        "slug": "backdrop-filter-contrast",
        "titleZh": "contrast",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-contrast",
        "descriptionZh": "官网文档「contrast」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-contrast"
        ]
      },
      {
        "titleEn": "grayscale",
        "path": "/docs/backdrop-filter-grayscale",
        "slug": "backdrop-filter-grayscale",
        "titleZh": "grayscale",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-grayscale",
        "descriptionZh": "官网文档「grayscale」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-grayscale"
        ]
      },
      {
        "titleEn": "hue-rotate",
        "path": "/docs/backdrop-filter-hue-rotate",
        "slug": "backdrop-filter-hue-rotate",
        "titleZh": "hue-rotate",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-hue-rotate",
        "descriptionZh": "官网文档「hue-rotate」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-rotate"
        ]
      },
      {
        "titleEn": "invert",
        "path": "/docs/backdrop-filter-invert",
        "slug": "backdrop-filter-invert",
        "titleZh": "invert",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-invert",
        "descriptionZh": "官网文档「invert」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-invert"
        ]
      },
      {
        "titleEn": "opacity",
        "path": "/docs/backdrop-filter-opacity",
        "slug": "backdrop-filter-opacity",
        "titleZh": "opacity",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-opacity",
        "descriptionZh": "官网文档「opacity」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-opacity"
        ]
      },
      {
        "titleEn": "saturate",
        "path": "/docs/backdrop-filter-saturate",
        "slug": "backdrop-filter-saturate",
        "titleZh": "saturate",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-saturate",
        "descriptionZh": "官网文档「saturate」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-saturate"
        ]
      },
      {
        "titleEn": "sepia",
        "path": "/docs/backdrop-filter-sepia",
        "slug": "backdrop-filter-sepia",
        "titleZh": "sepia",
        "docs": "https://tailwindcss.com/docs/backdrop-filter-sepia",
        "descriptionZh": "官网文档「sepia」——完整 class 表与示例见官方单页。",
        "examples": [
          "backdrop-sepia"
        ]
      }
    ],
    "titleZh": "滤镜 Filters"
  },
  {
    "id": "tables",
    "titleEn": "Tables",
    "items": [
      {
        "titleEn": "border-collapse",
        "path": "/docs/border-collapse",
        "slug": "border-collapse",
        "titleZh": "border-collapse",
        "docs": "https://tailwindcss.com/docs/border-collapse",
        "descriptionZh": "官网文档「border-collapse」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "border-spacing",
        "path": "/docs/border-spacing",
        "slug": "border-spacing",
        "titleZh": "border-spacing",
        "docs": "https://tailwindcss.com/docs/border-spacing",
        "descriptionZh": "官网文档「border-spacing」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "table-layout",
        "path": "/docs/table-layout",
        "slug": "table-layout",
        "titleZh": "table-layout",
        "docs": "https://tailwindcss.com/docs/table-layout",
        "lesson": "tables",
        "descriptionZh": "官网文档「table-layout」——完整 class 表与示例见官方单页。",
        "examples": [
          "table-auto",
          "table-fixed"
        ]
      },
      {
        "titleEn": "caption-side",
        "path": "/docs/caption-side",
        "slug": "caption-side",
        "titleZh": "caption-side",
        "docs": "https://tailwindcss.com/docs/caption-side",
        "descriptionZh": "官网文档「caption-side」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "表格 Tables"
  },
  {
    "id": "transitions-animation",
    "titleEn": "Transitions & Animation",
    "items": [
      {
        "titleEn": "transition-property",
        "path": "/docs/transition-property",
        "slug": "transition-property",
        "titleZh": "transition-property",
        "docs": "https://tailwindcss.com/docs/transition-property",
        "lesson": "animation",
        "descriptionZh": "官网文档「transition-property」——完整 class 表与示例见官方单页。",
        "examples": [
          "transition",
          "transition-colors"
        ]
      },
      {
        "titleEn": "transition-behavior",
        "path": "/docs/transition-behavior",
        "slug": "transition-behavior",
        "titleZh": "transition-behavior",
        "docs": "https://tailwindcss.com/docs/transition-behavior",
        "descriptionZh": "官网文档「transition-behavior」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transition-duration",
        "path": "/docs/transition-duration",
        "slug": "transition-duration",
        "titleZh": "transition-duration",
        "docs": "https://tailwindcss.com/docs/transition-duration",
        "descriptionZh": "官网文档「transition-duration」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transition-timing-function",
        "path": "/docs/transition-timing-function",
        "slug": "transition-timing-function",
        "titleZh": "transition-timing-function",
        "docs": "https://tailwindcss.com/docs/transition-timing-function",
        "descriptionZh": "官网文档「transition-timing-function」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transition-delay",
        "path": "/docs/transition-delay",
        "slug": "transition-delay",
        "titleZh": "transition-delay",
        "docs": "https://tailwindcss.com/docs/transition-delay",
        "descriptionZh": "官网文档「transition-delay」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "animation",
        "path": "/docs/animation",
        "slug": "animation",
        "titleZh": "animation",
        "docs": "https://tailwindcss.com/docs/animation",
        "lesson": "animation",
        "descriptionZh": "官网文档「animation」——完整 class 表与示例见官方单页。",
        "examples": [
          "animate-spin",
          "animate-pulse"
        ]
      }
    ],
    "titleZh": "过渡与动画"
  },
  {
    "id": "transforms",
    "titleEn": "Transforms",
    "items": [
      {
        "titleEn": "backface-visibility",
        "path": "/docs/backface-visibility",
        "slug": "backface-visibility",
        "titleZh": "backface-visibility",
        "docs": "https://tailwindcss.com/docs/backface-visibility",
        "descriptionZh": "官网文档「backface-visibility」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "perspective",
        "path": "/docs/perspective",
        "slug": "perspective",
        "titleZh": "perspective",
        "docs": "https://tailwindcss.com/docs/perspective",
        "descriptionZh": "官网文档「perspective」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "perspective-origin",
        "path": "/docs/perspective-origin",
        "slug": "perspective-origin",
        "titleZh": "perspective-origin",
        "docs": "https://tailwindcss.com/docs/perspective-origin",
        "descriptionZh": "官网文档「perspective-origin」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "rotate",
        "path": "/docs/rotate",
        "slug": "rotate",
        "titleZh": "rotate",
        "docs": "https://tailwindcss.com/docs/rotate",
        "lesson": "transforms",
        "descriptionZh": "官网文档「rotate」——完整 class 表与示例见官方单页。",
        "examples": [
          "rotate-45",
          "-rotate-6"
        ]
      },
      {
        "titleEn": "scale",
        "path": "/docs/scale",
        "slug": "scale",
        "titleZh": "scale",
        "docs": "https://tailwindcss.com/docs/scale",
        "lesson": "transforms",
        "descriptionZh": "官网文档「scale」——完整 class 表与示例见官方单页。",
        "examples": [
          "scale-95",
          "scale-105"
        ]
      },
      {
        "titleEn": "skew",
        "path": "/docs/skew",
        "slug": "skew",
        "titleZh": "skew",
        "docs": "https://tailwindcss.com/docs/skew",
        "descriptionZh": "官网文档「skew」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transform",
        "path": "/docs/transform",
        "slug": "transform",
        "titleZh": "transform",
        "docs": "https://tailwindcss.com/docs/transform",
        "lesson": "transforms",
        "descriptionZh": "官网文档「transform」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transform-origin",
        "path": "/docs/transform-origin",
        "slug": "transform-origin",
        "titleZh": "transform-origin",
        "docs": "https://tailwindcss.com/docs/transform-origin",
        "descriptionZh": "官网文档「transform-origin」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "transform-style",
        "path": "/docs/transform-style",
        "slug": "transform-style",
        "titleZh": "transform-style",
        "docs": "https://tailwindcss.com/docs/transform-style",
        "descriptionZh": "官网文档「transform-style」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "translate",
        "path": "/docs/translate",
        "slug": "translate",
        "titleZh": "translate",
        "docs": "https://tailwindcss.com/docs/translate",
        "lesson": "transforms",
        "descriptionZh": "官网文档「translate」——完整 class 表与示例见官方单页。",
        "examples": [
          "-translate-y-1",
          "translate-x-1"
        ]
      },
      {
        "titleEn": "zoom",
        "path": "/docs/zoom",
        "slug": "zoom",
        "titleZh": "zoom",
        "docs": "https://tailwindcss.com/docs/zoom",
        "lesson": "transforms",
        "descriptionZh": "官网文档「zoom」——完整 class 表与示例见官方单页。",
        "examples": [
          "zoom-50",
          "zoom-150"
        ]
      }
    ],
    "titleZh": "变换 Transforms"
  },
  {
    "id": "interactivity",
    "titleEn": "Interactivity",
    "items": [
      {
        "titleEn": "accent-color",
        "path": "/docs/accent-color",
        "slug": "accent-color",
        "titleZh": "accent-color",
        "docs": "https://tailwindcss.com/docs/accent-color",
        "lesson": "forms",
        "descriptionZh": "官网文档「accent-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "appearance",
        "path": "/docs/appearance",
        "slug": "appearance",
        "titleZh": "appearance",
        "docs": "https://tailwindcss.com/docs/appearance",
        "descriptionZh": "官网文档「appearance」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "caret-color",
        "path": "/docs/caret-color",
        "slug": "caret-color",
        "titleZh": "caret-color",
        "docs": "https://tailwindcss.com/docs/caret-color",
        "descriptionZh": "官网文档「caret-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "color-scheme",
        "path": "/docs/color-scheme",
        "slug": "color-scheme",
        "titleZh": "color-scheme",
        "docs": "https://tailwindcss.com/docs/color-scheme",
        "descriptionZh": "官网文档「color-scheme」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "cursor",
        "path": "/docs/cursor",
        "slug": "cursor",
        "titleZh": "cursor",
        "docs": "https://tailwindcss.com/docs/cursor",
        "descriptionZh": "官网文档「cursor」——完整 class 表与示例见官方单页。",
        "examples": [
          "cursor-pointer"
        ]
      },
      {
        "titleEn": "field-sizing",
        "path": "/docs/field-sizing",
        "slug": "field-sizing",
        "titleZh": "field-sizing",
        "docs": "https://tailwindcss.com/docs/field-sizing",
        "descriptionZh": "官网文档「field-sizing」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "pointer-events",
        "path": "/docs/pointer-events",
        "slug": "pointer-events",
        "titleZh": "pointer-events",
        "docs": "https://tailwindcss.com/docs/pointer-events",
        "descriptionZh": "官网文档「pointer-events」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "resize",
        "path": "/docs/resize",
        "slug": "resize",
        "titleZh": "resize",
        "docs": "https://tailwindcss.com/docs/resize",
        "descriptionZh": "官网文档「resize」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-behavior",
        "path": "/docs/scroll-behavior",
        "slug": "scroll-behavior",
        "titleZh": "scroll-behavior",
        "docs": "https://tailwindcss.com/docs/scroll-behavior",
        "descriptionZh": "官网文档「scroll-behavior」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scrollbar-color",
        "path": "/docs/scrollbar-color",
        "slug": "scrollbar-color",
        "titleZh": "scrollbar-color",
        "docs": "https://tailwindcss.com/docs/scrollbar-color",
        "descriptionZh": "官网文档「scrollbar-color」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scrollbar-width",
        "path": "/docs/scrollbar-width",
        "slug": "scrollbar-width",
        "titleZh": "scrollbar-width",
        "docs": "https://tailwindcss.com/docs/scrollbar-width",
        "lesson": "scroll",
        "descriptionZh": "官网文档「scrollbar-width」——完整 class 表与示例见官方单页。",
        "examples": [
          "scrollbar-thin"
        ]
      },
      {
        "titleEn": "scrollbar-gutter",
        "path": "/docs/scrollbar-gutter",
        "slug": "scrollbar-gutter",
        "titleZh": "scrollbar-gutter",
        "docs": "https://tailwindcss.com/docs/scrollbar-gutter",
        "descriptionZh": "官网文档「scrollbar-gutter」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-margin",
        "path": "/docs/scroll-margin",
        "slug": "scroll-margin",
        "titleZh": "scroll-margin",
        "docs": "https://tailwindcss.com/docs/scroll-margin",
        "descriptionZh": "官网文档「scroll-margin」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-padding",
        "path": "/docs/scroll-padding",
        "slug": "scroll-padding",
        "titleZh": "scroll-padding",
        "docs": "https://tailwindcss.com/docs/scroll-padding",
        "descriptionZh": "官网文档「scroll-padding」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-snap-align",
        "path": "/docs/scroll-snap-align",
        "slug": "scroll-snap-align",
        "titleZh": "scroll-snap-align",
        "docs": "https://tailwindcss.com/docs/scroll-snap-align",
        "descriptionZh": "官网文档「scroll-snap-align」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-snap-stop",
        "path": "/docs/scroll-snap-stop",
        "slug": "scroll-snap-stop",
        "titleZh": "scroll-snap-stop",
        "docs": "https://tailwindcss.com/docs/scroll-snap-stop",
        "descriptionZh": "官网文档「scroll-snap-stop」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "scroll-snap-type",
        "path": "/docs/scroll-snap-type",
        "slug": "scroll-snap-type",
        "titleZh": "scroll-snap-type",
        "docs": "https://tailwindcss.com/docs/scroll-snap-type",
        "lesson": "scroll",
        "descriptionZh": "官网文档「scroll-snap-type」——完整 class 表与示例见官方单页。",
        "examples": [
          "snap-x",
          "snap-mandatory"
        ]
      },
      {
        "titleEn": "touch-action",
        "path": "/docs/touch-action",
        "slug": "touch-action",
        "titleZh": "touch-action",
        "docs": "https://tailwindcss.com/docs/touch-action",
        "descriptionZh": "官网文档「touch-action」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "user-select",
        "path": "/docs/user-select",
        "slug": "user-select",
        "titleZh": "user-select",
        "docs": "https://tailwindcss.com/docs/user-select",
        "descriptionZh": "官网文档「user-select」——完整 class 表与示例见官方单页。",
        "examples": []
      },
      {
        "titleEn": "will-change",
        "path": "/docs/will-change",
        "slug": "will-change",
        "titleZh": "will-change",
        "docs": "https://tailwindcss.com/docs/will-change",
        "descriptionZh": "官网文档「will-change」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "交互 Interactivity"
  },
  {
    "id": "svg",
    "titleEn": "SVG",
    "items": [
      {
        "titleEn": "fill",
        "path": "/docs/fill",
        "slug": "fill",
        "titleZh": "fill",
        "docs": "https://tailwindcss.com/docs/fill",
        "lesson": "svg",
        "descriptionZh": "官网文档「fill」——完整 class 表与示例见官方单页。",
        "examples": [
          "fill-current"
        ]
      },
      {
        "titleEn": "stroke",
        "path": "/docs/stroke",
        "slug": "stroke",
        "titleZh": "stroke",
        "docs": "https://tailwindcss.com/docs/stroke",
        "lesson": "svg",
        "descriptionZh": "官网文档「stroke」——完整 class 表与示例见官方单页。",
        "examples": [
          "stroke-2"
        ]
      },
      {
        "titleEn": "stroke-width",
        "path": "/docs/stroke-width",
        "slug": "stroke-width",
        "titleZh": "stroke-width",
        "docs": "https://tailwindcss.com/docs/stroke-width",
        "descriptionZh": "官网文档「stroke-width」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "SVG"
  },
  {
    "id": "accessibility",
    "titleEn": "Accessibility",
    "items": [
      {
        "titleEn": "forced-color-adjust",
        "path": "/docs/forced-color-adjust",
        "slug": "forced-color-adjust",
        "titleZh": "forced-color-adjust",
        "docs": "https://tailwindcss.com/docs/forced-color-adjust",
        "lesson": "accessibility",
        "descriptionZh": "官网文档「forced-color-adjust」——完整 class 表与示例见官方单页。",
        "examples": []
      }
    ],
    "titleZh": "无障碍 Accessibility"
  }
];

export const OFFICIAL_DOCS_COUNT = OFFICIAL_DOCS_SECTIONS.reduce(
  (n, s) => n + s.items.length,
  0,
);

export const OFFICIAL_DOCS_HOME = "https://tailwindcss.com/docs";

export function findOfficialDoc(slug: string): OfficialDocItem | undefined {
  for (const s of OFFICIAL_DOCS_SECTIONS) {
    const hit = s.items.find((i) => i.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}
