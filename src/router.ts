import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WelcomeComponent from "@/components/welcome.vue";
import RegistrationComponent from "@/components/registration.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: "/", component: WelcomeComponent },
  { path: "/registration", component: RegistrationComponent }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
