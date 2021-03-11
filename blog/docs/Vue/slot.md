---
title: slot统一
date: 2021-03-11
---

此更改统一了 3.x 中的普通 slot 和作用域 slot。

以下是变化的变更总结：

* this.$slots 现在将 slots 作为函数公开
* 非兼容：移除 this.$scopedSlots


## 2.x 语法

```js
// 2.x 语法
h(LayoutComponent, [
  h('div', { slot: 'header' }, this.header),
  h('div', { slot: 'content' }, this.content)
])
// 引用
// 2.x 语法
this.$scopedSlots.header
```

## 3.x 语法

```js
// 3.x Syntax
h(LayoutComponent, {}, {
  header: () => h('div', this.header),
  content: () => h('div', this.content)
})
```
当你需要以编程方式引用作用域 slot 时，它们现在被统一到 $slots 选项中。
```js
// 2.x 语法
this.$scopedSlots.header

// 3.x 语法
this.$slots.header
```
