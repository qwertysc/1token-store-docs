# 造物主的快乐

## 一、从照片到小朋友手中的快乐

GPT 6 可以帮你把现实中的物体照片整理成多视角参考图，再配合 Blender 建模和切片软件，制作成可以 3D 打印的实体模型。下图展示了从滑梯照片到小朋友拿到微缩成品的完整效果。

<div class="guide-image-row guide-image-row--three">
  <a href="/images/touch-my-photo/touch-my-photo-05.webp"><img src="/images/touch-my-photo/touch-my-photo-05.webp" alt="小朋友举起打印完成的大象滑梯微缩模型"></a>
  <a href="/images/touch-my-photo/touch-my-photo-04.webp"><img src="/images/touch-my-photo/touch-my-photo-04.webp" alt="打印完成的大象滑梯微缩模型与实景对照"></a>
  <a href="/images/touch-my-photo/touch-my-photo-06.webp"><img src="/images/touch-my-photo/touch-my-photo-06.webp" alt="用于建模的大象滑梯多视角参考照片"></a>
  <a href="/images/touch-my-photo/touch-my-photo-07.webp"><img src="/images/touch-my-photo/touch-my-photo-07.webp" alt="大象滑梯参考视图与 Blender 建模结果对照"></a>
  <a href="/images/touch-my-photo/touch-my-photo-08.webp"><img src="/images/touch-my-photo/touch-my-photo-08.webp" alt="大象滑梯模型在 Bambu Studio 中的切片预览"></a>
  <a href="/images/touch-my-photo/touch-my-photo-09.webp"><img src="/images/touch-my-photo/touch-my-photo-09.webp" alt="3D 打印机中已完成的大象滑梯模型"></a>
</div>

## 二、准备工作

请先安装 Codex 并完成基础配置：<a href="/guide/codex" target="_blank" rel="noopener noreferrer">Codex 安装与配置</a>。

## 三、操作步骤

1. 在 Codex 左侧的“项目”区域点击 `+`，输入项目名称，再点击“创建项目”。

   <div class="guide-image-row guide-image-row--two">
     <a href="/images/touch-my-photo/touch-my-photo-01.webp"><img src="/images/touch-my-photo/touch-my-photo-01.webp" alt="在 Codex 项目区域点击加号创建项目"></a>
     <a href="/images/touch-my-photo/touch-my-photo-02.webp"><img src="/images/touch-my-photo/touch-my-photo-02.webp" alt="输入 3D 打印照片项目名称并创建项目"></a>
   </div>

2. `touch-my-photo` 技能会分析一张或多张参考照片，并将多视角参考图、Blender 建模、模型检查和 Bambu Studio 切片整理成一套工作流。

   <a href="/images/touch-my-photo/touch-my-photo-03.webp"><img class="guide-image-compact" src="/images/touch-my-photo/touch-my-photo-03.webp" alt="Codex 对 touch-my-photo 技能的功能介绍"></a>

3. 在 Codex 中输入下面的指令安装技能。如果无法访问 GitHub，可让 Codex 尝试使用国内镜像源。

   ```text
   https://github.com/qwertysc/touch-my-photo，帮我安装这个技能，如无法访问 GitHub 可尝试国内镜像源。
   ```

4. 把需要处理的照片发给 Codex，再输入下面任意一条指令，即可触发技能并开始制作。

   ```text
   3D打印这组照片
   ```

   ```text
   根据这组照片制作手办
   ```
