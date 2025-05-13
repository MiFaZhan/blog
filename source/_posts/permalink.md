---
layout: post
title: Hexo-永久链接
date: 2025-05-13 19:38
categories:
  - 博客
tags:
  - Hexo
  - abbrlink
hide: true
sitemap: false
abbrlink: dc842c8c
---
# 引言

## 版本

打开 `项目根目录\package.json` 文件即可看到当前 hexo 版本

我的版本为 7.3.0

```
"hexo": {
    "version": "7.3.0"
  }
```

## _config. Yml

[Hexo配置文档](https://hexo.io/zh-cn/docs/configuration.html)

在使用 hexo 框架搭建博客后，其 URL 部分默认配置如下

```
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: http://example.com
permalink: :year/:month/:day/:title/
```

`url: http://example.com` 部分正常修改为自己的网址即可

而 permalink 默认配置过于冗长

且一旦更改文件名，文章的 URL 就会改变，不利于搜索引擎收录和外部引用

上一篇文章我们介绍了

[Hexo-博客文章编辑(Typora) - MiYingRuShi](https://mifazhan.top/posts/b915b0ef/)

文章图片引用会出问题

