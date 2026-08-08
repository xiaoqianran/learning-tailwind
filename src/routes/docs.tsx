import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  OFFICIAL_DOCS_COUNT,
  OFFICIAL_DOCS_HOME,
  OFFICIAL_DOCS_SECTIONS,
} from "@/data/official-docs";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Library,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/docs")({
  component: OfficialDocsPage,
});

function OfficialDocsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return OFFICIAL_DOCS_SECTIONS.map((sec) => {
      if (cat !== "all" && sec.id !== cat) return { ...sec, items: [] };
      if (!s) return sec;
      return {
        ...sec,
        items: sec.items.filter(
          (it) =>
            it.titleEn.toLowerCase().includes(s) ||
            it.titleZh.toLowerCase().includes(s) ||
            it.slug.includes(s) ||
            it.descriptionZh.toLowerCase().includes(s) ||
            it.examples.some((e) => e.toLowerCase().includes(s)),
        ),
      };
    }).filter((sec) => sec.items.length > 0);
  }, [q, cat]);

  const shown = filtered.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="mx-auto max-w-4xl pb-16">
      <header className="mb-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Library className="h-3.5 w-3.5" />
          Official docs map
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-fg sm:text-3xl">
          官网文档全量目录
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          已从官网侧栏{" "}
          <code className="text-primary">docs/index.tsx</code>{" "}
          <strong className="text-fg">1:1 迁移</strong> {OFFICIAL_DOCS_COUNT}{" "}
          个页面（Getting started → Accessibility）。中文标题 + 说明 + 示例类；完整
          class 表与交互示例以外链官网为准。
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <a
            href={OFFICIAL_DOCS_HOME}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-fg no-underline hover:border-primary/40"
          >
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            tailwindcss.com/docs
            <ExternalLink className="h-3 w-3 text-subtle" />
          </a>
          <Link
            to="/reference"
            className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-muted no-underline hover:text-fg"
          >
            工具类 Reference
          </Link>
          <Link
            to="/"
            className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-muted no-underline hover:text-fg"
          >
            交互课程
          </Link>
        </div>
      </header>

      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索官网页面：overflow、zoom、preflight、mask…"
          className="h-11 w-full rounded-lg border border-border bg-surface pl-10 pr-3 text-sm text-fg placeholder:text-subtle"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        <Chip
          active={cat === "all"}
          onClick={() => setCat("all")}
          label={`全部 ${OFFICIAL_DOCS_COUNT}`}
        />
        {OFFICIAL_DOCS_SECTIONS.map((sec) => (
          <Chip
            key={sec.id}
            active={cat === sec.id}
            onClick={() => setCat(sec.id)}
            label={`${sec.titleZh.split(" ")[0]} ${sec.items.length}`}
          />
        ))}
      </div>

      <p className="mb-4 font-mono text-xs text-subtle">
        显示 {shown} / {OFFICIAL_DOCS_COUNT}
      </p>

      <div className="space-y-8">
        {filtered.map((sec) => (
          <section key={sec.id} id={sec.id}>
            <h2 className="mb-1 font-display text-base font-semibold text-fg">
              {sec.titleZh}
            </h2>
            <p className="mb-3 text-[11px] text-subtle">{sec.titleEn}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {sec.items.map((it) => (
                <li key={it.slug}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary/35 hover:bg-surface-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-fg">
                          {it.titleZh}
                        </p>
                        {it.titleZh !== it.titleEn ? (
                          <p className="font-mono text-[10px] text-subtle">
                            {it.titleEn}
                          </p>
                        ) : null}
                      </div>
                      <a
                        href={it.docs}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-muted hover:text-primary"
                        aria-label="打开官网"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted">
                      {it.descriptionZh}
                    </p>
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
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                      <a
                        href={it.docs}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-primary no-underline hover:underline"
                      >
                        官网原文
                      </a>
                      {it.lesson ? (
                        <Link
                          to="/lesson/$slug"
                          params={{ slug: it.lesson }}
                          className="inline-flex items-center gap-1 text-[11px] text-muted no-underline hover:text-primary"
                        >
                          <GraduationCap className="h-3 w-3" />
                          本站课程
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            没有匹配的官网页面
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Chip({
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
