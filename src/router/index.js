import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/home",
    component: () => import("../pages/home")
    // children: [
    //   {
    //     name: "home-product",
    //     path: "product/:id",
    //     component: () => import("../pages/product")
    //   }
    // ]
  },
  {
    name: "category",
    path: "/category",
    component: () => import("../pages/category")
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("../pages/cart")
  },
  {
    name: "personal",
    path: "/personal",
    component: () => import("../pages/personal")
  },
  {
    name: "search",
    path: "/search",
    component: () => import("../pages/search")
  },
  {
    name: "product",
    path: "/product/:id",
    component: () => import("../pages/product")
  },
  {
    name:"comment",
    path:"/comment/:id",
    component:()=>import("../pages/comment")
  },
  {
      name:"login",
      path:"/login",
      component:()=>import("../pages/login")
  },
  {
    name:"register",
    path:"/register",
    component:()=>import("../pages/register")
  },
  {
    name:"order",
    path:"/order",
    component:()=>import("../pages/order")
  },
  {
    name:"setting",
    path:"/setting",
    component:()=>import("../pages/setting")
  },
  {
    name:'ade',
    path:'/ade',
    component:()=>import("../pages/address-edit")
  },
  {
    name:'new',
    path:'/new',
    component:()=>import("../pages/newAddress")
  },
  {
    name:'self-comment',
    path:'/self-comment',
    component:()=>import("../pages/self-comment")
  },
  {
    name:'order-detail',
    path:'/order-detail',
    component:()=>import("../pages/order-detail")
  }
  ,
  {
    path: "*",
    redirect: "/home"
  }
];

export default new Router({
  routes
});
