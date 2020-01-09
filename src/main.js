import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/index.js'
import './components/antd.js'
import './styles/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
