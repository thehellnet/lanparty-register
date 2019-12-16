import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import { colors } from "vuetify/lib";

Vue.config.productionTip = false;

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.purple.base,
        accent: colors.teal.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.lightBlue.base,
        success: colors.green.base
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
