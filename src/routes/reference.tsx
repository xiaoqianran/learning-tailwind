import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  OFFICIAL_DOCS,
  REFERENCE_META,
  REFERENCE_SOURCE,
  REFERENCE_UTILITIES,
} from "@/data/reference-catalog";
import { cn } from "@/lib/utils";
import { BookOpen, ExternalLink, Library, Search } from "lucide-react";

export const Route = createFileRoute("/reference")({
  component: ReferencePage,
});

function ReferencePage() {
  const [q, setQ] = useState("");
  const [sectionId, setSectionId] = useState<string>("all");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return REFERENCE_UTILITIES.map((sec) => {
      if (sectionId !== "all" && sec.id !== sectionId) {
        return { ...sec, items: [] };
      }
      if (!s) return sec;
      return {
        ...sec,
        items: sec.items.filter(
          (it) =>
            it.name.toLowerCase().includes(s) ||
            it.summary.toLowerCase().includes(s) ||
            it.examples.some((e) => e.toLowerCase().includes(s)),
        ),
      };
    }).filter((sec) => sec.items.length > 0);
  }, [q, sectionId]);

  const total = REFERENCE_UTILITIES.reduce((a, s) => a + s.items.length, 0);
  const shown = filtered.reduce((a, s) => a + s.items.length, 0);

  return (
    <div className="mx-auto max-w-4xl pb-16">
      <header className="mb-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Library className="h-3.5 w-3.5" />
          Reference
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-fg sm:text-3xl">
          工具类全表
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          覆盖 Layout / FlexGrid / Spacing / Typography / Backgrounds / Borders /
          Effects / Filters / Transitions / Transforms / Interactivity / SVG 等，对齐官网文档结构。
          共 {total} 个条目；点击可跳转官方 docs。
        </p>
        <p className="mt-2 text-[11px] text-subtle">{REFERENCE_SOURCE}</p>
      </header>

      <div className="mb-4 flex flex-wrap gap-2">
        <a
          href={OFFICIAL_DOCS}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-fg no-underline hover:border-primary/40"
        >
          <BookOpen className="h-3.5 w-3.5 text-primary" />
          官网文档
          <ExternalLink className="h-3 w-3 text-subtle" />
        </a>
        <Link
          to="/cheatsheet"
          className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted no-underline hover:text-fg"
        >
          速查表
        </Link>
        <a
          href={`${import.meta.env.BASE_URL}llms.txt`.replace(/\/{2,}/g, "/")}
          className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted no-underline hover:text-fg"
          target="_blank"
          rel="noreferrer"
        >
          llms.txt
        </a>
      </div>

      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索工具类、关键词，如 flex、backdrop、scroll…"
          className="h-11 w-full rounded-lg border border-border bg-surface pl-10 pr-3 text-sm text-fg placeholder:text-subtle"
        />
      </div>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <FilterChip
          active={sectionId === "all"}
          onClick={() => setSectionId("all")}
          label="全部"
        />
        {REFERENCE_UTILITIES.map((sec) => (
          <FilterChip
            key={sec.id}
            active={sectionId === sec.id}
            onClick={() => setSectionId(sec.id)}
            label={sec.title}
          />
        ))}
      </div>

      <p className="mb-4 font-mono text-xs text-subtle">
        显示 {shown} / {total}
      </p>

      <div className="space-y-6">
        {filtered.map((sec) => (
          <section key={sec.id}>
            <h2 className="mb-2 font-display text-sm font-semibold text-primary">
              {sec.title}
              <span className="ml-2 font-mono text-[11px] text-subtle">
                {sec.items.length}
              </span>
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {sec.items.map((it) => (
                <li key={it.name}>
                  <a
                    href={it.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full rounded-xl border border-border bg-surface p-3 no-underline transition-colors hover:border-primary/40 hover:bg-surface-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-fg">{it.name}</p>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-subtle" />
                    </div>
                    {it.examples.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {it.examples.slice(0, 4).map((ex) => (
                          <code
                            key={ex}
                            className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] text-primary"
                          >
                            {ex}
                          </code>
                        ))}
                      </div>
                    ) : null}
                    {it.summary ? (
                      <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted">
                        {it.summary}
                      </p>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            没有匹配项，试试更短的关键词
          </div>
        ) : null}
      </div>

      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold text-fg">
          语法 · 变体 · 主题 · 指令
        </h2>
        <p className="mt-1 text-sm text-muted">
          摘自官方草案参考的核心章节摘要（完整表见上方工具类）。
        </p>
        <div className="mt-4 grid gap-3">
          {REFERENCE_META.map((m) => (
            <details
              key={m.id}
              className="group rounded-xl border border-border bg-surface open:bg-surface-2"
            >
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-fg marker:content-none">
                <span className="text-primary">{m.title}</span>
              </summary>
              <pre className="scrollbar-thin max-h-80 overflow-auto border-t border-border p-4 font-mono text-[11px] leading-relaxed text-code-fg whitespace-pre-wrap">
                {m.body}
              </pre>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors",
        active
          ? "bg-primary text-primary-fg"
          : "bg-surface-3 text-muted hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
