<template>
  <div>

    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3 text-xs-center>
        <v-alert type="success" v-if="sent" :value="true">
          Report sent
        </v-alert>
        <h1 v-if="!signin" class="mb-3">Please Log in first!!</h1>
        <v-card id="card" v-if="signin">
          <v-toolbar dark color="grey darken-4">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">Report a problem</v-toolbar-title>
              </div>
          </v-toolbar>
        <v-form class="ma-3 pa-3" v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
          <v-text-field
            label="Name"
            v-model="report.name"
            :rules="report.nameRules"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="report.email"
            :rules="report.emailRules"
            required
          ></v-text-field>
          <v-text-field
            name="input-7-1"
            label="Describe the issue"
            v-model="report.issue"
            multi-line
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn @click="submit">
              submit
            </v-btn>
            <v-btn>clear</v-btn>
          </div>
        </v-form>
      </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {bus} from '../../main';
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        report: {
          name: '',
          nameRules: [
            (v) => !!v || 'Name is required'
          ],
          email: '',
          emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) && v.length <= 100 || 'E-mail must be valid'
          ]
        },
        valid: true,
        signin: false,
        sent: false
      }
    },
    methods: {
      submit() {
        var ref = firebase.database().ref('/reports');
        var key = ref.push(this.report);
        key = key.path.pieces_[1];
        ref.child('/' + key).update({key: key});
        this.sent = true;
      }
    },
    mounted(){
      try {
  			var email = firebase.auth().currentUser.email;
  			this.signin = true;
  		}
  		catch (error) {
  			this.signin = false;
  		}
    }
  }
</script>


<style scoped>

#card {
  -webkit-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  -moz-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
}

</style>
