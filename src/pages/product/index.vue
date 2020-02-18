<template>
  <div class="product">
    <van-tabs v-model="activeName" scrollspy sticky title-active-color="orange">
      <van-tab title="商品" name="good">
        <van-icon name="arrow-left" size="30" class="product-icon" />
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(image,index) in images" :key="index" :style="[obj,obj1]">
            <img v-lazy="image" class="swipe-img" @click="productImgClick()" />
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">
            {{current+1}}/4
          </div>
        </van-swipe>
        <div class="product-detail">
          <p class="product-name">小米9</p>
          <p class="product-comment">4G双卡全网通高速网络/骁龙855Plus期间处理器</p>
          <p class="product-price">¥<span>3799</span></p>
        </div>
        <!-- product-detail -->
        <div class="product-intro">
          <van-tabs v-model="active" scrollspy sticky>
            <van-tab>
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon name="smile-o" size="20" class="product-intro-icon" />
                  <span class="product-span">CPU型号</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">内容</van-popup>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon name="diamond-o" size="20" class="product-intro-icon" />
                  <span class="product-span">超长待机</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">内容</van-popup>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon name="expand-o" size="20" class="product-intro-icon" />
                  <span class="product-span">高清拍摄</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">内容</van-popup>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon name="good-job-o" size="20" class="product-intro-icon" />
                  <span class="product-span">超大屏幕</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">内容</van-popup>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <van-cell is-link @click="showPopup">
                  <van-icon name="eye-o" size="20" class="product-intro-icon" />
                  <span class="product-span">屏幕分辨率</span>
                </van-cell>
                <van-popup v-model="trunOn" round position="bottom" :style="{ height: '80%' }">内容</van-popup>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="product-sku">
          <van-sku v-model="showBase" :sku="skuData.sku" :goods="skuData.goods_info" :goods-id="skuData.goods_id" :hide-stock="skuData.sku.hide_stock" :quota="skuData.quota" :quota-used="skuData.quota_used" :initial-sku="initialSku" reset-stepper-on-hide reset-selected-sku-on-hide disable-stepper-input :close-on-click-overlay="closeOnClickOverlay" :custom-sku-validator="customSkuValidator" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
          <van-row class="row-height line" @click="showBase = true">
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
          <van-popup v-model="Sshow" closeable round position="bottom" :style="{ height: '66%' }"> 内容</van-popup>
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
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </van-tab>
      <van-tab title="详情" name="details">
        详情
      </van-tab>
      <van-tab title="推荐" name="recommend">
        推荐
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue';
import { Sku, Col, Row, Swipe, SwipeItem, Lazyload, Icon, ImagePreview, Tab, Tabs, Popup, Cell, CellGroup } from 'vant';
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
  .use(Sku);
import skuData from './data.js';

export default {
  name: "Product",
  data () {
    return {
      current: 0,
      show: false,
      images: [
        require("./mi9.jpg"),
        require("./mi9.jpg"),
        require("./mi9.jpg"),
        require("./mi9.jpg")
      ],
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
      showBase: true,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      customSkuValidator: () => '请选择xxx!',
    }
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
    productImgClick () {
      ImagePreview(this.images);
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
    }
  }
}
</script>
<style>
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
.van-cell {
  padding: 0;
}
.van-cell__right-icon {
  display: none;
}
.product-sku {
  width: 95%;
  border-radius: 10px;
  background-color: rgba(245, 245, 245);
  margin: 0 auto;
  border: 1px solid rgba(220, 220, 220);
}
.van-row {
  position: relative;
}
.product-choice-icon {
  position: absolute;
  right: -66px;
}
.row-height {
  padding-top: 4px;
  padding-bottom: 5px;
  height: 30px;
  background-color: rgba(245, 245, 245);
  color: #808080;
  font-size: 15px;
}
.line {
  border-bottom: 1px solid rgba(220, 220, 220);
}
.van-popup--bottom {
  text-align: center;
}
.box {
  width: 200px;
  height: 150px;
  background-color: rgba(245, 245, 245);
  /* display: inline-block; */
  margin: 10px;
}
.comment-box {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  /* -webkit-overflow-scrolling: touch; */
}
</style>
