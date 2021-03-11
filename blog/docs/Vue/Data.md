---
title: Data
date: 2021-03-11
---

* **非兼容**：data 组件选项声明不再接收纯 JavaScript object，而需要 function 声明。

当合并来自 mixin 或 extend 的多个 data 返回值时，现在是浅层次合并的而不是深层次合并的(只合并根级属性)。

## Vue2

```js
<!-- Object 声明 -->
<script>
  const app = new Vue({
    data: {
      apiKey: 'a1b2c3'
    }
  })
</script>

<!-- Function 声明 -->
<script>
  const app = new Vue({
    data() {
      return {
        apiKey: 'a1b2c3'
      }
    }
  })
</script>
```


## Vue3

```js
<script>
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        apiKey: 'a1b2c3'
      }
    }
  }).mount('#app')
</script>
```


## Mixin 合并行为变更
此外，当来自组件的 data() 及其 mixin 或 extends 基类被合并时，现在将浅层次执行合并：

```js
const Mixin = {
  data() {
    return {
      user: {
        name: 'Jack',
        id: 1
      }
    }
  }
}
const CompA = {
  mixins: [Mixin],
  data() {
    return {
      user: {
        id: 2
      }
    }
  }
}
```

::: details Vue2
```js
{
  user: {
    id: 2,
    name: 'Jack'
  }
}
```
:::


::: details Vue3
```js
{
  user: {
    id: 2
  }
}
```
:::
