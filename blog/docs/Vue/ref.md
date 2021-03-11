---
title: Ref区别
date: 2021-03-11
---


在Vue 2中， 在v-for中使用ref ref数组填充对应的**$refs** property。当ref嵌套在v-for，会使效率变得低下。

在Vue 3中，这样用不会再**$ref**中自动创建数组。要从单个绑定获取多个 ref，请将 ref 绑定到一个更灵活的函数上 (这是一个新特性)：

```html
<div v-for="item in list" :ref="setItemRef"></div>
```

结合选项式 API:
```js
export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
```
注意： 
* itemRefs 不必是数组：它也可以是一个对象，其 ref 会通过迭代的 key 被设置。
* 如果需要，itemRef 也可以是响应式的且可以被监听。

