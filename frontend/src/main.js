import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'

Vue.use(KeenUI);

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.filter('kb', val => {
  return Math.floor(val/1024) 
})

new Vue({
  router,
  store,
  components: {},
  render: h => h(App)
}).$mount('#app')
