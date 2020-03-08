<template>
    <div class="comment">
        <div class="head">
          <router-link to="/product/1">
                <van-icon name="arrow-left" size="30" color="rgba(220, 220, 220)" class="comment-icon"/>
          </router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;商品评价
        </div>
        <van-tabs type="card">
            <van-tab title="全部">
                <div class="comment-show">
                    <div class="comment-head">
                        <img src="./mi9.jpg" alt="">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">潘浩</p>
                    <p class="comment-content">小米9不错，我最喜欢就是小爱同学和门禁卡功能了，太喜欢了。</p>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                  </div>
                </div>
                 <div class="comment-show">
                    <div class="comment-head">
                        <img src="./mi9.jpg" alt="">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">潘浩</p>
                    <p class="comment-content">小米9不错，我最喜欢就是小爱同学和门禁卡功能了，太喜欢了。</p>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                  </div>
                </div>
                 <div class="comment-show">
                    <div class="comment-head">
                        <img src="./mi9.jpg" alt="">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">潘浩</p>
                    <p class="comment-content">小米9不错，我最喜欢就是小爱同学和门禁卡功能了，太喜欢了。</p>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                  </div>
                </div>
                 <div class="comment-show">
                    <div class="comment-head">
                        <img src="./mi9.jpg" alt="">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">潘浩</p>
                    <p class="comment-content">小米9不错，我最喜欢就是小爱同学和门禁卡功能了，太喜欢了。</p>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                  </div>
                </div>
                 <div class="comment-show">
                    <div class="comment-head">
                        <img src="./mi9.jpg" alt="">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">潘浩</p>
                    <p class="comment-content">小米9不错，我最喜欢就是小爱同学和门禁卡功能了，太喜欢了。</p>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                    <div class="comment-img">
                        <img src="./mi9.jpg" class="c-IMG" @click="getImg()">
                    </div>
                  </div>
                </div>
                </van-tab>
            <van-tab title="有图">内容 2</van-tab>
            <van-tab title="质量不错">内容 3</van-tab>
            <van-tab title="良心产品">内容 4</van-tab>
            <van-tab title="服务周到">内容 5</van-tab>
            <van-tab title="动力强">内容 6</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs,ImagePreview } from 'vant';
Vue.use(Tab)
    .use(Tabs)
    .use(ImagePreview);
export default {
    methods:{
        getImg(){
            ImagePreview(
               [ require("./mi9.jpg")]
                )
        }
    }
}
</script>
<style>
.comment{
    background-color: white;
}
.comment .head{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(220, 220, 220);
    position: fixed;
    top: 0;    
    z-index: 1000;
    background-color: #F5F5F5;                
}
.comment .comment-icon{
    position: relative;
    top: 10px;
}
.comment .van-tabs,.comment .van-tabs--card{
    margin-top:10px;
}
.comment .van-tabs__nav.van-tabs__nav--card{
    height: 50px;
    margin-top: 44px;
}
.comment .van-tabs__wrap{
    overflow:unset;
}
.comment .van-tab.van-ellipsis{
    margin:10px;
    border:1px solid #FFB6C1;
    background-color:	#FFC0CB;
    color:black;
}
.comment .van-tabs--card>.van-tabs__wrap{
    height: auto;
}
.comment .van-tabs__nav--card,.comment  .van-tab:last-child{
    border-right: 1px solid#FFE4C4;
}
.comment .van-tabs__nav{
    background-color: transparent;
}
.comment .van-tabs__nav--card{
    border:unset;
}
.comment .van-tab--active{
    color:white !important;
    background-color: 	#DC143C !important;
}
.comment .comment-show{
   height: auto;
   width: 100vw;
   display: flex;
   border-bottom: 1px solid rgba(220, 220, 220);
    /* position: relative; */
}
.comment .comment-head{
    width:40px;
    height: 40px;
    margin:10px;

}
.comment .comment-head>img{
    width: 100%;
    height: 100%;
}
.comment .comment-right{
    flex:1;
    /* min-width: 0; */
    overflow: hidden;
    /* 右边内容超出的话，就会导致左边固定的宽度大小不起重要了，这时只需要加上min-width: 0;就可以了 */
}
.comment .comment-name{
   margin:10px;
}
.comment .comment-content{
   margin:10px;
}
.comment .comment-img{
    width: 90px;
    height: 90px;
    display: inline-block;
    padding-bottom: 10px;
}
.comment .c-IMG{
    width: 100%;
    height: 100%;

}

</style>