<template>
  <div class="setting">
    <div class="setting-heading">
         <router-link to='/personal'>
                 <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;设置</p>
    </div>
    <div class="setting-main">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                 个人资料
        </van-divider>
        <van-collapse v-model="activeName" accordion>
             <van-collapse-item title="性别" name="1">
               <van-form @submit="onSubmit">
                  <van-field
                   v-model="username"
                   name="性别"
                   label="性别"
                   placeholder="female"
                   :rules="[{ required: true, message: '请填性别' }]"
                  />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                       提交
                       </van-button>
                   </div>
                 </van-form>
             </van-collapse-item>
             <van-collapse-item title="用户名" name="2">
               <van-form @submit="onSubmit">
                  <van-field
                   v-model="username"
                   name="用户名"
                   label="用户名"
                   placeholder="elinor"
                   :rules="[{ required: true, message: '请填用户名' }]"
                  />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                       提交
                       </van-button>
                   </div>
                 </van-form>
             </van-collapse-item>
             <van-collapse-item title="修改密码" name="3">
               <van-form @submit="onSubmit">
                  <van-field
                   v-model="username"
                   name="密码"
                   label="密码"
                   placeholder="123456"
                   :rules="[{ required: true, message: '请填密码' }]"
                  />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                       提交
                       </van-button>
                   </div>
                 </van-form>
             </van-collapse-item>
            <van-collapse-item title="我的收货地址" name="4">
            <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
             disabled-text="以下地址超出配送范围"
             default-tag-text="默认"
             @add="onAdd"
             @edit="onEdit"
              />
            </van-collapse-item>
           <router-link to="/new">
              <van-collapse-item title="新增收货地址" name="5">
             </van-collapse-item>
             </router-link>
        </van-collapse>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { AddressList,Toast,Divider ,Collapse, CollapseItem, Field ,Form, Button, AddressEdit} from 'vant';
Vue.use(Divider)
    .use(Collapse)
    .use(CollapseItem)
    .use(Field)
    .use(Form)
    .use(Button)
    .use(AddressEdit)
    .use(Toast)
    .use(AddressList);
export default {
  name: "setting",
  data(){
    return{
      activeName:'0',
      username:'',
       chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
    },
      methods:{
        onSave() {
          Toast('save');
          },
         onDelete() {
           Toast('delete');
          },
        onSubmit(values){
          console.log('submit',values);
          },
        onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
      this.$router.push({
        name:'ade',
        params:{key:this.list}
        })
    }
  }
  }

</script>
<style>
.setting{
    height: 100vh;
    background-color: white;
}
.setting-heading p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.setting .setting-heading{
    background-color: white;
}
.setting .setting-main .s{
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: white;
    border-bottom:1px solid rgba(220, 220, 220);
}
.setting .setting-main{
    margin-top: 10px;
}
</style>
