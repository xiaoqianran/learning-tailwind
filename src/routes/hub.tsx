import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS, TRACKS, getLessonsByTrack } from "@/data/lessons";
import { useProgress, todayKey } from "@/store/progress";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookMarked,
  BookX,
  Flame,
  StickyNote,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/hub")({
  component: HubPage,
});

function HubPage() {
  const completed = useProgress((s) => s.completed);
  const quizScores = useProgress((s) => s.quizScores);
  const bookmarks = useProgress((s) => s.bookmarks);
  const notes = useProgress((s) => s.notes);
  const wrongBook = useProgress((s) => s.wrongBook);
  const streak = useProgress((s) => s.streak);
  const checkIns = useProgress((s) => s.checkIns);
  const checkInToday = useProgress((s) => s.checkInToday);

  const noteEntries = Object.entries(notes).filter(([, v]) => v.trim());
  const avgScore =
    Object.keys(quizScores).length === 0
      ? null
      : Math.round(
          Object.values(quizScores).reduce((a, b) => a + b, 0) /
            Object.keys(quizScores).length,
        );
  const checkedIn = checkIns.includes(todayKey());

  return (
    <div className="mx-auto max-w-3xl pb-16">
      <header className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Hub
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-fg">
          学习中心
        </h1>
        <p className="mt-1 text-sm text-muted">进度、打卡、收藏与笔记一览</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          icon={Target}
          label="完成课程"
          value={`${completed.length}/${LESSONS.length}`}
        />
        <Stat
          icon={Flame}
          label="连续打卡"
          value={`${streak} 天`}
        />
        <Stat
          icon={BookMarked}
          label="收藏"
          value={String(bookmarks.length)}
        />
        <Stat
          icon={BookX}
          label="错题"
          value={String(wrongBook.length)}
        />
      </div>

      <section className="mt-6 rounded-xl border border-border bg-surface p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-base font-semibold text-fg">
              今日打卡
            </h2>
            <p className="text-xs text-muted">
              {checkedIn ? "今天已打卡，继续保持" : "学一节课或做测验即可打卡"}
            </p>
          </div>
          <Button
            size="sm"
            variant={checkedIn ? "secondary" : "default"}
            onClick={() => checkInToday()}
          >
            {checkedIn ? "已打卡" : "立即打卡"}
          </Button>
        </div>
        {avgScore !== null ? (
          <p className="mt-3 font-mono text-xs text-muted">
            平均测验分 {avgScore}%
          </p>
        ) : null}
      </section>

      <section className="mt-6 rounded-xl border border-border bg-surface p-4">
        <h2 className="font-display text-base font-semibold text-fg">
          各路径进度
        </h2>
        <ul className="mt-3 space-y-2">
          {TRACKS.map((t) => {
            const list = getLessonsByTrack(t);
            const done = list.filter((l) => completed.includes(l.slug)).length;
            const pct = list.length
              ? Math.round((done / list.length) * 100)
              : 0;
            return (
              <li key={t}>
                <div className="flex justify-between text-xs">
                  <span className="text-muted">{t}</span>
                  <span className="font-mono text-subtle">
                    {done}/{list.length}
                  </span>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-3">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {bookmarks.length > 0 ? (
        <section className="mt-6 rounded-xl border border-border bg-surface p-4">
          <h2 className="font-display text-base font-semibold text-fg">
            收藏
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {bookmarks.map((slug) => {
              const l = LESSONS.find((x) => x.slug === slug);
              return (
                <Link
                  key={slug}
                  to="/lesson/$slug"
                  params={{ slug }}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-fg no-underline hover:border-primary/40"
                >
                  {l?.title ?? slug}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {noteEntries.length > 0 ? (
        <section className="mt-6 rounded-xl border border-border bg-surface p-4">
          <h2 className="inline-flex items-center gap-1.5 font-display text-base font-semibold text-fg">
            <StickyNote className="h-4 w-4 text-primary" />
            最近笔记
          </h2>
          <ul className="mt-3 space-y-2">
            {noteEntries.slice(0, 5).map(([slug, text]) => {
              const l = LESSONS.find((x) => x.slug === slug);
              return (
                <li key={slug} className="rounded-lg bg-surface-2 px-3 py-2">
                  <Link
                    to="/lesson/$slug"
                    params={{ slug }}
                    className="text-xs text-primary no-underline"
                  >
                    {l?.title ?? slug}
                  </Link>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{text}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        <Link to="/certificate" className="no-underline">
          <Button variant="secondary">
            <Award className="h-4 w-4" />
            结业证明
          </Button>
        </Link>
        <Link to="/mistakes" className="no-underline">
          <Button variant="ghost">错题本</Button>
        </Link>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-2 text-xs text-muted">{label}</p>
      <p className="font-mono text-lg text-fg">{value}</p>
    </div>
  );
}
