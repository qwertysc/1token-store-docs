# Codex 搜索增强工具

技术指导可联系QQ 690023772，WX shenchong999

## 一、这是什么？

Firecrawl 可以帮 Codex 搜索网页、提取正文并整理有用信息。它适合处理普通请求难以获取、广告和导航内容较多，或需要连续查找多个网页的情况。

相比让 AI 逐页操作浏览器，Firecrawl 可以直接返回更干净的搜索和页面内容，减少无关信息带来的 Token 消耗。

Firecrawl 免费方案目前每月提供 `1,000 credits`，轻度使用通常足够。用量较大时，可查看 <a href="https://www.firecrawl.dev/pricing" target="_blank" rel="noopener noreferrer">Firecrawl 价格与额度</a> 并按需升级。

## 二、准备工作

请先安装 Codex 并完成基础配置：<a href="/guide/codex" target="_blank" rel="noopener noreferrer">Codex 安装与配置</a>。

## 三、安装 Firecrawl

1. 在 Codex 中新建任务，输入下面的内容：

   ```text
   Read and follow https://www.firecrawl.dev/agent-onboarding/SKILL.md
   ```

2. 按照 Codex 的提示完成 Firecrawl 账号注册、浏览器登录和授权。

3. 等待 Codex 完成安装与测试。看到授权和测试通过的提示后，即可开始使用。

   <a href="/images/firecrawl/firecrawl-01.webp"><img class="guide-image-compact" src="/images/firecrawl/firecrawl-01.webp" alt="Codex 完成 Firecrawl 安装、授权和测试"></a>

## 四、场景演示

### 1. 信息搜索

直接告诉 Codex 要查找的内容。例如搜索闪迪和美光的最新财报，Codex 会调用 Firecrawl 快速查找相关网页，核对并汇总关键数据。

```text
帮我搜一下闪迪和美光的最新财报
```

<a href="/images/firecrawl/firecrawl-02.webp"><img class="guide-image-compact" src="/images/firecrawl/firecrawl-02.webp" alt="Codex 使用 Firecrawl 搜索并汇总两家公司的最新财报"></a>

### 2. 页面抓取

把网页链接发给 Codex，并说明需要的内容。Codex 会使用 Firecrawl 提取正文，尽量排除导航、广告和推荐阅读等干扰内容。

```text
帮我抓取这篇文章的正文内容：

<粘贴网页链接>
```

<a href="/images/firecrawl/firecrawl-03.webp"><img class="guide-image-compact" src="/images/firecrawl/firecrawl-03.webp" alt="Codex 使用 Firecrawl 抓取新闻页面并整理正文"></a>
