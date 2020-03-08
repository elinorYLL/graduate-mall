<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="wap-home" size="5" to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="column" size="5" to="/category"
        >分类</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="cart" size="5" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="friends" size="5" to="/personal"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Icon);
export default {
  name: "CTabbar",
  data() {
    return {
      active: "home"
    }
    },
    created(){
      console.log(this.$route);
     if (this.$route.name == "home") {
      this.active = 'home';
    } else if (this.$route.name == "search") {
      this.active = 'search';
    } else if (this.$route.name == "friends") {
      this.active = 'friends';
    }else if(this.$route.name=="setting"){
      this.active='setting'
    }
  }
};
</script>
<style>
</style>