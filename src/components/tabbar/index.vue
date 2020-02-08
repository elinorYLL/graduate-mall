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
    };
  }
};
</script>
<style>
/* .van-icon,
.van-icon-setting-o {
  font-size: 40px;
} */
</style>
