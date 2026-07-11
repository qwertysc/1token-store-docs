# Codex使用

## 一、用途说明

#### 本工具包用于帮助用户完成 Codex 桌面端安装和基础配置，相关内容都在网盘中，免去网络困扰。

网盘下载：

1. <a href="https://pan.quark.cn/s/4c758e82b7c4?pwd=1D4Z" target="_blank" rel="noopener noreferrer">夸克网盘下载（提取码：1D4Z）</a>

2. <a href="https://pan.baidu.com/s/17vRnYubic2zE_ueq0djXPQ?pwd=9594" target="_blank" rel="noopener noreferrer">百度网盘下载（提取码：9594）</a>



【视频教程】

<a href="https://www.bilibili.com/video/BV1Kt7A6YEqA/?share_source=copy_web&vd_source=e7e413227d08f884bd442a4337b51872" target="_blank" rel="noopener noreferrer">Codex一键安装配置｜国内用户防封号平替方案，小白也能30秒搞定</a>



【一对一指导】

太长不想看？没问题，欢迎私聊一对一指导：

QQ 690023772

WX shenchong999



本工具不会读取或上传你的 API 秘钥。API 秘钥只会写入你自己电脑上的 Codex 配置目录。





## 二、使用前准备

#### 请先准备好：

1. 一台 macOS 或 Windows 电脑。

2. 避免执行失败，建议完整下载网盘文件夹内容。

3. 在官网<a href="https://1token-store.com" target="_blank" rel="noopener noreferrer">TokenToken</a> 申请 API密钥（OPENAI_API_KEY）。网站使用文档：<a href="/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken使用文档</a>

    

获取 API 密钥后，请复制完整内容，通常以 sk- 开头。





## 三、macOS 操作步骤

1. 打开本文件夹。

2. 根据Mac的芯片类型选择 “Codex-MacOS安装包-M系列处理器.dmg” 或 "Codex-MacOS安装包-英特尔处理器.dmg"，双击安装 Codex。

3. 安装完成后，回到本文件夹。

4. 双击 “02 一键配置 Codex - macOS.zip”，解压出 “02 一键配置 Codex - macOS.command”。

5. 双击 “02 一键配置 Codex - macOS.command”。

6. 如果弹窗提示无法打开或执行失败，请打开系统设置，进入“隐私与安全性”，滑到页面最下面，临时允许该脚本执行，然后回到本文件夹重新双击 “02 一键配置 Codex - macOS.command”。

|<a href="/images/codex/codex-01-0ea488e8.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-01-0ea488e8.webp" alt="Image"></a><br>|<a href="/images/codex/codex-02-c18d4169.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-02-c18d4169.webp" alt="Image"></a><br>|
|---|---|

7. 出现“请选择配置方式”后，输入1，按回车。

<a href="/images/codex/codex-07-0fbe1963.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-07-0fbe1963.webp" alt="macOS 选择配置方式"></a>

8. 出现OPENAI_API_KEY的提示后，粘贴密钥，按回车。密钥参考 <a href="/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken使用文档</a> 申请。

<a href="/images/codex/codex-08-919768af.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-08-919768af.webp" alt="macOS 输入 API 密钥"></a>

9. 粘贴时屏幕上不会显示内容，这是正常现象。

10. 看到“完成。请重新打开 Codex，让新配置生效。”后，重新打开 Codex。

    

    

## 四、Windows 操作步骤

1. 打开本文件夹。

2. 双击 "01 一键配置 Codex - Windows.cmd"。

    1. 脚本会先检查是否已安装 Codex；如果未安装且当前目录有 "Codex-Windows安装包.Msix" 或 "App Installer.msixbundle"，请按提示选择是否现在安装。

    2. 如果自动安装失败，请手动双击 "Codex-Windows安装包.Msix" 安装；若双击不能安装，请先双击安装 "App Installer.msixbundle"，完成后再尝试安装 "Codex-Windows安装包.Msix"。

    3. 如果上述两个Codex安装尝试都失败，可以改 "Codex-Windows安装包.Msix"文件后缀Msix为zip，让其变成一个压缩包，然后解压文件，解压过程比较慢，解压完毕后可能会触发杀毒软件扫描而卡住，都是正常现象，然后在解压出的文件夹中找到app文件夹，双击其中的Codex.exe即可运行。

3. 出现“请选择配置方式”后，输入1，按回车。

<a href="/images/codex/codex-09-77d62b71.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-09-77d62b71.webp" alt="Windows 选择配置方式"></a>

4. 出现OPENAI_API_KEY的提示后，粘贴密钥，按回车。密钥参考 <a href="/guide/token-token" target="_blank" rel="noopener noreferrer">TokenToken使用文档</a> 申请。

<a href="/images/codex/codex-10-0e24e7c6.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-10-0e24e7c6.webp" alt="Windows 输入 API 密钥"></a>

