<template>
  <v-app>
    <v-app-bar app> </v-app-bar>
    <v-content>
      <v-carousel-transition>
        <router-view />
      </v-carousel-transition>
    </v-content>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~vuetify/dist/vuetify.min.css";

$mdi-font-path: "~@mdi/font/fonts";
@import "~@mdi/font/scss/materialdesignicons";
</style>
