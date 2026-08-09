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
  track: "基础" | "布局" | "视觉" | "交互" | "进阶语法" | "主题" | "组件" | "工程" | "实战";
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `Tailwind CSS 是工具类优先（utility-first）的 CSS 框架：不写「.card 长什么样」，而是直接在 HTML 上拼 padding、颜色、圆角。

好处：设计系统内建（间距刻度、色阶、断点一致）、改样式不用在 CSS 文件里翻找、配合组件化框架非常顺手。

学习方法：先看「对应源码」里的 class，再点 Demo 看视觉结果。

为什么这一节重要：Utility-first：用类名组合界面。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Tailwind 是什么」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Tailwind 是什么」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「intro」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Tailwind 是什么？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">
  保存
</button>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Tailwind 是什么
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "utility-first", title: "动手：拼一个按钮" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "intro-0b4b-1",
            question: "关于「Tailwind 是什么」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "intro-0b4b-2",
            question: "学习「Tailwind 是什么」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "intro-0b4b-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `Tailwind v4 用 CSS-first 配置：在入口 CSS 里 @import \\"tailwindcss\\"，用 Vite 插件 @tailwindcss/vite 即可。设计令牌写在 @theme { } 里。

本站就是 React + Vite + Tailwind v4，你现在看到的界面本身就是活教材。

为什么这一节重要：Vite + Tailwind v4 快速起步。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「安装与配置」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `开发时用 Vite HMR；生产构建会 purge 未使用的类，最终 CSS 体积通常很小。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「安装与配置」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「setup」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是安装与配置？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `@import "tailwindcss";

@theme {
  --color-brand: #38bdf8;
  --font-sans: "DM Sans", system-ui, sans-serif;
}

/* 之后就能用 bg-brand、font-sans 等 */`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：安装与配置
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "setup-a0f8-1",
            question: "关于「安装与配置」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "setup-a0f8-2",
            question: "学习「安装与配置」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "setup-a0f8-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `常见阅读顺序：布局（flex/grid）→ 尺寸间距（p/m/w/h）→ 排版（text/font）→ 颜色（bg/text）→ 效果（rounded/shadow）→ 状态（hover:）。

不要害怕 class 变长：可抽组件、用 cn() 合并、或在 @layer components 用 @apply。

为什么这一节重要：从「写 CSS 文件」到「组合 class」。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「工具类思维」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「工具类思维」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「utility-first」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是工具类思维？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
  <h3 class="text-lg font-semibold text-white">标题</h3>
  <p class="mt-1 text-sm text-slate-400">说明文字</p>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：工具类思维
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "utility-first", title: "动手：工具类组合" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "utility-first-bb80-1",
            question: "关于「工具类思维」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "utility-first-bb80-2",
            question: "学习「工具类思维」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "utility-first-bb80-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `Tailwind 自带 slate/gray/zinc/neutral/stone 中性色与 red…rose 等彩色，每色 50–950。写法：bg-sky-500、text-slate-300、border-white/10。

斜杠透明度：bg-sky-500/20 = 20% 不透明度。自定义色写进 @theme 后可直接 bg-brand。

为什么这一节重要：色阶、透明度与语义色。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「颜色系统」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「颜色系统」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「colors」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是颜色系统？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="flex gap-2">
  <span class="h-10 w-10 rounded-md bg-sky-500"></span>
  <span class="h-10 w-10 rounded-md bg-sky-500/40"></span>
  <span class="h-10 w-10 rounded-md bg-indigo-500"></span>
  <span class="h-10 w-10 rounded-md text-white bg-slate-800 ring-1 ring-white/10"></span>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：颜色系统
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "colors", title: "动手：切换主题色" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "colors-6284-1",
            question: "关于「颜色系统」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "colors-6284-2",
            question: "学习「颜色系统」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "colors-6284-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `默认 1 = 0.25rem（4px）。p-4 = 16px，gap-3 = 12px。方向：p/px/py/pt/pr/pb/pl，m 同理。负 margin 用 -mt-2。

空间感靠一致的刻度：页面常用 4/6/8，卡片内 3/4，标题与正文 gap 用 mt-1 / mt-2。

为什么这一节重要：p / m / gap 与 4px 刻度。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「间距系统」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「间距系统」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「spacing」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是间距系统？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="space-y-3 p-6">
  <div class="h-8 rounded bg-sky-500/30"></div>
  <div class="flex gap-2">
    <div class="h-8 flex-1 rounded bg-sky-500/50"></div>
    <div class="h-8 flex-1 rounded bg-sky-500/70"></div>
  </div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：间距系统
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "spacing", title: "动手：调 padding / gap" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "spacing-348b-1",
            question: "关于「间距系统」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "spacing-348b-2",
            question: "学习「间距系统」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "spacing-348b-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `text-sm / text-base / text-lg / text-2xl…  font-medium / font-semibold  leading-relaxed  tracking-tight。

截断：truncate（单行）或 line-clamp-2。对齐 text-left/center/right。数字表格感用 tabular-nums。

为什么这一节重要：字号、字重、行高、截断。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「文字排版」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「文字排版」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「typography」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是文字排版？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<h2 class="text-2xl font-semibold tracking-tight text-white">
  标题
</h2>
<p class="mt-2 max-w-prose text-sm leading-relaxed text-slate-400">
  正文用稍小字号、更松行高，阅读更舒服。
</p>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：文字排版
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "typography", title: "动手：排版层级" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "typography-4acf-1",
            question: "关于「文字排版」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "typography-4acf-2",
            question: "学习「文字排版」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "typography-4acf-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `w-full、w-1/2、w-64、max-w-3xl、min-h-dvh、h-screen、size-10（宽高同值）、aspect-video。

