<template>
  <div id="meetPage">
    <v-container text-xs-center>
      <v-layout row justify-center>
        <v-flex xs12 md-8>
          <v-card class="elevation-4">
            <v-toolbar dark color="teal darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">{{this.meets.title}}</v-toolbar-title>
              </div>
            </v-toolbar>
            <v-carousel>
        			<v-carousel-item :src="meets.pictureUrl"></v-carousel-item>
        		</v-carousel>
            <div class="text-xs-center">
              <v-btn dark class="ma-3" v-for="i in meets.tagList" :key="i" round color="indigo">{{i}}</v-btn>
            </div>
            <v-divider></v-divider>
            <h4 class="ma-3">Description</h4>
            <p class="ma-3">{{this.meets.description}}</p>
            <v-divider></v-divider>
            <h4 class="ma-3">Location</h4>
            <p class="ma-3">{{this.meets.location}}</p>
            <v-divider></v-divider>
            <h4 class="ma-3">Date</h4>
            <p class="ma-3">{{this.meets.date}}</p>
            <v-divider></v-divider>
            <h4 class="ma-3">Time</h4>
            <p class="ma-3">{{this.meets.time}}</p>
            <v-divider></v-divider>
            <div v-if="register">
              <v-btn id="registerBTN" class="ma-3" dark color="red accent-4" @click="unregistered">Unregister</v-btn>
            </div>
            <div v-else-if="organized">
              <v-btn flat large disabled>Organized</v-btn>
              <h4 class="ma-3">Number of registered users</h4>
              <v-progress-circular
                 :size="100"
                 :width="15"
                 :rotate="-90"
                 :value="value"
                 color="success"
               >
                 {{ value }}
               </v-progress-circular>
            </div>
            <div v-else-if="!register && !organized">
              <v-btn id="registerBTN" class="ma-3" @click="registered" dark color="green accent-4">Register</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        key: this.$route.params.id,
        meets: {
          pictureUrl: '',
          tagList: [],
          description: '',
          title: '',
          location: '',
          date: '',
          time: ''
        },
        tags: {},
        organized: false,
        register: false,
        value: 0
      }
    },
    mounted() {

      var ref = firebase.database().ref('/meets/' + this.key);

      ref.once('value').then((snap)=>{
        //console.log(snap.val());
        this.meets.pictureUrl = snap.val().imageUrl;
        this.meets.description = snap.val().description;
        this.meets.location = snap.val().location;
        this.meets.date = snap.val().picker;
        this.meets.time = snap.val().time;
        this.meets.title = snap.val().title;
        this.tags = snap.val().tags;
        this.value = snap.val().number;
        for(var tag in this.tags){
          if(this.tags[tag]){
            this.meets.tagList.push(tag)
          }
        }
        //console.log(this.AtObject.tagList);
      }).then(()=>{
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach(profile=>{
            if(firebase.auth().currentUser.email == profile.val().email) {
              var ref1 = firebase.database().ref('/profiles/' + profile.val().key + '/registered/');

              ref1.once('value').then((snap)=>{
                snap.forEach((reg)=>{
                  if(reg.key === this.key) {
                    this.register = true;
                    var ref3 = firebase.database().ref('/profiles/' + profile.val().key + '/registered/' + this.key);
                    ref3.update({
                      change: false
                    });
                  }
                });
              });

              var ref2 = firebase.database().ref('/profiles/' + profile.val().key + '/organized/');

              ref2.once('value').then((snap)=>{
                snap.forEach((org)=>{
                  if(org.key === this.key) {
                    this.organized = true;
                  }
                });
              });



            }
          });
        });
      });


    },
    methods: {
      registered() {
        this.register = true;
        var email = firebase.auth().currentUser.email;
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            if (prof.val().email == email) {
              var ref = firebase.database().ref('/profiles/' + prof.val().key + '/registered');
              ref.child('/' + this.key).update({key: this.key, change: false}).then(function(profile){
              });
            }
          });
        });

        var ref1 = firebase.database().ref('/meets/' + this.key);
        var num = 0
        ref1.once('value').then((meet) => {
          num = meet.val().number;
          num += 1;
          ref1.update({
            number: num
          });
        });




      },
      unregistered() {
        var email = firebase.auth().currentUser.email;
        //console.log(email);
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            if(prof.val().email == email) {


              var ref1 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/');

              ref1.once('value').then((snap)=>{
                snap.forEach((reg)=>{
                  if(this.key === reg.key) {
                    var ref2 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/' + reg.key);
                    ref2.remove();
                  }
                });
              });
              this.register = false;
            }
          });
        });
        var ref1 = firebase.database().ref('/meets/' + this.key);
        var num = 0
        ref1.once('value').then((meet) => {
          num = meet.val().number;
          num -= 1;
          ref1.update({
            number: num
          });
        });
      }
    }
  }

</script>


<style scoped>

</style>
