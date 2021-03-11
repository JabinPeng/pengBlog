---
title: 移动端踩坑指南
date: 2021-01-28
---




*  提及的安卓系统包括Android和基于Android开发的系统
*  提及的苹果系统包括iOS和iPadOS
*  本文针对的开发场景是移动端浏览器，因此大部分坑位的解决方案在桌面端浏览器里不一定有效
*  解决方案若未提及适用系统就默认在安卓系统和苹果系统上都适用，若提及适用系统则会详细说明
*  Webkit及其衍生内核在移动端浏览器市场占有率里达到惊人的97%，因此无需太过担心CSS3、ES6和浏览器新特性的兼容性
*  真正的开发环境都是基于webpack构建，因此代码演示都不会带上CSS前缀，除非该属性是Webkit独有才会带上-webkit-

## HTML方向

### 调用系统功能
使用a能快速调用移动设备的电话/短信/邮件三大通讯功能，使用input能快速调用移动设备的的图库/文件。

这些功能方便了页面与系统的交互，关键在于调用格式一定要准确，否则会被移动端浏览器忽略。

```html
<!-- 拨打电话 -->
<a href="tel:10086">拨打电话给10086小姐姐</a>

<!-- 发送短信 -->
<a href="sms:10086">发送短信给10086小姐姐</a>

<!-- 发送邮件 -->
<a href="mailto:young.joway@aliyun.com">发送邮件给JowayYoung</a>

<!-- 选择照片或拍摄照片 -->
<input type="file" accept="image/*">

<!-- 选择视频或拍摄视频 -->
<input type="file" accept="video/*">

<!-- 多选文件 -->
<input type="file" multiple>
```

### 忽略自动识别
有些移动端浏览器会自动将数字字母符号识别为电话/邮箱并将其渲染成上述「调用系统功能」里的a。虽然很方便却有可能违背需求。

```html
<!-- 忽略自动识别电话 -->
<meta name="format-detection" content="telephone=no">

<!-- 忽略自动识别邮箱 -->
<meta name="format-detection" content="email=no">

<!-- 忽略自动识别电话和邮箱 -->
<meta name="format-detection" content="telephone=no, email=no">
```


### 弹出数字键盘

使用<input type="tel">弹起数字键盘会带上#和*，适合输入电话。推荐使用<input type="number" pattern="\d*">弹起数字键盘，适合输入验证码等纯数字格式。

```html
<!-- 纯数字带#和* -->
<input type="tel">

<!-- 纯数字 -->
<input type="number" pattern="\d*">
```



### 唤醒原生应用

通过location.href与原生应用建立通讯渠道，这种页面与客户端的通讯方式称为「URL Scheme」，其基本格式为scheme://[path][?query]，笔者曾经发表过《H5与App的通讯方式》讲述URL Scheme的使用。

* 「scheme」：应用标识，表示应用在系统里的唯一标识
* 「path」：应用行为，表示应用某个页面或功能
* 「query」：应用参数，表示应用页面或应用功能所需的条件参数

URL Scheme一般由前端与客户端共同协商。唤醒原生应用的前提是必须在移动设备里安装了该应用，有些移动端浏览器即使安装了该应用也无法唤醒原生应用，因为它认为URL Scheme是一种潜在的危险行为而禁用它，像Safari和微信浏览器。还好微信浏览器可开启白名单让URL Scheme有效。

若在页面引用第三方原生应用的URL Schema，可通过抓包第三方原生应用获取其URL。

```html
<!-- 打开微信 -->
<a href="weixin://">打开微信</a>

<!-- 打开支付宝 -->
<a href="alipays://">打开支付宝</a>

<!-- 打开支付宝的扫一扫 -->
<a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫</a>

<!-- 打开支付宝的蚂蚁森林 -->
<a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>
```


### 禁止页面缩放

在智能手机的普及下，很多网站都具备桌面端和移动端两种浏览版本，因此无需双击缩放查看页面。禁止页面缩放可保障移动端浏览器能无遗漏地展现页面所有布局。

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

### 禁止页面缓存

「Cache-Control」指定请求和响应遵循的缓存机制，不想使用浏览器缓存就禁止呗！

