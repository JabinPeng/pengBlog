<style scoped lang="scss">
    .carousel-ul{
        position: relative;
        width: 100%;
        height:600px;
        .accordion-item{
            list-style: none;
            position: absolute;
            transition: all 1s;
            .accordion-title {
                color: #fff;
                font-size: 18px;
                z-index: 2;
                text-align: center;
            }
        }
    }
</style>

<template>
    <div class="carousel">
        <ul class="carousel-ul">
            <li class="accordion-item"
                v-for="(item,index) in data"
                :style="{'backgroundImage':`url(${item.src})`,
                width: positionList[index].width,
                height: positionList[index].height,
                top: positionList[index].top,
                left: positionList[index].left,
                right: positionList[index].right,
                bottom: positionList[index].bottom,
                }">
                <p class="accordion-title">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'carousel',
        data() {
            return {
                data: [
                    {
                        title: '背景1',
                        src: require("../public/assets/image/bg7.jpeg"),
                    },
                    {
                        title: '背景2',
                        src: require("../public/assets/image/bg10.jpeg")
                    },
                    {
                        title: '背景3',
                        src: require("../public/assets/image/bg9.jpeg")
                    },
                    {
                        title: '背景4',
                        src: require("../public/assets/image/bg7.jpeg")
                    },
                    {
                        title: '背景5',
                        src: require("../public/assets/image/bg10.jpeg")
                    }
                ],
                positionList: [
                    {
                        width: '200px',
                        height: '200px',
                        top: '10px',
                        left: '20px',
                        right: '',
                        bottom: ''
                    },
                    {
                        width: '200px',
                        height: '250px',
                        top: '',
                        left: '300px',
                        right: '',
                        bottom: '100px'
                    },
                    {
                        width: '200px',
                        height: '300px',
                        top: '',
                        left: '30px',
                        right: '',
                        bottom: '60px'
                    },
                    {
                        width: '300px',
                        height: '200px',
                        top: '160px',
                        left: '',
                        right: '60px',
                        bottom: ''
                    },
                    {
                        width: '230px',
                        height: '160px',
                        top: '',
                        left: '',
                        right: '50px',
                        bottom: '10px'
                    }
                ]
            }
        },
        mounted () {
            this.start()
            setInterval(() => {
                this.start()
            }, 1000)
        },
        methods: {
            start () {
                this.positionList = this.shuffle(this.positionList)
                this.data =  [
                    {
                        title: '背景1',
                        src: require("../public/assets/image/bg7.jpeg"),
                    },
                    {
                        title: '背景2',
                        src: require("../public/assets/image/bg10.jpeg")
                    },
                    {
                        title: '背景3',
                        src: require("../public/assets/image/bg9.jpeg")
                    },
                    {
                        title: '背景4',
                        src: require("../public/assets/image/bg7.jpeg")
                    },
                    {
                        title: '背景5',
                        src: require("../public/assets/image/bg10.jpeg")
                    }
                ]
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
</script>

<style scoped>

</style>
