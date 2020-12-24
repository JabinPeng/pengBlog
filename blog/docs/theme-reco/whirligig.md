---
title: 旋转木马
date: 2020-12-24
---


<whirligig/>



```html
 <div class="whirligig">
        <div class="demo-perspective-photo">
            <div id="stage">
                <div id="container">
                    <!-- 此处可上传自己的图片 -->
                    <img :src="imgSrc[0]" class='piece' style="-webkit-transform: rotateY(0deg) translateZ(196px);">
                    <img :src="imgSrc[1]" class='piece' style="-webkit-transform: rotateY(60deg) translateZ(196px);">
                    <img :src="imgSrc[2]" class='piece' style="-webkit-transform: rotateY(120deg) translateZ(196px);">
                    <img :src="imgSrc[3]" class='piece' style="-webkit-transform: rotateY(180deg) translateZ(196px);">
                    <img :src="imgSrc[4]" class='piece' style="-webkit-transform: rotateY(240deg) translateZ(196px);">
                    <img :src="imgSrc[5]" class='piece' style="-webkit-transform: rotateY(300deg) translateZ(196px);">
                    <!-- 此处使用div代替 -->
<!--                    <div class='example' style=""></div>-->
<!--                    <div class='example' style=""></div>-->
<!--                    <div class='example' style=""></div>-->
<!--                    <div class='example' style=""></div>-->
<!--                    <div class='example' style=""></div>-->
<!--                    <div class='example' style=""></div>-->
                </div>
            </div>
        </div>
    </div>
```

```scss
.whirligig{
        position: relative;
        height: 400px;
        .demo-perspective-photo {
            position: absolute;
            width: 100%;
            height: 260px;
            /*top: 200px;*/
            background-color: #fff;
            zoom: 2;
        }

        .demo-perspective-photo #stage {
            width: 100%;
            height: 200px;
            -webkit-perspective: 800px;
            -moz-perspective: 800px;
            perspective: 800px;
            -webkit-transition: top 0.5s;
            -moz-transition: top 0.5s;
            transition: top 0.5s;
            position: relative;
        }

        .demo-perspective-photo #container {
            position: absolute;
            width: 200px;
            height: 80px;
            left: 30%;
            top: 50%;
            margin-left: -32px;
            margin-top: -18px;
            cursor: pointer;
            -webkit-transition: -webkit-transform 1s;
            -moz-transition: -moz-transform 1s;
            transition: transform 1s;
            -webkit-transform-style: preserve-3d;
            -moz-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-animation: photoRotate 18s ease-in-out infinite 2s;
            animation: photoRotate 18s ease-in-out infinite 2s;
        }

        .demo-perspective-photo .piece {
            width: 200px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
            -webkit-transition: opacity 1s, -webkit-transform 1s;
            -moz-transition: opacity 1s, -moz-transform 1s;
            transition: opacity 1s, transform 1s;
            position: absolute;
            bottom: 0;
        }

        .demo-perspective-photo .example {
            width: 64px;
            height: 36px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
            -webkit-transition: opacity 1s, -webkit-transform 1s;
            -moz-transition: opacity 1s, -moz-transform 1s;
            transition: opacity 1s, transform 1s;
            position: absolute;
            bottom: 0;
        }

        .demo-perspective-photo .example:nth-child(1) {
            -webkit-transform: rotateY(0deg) translateZ(98px);
            transform: rotateY(0deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }

        .demo-perspective-photo .example:nth-child(2) {
            -webkit-transform: rotateY(60deg) translateZ(98px);
            transform: rotateY(60deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }

        .demo-perspective-photo .example:nth-child(3) {
            -webkit-transform: rotateY(120deg) translateZ(98px);
            transform: rotateY(120deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }

        .demo-perspective-photo .example:nth-child(4) {
            -webkit-transform: rotateY(180deg) translateZ(98px);
            transform: rotateY(180deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }

        .demo-perspective-photo .example:nth-child(5) {
            -webkit-transform: rotateY(240deg) translateZ(98px);
            transform: rotateY(240deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }

        .demo-perspective-photo .example:nth-child(6) {
            -webkit-transform: rotateY(300deg) translateZ(98px);
            transform: rotateY(300deg) translateZ(98px);
            background-color: rgba(153, 204, 204, 0.8);
        }
    }
    @-webkit-keyframes photoRotate {
        0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        16.7% {
            -webkit-transform: rotateY(60deg);
            transform: rotateY(60deg);
        }
        33.3% {
            -webkit-transform: rotateY(120deg);
            transform: rotateY(120deg);
        }
        50% {
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        66.7% {
            -webkit-transform: rotateY(240deg);
            transform: rotateY(240deg);
        }
        83.3% {
            -webkit-transform: rotateY(300deg);
            transform: rotateY(300deg);
        }
        100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
        }
    }

    @keyframes photoRotate {
        0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        16.7% {
            -webkit-transform: rotateY(60deg);
            transform: rotateY(60deg);
        }
        33.3% {
            -webkit-transform: rotateY(120deg);
            transform: rotateY(120deg);
        }
        50% {
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        66.7% {
            -webkit-transform: rotateY(240deg);
            transform: rotateY(240deg);
        }
        83.3% {
            -webkit-transform: rotateY(300deg);
            transform: rotateY(300deg);
        }
        100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
        }
    } 
```

