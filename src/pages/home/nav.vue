<template>
  <div class="menav">
    <van-grid :column-num="3">
      <van-grid-item>
        <!-- <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" text="新品" /> -->
        <van-grid-item icon="photo-o" text="新品" to="/" />
      </van-grid-item>
      <van-grid-item>
        <!-- <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" text="5g" /> -->
        <van-grid-item icon="photo-o" text="5g" to="/" />
      </van-grid-item>
      <van-grid-item>
        <van-grid-item icon="photo-o" text="换新狂欢" to="/" />
        <!-- <van-image
          src="https://img.yzcdn.cn/vant/apple-3.jpg"
          text="换新狂欢"
        /> -->
      </van-grid-item>
      <van-grid-item>
        <van-grid-item icon="photo-o" text="发布会" to="/" />
        <!-- <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" text="发布会" /> -->
      </van-grid-item>
      <van-grid-item>
        <van-grid-item icon="photo-o" text="周边" to="/" />
        <!-- <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" text="周边" /> -->
      </van-grid-item>
      <van-grid-item>
        <van-grid-item icon="photo-o" text="热销爆款" to="/" />
        <!-- <van-image
          src="https://img.yzcdn.cn/vant/apple-3.jpg"
          text="热销爆款"
        /> -->
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
export default {
  name: "MeNav"
};
</script>
<style scoped>
.menav {
  margin: 10px 20px 10px 20px;
  /* border: 1px solid red; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
</style>
