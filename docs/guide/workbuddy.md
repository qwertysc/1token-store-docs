# WorkBuddy 安装与配置

技术指导可联系QQ 690023772，WX shenchong999

本页介绍如何安装 WorkBuddy，通过 TokenToken API 密钥配置自定义模型，并使用手机向电脑发送任务。

## 一、下载客户端

1. 打开 <a href="https://www.workbuddy.cn/" target="_blank" rel="noopener noreferrer">WorkBuddy 官网</a>，下载适合自己系统的客户端并完成安装。
2. 打开 WorkBuddy，使用微信扫码登录。

## 二、打开模型配置界面

1. 点击对话框右下角的模型名称，打开模型列表。
2. 点击列表最下方的“配置自定义模型”，进入模型配置界面。

   <a href="/images/workbuddy/workbuddy-01.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-01.webp" alt="打开 WorkBuddy 对话框右下角的模型列表，点击配置自定义模型"></a>

## 三、配置模型

1. **供应商**：选择列表最底部的“自定义”。
2. **接口地址**：填写以下地址：

   ```text
   https://api.1token-store.com
   ```

3. **API Key**：填入你自己的 TokenToken API 密钥。还没有密钥时，先参考 <a href="https://doc.1token-store.com/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken 使用文档</a> 完成申请。
4. **模型名称**：填写：

   ```text
   gpt-6.1-sol
   ```

5. **高级配置**：勾选第一行的全部选项，即“工具调用”“图片输入”“思考模式”“仅思考模式”和“允许关闭思考”。
6. **默认思考强度**：选择“高”。
7. **输入与输出**：输入选择 `256K`，输出选择 `64K`。
8. 核对配置后，点击“保存”。

<div class="guide-image-row guide-image-row--two">
  <a href="/images/workbuddy/workbuddy-02.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-02.webp" alt="选择自定义供应商，填写 TokenToken 接口地址、API 密钥和 gpt-6.1-sol 模型名称"></a>
  <a href="/images/workbuddy/workbuddy-03.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-03.webp" alt="勾选高级配置第一行的全部选项，默认思考强度设为高，输入设为 256K，输出设为 64K"></a>
</div>

## 四、开启第一条对话

1. 点击左侧的“新建任务”。
2. 打开对话框右下角的模型列表，在“自定义模型”中选择刚刚配置的 `gpt-6.1-sol`。
3. 在输入框中填写任务并发送，例如：

   ```text
   帮我查下北京今天的天气
   ```

4. 等待 WorkBuddy 回复，即可开始使用自定义模型。

   <a href="/images/workbuddy/workbuddy-04.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-04.webp" alt="新建任务，选择自定义模型 gpt-6.1-sol，并收到 WorkBuddy 的天气查询回复"></a>

## 五、多端互联

喜欢边摸鱼边打工的朋友有福了（bushi），使用 WorkBuddy 的多端互联，可以在手机上发送指令，让电脑执行任务。

1. 在手机端和电脑端登录同一个账号，并保持电脑端在线。
2. 在手机端点击顶部的设备名称（如“云电脑”），在“选择设备”中切换到自己的在线电脑，如左图所示。
3. 在手机端输入框的模型列表中，选择已经配置好的自定义模型 `gpt-6.1-sol`，如右图所示。
4. 输入任务并发送，等待电脑执行并返回结果。

<div class="guide-image-row guide-image-row--two">
  <a href="/images/workbuddy/workbuddy-05.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-05.webp" alt="在 WorkBuddy 手机端打开选择设备列表，切换到同一账号下的在线电脑"></a>
  <a href="/images/workbuddy/workbuddy-06.webp"><img class="guide-image-compact" src="/images/workbuddy/workbuddy-06.webp" alt="手机端已连接电脑，选择自定义模型 gpt-6.1-sol 并查看电脑执行任务后返回的硬件配置"></a>
</div>
