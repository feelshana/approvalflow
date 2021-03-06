import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ViewUI from "view-design/dist/iview.min.js";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import "components/Styles/index.module.less";
// 路由配置
const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  ViewUI.LoadingBar.start();
  next();
});
ViewUI.LoadingBar.config({
  color: "#5cb85c"
});
router.afterEach(() => {
  window.scrollTo(0, 0);
  ViewUI.LoadingBar.finish();
});
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");