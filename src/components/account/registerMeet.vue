<template>
  <div>
    <v-container fluid text-xs-center>
      <v-layout>
        <v-flex xs1></v-flex>
        <v-flex xs10>
          <h1 v-if="!signin" class="mb-3">Please Log in first!!</h1>
          <v-container fluid text-xs-center v-if="signin">
            <v-layout row wrap>
              <v-flex xs4 id="col" v-for="(meet, index) in meets" :key="meet.title">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text" @click="clicked(meet)">{{ meet.title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-badge v-if="meet.change" id="badge" color="red">
                      <v-icon slot="badge" dark>notifications</v-icon>
                    </v-badge>
                  </v-toolbar>
                  <img class="elevation-7" id="img" :src="meet.imageUrl" @click="clicked(meet)"/>
                  <h3 class="ma-3">{{ meet.picker }}</h3>
                  <h3 class="ma-3">{{ meet.time }}</h3>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs1></v-flex>
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
        register: true,
        meets: [],
        signin: false
      }
    },
    created() {

      try {
        var email = firebase.auth().currentUser.email;
        this.signin = true;
      }
      catch (error) {
        this.signin = false;
      }

      if(this.signin){

        console.log(email);
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            if(prof.val().email == email) {
              console.log(prof.val().key);
              var meets = [];
              var ref1 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/');

              ref1.once('value').then((snap)=>{
                snap.forEach((reg)=>{
                  var change = false;
                  var ref2 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/' + reg.key);
                  ref2.once('value').then((snap)=>{
                    change = snap.val().change;
                    //console.log(change);
                  }).then((()=>{

                    var ref3 = firebase.database().ref('/meets/' + reg.key);
                    ref3.update({
                      change: change
                    });
                    ref3.once('value').then((meet) => {
                      meets.push(meet.val());
                      this.meets = meets;
                      //console.log(this.meets);
                    });
                  }).bind(this));


                });
              });
            }
          });
        });


      }



    },
    methods: {
      clicked(meet) {
        this.$router.push('/viewmeet/' + meet.key);
      }
    }
  }
</script>


<style scoped>
#img {
  width: 100%;
  cursor: pointer;
}

#col {
  padding: 20px 20px 20px 20px;

}

#tool {
  cursor: pointer;
}

#badge {
  margin: 0 35px 0 0;
}

</style>
