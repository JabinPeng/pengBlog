---
title: 全局API
date: 2021-03-11
---

## Vue2

```js
Vue.component('button-counter',{
                                 data: () => ({
                                   count: 0
                                 }),
                                 template: '<button @click="count++">Clicked {{ count }} times.</button>'
                               })


Vue.directive('focus', {
                inserted: el => el.focus()
              })

Vue.mixin({
  /* ... */
})
import { createLocalVue, mount } from '@vue/test-utils'
// 挂载mount
// 建扩展的 `Vue` 构造函数
const localVue = createLocalVue()

// 在 “local” Vue构造函数上 “全局” 安装插件
localVue.use(MyPlugin)

// 通过 `localVue` 来挂载选项
mount(Component, { localVue })
```


## Vue3

```js
import { createApp } from 'vue'

const app = createApp({})
app.mount('#app')

app.component('button-counter', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})

app.directive('focus', {
  mounted: el => el.focus()
})

// 现在所有应用实例都挂载了，与其组件树一起，将具有相同的 “button-counter” 组件 和 “focus” 指令不污染全局环境

```
### 提供/注入 (Provide / Inject)

```js
// 在入口
app.provide('guide', 'Vue 3 Guide')

// 在子组件
export default {
  inject: {
    book: {
      from: 'guide'
    }
  },
  template: `<div>{{ book }}</div>`
}
```

### 工厂

```js
import { createApp } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const createMyApp = options => {
  const app = createApp(options)
  app.directive('focus' /* ... */)

  return app
}

createMyApp(Foo).mount('#foo')
createMyApp(Bar).mount('#bar')
```

### nextTick 
```js
// vue2
import Vue from 'vue'

Vue.nextTick(() => {
  // 一些和DOM有关的东西
})

//vue3
import { nextTick } from 'vue'

nextTick(() => {
  // 一些和DOM有关的东西
})

```

### v-if v-else v-else-if
Vue 2.x 建议在 v-if/v-else/v-else-if 的分支中使用 key。

```html
<!-- Vue 2.x -->
<div v-if="condition" key="yes">Yes</div>
<div v-else key="no">No</div>
```


Vue 3.x中不添加key，也会自动生成唯一值key
```html
<!-- Vue 3.x -->
<div v-if="condition">Yes</div>
<div v-else>No</div>
```

### < template v-for >

在 Vue 2.x 中 < template > 标签不能拥有 key。不过你可以为其每个子节点分别设置 key。

```html
<!-- Vue 2.x -->
<template v-for="item in list">
  <div :key="item.id">...</div>
  <span :key="item.id">...</span>
</template>
```

在 Vue 3.x 中 key 则应该被设置在 < template > 标签上。


```html
<!-- Vue 3.x -->
<template v-for="item in list" :key="item.id">
  <div>...</div>
  <span>...</span>
</template>
```


### 按键修饰符
* 非兼容：不再支持使用数字 (即键码) 作为 v-on 修饰符
* 非兼容：不再支持 config.keyCodes

在 Vue 2 中，支持 keyCodes 作为修改 v-on 方法的方法。

```html
<!-- 键码版本 -->
<input v-on:keyup.13="submit" />

<!-- 别名版本 -->
<input v-on:keyup.enter="submit" />
```

此外，你可以通过全局 config.keyCodes 选项。
```js
Vue.config.keyCodes = {
  f1: 112
}
```
```html

<!-- 键码版本 -->
<input v-on:keyup.112="showHelpText" />

<!-- 自定别名版本 -->
<input v-on:keyup.f1="showHelpText" />
```


vue3中建议对任何要用作修饰符的键使用 kebab-cased (短横线) 大小写名称

```html
<!-- Vue 3 在 v-on 上使用 按键修饰符 -->
<input v-on:keyup.delete="confirmDelete" />
```

::: danger 注意
config.keyCodes 弃用
:::

### 在 prop 的默认函数中访问 this

生成 prop 默认值的工厂函数不再能访问 this。

替代方案：

* 把组件接收到的原始 prop 作为参数传递给默认函数；

* 注入 API 可以在默认函数中使用。
```js
import { inject } from 'vue'

export default {
  props: {
    theme: {
      default (props) {
        // `props` 是传递给组件的原始值。
        // 在任何类型/默认强制转换之前
        // 也可以使用 `inject` 来访问注入的 property
        return inject('theme', 'default-theme')
      }
    }
  }
}
```
