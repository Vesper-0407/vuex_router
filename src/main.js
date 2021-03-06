import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'


Vue.config.productionTip = false


new Vue({
  router,
  store,  //在store/store.js中定义
  render: h => h(App)
}).$mount('#app')
