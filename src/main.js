import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import plugins from './plugins'
// import SmoothScroll from './plugins/SmoothScroll'

import i18n from './i18n'

// Vue.use(SmoothScroll)
// Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
