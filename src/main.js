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
  mode: 'history',
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzCQ7p381EIq-eQtArdNmxWyPjX_jiKRk",
      authDomain: "rally-cs408.firebaseapp.com",
      databaseURL: "https://rally-cs408.firebaseio.com",
      projectId: "rally-cs408",
      storageBucket: "rally-cs408.appspot.com",
      messagingSenderId: "289928867041"
    })
  }
})
