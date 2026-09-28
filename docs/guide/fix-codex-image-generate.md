# 修复 Codex 生图功能

技术指导可联系QQ 690023772，WX shenchong999

## 一、遇到的情况

让 Codex 生成图片时，如果看到缺少 `OPENAI_API_KEY` 或 Python `openai` 依赖的提示，说明当前生图方式还不能运行。可以安装适配 TokenToken 的异步生图技能，再在 Codex 中直接描述想画的内容。

<a href="/images/fix-codex-image-generate/fix-codex-image-generate-01.webp"><img class="guide-image-compact" src="/images/fix-codex-image-generate/fix-codex-image-generate-01.webp" alt="Codex 提示缺少 OPENAI_API_KEY 和 Python openai 依赖，无法生成图片"></a>

## 二、准备工作

1. 先参考 <a href="https://doc.1token-store.com/guide/codex" target="_blank" rel="noopener noreferrer">Codex 安装与配置</a>，完成 Codex 的安装和基础配置。

## 三、操作步骤

1. 在 Codex 中新建对话，复制下面整段文字发送给它，等待技能安装完成：

   ```text
   https://github.com/qwertysc/async-gpt-image-generate，帮我安装这个技能，如无法访问 GitHub 可尝试国内镜像源。
   ```

2. 首次使用时，如果技能提示需要配置密钥，打开 <a href="https://1token-store.com/keys" target="_blank" rel="noopener noreferrer">TokenToken API 密钥</a> 页面，申请 `ChatGPT/Codex` 分组的密钥，并按 Codex 的提示在当前对话中完成配置。

3. 安装和配置完成后，向 Codex 描述想生成的图片，例如：

   ```text
   画一只狗狗
   ```

   Codex 会调用新安装的技能生成图片，并在对话中展示结果。

   <a href="/images/fix-codex-image-generate/fix-codex-image-generate-02.webp"><img class="guide-image-compact" src="/images/fix-codex-image-generate/fix-codex-image-generate-02.webp" alt="Codex 使用异步生图技能生成并展示一只狗狗的图片"></a>
