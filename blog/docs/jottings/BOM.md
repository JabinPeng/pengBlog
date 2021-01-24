---
title: BOM对象
date: 2021-01-20
---


# 浏览器对象 BOM

## 判读浏览器是否支持 CSS 属性

```js
/**
 * 告知浏览器支持的指定css属性情况
 * @param {String} key - css属性，是属性的名字，不需要加前缀
 * @returns {String} - 支持的属性情况
 */
function validateCssKey(key) {
  const jsKey = toCamelCase(key); // 有些css属性是连字符号形成
  if (jsKey in document.documentElement.style) {
    return key;
  }
  let validKey = '';
  // 属性名为前缀在js中的形式，属性值是前缀在css中的形式
  // 经尝试，Webkit 也可是首字母小写 webkit
  const prefixMap = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-'
  };
  for (const jsPrefix in prefixMap) {
    const styleKey = toCamelCase(`${jsPrefix}-${jsKey}`);
    if (styleKey in document.documentElement.style) {
      validKey = prefixMap[jsPrefix] + key;
      break;
    }
  }
  return validKey;
}

/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 */
function toCamelCase(value) {
  return value.replace(/-(\w)/g, (matched, letter) => {
    return letter.toUpperCase();
  });
}


/**
 * 检查浏览器是否支持某个css属性值（es6版）
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue (key, value) {
  const prefix = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
  const prefixValue = prefix.map(item => {
    return item + value;
  });
  const element = document.createElement('div');
  const eleStyle = element.style;
  // 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况
  // 这就是最好在prefix里的最后一个元素是''
  prefixValue.forEach(item => {
    eleStyle[key] = item;
  });
  return eleStyle[key];
}

/**
 * 检查浏览器是否支持某个css属性值
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue (key, value) {
  var prefix = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
  var prefixValue = [];
  for (var i = 0; i < prefix.length; i++) {
    prefixValue.push(prefix[i] + value)
  }
  var element = document.createElement('div');
  var eleStyle = element.style;
  for (var j = 0; j < prefixValue.length; j++) {
    eleStyle[key] = prefixValue[j];
  }
  return eleStyle[key];
}


function validCss (key, value) {
  const validCss = validateCssKey(key);
  if (validCss) {
    return validCss;
  }
  return valiateCssValue(key, value);
}
```

## 返回当前网页地址
```js
function currentURL() {
  return window.location.href
}
```

## 获取滚动条位置
```js
function getScrollPosition(el = window) {
  return {
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
  }
}
```

## 获取url中的参数
```js
function getURLParameters(url) {
  return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  )
}
```
## 页面跳转，是否记录在history中
```js
function redirect(url, asLink = true) {
  asLink ? window.location.href = url : window.location.replace(url)
}

```

## 滚动条滚动到指定位置

```js
// 解决平滑滚动存在兼容性问题
export default (
  yORxy: number | { x: number; y: number },
  params?: {
    smooth: boolean;
    callBack: null | Function;
    averageStep: number;
  }
) => {
  let xy = { x: 0, y: 0 };
  const { smooth, callback, averageStep } = Object.assign(
    {
      smooth: true,
      callback: null,
      averageStep: 50
    },
    params
  );
  const isSmooth = smooth === undefined ? true : smooth;
  if (typeof yORxy === "number") {
    xy.y = yORxy;
  } else {
    xy = Object.assign(xy, yORxy);
  }

  if (!isSmooth) {
    window.scrollTo(xy.x, xy.y);
    return callback && callback();
  }

  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollLeft =
    document.documentElement.scrollLeft || document.body.scrollLeft;

  const scrollFn = () => {
    if (scrollLeft === xy.x && scrollTop === xy.y) {
      return callback && callback();
    }

    scrollTop =
      scrollTop - averageStep <= xy.y ? xy.y : scrollTop - averageStep;
    scrollLeft =
      scrollLeft - averageStep <= xy.x ? xy.x : scrollLeft - averageStep;
    window.scrollTo(scrollLeft, scrollTop);
    requestAnimationFrame(scrollFn);
  };

  scrollFn();
};
```

## 复制文本

```js
function copy(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.top = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}
```

## 检测设备类型
```js
function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}
```