内容区常用 max-w-3xl / max-w-6xl + mx-auto 居中。

为什么这一节重要：w/h、min/max、aspect。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「宽高与尺寸」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「宽高与尺寸」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「sizing」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是宽高与尺寸？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="mx-auto max-w-3xl px-4">
  <div class="aspect-video w-full rounded-xl bg-slate-800"></div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：宽高与尺寸
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "sizing", title: "动手：宽度与比例" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "sizing-5112-1",
            question: "关于「宽高与尺寸」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "sizing-5112-2",
            question: "学习「宽高与尺寸」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "sizing-5112-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `flex + items-center + justify-between 能解决大半顶栏/工具条。子项：flex-1 吃剩余空间，shrink-0 防压缩，gap-* 间隙。

方向：flex-col / flex-row；换行 flex-wrap。

为什么这一节重要：flex、对齐、换行、增长。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Flex 布局」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Flex 布局」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「flex」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Flex 布局？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<header class="flex items-center justify-between gap-3 px-4 py-3">
  <span class="font-semibold">Logo</span>
  <nav class="flex items-center gap-2">
    <a class="text-sm text-slate-300">文档</a>
    <button class="rounded-md bg-sky-500 px-3 py-1.5 text-sm text-white">开始</button>
  </nav>
</header>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Flex 布局
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "flex", title: "动手：Flex 对齐" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "flex-897a-1",
            question: "关于「Flex 布局」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "flex-897a-2",
            question: "学习「Flex 布局」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "flex-897a-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `grid grid-cols-2 md:grid-cols-3 gap-4。自适应：grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]。跨列 col-span-2。

仪表盘、卡片墙、表单两列常用 Grid。

为什么这一节重要：多列、自适应、跨列。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Grid 布局」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Grid 布局」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「grid」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Grid 布局？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-lg bg-slate-800 p-4">A</div>
  <div class="rounded-lg bg-slate-800 p-4">B</div>
  <div class="rounded-lg bg-slate-800 p-4 sm:col-span-2 lg:col-span-1">C</div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Grid 布局
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "grid", title: "动手：Grid 列数" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "grid-ff4a-1",
            question: "关于「Grid 布局」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "grid-ff4a-2",
            question: "学习「Grid 布局」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "grid-ff4a-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `relative 建立定位上下文；absolute inset-0 铺满父级。sticky top-0 做吸顶导航。z-10 / z-40 控制层叠。

遮罩：fixed inset-0 bg-black/50。

为什么这一节重要：relative / absolute / sticky / z。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「定位与层级」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「定位与层级」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「position」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是定位与层级？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="relative h-24 w-40 rounded-lg bg-slate-800">
  <span class="absolute -right-2 -top-2 rounded-full bg-rose-500 px-2 py-0.5 text-xs text-white">
    NEW
  </span>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：定位与层级
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "position", title: "动手：绝对定位角标" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "position-4757-1",
            question: "关于「定位与层级」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "position-4757-2",
            question: "学习「定位与层级」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "position-4757-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `rounded-md / rounded-xl、border border-white/10、shadow-sm / shadow-lg、ring-1 ring-white/10。

暗色 UI 常用「细边框 + 轻阴影 + 略亮表面」表达层级，而不是厚重阴影。

为什么这一节重要：表面质感三件套。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「边框 · 圆角 · 阴影」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「边框 · 圆角 · 阴影」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「borders」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是边框 · 圆角 · 阴影？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-lg ring-1 ring-white/5">
  卡片表面
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：边框 · 圆角 · 阴影
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "borders", title: "动手：圆角与阴影" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "borders-2cc6-1",
            question: "关于「边框 · 圆角 · 阴影」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "borders-2cc6-2",
            question: "学习「边框 · 圆角 · 阴影」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "borders-2cc6-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `hover:bg-sky-600、focus-visible:ring-2、active:scale-95、disabled:opacity-50。组合同级：group / group-hover:、peer / peer-checked:。

无障碍：用 focus-visible 而不是仅 focus，避免鼠标点击后一直有粗环。

为什么这一节重要：hover / focus / active / disabled。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「状态变体」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「状态变体」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「states」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是状态变体？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-white
  transition hover:bg-sky-600
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
  active:scale-[0.98] disabled:opacity-50">
  提交
</button>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：状态变体
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "states", title: "动手：hover / focus" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "states-34d9-1",
            question: "关于「状态变体」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "states-34d9-2",
            question: "学习「状态变体」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "states-34d9-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `默认写手机样式，再用 sm: md: lg: xl: 2xl: 增强。例如：flex-col md:flex-row、grid-cols-1 md:grid-cols-2。

隐藏：hidden md:block。容器：max-w + 内边距在窄屏更重要。

