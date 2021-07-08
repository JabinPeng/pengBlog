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

因为官网解释的很简单，导致很多刚刚接触的小伙伴不是很明白这个生命周期的具体情况 这里我就简单的解释一下
