<template>
  <div id="orgMeets">
    <v-container fluid text-xs-center>
      <v-layout>
        <v-flex xs1></v-flex>
        <v-flex xs10>
          <v-container fluid text-xs-center>
            <v-layout row wrap>
              <v-flex xs4 id="col" v-for="(meet, index) in meets" :key="meet.title">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text" @click="clicked(meet)">{{ meet.title }}</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" :src="meet.imageUrl" @click="clicked(meet)"/>
                  <h3 class="ma-3">{{ meet.picker }}</h3>
                  <h3 class="ma-3">{{ meet.time }}</h3>

                  <!--Modal from here-->
                  <v-dialog v-model="dialog" persistent max-width="500px">
                    <v-btn id="editBTN" color="primary" class="mb-3" dark slot="activator">Edit</v-btn>
                    <v-card id="editEvent">
                      <v-card-title>
                        <span class="headline">Edit Event</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field
                                label="Add a description"
                                id="description"
                                multi-line
                                required
                                v-model="meet.description"
                                color = "black"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field
                                label="Location"
                                id="location"
                                required
                                v-model="meet.location"
                                color = "black"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field
                                label="Date"
                                required
                                v-model="meet.picker"
                                color = "black"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field
                                label="Time"
                                required
                                v-model="meet.time"
                                color = "black"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                        <v-btn id="saveBTN" color="blue darken-1" @click="save(meet)" flat>Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        register: true,
        meets: [],
        dialog: false
      }
    },
    created() {

      var email = firebase.auth().currentUser.email;
      console.log(email);
      var ref = firebase.database().ref('/profiles');
      ref.once('value').then((snap)=>{
        snap.forEach((prof)=>{
          if(prof.val().email == email) {
            console.log(prof.val().key);
            //this.userKey = prof.val().key;

            var meets = [];
            var ref1 = firebase.database().ref('/profiles/' + prof.val().key + '/organized/');

            ref1.once('value').then((snap)=>{
              snap.forEach((org)=>{
                var ref3 = firebase.database().ref('/meets/' + org.key);
                ref3.once('value').then((meet) => {
                  meets.push(meet.val());
                  this.meets = meets;
                  console.log(this.meets);
                });
              });
            });
          }
        });
      });

    },
    methods: {
      clicked(meet) {
        this.$router.push('/viewmeet/' + meet.key);
      },
      save(meet) {
        var ref = firebase.database().ref('/meets/' + meet.key);
        ref.update({
          description: meet.description,
          location: meet.location,
          picker: meet.picker,
          time: meet.time
        });

        var email = firebase.auth().currentUser.email;
        console.log(email);
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            console.log(prof.val().key);
            var ref1 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/');

            ref1.once('value').then((snap)=>{
              snap.forEach((reg)=>{

                if(reg.key === meet.key){

                  var ref3 = firebase.database().ref('/profiles/' + prof.val().key + '/registered/' + reg.key);
                  ref3.update({
                    change: true
                  });
                }


              });
            });
          });
        });



        this.dialog = false;
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

</style>
