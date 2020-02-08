// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import Vant from "vant";
import App from "./App";
import router from "./router";
import "./assets/css/base.css";
import "./assets/css/reset.css";
import fastclick from "fastclick";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false;

fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
