export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explain: string;
};

export type DemoKind =
  | "utility-first"
  | "colors"
  | "spacing"
  | "typography"
  | "sizing"
  | "flex"
  | "grid"
  | "position"
  | "borders"
  | "states"
  | "responsive"
  | "dark-mode"
  | "animation"
  | "forms"
  | "card"
  | "navbar"
  | "dashboard"
  | "v4";

export type LessonBlock =
  | { type: "text"; title?: string; body: string }
  | { type: "code"; title?: string; lang?: string; code: string }
  | { type: "tip"; body: string }
  | { type: "demo"; kind: DemoKind; title: string; hint?: string }
  | { type: "quiz"; questions: QuizQuestion[] };

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  level: "入门" | "进阶" | "实战";
  track: "基础" | "布局" | "交互" | "主题" | "组件" | "实战";
  minutes: number;
  blocks: LessonBlock[];
};

export const LESSONS: Lesson[] = [
  {
    slug: "intro",
    title: "Tailwind 是什么",
    summary: "Utility-first：用类名组合界面。",
    level: "入门",
    track: "基础",
    minutes: 6,
    blocks: [
      {
        type: "text",
        title: "为什么学 Tailwind",
        body: "Tailwind CSS 是工具类优先（utility-first）的 CSS 框架：不写「.card 长什么样」，而是直接在 HTML 上拼 padding、颜色、圆角。\n\n好处：设计系统内建（间距刻度、色阶、断点一致）、改样式不用在 CSS 文件里翻找、配合组件化框架非常顺手。\n\n学习方法：先看「对应源码」里的 class，再点 Demo 看视觉结果。",
      },
      {
        type: "code",
        title: "对应源码 · 按钮",
        lang: "html",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">
  保存
</button>`,
      },
      { type: "demo", kind: "utility-first", title: "动手：拼一个按钮" },
      {
        type: "quiz",
        questions: [
          {
            id: "i1",
            question: "Tailwind 核心思路？",
            options: [
              "写一堆语义化 CSS 文件",
              "用原子工具类组合样式",
              "只做预处理器",
              "替代 JavaScript",
            ],
            answer: 1,
            explain: "Utility-first：在标记上组合小类。",
          },
          {
            id: "i2",
            question: "Tailwind 与 Bootstrap 的主要区别？",
            options: [
              "没有区别",
              "Tailwind 提供组件而不是工具类",
              "Tailwind 以工具类为主，组件需自建",
              "Tailwind 不能响应式",
            ],
            answer: 2,
            explain: "Bootstrap 偏组件库；Tailwind 偏设计令牌 + 工具类。",
          },
        ],
      },
    ],
  },
  {
    slug: "setup",
    title: "安装与配置",
    summary: "Vite + Tailwind v4 快速起步。",
    level: "入门",
    track: "基础",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "v4 的最小配置",
        body: "Tailwind v4 用 CSS-first 配置：在入口 CSS 里 @import \"tailwindcss\"，用 Vite 插件 @tailwindcss/vite 即可。设计令牌写在 @theme { } 里。\n\n本站就是 React + Vite + Tailwind v4，你现在看到的界面本身就是活教材。",
      },
      {
        type: "code",
        title: "styles.css · 最小示例",
        lang: "css",
        code: `@import "tailwindcss";

@theme {
  --color-brand: #38bdf8;
  --font-sans: "DM Sans", system-ui, sans-serif;
}

/* 之后就能用 bg-brand、font-sans 等 */`,
      },
      {
        type: "tip",
        body: "开发时用 Vite HMR；生产构建会 purge 未使用的类，最终 CSS 体积通常很小。",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "s1",
            question: "Tailwind v4 推荐配置方式？",
            options: [
              "只写 tailwind.config.js",
              "CSS 中 @import + @theme",
              "必须用 PostCSS 插件名 postcss-tailwind",
              "全局 style 标签手写",
            ],
            answer: 1,
            explain: "v4 强调 CSS-first：@import \"tailwindcss\" 与 @theme。",
          },
          {
            id: "s2",
            question: "未使用的工具类在生产构建中？",
            options: ["全部打入", "被扫描剔除", "变成 inline", "报错"],
            answer: 1,
            explain: "基于源码扫描，未用到的 utility 不会进入产物。",
          },
        ],
      },
    ],
  },
  {
    slug: "utility-first",
    title: "工具类思维",
    summary: "从「写 CSS 文件」到「组合 class」。",
    level: "入门",
    track: "基础",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "读 class 的顺序",
        body: "常见阅读顺序：布局（flex/grid）→ 尺寸间距（p/m/w/h）→ 排版（text/font）→ 颜色（bg/text）→ 效果（rounded/shadow）→ 状态（hover:）。\n\n不要害怕 class 变长：可抽组件、用 cn() 合并、或在 @layer components 用 @apply。",
      },
      {
        type: "code",
        title: "对应源码 · 信息卡片",
        lang: "html",
        code: `<div class="rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
  <h3 class="text-lg font-semibold text-white">标题</h3>
  <p class="mt-1 text-sm text-slate-400">说明文字</p>
</div>`,
      },
      { type: "demo", kind: "utility-first", title: "动手：工具类组合" },
      {
        type: "quiz",
        questions: [
          {
            id: "u1",
            question: "class 过长时更好的做法？",
            options: [
              "放弃 Tailwind",
              "抽成组件 / cn() / @apply",
              "只用一个 div",
              "写内联 style 全量",
            ],
            answer: 1,
            explain: "复用组件边界，而不是回到大 CSS 文件。",
          },
        ],
      },
    ],
  },
  {
    slug: "colors",
    title: "颜色系统",
    summary: "色阶、透明度与语义色。",
    level: "入门",
    track: "基础",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "内置色板",
        body: "Tailwind 自带 slate/gray/zinc/neutral/stone 中性色与 red…rose 等彩色，每色 50–950。写法：bg-sky-500、text-slate-300、border-white/10。\n\n斜杠透明度：bg-sky-500/20 = 20% 不透明度。自定义色写进 @theme 后可直接 bg-brand。",
      },
      {
        type: "code",
        title: "对应源码 · 色块",
        lang: "html",
        code: `<div class="flex gap-2">
  <span class="h-10 w-10 rounded-md bg-sky-500"></span>
  <span class="h-10 w-10 rounded-md bg-sky-500/40"></span>
  <span class="h-10 w-10 rounded-md bg-indigo-500"></span>
  <span class="h-10 w-10 rounded-md text-white bg-slate-800 ring-1 ring-white/10"></span>
</div>`,
      },
      { type: "demo", kind: "colors", title: "动手：切换主题色" },
      {
        type: "quiz",
        questions: [
          {
            id: "c1",
            question: "bg-sky-500/20 表示？",
            options: [
              "字体 20px",
              "天空色 20% 不透明度",
              "间距 20",
              "动画 20ms",
            ],
            answer: 1,
            explain: "颜色/透明度 语法。",
          },
          {
            id: "c2",
            question: "自定义品牌色应放在？",
            options: ["任意 .css 随便写", "@theme", "HTML style", "package.json"],
            answer: 1,
            explain: "@theme 定义设计令牌。",
          },
        ],
      },
    ],
  },
  {
    slug: "spacing",
    title: "间距系统",
    summary: "p / m / gap 与 4px 刻度。",
    level: "入门",
    track: "基础",
    minutes: 7,
    blocks: [
      {
        type: "text",
        title: "间距刻度",
        body: "默认 1 = 0.25rem（4px）。p-4 = 16px，gap-3 = 12px。方向：p/px/py/pt/pr/pb/pl，m 同理。负 margin 用 -mt-2。\n\n空间感靠一致的刻度：页面常用 4/6/8，卡片内 3/4，标题与正文 gap 用 mt-1 / mt-2。",
      },
      {
        type: "code",
        title: "对应源码 · 间距",
        lang: "html",
        code: `<div class="space-y-3 p-6">
  <div class="h-8 rounded bg-sky-500/30"></div>
  <div class="flex gap-2">
    <div class="h-8 flex-1 rounded bg-sky-500/50"></div>
    <div class="h-8 flex-1 rounded bg-sky-500/70"></div>
  </div>
</div>`,
      },
      { type: "demo", kind: "spacing", title: "动手：调 padding / gap" },
      {
        type: "quiz",
        questions: [
          {
            id: "sp1",
            question: "p-4 默认等于？",
            options: ["4px", "1rem / 16px", "4rem", "40px"],
            answer: 1,
            explain: "1 unit = 0.25rem → 4 = 1rem。",
          },
        ],
      },
    ],
  },
  {
    slug: "typography",
    title: "文字排版",
    summary: "字号、字重、行高、截断。",
    level: "入门",
    track: "基础",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "排版工具类",
        body: "text-sm / text-base / text-lg / text-2xl…  font-medium / font-semibold  leading-relaxed  tracking-tight。\n\n截断：truncate（单行）或 line-clamp-2。对齐 text-left/center/right。数字表格感用 tabular-nums。",
      },
      {
        type: "code",
        title: "对应源码 · 标题 + 正文",
        lang: "html",
        code: `<h2 class="text-2xl font-semibold tracking-tight text-white">
  标题
</h2>
<p class="mt-2 max-w-prose text-sm leading-relaxed text-slate-400">
  正文用稍小字号、更松行高，阅读更舒服。
</p>`,
      },
      { type: "demo", kind: "typography", title: "动手：排版层级" },
      {
        type: "quiz",
        questions: [
          {
            id: "ty1",
            question: "单行溢出省略用？",
            options: ["text-clip", "truncate", "overflow-auto", "line-none"],
            answer: 1,
            explain: "truncate = overflow-hidden + text-ellipsis + whitespace-nowrap。",
          },
        ],
      },
    ],
  },
  {
    slug: "sizing",
    title: "宽高与尺寸",
    summary: "w/h、min/max、aspect。",
    level: "入门",
    track: "基础",
    minutes: 7,
    blocks: [
      {
        type: "text",
        title: "尺寸",
        body: "w-full、w-1/2、w-64、max-w-3xl、min-h-dvh、h-screen、size-10（宽高同值）、aspect-video。\n\n内容区常用 max-w-3xl / max-w-6xl + mx-auto 居中。",
      },
      {
        type: "code",
        title: "对应源码 · 居中内容",
        lang: "html",
        code: `<div class="mx-auto max-w-3xl px-4">
  <div class="aspect-video w-full rounded-xl bg-slate-800"></div>
</div>`,
      },
      { type: "demo", kind: "sizing", title: "动手：宽度与比例" },
      {
        type: "quiz",
        questions: [
          {
            id: "sz1",
            question: "size-10 等价于？",
            options: ["font-size 10", "w-10 h-10", "padding 10", "z-index 10"],
            answer: 1,
            explain: "宽高同为 2.5rem。",
          },
        ],
      },
    ],
  },
  {
    slug: "flex",
    title: "Flex 布局",
    summary: "flex、对齐、换行、增长。",
    level: "入门",
    track: "布局",
    minutes: 10,
    blocks: [
      {
        type: "text",
        title: "一维布局首选",
        body: "flex + items-center + justify-between 能解决大半顶栏/工具条。子项：flex-1 吃剩余空间，shrink-0 防压缩，gap-* 间隙。\n\n方向：flex-col / flex-row；换行 flex-wrap。",
      },
      {
        type: "code",
        title: "对应源码 · 顶栏",
        lang: "html",
        code: `<header class="flex items-center justify-between gap-3 px-4 py-3">
  <span class="font-semibold">Logo</span>
  <nav class="flex items-center gap-2">
    <a class="text-sm text-slate-300">文档</a>
    <button class="rounded-md bg-sky-500 px-3 py-1.5 text-sm text-white">开始</button>
  </nav>
</header>`,
      },
      { type: "demo", kind: "flex", title: "动手：Flex 对齐" },
      {
        type: "quiz",
        questions: [
          {
            id: "f1",
            question: "水平两端对齐 + 垂直居中？",
            options: [
              "flex items-center justify-between",
              "grid place-center",
              "block mx-auto",
              "absolute inset-0",
            ],
            answer: 0,
            explain: "经典顶栏组合。",
          },
        ],
      },
    ],
  },
  {
    slug: "grid",
    title: "Grid 布局",
    summary: "多列、自适应、跨列。",
    level: "入门",
    track: "布局",
    minutes: 10,
    blocks: [
      {
        type: "text",
        title: "二维网格",
        body: "grid grid-cols-2 md:grid-cols-3 gap-4。自适应：grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]。跨列 col-span-2。\n\n仪表盘、卡片墙、表单两列常用 Grid。",
      },
      {
        type: "code",
        title: "对应源码 · 卡片墙",
        lang: "html",
        code: `<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-lg bg-slate-800 p-4">A</div>
  <div class="rounded-lg bg-slate-800 p-4">B</div>
  <div class="rounded-lg bg-slate-800 p-4 sm:col-span-2 lg:col-span-1">C</div>
</div>`,
      },
      { type: "demo", kind: "grid", title: "动手：Grid 列数" },
      {
        type: "quiz",
        questions: [
          {
            id: "g1",
            question: "中等屏 3 列的写法？",
            options: [
              "cols-3-md",
              "md:grid-cols-3",
              "grid-3 md",
              "media-grid-3",
            ],
            answer: 1,
            explain: "断点前缀 + grid-cols-n。",
          },
        ],
      },
    ],
  },
  {
    slug: "position",
    title: "定位与层级",
    summary: "relative / absolute / sticky / z。",
    level: "进阶",
    track: "布局",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "定位工具",
        body: "relative 建立定位上下文；absolute inset-0 铺满父级。sticky top-0 做吸顶导航。z-10 / z-40 控制层叠。\n\n遮罩：fixed inset-0 bg-black/50。",
      },
      {
        type: "code",
        title: "对应源码 · 角标",
        lang: "html",
        code: `<div class="relative h-24 w-40 rounded-lg bg-slate-800">
  <span class="absolute -right-2 -top-2 rounded-full bg-rose-500 px-2 py-0.5 text-xs text-white">
    NEW
  </span>
</div>`,
      },
      { type: "demo", kind: "position", title: "动手：绝对定位角标" },
      {
        type: "quiz",
        questions: [
          {
            id: "p1",
            question: "吸顶导航常用？",
            options: [
              "absolute top-0",
              "sticky top-0 z-40",
              "static top-0",
              "float-top",
            ],
            answer: 1,
            explain: "sticky + top + 足够 z-index。",
          },
        ],
      },
    ],
  },
  {
    slug: "borders",
    title: "边框 · 圆角 · 阴影",
    summary: "表面质感三件套。",
    level: "入门",
    track: "布局",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "质感",
        body: "rounded-md / rounded-xl、border border-white/10、shadow-sm / shadow-lg、ring-1 ring-white/10。\n\n暗色 UI 常用「细边框 + 轻阴影 + 略亮表面」表达层级，而不是厚重阴影。",
      },
      {
        type: "code",
        title: "对应源码 · 表面",
        lang: "html",
        code: `<div class="rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-lg ring-1 ring-white/5">
  卡片表面
</div>`,
      },
      { type: "demo", kind: "borders", title: "动手：圆角与阴影" },
      {
        type: "quiz",
        questions: [
          {
            id: "b1",
            question: "半透明边框常用？",
            options: [
              "border-half",
              "border-white/10",
              "border-opacity-only",
              "outline-soft",
            ],
            answer: 1,
            explain: "颜色/透明度 语法。",
          },
        ],
      },
    ],
  },
  {
    slug: "states",
    title: "状态变体",
    summary: "hover / focus / active / disabled。",
    level: "进阶",
    track: "交互",
    minutes: 9,
    blocks: [
      {
        type: "text",
        title: "交互状态",
        body: "hover:bg-sky-600、focus-visible:ring-2、active:scale-95、disabled:opacity-50。组合同级：group / group-hover:、peer / peer-checked:。\n\n无障碍：用 focus-visible 而不是仅 focus，避免鼠标点击后一直有粗环。",
      },
      {
        type: "code",
        title: "对应源码 · 按钮状态",
        lang: "html",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-white
  transition hover:bg-sky-600
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
  active:scale-[0.98] disabled:opacity-50">
  提交
</button>`,
      },
      { type: "demo", kind: "states", title: "动手：hover / focus" },
      {
        type: "quiz",
        questions: [
          {
            id: "st1",
            question: "仅键盘聚焦显示环用？",
            options: ["focus:", "focus-visible:", "active:", "target:"],
            answer: 1,
            explain: "focus-visible 更贴合键盘导航。",
          },
        ],
      },
    ],
  },
  {
    slug: "responsive",
    title: "响应式设计",
    summary: "sm / md / lg 移动优先。",
    level: "进阶",
    track: "交互",
    minutes: 10,
    blocks: [
      {
        type: "text",
        title: "移动优先",
        body: "默认写手机样式，再用 sm: md: lg: xl: 2xl: 增强。例如：flex-col md:flex-row、grid-cols-1 md:grid-cols-2。\n\n隐藏：hidden md:block。容器：max-w + 内边距在窄屏更重要。",
      },
      {
        type: "code",
        title: "对应源码 · 响应式栅格",
        lang: "html",
        code: `<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
  <div class="h-20 rounded-lg bg-sky-500/20"></div>
  <div class="h-20 rounded-lg bg-sky-500/30"></div>
  <div class="h-20 rounded-lg bg-sky-500/40"></div>
  <div class="h-20 rounded-lg bg-sky-500/50"></div>
</div>`,
      },
      { type: "demo", kind: "responsive", title: "动手：断点预览" },
      {
        type: "quiz",
        questions: [
          {
            id: "r1",
            question: "Tailwind 响应式默认策略？",
            options: ["桌面优先", "移动优先", "打印优先", "无策略"],
            answer: 1,
            explain: "无前缀 = 最小屏，再往上覆盖。",
          },
        ],
      },
    ],
  },
  {
    slug: "dark-mode",
    title: "暗色模式",
    summary: "class 策略与 dark: 前缀。",
    level: "进阶",
    track: "主题",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "dark 变体",
        body: "常见策略：在 <html class=\"dark\"> 上切换。类名：bg-white dark:bg-slate-900。\n\n本站以暗色为默认设计系统（token 直接暗色），产品里也可做 light + dark 双轨。",
      },
      {
        type: "code",
        title: "对应源码 · 双轨卡片",
        lang: "html",
        code: `<div class="rounded-xl border border-slate-200 bg-white p-4 text-slate-900
  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
  自动适应主题
</div>`,
      },
      { type: "demo", kind: "dark-mode", title: "动手：切换明暗" },
      {
        type: "quiz",
        questions: [
          {
            id: "d1",
            question: "暗色类前缀是？",
            options: ["night:", "dark:", "theme-dark:", "prefers:"],
            answer: 1,
            explain: "dark: 变体。",
          },
        ],
      },
    ],
  },
  {
    slug: "custom",
    title: "自定义主题",
    summary: "@theme 令牌与扩展。",
    level: "进阶",
    track: "主题",
    minutes: 9,
    blocks: [
      {
        type: "text",
        title: "设计令牌",
        body: "在 @theme 定义 --color-*、--font-*、--radius-*、--shadow-*，即可生成对应工具类。\n\n原则：界面里少写任意值 p-[13px]，优先 token，保证全站一致。",
      },
      {
        type: "code",
        title: "对应源码 · @theme",
        lang: "css",
        code: `@theme {
  --color-primary: #38bdf8;
  --color-surface: #0f1720;
  --radius-lg: 16px;
  --font-display: "DM Sans", system-ui, sans-serif;
}`,
      },
      {
        type: "tip",
        body: "本站的 bg-primary、text-muted、rounded-lg 都来自 styles.css 的 @theme。",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cu1",
            question: "应优先使用？",
            options: [
              "任意值 p-[17px] 到处",
              "设计令牌 + 刻度",
              "内联 style 像素",
              "随机颜色",
            ],
            answer: 1,
            explain: "令牌保证一致与可维护。",
          },
        ],
      },
    ],
  },
  {
    slug: "animation",
    title: "过渡与动画",
    summary: "transition、duration、animate。",
    level: "进阶",
    track: "交互",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "动效",
        body: "transition-colors duration-150、transition-transform、hover:-translate-y-0.5。内置 animate-spin / pulse / bounce。\n\n注意 prefers-reduced-motion：减少非必要动画。",
      },
      {
        type: "code",
        title: "对应源码 · 悬浮抬起",
        lang: "html",
        code: `<div class="rounded-xl border border-slate-700 bg-slate-900 p-4
  transition duration-200 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg">
  Hover me
</div>`,
      },
      { type: "demo", kind: "animation", title: "动手：过渡效果" },
      {
        type: "quiz",
        questions: [
          {
            id: "a1",
            question: "颜色平滑过渡常用？",
            options: [
              "animate-color",
              "transition-colors",
              "move-colors",
              "fade-only",
            ],
            answer: 1,
            explain: "transition-colors + duration。",
          },
        ],
      },
    ],
  },
  {
    slug: "forms",
    title: "表单样式",
    summary: "input / label / 校验态。",
    level: "进阶",
    track: "组件",
    minutes: 9,
    blocks: [
      {
        type: "text",
        title: "表单控件",
        body: "输入框：h-10 w-full rounded-lg border bg-transparent px-3 text-sm。焦点环 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30。\n\n错误态：border-rose-500 text-rose-400。",
      },
      {
        type: "code",
        title: "对应源码 · 字段",
        lang: "html",
        code: `<label class="block text-sm text-slate-300">
  邮箱
  <input class="mt-1 h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm
    placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
    placeholder="you@example.com" />
</label>`,
      },
      { type: "demo", kind: "forms", title: "动手：表单字段" },
      {
        type: "quiz",
        questions: [
          {
            id: "fo1",
            question: "placeholder 颜色用？",
            options: [
              "placeholder:text-…",
              "ph:text-…",
              "hint:text-…",
              "empty:text-…",
            ],
            answer: 0,
            explain: "placeholder: 变体。",
          },
        ],
      },
    ],
  },
  {
    slug: "v4",
    title: "Tailwind v4 要点",
    summary: "CSS-first、性能、兼容。",
    level: "进阶",
    track: "主题",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "v4 变化",
        body: "1) 配置迁移到 CSS（@theme）\n2) 新引擎，构建更快\n3) 动态工具类支持更好\n4) 部分旧插件写法需对照迁移指南\n\n学 v4 时，把「令牌在 CSS」当成默认心智。",
      },
      {
        type: "code",
        title: "v3 → v4 心智",
        lang: "css",
        code: `/* v3: tailwind.config.js theme.extend.colors.brand = '…' */
/* v4: */
@theme {
  --color-brand: #38bdf8;
}`,
      },
      { type: "demo", kind: "v4", title: "动手：令牌驱动的 UI" },
      {
        type: "quiz",
        questions: [
          {
            id: "v1",
            question: "v4 设计令牌主要写在？",
            options: ["HTML data-*", "@theme", "README", "localStorage"],
            answer: 1,
            explain: "CSS-first @theme。",
          },
        ],
      },
    ],
  },
  {
    slug: "card-ui",
    title: "实战：卡片组件",
    summary: "组合出产品级卡片。",
    level: "实战",
    track: "组件",
    minutes: 10,
    blocks: [
      {
        type: "text",
        title: "卡片配方",
        body: "表面 + 边框 + 内边距 + 标题层级 + 操作区。可加媒体区 aspect-video、标签 pill、底部操作栏。",
      },
      {
        type: "code",
        title: "对应源码 · 产品卡",
        lang: "html",
        code: `<article class="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
  <div class="aspect-video bg-gradient-to-br from-sky-500/30 to-indigo-500/20"></div>
  <div class="p-4">
    <h3 class="font-semibold text-white">产品名</h3>
    <p class="mt-1 text-sm text-slate-400">一句话描述价值主张。</p>
    <button class="mt-4 rounded-md bg-sky-500 px-3 py-1.5 text-sm text-white">了解</button>
  </div>
</article>`,
      },
      { type: "demo", kind: "card", title: "动手：卡片" },
      {
        type: "quiz",
        questions: [
          {
            id: "ca1",
            question: "媒体区固定比例常用？",
            options: ["h-fixed", "aspect-video", "ratio-16", "video-box"],
            answer: 1,
            explain: "aspect-video ≈ 16:9。",
          },
        ],
      },
    ],
  },
  {
    slug: "navbar",
    title: "实战：导航栏",
    summary: "顶栏 + 移动菜单模式。",
    level: "实战",
    track: "组件",
    minutes: 10,
    blocks: [
      {
        type: "text",
        title: "导航模式",
        body: "桌面：flex 横排链接。移动：汉堡按钮 + 抽屉/折叠。sticky + backdrop-blur 很常见。\n\n本站侧栏就是响应式导航的完整例子。",
      },
      {
        type: "code",
        title: "对应源码 · 顶栏骨架",
        lang: "html",
        code: `<header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
  <div class="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
    <span class="font-semibold">Brand</span>
    <nav class="ml-auto hidden gap-4 md:flex">…</nav>
    <button class="md:hidden">Menu</button>
  </div>
</header>`,
      },
      { type: "demo", kind: "navbar", title: "动手：导航" },
      {
        type: "quiz",
        questions: [
          {
            id: "n1",
            question: "仅桌面显示导航链接？",
            options: [
              "block md:hidden",
              "hidden md:flex",
              "flex md:hidden",
              "invisible",
            ],
            answer: 1,
            explain: "默认 hidden，md 起 flex。",
          },
        ],
      },
    ],
  },
  {
    slug: "dashboard",
    title: "实战：仪表盘布局",
    summary: "侧栏 + 主区 + 统计卡。",
    level: "实战",
    track: "实战",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "后台骨架",
        body: "常见结构：左侧固定宽侧栏 + 右侧主内容。主区顶部工具条，下方 grid 统计卡 + 表格/图表。\n\n布局：min-h-dvh + flex；侧栏 w-64 shrink-0。",
      },
      {
        type: "code",
        title: "对应源码 · 骨架",
        lang: "html",
        code: `<div class="flex min-h-72 rounded-xl border border-slate-700 overflow-hidden">
  <aside class="w-40 shrink-0 border-r border-slate-700 bg-slate-900 p-3 text-sm">侧栏</aside>
  <main class="flex-1 bg-slate-950 p-4">
    <div class="grid grid-cols-3 gap-2">
      <div class="rounded-lg bg-slate-800 p-3 text-xs">指标</div>
      <div class="rounded-lg bg-slate-800 p-3 text-xs">指标</div>
      <div class="rounded-lg bg-slate-800 p-3 text-xs">指标</div>
    </div>
  </main>
</div>`,
      },
      { type: "demo", kind: "dashboard", title: "动手：仪表盘" },
      {
        type: "quiz",
        questions: [
          {
            id: "db1",
            question: "侧栏防被压扁用？",
            options: ["grow", "shrink-0", "basis-auto", "order-first"],
            answer: 1,
            explain: "shrink-0 保持宽度。",
          },
        ],
      },
    ],
  },
  {
    slug: "patterns",
    title: "常用模式速通",
    summary: "空状态、加载、标签、分割。",
    level: "实战",
    track: "实战",
    minutes: 8,
    blocks: [
      {
        type: "text",
        title: "产品 UI 模式",
        body: "空状态：虚线边框 + 居中文案。加载：animate-pulse 骨架。标签：rounded-full bg-…/15 text-…。分割线：border-t / divide-y。\n\n把模式当乐高，而不是每次从零设计。",
      },
      {
        type: "code",
        title: "对应源码 · 空状态",
        lang: "html",
        code: `<div class="rounded-xl border border-dashed border-slate-700 px-4 py-12 text-center">
  <p class="text-sm text-slate-400">暂无数据</p>
  <button class="mt-3 text-sm text-sky-400">新建一项</button>
</div>`,
      },
      {
        type: "tip",
        body: "去「设计工坊」用开关拼装一页 UI，比只看文档记得更牢。",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "pa1",
            question: "骨架屏常用动画？",
            options: ["animate-bounce", "animate-pulse", "animate-ping", "spin-slow"],
            answer: 1,
            explain: "pulse 适合占位块。",
          },
        ],
      },
    ],
  },
  {
    slug: "production",
    title: "生产与最佳实践",
    summary: "体积、可维护、无障碍。",
    level: "实战",
    track: "实战",
    minutes: 9,
    blocks: [
      {
        type: "text",
        title: "上线清单",
        body: "1) 用构建工具集成，不要生产环境 CDN 乱拼（教学可用 CDN）\n2) 组件化复用，避免复制超长 class 十遍\n3) 对比度达标；焦点可见\n4) 尊重 reduced-motion\n5) 任意值克制使用\n6) 与设计令牌对齐\n\n恭喜学到这里——去练习场与结业证明收个尾吧。",
      },
      {
        type: "code",
        title: "对应源码 · cn 合并",
        lang: "tsx",
        code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// <button className={cn("px-3 py-2", active && "bg-sky-500")} />`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "pr1",
            question: "冲突 class 合并推荐？",
            options: ["字符串相加", "tailwind-merge / cn()", "随机覆盖", "不用 class"],
            answer: 1,
            explain: "twMerge 正确处理冲突 utility。",
          },
          {
            id: "pr2",
            question: "生产环境更推荐？",
            options: [
              "Play CDN 永久",
              "构建时扫描打包",
              "全量手写 CSS 复制",
              "禁用 purge",
            ],
            answer: 1,
            explain: "Vite/插件构建 + 内容扫描。",
          },
        ],
      },
    ],
  },
];

export const TRACKS = [
  "基础",
  "布局",
  "交互",
  "主题",
  "组件",
  "实战",
] as const;

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function getLessonIndex(slug: string): number {
  return LESSONS.findIndex((l) => l.slug === slug);
}

export function getAdjacent(slug: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const i = getLessonIndex(slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? LESSONS[i - 1] : undefined,
    next: i < LESSONS.length - 1 ? LESSONS[i + 1] : undefined,
  };
}

export function getLessonsByTrack(track: Lesson["track"]) {
  return LESSONS.filter((l) => l.track === track);
}

export function getAllQuizQuestions(): Array<
  QuizQuestion & { lessonSlug: string; lessonTitle: string }
> {
  const out: Array<
    QuizQuestion & { lessonSlug: string; lessonTitle: string }
  > = [];
  for (const lesson of LESSONS) {
    for (const block of lesson.blocks) {
      if (block.type === "quiz") {
        for (const q of block.questions) {
          out.push({
            ...q,
            lessonSlug: lesson.slug,
            lessonTitle: lesson.title,
          });
        }
      }
    }
  }
  return out;
}
