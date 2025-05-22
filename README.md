# MiYingRuShi 的博客源码仓库

[![GitHub Actions Status](https://img.shields.io/github/actions/workflow/status/MiFaZhan/blog/deploy.yml?label=自动部署)](https://github.com/MiFaZhan/blog/actions)
[![Hexo Version](https://img.shields.io/badge/Hexo-6.3+-blue)](https://hexo.io)
[![Fluid Theme](https://img.shields.io/badge/Theme-Fluid_Custom-2CA5E0)](https://github.com/fluid-dev/hexo-theme-fluid)

这是基于 Hexo 构建的个性化博客系统，集成 Obsidian 多端编辑能力和 GitHub 自动化部署体系。静态页面实时部署至 [MiFaZhan/MiFaZhan.github.io](https://github.com/MiFaZhan/MiFaZhan.github.io)。

## 🌟 核心特性

### 🎨 美化
- **视频背景功能**  
  改造 Fluid 主题实现动态视频背景，[技术细节说明](https://mifazhan.top/posts/46339511/)
- **豆瓣数据同步**  
  通过 [hexo-douban](https://github.com/mythsman/hexo-douban) 自动生成书影音页面。

### ⚡️ Obsidian 全链路工作流
Obsidian 统一编辑体验
- **Git 无缝集成**  
  通过 [Obsidian Git](https://github.com/denolehov/obsidian-git) 插件实现：
  - 一键推送文章到本仓库
  - 自动同步多端内容变更
  - 版本控制与历史追溯
- **跨平台编辑**  
  依托于 Obsidian 多平台客户端以及Obsidian Git插件同步功能，实现多平台统一编辑体验

### 🤖 自动化部署体系
- **自动化部署**  
  通过 GitHub Actions 实现「源码更新 → 生成静态页面 → 同步永久链接 → 发布」全流程自动化。
- **永久链接固化**
- 集成 [hexo-abbrlink](https://github.com/ohroy/hexo-abbrlink) 插件，文章 URL 与内容强绑定，避免因标题修改导致链接失效。
- **实时内容同步**  
  GitHub Actions 自动完成：
  1. 生成静态页面时回写 `abbrlink` 到源文件
  2. 提交源码变更到当前仓库
  3. 部署静态文件到 Pages 仓库

### 🔄 系统工作流

![image](https://github.com/user-attachments/assets/dfd9d480-18f9-410a-b5eb-5cb8a8a190d1)


## 📁 目录架构

```text
blog/
├── .obsidian/             # Obsidian 编辑器配置
│   ├── plugins/           # Obsidian 插件（含 git 同步插件）
│   └── settings.json      # 编辑器个性化配置
├── scripts/               # Hexo 扩展脚本
│   └── sync_abbrlink.js   # 永久链接同步器
├── source/                # 内容资源
│   ├── _posts/            # Markdown 文章库
│   └── videos/            # 自定义视频背景资源
├── themes/                # Hexo 主题
│   └── fluid/             # Fluid 主题
│       ├── _config.yml    # 主题主配置
│       └── layout/_partials/background.ejs  # 视频背景模版
├── .github/workflows/     # 自动化流程
│   └── deploy.yml         # CI/CD 部署管道
├── _config.yml            # Hexo 主配置
└── package.json           # 项目依赖清单