```html
<meta http-equiv="Cache-Control" content="no-cache">
```


### 禁止字母大写

有时在输入框里输入文本会默认开启首字母大写纠正，就是输入首字母小写会被自动纠正成大写，特么的烦。直接声明autocapitalize=off关闭首字母大写功能和autocorrect=off关闭纠正功能。

```html
<input autocapitalize="off" autocorrect="off">
```

### 针对Safari配置

贴一些Safari较零散且少用的配置。


```html
<!-- 设置Safari全屏，在iOS7+无效 -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 改变Safari状态栏样式，可选default/black/black-translucent，需在上述全屏模式下才有效 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- 添加页面启动占位图 -->
<link rel="apple-touch-startup-image" href="pig.jpg" media="(device-width: 375px)">

<!-- 保存网站到桌面时添加图标 -->
<link rel="apple-touch-icon" sizes="76x76" href="pig.jpg">

<!-- 保存网站到桌面时添加图标且清除默认光泽 -->
<link rel="apple-touch-icon-precomposed" href="pig.jpg">
```

### 针对其他浏览器配置

贴一些其他浏览器较零散且少用的配置，主要是常用的QQ浏览器、UC浏览器和360浏览器。从网易MTL的测试数据得知，新版的QQ浏览器和UC浏览器已不支持以下meta声明了。


```html
<!-- 强制QQ浏览器竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- 强制QQ浏览器全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- 开启QQ浏览器应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- 强制UC浏览器竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- 强制UC浏览器全屏 -->
<meta name="full-screen" content="yes">

<!-- 开启UC浏览器应用模式 -->
<meta name="browsermode" content="application">

<!-- 开启360浏览器极速模式 -->
<meta name="renderer" content="webkit">
```


### 让:active有效，让:hover无效

有些元素的:active可能会无效，而元素的:hover在点击后会一直处于点击状态，需点击其他位置才能解除点击状态。给body注册一个空的touchstart事件可将两种状态反转。

```html
<body ontouchstart></body>
```


## CSS方向

### 自动适应布局

针对移动端，笔者通常会结合JS依据屏幕宽度与设计图宽度的比例动态声明html的font-size，以rem为长度单位声明所有节点的几何属性，这样就能做到大部分移动设备的页面兼容，兼容出入较大的地方再通过媒体查询做特别处理。

笔者通常将rem布局比例设置成1rem=100px，即在设计图上100px长度在CSS代码上使用1rem表示。


```js
function AutoResponse(width = 750) {
    const target = document.documentElement;
    if (target.clientWidth >= 600) {
        target.style.fontSize = "80px";
    } else {
        target.style.fontSize = target.clientWidth / width * 100 + "px";
    }
}
AutoResponse();
window.addEventListener("resize", () => AutoResponse());
```

当然还可依据屏幕宽度与设计图宽度的比例使用calc()动态声明html的font-size，这样就能节省上述代码。不对，是完全代替上述代码。

```css
html {
    font-size: calc(100vw / 7.5);
}
```

若以iPad Pro分辨率1024px为移动端和桌面端的断点，还可结合媒体查询做断点处理。1024px以下使用rem布局，否则不使用rem布局。


```css
@media screen and (max-width: 1024px) {
    html {
        font-size: calc(100vw / 7.5);
    }
}
```

### 自动适应背景

使用rem布局声明一个元素背景，多数情况会将background-size声明为cover。可能在设计图对应分辨率的移动设备下，背景会完美贴合显示，但换到其他分辨率的移动设备下就会出现左右空出1px到npx的空隙。



此时将background-size声明为100% 100%，跟随width和height的变化而变化。反正width和height都是量好的实际尺寸。



```css
.elem {
    width: 1rem;
    height: 1rem;
    background: url("pig.jpg") no-repeat center/100% 100%;
}
```

### 监听屏幕旋转

你还在使用JS判断横屏竖屏调整样式吗？那就真的Out了。


```css
/* 竖屏 */
@media all and (orientation: portrait) {
    /* 自定义样式 */
}
/* 横屏 */
@media all and (orientation: landscape) {
    /* 自定义样式 */
}
```

### 支持弹性滚动

