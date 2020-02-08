<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.linkUrl" class="slider-link"></a>
        <img v-lazy="image.picUrl" class="slider-img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  name: "HomeSlider",
  data() {
    return {
      images: [
        {
          linkUrl: "https://www.baidu.com",
          picUrl: require("./1.jpg")
        },
        {
          linkUrl: "https://www.baidu.com",
          picUrl: require("./2.jpg")
        },
        {
          linkUrl: "https://www.baidu.com",
          picUrl: require("./3.jpg")
        },
        {
          linkUrl: "https://www.baidu.com",
          picUrl: require("./4.jpg")
        }
      ]
    };
  }
};
</script>
<style>
/* .slider-img {
  padding-top: 54px;
} */
.van-swipe {
  height: 180px;
  width: 350px;
  margin: 0 auto;
}
.slider-img {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
