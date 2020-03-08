<template>
    <div class="new">
        <div class="new-header">
             <router-link to='/setting'>
                 <van-icon name="arrow-left" size="30" class="product-icon" />
            </router-link>
             <p>&nbsp;&nbsp;添加收货地址</p>
        </div>
        <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>
</template>
<script>
import Vue from 'vue';
// import areaList from './area.json'
import { AddressEdit ,Toast,Area} from 'vant';
Vue.use(AddressEdit)
   .use(Area);
export default{
    name:'new',
    data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>
<style>
.new p{
    display: inline-block;
    position: relative;
    top: -8px;
}
.new .new-header{
    background-color: white;
}
</style>