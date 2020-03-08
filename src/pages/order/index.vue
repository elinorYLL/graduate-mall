<template>
    <div>
        <div class="header">
            <router-link to='/personal'>
                 <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;我的订单</p>
        </div>
        <van-tabs v-model="active" animated>
           <van-tab title="待付款">
               <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini" @click="cancel()">取消订单</van-button>
    <van-button size="mini" @click="pay()">付款</van-button>
  </div>
</van-card>
           </van-tab>
           <van-tab title="待收货">
               <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini" @click="suss()">确认收货</van-button>
  </div>
</van-card>
           </van-tab>
           <van-tab title="待评价">
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                >
         <div slot="tags">
             <van-tag plain type="danger">标签</van-tag>
             <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
            <router-link to="self-comment">
                <van-button size="mini">评论</van-button>
            </router-link>
             <!-- <van-button size="mini">按钮</van-button> -->
        </div>
        </van-card>
           </van-tab>
           <van-tab title="退换修">内容 4</van-tab>  
        </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs, Card,Button,Toast} from 'vant';
Vue.use(Tab)
   .use(Tabs)
   .use(Card)
   .use(Button)
   .use(Toast);
export default {
    name:'order',
    data(){
        return{
            active:this.$route.query.active,
           
        }
    },
     methods:{
           suss(){
               this.$toast({
               message:"收货成功"
           })
          
           },
            cancel(){
               this.$toast({
                   message:"取消成功"
               })
           },
           pay(){
                this.$toast({
                   message:"请支付"
               })
           }
         }
}
</script>
<style scoped>
.header p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.header .van-tabs__line{
    background-color: #FF7F50;
    height: 0;
}
.header .van-tab--active{
    color:  #FF7F50 !important;
}

</style>
