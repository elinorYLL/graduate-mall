import Vue from 'vue';
import Vuex from 'vuex';
import categoryTab from './modules/categoryTab.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        categoryTab:categoryTab
    }
});
//vuex 状态管理
//https://www.jianshu.com/p/5c2cb0053839
