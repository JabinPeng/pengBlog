---
title: DOM操作
date: 2021-01-12
---

# 文档对象 DOM


## 固定滚动条
```js
/**
 * 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案
 */

let scrollTop = 0;

function preventScroll() {
  // 存储当前滚动位置
  scrollTop = window.scrollY;

  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了
  document.body.style["overflow-y"] = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = -scrollTop + "px";
  // document.body.style['overscroll-behavior'] = 'none'
}

function recoverScroll() {
  document.body.style["overflow-y"] = "auto";
  document.body.style.position = "static";
  // document.querySelector('body').style['overscroll-behavior'] = 'none'

  window.scrollTo(0, scrollTop);
}
```


## 判断当前位置是否为页面底部
- 返回值为true/false

```js
function bottomVisible() {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}
```

## 判断元素是否在可视范围内

- partiallyVisible为是否为完全可见

```js
function elementIsVisibleInViewport(el, partiallyVisible = false) {
  const {top, left, bottom, right} = el.getBoundingClientRect()

  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}
```


## 获取元素css样式

```js
function getStyle(el, ruleName) {
  return getComputedStyle(el, null).getPropertyValue(ruleName)
}
```


## 进入全屏

```js
function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}

launchFullscreen(document.documentElement)
launchFullscreen(document.getElementById("id")) //某个元素进入全屏
```


## 退出全屏

```js
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

exitFullscreen()
```


## 全屏事件

```js
document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenElement) {
    console.log('进入全屏')
  } else {
    console.log('退出全屏')
  }
})
```