5. 粘贴时屏幕上不会显示内容，这是正常现象。

6. 看到“完成。请重新打开 Codex，让新配置生效。”后，重新打开 Codex即可使用。

## 五、配置文件位置和脚本工作内容

#### 脚本会自动处理：

1. 将 config.toml 中的推荐配置合并到 Codex 配置文件。

2. 配置 auth.json 中的 OPENAI_API_KEY。

3. 清理 auth.json 中 OPENAI_API_KEY 以外的字段。

4. 自动备份原有配置文件，避免误操作导致配置丢失。



**如需手动修改配置，可参考下面的配置文件位置**

macOS：

\~/.codex/config.toml

\~/.codex/auth.json



Windows：

%USERPROFILE%\\.codex\\config.toml

%USERPROFILE%\\.codex\\auth.json



脚本会在修改前自动生成备份文件，例如：

config.toml.bak.20260605-120000

auth.json.bak.20260605-120000





## 六、常见问题

### 1. 粘贴 API 秘钥时没有显示内容，是否正常？

正常。为了保护秘钥，输入时不会显示字符。粘贴后直接按回车即可。



### 2. 脚本提示配置完成后还需要做什么？

请关闭并重新打开 Codex，让新配置生效。



### 3. 旧的 auth.json 里其他字段会保留吗？

不会。配置脚本会清理 auth.json，只保留 OPENAI_API_KEY 字段。



### 4. 配置失败怎么办？

请截图保存错误提示，并把同目录或 .codex 目录中生成的 .bak 备份文件保留好，方便排查。



### 5. 是否可以重复执行配置脚本？

可以。重复执行不会重复添加 config.toml 字段。已有 API 秘钥时，直接按回车会保留原 OPENAI_API_KEY，并清理 auth.json 中其他字段。



### 6. 遇到Codex报503错误码怎么办？

检查下你使用的模型是否为gpt-5.4或更高的模型，太老的模型能力跟不上不在支持范围内，一般在Codex聊天框的右下角切换下模型即可，也可以重新执行一遍一键配置脚本把模型更新到最新。



### 7. 怎么更新 Codex？

可从<a href="https://pan.quark.cn/s/4c758e82b7c4?pwd=1D4Z" target="_blank" rel="noopener noreferrer">夸克网盘</a>或<a href="https://pan.baidu.com/s/17vRnYubic2zE_ueq0djXPQ?pwd=9594" target="_blank" rel="noopener noreferrer">百度网盘</a>下载最新版安装包，我会一直更新。macOS 双击安装包即可更新；Windows 把安装包放在“01 一键配置 Codex - Windows.cmd”旁边，然后执行一次一键配置即可更新。



## 七、Codex 官方页面

Codex 官方页面：

<a href="https://openai.com/codex/" target="_blank" rel="noopener noreferrer">Codex 官方页面</a>



Codex 入门指南：

<a href="https://openai.com/codex/get-started/" target="_blank" rel="noopener noreferrer">Codex 入门指南</a>



Codex 应用介绍：

<a href="https://openai.com/index/introducing-the-codex-app/" target="_blank" rel="noopener noreferrer">Codex 应用介绍</a>



Windows 官方安装入口：

<a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi" target="_blank" rel="noopener noreferrer">Windows 官方安装入口</a>



## 八、没有合适的模型？

可以尝试我们的服务，正规订阅账户，用不完来分享，生图、写代码都可以

官网地址 <a href="https://1token-store.com" target="_blank" rel="noopener noreferrer">TokenToken</a>

建议收藏本站，后续遇到安装、配置、网络或使用问题，可以联系qq 690023772、wx shenchong999





## 九、安全提醒

1. 不要把 OPENAI_API_KEY 发给陌生人。

2. 不要把 auth.json 截图发到公开群聊或社交平台。

3. 如果怀疑 API 秘钥泄露，请及时到控制台重新生成秘钥。



## 十、其他操作

1. 如果 Windows 版 Codex 界面显示英文，可以参考 <a href="/guide/codex-windows-chinesization" target="_blank" rel="noopener noreferrer">Codex Windows 汉化</a> 处理。

2. 如果使用的是国产模型如deepseek，配置方式选择"2 自定义模型"后按回车，然后解压"CC-Switch-v3.16.1-Windows-Portable.zip"运行，点击软件右上角的 ➕即可添加各种模型，如图1所示。注意，使用前需要开启本地路由开关，如图二操作即可开启。

    |<a href="/images/codex/codex-05-5e1b7459.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-05-5e1b7459.webp" alt="Image"></a><br>    |<a href="/images/codex/codex-06-aa3289d5.webp" target="_blank" rel="noopener noreferrer"><img src="/images/codex/codex-06-aa3289d5.webp" alt="Image"></a><br>    |
    |---|---|
