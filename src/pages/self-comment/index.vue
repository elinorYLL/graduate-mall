<template>
    <div class="self-comment">
        <div class="sc-header">
              <router-link to='/order'>
                 <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;发表评论</p>
             <p class="suss" @click="suss()">发布</p>
        </div>
        <div class="title">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品标题
        </div>
        <div class="des"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描述相符程度&nbsp;&nbsp;&nbsp;&nbsp;
            <van-rate
                v-model="value"
                :size="25"
                 color="#ee0a24"
                 void-icon="star"
                 void-color="#eee"/>
        </div>
        <div class="des-d">
            <van-tag color="#f2826a" plain round size="large">产品功能</van-tag>
             <van-tag color="#f2826a" plain round size="large">商品质量</van-tag>
              <van-tag color="#f2826a" plain round size="large">外观材质</van-tag>
              <van-field
                 v-model="mes"
                 rows="2"
                 autosize
                 label="留言"
                 type="textarea"
                 maxlength="400"
                 placeholder="请输入留言"
                 show-word-limit/>
             <div>
                <van-uploader v-model="fileList" multiple />
               </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Rate,Tag ,Uploader,Field,Toast } from 'vant';

Vue.use(Rate)
   .use(Tag)
   .use(Uploader)
   .use(Field)
   .use(Toast);
    export default{
        name:'self-comment',
         data() {
             return {
                value: 5,
                 fileList:[],
                 message:'',
                 mes:''
            };
  },
        methods:{
           suss(){
               this.$toast({
               message:"发布成功"
           })
           }
         }
    }
</script>
<style>
.self-comment{
    height:100vh;
    background-color:white;
}
.self-comment .sc-header{
    position:relative;
}

.self-comment .sc-header p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.self-comment .suss{
    position:absolute !important;
    right:8px;
    top:4px !important;
    color:orange;
}
.self-comment .sc-header{
    background-color: white;
}
.self-comment .des{
    height:30px;
    background-color: white;
    border-bottom:1px solid rgba(220, 220, 220);
}
.self-comment .title{
     background-color: white;
     margin:10px;
}
.self-comment .des-d{
    /* margin-top:10px; */
    padding-top:20px;
    height:auto;
    width:100%;
    background-color: white;
}
.self-comment .van-uploader{
    margin-left:10px;
}
.self-comment  .van-tag--default.van-tag--plain{
    position:relative;
    top:-3px;
    margin:6px;
}
</style>