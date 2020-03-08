<template>
    <div class="ed">
        <div class="ed-header">
            <router-link to='/setting'>
                <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;我的收货地址</p>
        </div>
     <form >
    <div class="msg">
        <p>用户名:</p>
        <input type="text" name="username" v-model="input1" class="input">
       </div>

       <div class="msg">
         <p>电话</p>
         <input type="text" name="phone" v-model="input2" class="input">
           <!-- {{msg[0].tel}} -->
        </div>
       <div class="msg">
         <p>地址</p>
          <input type="text" name="address" v-model="input3" class="input">
           <!-- {{msg[0].address}} -->
        </div>
         </form>
         <div class="del">
        删除收货地址
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Form} from 'vant';
Vue.use(Form);
export default{
    name:"ade",
    data(){
        return{
            msg:'',
            input1:'张三',
            input2:'15813360357',
            input3:'东西南北一条街588号乐呵呵花园388房'
        }
    },
    mounted(){
    this.msg=this.$route.params.key;
    console.log(this.msg);
    }

}
</script>
<style>
.ed-header p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.ed .ed-header{
    background-color: white;
}
.ed .msg{
    height:52px;
    width:100%;
    background-color:white;
    line-height:50px;
    border-bottom:1px solid rgba(220, 220, 220);
    display:flex;
}
.ed .msg p{
    display:inline-block;
    width:0px;
    overflow:hidden;
}
.ed .input{
     display:inline-block;
     width:auto;
     flex:1;
}
.ed .del{
    height:52px;
    background-color:white;
    width:100%;
    line-height:52px;
    margin-top:20px;
    color:red;
}
</style>