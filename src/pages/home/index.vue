<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <div class="g-slider-container">
      <home-slider></home-slider>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from "./header.vue";
import HomeSlider from "./slider.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSlider
  }
};
</script>
<style>
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.g-header-container {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.g-slider-container {
  position: absolute;
  top: 54px;
  width: 350px;
  left: 50%;
  margin-left: -175px;
  height: 180px;
}
</style>
