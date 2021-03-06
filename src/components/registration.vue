<template>
  <v-container>
    <v-stepper v-model="wizardStep">
      <v-stepper-header>
        <template v-for="(title, index) in stepTitles">
          <v-divider :key="'step-title-divider' + index" v-if="index > 0" />
          <v-stepper-step
            :key="'step-title-' + index"
            :complete="wizardStep > index + 1"
            v-bind:step="index + 1"
            >{{ title }}
          </v-stepper-step>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-toolbar-title>Inserisci i tuoi dati</v-toolbar-title>
                <v-card-text>
                  <v-form v-model="stepValidity['1']">
                    <v-text-field
                      label="Nome"
                      name="name"
                      prepend-icon="mdi-account"
                      type="text"
                      :rules="[validators.required]"
                      v-model="dataService.name"
                    />
                    <v-text-field
                      id="email"
                      label="E-mail"
                      name="email"
                      prepend-icon="mdi-email"
                      type="email"
                      :rules="[validators.email]"
                      v-model="dataService.email"
                    />
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-toolbar-title
                  >Scegli il torneo tra quelli disponibili
                </v-toolbar-title>
                <v-card-text>
                  <v-form v-model="stepValidity['2']">
                    <v-combobox
                      name="tournament"
                      v-bind:loading="isTournamentLoading"
                      v-bind:disabled="isTournamentLoading"
                      solo="solo"
                      prepend-icon="mdi-gamepad"
                      v-model="data.tournamentId"
                      :items="tournaments"
                      item-value="id"
                      item-text="name"
                    />
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-toolbar-title
                  >Inserisci i dati del giocatore
                </v-toolbar-title>
                <v-card-text>
                  <v-form v-model="stepValidity['3']">
                    <v-text-field
                      label="Nick"
                      name="nick"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="data.nick"
                    />
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-toolbar-title
                  >Rileggi i dati inseriti prima di confermare
                </v-toolbar-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Nome</v-list-item-title>
                        {{ data.name }}
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>E-mail</v-list-item-title>
                        {{ data.email }}
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Torneo</v-list-item-title>
                        {{ data.tournamentId }}
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Nick</v-list-item-title>
                        {{ data.nick }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-card-actions>
      <v-btn
        color="primary"
        elevation="24"
        v-on:click="wizardStep--"
        v-if="!isSending && wizardStep > 1"
        >Indietro
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        elevation="24"
        v-on:click="wizardStep++"
        v-if="!isSending && wizardStep < stepTitles.length"
        :disabled="!stepValidity[wizardStep]"
        >Avanti
      </v-btn>
      <v-btn
        color="accent"
        elevation="24"
        v-bind:loading="isSending"
        v-on:click="sendRegistration"
        v-if="wizardStep === stepTitles.length"
        >Conferma
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Registration } from "@/models/registration";
import { MailUtility } from "@/utilities/mail.utility";
import dataService from "@/services/data.service";
import apiService from "@/services/api.service";
import { Tournament } from "@/models/tournament";

@Component
export default class RegistrationComponent extends Vue {
  public readonly stepTitles: string[] = [
    "Informazioni Personali",
    "Scelta del torneo",
    "Dati del giocatore",
    "Riepilogo"
  ];

  public dataService = dataService;

  public wizardStep: number = 1;

  public stepValidity = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  public isTournamentLoading: boolean = true;
  public isSending: boolean = false;

  public tournaments: Tournament[] = [];
  public data: Registration = new Registration();

  public validators = {
    required: (value: any) => !!value || "Richiesto.",
    email: (value: string) =>
      MailUtility.validateAddress(value) || "Mail non valida."
  };

  public sendRegistration(): void {
    this.isSending = true;
  }

  async mounted() {
    this.tournaments = await apiService.getTournaments();
    this.isTournamentLoading = false;
  }
}
</script>

<style scoped />
