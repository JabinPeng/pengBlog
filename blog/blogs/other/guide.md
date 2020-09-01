---
title: Peng blog
date: 2019-04-09
---

![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip 介绍
:::

## Use

**Build**

```bash
npm run build

# or

yarn build
```

**Server**

```bash
npm run dev

# or

yarn dev
```

## Play Together

### 0.x

`vuepress-theme-reco@0.x` 是基于 `vuepress@0.x` 的博客主题。

`vuepress@0.x` 功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下，`vuepress-theme-reco@0.x` 的第一个版本经过一个通宵而产生。

主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。

因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 **简洁** 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。

### 1.x

随着不断有用户过来询问：为什么 `vuepress-theme-reco@0.x` 不能在 `vuepress@1.x` 上使用？本来只是打算对 `vuepress-theme-reco@0.x` 进行简单的bug修复的我，终究还是忍不住，开始了 `vuepress-theme-reco@1.x` 的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开始了。

主题升级的关键也就是 `@vuepress/plugin-blog` 这款官方插件，它不需要再去麻烦地过滤数据，将分类和标签的相关信息直接存在 `$categories` 和 `$tags` 这两个全局变量中。借助于 `@vuepress/plugin-blog`，分类和标签功能更容易实现，但也有了一些局限。接下来两三天的时间，都是在进行功能的迁移和一些bug的修复。

`vuepress-theme-reco@0.x` 的开发中，更加深刻地明白了模块化和组件化编程的重要性，如果当初没有把一些功能进行封装，而是直接简单的复制，这次升级也不会这么顺利。模块拆分的越细，使用就会越灵活。

### CLI

还是衷心地希望能有更多的朋友参与进来，更快地去完善它。接下来时间允许的情况下，我会开源一款自动生成博客的脚手架，略过配置步骤，直接书写优质内容，这也是我后来逐渐形成的一种信念，就是希望能让这款主题，功能越完善，使用越来越简单。

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)