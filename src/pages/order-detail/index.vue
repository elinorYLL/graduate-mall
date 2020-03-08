<template>
    <div class="od">
         <div class="od-header">
              <router-link to='/order'>
                 <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;订单详情</p>
         </div>
         <div class="od-address">
            <p>&nbsp;&nbsp;&nbsp;elinor&nbsp;&nbsp;&nbsp;15813360357
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;地址:广东省广州市华南农业大学华山学生宿舍9栋
            </p>
         </div>
         <div class="od-card">
                <van-card
                num="2"
                tag="标签"
                 price="2.00"
                 desc="描述信息"
                    title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"/>
         </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
    export default{
        name:"order-detail"
    }
</script>
<style>
.od .od-header{
    position:relative;
    height:150px;
    background-color:orange;
}

.od .od-header p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.od .od-address{
    width:100%;
    height:100px;
    background-color:white;
}
.od .od-address p{
    padding-top:10px;
}
.od .od-card{
    margin-top:10px
}
</style>