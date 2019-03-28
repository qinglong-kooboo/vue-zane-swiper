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
        pics: [
          {
            src: "https://sxsimg.xiaoyuanzhao.com/D6/5A/D685908B685DA7068A50BB6A61EDB45A.png",
            alt: "1"
          },
          {
            src: "https://sxsimg.xiaoyuanzhao.com/27/B5/27C9EDE4770EF9F1A78A9E10D7F9D2B5.png",
            alt: "1"
          },
          {
            src: "https://sxsimg.xiaoyuanzhao.com/F4/9E/F4FBC65B27DEB9790539956CF468409E.png",
            alt: "1"
          }
        ],
        interval: 3500,
        width: "595px",
        height: "210px"
        // width: '800px',
        // height: '400px'
      }
    }
  }
};
</script>

<style>
</style>
