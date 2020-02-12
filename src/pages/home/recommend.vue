<template>
  <div class="recommend">
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >精选</van-divider
    >
    <ul class="recommend-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <li class="recommend-item" v-for="(item, index) in s" :key="index">
          <van-row
            class="recommend-icon"
            type="flex"
            justify="center"
            align="center"
          >
            <van-col span="20">
              <van-icon name="close" />
              <router-link class="recommend-link" to="/">
                <p class="recommend-pic">
                  <img class="recommend-img" v-lazy="item.picUrl" />
                </p>
                <p class="recommend-name">{{ item.name }}</p>
                <p class="recommend-origPrice"><del>¥2599</del></p>
                <p class="recommend-info">
                  <span class="recommend-price"
                    >¥2599<strong class="recommend-price-num"></strong
                  ></span>
                </p>
              </router-link>
            </van-col>
          </van-row>
        </li>
      </van-list>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Divider, Col, Row, Icon, Overlay } from "vant";
Vue.use(Divider)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Overlay);
export default {
  name: "HomeRecommend",
  data() {
    return {
      s: [],
      show: false,
      loading: false,
      finished: false
    };
  },
  // {
  //   name: "mi9",
  //   picUrl: require("./9.jpg")
  // }
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.s.push({ name: "mi9", picUrl: require("./9.jpg") });
        }
        this.loading = false;
        if (this.s.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>
.recommend-list {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.recommend-item {
  width: 45%;
  margin: 2%;
  /* float: left; */
  display: inline-block;
  /* margin: 10px; */
  border-radius: 5px;
  border: 1px solid white;
  background-color: white;
}
.recommend-img {
  margin-top: 20px;
  width: 100%;
  height: 100%;
}
.van-col,
.van-col--20 {
  position: relative;
}
.van-icon,
.van-icon-close {
  position: absolute;
  right: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
