import { useState } from "react";
import type { DemoKind } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/CodeBlock";
import { getDemoSource } from "@/data/demo-sources";
import { cn } from "@/lib/utils";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";

export function InteractiveDemo({
  kind,
  title,
  hint,
}: {
  kind: DemoKind;
  title: string;
  hint?: string;
}) {
  const [showSource, setShowSource] = useState(true);
  const source = getDemoSource(kind);

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            交互 Demo · 类名即样式
          </p>
          <h3 className="mt-0.5 font-display text-base font-semibold text-fg">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSource((v) => !v)}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted transition-colors hover:text-fg"
          >
            <Code2 className="h-3.5 w-3.5" />
            对应源码
            {showSource ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>
          <span className="rounded-full bg-primary-soft px-2.5 py-1 font-mono text-[10px] text-primary">
            live
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        {hint ? <p className="mb-4 text-sm text-muted">{hint}</p> : null}
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-sm bg-primary-soft px-1.5 py-0.5 font-mono text-[10px] text-primary">
            A · 运行结果
          </span>
          <span className="text-xs text-muted">可交互预览</span>
        </div>
        <DemoBody kind={kind} />
        {showSource ? (
          <div className="mt-5 border-t border-border pt-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-sm bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                B · 对应源码
              </span>
            </div>
            <CodeBlock
              code={source.code}
              title={source.title}
              lang={source.lang}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function DemoBody({ kind }: { kind: DemoKind }) {
  switch (kind) {
    case "utility-first":
      return <UtilityFirstDemo />;
    case "colors":
      return <ColorsDemo />;
    case "spacing":
      return <SpacingDemo />;
    case "typography":
      return <TypographyDemo />;
    case "sizing":
      return <SizingDemo />;
    case "flex":
      return <FlexDemo />;
    case "grid":
      return <GridDemo />;
    case "position":
      return <PositionDemo />;
    case "borders":
      return <BordersDemo />;
    case "states":
      return <StatesDemo />;
    case "responsive":
      return <ResponsiveDemo />;
    case "dark-mode":
      return <DarkModeDemo />;
    case "animation":
      return <AnimationDemo />;
    case "forms":
      return <FormsDemo />;
    case "card":
      return <CardDemo />;
    case "navbar":
      return <NavbarDemo />;
    case "dashboard":
      return <DashboardDemo />;
    case "v4":
      return <V4Demo />;
    default:
      return null;
  }
}

function Panel({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface-2 p-3 sm:p-4",
        className,
      )}
    >
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-subtle">
        {label}
      </p>
      {children}
    </div>
  );
}

function UtilityFirstDemo() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const pad =
    size === "sm"
      ? "px-3 py-1.5 text-xs"
      : size === "lg"
        ? "px-6 py-3 text-base"
        : "px-4 py-2 text-sm";
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Panel label="预览">
        <button
          type="button"
          className={cn(
            "rounded-lg bg-primary font-medium text-primary-fg transition hover:bg-primary-dim",
            pad,
          )}
        >
          保存更改
        </button>
      </Panel>
      <Panel label="控制">
        <p className="mb-2 text-xs text-muted">切换尺寸工具类</p>
        <div className="flex flex-wrap gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              size="sm"
              variant={size === s ? "default" : "secondary"}
              onClick={() => setSize(s)}
            >
              {s}
            </Button>
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-subtle">
          class ≈ rounded-lg bg-sky-500 {pad}
        </p>
      </Panel>
    </div>
  );
}

const HUE_SWATCHES = [
  {
    name: "sky",
    scale: [
      "bg-sky-300",
      "bg-sky-400",
      "bg-sky-500",
      "bg-sky-600",
      "bg-sky-700",
    ],
    solid: "bg-sky-500",
  },
  {
    name: "indigo",
    scale: [
      "bg-indigo-300",
      "bg-indigo-400",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-indigo-700",
    ],
    solid: "bg-indigo-500",
  },
  {
    name: "emerald",
    scale: [
      "bg-emerald-300",
      "bg-emerald-400",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
    ],
    solid: "bg-emerald-500",
  },
  {
    name: "rose",
    scale: [
      "bg-rose-300",
      "bg-rose-400",
      "bg-rose-500",
      "bg-rose-600",
      "bg-rose-700",
    ],
    solid: "bg-rose-500",
  },
  {
    name: "amber",
    scale: [
      "bg-amber-300",
      "bg-amber-400",
      "bg-amber-500",
      "bg-amber-600",
      "bg-amber-700",
    ],
    solid: "bg-amber-500",
  },
] as const;

