import Vue from 'vue'
import App from './App.vue'
import router from './permission/permission'
import store from './store'
import 'lib-flexible/flexible'
import Vant from 'vant';
import vueEsign from 'vue-esign'
import 'vant/lib/index.css';
import './api/axios.module'
Vue.use(vueEsign);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
