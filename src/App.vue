<template>
  <v-app>
    <!--        <WelcomeComponent />-->
    <PersonalInfosComponent />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonalInfosComponent from "@/components/personal_infos.vue";
import WelcomeComponent from "@/components/welcome.vue";

@Component({
  components: {
    WelcomeComponent,
    PersonalInfosComponent: PersonalInfosComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
$mdi-font-path: "~@mdi/font/fonts";
@import "~@mdi/font/scss/materialdesignicons";
</style>