为什么这一节重要：sm / md / lg 移动优先。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「响应式设计」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「响应式设计」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「responsive」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是响应式设计？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
  <div class="h-20 rounded-lg bg-sky-500/20"></div>
  <div class="h-20 rounded-lg bg-sky-500/30"></div>
  <div class="h-20 rounded-lg bg-sky-500/40"></div>
  <div class="h-20 rounded-lg bg-sky-500/50"></div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：响应式设计
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "responsive", title: "动手：断点预览" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "responsive-3e80-1",
            question: "关于「响应式设计」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "responsive-3e80-2",
            question: "学习「响应式设计」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "responsive-3e80-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `常见策略：在 <html class=\\"dark\\"> 上切换。类名：bg-white dark:bg-slate-900。

本站以暗色为默认设计系统（token 直接暗色），产品里也可做 light + dark 双轨。

为什么这一节重要：class 策略与 dark: 前缀。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「暗色模式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「暗色模式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「dark-mode」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是暗色模式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-slate-200 bg-white p-4 text-slate-900
  dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
  自动适应主题
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：暗色模式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "dark-mode", title: "动手：切换明暗" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "dark-mode-9e1f-1",
            question: "关于「暗色模式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "dark-mode-9e1f-2",
            question: "学习「暗色模式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "dark-mode-9e1f-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `在 @theme 定义 --color-*、--font-*、--radius-*、--shadow-*，即可生成对应工具类。

原则：界面里少写任意值 p-[13px]，优先 token，保证全站一致。

为什么这一节重要：@theme 令牌与扩展。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「自定义主题」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `本站的 bg-primary、text-muted、rounded-lg 都来自 styles.css 的 @theme。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「自定义主题」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「custom」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是自定义主题？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `@theme {
  --color-primary: #38bdf8;
  --color-surface: #0f1720;
  --radius-lg: 16px;
  --font-display: "DM Sans", system-ui, sans-serif;
}`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：自定义主题
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "custom-8b90-1",
            question: "关于「自定义主题」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "custom-8b90-2",
            question: "学习「自定义主题」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "custom-8b90-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `transition-colors duration-150、transition-transform、hover:-translate-y-0.5。内置 animate-spin / pulse / bounce。

注意 prefers-reduced-motion：减少非必要动画。

为什么这一节重要：transition、duration、animate。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「过渡与动画」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「过渡与动画」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「animation」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是过渡与动画？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-slate-700 bg-slate-900 p-4
  transition duration-200 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg">
  Hover me
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：过渡与动画
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "animation", title: "动手：过渡效果" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "animation-6f1c-1",
            question: "关于「过渡与动画」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "animation-6f1c-2",
            question: "学习「过渡与动画」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "animation-6f1c-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `输入框：h-10 w-full rounded-lg border bg-transparent px-3 text-sm。焦点环 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30。

错误态：border-rose-500 text-rose-400。

为什么这一节重要：input / label / 校验态。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「表单样式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「表单样式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「forms」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是表单样式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<label class="block text-sm text-slate-300">
  邮箱
  <input class="mt-1 h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm
    placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
    placeholder="you@example.com" />
</label>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：表单样式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "forms", title: "动手：表单字段" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "forms-ac68-1",
            question: "关于「表单样式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "forms-ac68-2",
            question: "学习「表单样式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "forms-ac68-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `1) 配置迁移到 CSS（@theme）
2) 新引擎，构建更快
3) 动态工具类支持更好
4) 部分旧插件写法需对照迁移指南

学 v4 时，把「令牌在 CSS」当成默认心智。

为什么这一节重要：CSS-first、性能、兼容。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Tailwind v4 要点」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Tailwind v4 要点」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「v4」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Tailwind v4 要点？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `/* v3: tailwind.config.js theme.extend.colors.brand = '…' */
/* v4: */
@theme {
  --color-brand: #38bdf8;
}`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Tailwind v4 要点
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "v4", title: "动手：令牌驱动的 UI" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "v4-5ed3-1",
            question: "关于「Tailwind v4 要点」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "v4-5ed3-2",
            question: "学习「Tailwind v4 要点」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "v4-5ed3-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `表面 + 边框 + 内边距 + 标题层级 + 操作区。可加媒体区 aspect-video、标签 pill、底部操作栏。

为什么这一节重要：组合出产品级卡片。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「实战：卡片组件」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「实战：卡片组件」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「card-ui」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是实战：卡片组件？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<article class="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
  <div class="aspect-video bg-gradient-to-br from-sky-500/30 to-indigo-500/20"></div>
  <div class="p-4">
    <h3 class="font-semibold text-white">产品名</h3>
    <p class="mt-1 text-sm text-slate-400">一句话描述价值主张。</p>
    <button class="mt-4 rounded-md bg-sky-500 px-3 py-1.5 text-sm text-white">了解</button>
  </div>
</article>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：实战：卡片组件
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "card", title: "动手：卡片" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "card-ui-e1fc-1",
            question: "关于「实战：卡片组件」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "card-ui-e1fc-2",
            question: "学习「实战：卡片组件」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "card-ui-e1fc-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `桌面：flex 横排链接。移动：汉堡按钮 + 抽屉/折叠。sticky + backdrop-blur 很常见。

本站侧栏就是响应式导航的完整例子。

为什么这一节重要：顶栏 + 移动菜单模式。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「实战：导航栏」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「实战：导航栏」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「navbar」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是实战：导航栏？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
  <div class="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
    <span class="font-semibold">Brand</span>
    <nav class="ml-auto hidden gap-4 md:flex">…</nav>
    <button class="md:hidden">Menu</button>
  </div>
