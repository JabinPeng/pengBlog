<style scoped lang="scss">
    .carousel-ul{
        position: relative;
        width: 100%;
        height:600px;
        .accordion-item{
            list-style: none;
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
                        width: '100px',
                        height: '200px',
                        top: '10px',
                        left: '20px',
                        right: '',
                        bottom: ''
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
