<template>
  <div id="app">
    <swiper :sliders="sliders"></swiper>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      sliders: {
        sliders: [
          {
            src: "https://sxsimg.xiaoyuanzhao.com/D6/5A/D685908B685DA7068A50BB6A61EDB45A.png",
            index: 0,
          },
          {
            src: "https://sxsimg.xiaoyuanzhao.com/27/B5/27C9EDE4770EF9F1A78A9E10D7F9D2B5.png",
            index: 1
          },
          {
            src: "https://sxsimg.xiaoyuanzhao.com/F4/9E/F4FBC65B27DEB9790539956CF468409E.png",
            index: 2
          }
        ],
        // sliders: [
        //   {
        //     text: "111111111111",
        //     index: 0,
        //   },
        //   {
        //     text: "222222222222",
        //     index: 1
        //   },
        //   {
        //     text: "333333333333",
        //     index: 2
        //   }
        // ],
        // isPic: true,
        isShowArrows: true,
        isShowDots: true,
        interval: 3500,
        width: "595px",
        height: "210px",
        mode: 'col'
      }
    }
  }
}
</script>

<style>
</style>
