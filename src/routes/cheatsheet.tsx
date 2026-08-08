import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked } from "lucide-react";

export const Route = createFileRoute("/cheatsheet")({
  component: CheatsheetPage,
});

const SECTIONS: { title: string; items: { k: string; v: string }[] }[] = [
  {
    title: "布局",
    items: [
      { k: "flex / grid", v: "一维 / 二维布局" },
      { k: "items-* / justify-*", v: "交叉轴 / 主轴对齐" },
      { k: "gap-*", v: "子项间隙" },
      { k: "grid-cols-*", v: "列定义；配合 md:" },
      { k: "col-span-*", v: "跨列" },
      { k: "container / max-w-*", v: "内容最大宽 + mx-auto" },
    ],
  },
  {
    title: "间距与尺寸",
    items: [
      { k: "p-*/m-*/gap-*", v: "1 = 0.25rem" },
      { k: "px py pt…", v: "方向细分" },
      { k: "w-full / w-1/2 / w-64", v: "宽度" },
      { k: "size-*", v: "宽高同值" },
      { k: "min-h-dvh", v: "整屏最小高" },
      { k: "aspect-video", v: "比例盒" },
    ],
  },
  {
    title: "颜色与表面",
    items: [
      { k: "bg-sky-500", v: "背景色阶" },
      { k: "text-slate-400", v: "文字色" },
      { k: "bg-sky-500/20", v: "透明度" },
      { k: "border / ring", v: "边框与光环" },
      { k: "shadow-*", v: "阴影层级" },
      { k: "rounded-*", v: "圆角" },
    ],
  },
  {
    title: "排版",
    items: [
      { k: "text-sm … text-2xl", v: "字号" },
      { k: "font-medium / semibold", v: "字重" },
      { k: "leading-relaxed", v: "行高" },
      { k: "tracking-tight", v: "字距" },
      { k: "truncate", v: "单行省略" },
      { k: "line-clamp-2", v: "多行截断" },
    ],
  },
  {
    title: "状态与响应",
    items: [
      { k: "hover: focus-visible:", v: "交互态" },
      { k: "disabled:", v: "禁用态" },
      { k: "group / peer", v: "父子 / 兄弟状态" },
      { k: "sm: md: lg:", v: "移动优先断点" },
      { k: "dark:", v: "暗色变体" },
      { k: "motion-reduce:", v: "减少动画" },
    ],
  },
  {
    title: "工程",
    items: [
      { k: "@import tailwindcss", v: "v4 入口" },
      { k: "@theme", v: "设计令牌" },
      { k: "cn() / twMerge", v: "合并冲突 class" },
      { k: "@apply", v: "抽组件层（克制）" },
      { k: "内容扫描", v: "生产剔除未用类" },
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
          写代码时快速扫一眼。详细讲解见对应课程；动手见{" "}
          <Link
            to="/playground"
            className="text-primary no-underline hover:underline"
          >
            Playground
          </Link>{" "}
          与{" "}
          <Link
            to="/studio"
            className="text-primary no-underline hover:underline"
          >
            设计工坊
          </Link>
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
                  className="grid gap-1 px-4 py-2.5 sm:grid-cols-[11rem_1fr] sm:gap-3"
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
        建议路径：基础 → 布局 → 交互 → 主题 → 组件 → 实战
      </p>
    </div>
  );
}