function ColorsDemo() {
  const [hue, setHue] = useState(0);
  const current = HUE_SWATCHES[hue];
  const weights = [300, 400, 500, 600, 700];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Panel label="色阶">
        <div className="flex gap-2">
          {current.scale.map((cls, i) => (
            <div
              key={cls}
              className={cn(
                "flex h-12 flex-1 flex-col items-center justify-end rounded-md pb-1 font-mono text-[10px] text-white/90",
                cls,
              )}
            >
              {weights[i]}
            </div>
          ))}
        </div>
        <div
          className={cn(
            "mt-3 rounded-lg px-3 py-2 text-sm font-medium text-white",
            current.solid,
          )}
        >
          bg-{current.name}-500
        </div>
      </Panel>
      <Panel label="色相">
        <div className="flex flex-wrap gap-2">
          {HUE_SWATCHES.map((h, i) => (
            <button
              key={h.name}
              type="button"
              onClick={() => setHue(i)}
              className={cn(
                "size-8 rounded-full ring-2 ring-offset-2 ring-offset-surface-2",
                h.solid,
                hue === i ? "ring-primary" : "ring-transparent",
              )}
              aria-label={h.name}
            />
          ))}
        </div>
      </Panel>
    </div>
  );
}

function SpacingDemo() {
  const [pad, setPad] = useState(4);
  const [gap, setGap] = useState(2);
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Panel label="预览">
        <div
          className="rounded-lg border border-dashed border-primary/40 bg-primary/5"
          style={{ padding: `${pad * 4}px` }}
        >
          <div className="flex" style={{ gap: `${gap * 4}px` }}>
            <div className="h-10 flex-1 rounded bg-primary/40" />
            <div className="h-10 flex-1 rounded bg-primary/60" />
            <div className="h-10 flex-1 rounded bg-primary/80" />
          </div>
        </div>
        <p className="mt-2 font-mono text-[11px] text-subtle">
          p-{pad} · gap-{gap}
        </p>
      </Panel>
      <Panel label="控制">
        <label className="block text-xs text-muted">
          padding p-{pad}
          <input
            type="range"
            min={1}
            max={10}
            value={pad}
            onChange={(e) => setPad(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
        <label className="mt-3 block text-xs text-muted">
          gap gap-{gap}
          <input
            type="range"
            min={0}
            max={8}
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </label>
      </Panel>
    </div>
  );
}

function TypographyDemo() {
  const sizes = ["text-sm", "text-base", "text-lg", "text-2xl"] as const;
  const [si, setSi] = useState(2);
  return (
    <Panel label="排版层级">
      <h3 className={cn("font-semibold tracking-tight text-fg", sizes[si])}>
        清晰的标题层级
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
        正文保持 15–16px 与舒适行高。标题用 tracking-tight，数字用
        tabular-nums。
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {sizes.map((s, i) => (
          <Button
            key={s}
            size="sm"
            variant={si === i ? "default" : "secondary"}
            onClick={() => setSi(i)}
          >
            {s}
          </Button>
        ))}
      </div>
    </Panel>
  );
}

function SizingDemo() {
  const widths = ["w-1/3", "w-1/2", "w-2/3", "w-full"] as const;
  const [w, setW] = useState(1);
  return (
    <Panel label="宽度">
      <div className="rounded-lg border border-border bg-bg p-3">
        <div
          className={cn(
            "h-16 rounded-lg bg-gradient-to-r from-primary/50 to-accent/40",
            widths[w],
          )}
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {widths.map((cls, i) => (
          <Button
            key={cls}
            size="sm"
            variant={w === i ? "default" : "secondary"}
            onClick={() => setW(i)}
          >
            {cls}
          </Button>
        ))}
      </div>
    </Panel>
  );
}

function FlexDemo() {
  const justifys = [
    "justify-start",
    "justify-center",
    "justify-between",
    "justify-around",
  ] as const;
  const [j, setJ] = useState(2);
  return (
    <div className="grid gap-3">
      <Panel label="flex row">
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg border border-border bg-bg p-3",
            justifys[j],
          )}
        >
          <span className="rounded bg-primary/30 px-2 py-1 text-xs">A</span>
          <span className="rounded bg-primary/50 px-2 py-1 text-xs">B</span>
          <span className="rounded bg-primary/70 px-2 py-1 text-xs">C</span>
        </div>
        <p className="mt-2 font-mono text-[11px] text-subtle">
          flex items-center {justifys[j]}
        </p>
      </Panel>
      <div className="flex flex-wrap gap-2">
        {justifys.map((cls, i) => (
          <Button
            key={cls}
            size="sm"
            variant={j === i ? "default" : "secondary"}
            onClick={() => setJ(i)}
          >
            {cls.replace("justify-", "")}
          </Button>
        ))}
      </div>
    </div>
  );
}

