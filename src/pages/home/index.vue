<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <home-slider class="g-slider-container"></home-slider>
    <me-nav></me-nav>
    <home-recommend></home-recommend>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from "./header.vue";
import HomeSlider from "./slider.vue";
import MeScroll from "../../base/scroll/index.vue";
import MeNav from "./nav.vue";
import HomeRecommend from "./recommend.vue";
import Vue from "vue";
import { List} from "vant";

Vue.use(List);
export default {
  name: "Home",
  data(){
    return{
      recommends:[],

    }
  },
  created(){
  },
  methods:{

  },
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    MeNav,
    HomeRecommend
  }
};
</script>
<style scoped>
.home {
  overflow: hidden;
  /* width: 100%; */
  /* height: 100%; */
  background-color: #f5f5f5;
}
.g-header-container {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
}
/* .g-slider-container {
  position: absolute;
  top: 54px;
  width: 350px;
  left: 50%;
  margin-left: -175px;
  height: 180px;
} */
.g-slider-container {
  margin-top: 54px;
}
</style>
