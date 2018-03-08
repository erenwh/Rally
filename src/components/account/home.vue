<template>
  <div>
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
        register: false,
        meets: []
      }
    },
    created() {
      var ref = firebase.database().ref('/meets');
      var meets = [];
      ref.once('value').then((snap)=>{
        snap.forEach((meet)=>{
          meets.push(meet.val());
          this.meets = meets;
        });
      });
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

</style>
