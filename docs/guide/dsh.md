# DeepSeek Harness 安装与配置

技术指导可联系QQ 690023772，WX shenchong999

本页介绍如何安装 DeepSeek Harness（简称 DSH），并使用 TokenToken API 密钥接入模型。

## 一、下载客户端

1. 打开 <a href="https://www.deepseek.com/harness" target="_blank" rel="noopener noreferrer">DeepSeek Harness 官网</a>，下载适合自己系统的桌面客户端并完成安装。
2. 打开 DSH，看到下图所示的主界面后，即可开始配置。

   <a href="/images/dsh/dsh-01.webp"><img class="guide-image-compact" src="/images/dsh/dsh-01.webp" alt="DeepSeek Harness 安装后首次打开的主界面"></a>

## 二、打开模型配置界面

1. 点击左下角的“更多”，选择“设置”。
2. 在设置界面中点击“模型”。
3. 点击“添加模型提供商”，进入模型配置表单。

   <a href="/images/dsh/dsh-02.webp"><img class="guide-image-compact" src="/images/dsh/dsh-02.webp" alt="在设置中选择模型并点击添加模型提供商"></a>

## 三、配置模型

1. 在“第三方模型提供商”中，将“提供商”选择为 `openai`。
2. 在“API 密钥”中填入你自己的 TokenToken 密钥。还没有密钥时，先参考 <a href="https://doc.1token-store.com/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken 使用文档</a> 完成申请。
3. 展开“自定义设置”，在“API 地址”中填写：

   ```text
   https://api.1token-store.com
   ```

4. 点击“获取可用模型”，打开模型列表。建议只勾选少量常用模型，这里以 `gpt-6.1-sol` 为例。
5. 点击“更新列表”，返回配置表单后，再点击“保存”完成配置。

<div class="guide-image-row guide-image-row--two">
  <a href="/images/dsh/dsh-03.webp"><img class="guide-image-compact" src="/images/dsh/dsh-03.webp" alt="选择 openai 提供商，填写 TokenToken 密钥和 API 地址并获取可用模型"></a>
  <a href="/images/dsh/dsh-04.webp"><img class="guide-image-compact" src="/images/dsh/dsh-04.webp" alt="在可用模型列表中勾选 gpt-6.1-sol 并点击更新列表"></a>
</div>

## 四、使用 DeepSeek Harness

### 1. 开启自动授权审查

为减少任务被审批授权打断的次数，可以开启“自动授权审查”功能。

1. 点击左侧的“插件”。
2. 找到“自动授权审查”，打开右侧开关。

   <a href="/images/dsh/dsh-05.webp"><img class="guide-image-compact" src="/images/dsh/dsh-05.webp" alt="在插件页面打开自动授权审查开关"></a>

### 2. 配置对话框

1. **选择工作区**：工作区就是本次任务使用的文件夹。可以新建文件夹、选择已有文件夹，也可以直接使用默认工作区。
2. **选择审批模式**：点击输入框下方的审批模式，选择“自动审查”。
3. **选择模型和推理等级**：在输入框右下角选择已添加的模型，这里使用 `gpt-6.1-sol`，并将推理等级手动设为 `High`。`Default` 对应非思考模式，建议按需手动选择一个推理档位。

   <a href="/images/dsh/dsh-06.webp"><img class="guide-image-compact" src="/images/dsh/dsh-06.webp" alt="在对话框中选择工作区、自动审查模式和 GPT-6.1 Sol High 模型"></a>

### 3. 发送第一条消息

1. 在输入框中输入下面的内容，再点击发送：

   ```text
   总结一下我这台电脑的配置
   ```

2. 等待 DSH 完成查询并回复。如下图所示，收到处理器、显卡、内存等配置信息后，即可确认模型已经可以正常使用。

   <a href="/images/dsh/dsh-07.webp"><img class="guide-image-compact" src="/images/dsh/dsh-07.webp" alt="DeepSeek Harness 完成电脑配置查询并返回处理器、显卡和内存等信息"></a>
