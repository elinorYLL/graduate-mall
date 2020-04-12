<template>
  <div class="product">
    <van-tabs v-model="activeName" scrollspy sticky title-active-color="orange">
      <van-tab title="商品" name="good">
        <van-icon name="arrow-left" size="30" class="product-icon" />
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(image,index) in images" :key="index" :style="[obj,obj1]">
            <img v-lazy="image.url" class="swipe-img" @click="productImgClick()" />
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">
            {{current+1}}/{{size}}
          </div>
        </van-swipe>
        <div class="product-detail">
          <p class="product-name">{{product.name}}</p>
          <p class="product-comment">{{product.briefIntro}}</p>
          <p class="product-price">¥<span>{{product.shopPrice}}</span></p>
        </div>
        <!-- product-detail -->
        <div class="product-intro">
          <van-tabs v-model="active" scrollspy sticky>
            <van-tab v-for="(item,index) in icon" :key="index">
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon :name="item.icon" size="20" class="product-intro-icon" />
                  <span class="product-span">{{item.name}}</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">
                  <div class="PI-detail">
                    <p class="title">关键参数</p>
                     <p v-for="(item,index) in detailArr" :key="index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.details}}</p>
                  </div>
                </van-popup>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="product-sku">
            <!-- :initial-sku="initialSku"  -->
          <van-sku 
          v-model="showBase" 
          :sku="skuDataList.sku" 
          :goods="skuDataList.goods_info" 
          :goods-id="skuDataList.goods_id" 
          :hide-stock="skuDataList.sku.hide_stock" 
          :quota="skuDataList.quota" 
          :quota-used="skuDataList.quota_used" 
        
          reset-stepper-on-hide 
          reset-selected-sku-on-hide 
          disable-stepper-input 
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator" 
          @buy-clicked="onBuyClicked" 
          @add-cart="onAddCartClicked"/>

          <van-row class="row-height line" @click="showBase = true;skuDetail()">
            <van-col span="4" offset="1">已选</van-col>
            <van-col span="12" offset="2">小米9紫色x1</van-col>
            <van-col span="6" offset="5" class="product-choice-icon">
              <van-icon name="arrow" />
            </van-col>
          </van-row>

          <van-cell is-link @click="showPop">
            <van-row class="row-height line">
              <van-col span="4" offset="1">送至</van-col>
              <van-col span="12" offset="2">请选配送地址</van-col>
              <van-col span="6" offset="5" class="product-choice-icon">
                <van-icon name="arrow" />
              </van-col>
            </van-row>
          </van-cell>
          <van-popup v-model="Sshow" closeable round position="bottom" :style="{ height: '66%' }" class="sendAddress"> 内容</van-popup>
          <van-row class="row-height">
            <van-col span="6" offset="1">
              <van-icon name="passed" color="orange" />本店自营</van-col>
            <van-col span="6">
              <van-icon name="passed" color="orange" />本店发货</van-col>
            <van-col span="10">
              <van-icon name="passed" color="orange" />7天无理由退货
            </van-col>
            <van-col span="6" class="product-choice-icon">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </div>
        <!-- product-intro -->
      </van-tab>
      <!-- 商品栏的 -->
      <van-tab title="评价" name="comment">
        <div class="comment-box">
          <div class="box" v-for="(item,index) in realC" :key="index">
            <div class="comment-person-pic">
              <img :src=item.userPic[0].url>
            </div>
            <div class="comment-name">{{item.user.name}}</div>
            <p class="comment-date">{{item.time}}</p>
            <p class="comment-details">{{item.content}}</p>
            <div class="comment-img">
              <img :src="pic.url" alt="" v-for="(pic,picIndex) in item.pictures"  :key="picIndex">
            </div>
          </div>
        </div>
       <router-link :to="{name:'comment',params:{id:this.id}}">
          <p class="comment-more">
          更多评论<van-icon name="play" color="	#00008B"/>
        </p>
       </router-link>
      </van-tab>
      <van-tab title="详情" name="details">
        <!-- <img src="./timg.jfif"> -->
        <div class="details-img">
            <img :src="itemAd.url" alt="" v-for="(itemAd,indexAd) in adPic" :key="indexAd">
        </div>
        <p class="comment-intro">
          <span>划线价:</span>&nbsp;&nbsp;&nbsp;商品展示的划线价格为参考价，该价格可能是品牌专柜标价，商品吊牌或由品牌提供商的正品零售价（如厂商指导价，建议零售价等）；由于地区，市场，时间等和市场行情波动，品牌的专柜价格，吊牌价与您购买时展示的不一致，该价格仅供参考。
        </p>
      </van-tab>
      <van-tab title="推荐" name="recommend" class="recommend">
        <p class="recommend-title">猜你喜欢</p>
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
      </van-tab>
    </van-tabs>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服"  @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车"  @click="onClickIcon" />
    <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
    <!-- <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" /> -->
</van-goods-action>
  </div>