function GridDemo() {
  const colClasses = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
  ] as const;
  const [cols, setCols] = useState(2);
  return (
    <Panel label={colClasses[cols]}>
      <div className={cn("grid gap-2", colClasses[cols])}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex h-14 items-center justify-center rounded-lg bg-primary/20 font-mono text-xs text-primary"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        {[1, 2, 3, 4].map((n) => (
          <Button
            key={n}
            size="sm"
            variant={cols === n - 1 ? "default" : "secondary"}
            onClick={() => setCols(n - 1)}
          >
            {n} 列
          </Button>
        ))}
      </div>
    </Panel>
  );
}

function PositionDemo() {
  return (
    <Panel label="relative + absolute">
      <div className="relative mx-auto h-28 w-48 rounded-xl border border-border bg-surface-3">
        <span className="absolute -right-2 -top-2 rounded-full bg-danger px-2 py-0.5 text-[10px] font-medium text-white shadow-soft">
          NEW
        </span>
        <span className="absolute bottom-2 left-2 rounded bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] text-muted">
          badge
        </span>
      </div>
    </Panel>
  );
}

function BordersDemo() {
  const radii = [
    "rounded-none",
    "rounded-md",
    "rounded-xl",
    "rounded-full",
  ] as const;
  const [r, setR] = useState(2);
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Panel label="预览">
        <div
          className={cn(
            "h-24 border border-border-strong bg-surface-3 shadow-soft",
            radii[r],
          )}
        />
        <p className="mt-2 font-mono text-[11px] text-subtle">{radii[r]}</p>
      </Panel>
      <Panel label="圆角">
        <div className="flex flex-wrap gap-2">
          {radii.map((cls, i) => (
            <Button
              key={cls}
              size="sm"
              variant={r === i ? "default" : "secondary"}
              onClick={() => setR(i)}
            >
              {cls.replace("rounded-", "") || "none"}
            </Button>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function StatesDemo() {
  return (
    <Panel label="交互状态">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-fg transition hover:bg-primary-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
        >
          Hover / Focus / Active
        </button>
        <button
          type="button"
          disabled
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-fg disabled:opacity-50"
        >
          Disabled
        </button>
      </div>
      <p className="mt-3 text-xs text-muted">试试悬停、Tab 聚焦与按下。</p>
    </Panel>
  );
}

function ResponsiveDemo() {
  const [frame, setFrame] = useState<"sm" | "md" | "lg">("md");
  const width =
    frame === "sm"
      ? "max-w-[220px]"
      : frame === "md"
        ? "max-w-[360px]"
        : "max-w-full";
  return (
    <div className="grid gap-3">
      <div className="flex gap-2">
        {(["sm", "md", "lg"] as const).map((f) => (
          <Button
            key={f}
            size="sm"
            variant={frame === f ? "default" : "secondary"}
            onClick={() => setFrame(f)}
          >
            {f} 视口
          </Button>
        ))}
      </div>
      <div
        className={cn(
          "mx-auto w-full overflow-hidden rounded-lg border border-border bg-bg p-3 transition-all",
          width,
        )}
      >
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 rounded-md bg-primary/25" />
          ))}
        </div>
        <p className="mt-2 font-mono text-[10px] text-subtle">
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4（真实媒体查询随浏览器宽度）
        </p>
      </div>
    </div>
  );
}

function DarkModeDemo() {
  const [dark, setDark] = useState(true);
  return (
    <Panel label="主题切换">
      <div
        className={cn(
          "rounded-xl border p-4 transition-colors",
          dark
            ? "border-slate-700 bg-slate-900 text-slate-100"
            : "border-slate-200 bg-white text-slate-900",
        )}
      >
        <p className="font-semibold">双轨卡片</p>
        <p
          className={cn(
            "mt-1 text-sm",
            dark ? "text-slate-400" : "text-slate-600",
          )}
        >
          {dark ? "dark:bg-slate-900" : "bg-white"}
        </p>
      </div>
      <Button
        className="mt-3"
        size="sm"
        variant="secondary"
        onClick={() => setDark((d) => !d)}
      >
        切换为 {dark ? "亮色" : "暗色"}
      </Button>
    </Panel>
  );
}

function AnimationDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-border bg-surface-2 p-4 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
        <p className="text-sm font-medium">Hover 抬起</p>
        <p className="mt-1 text-xs text-muted">-translate-y-1</p>
      </div>
      <div className="rounded-xl border border-border bg-surface-2 p-4">
        <div className="mx-auto size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="mt-2 text-center text-xs text-muted">animate-spin</p>
      </div>
      <div className="rounded-xl border border-border bg-surface-2 p-4">
        <div className="h-3 animate-pulse rounded bg-surface-3" />
        <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-surface-3" />
        <p className="mt-2 text-xs text-muted">animate-pulse</p>
      </div>
    </div>
  );
}

