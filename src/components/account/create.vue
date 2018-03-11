<template>
  <div id="createPage">
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs2></v-flex>
        <v-flex xs8>
          <v-card id="card">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Organize a meet up</v-toolbar-title>
              </div>
            </v-toolbar>
            <v-container fluid text-xs-center>
              <v-layout>
                <v-flex xs1></v-flex>
                <v-flex xs10>
                  <v-text-field
                    label="Title"
                    id="title"
                   
                    required
                    v-model="meet.title"
                    color = "red"
                  ></v-text-field>
                  <v-text-field
                    label="Add a description"
                    id="description"
                    multi-line
                    required
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
                  style="display: none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                  />
                  <v-text-field
                    label="Location"
                    id="location"
                    required
                    v-model="meet.location"
                    color = "red"
                  ></v-text-field>

                  <v-btn id="tags" color="black" dark @click.stop="dialog = true">Tags</v-btn>
                  <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                      <v-card-title>
                        Select Tags
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                        <v-checkbox
                        id="checkbox"
                         v-for="item in tagDes"
                         :key="item.label"
                         :label="item.label"
                         v-model="tagSelect.science"></v-checkbox>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="red" dark @click.stop="dialog=false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <input style="display: none" type="file">
                  <v-date-picker id="picker" class="elevation-7" color="red" v-model="meet.picker"></v-date-picker>
                  {{meet.picker}}
                  <v-time-picker id="time" class="elevation-7" color="red" v-model="meet.time"></v-time-picker>
                  {{meet.time}}
                  <v-divider></v-divider>
                  <v-btn dark class="elevation-7" id="sub" color="green accent-4" @click="submit">Submit</v-btn>
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
          science: false
        },
        tagDes: [
          {label: "Science"}
        ],
        image: null,
        imageUrl: '',
        email: '',
        key: ''
      }
    },
    methods: {
      submit() {
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

        var email = firebase.auth().currentUser.email;
        var ref1 = firebase.database().ref('/profiles');
        ref1.once('value').then((snap)=>{
          snap.forEach((prof)=>{
            if (prof.val().email == email) {
              var ref2 = firebase.database().ref('/profiles/' + prof.val().key + '/organized');
              ref2.child('/' + key).update({key: key}).then(function(profile){
              });
              this.$router.push('/orgmeets');
            }
          });
        })

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
    },
    mounted(){
      var email = firebase.auth().currentUser.email;
      var ref = firebase.database().ref('/profiles');
      ref.once('value').then((snap)=>{
        snap.forEach((prof)=>{
          if (prof.val().email == email) {
            this.email = prof.val().email;
            this.key = prof.val().key;
          }
        });
      })
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
