---
title: AsyncData
date: 2021-07-08
---

> Nuxt 异步请求数据生命周期 

# 基本用法

```javascript
 export default {
   data() {
     return { project: 'default' }
   },
   asyncData(context) {
     return { project: 'nuxt' }
   }
 }
```

这个API在项目中是最常用的API，服务端的请求都需要用到这个生命周期

## 第一个参数
 第一个参数为context，