在苹果系统上非body元素的滚动操作可能会存在卡顿，但安卓系统不会出现该情况。通过声明overflow-scrolling:touch调用系统原生滚动事件优化弹性滚动，增加页面滚动的流畅度。


```css
body {
    -webkit-overflow-scrolling: touch;
}
.elem {
    overflow: auto;
}
```

### 禁止滚动传播

与桌面端浏览器不一样，移动端浏览器有一个奇怪行为。当页面包含多个滚动区域时，滚完一个区域后若还存在滚动动量则会将这些剩余动量传播到下一个滚动区域，造成该区域也滚动起来。这种行为称为「滚动传播」。


若不想产生这种奇怪行为可直接禁止。


```css
.elem {
    overscroll-behavior: contain;
}
```

### 禁止屏幕抖动


对于一些突然出现滚动条的页面，可能会产生左右抖动的不良影响。在一个滚动容器里，打开弹窗就隐藏滚动条，关闭弹窗就显示滚动条，来回操作会让屏幕抖动起来。提前声明滚动容器的padding-right为滚动条宽度，就能有效消除这个不良影响。


每个移动端浏览器的滚动条宽度都有可能不一致，甚至不一定占位置，通过以下方式能间接计算出滚动条的宽度。100vw为视窗宽度，100%为滚动容器内容宽度，相减就是滚动条宽度，妥妥的动态计算。



```css
body {
    padding-right: calc(100vw - 100%);
}
```



### 禁止长按操作

有时不想用户长按元素呼出菜单进行点链接、打电话、发邮件、保存图片或扫描二维码等操作，声明touch-callout:none禁止用户长按操作。


有时不想用户复制粘贴盗文案，声明user-select:none禁止用户长按操作和选择复制。



```css
* {
    /* pointer-events: none; */ /* 微信浏览器还需附加该属性才有效 */
    user-select: none; /* 禁止长按选择文字 */
    -webkit-touch-callout: none;
}
```


但声明user-select:none会让input、textarea 无法输入文本， 可对其声明 user-select:none排除在外。

```css
input,
textarea {
    user-select: auto;
}
```


### 禁止字体调整

旋转屏幕可能会改变字体大小，声明text-size-adjust:100%让字体大小保持不变。


```css
* {
    text-size-adjust: 100%;
}
```


### 禁止高亮显示

触摸元素会出现半透明灰色遮罩，不想要！

```css
* {
    -webkit-tap-highlight-color: transparent;
}
```

### 禁止动画闪屏

在移动设备上添加动画，多数情况会出现闪屏，给动画元素的父元素构造一个3D环境就能让动画稳定运行了。


```css
.elem {
    perspective: 1000;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}
```

### 美化表单外观

表单元素样式太丑希望自定义，appearance:none来帮你。

```css
button,
input,
select,
textarea {
    appearance: none;
    /* 自定义样式 */
}
```

### 美化滚动占位

滚动条样式太丑希望自定义，::-webkit-scrollbar-*来帮你。记住以下三个关键词就能随机应变了。

* [x] 「::-webkit-scrollbar」：滚动条整体部分
* [x] 「::-webkit-scrollbar-track」：滚动条轨道部分
* [x] 「::-webkit-scrollbar-thumb」：滚动条滑块部分


```css
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-image: linear-gradient(135deg, #09f, #3c9);
}
```


### 美化输入占位

输入框占位文本太丑，::-webkit-input-placeholder来帮你。



```css
input::-webkit-input-placeholder {
    color: #66f;
}
```



### 对齐输入占位

有强迫症的同学总会觉得输入框文本位置整体偏上，感觉未居中心里就痒痒的。桌面端浏览器里声明line-height等于height就能解决，但移动端浏览器里还是未能解决，需将line-height声明为normal才行。


```css
input {
    line-height: normal;
}
```


### 对齐下拉选项


下拉框选项默认向左对齐，是时候改改向右对齐了。


```css
select option {
    direction: rtl;
}
```


### 修复点击无效


在苹果系统上有些情况下非可点击元素监听click事件可能会无效，针对该情况只需对不触发click事件的元素声明cursor:pointer就能解决。


```css
.elem {
    cursor: pointer;
}
```


### 识别文本换行

