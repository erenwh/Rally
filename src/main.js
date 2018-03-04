import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import "vue-material-design-icons/styles.css"
import 'vuetify/dist/vuetify.css'

import App from './App'
import Routes from './router/index'

import facebook from "vue-material-design-icons/facebook-box.vue"
import google from "vue-material-design-icons/google.vue"
import twitter from "vue-material-design-icons/twitter.vue"

import * as firebase from 'firebase'


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.component("facebook-box", facebook);
Vue.component("google", google);
Vue.component("twitter", twitter);

Vue.config.productionTip = false

export const bus = new Vue();

/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzCQ7p381EIq-eQtArdNmxWyPjX_jiKRk",
      authDomain: "rally-cs408.firebaseapp.com",
      databaseURL: "https://rally-cs408.firebaseio.com",
      projectId: "rally-cs408",
      storageBucket: "rally-cs408.appspot.com",
    });
  },
  mode: 'history'
})
