import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import plugins from './plugins'
import SmoothScroll from './plugins/SmoothScroll'

Vue.use(SmoothScroll)
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
