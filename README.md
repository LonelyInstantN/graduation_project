# I18n Translator(暂定)

中文 | [English](./README_EN.md)

> 我的毕业设计，一个基于Electron的简单易用的i18n文件编辑、生成工具。

这是一个用于快速翻译i18n文件(json)的工具。适用于使用json作为语言文件的各种框架，同样也适用于游戏翻译等工作。不需要专业开发技能，专注快速翻译流程。提供单词表以确保翻译一致性，提供微软在线翻译api快速翻译文本。

## 介绍

![image](https://github.com/LonelyInstantN/graduation_project/blob/main/img/discription.png)




## 背景
翻译i18n文件时，同步两个文件的词条和确保翻译一致性是很烦人的，用文本编辑器等软件翻译时词条堆在一起，非常容易看错，而且同样的单词如何确保前后翻译一直也是一个问题，市面上有专门面向翻译的软件，但或多或少都不符合我的需求：

- 使用简单、开箱即用不需要复杂设置
- 开源免费
- 专注翻译工作，不需要专业人开发技能，对纯翻译人员友好
- 敏捷

于是我就决定自己做一个

## 依赖
这个仓库基于 `element-plus-starter`，我从这里建立了自己的模板，然后进行开发，主要技术栈是`Vue`+`Electron`+`ElementUI`

### 其他:
- custom-electron-titlebar (原仓库有问题，不支持Electron V14+)
- splitpanes@next
- ...

## 使用

run 
```
yarn install
```
or
```
npm insatll
```

and 
```
yarn run electron:serve
```
or
```
npm run electron:serve
```

## 展望

这个项目不会止步于毕业设计，我计划一直维护下去，目前仅仅实现了设想的基础功能，还有很多我认为应该实现的便捷功能没有实现，以后的计划包括但不仅限于：

- UI框架迁移，我认为ElementUI不够适合构建桌面软件，目前看中NativeUI
- 用户设置
- JSON文件格式检测、提示、标准化
- 更多的翻译API，以及词典API协助单词本翻译
- 可点击的翻译建议，快速采用已有翻译
- 翻译进度可视化
- 迁移至纯TS
- 功能内部实现优化、解耦
- 想一个好名字
- ....

后续应该会迁移至新仓库，希望这能成为一个有意义的、能给他人方便的软件
