<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="isLoading">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
    <div class="content">
      <div class="pic">
        <a href="#" class="pic-link">
          <img src="./mi9.jpg" class="pic-img">
        </a>
      </div>
      <div class="section">
        <!-- <h4 class="section-title">手机</h4> -->
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" class="section-title">
          手机
        </van-divider>
        <ul class="section-list">
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
          <li class="section-item">

            <a href="#" class="section-link">
              <img src="./mi9.jpg" class="section-img">
            </a>
            <p class="section-name"></p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Loading, Divider } from 'vant';
Vue.use(Loading)
  .use(Divider);
export default {
  name: "CContent",
  data () {
    return {
      isLoading: false
    }
  }
};
</script>
<style scoped>
.content-wrapper {
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.content {
  overflow: scroll;
  height: calc(100vh);
  background-color: #fff;
}
.pic {
  width: 90%;
  height: 20%;
  margin: 64px auto 10px;
  overflow: hidden;
}

.pic-img {
  width: 100%;
  height: 100%;
}
.pic-link {
  display: block;
  width: 100%;
  height: 100%;
}
.section {
  width: 100%;
}
.section-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #fff; */
  padding: 10px 10px 0;
}
.section-item {
  width: 25%;
  margin: 10px 4%;
}
.section-link {
  width: 100%;
  height: 100%;
}
.section-img {
  width: 100%;
}
</style>