多数情况会使用JS换行文本，那就真的Out了。若接口返回字段包含\n或br，千万别替换掉，可声明white-space:pre-line交由浏览器做断行处理。

```css
* {
    white-space: pre-line;
}
```

### 开启硬件加速

想动画更流畅吗，开启GPU硬件加速呗！

```css
.elem {
    transform: translate3d(0, 0, 0);
    /* transform: translateZ(0); */
}
```


### 描绘像素边框

万年话题，如何描绘一像素边框？

```css
.elem {
    position: relative;
    width: 200px;
    height: 80px;
    &::after {
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #f66;
        width: 200%;
        height: 200%;
        content: "";
        transform: scale(.5);
        transform-origin: left top;
    }
}
```


### 控制溢出文本

万年话题，如何控制文本做单行溢出和多行溢出？


```css
.elem {
    width: 400px;
    line-height: 30px;
    font-size: 20px;
    &.sl-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &.ml-ellipsis {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}
```



## JS方向

### 禁止点击穿透


移动端浏览器里点击操作会存在300ms延迟，往往会造成点击延迟甚至点击无效，这个是众所周知的事情。

2007年苹果发布首款iPhone搭载的Safari为了将桌面端网站能较好地展示在移动端浏览器上而使用了双击缩放。该方案就是上述300ms延迟的主要原因，当用户执行第一次单击后会预留300ms检测用户是否继续执行单击，若是则执行缩放操作，若否则执行点击操作。鉴于该方案的成功，其他移动端浏览器也复制了该方案，现在几乎所有移动端浏览器都配备该功能。而该方案引发的点击延迟被称为「点击穿透」。


在前端领域里最早解决点击穿透是jQuery时代的zepto，估计现在大部分同学都未使用过zepto，其实它就是移动端版本的jquery。zepto封装tap事件能有效地解决点击穿透，通过监听document上的touch事件完成tap事件的模拟，并将tap事件冒泡到document上触发。


在移动端浏览器上不使用click事件而使用touch事件是因为click事件有着明显的延迟，后续又出现fastclick。该解决方案监听用户是否做了双击操作，可正常使用click事件，而点击穿透就交给fastclick自动判断。更多fastclick原理可自行百度，在此不作过多介绍。



fastclick有现成的NPM包，可直接安装到项目里。引入fastclick可使用click事件代替tap事件，接入方式极其简单。



```js
import Fastclick from "fastclick";

FastClick.attach(document.body);
```

### 禁止滑动穿透

移动端浏览器里出现弹窗时，若在屏幕上滑动能触发弹窗底下的内容跟着滚动，这个是众所周知的事情。


首先明确解决滑动穿透需保持哪些交互行为，那就是除了弹窗内容能点击或滚动，其他内容都不能点击或滚动。目前很多解决方案都无法做到这一点，全部解决方案都能禁止body的滚动行为却引发其他问题。



* 弹窗打开后内部内容无法滚动
* 弹窗关闭后页面滚动位置丢失
* Webview能上下滑动露出底色


当打开弹窗时给body声明position:fixed;left:0;width:100%并动态声明top。声明position:fixed会导致body滚动条消失，此时会发现虽然无滑动穿透，但页面滚动位置早已丢失。通过scrollingElement获取页面当前滚动条偏移量并将其取负值且赋值给top，那么在视觉上就无任何变化。当关闭弹窗时移除position:fixed;left:0;width:100%和动态top。


scrollingElement可兼容地获取scrollTop和scrollHeight等属性，在移动端浏览器里屡试不爽。document.scrollingElement.scrollHeight可完美代替曾经的document.documentElement.scrollHeight || document.body.scrollHeight，一眼看上去就是代码减少了。



该解决方案在视觉上无任何变化，完爆其他解决方案，其实就是一种反向思维和障眼法。该解决方案完美解决固定弹窗和滚动弹窗对body全局滚动的影响，当然也可用于局部滚动容器里，因此很值得推广。


```css
body.static {
    position: fixed;
    left: 0;
    width: 100%;
}
```

```js
const body = document.body;
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
openBtn.addEventListener("click", e => {
    e.stopPropagation();
    const scrollTop = document.scrollingElement.scrollTop;
    body.classList.add("static");
    body.style.top = `-${scrollTop}px`;
});
closeBtn.addEventListener("click", e => {
    e.stopPropagation();
    body.classList.remove("static");
    body.style.top = "";
});
```

