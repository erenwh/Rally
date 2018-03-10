<template>
  <div id="register">
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
                  <v-btn @click="fb" id="btn" name="facebook" color="indigo darken-2" class="white--text">
                    <facebook-box id="fb"/>
                    Facebook
                  </v-btn>
                </v-flex>
                <v-flex xs12 md=4>
                  <v-btn @click="google" id="btn" name="google" color="green darken-3" class="white--text">
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
                <v-flex xs2 ></v-flex>
                <v-flex xs8>
                  <h4 class="mb-3 mt-3 white--text">Or Register with...</h4>
                  <v-alert id="alert" type="error" :value="value">
                    {{this.error}}
                  </v-alert>
                </v-flex>
                <v-flex xs2></v-flex>
              </v-layout>
              <v-layout id="row">
                <v-flex xs2 ></v-flex>
                <v-flex xs8>
                  <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
                    <v-text-field
                      label="Username"
                      color="white"
                      name="userName"
                      box
                      dark
                      v-model="username"
                      :rules="nameRules"
                      :counter="10"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="DOB"
                      color="white"
                      box
                      dark
                      name="dob"
                      v-model="dob"
                      :rules="dobRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="E-mail"
                      dark
                      box
                      name="email"
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
                      name="pass"
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
                      name="compass"
                      v-model="Conpassword"
                      type="password"
                      required
                      :rules="[comparePasswords]"
                    ></v-text-field>
                    <v-layout id="row">
                      <v-flex xs6>
                        <v-btn id="submitBTN" class="green accent-4" :disabled="!valid" dark @click="submit">Submit</v-btn>
                      </v-flex>
                      <v-flex xs6>
                        <v-btn class="red accent-4" dark @click="clear">Cancel</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
                <v-flex xs2></v-flex>
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

    data () {
      return {
        username: '',
        nameRules: [
          (v) => !!v || 'Username is required',
          (v) => v && v.length < 11 || 'Username must be 10 characters or less'
        ],
        email: '',
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) && v.length <= 100 || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 8 || 'Password must be 8 characters or more'
        ],
        Conpassword: '',
        valid: true,
        dob: '',
        dobRules: [
          (v) => !!v || 'Date of Birth is required',
          (v) => /^\d\d\/\d\d\/\d\d$/.test(v) || 'Format must be XX/XX/XX'
        ],
        error: '',
        value: false
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.Conpassword ? 'Passwords do not match' : true
      }
    },
    methods: {
      submit() {
         if (this.$refs.form.validate()){
           if(this.password === this.Conpassword) {
             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(((user) =>{
               var ref = firebase.database().ref('/profiles');
               var profile = {
                 email: user.email,
                 username: this.username,
                 dob: this.dob
               };
               var key = ref.push(profile);
               key = key.path.pieces_[1];
               ref.child('/' + key).update({key: key}).then(function(profile){
                 //console.log(profile);
               });
               bus.$emit('signChange', true);
               this.$router.push('/');
             }).bind(this)).catch((function(error){
               this.value = true;
               this.error = error.message;
               console.log(error.message);
             }).bind(this));




           } else {
             console.log("Passwords do not match");
           }
         }

      },
      clear() {
        this.$refs.form.reset();
      },
      fb() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            username: user.displayName,
            dob: this.dob
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          bus.$emit('signChange', true);
          this.$router.push('/');
          // ...
        }).bind(this)).catch((function(error) {
          // Handle Errors here.
          this.value = true;
          this.error = error.message;
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        }).bind(this));

      },
      twitter() {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result) {
          // This gives you a Twitter Access Token. You can use it to access the Twitter API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            username: user.displayName,
            dob: this.dob
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          bus.$emit('signChange', true);
          this.$router.push('/');
          // ...
        }).bind(this)).catch((function(error) {
          this.value = true;
          this.error = error.message;
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        }).bind(this));

      },
      google() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((function(result) {
          // This gives you a google Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            username: user.displayName,
            dob: this.dob
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          // ...
          bus.$emit('signChange', true);
          this.$router.push('/');
        }).bind(this)).catch((function(error) {
          this.value = true;
          this.error = error.message;
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        }).bind(this));

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
