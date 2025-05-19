---
layout: post
title: Hexo-图片引用问题
comment: true
date: 2025-05-18 19:38
categories:
  - 博客
tags:
  - Hexo
  - abbrlink
hide: true
sitemap: false
abbrlink: dc842c8c
---
## 引言

之前文章我们介绍了，使用 Typora 编辑博客文章[Hexo-博客文章编辑(Typora) - MiYingRuShi](https://mifazhan.top/posts/b915b0ef/)

讲解了两种配置永久链接的方法 [Hexo-永久链接 - MiYingRuShi](https://mifazhan.top/posts/33b326d2/)



### 版本

打开 `项目根目录\package.json` 文件即可看到当前 hexo 版本

请查看版本信息，以确保此文章内容适用于你的项目

```
"hexo": {
    "version": "7.3.0"
  }
```



常见解决方法

一、是按照 hexo 官方文档[永久链接（Permalinks） \| Hexo](https://hexo.io/zh-cn/docs/permalinks) 调整 Permalink

二、通过安装插件，如 [GitHub - ohroy/hexo-abbrlink: create one and only link for every post for hexo](https://github.com/ohroy/hexo-abbrlink) 来实现永久链接


