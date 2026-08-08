import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/cheatsheet")({
  component: CheatsheetPage,
});

const SECTIONS: { title: string; items: { k: string; v: string }[] }[] = [
  {
    title: "Core Syntax",
    items: [
      { k: "utility", v: "flex / p-4 / text-lg" },
      { k: "variant:utility", v: "hover:bg-sky-500 · 可堆叠 dark:md:hover:" },
      { k: "utility-[…]", v: "任意值 p-[13px] grid-cols-[1fr_2fr]" },
      { k: "utility-(--var)", v: "CSS 变量简写 p-(--space)" },
      { k: "utility/opacity", v: "bg-black/50 text-white/80" },
      { k: "-utility", v: "负值 -mt-4 -translate-x-1" },
      { k: "utility!", v: "important：hidden! / flex!" },
    ],
  },
  {
    title: "布局 Layout",
    items: [
      { k: "flex / grid / block", v: "display" },
      { k: "items-* / justify-*", v: "对齐" },
      { k: "gap-*", v: "间隙" },
      { k: "grid-cols-* / col-span-*", v: "栅格" },
      { k: "relative / absolute / sticky", v: "定位" },
      { k: "inset-0 / z-*", v: "铺满与层级" },
      { k: "overflow-* / aspect-*", v: "裁剪与比例" },
      { k: "@container + @md:", v: "容器查询" },
    ],
  },
  {
    title: "间距与尺寸",
    items: [
      { k: "p m gap · 1=0.25rem", v: "间距刻度" },
      { k: "w h size min max", v: "尺寸" },
      { k: "max-w-3xl mx-auto", v: "内容居中" },
      { k: "min-h-dvh", v: "整屏" },
      { k: "space-y-*", v: "子项垂直间距" },
    ],
  },
  {
    title: "排版 Typography",
    items: [
      { k: "text-sm…text-2xl", v: "字号" },
      { k: "font-medium / semibold", v: "字重" },
      { k: "leading-relaxed tracking-tight", v: "行高字距" },
      { k: "truncate / line-clamp-2", v: "截断" },
      { k: "text-balance / tabular-nums", v: "标题平衡 / 数字对齐" },
    ],
  },
  {
    title: "颜色与表面",
    items: [
      { k: "bg-sky-500 / text-slate-400", v: "色板 50–950" },
      { k: "bg-sky-500/20", v: "透明度" },
      { k: "from- to- via- + gradient", v: "渐变" },
      { k: "border / ring / shadow", v: "边框光环阴影" },
      { k: "rounded-*", v: "圆角" },
      { k: "backdrop-blur + bg-*/10", v: "毛玻璃" },
    ],
  },
  {
    title: "状态与响应",
    items: [
      { k: "hover focus-visible active", v: "交互" },
      { k: "disabled: optional: invalid:", v: "表单态" },
      { k: "group / peer / has- / not-", v: "关系选择" },
      { k: "first last odd even nth-*", v: "结构伪类" },
      { k: "sm: md: lg: xl: 2xl:", v: "移动优先断点" },
      { k: "dark:", v: "暗色" },
      { k: "motion-reduce:", v: "减少动画" },
      { k: "aria-* data-[x]:", v: "无障碍与数据属性" },
    ],
  },
  {
    title: "动效 Transforms",
    items: [
      { k: "transition-colors duration-150", v: "过渡" },
      { k: "animate-spin pulse bounce", v: "内置动画" },
      { k: "scale rotate translate skew", v: "变换" },
      { k: "hover:-translate-y-1", v: "微交互" },
    ],
  },
  {
    title: "主题与指令 v4",
    items: [
      { k: '@import "tailwindcss"', v: "入口" },
      { k: "@theme { --color-* }", v: "设计令牌" },
      { k: "@source", v: "额外扫描路径" },
      { k: "@utility", v: "自定义工具类" },
      { k: "@variant / @custom-variant", v: "自定义变体" },
      { k: "@apply", v: "组合（克制）" },
      { k: "--spacing() --alpha()", v: "主题函数" },
    ],
  },
  {
    title: "工程实践",
    items: [
      { k: "cn() / twMerge", v: "合并冲突 class" },
      { k: "完整字面量 class", v: "禁止 bg-${x}-500 拼接" },
      { k: "组件化复用", v: "先抽组件再 @apply" },
      { k: "IntelliSense + Prettier 排序", v: "DX" },
      { k: "focus-visible + 对比度", v: "无障碍" },
    ],
  },
];

function CheatsheetPage() {
  return (
    <div className="mx-auto max-w-3xl pb-16">
      <header className="mb-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <BookMarked className="h-3.5 w-3.5" />
          速查
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-fg sm:text-3xl">
          Tailwind 速查表
        </h1>
        <p className="mt-2 text-sm text-muted">
          高频语法一页带走。完整工具类目录见{" "}
          <Link
            to="/reference"
            className="text-primary no-underline hover:underline"
          >
            Reference
          </Link>
          ；权威参数表见{" "}
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-primary no-underline hover:underline"
          >
            官网 docs
            <ExternalLink className="h-3 w-3" />
          </a>
          。
        </p>
      </header>

      <div className="grid gap-4">
        {SECTIONS.map((sec) => (
          <section
            key={sec.title}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <h2 className="border-b border-border bg-surface-2 px-4 py-2.5 font-display text-sm font-semibold text-fg">
              {sec.title}
            </h2>
            <ul className="divide-y divide-border">
              {sec.items.map((it) => (
                <li
                  key={it.k}
                  className="grid gap-1 px-4 py-2.5 sm:grid-cols-[13rem_1fr] sm:gap-3"
                >
                  <code className="font-mono text-xs text-primary">{it.k}</code>
                  <span className="text-sm text-muted">{it.v}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-subtle">
        路径：基础 → 布局 → 视觉 → 交互 → 进阶语法 → 主题 → 组件 → 工程 → 实战
      </p>
    </div>
  );
}
