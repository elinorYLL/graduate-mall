<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-tabbar></c-tabbar>
    </div>
  </div>
</template>

<script>
import CTabbar from "./components/tabbar/index.vue";
export default {
  name: "App",
  components: {
    CTabbar
  }
};
</script>
<style>
.g-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  height: 100%;
  margin: 0 auto;
}

.g-view-container {
  height: 100%;
  padding-bottom: 50px;
}

.g-footer-container {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
</style>