### 支持往返刷新

点击移动端浏览器的前进按钮或后退按钮，有时不会自动执行旧页面的JS代码，这与往返缓存有关。这种情况在Safari上特别明显，简单概括就是往返页面无法刷新。


「往返缓存」指浏览器为了在页面间执行前进后退操作时能拥有更流畅体验的一种策略，以下简称BFCache。该策略具体表现为：当用户前往新页面前将旧页面的DOM状态保存在BFCache里，当用户返回旧页面前将旧页面的DOM状态从BFCache里取出并加载。大部分移动端浏览器都会部署BFCache，可大大节省接口请求的时间和带宽。


了解什么是BFCache再对症下药，解决方案就在window.onunload上做文章。


```js
// 在新页面监听页面销毁事件
window.addEventListener("onunload", () => {
    // 执行旧页面代码
});
```

若在Vue SPA上使用keep-alive也不能让页面刷新，可将接口请求放到beforeRouteEnter()里。


当然还有另一种解决方案。pageshow事件在每次页面加载时都会触发，无论是首次加载还是再次加载都会触发，这就是它与load事件的区别。pageshow事件暴露的persisted可判断页面是否从BFCache里取出。



```js
window.addEventListener("pageshow", e => e.persisted && location.reload());
```

若浏览器不使用'<meta http-equiv="Cache-Control" content="no-cache">'禁用缓存，该解决方案还是很值得一用。



### 解析有效日期


在苹果系统上解析YYYY-MM-DD HH:mm:ss这种日期格式会报错Invalid Date，但在安卓系统上解析这种日期格式完全无问题。


```js
new Date("2019-03-31 21:30:00"); // Invalid Date
```

查看Safari相关开发手册发现可用YYYY/MM/DD HH:mm:ss这种日期格式，简单概括就是年月日必须使用/衔接而不能使用-衔接。当然安卓系统也支持该格式，然而接口返回字段的日期格式通常是YYYY-MM-DD HH:mm:ss，那么需替换其中的-为/。


```js
const date = "2019-03-31 21:30:00";
new Date(date.replace(/\-/g, "/"));
```


###修复高度坍塌


当页面同时出现以下三个条件时，键盘占位会把页面高度压缩一部分。当输入完成键盘占位消失后，页面高度有可能回不到原来高度，产生坍塌导致Webview底色露脸，简单概括就是输入框失焦后页面未回弹。


* 页面高度过小
* 输入框在页面底部或视窗中下方
* 输入框聚焦输入文本


只要保持前后滚动条偏移量一致就不会出现上述问题。在输入框聚焦时获取页面当前滚动条偏移量，在输入框失焦时赋值页面之前获取的滚动条偏移量，这样就能间接还原页面滚动条偏移量解决页面高度坍塌。


```js
const input = document.getElementById("input");
let scrollTop = 0;
input.addEventListener("focus", () => {
    scrollTop = document.scrollingElement.scrollTop;
});
input.addEventListener("blur", () => {
    document.scrollingElement.scrollTo(0, this.scrollTop);
});
```


### 修复输入监听

在苹果系统上的输入框输入文本，keyup/keydown/keypress事件可能会无效。当输入框监听keyup事件时，逐个输入英文和数字会有效，但逐个输入中文不会有效，需按回车键才会有效。


此时可用input事件代替输入框的keyup/keydown/keypress事件。



### 简化回到顶部


曾几何时编写一个返回顶部函数麻烦得要死，需scrollTop、定时器和条件判断三者配合才能完成。其实DOM对象里隐藏了一个很好用的函数可完成上述功能，一行核心代码就能搞定。


该函数就是scrollIntoView，它会滚动目标元素的父容器使之对用户可见，简单概括就是相对视窗让容器滚动到目标元素位置。它有三个可选参数能让scrollIntoView滚动起来更优雅。


* 「behavior」：动画过渡效果，默认auto无，可选smooth平滑
* 「inline」：水平方向对齐方式，默认nearest就近对齐，可选start顶部对齐、center中间对齐和end底部对齐
* 「block」：垂直方向对齐方式，默认start顶部对齐，可选center中间对齐、end底部对齐和nearest就近对齐


