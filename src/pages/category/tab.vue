<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="新品" />
      <van-sidebar-item title="小米手机" />
      <van-sidebar-item title="苹果手机" />
      <van-sidebar-item title="华为手机" />
      <van-sidebar-item title="一加手机" />
      <van-sidebar-item title="魅族手机" />
      <van-sidebar-item title="vivo手机" />
      <van-sidebar-item title="oppo手机" />
      <van-sidebar-item title="三星手机" />
      <van-sidebar-item title="5G" />
      <van-sidebar-item title="数码配件" />
    </van-sidebar>
  </div>
</template>
<script>
import Vue from 'vue';
import { Sidebar, SidebarItem, Notify } from 'vant';
Vue.use(Sidebar)
  .use(SidebarItem);
export default {
  name: "CTab",
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {
    onChange (index) {
      Notify({ type: 'primary', message: index });
    }
  }
};
</script>
<style></style>
