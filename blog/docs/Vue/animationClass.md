---
title: 过渡class变化
date: 2021-03-11
---


## 2.x 语法
```css
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-leave,
.v-enter-to {
  opacity: 1;
}
```



## 3.x 语法
在3.x中语义化会更加清晰
```css
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
```

< transition > 组件相关属性名也发生了变化：
* leave-class 已经被重命名为 leave-from-class (在渲染函数或 JSX 中可以写为：leaveFromClass)
* enter-class 已经被重命名为 enter-from-class (在渲染函数或 JSX 中可以写为：enterFromClass)
