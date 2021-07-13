---
title: Context
date: 2021-07-08
---

这个参数简单点说，就是一个全局的Nuxt对象，也可以把这个理解为一个VUE的bus对象，中转站一样的东西。利用好这个对象，相信我，你在项目的可以如鱼得水，起飞，这个也是你在项目中最常用的一个对象。context有点像VUE3中的 ComponentsAPI,不太明白滴可以点击下方链接去瞅瞅。

> ComponentsAPI : https://v3.cn.vuejs.org/api/composition-api.html#setup

这个家伙里面包含的东西就很多了：

先上个官网地址， 我这里就简单的说几个常用的
> https://www.nuxtjs.cn/api/context
1. app 这个是一个根实例的Vue对象，你可以挂载各种各种的全局的API，比如：axios 、cookie等等。只有你想不到，没有他挂不到的，嗯哼。
使用方法也是灰常的简单, 这里就简单的例子，当然他可以在很多地方使用
```javascript
  export default ({app}) => {
      // app.******
 }
```
2. route  这个就是vue的route对象，和vue的使用方式也是一样的
```javascript
  export default ({app, route}) => {
      // app.******
 }
```

3. params/query  这个就是vue的route对象中参数，相信大家应该也明白
params 是路由后面的 /:id 参数
route 是路由后面的 ?id=  参数
```javascript
  export default ({app, route, params, query}) => {
      // app.******
 }
```

4. store 这个是vuex的对象（这里强烈建议大家使用Nuxt的vuex写法，想自己改造其实也可以，但是可能会出现bug和警告，还有很多局限性，这里我讲一个我之前遇到的一个坑，这样大家应该会好理解一些）
我在项目中需要使用国际化，一开始没仔细看Nuxt的文档，所以就按照Vue的写法自己写了一个vuex，自己写的vuex对象，得按照函数的方式导出，在很多外部js引用的时候出现了很多诡异的bug，想想都头大，因为这个项目架子不是我搭建的，我也是中间进场的，蜀道难。。。 所以这里大家最好使用Nuxt的推荐用法，避免踩坑。
```javascript
 export const state = () => ({
   counter: 0
 })
 
 export const mutations = {
   increment(state) {
     state.counter++
   }
 }
```
如果大家需要使用模块功能，这里Nuxt的作者们也为大家想好了
你只需要在store目录建一个模块名称的js，比如：todolist模块   我就建一个todolist.js
然后导出一下就可以了 这里Nuxt会给你编译成VUEX中的modules的代码，如果了解更多可以去官网看看
> https://www.nuxtjs.cn/guide/vuex-store
```javascript
export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
```
使用方法：
```javascript
export default ({app, route, params, query, store}) => {
    // store.***
    // store.todolist.***
}
```


5. redirect 这个api可以理解为路由跳转工具 
使用方法：
```javascript
export default ({app, route, params, query, store, redirect}) => {
    // redirect([status,] path [, query])
    redirect('/')
 }
```

还没写完 今天先写到这~