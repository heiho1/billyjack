<template>
  <v-app :style="{background: $vuetify.theme.themes['light'].background}">
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img src="./assets/logo.png" class="my-3" contain height="200" />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="http://murall.art" target="_blank" text>
        <span class="mr-2">Murall</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-banner text-align="center" two-line width="100%">
        <v-avatar slot="icon" color="white accent-4" size="40">
          <v-icon icon="mdi-earth" color="green">mdi-earth</v-icon>
        </v-avatar>
        With all honor and respect to We the People of the World and to the Great Spirit from whom all things are made possible.  May Tom Laughlin truly Rest in Peace.
      </v-banner>
      <BillyJack />
    </v-main>
  </v-app>
</template>

<script>
import BillyJack from "./components/BillyJack";

export default {
  name: "App",

  components: {
    BillyJack,
  },

  data: () => ({
  }),
};
</script>
