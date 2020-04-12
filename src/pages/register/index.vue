<template>
  <div class="register"  @touchmove.prevent>
   <div class="register-header">
         <van-icon name="arrow-left" size="30" color="rgba(220, 220, 220)"/>
   </div>
   <div>
  <div class="register-content">
   <div class="register-c">
      <p>注册</p>
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
    background-image: url("./background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}


.register .register-content{
  width: 90%;
  margin: 160px auto;
  background-color: #F5F5F5;
  height: 300px;
  border-radius: 10px;

}
.register-content .register-c{
  width: 90%;
  margin: 0 auto;
}
.register-content p{
  padding-top: 50px;
  padding-bottom: 10px;
  font-size: 30px;
}
</style>