</header>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：实战：导航栏
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "navbar", title: "动手：导航" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "navbar-dd47-1",
            question: "关于「实战：导航栏」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "navbar-dd47-2",
            question: "学习「实战：导航栏」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "navbar-dd47-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
        title: "概念深讲",
        body: `常见结构：左侧固定宽侧栏 + 右侧主内容。主区顶部工具条，下方 grid 统计卡 + 表格/图表。

布局：min-h-dvh + flex；侧栏 w-64 shrink-0。

为什么这一节重要：侧栏 + 主区 + 统计卡。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「实战：仪表盘布局」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「实战：仪表盘布局」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「dashboard」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是实战：仪表盘布局？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
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
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：实战：仪表盘布局
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "dashboard", title: "动手：仪表盘" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "dashboard-dc71-1",
            question: "关于「实战：仪表盘布局」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "dashboard-dc71-2",
            question: "学习「实战：仪表盘布局」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "dashboard-dc71-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `空状态：虚线边框 + 居中文案。加载：animate-pulse 骨架。标签：rounded-full bg-…/15 text-…。分割线：border-t / divide-y。

把模式当乐高，而不是每次从零设计。

为什么这一节重要：空状态、加载、标签、分割。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「常用模式速通」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「常用模式速通」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「patterns」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是常用模式速通？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-dashed border-slate-700 px-4 py-12 text-center">
  <p class="text-sm text-slate-400">暂无数据</p>
  <button class="mt-3 text-sm text-sky-400">新建一项</button>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：常用模式速通
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "patterns-9dea-1",
            question: "关于「常用模式速通」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "patterns-9dea-2",
            question: "学习「常用模式速通」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "patterns-9dea-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
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
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `1) 用构建工具集成，不要生产环境 CDN 乱拼（教学可用 CDN）
2) 组件化复用，避免复制超长 class 十遍
3) 对比度达标；焦点可见
4) 尊重 reduced-motion
5) 任意值克制使用
6) 与设计令牌对齐

恭喜学到这里——去练习场与结业证明收个尾吧。

为什么这一节重要：体积、可维护、无障碍。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「生产与最佳实践」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「生产与最佳实践」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「production」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是生产与最佳实践？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// <button className={cn("px-3 py-2", active && "bg-sky-500")} />`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：生产与最佳实践
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "production-fd89-1",
            question: "关于「生产与最佳实践」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "production-fd89-2",
            question: "学习「生产与最佳实践」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "production-fd89-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "arbitrary",
    title: "任意值与修饰符",
    summary: "[] 任意值、/opacity、!important、CSS 变量简写。",
    level: "进阶",
    track: "进阶语法",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官方文档称 Arbitrary values：当默认刻度不够时用方括号。

• p-[13px]、w-[28rem]、grid-cols-[1fr_2fr]
• 透明度：bg-black/50、text-white/80
• 重要：hidden! 或 !flex（v4 支持后缀 !）
• 变量：p-(--my-space)、text-(color:--brand)
• 类型提示：text 既可是字号也可是颜色，用 text-(length:--x) 消歧。

对照官网 Core Syntax，这是写生产代码最常用的「逃生舱」。

为什么这一节重要：[] 任意值、/opacity、!important、CSS 变量简写。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「任意值与修饰符」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「任意值与修饰符」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「arbitrary」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是任意值与修饰符？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="w-[min(100%,28rem)] rounded-[1.25rem] bg-sky-500/15 p-[clamp(1rem,3vw,2rem)] text-[color:var(--brand,#38bdf8)]">
  任意值 + 透明度 + 变量
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：任意值与修饰符
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "arbitrary-4d26-1",
            question: "关于「任意值与修饰符」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "arbitrary-4d26-2",
            question: "学习「任意值与修饰符」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "arbitrary-4d26-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "variants-deep",
    title: "变体进阶",
    summary: "group / peer / has / not / nth / ARIA。",
    level: "进阶",
    track: "进阶语法",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Hover, focus, and other states 覆盖大量变体。进阶组合：

• group / group-hover: 父状态影响子
• peer / peer-checked: 兄弟状态（常用于自定义 checkbox）
• has-[:checked]、has-[img]：容器查询子树
• not-hover、not-disabled
• first / last / odd / even / nth-*
• aria-expanded:、data-[state=open]:
• 堆叠：dark:md:hover:bg-sky-500（从左到右）

为什么这一节重要：group / peer / has / not / nth / ARIA。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「变体进阶」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「变体进阶」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「variants-deep」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是变体进阶？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<a class="group flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800">
  <span class="font-medium group-hover:text-sky-400">标题</span>
  <span class="text-slate-500 group-hover:text-slate-300">副文</span>
</a>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：变体进阶
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "states", title: "动手：状态变体" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "variants-deep-613b-1",
            question: "关于「变体进阶」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "variants-deep-613b-2",
            question: "学习「变体进阶」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "variants-deep-613b-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "backgrounds",
    title: "背景与渐变",
    summary: "bg-color / gradient / clip / attachment。",
    level: "入门",
    track: "视觉",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Backgrounds 章节：background-color、image（含 linear/radial/conic gradient 工具类）、position、size、repeat、attachment、origin、clip。

常用配方：
• bg-gradient-to-r from-sky-500 to-indigo-500
• bg-clip-text text-transparent 做渐变字
• bg-cover bg-center
• bg-fixed 视差感（注意移动端性能）

为什么这一节重要：bg-color / gradient / clip / attachment。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「背景与渐变」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「背景与渐变」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「backgrounds」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是背景与渐变？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl bg-gradient-to-br from-sky-500 via-cyan-400 to-indigo-500 p-6">
  <p class="bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-white to-white/60">
    Gradient
  </p>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：背景与渐变
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "colors", title: "动手：色彩与表面" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "backgrounds-e850-1",
            question: "关于「背景与渐变」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "backgrounds-e850-2",
            question: "学习「背景与渐变」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "backgrounds-e850-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "effects",
    title: "阴影 · 透明度 · 混合",
    summary: "box-shadow、text-shadow、opacity、mix-blend。",
    level: "入门",
    track: "视觉",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Effects：box-shadow / inset-shadow / text-shadow（v4.1+）、opacity、mix-blend-mode、background-blend-mode、mask-*。

