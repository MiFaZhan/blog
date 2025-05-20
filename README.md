# MiYingRuShi 的博客源码仓库

[![GitHub Actions Status](https://img.shields.io/github/actions/workflow/status/MiFaZhan/blog/deploy.yml?label=自动部署)](https://github.com/MiFaZhan/blog/actions)
[![Hexo Version](https://img.shields.io/badge/Hexo-6.3+-blue)](https://hexo.io)
[![Fluid Theme](https://img.shields.io/badge/Theme-Fluid-2CA5E0)](https://github.com/fluid-dev/hexo-theme-fluid)

这是基于 Hexo 框架构建的个人博客源码仓库，静态页面通过 GitHub Actions 自动部署至 [MiFaZhan.github.io](https://github.com/MiFaZhan/MiFaZhan.github.io)。

## 🚀 功能特性

- **自动化部署**  
  通过 GitHub Actions 实现「源码更新 → 生成静态页面 → 同步永久链接 → 发布」全流程自动化。
- **永久链接支持**  
  集成 [hexo-abbrlink](https://github.com/ohroy/hexo-abbrlink) 插件，文章 URL 与内容强绑定，避免因标题修改导致链接失效。
- **豆瓣数据同步**  
  通过 [hexo-douban](https://github.com/mythsman/hexo-douban) 自动生成书影音页面。
- **多主题支持**  
  默认使用 [Fluid 主题](https://hexo.fluid-dev.com)，保留 Landscape 主题配置 (`_config.landscape.yml`)。

## 📂 目录结构

```text
blog/
├── source/                  # 文章和资源文件
│   └── _posts/             # Markdown 文章
├── themes/                 # Hexo 主题
├── scripts/                # 自定义脚本
│   └── sync_abbrlink.js    # 自动同步永久链接到源文件
├── .github/workflows/      # GitHub Actions 配置
│   └── deploy.yml          # 自动化部署流程
├── _config.yml             # Hexo 主配置
├── _config.fluid.yml       # Fluid 主题配置
└── package.json            # 项目依赖
