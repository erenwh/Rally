<template>
  <div id="createPage">
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs2></v-flex>
        <v-flex xs8>
          <h1 v-if="!signin" class="mb-3">Please Log in first!!</h1>
          <v-card id="card" v-if="signin">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Organize a meet up</v-toolbar-title>
              </div>
            </v-toolbar>
            <v-container fluid text-xs-center>
              <v-layout>
                <v-flex xs1></v-flex>
                <v-flex xs10>
                  <!--Form-->
                  <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="submit">
                    <v-text-field
                      label="Title"
                      id="title"
                      required
                      v-model="meet.title"
                      :rules="titleRules"
                      color = "red"
                    ></v-text-field>
                    <v-text-field
                      label="Add a description"
                      id="description"
                      multi-line
                      required
                      :rules="desRules"
                      v-model="meet.description"
                      color = "red"
                    ></v-text-field>
                    <img v-if="imageUrl" id="img" class="elevation-7" :src="imageUrl" />
                    <br />
                    <v-btn
                      color="blue-grey"
                      dark
                      class="ma-4"
                      id="uploadBTN"
                      justify-center
                      raised
                      @click="onPickFile"
                      >
                      Upload
                      <v-icon right dark>cloud_upload</v-icon>
                    </v-btn>
                    <input
                    type="file"
                    id="imgUpload"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                    />
                    <v-text-field
                      label="Location"
                      id="location"
                      required
                      :rules="locationRules"
                      v-model="meet.location"
                      color = "red"
                    ></v-text-field>

                    <v-btn id="tags" color="black" dark>Tags</v-btn>
                    <v-dialog v-model="dialog" max-width="500px">
                      <v-card>
                        <v-card-title>
                          Select Tags
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text style="height: 300px;">
                          <v-checkbox
                          id="checkbox"
                           label="Science"
                           v-model="tagSelect.Science">
                         </v-checkbox>
                         <v-checkbox
                         id="checkbox"
                          label="Games"
                          v-model="tagSelect.Games">
                        </v-checkbox>
                        <v-checkbox
                        id="checkbox"
                         label="Dancing"
                         v-model="tagSelect.Dancing">
                       </v-checkbox>
                       <v-checkbox
                       id="checkbox"
                        label="Movie"
                        v-model="tagSelect.Movie">
                      </v-checkbox>
                      <v-checkbox
                      id="checkbox"
                       label="Chauncey"
                       v-model="tagSelect.Chauncey">
                     </v-checkbox>
                     <v-checkbox
                     id="checkbox"
                      label="Swim"
                      v-model="tagSelect.Swim">
                    </v-checkbox>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="red" dark @click.stop="dialog=false">Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <input style="display: none" type="file">
                    <v-date-picker id="picker" class="elevation-7" :rules="pickerRules" color="red" v-model="meet.picker"></v-date-picker>

                    <v-time-picker id="time" class="elevation-7" color="red" :rules="timeRules" v-model="meet.time"></v-time-picker>

                    <v-divider></v-divider>
                    <v-btn dark class="elevation-7" id="sub" color="green accent-4" @click="submit">Submit</v-btn>

                  </v-form>
                  <v-alert id="alertsuccess" type="success"  :value="value" >
                    Organized a Meet :)
                  </v-alert>
                </v-flex>
                <v-flex xs1></v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs2></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        meet: {
          picker: '',
          time: new Date(),
          title: '',
          /*titleRules: [
            (v) => !!v || 'Title is required',
          ],*/
          description: '',
          location: '',
          number: 0,
          change: false
        },
        dialog: false,
        tagSelect: {
          Science: false,
          Games: false,
          Dancing: false,
          Movie: false,
          Chauncey: false,
          Swim: false
        },
        tagDes: [
          {label: "Science"},
          {label: "Games"},
          {label: "Dancing"},
          {label: "Movie"},
          {label: "Chauncey"},
          {label: "Swim"}
        ],
        image: null,
        imageUrl: '',
        email: '',
        key: '',
        valid: true,
        titleRules: [
          //(v) => !!v || 'Title is required',
        ],
        desRules: [
          //(v) => !!v || 'Description is required',
        ],
        locationRules: [
          //(v) => !!v || 'Location is required',
        ],
        signin: false,
        value: false

      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()){
          var ref = firebase.database().ref('/meets');
          var key = ref.push(this.meet);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key, tags: this.tagSelect}).then(()=>{
          //upload picture
            var filename = this.image.name;
            var ext = filename.slice(filename.lastIndexOf('.'));
            var temp = firebase.storage().ref('/meets/' + key + '.' + ext);
            temp.put(this.image).then((snap)=>{
              console.log(snap);
              this.imageUrl = snap.downloadURL;
            }).then(()=>{
              console.log(this.imageUrl);

              ref = firebase.database().ref("/meets/" + key);
              ref.update({imageUrl: this.imageUrl});
            });
          });

          ref = firebase.database().ref('/meets');
          key = ref.push(this.meet);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key, tags: this.tagSelect}).then(()=>{
          //upload picture
            var filename = this.image.name;
            var ext = filename.slice(filename.lastIndexOf('.'));
            var temp = firebase.storage().ref('/meets/' + key + '.' + ext);
            temp.put(this.image).then((snap)=>{
              console.log(snap);
              this.imageUrl = snap.downloadURL;
            }).then(()=>{
              console.log(this.imageUrl);

              ref = firebase.database().ref("/meets/" + key);
              ref.update({imageUrl: this.imageUrl});
            });
          });

          var email = firebase.auth().currentUser.email;
          var ref1 = firebase.database().ref('/profiles');
          ref1.once('value').then((snap)=>{
            snap.forEach((prof)=>{
              if (prof.val().email == email) {
                var ref2 = firebase.database().ref('/profiles/' + prof.val().key + '/organized');
                ref2.child('/' + key).update({key: key}).then(function(profile){
                });
                //this.$router.push('/orgmeets');
              }
            });
          })
        }
        this.value = true;

      },
      onPickFile(){
        //this.$refs.fileInput.click();
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
    },
    mounted(){

      try {
        var email = firebase.auth().currentUser.email;
        this.signin = true;
      }
      catch (error) {
        this.signin = false;
      }

      if(this.signin){
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            if (prof.val().email == email) {
              this.email = prof.val().email;
              this.key = prof.val().key;
            }
          });
        });
      }

    }
  }
</script>


<style scoped>
#img {
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
}

#card {
  -webkit-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  -moz-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
}

#time {
  margin: 20px 0 20px 0;
}

#picker {
  margin: 20px 0 30px 0;
}

#sub {
  margin-top: 15px;
}
</style>
