<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          src="./assets/logo.png"
          class="my-3"
          contain
          height="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="http://murall.art"
        target="_blank"
        text
      >
        <span class="mr-2">Murall</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <BillyJack/>
    </v-main>
  </v-app>
</template>

<script>
import BillyJack from './components/BillyJack';

export default {
  name: 'App',

  components: {
    BillyJack,
  },

  data: () => ({
    //
  }),
};
</script>
