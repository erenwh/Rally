<template>
  <div id="signin">
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
                  <h4 class="mb-3 white--text">Sign in with...</h4>
                </v-flex>
                <v-flex xs3></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs12 md=4>
                  <v-btn id="btn" @click="fb" name="facebook" color="indigo darken-2" class="white--text">
                    <facebook-box id="fb"/>
                    Facebook
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn id="btn" @click="google" name="google" color="green darken-3" class="white--text">
                    <google id="google"/>
                    Google
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn @click="twitter" id="btn" name="twitter" color="light-blue accent-4" class="white--text">
                    <twitter id="twitter"/>
                    Twitter
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2></v-flex>
                <v-flex xs8>
                  <h4 class="mb-3 mt-3 white--text">Or Sign in with...</h4>
                  <v-alert id="alert" type="error"  :value="value" >
                    {{this.error}}
                  </v-alert>
                  <v-alert id="alertsuccess" type="success"  :value="values" >
                    Email Sent :)
                  </v-alert>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2 ></v-flex>
                <v-flex xs8>
                  <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
                    <v-text-field
                      name="email"
                      id="email"
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
                      id="pass"
                      box
                      color="white"
                      name="pass"
                      v-model="password"
                      type="password"
                      required
                      :rules="passwordRules"
                    ></v-text-field>
                    <v-layout row justify-center id="row">
                      <v-flex xs6>
                        <v-btn id="loginBTN" class="green accent-4" :disabled="!valid" @click="submit">Log In</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout row justify-center>
                <v-dialog id="dia" v-model="dialog" persistent max-width="500px">
                  <v-btn id="fgpass" color="white" slot="activator">Forgot Password</v-btn>
                  <v-card>
                    <v-form v-model="validf" ref="formf" lazy-validation @submit.prevent="forgot">
                      <v-card-title>
                        <span class="headline">Please input the Email</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>

                                <v-text-field
                                  name="email"
                                  id="emailf"
                                  label="E-mail"
                                  box
                                  color="black"
                                  v-model="emailf"
                                  :rules="emailRules"
                                  required
                                ></v-text-field>

                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn id="can" color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                        <v-btn id="fg" color="blue darken-1"  flat :disabled="!validf" @click="forgot">Submit</v-btn>

                    </v-form>
                  </v-card>
                </v-dialog>
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
import {bus} from '../../main';
import * as firebase from 'firebase'
  export default {
    // bug note: need to check for useremail / password format
    // password length etc
    data () {
      return {
        valid: true,
        validf: true,
        dialog: false,
        email: '',
        emailf: '',
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) && v.length <= 100 || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 8 || 'Password must be 8 characters or more'
        ],
        error: 'Invalid Email/Password',
        value: false,
        values: false
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()){

          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((function(user){
                console.log(firebase.auth().currentUser);
                bus.$emit('signChange', true);
                this.$router.push('/');
              }).bind(this)).catch((function(error){
                this.value = true;
                console.log("caught error: " + error);
          }).bind(this));
        }

      },
      forgot() {
        if (this.$refs.formf.validate()){
          this.values = true;
          this.dialog = false;
          firebase.auth().sendPasswordResetEmail(this.emailf).then(()=>{
            console.log("Sent");
          }).catch((error)=> {
            console.log(error.errorMessage);
          });
        }


      },
      fb() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          // ...
          bus.$emit('signChange', true);
          this.$router.push('/');
        }).bind(this)).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });

      },
      google() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          bus.$emit('signChange', true);
          this.$router.push('/');
          }).bind(this)).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });


      },
      twitter() {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          bus.$emit('signChange', true);
          this.$router.push('/');
          }).bind(this)).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });


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
