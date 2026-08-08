import type { DemoKind } from "@/data/lessons";

export function getDemoSource(kind: DemoKind): {
  title: string;
  lang: string;
  code: string;
} {
  const map: Record<DemoKind, { title: string; lang: string; code: string }> = {
    "utility-first": {
      title: "工具类按钮",
      lang: "html",
      code: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">
  保存
</button>`,
    },
    colors: {
      title: "色阶",
      lang: "html",
      code: `<div class="flex gap-2">
  <span class="size-10 rounded-md bg-sky-300"></span>
  <span class="size-10 rounded-md bg-sky-500"></span>
  <span class="size-10 rounded-md bg-sky-700"></span>
</div>`,
    },
    spacing: {
      title: "间距",
      lang: "html",
      code: `<div class="space-y-3 p-6">
  <div class="h-8 rounded bg-sky-500/40"></div>
  <div class="flex gap-2">…</div>
</div>`,
    },
    typography: {
      title: "排版",
      lang: "html",
      code: `<h2 class="text-2xl font-semibold tracking-tight">标题</h2>
<p class="mt-2 text-sm leading-relaxed text-slate-400">正文</p>`,
    },
    sizing: {
      title: "尺寸",
      lang: "html",
      code: `<div class="mx-auto w-full max-w-md">
  <div class="aspect-video rounded-xl bg-slate-800"></div>
</div>`,
    },
    flex: {
      title: "Flex",
      lang: "html",
      code: `<div class="flex items-center justify-between gap-3">
  <span>Logo</span>
  <div class="flex gap-2">…</div>
</div>`,
    },
    grid: {
      title: "Grid",
      lang: "html",
      code: `<div class="grid grid-cols-2 gap-3 md:grid-cols-3">…</div>`,
    },
    position: {
      title: "定位",
      lang: "html",
      code: `<div class="relative">
  <span class="absolute -right-2 -top-2 rounded-full bg-rose-500 px-2 text-xs">NEW</span>
</div>`,
    },
    borders: {
      title: "边框阴影",
      lang: "html",
      code: `<div class="rounded-xl border border-white/10 shadow-lg ring-1 ring-white/5">…</div>`,
    },
    states: {
      title: "状态",
      lang: "html",
      code: `<button class="bg-sky-500 transition hover:bg-sky-600 focus-visible:ring-2">…</button>`,
    },
    responsive: {
      title: "响应式",
      lang: "html",
      code: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">…</div>`,
    },
    "dark-mode": {
      title: "暗色",
      lang: "html",
      code: `<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">…</div>`,
    },
    animation: {
      title: "过渡",
      lang: "html",
      code: `<div class="transition hover:-translate-y-1 hover:shadow-lg">Hover me</div>`,
    },
    forms: {
      title: "表单",
      lang: "html",
      code: `<input class="h-10 w-full rounded-lg border px-3 focus:ring-2 focus:ring-sky-500/30" />`,
    },
    card: {
      title: "卡片",
      lang: "html",
      code: `<article class="overflow-hidden rounded-xl border">
  <div class="aspect-video"></div>
  <div class="p-4">…</div>
</article>`,
    },
    navbar: {
      title: "导航",
      lang: "html",
      code: `<header class="sticky top-0 flex h-14 items-center border-b backdrop-blur">…</header>`,
    },
    dashboard: {
      title: "仪表盘",
      lang: "html",
      code: `<div class="flex min-h-72">
  <aside class="w-40 shrink-0">侧栏</aside>
  <main class="flex-1">主区</main>
</div>`,
    },
    v4: {
      title: "@theme",
      lang: "css",
      code: `@theme {
  --color-primary: #38bdf8;
  --radius-lg: 16px;
}`,
    },
  };
  return map[kind];
}
