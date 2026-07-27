# 第一个在线作品

技术指导可联系QQ 690023772，WX shenchong999

## 一、用途说明

这个教程展示从使用 Codex 开发贪吃蛇游戏，到将作品部署上线的完整过程。

<a href="https://tanchishe.1token-store.com" target="_blank" rel="noopener noreferrer">在线演示：贪吃蛇游戏</a>

## 二、可直接部署的源码参考

| 当前情况 | 下一步 |
|---|---|
| 还没有安装 Codex | 先打开 <a href="/guide/codex" target="_blank" rel="noopener noreferrer">Codex 安装与配置</a>，完成 Codex 安装和基础配置。 |
| 已经安装 Codex | 下载可直接部署的源码，可在 Codex 二次开发，也可直接部署看效果。 |

<a href="https://pan.quark.cn/s/5c1fdf23b89e?pwd=2ZGL" target="_blank" rel="noopener noreferrer">夸克网盘下载（提取码：2ZGL）</a>

## 三、操作步骤

1. 在 Codex 中依次点击“新建任务”、输入项目名称、点击“创建项目”，然后输入下面的提示词。

   ```text
   帮我写个贪吃蛇游戏，深色极简风格，同时适配桌面和移动端浏览器，桌面端用键盘上下左右键操纵，移动端用滑动手势操纵，带有积分系统和排行榜，游戏结束后用户可设置昵称并上传分数。使用直接上传的方式部署在 EdgeOne Makers，数据使用 KV 存储。
   ```

   稍等片刻，Codex 会在右侧生成项目文件。其中 `snake-edgeone.zip` 可用于直接部署。

   <a href="/images/tanchishe/tanchishe-01.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-01.webp" alt="在 Codex 中创建贪吃蛇项目并输入开发提示词"></a>

2. EdgeOne 是腾讯云提供的服务，其 Makers 可用于托管网页。进入 Makers 的“项目”页面，点击“创建项目”，然后选择“直接上传”，上传上一步得到的源码压缩包。

   <a href="/images/tanchishe/tanchishe-02.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-02.webp" alt="在 EdgeOne Makers 中选择直接上传项目"></a>

3. 等待项目部署完成。状态显示“成功”后，点击右上角的“预览”，即可获得能在浏览器中打开的访问链接。

   <a href="/images/tanchishe/tanchishe-03.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-03.webp" alt="EdgeOne Makers 部署成功后点击预览"></a>

4. 至此，作品已经可以通过公网访问。如果需要更稳定的访问地址和排行榜功能，请继续配置自定义域名、HTTPS 和 KV 存储。

   <a href="/images/tanchishe/tanchishe-11.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-11.webp" alt="在手机浏览器中访问已上线的贪吃蛇游戏"></a>

5. 添加自定义域名。进入项目的“域名管理”，点击“添加自定义域名”，输入自己的域名，选择环境后点击“下一步”。

   <a href="/images/tanchishe/tanchishe-04.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-04.webp" alt="在 EdgeOne Makers 中添加自定义域名"></a>

6. 配置域名 DNS。复制 EdgeOne 给出的 CNAME 记录，再将它添加到域名的 DNS 配置中。下图以 Cloudflare 为例；域名注册和 DNS 的具体操作可咨询域名服务商。

   <div class="guide-image-row guide-image-row--two">
     <a href="/images/tanchishe/tanchishe-05.webp"><img src="/images/tanchishe/tanchishe-05.webp" alt="在 EdgeOne 域名管理中复制 CNAME 记录"></a>
     <a href="/images/tanchishe/tanchishe-06.webp"><img src="/images/tanchishe/tanchishe-06.webp" alt="在 Cloudflare 中添加域名 CNAME 记录"></a>
   </div>

7. 配置域名 HTTPS，避免浏览器提示网站不安全。在域名管理中点击 HTTPS 的“配置”，再为边缘 HTTPS 证书选择“申请免费证书”和“自动验证”，最后保存。

   <div class="guide-image-row guide-image-row--https">
     <a href="/images/tanchishe/tanchishe-07.webp"><img src="/images/tanchishe/tanchishe-07.webp" alt="在 EdgeOne 域名管理中打开 HTTPS 配置"></a>
     <a href="/images/tanchishe/tanchishe-08.webp"><img src="/images/tanchishe/tanchishe-08.webp" alt="在 EdgeOne HTTPS 配置中点击边缘证书配置"></a>
     <a href="/images/tanchishe/tanchishe-09.webp"><img src="/images/tanchishe/tanchishe-09.webp" alt="选择申请免费证书和自动验证"></a>
   </div>

8. 申请 KV 存储。排行榜功能需要使用 KV 数据库。打开 Makers 的“存储”页面，选择“KV 存储”并申请开通：容量填写 `100M`，QPS 填写 `100`，申请理由填写“网页动态数据和分数排行榜”。

   <a href="/images/tanchishe/tanchishe-10.webp"><img class="guide-image-compact" src="/images/tanchishe/tanchishe-10.webp" alt="EdgeOne Makers KV 存储服务申请审批状态"></a>
