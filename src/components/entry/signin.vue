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
                  <h4 class="mb-3 white--text">Sign in with...</h4>
                </v-flex>
                <v-flex xs3></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs12 md=4>
                  <v-btn id="btn" @click="fb" color="indigo darken-2" class="white--text">
                    <facebook-box id="fb"/>
                    Facebook
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn id="btn" @click="google" color="green darken-3" class="white--text">
                    <google id="google"/>
                    Google
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn @click="twitter" id="btn" color="light-blue accent-4" class="white--text">
                    <twitter id="twitter"/>
                    Twitter
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2></v-flex>
                <v-flex xs8>
                  <h4 class="mb-3 mt-3 white--text">Or Sign in with...</h4>
                  <v-alert type="error" :value="value">
                    Invalid Email/Password
                  </v-alert>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2 ></v-flex>
                <v-flex xs8>
                  <v-form v-model="valid">
                    <v-text-field
                      label="E-mail"
                      dark
                      box
                      color="white"
                      v-model="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      dark
                      box
                      color="white"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-form>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs6>
                  <v-btn class="green accent-4" @click="submit">Log In</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-btn class="white" @click="forgot">Forgot Password</v-btn>
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
import {bus} from '../../main';
import * as firebase from 'firebase'
  export default {
    // bug note: need to check for useremail / password format
    // password length etc
    data () {
      return {
        email: '',
        password: '',
        valid: true,
        value: false
      }
    },
    methods: {
      submit() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((function(user){
              console.log(firebase.auth().currentUser);
              bus.$emit('signChange', true);
              this.$router.push('/');
            }).bind(this)).catch((function(error){
              this.value = true;
              console.log("caught error: " + error);
        }).bind(this));
      },
      forgot() {
        firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
          console.log("Sent");
        }).catch((error)=> {
          console.log(error.errorMessage);
        });
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
