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
import FBSignInButton from "vue-facebook-signin-button"

import * as firebase from 'firebase'
import { store } from './store'

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.component("facebook-box", facebook);
Vue.component("google", google);
Vue.component("twitter", twitter);

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router: router,
  create() {
    const config = firebase.initializeApp({
      apiKey: "AIzaSyCzCQ7p381EIq-eQtArdNmxWyPjX_jiKRk",
      authDomain: "rally-cs408.firebaseapp.com",
      databaseURL: "https://rally-cs408.firebaseio.com",
      projectId: "rally-cs408",
      storageBucket: "rally-cs408.appspot.com"/*,
      messagingSenderId: "289928867041"*/
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/accinfo')
      } else {
        this.$router.push('/register')
      }
    });
  },
  render: h => h(App),
  mode: 'history'
})
