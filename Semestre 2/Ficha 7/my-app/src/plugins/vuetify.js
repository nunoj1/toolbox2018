import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:   {
    primary: "#673ab7",
      secondary: "#9c27b0",
      accent: "#cddc39",
      error: "#f44336",
      warning: "#ffc107",
      info: "#607d8b",
      success: "#4caf50"
    }
})