</template>
<script>
import Vue from 'vue';
import { Sku, Col, Row, Swipe, SwipeItem, Lazyload, Icon, ImagePreview, Tab, Tabs, Popup, Cell, CellGroup,GoodsAction, GoodsActionIcon, GoodsActionButton  } from 'vant';
import skuData from './data.js';
import {getProductById} from '../../api/getProductDetail.js';
import {getSkuById} from '../../api/getSkuById.js';
import {getComment} from '../../api/getComment.js';
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Icon)
  .use(ImagePreview)
  .use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Cell)
  .use(CellGroup)
  .use(Col)
  .use(Row)
  .use(Sku)
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);


export default {
  name: "Product",
  data () {
    return {
      name:["CPU型号","CPU主频","后置摄像头","前置摄像头","屏幕尺寸","屏幕分辨率","运行内存","存储容量","电池容量","网络类型","网络模式","机身厚度"],
      // 详细的介绍
      detail:'',
      detailArr:[],
      icon:[{"icon":"smile-o","name":"超长待机"},{"icon":"diamond-o","name":"高清拍摄"},{"icon":"expand-o","name":"超大屏幕"},{"icon":"good-job-o","name":"屏幕分辨率"},{"icon":"eye-o","name":"高清拍摄"}],
      // banner图的张数
      size:0,
      current: 0,
      show: false,
      images: [],
      titles: [
        "商品",
        "评价",
        "详情",
        "推荐"
      ],
      obj: {
        width: '100vw'
      },
      obj1: {
        height: "300px"
      },
      activeName: 'good',
      scrollTop: 0,
      trunOn: false,
      active: 2,
      Sshow: false,
      s: false,
      skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      id:'',
      pic:[],
      banner:[],
      product:{},
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      choiceList:[],
      comment:[],
      realC:[],
      adPic:[],
      customSkuValidator: () => '请选择xxx!',
      skuDataList:{},
      resSku:[]
    }
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
    productImgClick () {
      ImagePreview(this.banner);
    },
    showPopup () {
      this.trunOn = true;
    },
    onBuyClicked (data) {
      this.$toast('buy:' + JSON.stringify(data));
      console.log(JSON.stringify(data))
    },
    onAddCartClicked (data) {
      this.$toast('add cart:' + JSON.stringify(data));
    },
    showPop () {
      this.Sshow = true;
    },
     onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    getProduct(){
      getProductById(this.id).then(res=>{
          if(res){
            console.log("hhh")
            console.log(res);
            this.product=JSON.parse(JSON.stringify(res.data));
            // this.detail=JSON.parse(JSON.stringify(res.data.detail));
             this.detail=JSON.parse(JSON.stringify(res.data.detailIntro));
             this.detailArr=this.detail.split(',')
             console.log(this.detailArr);
             let arr1=[];
             this.detailArr.forEach(element=>{
                console.log('enter2');
                  var json={
                 "details":element
               }
               arr1.push(json);
             })
             console.log(arr1)
             console.log('wwwwwwwwwwwwwwwwwwwwwwww')
             console.log(this.name);
             for(var i=0;i<this.name.length;i++){
               arr1[i]["name"]=this.name[i];
             }

             console.log('arr1');
             console.log(arr1);
             this.detailArr=JSON.parse(JSON.stringify(arr1));
             console.log('qqqqqqqqqqqqq')
             console.log(this.detailArr);
            console.log(this.detail);
            console.log(this.product);
            this.pic=JSON.parse(JSON.stringify(res.data.pictures));
            console.log(this.pic);
            this.pic.forEach(element=>{
              if(element.pictureStatus=="01"){
                this.images.push(element);
                this.banner.push(element.url);
              }
              if(element.pictureStatus=="02"){
                this.adPic.push(element);
              }
            })
           
            console.log(this.images);
            this.size=this.images.length;
          }
      })
    },
    skuDetail(){
     console.log('hhh我')
      getSkuById(this.id).then(res=>{
          if(res)
          {
            console.log('我得到了sku的信息')
            this.resSku=res.data.skuList;
             console.log(this.resSku);
             let proChoic=[];
            // this.resSku.forEach(element=>{
            //   proChoic.push(element.propertyChoices);
            // })
            // console.log(proChoic);

               this.resSku.forEach(element=>{
              element.propertyChoices.forEach(e=>{
                proChoic.push(e);
              })
            })
            console.log('我的妈')
             console.log(proChoic);
              // let pro=new Set();
              // let proName=new Set();
          
              let o={}
             proChoic.forEach(e=>{
              pro.set(e.property.name,''+e.propertyId);
              // o.set(e.property.name,''+e.name);
              if(o[e.property.name]&&e.name!=o[e.property.name].split("  ")[1].substr(5)){
                console.log('')
                o[e.property.name]+=','+'id:'+e.id+'  name:'+e.name
              }
              else{
                  o[e.property.name]='id:'+e.id+'  name:'+e.name;
              }

             })
            //  console.log(pro);
             console.log(o);
            //  console.log(proName);
           
          }
      })
    },
    getCommentList(){
      console.log('我是comment的')
      console.log(this.id);
      getComment(this.id).then(res=>{
        if(res)
        {
          console.log(res.data);
          this.comment.push(res.data);
          console.log('暂时的数据')
          console.log(this.comment);
          var arr=[];
          console.log(this.comment instanceof(Array));
        if(this.comment[0].comments.length>=3);
         arr=this.comment[0].comments.slice(0,3);
          console.log('截取出来的');
           console.log(arr);
           this.realC=JSON.parse(JSON.stringify(arr));
           console.log(this.realC);
        }
      })
    }
  },
  created(){
    // 这里获取router-link传过来的id
    this.id=this.$route.params.id;
  console.log('我是id');
    console.log(this.id);
    this.getProduct();
    this.getCommentList();
    this.skuDataList=JSON.parse(JSON.stringify(skuData));
    console.log('我是赋值以后的结果')
    console.log(this.skuDataList)
  }
}
</script>
<style>
.product{
   background-color: rgba(245, 245, 245);
}
.product .van-swipe-item {
  width: 100vw;
  max-width: 637px;
}
.product .swipe-img {
  width: 100%;
  height: 100%;
  position: relative;
}
.product .custom-indicator {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.product {
  position: relative;
  max-width: 637px;
  background-color: white;
}
.product .product-icon {
  position: absolute;
  z-index: 1000;
  top: 10px;
  left: 9px;
}
.product .van-sticky {
  height: 0;
  transition: height 2s;
  -moz-transition: height 2s; /* Firefox 4 */
  -webkit-transition: height 2s; /* Safari 和 Chrome */
  -o-transition: height 2s; /* Opera */
}
.product .van-tabs__line {
  height: 0;
}
.product .product-name {
  /* font-weight: bold; */
  font-size: 23px;
  letter-spacing: 5px;
  margin-bottom: 5px;
}
.product .product-detail {
  margin: 5px;
}
.product .product-comment {
  line-height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.product .product-price {
  color: orange;
}
.product .product-price > span {
  font-size: 23px;
}
.product .product-intro-icon {
  position: relative;
  display: block;
  left: 20px;
  /* top: -1px; */
}
.product .product-span {
  display: block;
  position: relative;
  /* text-align: center; */
  /* top: -2px; */
}
.product-intro {
  /* padding-top: 20px; */
  height: 50px;
}
.product .van-cell {
  padding: 0;
}
.product .van-cell__right-icon {
  display: none;
}
.product .product-sku {
  width: 95%;
  border-radius: 10px;
  background-color: rgba(245, 245, 245);
  margin: 0 auto;
  border: 1px solid rgba(220, 220, 220);
  overflow: hidden;
}
.product .van-row {
  position: relative;
}
.product .product-choice-icon {
  position: absolute;
  right: -66px;
}
.product .row-height {
  padding-top: 4px;
  padding-bottom: 5px;
  height: 30px;
  background-color: rgba(245, 245, 245);
  color: #808080;
  font-size: 15px;
}
.product .line {
  border-bottom: 1px solid rgba(220, 220, 220);
}
.product .van-popup--bottom {
  text-align: center;
}
.product .box {
  width: 250px;
  height: 150px;
  background-color: rgba(245, 245, 245);
  /* display: inline-block; */
  margin: 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(220, 220, 220);
  border-radius: 10px;
}
.product .comment-box {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  /* -webkit-overflow-scrolling: touch; */
}
.product .comment-box::-webkit-scrollbar{
  display: none;
}
.product .comment-person-pic{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin:10px;
}
.product .comment-person-pic img{
  width: 100%;
  height: 100%;
}
.product .comment-name{
  position: absolute;
  left: 30%;
  top: 10px;
}
.product .comment-date{
  position: absolute;
  left: 30%;
  top: 40px;
}
.product .comment-details{
  position: absolute;
  left: 10%;
  top: 70px;
}
.product .comment-img{
  position: absolute;
  left: 10%;
  top:80px;
  width: 150px;
  height: 40px;
}
.product .comment-img img{
  margin-top: 20px;
  width:45%;
  height: 100%;
}
.product .comment-more{
    width: 25%;
    margin: 0 auto;
    color:	#00008B;
}
.product .comment-intro{
  margin: 30px 10px;
  font-size: 13px;
  color:  rgba(220, 220, 220);

}
.product .comment-intro span{
  font-weight: bold;
  color: black;
}
.product .details-img{
  margin-top: 30px;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.details-img img{
  width: 100%;
}
.product .recommend-title{
  margin:30px 10px;
  padding-top: 30px;
  font-size: 18px;
  font-weight: bold;
}
.product .recommend{
  background-color: #eee;
}
.product .recommend-goods{
  width: 95%;
  margin:0 auto;
  overflow: hidden;
}
.product .re-good{
  width: 45%;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin:5px;
  display: inline-block;
}
.product .re-good img{
  width: 100%;
  height: 60%
}
.product .recommend-intro,.recommend-price{
  margin:10px;
}
.product .recommend-price{
  color: red;
}
/* .van-tabbar--fixed{
  display: none;
} */
/* .demo-sku {
  .sku-container {
    padding: 0 15px;
  }
} */
.product .van-popup--bottom{
  text-align:left;
}
.product .sendAddress.van-popup--bottom{
  text-align:center;
}
.product .title{
  text-align: center;
}
.product .van-tabs__line{
  background-color: transparent !important;
}
</style>
