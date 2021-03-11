---
title: v-model
date: 2021-03-11
---

## Vue2. x
'v-model' 指令在表单 '< input >、< textarea > 及 < select >' 元素上创建双向数据绑定,但 v-model 本质是语法糖

```html
<input v-model="searchText" /> 这种写法等同于
<input :value="searchText" @input="searchText = $event.target.value" />
```

当然Vue 也提供了属性'model' 可以自定义属性不再限制于'value 和 input'

```js
export default {
  model: {
    prop: 'title',
    event: 'change'
  },
  props: {
    // 这将允许 `value` 属性用于其他用途
    value: String,
    // 使用 `title` 代替 `value` 作为 model 的 prop
    title: {
      type: String,
      default: 'Default title'
    }
  }
}
```


但是v-model 最大的问题只能作用一次及不会出现以下情况



## vue3. x
在 3.x 中，自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：
```html
<ChildComponent v-model="pageTitle" />

<!-- 简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```
若需要更改 model 名称，而不是更改组件内的 model 选项。这也可以作为 .sync 修饰符的替代，而且允许我们在自定义组件上使用多个 v-model。
```html
<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 简写： -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/>
```
