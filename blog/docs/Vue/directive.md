---
title: directive 指令
date: 2021-03-11
---

* API 已重命名，以便更好地与组件生命周期保持一致
* 自定义指令将由子组件通过 v-bind="$attrs"


## Vue2

在 Vue 2，自定义指令是通过使用下面列出的钩子来创建的，这些钩子都是可选的

* bind - 指令绑定到元素后发生。只发生一次。
* inserted - 元素插入父 DOM 后发生。
* update - 当元素更新，但子元素尚未更新时，将调用此钩子。
* componentUpdated - 一旦组件和子级被更新，就会调用这个钩子。
* unbind - 一旦指令被移除，就会调用这个钩子。也只调用一次。

```html
<p v-highlight="yellow">高亮显示此文本亮黄色</p>
```

```js
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```

## Vue3

然而，在 Vue 3 中，我们为自定义指令创建了一个更具凝聚力的 API。正如你所看到的，它们与我们的组件生命周期方法有很大的不同，即使我们正与类似的事件钩子，我们现在把它们统一起来了：

* bind → beforeMount
* inserted → mounted
* beforeUpdate：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。
* update → 移除！有太多的相似之处要更新，所以这是多余的，请改用 updated。
* componentUpdated → updated
* beforeUnmount：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。
* unbind -> unmounted

```js
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // 新
  unmounted() {}
}
```

示例：
```html
<p v-highlight="yellow">高亮显示此文本亮黄色</p>
```

```js
const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```
