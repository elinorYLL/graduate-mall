<template>
  <div>
    <van-sidebar v-model="activeKey" :active-key="aKey">
      <van-sidebar-item v-on:click="sendMsg(item)" v-for='(item,index) in tabs' :key="index" :title="item.name+'手机'" v-trigger="index"/>
    </van-sidebar>
    <!-- <div>{{is}}</div> -->
  </div>
</template>
<script>
import Vue from 'vue';
import { Sidebar, SidebarItem, Notify } from 'vant';
import {getCategoryTab} from '../../api/category-tab.js';
import bus from '../../assets/js/eventBus.js';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
Vue.use(Sidebar)
  .use(SidebarItem);

export default {
  name: "CTab",
  data () {
    return {
      activeKey: 0,
      aKey:0,
      tabs:[]
    }
  },
  created(){
    this.getTabs();
  },
  methods: {
    getTabs(){
      getCategoryTab().then(result=>{
        if(result)
      {
        this.tabs=result.data;
        console.log(this.tabs);
         this.$store.dispatch("categoryTab/invokeSetItems",this.tabs[0].id);
        // console.log(this.tabs[0]);
      }
     
      })
    },
    sendMsg:function(item){
      bus.$emit("TabItem",item);
    }
  },
  mounted(){
   // this.$store.state.categoryTab.tabFirstId;
   //这是在获取。。还没赋值呢
    console.log("aha:"+this.tabs[0]);
  //  this.$store.dispatch("invokeSetItems",this.tabs[0].id);
   //分发出去
  },
  computed:{
    ...mapGetters('categoryTab',{is:'GetTabFirstId'})
    //is被赋值成了第一个的id
  },
directives:{
    trigger:{
     inserted(el,binging,index){
       if(binging.value===0)
        el.click()
       //$(el).trigger('click')
      }
   }
}
}
</script>
//vue默认点击第一次项
//https://blog.csdn.net/weixin_44091915/article/details/89042641
//引入bus
// https://blog.csdn.net/tianjian_zhou/article/details/85077563?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
<style></style>
