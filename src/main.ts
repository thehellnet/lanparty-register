import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetifyInstance = new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});

new Vue({
  router,
  vuetify: vuetifyInstance,
  render: h => h(App)
}).$mount("#app");
