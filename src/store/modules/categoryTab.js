
const state={   //要设置的全局访问的state对象
    tabFirstId: 0
  };
const getters = {   //实时监听state值的变化(最新状态)
    GetTabFirstId(state) {  //承载变化的showFooter的值
      return state.tabFirstId
   },

};
const mutations = {
   SetTabFirstId(state,id) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象),同步设置
       state.tabFirstId = id;
   },

};
const actions = {
  invokeSetItems({commit},id) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性，异步设置
       commit('SetTabFirstId',id);
   }
};

export default {
   namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
   state,
   getters,
   mutations,
   actions
}
// export default category-tab

// const categoryTab={
//     state:{
//         tabFirstId:0
//     },
//     mutations:{
//     SetTabFirstId(state,id) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象),同步设置
//        state.tabFirstId = id;
//    }
//     },
//     getters:{
//     GetTabFirstId(state) {  //承载变化的showFooter的值
//       return state.tabFirstId
//    } 
//   },
//   actions:{}
// }
// export default categoryTab