import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Palette, Sparkles } from "lucide-react";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

type QuestId =
  | "padding"
  | "radius"
  | "shadow"
  | "accent"
  | "cta"
  | "responsive";

const QUESTS: { id: QuestId; title: string; hint: string }[] = [
  { id: "padding", title: "加大内边距", hint: "把 padding 调到 p-6 或以上" },
  { id: "radius", title: "更圆的角", hint: "选择 rounded-xl 或 full" },
  { id: "shadow", title: "加上阴影", hint: "开启 shadow" },
  { id: "accent", title: "换主题色", hint: "选择 indigo 或 emerald" },
  { id: "cta", title: "强化主按钮", hint: "开启「实心 CTA」" },
  { id: "responsive", title: "双列布局", hint: "开启「宽屏双列」" },
];

function StudioPage() {
  const [pad, setPad] = useState(4);
  const [radius, setRadius] = useState<"md" | "xl" | "full">("md");
  const [shadow, setShadow] = useState(false);
  const [hue, setHue] = useState<"sky" | "indigo" | "emerald">("sky");
  const [solidCta, setSolidCta] = useState(false);
  const [twoCol, setTwoCol] = useState(false);
  const markComplete = useProgress((s) => s.markComplete);
  const checkInToday = useProgress((s) => s.checkInToday);

  const done = useMemo(() => {
    return {
      padding: pad >= 6,
      radius: radius === "xl" || radius === "full",
      shadow,
      accent: hue !== "sky",
      cta: solidCta,
      responsive: twoCol,
    } satisfies Record<QuestId, boolean>;
  }, [pad, radius, shadow, hue, solidCta, twoCol]);

  const score = QUESTS.filter((q) => done[q.id]).length;
  const allDone = score === QUESTS.length;

  const hueClass =
    hue === "sky"
      ? "from-sky-500/40 to-cyan-500/20"
      : hue === "indigo"
        ? "from-indigo-500/40 to-violet-500/20"
        : "from-emerald-500/40 to-teal-500/20";
  const btnClass =
    hue === "sky"
      ? "bg-sky-500 hover:bg-sky-600"
      : hue === "indigo"
        ? "bg-indigo-500 hover:bg-indigo-600"
        : "bg-emerald-500 hover:bg-emerald-600";
  const radiusClass =
    radius === "md"
      ? "rounded-md"
      : radius === "xl"
        ? "rounded-xl"
        : "rounded-3xl";

  return (
    <div className="mx-auto max-w-4xl pb-16">
      <header className="mb-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Palette className="h-3.5 w-3.5" />
          设计工坊
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-fg sm:text-3xl">
          用开关拼出 UI
        </h1>
        <p className="mt-2 text-sm text-muted">
          完成右侧 6 个闯关目标，感受工具类如何驱动视觉。进度仅保存在本机。
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1fr_16rem]">
        <div className="space-y-4">
          <section className="rounded-xl border border-border bg-surface p-4 sm:p-5">
            <p className="text-xs font-medium text-muted">实时预览</p>
            <div
              className={cn(
                "mt-3 overflow-hidden border border-border bg-bg",
                radiusClass,
                shadow && "shadow-soft",
                twoCol && "sm:grid sm:grid-cols-2",
              )}
            >
              <div
                className={cn(
                  "aspect-[16/10] bg-gradient-to-br sm:aspect-auto sm:min-h-40",
                  hueClass,
                )}
              />
              <div style={{ padding: `${pad * 4}px` }}>
                <p className="text-[10px] font-medium uppercase tracking-wider text-primary">
                  Feature
                </p>
                <h2 className="mt-1 font-display text-lg font-semibold text-fg">
                  可组合的界面
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  调整左侧控制项，观察 class 如何改变 padding、圆角、阴影与布局。
                </p>
                <button
                  type="button"
                  className={cn(
                    "mt-4 rounded-lg px-3 py-2 text-sm font-medium transition",
                    solidCta
                      ? cn(btnClass, "text-white")
                      : "border border-border bg-surface-2 text-fg hover:bg-surface-3",
                  )}
                >
                  开始使用
                </button>
              </div>
            </div>
            <p className="mt-3 font-mono text-[11px] text-subtle">
              p-{pad} · rounded-{radius} · {shadow ? "shadow" : "no-shadow"} ·{" "}
              {hue} · {solidCta ? "solid-cta" : "ghost-cta"} ·{" "}
              {twoCol ? "sm:grid-cols-2" : "stack"}
            </p>
          </section>

          <section className="rounded-xl border border-border bg-surface p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-fg">控制台</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-xs text-muted">
                Padding · p-{pad}
                <input
                  type="range"
                  min={2}
                  max={10}
                  value={pad}
                  onChange={(e) => setPad(Number(e.target.value))}
                  className="mt-2 w-full"
                />
              </label>
              <div>
                <p className="text-xs text-muted">圆角</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["md", "xl", "full"] as const).map((r) => (
                    <Button
                      key={r}
                      size="sm"
                      variant={radius === r ? "default" : "secondary"}
                      onClick={() => setRadius(r)}
                    >
                      {r}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted">主题色</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["sky", "indigo", "emerald"] as const).map((h) => (
                    <Button
                      key={h}
                      size="sm"
                      variant={hue === h ? "default" : "secondary"}
                      onClick={() => setHue(h)}
                    >
                      {h}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Toggle
                  label="阴影 shadow"
                  on={shadow}
                  onChange={setShadow}
                />
                <Toggle
                  label="实心 CTA"
                  on={solidCta}
                  onChange={setSolidCta}
                />
                <Toggle
                  label="宽屏双列"
                  on={twoCol}
                  onChange={setTwoCol}
                />
              </div>
            </div>
          </section>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-fg">闯关</h2>
            <span className="font-mono text-xs text-primary">
              {score}/{QUESTS.length}
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {QUESTS.map((q) => (
              <li
                key={q.id}
                className={cn(
                  "rounded-lg border px-2.5 py-2 text-xs",
                  done[q.id]
                    ? "border-primary/30 bg-primary-soft text-fg"
                    : "border-border bg-surface-2 text-muted",
                )}
              >
                <div className="flex items-start gap-1.5">
                  {done[q.id] ? (
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  ) : (
                    <span className="mt-0.5 size-3.5 shrink-0 rounded-full border border-border" />
                  )}
                  <div>
                    <p className="font-medium">{q.title}</p>
                    <p className="mt-0.5 text-[11px] opacity-80">{q.hint}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {allDone ? (
            <div className="mt-4 rounded-lg border border-primary/30 bg-primary-soft p-3 text-center">
              <Sparkles className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-xs text-fg">全部目标完成！</p>
              <Button
                className="mt-3 w-full"
                size="sm"
                onClick={() => {
                  markComplete("card-ui");
                  checkInToday();
                }}
              >
                记一次打卡
              </Button>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

function Toggle({
  label,
  on,
  onChange,
}: {
  label: string;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!on)}
      className="flex w-full items-center justify-between rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs text-fg"
    >
      <span>{label}</span>
      <span
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          on ? "bg-primary" : "bg-surface-3",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-4 rounded-full bg-white transition-transform",
            on ? "left-4" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}
