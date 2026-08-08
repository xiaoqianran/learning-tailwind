import {
  Award,
  BookMarked,
  BookOpen,
  BookX,
  BookText,
  Code2,
  FlaskConical,
  LayoutDashboard,
  Library,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { Lesson } from "@/data/lessons";
import { LESSONS, TRACKS } from "@/data/lessons";

export const TRACK_META: Record<
  Lesson["track"],
  { order: number; label: string; blurb: string }
> = {
  基础: { order: 1, label: "① 入门", blurb: "utility · 安装 · 工作流" },
  布局: { order: 2, label: "② 布局", blurb: "flex · grid · 间距 · 容器" },
  视觉: { order: 3, label: "③ 视觉", blurb: "颜色 · 字体 · 阴影 · 圆角" },
  交互: { order: 4, label: "④ 交互", blurb: "hover · focus · 过渡 · 动画" },
  进阶语法: { order: 5, label: "⑤ 进阶语法", blurb: "任意值 · @apply · 变体" },
  主题: { order: 6, label: "⑥ 主题", blurb: "design tokens · 暗色 · v4" },
  组件: { order: 7, label: "⑦ 组件", blurb: "组合模式 · 可复用块" },
  工程: { order: 8, label: "⑧ 工程", blurb: "配置 · 插件 · 性能" },
  实战: { order: 9, label: "⑨ 实战", blurb: "页面 · 组件库 · 上线" },
};

export function trackLabel(track: string) {
  return (TRACK_META as Record<string, { label: string }>)[track]?.label ?? track;
}

export function orderedTracks(): Lesson["track"][] {
  return [...TRACKS].sort(
    (a, b) =>
      ((TRACK_META as Record<string, { order: number }>)[a]?.order ?? 99) -
      ((TRACK_META as Record<string, { order: number }>)[b]?.order ?? 99),
  );
}

export function getValidCompleted(completed: string[]): string[] {
  const set = new Set(LESSONS.map((l) => l.slug));
  return completed.filter((s) => set.has(s));
}

export function completedCount(completed: string[]): number {
  return getValidCompleted(completed).length;
}

export function progressPercent(completed: string[]): number {
  if (!LESSONS.length) return 0;
  return Math.round((completedCount(completed) / LESSONS.length) * 100);
}

export function isAllComplete(completed: string[]): boolean {
  return LESSONS.every((l) => completed.includes(l.slug));
}

export function getContinueLesson(completed: string[]): Lesson {
  return (
    LESSONS.find((l) => !completed.includes(l.slug)) ??
    LESSONS[LESSONS.length - 1]!
  );
}

export function getContinueHref(completed: string[]): {
  kind: "lesson" | "certificate";
  slug?: string;
} {
  if (isAllComplete(completed)) return { kind: "certificate" };
  return { kind: "lesson", slug: getContinueLesson(completed).slug };
}

export type NavItem = {
  to:
    | "/"
    | "/docs"
    | "/cheatsheet"
    | "/studio"
    | "/playground"
    | "/lab"
    | "/hub"
    | "/mistakes"
    | "/certificate"
    | "/reference";
  label: string;
  hint?: string;
  icon: LucideIcon;
};

export const NAV_PRIMARY: NavItem[] = [
  { to: "/docs", label: "文档", hint: "查 · 官网对照", icon: Library },
  { to: "/studio", label: "工坊", hint: "练 · 样式闯关", icon: Server },
  { to: "/hub", label: "进度", hint: "我 · 学习中心", icon: LayoutDashboard },
];

export const NAV_TOOLS: NavItem[] = [
  { to: "/reference", label: "参考目录", hint: "196 页官方映射", icon: BookText },
  { to: "/cheatsheet", label: "速查表", hint: "class 扫一眼", icon: BookMarked },
  { to: "/playground", label: "Playground", hint: "实时试验", icon: Code2 },
  { to: "/lab", label: "练习场", hint: "刷测验题", icon: FlaskConical },
  { to: "/mistakes", label: "错题本", hint: "错题重练", icon: BookX },
  { to: "/certificate", label: "结业证书", hint: "掌握后解锁", icon: Award },
];

export const NAV_HOME: NavItem = {
  to: "/",
  label: "学 · 首页",
  hint: "路径与大纲",
  icon: BookOpen,
};