暗色 UI 偏好 shadow-sm + ring-1 ring-white/10，而不是厚重大阴影。

为什么这一节重要：box-shadow、text-shadow、opacity、mix-blend。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「阴影 · 透明度 · 混合」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「阴影 · 透明度 · 混合」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「effects」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是阴影 · 透明度 · 混合？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl bg-slate-900/80 p-4 shadow-lg ring-1 ring-white/10">
  <p class="text-sm text-white/90">ring + shadow + 半透明表面</p>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：阴影 · 透明度 · 混合
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "borders", title: "动手：表面质感" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "effects-2bb3-1",
            question: "关于「阴影 · 透明度 · 混合」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "effects-2bb3-2",
            question: "学习「阴影 · 透明度 · 混合」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "effects-2bb3-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "filters",
    title: "滤镜与 Backdrop",
    summary: "blur / brightness / backdrop-blur。",
    level: "进阶",
    track: "视觉",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `filter：blur、brightness、contrast、grayscale、hue-rotate、invert、saturate、sepia、drop-shadow。

backdrop-*：对元素背后的内容滤镜，经典毛玻璃：bg-white/10 backdrop-blur-md。

注意：大面积 blur 有性能成本。

为什么这一节重要：blur / brightness / backdrop-blur。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「滤镜与 Backdrop」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「滤镜与 Backdrop」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「filters」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是滤镜与 Backdrop？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
  Frosted glass
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：滤镜与 Backdrop
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "animation", title: "动手：视觉效果" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "filters-2c98-1",
            question: "关于「滤镜与 Backdrop」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "filters-2c98-2",
            question: "学习「滤镜与 Backdrop」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "filters-2c98-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "transforms",
    title: "变换 Transforms",
    summary: "scale / rotate / translate / skew。",
    level: "进阶",
    track: "交互",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Transforms：scale、rotate、translate、skew、origin、perspective、backface。

动效组合：transition + hover:-translate-y-1 hover:scale-105。
负值：-translate-x-1、-rotate-6。

为什么这一节重要：scale / rotate / translate / skew。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「变换 Transforms」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「变换 Transforms」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「transforms」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是变换 Transforms？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-white transition
  hover:-translate-y-0.5 hover:scale-105 active:scale-95">
  Lift
</button>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：变换 Transforms
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "animation", title: "动手：变换与过渡" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "transforms-6348-1",
            question: "关于「变换 Transforms」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "transforms-6348-2",
            question: "学习「变换 Transforms」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "transforms-6348-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "container-queries",
    title: "容器查询",
    summary: "@container 与 @ 变体。",
    level: "进阶",
    track: "进阶语法",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `现代布局可用容器查询：父级 @container，子级 @md:、@max-md: 等基于容器宽度响应，而不是视口。

适合卡片进仪表盘网格：同一组件在窄栏/宽栏自动改布局。

为什么这一节重要：@container 与 @ 变体。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「容器查询」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `命名容器：@container/main，子级 @md/main:flex-row。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「容器查询」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「container-queries」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是容器查询？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="@container">
  <div class="flex flex-col gap-2 @md:flex-row">
    <div class="flex-1 rounded bg-slate-800 p-3">A</div>
    <div class="flex-1 rounded bg-slate-800 p-3">B</div>
  </div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：容器查询
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "container-queries-f543-1",
            question: "关于「容器查询」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "container-queries-f543-2",
            question: "学习「容器查询」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "container-queries-f543-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "directives",
    title: "指令与函数",
    summary: "@import @theme @utility @apply --spacing()。",
    level: "进阶",
    track: "主题",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `v4 核心指令：
• @import \\"tailwindcss\\"
• @theme { } 设计令牌
• @source 额外扫描路径
• @utility 自定义工具类
• @variant / @custom-variant
• @apply 组合工具类（克制使用）
• @plugin / @config 兼容层

函数：--alpha()、--spacing() 在 CSS 中读取主题刻度。

为什么这一节重要：@import @theme @utility @apply --spacing()。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「指令与函数」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「指令与函数」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「directives」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是指令与函数？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `@import "tailwindcss";

@theme {
  --color-brand: #38bdf8;
  --spacing-card: 1.5rem;
}

@utility card-surface {
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  padding: var(--spacing-card);
}`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：指令与函数
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "v4", title: "动手：令牌" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "directives-8fe7-1",
            question: "关于「指令与函数」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "directives-8fe7-2",
            question: "学习「指令与函数」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "directives-8fe7-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "无障碍",
    summary: "焦点、对比度、sr-only、运动偏好。",
    level: "实战",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网与生产实践：
• focus-visible:ring 保证键盘可见焦点
• 颜色对比达标（text-muted 勿过淡）
• sr-only 提供读屏文本
• motion-reduce:transition-none
• 不要用 div 冒充 button 却不处理键盘
• forced-colors 场景关注 forced-color-adjust

为什么这一节重要：焦点、对比度、sr-only、运动偏好。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「无障碍」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「无障碍」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「accessibility」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是无障碍？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-white
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300
  motion-reduce:transition-none">
  <span class="sr-only">关闭对话框</span>
  OK
