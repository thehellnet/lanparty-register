<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-toolbar-title>Benvenuto all'iscrizione per tornei</v-toolbar-title>
          <v-card-actions>
            <v-spacer />
            <router-link :to="{ path: '/registration' }">
              <v-btn color="primary">Avanti</v-btn>
            </router-link>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WelcomeComponent extends Vue {}
</script>

<style scoped></style>
