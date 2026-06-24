# Codex使用教程

## 一、用途说明

#### 本工具包用于帮助用户完成 Codex 桌面端安装和基础配置，相关内容都在网盘中，免去网络困扰。

夸克网盘codex安装包+配置脚本链接：https://pan.quark.cn/s/4c758e82b7c4?pwd=1D4Z

提取码：1D4Z

百度网盘codex安装包+配置脚本链接，https://pan.baidu.com/s/17vRnYubic2zE_ueq0djXPQ?pwd=9594

提取码: 9594



【视频教程】

https://www.bilibili.com/video/BV1Kt7A6YEqA



【一对一指导】

太长不想看？没问题，欢迎私聊一对一指导：

QQ 690023772

WX shenchong999



#### 它会自动处理：

1. 将 config.toml 中的推荐配置合并到 Codex 配置文件。

2. 配置 auth.json 中的 OPENAI_API_KEY。

3. 清理 auth.json 中 OPENAI_API_KEY 以外的字段。

4. 自动备份原有配置文件，避免误操作导致配置丢失。

    

本工具不会读取或上传你的 API 秘钥。API 秘钥只会写入你自己电脑上的 Codex 配置目录。





## 二、使用前准备

#### 请先准备好：

1. 一台 macOS 或 Windows 电脑。

2. 避免执行失败，建议完整下载网盘文件夹内容。

3. 在官网[TokenToken](https://1token-store.com) 申请 API密钥（OPENAI_API_KEY）。网站使用文档：[TokenToken使用文档](/guide/token-token)

    

获取 API 密钥后，请复制完整内容，通常以 sk- 开头。





## 三、macOS 操作步骤

1. 打开本文件夹。

2. 双击 "Codex-MacOS安装包.dmg"，按提示安装 Codex。

3. 安装完成后，回到本文件夹。

4. 双击 02 一键配置 Codex - macOS.command。

5. 如果弹窗提示无法打开或执行失败，请打开系统设置，进入“隐私与安全性”，滑到页面最下面，临时允许该脚本执行，然后回到本文件夹重新双击 02 一键配置 Codex - macOS.command。

|[![Image](/images/codex/codex-01-84fef160.webp)](/images/codex/codex-01-84fef160.webp)<br>|[![Image](/images/codex/codex-02-c18d4169.webp)](/images/codex/codex-02-c18d4169.webp)<br>|
|---|---|

6. 终端窗口出现提示后，粘贴 OPENAI_API_KEY。

7. 粘贴时屏幕上不会显示内容，这是正常现象。

8. 粘贴后按回车。

9. 看到“完成。请重新打开 Codex，让新配置生效。”后，重新打开 Codex。

    

    

## 四、Windows 操作步骤

1. 打开本文件夹。

2. 双击 "01 一键配置 Codex - Windows.cmd"，运行界面如图。

    1. 脚本会先检查是否已安装 Codex；如果未安装且当前目录有 "Codex-Windows安装包.Msix" 或 "App Installer.msixbundle"，请按提示选择是否现在安装。

    2. 如果自动安装失败，请手动双击 "Codex-Windows安装包.Msix" 安装；若双击不能安装，请先双击安装 "App Installer.msixbundle"，完成后再尝试安装 "Codex-Windows安装包.Msix"。

    3. 如果上述两个Codex安装尝试都失败，可以改 "Codex-Windows安装包.Msix"文件后缀Msix为zip，让其变成一个压缩包，然后解压文件，解压过程比较慢，解压完毕后可能会触发杀毒软件扫描而卡住，都是正常现象，然后在解压出的文件夹中找到app文件夹，双击其中的Codex.exe即可运行。

[![Image](/images/codex/codex-03-d9b22ee5.webp)](/images/codex/codex-03-d9b22ee5.webp)

3. 如果使用我的中转服务，共享ChatGPT订阅账号额度跟Codex更适配，输入1，按回车。

[![Image](/images/codex/codex-04-7eeab7d2.webp)](/images/codex/codex-04-7eeab7d2.webp)

4. 粘贴从[TokenToken使用文档](/guide/token-token) 申请的API密钥，按回车。粘贴时屏幕上不会显示内容，这是正常现象。

5. 看到“完成。请重新打开 Codex，让新配置生效。”后，重新打开 Codex即可使用。

6. 如果使用的是国产模型如deepseek，配置方式选择"2 自定义模型"后按回车，然后解压"CC-Switch-v3.16.1-Windows-Portable.zip"运行，点击软件右上角的 ➕即可添加各种模型，如图1所示。注意，使用前需要开启本地路由开关，如图二操作即可开启。

    |[![Image](/images/codex/codex-05-5e1b7459.webp)](/images/codex/codex-05-5e1b7459.webp)<br>    |[![Image](/images/codex/codex-06-aa3289d5.webp)](/images/codex/codex-06-aa3289d5.webp)<br>    |
    |---|---|





## 五、配置文件位置

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

1. 粘贴 API 秘钥时没有显示内容，是否正常？

正常。为了保护秘钥，输入时不会显示字符。粘贴后直接按回车即可。



2. 脚本提示配置完成后还需要做什么？

请关闭并重新打开 Codex，让新配置生效。



3. 旧的 auth.json 里其他字段会保留吗？

不会。配置脚本会清理 auth.json，只保留 OPENAI_API_KEY 字段。



4. 配置失败怎么办？

请截图保存错误提示，并把同目录或 .codex 目录中生成的 .bak 备份文件保留好，方便排查。



5. 是否可以重复执行配置脚本？

可以。重复执行不会重复添加 config.toml 字段。已有 API 秘钥时，直接按回车会保留原 OPENAI_API_KEY，并清理 auth.json 中其他字段。



6. 遇到Codex报503错误码怎么办？

检查下你使用的模型是否为gpt-5.4或更高的模型，太老的模型能力跟不上不在支持范围内，一般在Codex聊天框的右下角切换下模型即可，也可以重新执行一遍一键配置脚本把模型更新到最新。



## 七、Codex 官方页面

Codex 官方页面：

https://openai.com/codex/



Codex 入门指南：

https://openai.com/codex/get-started/



Codex 应用介绍：

https://openai.com/index/introducing-the-codex-app/



Windows 官方安装入口：

https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi



## 八、没有合适的模型？

可以尝试我们的服务，正规订阅账户，用不完来分享，生图、写代码都可以

官网地址 [TokenToken](https://1token-store.com)

建议收藏本站，后续遇到安装、配置、网络或使用问题，可以联系qq 690023772、wx shenchong999





## 九、安全提醒

1. 不要把 OPENAI_API_KEY 发给陌生人。

2. 不要把 auth.json 截图发到公开群聊或社交平台。

3. 如果怀疑 API 秘钥泄露，请及时到控制台重新生成秘钥。



