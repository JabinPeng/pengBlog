---
title: Number处理
date: 2020-02-12
tags:
 - JS
categories: 
 - 前端小笔记
---

## 数字千分位分割
```js
function commafy(num) {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
```

## 生成随机数
```js
function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10)
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10)
    default:
      return 0
  }
}
```
