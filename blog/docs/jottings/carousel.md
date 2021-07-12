---
title: 随机轮播
date: 2020-12-02
---


<carousel/>

```html
 <div class="carousel">
        <ul class="carousel-ul">
            <li class="accordion-item"
                v-if="flag"
                v-for="(item,index) in carouselData"
                :style="{'backgroundImage':`url(${item.src})`,
                width: positionList[index].width,
                height: positionList[index].height,
                top: positionList[index].top,
                left: positionList[index].left,
                right: positionList[index].right,
                bottom: positionList[index].bottom
                }">
                <p class="accordion-title">{{item.title}}</p>
            </li>
        </ul>
    </div>
```

```js
 export default {
        name: 'carousel',
        data() {
            return {
                carouselData: [
                    {
                        title: '背景1',
                        src: "https://www.zpzpup.com/assets/image/example/bg7.jpeg"
                    },
                    {
                        title: '背景2',
                        src: "https://www.zpzpup.com/assets/image/example/bg8.jpeg"
                    },
                    {
                        title: '背景3',
                        src: "https://www.zpzpup.com/assets/image/example/bg9.jpeg"
                    },
                    {
                        title: '背景4',
                        src: "https://www.zpzpup.com/assets/image/example/bg10.jpeg"
                    },
                    {
                        title: '背景5',
                        src: "https://www.zpzpup.com/assets/image/example/bg7.jpeg"
                    }
                ],
                positionList: [
                    {
                        width: '172px',
                        height: '500px',
                        top: '-20px',
                        left: '60px',
                        right: '',
                        bottom: '',
                    },
                    {
                        width: '172px',
                        height: '500px',
                        top: '',
                        left: '300px',
                        right: '',
                        bottom: '100px',
                    },
                    {
                        width: '172px',
                        height: '500px',
                        top: '',
                        left: '-150px',
                        right: '',
                        bottom: '60px',
                    },
                    {
                        width: '172px',
                        height: '500px',
                        top: '-130px',
                        left: '',
                        right: '140px',
                        bottom: '',
                    },
                    {
                        width: '172px',
                        height: '500px',
                        top: '',
                        left: '',
                        right: '-50px',
                        bottom: '10px',
                    }
                ],
                flag: true
            }
        },
        mounted () {
            this.start()
            setInterval(() => {
                this.flag = false
                this.start()
            }, 6000)
        },
        methods: {
            start () {
                this.flag = true
                requestAnimationFrame(() => {
                    this.positionList = this.shuffle(this.positionList)
                })
            },
            shuffle (arr) {
                let i = arr.length;
                while (i) {
                    let j = Math.floor(Math.random() * i--);
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
                return arr;
            }
        }
    }
```

```scss
.carousel-ul{
        position: relative;
        width: 100%;
        height:600px;
        .accordion-item{
            list-style: none;
            position: absolute;
            transition: all 3s ease-out;
            .accordion-title {
                color: #fff;
                font-size: 18px;
                z-index: 2;
                text-align: center;
            }
        }
    }
```
