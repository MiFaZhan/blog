---
layout: post
title: Hexo-图片引用问题
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

## _config 配置文件

打开 [Hexo配置文档](https://hexo.io/zh-cn/docs/configuration.html)可以查看 `_config.yml` 各配置的功能

在使用 hexo 框架搭建博客后，其 URL 部分默认配置如下

```
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: http://example.com
permalink: :year/:month/:day/:title/
```

`url: http://example.com` 部分正常修改为自己的网址即可

而 permalink 默认配置过于冗长，且一旦更改文件名，文章的 URL 就会改变，不利于搜索引擎收录和外部引用

常见解决方法

一、是按照 hexo 官方文档[永久链接（Permalinks） \| Hexo](https://hexo.io/zh-cn/docs/permalinks) 调整 Permalink

二、通过安装插件，如 [GitHub - ohroy/hexo-abbrlink: create one and only link for every post for hexo](https://github.com/ohroy/hexo-abbrlink) 来实现永久链接

上一篇文章我们介绍了，使用 Typora 编辑器

[Hexo-博客文章编辑(Typora) - MiYingRuShi](https://mifazhan.top/posts/b915b0ef/)

文章图片引用会出问题

测试豆瓣

测试