</button>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：无障碍
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "accessibility-0ff8-1",
            question: "关于「无障碍」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "accessibility-0ff8-2",
            question: "学习「无障碍」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "accessibility-0ff8-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "svg",
    title: "SVG 样式",
    summary: "fill / stroke / size 与 currentColor。",
    level: "入门",
    track: "视觉",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `fill-sky-500、stroke-slate-400、stroke-2。图标常用 text-current + fill-current 跟随文字色。size-5 控制图标盒。

为什么这一节重要：fill / stroke / size 与 currentColor。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「SVG 样式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「SVG 样式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「svg」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是SVG 样式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<svg class="size-6 fill-none stroke-current stroke-2 text-sky-400" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="9" />
</svg>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：SVG 样式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "svg-ae8e-1",
            question: "关于「SVG 样式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "svg-ae8e-2",
            question: "学习「SVG 样式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "svg-ae8e-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "scroll",
    title: "滚动与 Snap",
    summary: "scroll-smooth、snap、scroll-mt。",
    level: "进阶",
    track: "交互",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `scroll-smooth、scroll-mt-*（锚点避开吸顶导航）、snap-x snap-mandatory、snap-center、overscroll-contain。

落地页分区导航常用 scroll-mt-20。

为什么这一节重要：scroll-smooth、snap、scroll-mt。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「滚动与 Snap」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「滚动与 Snap」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「scroll」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是滚动与 Snap？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="flex snap-x snap-mandatory gap-3 overflow-x-auto">
  <div class="w-64 shrink-0 snap-center rounded-xl bg-slate-800 p-4">1</div>
  <div class="w-64 shrink-0 snap-center rounded-xl bg-slate-800 p-4">2</div>
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：滚动与 Snap
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "scroll-089b-1",
            question: "关于「滚动与 Snap」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "scroll-089b-2",
            question: "学习「滚动与 Snap」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "scroll-089b-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "tables",
    title: "表格样式",
    summary: "table-auto、边框合并、对齐。",
    level: "入门",
    track: "布局",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `table-auto / table-fixed、border-collapse、border-spacing、caption-side。配合 divide-y 与 text-left 做数据表。

为什么这一节重要：table-auto、边框合并、对齐。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「表格样式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「表格样式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「tables」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是表格样式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<table class="w-full table-auto border-collapse text-sm">
  <thead class="text-left text-slate-400">
    <tr class="border-b border-slate-700"><th class="py-2">Name</th><th>Role</th></tr>
  </thead>
  <tbody class="divide-y divide-slate-800">
    <tr><td class="py-2">Ada</td><td>Engineer</td></tr>
  </tbody>
</table>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：表格样式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "tables-9ab2-1",
            question: "关于「表格样式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "tables-9ab2-2",
            question: "学习「表格样式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "tables-9ab2-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "reusing-styles",
    title: "复用样式",
    summary: "组件化、cn()、@apply 边界。",
    level: "进阶",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官方推荐顺序：
1. 抽成框架组件（React/Vue）传 className
2. 用 cn/twMerge 合并冲突
3. 必要时 @utility / @apply

不要复制 20 行 class 到 15 个文件还不抽组件。

为什么这一节重要：组件化、cn()、@apply 边界。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「复用样式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「复用样式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「reusing-styles」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是复用样式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

<button className={cn("rounded-lg px-3 py-2", active && "bg-sky-500 text-white")} />`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：复用样式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "reusing-styles-1f8e-1",
            question: "关于「复用样式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "reusing-styles-1f8e-2",
            question: "学习「复用样式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "reusing-styles-1f8e-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "detecting-classes",
    title: "类名检测与动态类",
    summary: "内容扫描、安全列表、动态拼接陷阱。",
    level: "进阶",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `Tailwind 通过扫描源码提取完整类名字符串。动态拼接常失败：

坏：\`bg-\${color}-500\`
好：完整字面量映射表 \`color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'\`

额外路径用 @source；极端用 safelist（v3）或保证源码出现完整类名。

为什么这一节重要：内容扫描、安全列表、动态拼接陷阱。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「类名检测与动态类」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「类名检测与动态类」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「detecting-classes」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是类名检测与动态类？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `const map = {
  sky: "bg-sky-500",
  indigo: "bg-indigo-500",
} as const;

