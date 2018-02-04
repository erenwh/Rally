<template>
  <div>
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
                    color = "red"
                  ></v-text-field>
                  <v-text-field
                    label="Add a description"
                    multi-line
                    required
                    color = "red"
                  ></v-text-field>
                  <img v-if="src" id="img" class="elevation-7" :src="src" />
                  <v-btn dark class="elevation-7" color="grey darken-4">Upload Image</v-btn>
                  <v-text-field
                    label="Location"
                    required
                    color = "red"
                  ></v-text-field>
                  <v-container>
                    <v-layout row>
                      <v-flex xs6>
                        <v-date-picker class="elevation-7" color="red" v-model="picker"></v-date-picker>
                      </v-flex>
                      <v-flex xs6>
                        <v-time-picker class="elevation-7" color="red" v-model="time"></v-time-picker>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <v-btn dark class="elevation-7" color="green accent-4">Submit</v-btn>
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
  export default {
    data () {
      return {
        src: "/../../../static/chik fil a.jpg",
        picker: '',
        time: new Date()
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
</style>
