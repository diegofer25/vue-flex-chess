import Vue from 'vue'
import Vuex from 'vuex'

import App from '@/App.vue'

import store from '@/store'
import router from '@/router'

import '@/styles/index.scss';

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store: new Vuex.Store(store),
  router,
  render: h => h(App)
}).$mount('#app')
