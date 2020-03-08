<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-tabbar v-show="!pathf()"></c-tabbar>
    </div>
  </div>
</template>

<script>
import CTabbar from "./components/tabbar/index.vue";
export default {
  name: "App",
  data(){
    return{
      path:''
    }
  },
  components: {
    CTabbar
  },
  mounted(){
    console.log("route:"+this.$route.path);
      this.path=this.$route.path;
  },
  watch:{
    $route(to,from)
    {
      this.path=to.path;
    }

  },

  methods:{
    pathf(){
      var str=this.path;
      console.log("str:"+str);
      var c=str.indexOf("/comment/")+1;
      var s=str.indexOf("/product/")+1;
      var l=str.indexOf("/login")+1;
      var r=str.indexOf("/register")+1;
      var o=str.indexOf("/order-detail")+1;
      console.log("s:"+s);
      console.log("c:"+c);
      return s||c||l||r||o;
    }
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
