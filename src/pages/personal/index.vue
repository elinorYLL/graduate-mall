<template>
  <div class="personal">
    <!-- @touchmove.prevent -->
    <div class="personal-content">
       <div class="personl-header">
       <img src="./mi9.jpg">
     </div>
     <p class="personal-name">elinor</p>
     <div class="order">
      <div class="order-left">&nbsp;&nbsp;个人中心</div>
      <!-- <div class="order-right">全部订单&nbsp;&nbsp;<van-icon name="arrow" size="13"/></div> -->
     </div>
     <div class="detail">
       <div class="d-box f">
         <router-link :to="{path:'/order',query:{active:0}}">
           <van-icon name="coupon-o" size="40" color="orange"/>
         <p>待付款</p>
         </router-link>
         </div>
       <div class="d-box">
         <router-link :to="{path:'/order',query:{active:1}}">
           <van-icon name="shop-collect-o" size="40" color="orange"/>
         <p>待收货</p>
         </router-link>
       </div>
       <div class="d-box">
         <router-link :to="{path:'/order',query:{active:2}}">
           <van-icon name="comment-o" size="40" color="orange"/>
         <p>待评价</p>
         </router-link>
       </div>
       <div class="d-box">
        <router-link :to="{path:'/order',query:{active:3}}">
           <van-icon name="search" size="40" color="orange"/>
         <p>退换修</p>
        </router-link>
       </div>
      <div class="d-box">
        <router-link to="/setting">  
       <van-icon name="setting-o" size="40" class="setting" color="orange"/>
        <p>设置</p>
       </router-link>
      </div>
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
.personal{
  width: 100vw;
  height: calc(100vh - 50px);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./background.jpg');
  position: relative;
}
/* .personal .personl-header{
  width:100%;
  height:150px;
  overflow:hidden;
  background-color:#FF7F50;
  position:relative;
}
.personal .personal-content{
  padding-top: 100px;
  width: 90%;
  margin:0 auto;
  height: 600px;
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

  position: absolute;

  left: 0
}
.order-right{
  position: absolute;
  right:10px;
}
.order{
  position: relative;
  height: 25px;
  background-color: white;
  border-bottom: 1px solid rgba(220, 220, 220);
}
.detail{
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
} */
.personal-content{
  width: 90%;
  height: 450px;
  background-color: white;
  position:absolute;
  top: 120px;
  left: 50%;
  margin-left: -45%;
}
.personal-content .personl-header{
  text-align: center;
}
.personal-content .personl-header img{
  width:90px;
  height:90px;
  border-radius:50%;
  display:inline-block;
  position: relative;
  top: -45px;
  border:3px solid 	#DCDCDC;
}
.personal-content .personal-name{
  text-align: center;
  position: relative;
  top: -40px;;
}
.personal .detail{
  /* border:1px solid red; */
  overflow: hidden;
}
.personal .detail .d-box{
  width: 33%;
  float: left;
  padding:0 30px;
  margin-top: 10px;
  height: 100px;
}
.order{
  position: relative;
}
.personal .order-left{
  font-size: 20px;
}
.personal .order-right{
  position: absolute;
  right: 0;
  top: -1px;
  font-size: 20px;
}
</style>
