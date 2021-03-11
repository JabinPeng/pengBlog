---
title: v-is
date: 2021-03-11
---

Vue2.0 ，通过is 传递prop来解决
```html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

Vue3.0 ，引入了一个新的指令 v-is

```html
<table>
  <tr v-is="'blog-post-row'"></tr>
</table>
```

::: warning
注意错误写法：

```html
<!-- 不正确，不会渲染任何内容 -->
<tr v-is="blog-post-row"></tr>

<!-- 正确 -->
<tr v-is="'blog-post-row'"></tr>
```
:::
