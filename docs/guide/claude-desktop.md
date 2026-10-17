# Claude 桌面版安装配置教程

技术指导可联系QQ 690023772，WX shenchong999

本教程介绍如何安装 Claude 桌面版，并通过 TokenToken API 密钥配置第三方推理。以下以 Windows 界面为例，Mac 的操作逻辑相同，菜单栏位于屏幕顶部。

## 一、下载客户端

1. 打开 <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer">Claude Code 官网</a>，选择对应系统的桌面客户端下载并安装。
2. 安装完成后打开 Claude，会看到欢迎界面。**不要点击开始使用。**

<a href="/images/claude-desktop/claude-desktop-01.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-01.webp" alt="安装完成后打开 Claude 桌面版，显示欢迎界面"></a>

## 二、启用开发者模式

1. 打开菜单栏。Windows 点击窗口左上角的菜单按钮，Mac 使用屏幕顶部菜单栏。
2. 依次点击 **帮助 → 故障排查 → 启用开发者模式**。

<a href="/images/claude-desktop/claude-desktop-02.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-02.webp" alt="在 Claude 的帮助和故障排查菜单中启用开发者模式"></a>

## 三、配置第三方推理

1. 再次打开菜单栏，进入 **开发者**。
2. 点击 **配置第三方推理**，打开配置窗口。

<a href="/images/claude-desktop/claude-desktop-03.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-03.webp" alt="在开发者菜单中打开配置第三方推理窗口"></a>

## 四、填写第三方推理参数

如果还没有 API 密钥，请先完成第五节的申请步骤，再回到这里填写。

1. **Connection** 选择 `Gateway`。
2. **Credential kind** 选择 `Static API key`。
3. **Gateway base URL** 填写以下地址：

   ```text
   https://api.1token-store.com
   ```

4. **Gateway API key** 粘贴你的 TokenToken API 密钥。
5. **Gateway auth scheme** 选择 `bearer`。
6. 核对参数后，点击右下角的 **Apply Changes** 应用配置。

<a href="/images/claude-desktop/claude-desktop-04.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-04.webp" alt="选择 Gateway 和静态 API 密钥，填写网关地址与密钥，使用 bearer 并应用配置"></a>

## 五、申请 API 密钥

1. 登录 <a href="https://1token-store.com/keys" target="_blank" rel="noopener noreferrer">TokenToken API 密钥</a> 页面，点击 **创建密钥**。首次使用可参考 <a href="/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken 使用文档</a>。
2. 填写便于识别的密钥名称。
3. 厂商选择 **Anthropic**，分组选择图中的 **Claude（消耗余额）**。
4. 点击 **创建**，复制生成的 API 密钥。密钥是一段以 `sk-` 开头的字符串。
5. 回到第四节，将完整密钥粘贴到 **Gateway API key**，再点击 **Apply Changes** 应用配置。

<a href="/images/claude-desktop/claude-desktop-05.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-05.webp" alt="在 TokenToken 创建密钥，选择 Anthropic 厂商和 Claude 消耗余额分组"></a>

## 六、使用 Claude

1. 配置生效后，在 Claude 中新建对话并发送消息，即可开始使用。
2. 后续需要修改第三方推理配置时，打开左下角的设置，进入 **Inference Configuration** 修改并应用配置。

<a href="/images/claude-desktop/claude-desktop-06.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-06.webp" alt="第三方推理配置完成后的 Claude 对话界面，左下角可进入设置"></a>

## 七、可能遇到的问题

### Claude Code binary not available

首次使用 Claude 桌面版时，客户端需要下载并安装必要组件。如果组件尚未准备好，发送消息可能出现以下提示：

```text
Host Claude Code binary not available. Check that the download completed.
```

保持 Claude 打开并联网，等待组件自动下载和安装完成，再点击 **Try again** 或重新发送消息。

<a href="/images/claude-desktop/claude-desktop-07.webp"><img class="guide-image-compact" src="/images/claude-desktop/claude-desktop-07.webp" alt="Claude 提示 Code binary not available，需等待必要组件下载完成后重试"></a>
