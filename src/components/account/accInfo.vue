<template>
  <div>
    <v-container fluid text-xs-center>
      <v-layout>
        <v-flex md2></v-flex>
        <v-flex xs12 md8>
          <v-card>
            <v-toolbar dark color="grey darken-4">
              <v-toolbar-title class="white--text">Account Information</v-toolbar-title>
            </v-toolbar>
            <v-container fluid text-xs-center>
              <v-layout>
                <v-flex xs7>
                  <v-text-field
                    name="input-7-1"
                    v-model="email"
                    label="Email"
                    disabled
                  ></v-text-field>
                  <v-text-field
                    name="input-7-1"
                    v-model="username"
                    color="black"
                    label="Username"
                    auto-grow
                    :disabled="disabled"
                  ></v-text-field>
                  <v-text-field
                    name="input-7-1"
                    v-model="name"
                    label="Name"
                    color="black"
                    auto-grow
                    :disabled="disabled"
                  ></v-text-field>
                  <v-text-field
                    name="input-7-1"
                    v-model="dob"
                    label="Date of Birth"
                    color="black"
                    auto-grow
                    :disabled="disabled"
                  ></v-text-field>
                </v-flex>
                <v-flex xs5>
                  <img id="img" src="/../../../static/chik fil a.jpg" alt="Avatar">
                  <br />
                  <v-btn dark color="grey darken-4">Upload image</v-btn>
                </v-flex>
              </v-layout>
              <v-layout v-if="!edit">
                <v-flex xs12>
                  <v-btn dark color="grey darken-4">Edit Information</v-btn>
                </v-flex>
              </v-layout>
              <v-layout v-if="edit">
                <v-flex xs6>
                  <v-btn dark color="green accent-4">Save</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-btn dark color="red accent-4">Cancel</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex md2></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        edit: false,
        email: '',
        name: '',
        username: '',
        key: '',
        dob: ''
      }
    },
    mounted(){
      var email = firebase.auth().currentUser.email;
      var ref = firebase.database().ref('/profiles');
      ref.once('value').then((snap)=>{
        snap.forEach((prof)=>{
        	user = prof.val();
          if (prof.val().email == email) {
            this.email = prof.val().email;
            this.name = prof.val().name;

            this.username = prof.val().username;
            this.key = prof.val().key;

          }
        });
      })
    }
  }
</script>


<style scoped>
#img {
  border-radius: 50%;
  width: 150px;
  height: 150px;

}

</style>
