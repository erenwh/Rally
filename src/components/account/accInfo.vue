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
                    v-model="dob"
                    label="Date of Birth"
                    color="black"
                    auto-grow
                    :disabled="disabled"
                  ></v-text-field>
                </v-flex>
                <v-flex xs5>
                  <img v-if="imageUrl" id="img" :src="imageUrl" alt="Avatar">
                  <br />
                  <v-btn
                    color="blue-grey"
                    dark
                    class="ma-4"
                    justify-center
                    raised
                    @click="onPickFile"
                    v-if="edit"
                    >
                    Upload
                    <v-icon right dark>cloud_upload</v-icon>
                  </v-btn>
                  <input
                  type="file"
                  style="display: none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                  />
                </v-flex>
              </v-layout>
              <v-layout v-if="!edit">
                <v-flex xs12>
                  <v-btn @click="editing" dark color="grey darken-4">Edit Information</v-btn>
                </v-flex>
              </v-layout>
              <v-layout v-if="edit">
                <v-flex xs4>
                  <v-btn @click="save" dark color="green accent-4">Save</v-btn>
                </v-flex>
                <v-flex xs4>
                  <v-btn @click="cancel" dark color="red accent-4">Cancel</v-btn>
                </v-flex>
                <v-flex xs4>
                  <v-btn @click="deleteacc" dark color="blue accent-4">Delete Account</v-btn>
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
import * as firebase from 'firebase'
import {bus} from '../../main';
  export default {
    data () {
      return {
        edit: false,
        email: '',
        username: '',
        key: '',
        dob: '',
        disabled: true,
        image: null,
        imageUrl: ''
      }
    },
    mounted(){
      var email = firebase.auth().currentUser.email;
      var ref = firebase.database().ref('/profiles');
      ref.once('value').then((snap)=>{
        snap.forEach((prof)=>{
          if (prof.val().email == email) {
            this.email = prof.val().email;
            this.username = prof.val().username;
            this.dob = prof.val().dob;
            this.key = prof.val().key;
            this.imageUrl = prof.val().imageUrl;

          }
        });
      })
    },
    methods: {
      editing() {
        this.edit = true;
        this.disabled = false;
      },
      save() {
        var ref = firebase.database().ref('/profiles/' + this.key)
        ref.update({
          username: this.username,
          dob: this.dob
        });
        this.disabled = true;
        this.edit = false;

        var filename = this.image.name;
        var ext = filename.slice(filename.lastIndexOf('.'));
        var temp = firebase.storage().ref('/profiles/' + this.key + '.' + ext);
        temp.put(this.image).then((snap)=>{
          console.log(snap);
          this.imageUrl = snap.downloadURL;
        }).then(()=>{
          console.log(this.imageUrl);

          ref = firebase.database().ref("/profiles/" + this.key);
          ref.update({imageUrl: this.imageUrl});
        });

      },
      cancel() {
        this.disabled = true;
        this.edit = false;
      },
      deleteacc() {
        var ref = firebase.database().ref('/profiles/' + this.key);
      	ref.remove();
      	firebase.auth().currentUser.delete();
      	firebase.auth().signOut();
        bus.$emit('signChange', false);
        this.$router.push("/");
      },
      onPickFile(){
        this.$refs.fileInput.click();
      },
      onFilePicked(event) {
        const files = event.target.files;
        let filename = files[0].name;
        if (filename.lastIndexOf('.') <= 0){
          return alert('Please add a valid file!');
        }
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result;
        })
        fileReader.readAsDataURL(files[0]);
        this.image = files[0];
      }

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
