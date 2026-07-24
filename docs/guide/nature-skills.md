# 学术技能 Nature Skills

技术指导可联系QQ 690023772，WX shenchong999

论文好搭子，学术不犯愁。

视频教程：<a href="https://www.bilibili.com/video/BV11sKb6gETQ/?vd_source=a02042d6465bdca5a5af943ba84da757" target="_blank" rel="noopener noreferrer">Nature Skills 学术技能安装与使用</a>

## 准备工作

请先安装 Codex 并完成基础配置：<a href="/guide/codex" target="_blank" rel="noopener noreferrer">Codex 使用</a>。

## 安装 Nature Skills

在 Codex 中输入下面的内容：

```text
请安装 Nature Skills：

https://github.com/Yuan1z0825/nature-skills

用户的电脑可能没有 Git，不要使用 git clone，也不要要求用户手动下载。

请自动识别 Windows 或 macOS/Linux，并执行以下操作：

1. 优先下载 ZIP：
   https://ghfast.top/https://github.com/Yuan1z0825/nature-skills/archive/refs/heads/main.zip

2. 如果失败，自动改用：
   https://gh-proxy.com/https://github.com/Yuan1z0825/nature-skills/archive/refs/heads/main.zip

3. 下载失败时至少重试 3 次，然后解压到临时目录。

4. 将解压目录中 `skills/` 下的所有完整技能文件夹复制到：
   - Windows：`%USERPROFILE%\.codex\skills\`
   - macOS/Linux：`~/.codex/skills/`

5. 必须保留完整目录，包括 `SKILL.md`、`references/`、`static/`、`scripts/`、`assets/`、`templates/`、`manifest.yaml` 和 `nature-shared`，不要只复制 `SKILL.md`。

6. 可以更新同名的 Nature Skills，但不要删除或覆盖其他已有 Codex Skills。

7. 本次只复制技能文件，不要安装 Python、R、Playwright、MCP 或 API 等可选依赖。

8. 安装后检查每个目标技能目录均存在 `SKILL.md`，并确认 `nature-shared` 已安装。

完成后报告：
- 使用的下载地址
- Codex Skills 安装目录
- 已安装的技能数量
- 验证结果

确认文件实际安装并验证通过后，再提醒我重启 Codex。
```

安装验证通过后，按 Codex 的提示重启应用。

## 场景演示

### 1. 论文配图

把一段调查数据交给 Codex，它会自动生成论文图、可编辑矢量文件和绘图代码。

<a href="/images/nature-skills/nature-skills-01.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-01.webp" alt="在 Codex 中提交调查数据并选择 Python 绘图"></a>

<a href="/images/nature-skills/nature-skills-02.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-02.webp" alt="Codex 生成论文配图、源数据、绘图脚本和说明文件"></a>

### 2. 搜索文献

Codex 会从一个选题出发，扩展检索关键词，整理真实文献，并生成文献表和主题综述。

<a href="/images/nature-skills/nature-skills-03.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-03.webp" alt="Codex 汇总大学生社交媒体使用相关中文文献"></a>

<a href="/images/nature-skills/nature-skills-04.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-04.webp" alt="Codex 整理补充证据并给出论文综述框架"></a>

### 3. 论文写作

Codex 将调查数据、相关文献和论证结构组合起来，生成一份结构完整、引用可核验的论文初稿。

<a href="/images/nature-skills/nature-skills-05.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-05.webp" alt="Codex 生成带摘要和关键词的论文初稿"></a>

<a href="/images/nature-skills/nature-skills-06.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-06.webp" alt="论文初稿中的现状分析和影响机制章节"></a>

<a href="/images/nature-skills/nature-skills-07.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-07.webp" alt="论文初稿中的建议、结论和参考文献章节"></a>

<a href="/images/nature-skills/nature-skills-08.webp"><img class="guide-image-compact" src="/images/nature-skills/nature-skills-08.webp" alt="论文初稿中的完整参考文献列表"></a>
