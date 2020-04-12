<template>
  <div class="login"  @touchmove.prevent>
    <van-icon name="arrow-left" size="30" color="rgba(220, 220, 220)"/>
    <!-- <div class="login-header">
        <img src="./mi9.jpg">
    </div> -->
      <div class="login-main">
           <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
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
   <div>&nbsp;&nbsp;&nbsp;&nbsp;新用户注册</div>
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
  name: "login",
  data() {
    return {
      username: '',
      password: '',
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
.login{
  height:100vh;
  width: 100vw;

  background-color:white;
  overflow:hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./background.jpg");
}

.login .login-header{
  width:60%;
  height:100px;
  margin:50px auto;
}
.login .login-main {
  width: 90%;
  height: 300px;
  background-color: 	#F5F5F5;
  border-radius: 10px;
  margin: 190px auto;
}
.login .login-main .van-form{
  padding-top: 20px;
  width: 90%;
  margin: 0 auto;
}
</style>
