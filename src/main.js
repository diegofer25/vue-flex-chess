import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './store'

import './styles/index.scss'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
