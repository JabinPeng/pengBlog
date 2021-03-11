---
title: 片段
date: 2021-03-11
---


在 Vue 3 中，组件现在正式支持多根节点组件，即片段！


## Vue2
在2.0中 template中只能包装在一个div中

```html
<!-- Layout.vue -->
<template>
  <div>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </div>
</template>
```

## Vue3

在3.0中template可以包裹多个根节点

```html
<!-- Layout.vue -->
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```
