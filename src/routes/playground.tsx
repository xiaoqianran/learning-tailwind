import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/playground")({
  component: PlaygroundPage,
});

const PRESETS = [
  {
    id: "button",
    title: "按钮",
    html: `<button class="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-600 active:scale-[0.98]">
  保存更改
</button>`,
  },
  {
    id: "card",
    title: "卡片",
    html: `<article class="max-w-sm overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-lg">
  <div class="aspect-video bg-gradient-to-br from-sky-500/40 to-indigo-500/30"></div>
  <div class="p-4">
    <h3 class="text-lg font-semibold text-white">Aurora</h3>
    <p class="mt-1 text-sm text-slate-400">用工具类拼出产品卡片。</p>
    <button class="mt-4 rounded-md bg-sky-500 px-3 py-1.5 text-sm text-white">了解</button>
  </div>
</article>`,
  },
  {
    id: "form",
    title: "表单",
    html: `<form class="w-full max-w-sm space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
  <label class="block text-sm text-slate-300">
    邮箱
    <input class="mt-1 h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-white placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30" placeholder="you@example.com" />
  </label>
  <button class="h-10 w-full rounded-lg bg-sky-500 text-sm font-medium text-white hover:bg-sky-600">登录</button>
</form>`,
  },
  {
    id: "grid",
    title: "响应式栅格",
    html: `<div class="grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
  <div class="rounded-lg bg-sky-500/20 p-4 text-sm text-sky-100">A</div>
  <div class="rounded-lg bg-sky-500/30 p-4 text-sm text-sky-100">B</div>
  <div class="rounded-lg bg-sky-500/40 p-4 text-sm text-sky-100 sm:col-span-2">C · col-span-2</div>
</div>`,
  },
] as const;

function buildPreviewDoc(bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body { margin: 0; min-height: 100%; background: #0b1220; color: #e2e8f0; }
    body { display: flex; align-items: center; justify-content: center; padding: 1.25rem; font-family: system-ui, sans-serif; }
  </style>
</head>
<body>${bodyHtml}</body>
</html>`;
}

function PlaygroundPage() {
  const [activeId, setActiveId] = useState<(typeof PRESETS)[number]["id"]>(
    "button",
  );
  const preset = useMemo(
    () => PRESETS.find((p) => p.id === activeId) ?? PRESETS[0],
    [activeId],
  );
  const [code, setCode] = useState(preset.html);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setCode(preset.html);
  }, [preset]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = buildPreviewDoc(code);
    iframe.srcdoc = doc;
  }, [code]);

  return (
    <div className="mx-auto max-w-5xl pb-16">
      <header className="mb-5">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Code2 className="h-3.5 w-3.5" />
          Playground
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          Tailwind 在线试验场
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          编辑 HTML + 工具类，右侧即时预览（预览区使用 Tailwind CDN，便于快速试错；正式项目请用构建集成）。
        </p>
      </header>

      <div className="mb-4 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-150",
              activeId === p.id
                ? "bg-primary text-primary-fg"
                : "bg-surface-3 text-muted hover:text-fg",
            )}
          >
            {p.title}
          </button>
        ))}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setCode(preset.html)}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          重置
        </Button>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-code-bg">
          <div className="border-b border-border px-3 py-2 text-xs text-muted">
            HTML · 可编辑
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="h-[min(28rem,55vh)] w-full resize-y bg-transparent p-4 font-mono text-[13px] leading-relaxed text-code-fg outline-none"
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-3 py-2 text-xs text-muted">
            预览
          </div>
          <iframe
            ref={iframeRef}
            title="Tailwind preview"
            className="h-[min(28rem,55vh)] w-full bg-[#0b1220]"
            sandbox="allow-scripts"
          />
        </div>
      </div>

      <aside className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          {
            t: "改 class 立刻看效果",
            d: "试着把 bg-sky-500 换成 bg-indigo-500，或加 hover:scale-105。",
          },
          {
            t: "CDN 仅教学",
            d: "生产请用 @tailwindcss/vite 等构建方案，便于 purge 与令牌。",
          },
          {
            t: "进阶练习",
            d: "打开设计工坊，用开关拼装完整 UI 模块。",
          },
        ].map((item) => (
          <div
            key={item.t}
            className="rounded-lg border border-border bg-surface-2 px-3.5 py-3"
          >
            <p className="text-sm font-medium text-fg">{item.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{item.d}</p>
          </div>
        ))}
      </aside>
    </div>
  );
}
