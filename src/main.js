import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueMaterial)

const token = localStorage.getItem('x-access-token')
if (token) {
  axios.defaults.headers.common['x-access-token'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
