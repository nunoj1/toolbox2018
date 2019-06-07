import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueCookies from "vue-cookies"

Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => {return h(App)},
}).$mount('#app')