<div className={map[hue]} />`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：类名检测与动态类
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "detecting-classes-85a7-1",
            question: "关于「类名检测与动态类」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "detecting-classes-85a7-2",
            question: "学习「类名检测与动态类」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "detecting-classes-85a7-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "editor-setup",
    title: "编辑器与 DX",
    summary: "IntelliSense、Prettier 插件、排序。",
    level: "入门",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官方推荐：
• VS Code Tailwind CSS IntelliSense
• Prettier plugin 自动排序 class
• 保存时格式化

团队一致的 class 顺序能大幅降低 diff 噪音。

为什么这一节重要：IntelliSense、Prettier 插件、排序。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「编辑器与 DX」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `本教程站本身即可当「可读的 class 范例库」——复制 Demo 源码到项目里改。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「编辑器与 DX」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「editor-setup」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是编辑器与 DX？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `// 编辑器与 DX
// slug: editor-setup
console.log('demo: editor-setup')`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：编辑器与 DX
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "editor-setup-f71f-1",
            question: "关于「编辑器与 DX」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "editor-setup-f71f-2",
            question: "学习「编辑器与 DX」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "editor-setup-f71f-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "upgrade-guide",
    title: "从 v3 升级到 v4",
    summary: "配置迁移、废弃项、兼容层。",
    level: "进阶",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `v4 重点变化：
• CSS-first @theme 替代大部分 tailwind.config 主题扩展
• 新引擎，性能大幅提升
• 部分工具类更名/行为调整（以官网 Upgrade guide 为准）
• @config 可继续指向旧 JS 配置做迁移

建议：新项目直接 v4；旧项目按官方 upgrade 工具逐步迁。

为什么这一节重要：配置迁移、废弃项、兼容层。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「从 v3 升级到 v4」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「从 v3 升级到 v4」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「upgrade-guide」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是从 v3 升级到 v4？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `/* v3 theme.extend.colors.brand */
/* v4 */
@theme {
  --color-brand: #38bdf8;
}`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：从 v3 升级到 v4
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "upgrade-guide-4c43-1",
            question: "关于「从 v3 升级到 v4」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "upgrade-guide-4c43-2",
            question: "学习「从 v3 升级到 v4」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "upgrade-guide-4c43-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "official-map",
    title: "对照官网地图",
    summary: "文档导航、Reference、本站如何配合。",
    level: "入门",
    track: "基础",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 tailwindcss.com/docs：权威 API、每个工具类的完整表。

本站 learning-tailwind：中文学习路径、交互 Demo、测验、Playground、设计工坊、进度系统。

建议：本站学概念 → 本站 Reference 速查 → 官网查边缘参数与兼容性。

说明：官网目前未在生产环境提供 /llms.txt（社区讨论与草案分支存在）；本站提供 /llms.txt 便于 AI 阅读本课程大纲。

为什么这一节重要：文档导航、Reference、本站如何配合。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「对照官网地图」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `打开侧栏「工具类 Reference」可按分类浏览 170+ 条目，并外链到官网对应页。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「对照官网地图」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「official-map」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是对照官网地图？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `// 对照官网地图
// slug: official-map
console.log('demo: official-map')`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：对照官网地图
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "official-map-8bc2-1",
            question: "关于「对照官网地图」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "official-map-8bc2-2",
            question: "学习「对照官网地图」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "official-map-8bc2-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "preflight",
    title: "Preflight 基础重置",
    summary: "官网 Base styles：modern-normalize 与默认边距。",
    level: "入门",
    track: "基础",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Base styles → Preflight：一套建立在 modern-normalize 上的基础样式。

作用包括：
• 去掉默认 margin
• 标题/段落继承字号
• 图片默认 block、自适应
• 表单控件边框可继承
• border-box 全局

写页面时若「默认样式怪」，先查 Preflight 是否被覆盖。

为什么这一节重要：官网 Base styles：modern-normalize 与默认边距。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Preflight 基础重置」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `完整规则见官网 /docs/preflight。可用 @layer base 追加，而不是硬改第三方组件。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Preflight 基础重置」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「preflight」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Preflight 基础重置？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `/* Preflight 会大致等价于这些思路（示意） */
*,
::after,
::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Preflight 基础重置
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "preflight-0b00-1",
            question: "关于「Preflight 基础重置」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "preflight-0b00-2",
            question: "学习「Preflight 基础重置」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "preflight-0b00-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "layout-display",
    title: "Display · Overflow · Object · Columns",
    summary: "官网 Layout：display/float/overflow/object-fit/columns。",
    level: "入门",
    track: "布局",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Layout 章节除 position 外还有：

• display：block / inline / flex / grid / hidden / contents / sr-only 相关
• float / clear：图文环绕（现代布局较少）
• isolation：层叠上下文
• object-fit / object-position：img/video 填充
• overflow / overscroll-behavior：裁剪与滚动链
• columns：多列文本排版
• aspect-ratio、box-sizing、break-*

本课补齐此前课程未单独展开的部分。

为什么这一节重要：官网 Layout：display/float/overflow/object-fit/columns。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Display · Overflow · Object · Columns」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Display · Overflow · Object · Columns」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「layout-display」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Display · Overflow · Object · Columns？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<img class="h-40 w-full object-cover object-center" src="..." alt="" />
<div class="max-h-48 overflow-auto overscroll-contain">…长内容…</div>
<div class="columns-2 gap-6">…多列正文…</div>
<div class="hidden md:block">仅桌面显示</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Display · Overflow · Object · Columns
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "sizing", title: "动手：尺寸与裁剪" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "layout-display-ff75-1",
            question: "关于「Display · Overflow · Object · Columns」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "layout-display-ff75-2",
            question: "学习「Display · Overflow · Object · Columns」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "layout-display-ff75-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "masks",
    title: "Mask 遮罩",
    summary: "官网 Effects：mask-image 与相关属性。",
    level: "进阶",
    track: "视觉",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网 Effects 含 mask-image / size / position / repeat / origin / clip / composite / mode / type。

用于渐隐边缘、不规则裁剪、与渐变 mask 结合做 fade。兼容性需参考官网 Compatibility。

为什么这一节重要：官网 Effects：mask-image 与相关属性。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「Mask 遮罩」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「Mask 遮罩」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「masks」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是Mask 遮罩？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `<div class="h-32 w-full bg-gradient-to-r from-sky-500 to-indigo-500
  mask-[linear-gradient(to_bottom,black,transparent)]">
  底部渐隐
</div>`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：Mask 遮罩
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "masks-ce38-1",
            question: "关于「Mask 遮罩」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "masks-ce38-2",
            question: "学习「Mask 遮罩」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "masks-ce38-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "custom-styles",
    title: "添加自定义样式",
    summary: "官网 Adding custom styles 全链路。",
    level: "进阶",
    track: "主题",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `官网核心概念页覆盖：
1. 任意值 []
2. 主题扩展 @theme
3. 自定义工具 @utility
4. 自定义变体 @custom-variant
5. 任意变体 [&_svg]:
6. 何时写真正的 CSS

原则：能进主题的进主题；一次性的用任意值；复用多次抽 @utility 或组件。

为什么这一节重要：官网 Adding custom styles 全链路。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「添加自定义样式」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「添加自定义样式」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「custom-styles」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是添加自定义样式？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "对应源码",
        lang: "tsx",
        code: `@theme {
  --color-brand: #38bdf8;
}

