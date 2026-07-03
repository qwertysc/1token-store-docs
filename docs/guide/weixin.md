# 接入微信

这篇教程用于把 Chat-Codex 微信连接器接入到本机 Codex，让你可以在微信里给 Codex 发消息、让 Codex 执行任务。连接器技能会根据电脑系统选择合适脚本，自动准备 Node.js、安装 `@openai/codex` 和 `chat-codex`，并按提示完成微信扫码登录、首次配对和连接器启动。

## 准备工作

1. 先准备 TokenToken 账号和 API 密钥：<a href="/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken 使用教程</a>，官网地址：<a href="https://1token-store.com/" target="_blank" rel="noopener noreferrer">TokenToken 官网</a>
2. 先完成 Codex 安装和基础配置：<a href="/guide/codex" target="_blank" rel="noopener noreferrer">Codex 使用</a>

## 如何使用

在 Codex 里输入下面这一句：

```text
安装这个技能并帮我启动微信连接器：https://gitee.com/shenchong/chat-codex-connectors-skill
```

## 注意事项

### 1. 为什么 Codex 桌面端看不到微信聊天产生的会话？

两个渠道的会话不会实时同步，需要重启桌面 Codex 才会显示。

### 2. 微信消息没响应？

电脑休眠或重启会断开微信连接，在桌面端的 Codex 中发送“启动微信连接器”命令可恢复。

### 3. 需要接着桌面端的会话聊？

发送 `/resume` 命令，会出现会话列表，回复序号即可选择会话继续聊。

### 4. 会话聊太久不干净了？

发送 `/new` 命令，创建新会话重新开始。
