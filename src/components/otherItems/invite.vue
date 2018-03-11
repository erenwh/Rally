<template>
  <div id="invite">
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs3></v-flex>
        <v-flex xs6>
          <v-card id="card">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Invite a Friend</v-toolbar-title>
              </div>
            </v-toolbar>
          <v-form ref="form" class="ma-3 pa-3" lazy-validation @submit.prevent="submit">
            <v-text-field
              name="emailField"
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <div class="text-xs-center">
              <v-btn id="submit" @click="submit">
                submit
              </v-btn>
              <v-btn id="clear" @click="clear">
                clear
              </v-btn>
            </div>
          </v-form>
        </v-card>
        </v-flex>
        <v-flex xs3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        emailRules: [
          (v) => !!v || 'Must have email to send to',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) && v.length < 100 || 'E-mail must be valid',
        ]
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()){
          emailjs.send("gmail","template_LOOWuveW",{email: this.email});
        }
      },
      clear() {
        this.$refs.form.reset();
      },
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
