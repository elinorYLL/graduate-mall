<template>
  <div>
   <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
      <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.linkUrl" class="slider-link"></a>
        <img v-lazy="image.picUrl" class="slider-img" />
      </van-swipe-item>
    </van-swipe>
   </van-pull-refresh>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload,PullRefresh} from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(PullRefresh);
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
      ],
      isLoading:''
    };
  },
  methods:{
    onRefresh(){
      this.finished=false;
      
    }
  }
};
</script>
<style scoped>
/* .slider-img {
  padding-top: 54px;
} */
.g-slider-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  height: 151px;
  overflow: hidden;
}
.van-swipe {
  height: 100%;
  width: 100%;
  /* margin: 0 auto; */
}
.slider-img {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
