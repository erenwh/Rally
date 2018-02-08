<template>
  <div id="time">
    <v-container id="contain" fluid text-xs-center>
      <v-layout id="row">
        <v-flex md3 sm1 xs0></v-flex>
        <v-flex md6 sm10 xs12>
          <div id="spacer"></div>
          <h1 class="mb-3">Sign in</h1>
          <v-card id="card" color="grey darken-4">
            <v-container id="contain" fluid text-xs-center>
              <v-layout id="row">
                <v-flex xs3 ></v-flex>
                <v-flex xs6>
                  <h4 class="mb-3 white--text">Register with...</h4>
                </v-flex>
                <v-flex xs3></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs12 md=4>
                  <v-btn id="btn" color="indigo darken-2" class="white--text">
                    <facebook-box id="fb"/>
                    Facebook
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn id="btn" color="green darken-3" class="white--text">
                    <google id="google"/>
                    Google
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn id="btn" color="light-blue accent-4" class="white--text">
                    <twitter id="twitter"/>
                    Twitter
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs3 ></v-flex>
                <v-flex xs6>
                  <h4 class="mb-3 mt-3 white--text">Or Register with...</h4>
                </v-flex>
                <v-flex xs3></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2 ></v-flex>
                <v-flex xs8>
                  <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                      label="Username"
                      color="white"
                      box
                      dark
                      v-model="name"
                      :rules="nameRules"
                      :counter="10"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="E-mail"
                      dark
                      box
                      color="white"
                      v-model="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      dark
                      box
                      color="white"
                      v-model="password"
                      :rules="passwordRules"
                      type="password"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Confirm Password"
                      dark
                      box
                      color="white"
                      v-model="Conpassword"
                      type="password"
                      required
                      :rules="[comparePasswords]"
                    ></v-text-field>
                  </v-form>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs6>
                  <v-btn class="green accent-4" @click="submit" :disabled="!valid">Submit</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-btn class="red accent-4" @click="clear">Cancel</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex md3 sm1 xs0></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        nameRules: [
          (v) => !!v || 'Username is required',
          (v) => v && v.length < 11 || 'Username must be 10 characters or less'
        ],
        email: '',
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 8 || 'Password must be 8 characters or more'
        ],
        Conpassword: '',
        valid: true
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.Conpassword ? 'Passwords do not match' : true
      }
    },
    methods: {
      signUp () {
        console.log({username: this.name, email: this.email, password: this.password, Conpassword: this.Conpassword})
        //this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      },
      submit () {
        if (this.$refs.form.validate()) {
          this.signUp()
        }
      },
      clear () {
        this.$refs.form.reset()
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

#spacer {
  width: 100%;
  height: 70px;
}

#btn {
  min-width: 120px;
  max-width: 120px;
}

#fb {
  width: 25px;
  margin-right: 5px;
  margin-bottom: 15px;
}

#google {
  width: 20px;
  margin-right: 5px;
  margin-bottom: 15px;
}

#twitter {
  width: 20px;
  margin-right: 5px;
  margin-bottom: 15px;
}

#flex {
  width: 100%;
}

</style>
