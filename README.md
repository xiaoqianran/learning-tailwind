# learning-tailwind

交互式中文 **Tailwind CSS** 教程（TanStack Start + Vite）。

- 官方 **暂无** `llms.txt`；权威以 [tailwindcss.com/docs](https://tailwindcss.com/docs) 为准
- 本站：[`/llms.txt`](https://xiaoqianran.github.io/learning-tailwind/llms.txt) · [`/llms-full.txt`](https://xiaoqianran.github.io/learning-tailwind/llms-full.txt)
- UI：Catppuccin + 学/查/练/我 导航（与 learning-vue3 同构）
- 部署：GitHub Actions → GitHub Pages

# Tailwind 实战学习

交互式中文 Tailwind CSS **v4** 教程：课程 + 测验 + 进度 + Playground + 设计工坊 + **工具类 Reference**。

已 1:1 迁移官网侧栏全部文档页（见 `/docs`），并对齐 [官网文档](https://tailwindcss.com/docs) 与官方草案 v4 参考（Core Syntax / Variants / Theme / Directives / Utilities）。

**在线：** [https://xiaoqianran.github.io/learning-tailwind/](https://xiaoqianran.github.io/learning-tailwind/)  
**仓库：** [https://github.com/xiaoqianran/learning-tailwind](https://github.com/xiaoqianran/learning-tailwind)  
**姊妹项目：** [learning-vue3](https://github.com/xiaoqianran/learning-vue3)

---

## 与官网的关系

| | 官网 tailwindcss.com | 本站 learning-tailwind |
|--|--|--|
| 定位 | 权威 API / 每个工具类完整表 | 中文学习路径 + 交互练习 |
| 覆盖 | 全量 docs | 40 课 + 170+ Reference 条目 |
| 练习 | Play CDN / 示例 | Demo、测验、工坊、练习场、进度 |
| LLM | 生产环境暂无公开 `/llms.txt` | 提供本站 [`/llms.txt`](./public/llms.txt) |

查精确参数 → 官网；学概念与动手 → 本站。

---

## 功能

| 模块 | 路径 |
|------|------|
| 课程 | `/lesson/:slug` |
| **官网文档全量目录（196 页）** | `/docs` |
| 工具类 Reference | `/reference` |
| 速查表 | `/cheatsheet` |
| Playground | `/playground` |
| 设计工坊 | `/studio` |
| 学习中心 / 练习场 / 错题 / 结业 | `/hub` `/lab` `/mistakes` `/certificate` |

---

## 学习路径

基础 → 布局 → 视觉 → 交互 → 进阶语法 → 主题 → 组件 → 工程 → 实战

覆盖：Utility-first、Flex/Grid、颜色间距排版、状态与响应式、暗色、任意值、group/peer/has、容器查询、@theme/@utility、滤镜与变换、无障碍、类名扫描、v3→v4 升级等。

---

## 本地运行

```bash
git clone https://github.com/xiaoqianran/learning-tailwind.git
cd learning-tailwind
npm install
npm run dev
```

```bash
npm run build:pages   # GitHub Pages
npm run typecheck
```

---

## 技术栈

React 19 · TanStack Start/Router · Vite · Tailwind CSS v4 · Zustand

部署：GitHub Actions → GitHub Pages（`build_type: workflow`）

---

## 关于 llms.txt

- 官网 `https://tailwindcss.com/llms.txt` 当前不可用（社区有讨论；草案见 tailwindcss.com 仓库 `md-endpoints` 分支）。
- 本站静态文件：`public/llms.txt` → 站点根路径 `/llms.txt`（Pages 为 `/learning-tailwind/llms.txt`）。

---

## 进度与隐私

进度、笔记、错题仅存 **localStorage**，不上云。结业证明为本地成就展示。
