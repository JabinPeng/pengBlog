---
title: v-bind
date: 2021-03-11
---


* 变化：v-bind 的绑定顺序会影响渲染结果。

## 2.x 语法
 在2.x中v-bind绑定会对相同的bing属性，单独的 property 总是会覆盖 object 中的绑定
```html
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="red"></div>
```

## 3.x 语法
 在3.x中v-bind如果一个元素同时定义了 v-bind="object" 和一个相同的单独的 property，那么声明绑定的顺序决定了它们如何合并。
```html
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="blue"></div>

<!-- template -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- result -->
<div id="red"></div>
```
