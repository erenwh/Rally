<template>
  <div id="report">
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <h1 v-if="!signin" class="mb-3">Please Log in first!!</h1>
        <v-card id="card" v-if="signin">
          <v-toolbar dark color="grey darken-4">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">Report a problem</v-toolbar-title>
              </div>
          </v-toolbar>
          <v-alert id="alertsuccess" type="success"  :value="value" >
            Report Sent :)
          </v-alert>
        <v-form class="ma-3 pa-3" v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
          <v-text-field
            name="nameField"
            label="Name"
            v-model="report.name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            name="emailField"
            label="E-mail"
            v-model="report.email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            name="issueField"
            label="Describe the issue"
            v-model="report.issue"
            :rules="issueRules"
            multi-line
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn id="submit" @click="submit">
              submit
            </v-btn>
            <v-btn id="clear" @click="clear">clear</v-btn>
          </div>
        </v-form>
      </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        report: {
          name: '',
          email: '',
          issue: '',
        },
        issueRules: [
          (v) => !!v || 'Must have an issue',
        ],
        emailRules: [
          (v) => !!v || 'Must have email to send to',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) && v.length < 100 || 'E-mail must be valid',
        ],
        nameRules: [
          (v) => !!v || 'Must have a name',
        ],
        valid: true,
        value: false,
        signin: false
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()){
          var ref = firebase.database().ref('/reports');
          var key = ref.push(this.report);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key});
          this.value = true;
          this.$refs.form.reset();
        }
      },
      clear() {
        this.$refs.form.reset();
      },
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
