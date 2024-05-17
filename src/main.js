import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import config from '@/config'

const {
  useSettingInit,
  useComponent,
  useFilter
} = config
Vue.use(useSettingInit).use(useComponent).use(useFilter)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");