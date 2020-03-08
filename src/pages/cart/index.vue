<template>
  <div class="cart">
   <div class="cart-header">购物车</div>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-card num="1" price="49.00" desc="米9街头风保护壳" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" class="cart-card">
       
  <div slot="tags">
     <van-checkbox name="a"></van-checkbox>
    <van-tag plain type="danger">黑色</van-tag>
  </div>
  <div slot="footer">
       <van-stepper v-model="stepper" slot="input" />
  </div>

</van-card>
  <van-card num="1" price="49.00" desc="米9街头风保护壳" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" class="cart-card">
  <div slot="tags">
     <van-checkbox name="b"></van-checkbox>
    <van-tag plain type="danger">黑色</van-tag>
  </div>
  <div slot="footer">
       <van-stepper v-model="stepper" slot="input" />
  </div>
</van-card>
  <van-card num="1" price="49.00" desc="米9街头风保护壳" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" class="cart-card">
   
  <div slot="tags">
    <van-checkbox name="c"></van-checkbox>
    <van-tag plain type="danger">黑色</van-tag>
  </div>
  <div slot="footer">
       <van-stepper v-model="stepper" slot="input" />
  </div>
</van-card>
      </van-checkbox-group>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  为您推荐
</van-divider>
          <div class="recommend-goods">
              <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
              <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
              <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
               <div class="re-good">
                <img src="./mi9.jpg" alt="">
                <p class="recommend-intro">灵闪耀动，一见倾心，尽显奢华</p>
                <p class="recommend-price">¥499</p>
              </div>
          </div>
     <div class="cart-footer">
      <van-row type="flex" justify="space-around">
  <van-col span="4"><van-button class="button" type="primary" @click="checkAll">全选</van-button></van-col>
  <van-col san="4" offset="1"> <van-button class="button" type="info" @click="toggleAll">反选</van-button></van-col>
  <van-col span="8"> <p>合计：</p></van-col>
   <van-col span="6" offset="1"><van-button type="warning">结算</van-button> </van-col>
  </van-row>
     </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Card , Button, Tag,Form,Field,Stepper,Checkbox, CheckboxGroup,Col, Row, Divider} from 'vant';

Vue.use(Card)
    .use(Button)
    .use(Tag)
    .use(Form)
    .use(Field)
    .use(Stepper)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Col)
    .use(Row)
    .use(Divider);
  
export default {
  name: "Cart",
  data(){
    return{
      stepper:1,
      result:[]
    }
  },
  methods:{
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  }
};
</script>
<style>
/* .cart{
  height:calc(100vh - 50px);
} */
.cart .cart-header{
  width:100%;
  height:54px;
  text-align:center;
  background-color:#F5F5F5;
  line-height:54px;
}
.cart .van-cell{
  background-color:unset;
}
.van-stepper__minus--disabled, .van-stepper__plus--disabled{
  background-color:#f2f3f5;
}

.cart .van-checkbox{
  position:relative;
  left:-109px;
}
.cart .cart-footer{
  position:fixed;
  bottom:50px;
  z-index:1000;
  height: 50px;
  background-color: white;
  width: 100%;
  padding-top: 3px;
  overflow: hidden;

}
/* .cart .button{
  width:16px !important;
  height:32px;
  border-radius:50%;
} */
.cart-footer p{
  display: inline-block;
  margin-left: 50px;
}
.cart .pay{
  display: inline-block;
  width: 30%;
  height: 100%;
  background-color: blue;
  text-align: center;
  position:relative;
  top:-14px;
  right:-10px;
}
.re-good{
  width: 45%;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin:5px;
  display: inline-block;
}
.re-good img{
  width: 100%;
  height: 60%
}
.recommend-intro,.recommend-price{
  margin:10px;
}
.recommend-price{
  color: red;
}
</style>
