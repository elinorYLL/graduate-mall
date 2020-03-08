<template>
  <div class="personal">
     <div class="personl-header">
       <img src="./mi9.jpg">
       <p class="personal-name">elinor</p>
     <router-link to="/setting">  
       <van-icon name="setting-o" size="30" class="setting"/>
       </router-link>
     </div>
     <div class="order">
      <div class="order-left">&nbsp;&nbsp;我的订单</div>
      <div class="order-right">全部订单&nbsp;&nbsp;<van-icon name="arrow" size="13"/></div>
     </div>
     <div class="detail">
       <div class="d-box f">
         <router-link :to="{path:'/order',query:{active:0}}">
           <van-icon name="coupon-o" size="40"/>
         <p>待付款</p>
         </router-link>
         </div>
       <div class="d-box">
         <router-link :to="{path:'/order',query:{active:1}}">
           <van-icon name="shop-collect-o" size="40"/>
         <p>待收货</p>
         </router-link>
       </div>
       <div class="d-box">
         <router-link :to="{path:'/order',query:{active:2}}">
           <van-icon name="comment-o" size="40"/>
         <p>待评价</p>
         </router-link>
       </div>
       <div class="d-box">
        <router-link :to="{path:'/order',query:{active:3}}">
           <van-icon name="search" size="40"/>
         <p>退换修</p>
        </router-link>
       </div>
     </div>

  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {
  name: "Personal"
};
</script>
<style>
.personal .personl-header{
  width:100%;
  height:150px;
  overflow:hidden;
  background-color:#FF7F50;
  position:relative;
}
.personal .personl-header img{
  width:50px;
  height:50px;
  border-radius:50%;
  display:inline-block;
  position:absolute;
  left:10px;
  bottom:10px;
}
.personal .setting{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.personal .personal-name{
  position:absolute;
  left: 80px;
  bottom: 30px;
  color: white;
}
.order-left{
  /* display: inline-block; */
  position: absolute;
  /* float: left; */
  left: 0
}
.order-right{
  /* display: inline-block; */
  position: absolute;
  /* float: right; */
  right:10px;
}
.order{
  position: relative;
  height: 25px;
  background-color: white;
  border-bottom: 1px solid rgba(220, 220, 220);
  /* overflow: hidden; */
}
.detail{
  /* width: 100%; */
  height: 100px;
  overflow: hidden;
  background-color: white;
   margin-left: -5px;
  margin-right: -5px;
}
.detail div{
 width: 25%;
 padding: 0 5px;
 float: left;
 box-sizing: border-box;
 text-align: center;
 margin-top: 10px;
}
</style>
