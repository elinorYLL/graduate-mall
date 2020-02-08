<template>
  <div>
    <van-row class="header">
      <van-col span="17" offset="4"
        ><van-search
          v-model="value"
          shape="round"
          background="white"
          placeholder="请输入搜索关键词"
      /></van-col>
      <van-col span="2" offset="1">
        <van-icon class="header-icon" name="comment-o" size="26"
      /></van-col>
    </van-row>
    <!-- <van-search
      v-model="value"
      shape="round"
      background="white"
      placeholder="请输入搜索关键词"
    />
    <van-icon name="comment-o" size="26" /> -->
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  name: "HomeHeader",
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style scoped>
.header {
  background-color: white;
}
.header-icon {
  position: relative;
  top: 14px;
}
</style>
