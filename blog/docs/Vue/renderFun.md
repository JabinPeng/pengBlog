---
title: 渲染函数
date: 2021-03-11
---


在 2.x 中，render 函数自动接收诸如 h 之类的参数。

```js
// Vue 2 渲染函数示例
export default {
  render(h) {
    return h('div')
  }
}
```

在 3.x 中，h函数是全局导入的，不是作为参数传递，由于 render 函数不再接收任何参数，它将主要用于 setup() 函数内部。这还有一个好处：可以访问作用域中声明的响应式状态和函数，以及传递给 setup() 的参数。

```js
import { h, reactive } from 'vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    // 返回render函数
    return () =>
      h(
        'div',
        {
          onClick: increment
        },
        state.count
      )
  }
}
```

### 渲染函数参数Props 

在2.x中
```js
// 2.x
{
  class: ['button', 'is-outlined'],
  style: { color: '#34495E' },
  attrs: { id: 'submit' },
  domProps: { innerHTML: '' },
  on: { click: submitForm },
  key: 'submit-button'
}
```


在3.x中
```js
// 3.x 语法
{
  class: ['button', 'is-outlined'],
  style: { color: '#34495E' },
  id: 'submit',
  innerHTML: '',
  onClick: submitForm,
  key: 'submit-button'
}
```