@utility content-auto {
  content-visibility: auto;
}

/* 任意变体 */
/* class="[&_svg]:size-4" */`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：添加自定义样式
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      { type: "demo", kind: "v4", title: "动手：令牌与扩展" },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "custom-styles-5358-1",
            question: "关于「添加自定义样式」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "custom-styles-5358-2",
            question: "学习「添加自定义样式」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "custom-styles-5358-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
  {
    slug: "compatibility",
    title: "浏览器兼容",
    summary: "官网 Compatibility：现代 CSS 基线。",
    level: "进阶",
    track: "工程",
    minutes: 12,
    blocks: [
      {
        type: "text",
        title: "概念深讲",
        body: `Tailwind v4 依赖较新的浏览器能力（如 cascade layers、color-mix、@property 等，以官网 Compatibility 列表为准）。

生产前：
• 确认目标浏览器矩阵
• 对必须支持的旧环境评估是否仍用 v3 或 polyfill
• 渐进增强，不假设所有 mask/container 特性都可用

为什么这一节重要：官网 Compatibility：现代 CSS 基线。不只是名词，而是后续所有实践的前提。学习时请同时抓住三件事：① 它解决什么问题；② 核心机制/API 是什么；③ 什么情况下不该用、常见坑是什么。`,
      },
      {
        type: "text",
        title: "机制与关键点",
        body: `围绕「浏览器兼容」，建议你用下面清单自检是否真懂：
· 输入/前置条件是什么？
· 输出/副作用是什么？
· 与相邻概念如何区分？（容易混淆的一对一对比）
· 复杂度或性能上的直觉（是否 O(n)、是否阻塞、是否有状态）
· 在真实项目里通常放在哪一层（入口、中间件、数据层、UI、运维）？

把每个点用自己的话写进笔记；能讲给别人听，才算过关。`,
      },
      {
        type: "text",
        title: "补充要点 1",
        body: `细节与版本表以 https://tailwindcss.com/docs/compatibility 为准，随浏览器更新。`,
      },
      {
        type: "text",
        title: "实践步骤",
        body: `1. 只读官方/权威文档里与「浏览器兼容」直接相关的一小节，不要发散。
2. 在本机或本站 Demo 里最小复现：只验证一个行为。
3. 故意制造一个错误（错参数、错顺序、错环境），观察报错信息。
4. 改对后再总结：「正确做法 / 错误做法 / 如何排查」三行笔记。
5. 做本节测验；错题收入错题本，隔天再测一次。`,
      },
      {
        type: "text",
        title: "踩坑与排障",
        body: `· 文档示例能跑、自己环境不能：先对齐版本与配置，再怀疑代码。
· 「好像懂了」但默写不出来：回去做最小复现，而不是再看一遍视频。
· 多个概念一起崩：二分法缩小范围（注释一半配置/代码）。
· 与「compatibility」相关的问题，优先查官方 FAQ 与 issue 里的 breaking change。
· 生产环境多一项：可观测性（日志/指标）和回滚策略。`,
      },
      {
        type: "text",
        title: "面试 / 复盘一问",
        body: `请用 90 秒回答：什么是浏览器兼容？它解决什么问题？举一个你会在项目里使用（或拒绝使用）的场景，并说明取舍。

加分项：对比一个替代方案，并说出性能、复杂度或可维护性上的差异。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `// 浏览器兼容
// slug: compatibility
console.log('demo: compatibility')`,
      },
      {
        type: "code",
        title: "自检清单（注释版）",
        lang: "text",
        code: `// [ ] 能用自己的话解释：浏览器兼容
// [ ] 能默写最小示例
// [ ] 能说出 2 个踩坑
// [ ] 能在项目场景里决定用/不用`,
      },
      {
        type: "tip",
        body: `先求「能复现 + 能讲清」，再求「背全 API」。本课 Demo 与测验就是你的验收标准。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "compatibility-c062-1",
            question: "关于「浏览器兼容」，最准确的理解是？",
            options: ["只需要记住名词即可", "要同时理解问题、机制、适用边界与常见坑", "与实践无关", "只能在考试中使用"],
            answer: 1,
            explain: "概念 + 机制 + 边界 + 排障，才是可迁移的掌握。",
          },
          {
            id: "compatibility-c062-2",
            question: "学习「浏览器兼容」时，优先行动是？",
            options: ["一次看完所有周边主题", "最小复现一个行为，再扩展", "只收藏文档不动手", "跳过报错信息"],
            answer: 1,
            explain: "最小复现建立反馈回路。",
          },
          {
            id: "compatibility-c062-3",
            question: "遇到「示例能跑、自己环境不能」时，你应先？",
            options: ["重写整个项目", "对齐版本/配置并阅读完整报错", "忽略错误继续下一步", "删除全部依赖"],
            answer: 1,
            explain: "环境与版本是第一怀疑对象。",
          },
        ],
      },
    ],
  },
];

export const TRACKS = [
  "基础",
  "布局",
  "视觉",
  "交互",
  "进阶语法",
  "主题",
  "组件",
  "工程",
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
