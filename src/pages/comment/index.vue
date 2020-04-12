<template>
    <div class="comment">
        <div class="head">
            <!-- :to="{name:'comment',params:{id:this.id}} -->
          <router-link :to="{name:'product',params:{id:this.id}}">

                <van-icon name="arrow-left" size="30" color="rgba(220, 220, 220)" class="comment-icon"/>
          </router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;商品评价
        </div>
        <van-tabs type="card" @click="onClick">
            <van-tab title="全部">
                <div class="comment-show" v-for="(item,index) in comment" :key="index">
                    <div class="comment-head">
                        <img :src="item.userPic[0].url">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">{{item.user.name}}</p>
                    <p class="comment-content">{{item.content}}</p>
                    <div class="comment-img" v-for="(pic,picIndex) in item.pictures" :key="picIndex">
                        <img :src="pic.url" class="c-IMG" @click="getImg(pic.url)">
                    </div>
                  </div>
                </div>
                </van-tab>
            <van-tab title="有图">
                 <div class="comment-show" v-for="(item,index) in picComment" :key="index" v-if="picComment.length!=0">
                    <div class="comment-head">
                        <img :src="item.userPic[0].url">
                    </div>
                  <div class="comment-right">
                        <p class="comment-name">{{item.user.name}}</p>
                    <p class="comment-content">{{item.content}}</p>
                    <div class="comment-img" v-for="(pic,picIndex) in item.pictures" :key="picIndex">
                        <img :src="pic.url" class="c-IMG" @click="getImg(pic.url)">
                    </div>
                  </div>
                </div>
                <div v-if="picComment.length==0">
                        暂无内容
                </div>
            </van-tab>
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
import {getComment} from '../../api/getComment.js';
import {getCommentWithPic} from '../../api/getCommentWithPic.js';
Vue.use(Tab)
    .use(Tabs)
    .use(ImagePreview);
export default {
    data(){
        return{
            id:'',
            comment:[],
            picComment:[]
        }
    },
    methods:{
        getImg(url){
            ImagePreview(
            //    [ require("./mi9.jpg")]
            [url]
                )
        },
        getCommentList(){
            getComment(this.id).then(res=>{
                if(res)
                {
                    console.log(res);
                    this.comment=res.data.comments;
                    console.log(this.comment);
                }
            })
        },
        getCommentWithPicList(){
            console.log('我是被点击了的');
            getCommentWithPic(this.id).then(res=>{
                if(res){
                    console.log(res);
                }
            })
        },
        onClick(name,title){
            if(title=="有图")
            {
                 getCommentWithPic(this.id).then(res=>{
                if(res){
                    console.log(res);
                    this.picComment=res.data.comments;
                    console.log(this.picComment);
                }
            })
            }
        }
    },
    created(){
       this.id= this.$route.params.id;
       console.log(this.id);
       this.getCommentList()
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
    overflow: hidden;
}
.comment .c-IMG{
    /* display:inline-block; */
    width: 100%;
    height: 100%;
    /* margin-right: 10px; */
    float: left;
    padding:10px;
}

</style>