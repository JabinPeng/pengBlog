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
 第一个参数为context（这个参数我会专门有篇文章进行介绍的），官网的介绍也说了，这个生命周期是在服务器端或路由更新之前会被调用，一般是作为服务端渲染使用，可以利用这个生命周期函数返回数据给当前组件，记得要return哟。
 
> 当然在服务端，这个生命周期是没有办法取到this对象，也没有办法取到实例的属性和方法的
