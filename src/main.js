import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import Routes from './router/index'



Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  mode: 'history'
})
