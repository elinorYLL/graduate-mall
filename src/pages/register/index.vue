<template>
  <div class="register" @touchmove.prevent>
   <div class="register-header">
         <van-icon name="arrow-left" size="30" color="rgba(220, 220, 220)"/>
         <p>用户注册</p>
   </div>
   <div>
       <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field 
    v-model="phone"
    name="phone" 
    label="手机号" 
    placeholder="手机"
    :rules="phoneRules"/>
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
   </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Form , Field,Button} from 'vant';

Vue.use(Form)
   .use(Field)
   .use(Button);
export default {
  name: "Register",
  data() {
      this.phoneRules = [
      { required: true, message: '请输入手机号' },
      { validator: this.phoneValidator, message: '手机号格式错误' },
    ];
    return {
      username: '',
      password: '',
      phone:''
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
<style scoped>
.register{
    height:100vh;
    background-color:white;
    width:100%;
}

.register .register-header p{
    width:100%;
    text-align:center;
    font-size:20px;
    margin-top:50px;
}
</style>
