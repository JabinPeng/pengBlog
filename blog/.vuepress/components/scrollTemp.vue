<style scoped lang="scss">
.scroll-container {
  height: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  overflow: auto;
  .row {
    margin: 0;
    line-height: 1.5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  &::-webkit-scrollbar-corner, /* 滚动条角落 */
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: rgba(180, 160, 120, 0.1);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: #00adb5;
  }
}
</style>

<template>
  <div class="scroll-container">
    <p class="row" v-for="(value,index) in poem.split('。')">{{value}}</p>
  </div>
</template>

<script>
export default {
  name: "scrollTemp",
  data() {
    return {
      poem:
        `
        沁园春-雪。
        北国风光，千里冰封，万里雪飘。
望长城内外，惟余莽莽；大河上下，顿失滔滔。
山舞银蛇，原驰蜡象，欲与天公试比高。
须晴日，看红装素裹，分外妖娆。
江山如此多娇，引无数英雄竞折腰。
惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
一代天骄，成吉思汗，只识弯弓射大雕。
俱往矣，数风流人物，还看今朝。
沁园春-长沙。
独立寒秋，湘江北去，橘子洲头。
看万山红遍，层林尽染；漫江碧透，百舸争流。
鹰击长空，鱼翔浅底，万类霜天竞自由。
怅寥廓，问苍茫大地，谁主沉浮？
携来百侣曾游。忆往昔峥嵘岁月稠。
恰同学少年，风华正茂；书生意气，挥斥方遒。
`
    }
  }
};
</script>
