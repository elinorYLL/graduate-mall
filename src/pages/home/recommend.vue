<template>
<!-- https://www.cnblogs.com/sese/p/11897195.html -->
<!-- 上拉加载更多实现参考 -->
  <div class="recommend">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">精选</van-divider>
    <ul class="recommend-list">
      <van-list 
      v-model="loading" 
      :finished="finished" 
      finished-text="没有更多了" 
      @load="onLoad"
      :offset="10">
      <!-- 这里放我的数据 -->
        <li class="recommend-item" v-for="(item, index) in recommend" :key="index">
          <van-row class="recommend-icon" type="flex" justify="center" align="center">
            <van-col span="20">
              <van-icon name="close" />
              <router-link class="recommend-link" to="{name:'product'},params:{id:item.id}">
                <!-- <p class="recommend-pic">
                  <img class="recommend-img" v-lazy="item.picUrl" />
                </p> -->
                <p class="recommend-pic">
                  <img class="recommend-img" src="http://localhost:8083/9.jpg"/>
                </p>
                <p class="recommend-name">{{ item.name }}</p>
                <p class="recommend-origPrice"><del>¥2599</del></p>
                <p class="recommend-info">
                  <span class="recommend-price">¥{{item.shopPrice}}<strong class="recommend-price-num"></strong></span>
                </p>
              </router-link>
            </van-col>
          </van-row>
        </li>
      </van-list>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Divider, Col, Row, Icon, Overlay } from "vant";
import {getHomeRecommend} from '../../api/home.js';
Vue.use(Divider)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Overlay);
export default {
  name: "HomeRecommend",
  data () {
    return {
      s: [],
      show: false,
      loading: false,//是否加载状态
      finished: false,//是否架子啊完所有数据
      recommend:[],
      curPage:1,//请求第几页
      totalPage:1//总共数据页数
    };
  },
  created(){
    // 创建组件时，加载第一页数据
    this.getRecommend();
  },
  methods: {
    onLoad () {
     setTimeout(()=>{
        this.curPage++;
        this.getRecommend();
     },1000);
    },
    getRecommend(){
      if(this.curPage>this.totalPage)
      {
        this.finished=true;
        return;
        //加载结束
      }
      getHomeRecommend(this.curPage).then(result=>{
        if(result)
        {
          this.loading=false;
          console.log(result.data);
          this.totalPage=result.data.pages;
          this.recommend=this.recommend.concat(result.data.records);
          console.log(this.recommend);

        }

      })
    }
  }
};
</script>
<style scoped>
.recommend-list {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.recommend-item {
  width: 45%;
  margin: 2%;
  /* float: left; */
  display: inline-block;
  /* margin: 10px; */
  border-radius: 5px;
  border: 1px solid white;
  background-color: white;
}
.recommend-pic{
  padding-top: 20px;
  height: 131px;
  width: 98%;
  overflow: hidden;
}
.recommend-img {

  width: 100%;
  height: 100%;
}
.van-col,
.van-col--20 {
  position: relative;
}
.van-icon,
.van-icon-close {
  position: absolute;
  right: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
