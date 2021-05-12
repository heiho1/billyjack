import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
// import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const vuetify =  new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.amber.darken1, 
        secondary: colors.amber.lighten1,
        accent: colors.amber.base, 
        header: colors.amber.lighten3,
        overlay: colors.grey.lighten2,
        top: colors.black,
        background: colors.amber.lighten5
      },
    },
  },
})

Vue.use(Vuetify)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