function FormsDemo() {
  const [err, setErr] = useState(false);
  const [val, setVal] = useState("");
  return (
    <Panel label="input">
      <label className="block text-sm text-muted">
        邮箱
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="you@example.com"
          className={cn(
            "mt-1 h-10 w-full rounded-lg border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus:outline-none focus:ring-2",
            err
              ? "border-danger focus:ring-danger/30"
              : "border-border focus:border-primary focus:ring-primary/30",
          )}
        />
      </label>
      {err ? (
        <p className="mt-1 text-xs text-danger">请输入有效邮箱</p>
      ) : null}
      <div className="mt-3 flex gap-2">
        <Button size="sm" onClick={() => setErr(false)}>
          正常态
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setErr(true)}>
          错误态
        </Button>
      </div>
    </Panel>
  );
}

function CardDemo() {
  return (
    <article className="max-w-sm overflow-hidden rounded-xl border border-border bg-surface-2 shadow-soft">
      <div className="aspect-video bg-gradient-to-br from-primary/40 to-accent/30" />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-fg">Aurora UI Kit</h3>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] text-primary">
            NEW
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">
          用工具类拼出产品级卡片：媒体区、标题、描述与 CTA。
        </p>
        <Button className="mt-4" size="sm">
          了解更多
        </Button>
      </div>
    </article>
  );
}

function NavbarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <header className="flex h-12 items-center gap-3 border-b border-border bg-surface-2 px-3">
        <span className="text-sm font-semibold text-fg">Brand</span>
        <nav className="ml-auto hidden items-center gap-3 text-xs text-muted sm:flex">
          <span>文档</span>
          <span>定价</span>
          <span className="rounded-md bg-primary px-2 py-1 text-primary-fg">
            开始
          </span>
        </nav>
        <button
          type="button"
          className="ml-auto rounded border border-border px-2 py-1 text-xs text-muted sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </header>
      {open ? (
        <div className="space-y-2 border-b border-border bg-bg p-3 text-sm text-muted sm:hidden">
          <p>文档</p>
          <p>定价</p>
          <p className="text-primary">开始</p>
        </div>
      ) : null}
      <p className="p-3 text-xs text-subtle">
        窄屏显示 Menu；拉宽预览区可见横排导航（hidden sm:flex）。
      </p>
    </div>
  );
}

function DashboardDemo() {
  return (
    <div className="flex min-h-56 overflow-hidden rounded-xl border border-border">
      <aside className="w-28 shrink-0 border-r border-border bg-surface-2 p-3">
        <p className="text-xs font-medium text-fg">侧栏</p>
        <ul className="mt-2 space-y-1 text-[11px] text-muted">
          <li className="rounded bg-primary-soft px-1.5 py-1 text-primary">
            总览
          </li>
          <li className="px-1.5 py-1">用户</li>
          <li className="px-1.5 py-1">设置</li>
        </ul>
      </aside>
      <main className="min-w-0 flex-1 bg-bg p-3">
        <p className="text-xs font-medium text-fg">主内容区</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {["UV", "转化", "收入"].map((k) => (
            <div
              key={k}
              className="rounded-lg border border-border bg-surface-2 p-2"
            >
              <p className="text-[10px] text-muted">{k}</p>
              <p className="font-mono text-sm text-primary">1.2k</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function V4Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Panel label="@theme tokens">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="size-6 rounded bg-primary" />
            <code className="font-mono text-primary">--color-primary</code>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-6 rounded bg-surface-3 ring-1 ring-border" />
            <code className="font-mono text-muted">--color-surface-3</code>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-6 rounded-lg border border-border" />
            <code className="font-mono text-muted">--radius-lg</code>
          </div>
        </div>
      </Panel>
      <Panel label="使用">
        <p className="text-sm text-muted">
          定义后即可 <code className="text-primary">bg-primary</code>、
          <code className="text-primary">text-muted</code>、
          <code className="text-primary">rounded-lg</code>
        </p>
        <div className="mt-3 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-fg">
          来自令牌的按钮
        </div>
      </Panel>
    </div>
  );
}
