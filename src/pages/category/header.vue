<template>
  <div>
    <van-row class="header">
      <van-col span="21">
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
      </van-col>
      <van-col span="2" offset="1">
        <van-icon class="header-icon" name="comment-o" size="26" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Col, Row } from "vant";
Vue.use(Search)
  .use(Col)
  .use(Row);
export default {
  name: "CHeader",
  data () {
    return {
      value: ''
    }
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
