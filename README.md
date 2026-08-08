# Tailwind 实战学习

交互式中文 Tailwind CSS 教程：课程 + 测验 + 进度 + 在线 Playground + 设计工坊。

参考姊妹项目：[learning-vue3](https://github.com/xiaoqianran/learning-vue3)

**仓库：** [https://github.com/xiaoqianran/learning-tailwind](https://github.com/xiaoqianran/learning-tailwind)

---

## 这是什么

面向想系统学习 **Tailwind CSS**（含 v4 心智）的同学。内容以「读一点、动手一点、测一点」组织。

你可以：

- 按路径学完 **23 节** 课程（讲解 + 对应源码 + 交互 Demo + 小测验）
- 在 **Playground** 里改 HTML/class，即时预览
- 在 **设计工坊** 里用开关拼装 UI 并完成闯关
- 用 **速查表** 复习，用 **学习中心 / 错题本 / 结业证明** 跟进度

---

## 功能一览

| 模块 | 路径 | 说明 |
|------|------|------|
| 课程 | `/lesson/:slug` | 正文、对应源码、Live Demo、测验、笔记 |
| 首页大纲 | `/` | 搜索、路径筛选、进度条 |
| Playground | `/playground` | HTML + Tailwind 即时预览 |
| 设计工坊 | `/studio` | 开关驱动 UI + 闯关 |
| 速查表 | `/cheatsheet` | 工具类速查 |
| 学习中心 | `/hub` | 打卡、收藏、路径进度 |
| 练习场 | `/lab` | 综合抽题 |
| 错题本 | `/mistakes` | 测验错题回顾 |
| 结业证明 | `/certificate` | 全部完成后解锁 |

---

## 学习路径

| 路径 | 你学到什么 |
|------|------------|
| **基础** | 是什么、安装、工具类思维、颜色、间距、排版、尺寸 |
| **布局** | Flex、Grid、定位、边框圆角阴影 |
| **交互** | 状态变体、响应式、过渡动画 |
| **主题** | 暗色模式、@theme 令牌、v4 要点 |
| **组件** | 表单、卡片、导航 |
| **实战** | 仪表盘、常见模式、生产最佳实践 |

---

## 本地运行

环境：Node 22+ 推荐。

```bash
git clone https://github.com/xiaoqianran/learning-tailwind.git
cd learning-tailwind
npm install
npm run dev
```

开发服务默认：`http://127.0.0.1:8080`（绑定 `0.0.0.0:8080`）。

```bash
npm run dev          # 开发
npm run build        # 生产构建
npm run build:pages  # GitHub Pages 静态构建
npm run typecheck    # TypeScript 检查
```

GitHub Pages 静态构建会设置 `GITHUB_PAGES=true`，`base` 为 `/learning-tailwind/`。

---

## 技术栈

- **界面与路由：** React 19、TanStack Start / Router、Vite
- **样式：** Tailwind CSS v4
- **状态：** Zustand（学习进度持久化）
- **部署：** GitHub Actions → GitHub Pages

---

## 进度与隐私

- 学习进度、笔记、错题保存在 **浏览器 localStorage**
- 不上传到服务器；清站点数据会丢失进度
- 结业证明为本地成就展示，**非正式官方证书**

---

## 许可证与声明

- 教程内容用于学习与演示
- Tailwind 相关商标归各自所有者
- 欢迎提 Issue / PR 纠错与补充
