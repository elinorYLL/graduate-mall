<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="isLoading">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
    <div class="content">
      <div class="pic">
        <a href="#" class="pic-link">
          <img :src='picUrl' class="pic-img">
        </a>
      </div>
      <div class="section">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" class="section-title">
          手机
        </van-divider>
        <ul class="section-list">
          <li class="section-item"  v-for='(item,index) in content' :key="index">
           <router-link :to="{name:'product',params:{id:item.id}}">
              <a href="#" class="section-link">
              <img :src="item.pictures.url" class="section-img">
            </a>
            <p class="section-name">{{item.name}}</p>
           </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- <p>这是从tab接手过来的item：{{tabItem}}</p> -->
  </div>
</template>
<script>
import Vue from 'vue';
import {Loading, Divider } from 'vant';
import {getCategoryContent} from '../../api/category-content.js';
import {CATEGORY_PAGE_SIZE} from '../../api/config.js'
import bus from '../../assets/js/eventBus.js'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
Vue.use(Loading)
  .use(Divider);
export default {
  name: "CContent",

  data () {
    return {
      indexOfPic:0,
      isLoading: false,
      tabItem:'',
      picUrl:'',
      content:[],
      curPage:1,
      totalPage:1,
      BannerPic:[],
      pageSize:CATEGORY_PAGE_SIZE,

    }
  },
  mounted(){
         var self=this;
         bus.$on("TabItem",function(tabItem){
           self.tabItem=tabItem;
           self.picUrl=tabItem.pictures[0].url;
    });
    console.log('msg');
    console.log(this.msg)
    // 
      getCategoryContent(this.msg).then(result=>{
        if(result)
        {
          this.content=result.data;  
          this.content.forEach(res=>{
            res.pictures=res.pictures[0];
          })
          console.log('hhh')
           console.log(this.content);
          //  this.$forceUpdate();
        }
      })
  },
  // https://blog.csdn.net/weixin_41187842/article/details/90264889
  //https://www.cnblogs.com/ilovexiaoming/p/11352768.html 对传过来的tabId进行监听才可以有效获得id
  watch:{
    tabItem:'getTabContent'
  },
  methods:{
    getTabContent(curVal,oldVal){
      console.log('change')
      console.log(curVal);
      this.content=[];
      getCategoryContent(curVal.id).then(result=>{
        if(result)
        {
          this.content=result.data;  
          this.content.forEach(res=>{
            res.pictures=res.pictures[0];
          })
          console.log('hhh')
           console.log(this.content);
    
        }
      })
    },
    pic(item){
      console.log('hhh');
      console.log(item.pictures);
    }
    },
    computed:{
    msg:{
      get(){
        return this.$store.state.categoryTab.tabFirstId
      },
      set(){
           
      }
    }
  }
  }
</script>
<style scoped>
.content-wrapper {
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.content {
  overflow: scroll;
  height: calc(100vh);
  background-color: #fff;
}
.pic {
  width: 90%;
  height: 20%;
  margin: 64px auto 10px;
  overflow: hidden;
}

.pic-img {
  width: 100%;
  height: 100%;
}
.pic-link {
  display: block;
  width: 100%;
  height: 100%;
}
.section {
  width: 100%;
}
.section-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #fff; */
  padding: 10px 10px 0;
}
.section-item {
  width: 25%;
  margin: 10px 4%;
}
.section-link {
  display: inline-block;
  width: 100%;
  height: 54px;
  overflow: hidden;
}
.section-img {
  width: 100%;
  height: 100%;
}
.section-name{
  text-align: center;
}
.van-popup--top{
  display: none !important;
}
</style>