```js
const gotopBtn = document.getElementById("gotop-btn");
openBtn.addEventListener("click", () => document.body.scrollIntoView({ behavior: "smooth" }));
```


当然还可滚动到目标元素位置，只需将document.body修改成目标元素的DOM对象。



### 简化懒性加载


与上述「简化回到顶部」一样，编写一个懒性加载函数也同样需scrollTop、定时器和条件判断三者配合才能完成。其实DOM对象里隐藏了一个很好用的函数可完成上述功能，该函数无需监听容器的scroll事件，通过浏览器自身机制完成滚动监听。


该函数就是IntersectionObserver，它提供一种异步观察目标元素及其祖先元素或顶级文档视窗交叉状态的方法。详情可参照MDN文档，在此不作过多介绍。


懒性加载的第一种使用场景：「图片懒加载」。只需确认图片进入可视区域就赋值加载图片，赋值完成还需对图片停止监听。




```html
<img data-src="pig.jpg">
<!-- 很多<img> -->
```

```js
const imgs = document.querySelectorAll("img.lazyload");
const observer = new IntersectionObserver(nodes => {
    nodes.forEach(v => {
        if (v.isIntersecting) { // 判断是否进入可视区域
            v.target.src = v.target.dataset.src; // 赋值加载图片
            observer.unobserve(v.target); // 停止监听已加载的图片
        }
    });
});
imgs.forEach(v => observer.observe(v));
```

懒性加载的第二种使用场景：「下拉加载」。在列表最底部部署一个占位元素且该元素无任何高度或实体外观，只需确认占位元素进入可视区域就请求接口加载数据。



```html
<ul>
    <li></li>
    <!-- 很多<li> -->
</ul>
<!-- 也可将#bottom以<li>的形式插入到<ul>内部的最后位置 -->
<div id="bottom"></div>
```


```js
const bottom = document.getElementById("bottom");
const observer = new IntersectionObserver(nodes => {
    const tgt = nodes[0]; // 反正只有一个
    if (tgt.isIntersecting) {
        console.log("已到底部，请求接口");
        // 执行接口请求代码
    }
})
bottom.observe(bottom);
```

### 优化扫码识别

通常移动端浏览器都会配备长按二维码图片识别链接的功能，但长按二维码可能无法识别或错误识别。二维码表面看上去是一张图片，可二维码生成方式却五花八门，二维码生成方式有以下三种。

* [x] 使用img渲染
* [x] 使用svg渲染
* [x] 使用canvas渲染

大部分移动端浏览器只能识别img渲染的二维码，为了让全部移动端浏览器都能识别二维码，那只能使用img渲染二维码了。若使用SVG和Canvas的方式生成二维码，那就想方设法把二维码数据转换成Base64再赋值到img的src上。


一个页面可能存在多个二维码，若长按二维码只能识别最后一个，那只能控制每个页面只存在一个二维码。



### 自动播放媒体


常见媒体元素包括音频audio和视频video，为了让用户得到更好的媒体播放体验与不盲目浪费用户流量，大部分移动端浏览器都明确规定不能自动播放媒体或默认屏蔽autoplay。为了能让媒体在页面加载完成后自动播放，只能显式声明播放。


```js
const audio = document.getElementById("audio");
const video = document.getElementById("video");
audio.play();
video.play();
```


对于像微信浏览器这样的内置浏览器，还需监听其应用SDK加载完成才能触发上述代码，以保障WebView正常渲染。其他内置浏览器同理，在此不作过多介绍。


```js
document.addEventListener("WeixinJSBridgeReady", () => {
    // 执行上述媒体自动播放代码
});
```


在苹果系统上明确规定用户交互操作开始后才能播放媒体，未得到用户响应会被Safari自动拦截，因此需监听用户首次触摸操作并触发媒体自动播放，而该监听仅此一次。


```js
document.body.addEventListener("touchstart", () => {
    // 执行上述媒体自动播放代码
}, { once: true });
```





>  文章转载自：https://mp.weixin.qq.com/s/JyIgnIFvpmSy0DobAX3qKg
