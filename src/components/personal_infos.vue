<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-toolbar-title>Informazioni personali</v-toolbar-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Nome"
                name="name"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                id="email"
                label="E-mail"
                name="email"
                prepend-icon="mdi-email"
                type="email"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">Avanti</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PersonalInfosComponent extends Vue {}
</script>

<style scoped></style>
