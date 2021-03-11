---
title: 异步组件
date: 2021-03-11
---


以下是对变化的高层次概述：

* 新的 defineAsyncComponent 助手方法，用于显式地定义异步组件
* component 选项重命名为 loader
* Loader 函数本身不再接收 resolve 和 reject 参数，且必须返回一个 Promise

# Vue2
异步组件通过返回promise对象方式创建
```js

const asyncPage = () => import('./NextPage.vue')
```

或者

```js
const asyncPage = {
  component: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
}
```


# Vue3
在 Vue 3 中，由于函数式组件被定义为纯函数，因此异步组件的定义需要通过将其包装在新的 defineAsyncComponent 助手方法中来显式地定义：

```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 不带选项的异步组件
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))

// 带选项的异步组件
const asyncPageWithOptions = defineAsyncComponent({
  loader: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

第一个变化就是**component** 替换成了 **loader**，此外，loader 函数不再接收 resolve 和 reject 参数，且必须始终返回 Promise。
