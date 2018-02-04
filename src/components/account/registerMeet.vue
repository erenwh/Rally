<template>
  <div>
    <v-container fluid text-xs-center>
      <v-layout>
        <v-flex xs1></v-flex>
        <v-flex xs10>
          <v-container fluid text-xs-center>
            <v-layout row wrap>
              <v-flex xs4 id="col">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text">iOS Dev Club Meeting</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" src="/../../../static/chik fil a.jpg"/>
                  <h3 class="ma-3">March 3rd, 2017</h3>
                  <h3 class="ma-3">12:30 pm</h3>
                  <v-btn v-if="!register" class="mb-3" dark color="green accent-4">Register</v-btn>
                  <v-btn v-if="register" class="mb-3" dark color="red accent-4">Unregister</v-btn>
                </v-card>
              </v-flex>
              <v-flex xs4 id="col">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text">iOS Dev Club Meeting</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" src="/../../../static/chik fil a.jpg"/>
                  <h3 class="ma-3">March 3rd, 2017</h3>
                  <h3 class="ma-3">12:30 pm</h3>
                  <v-btn v-if="!register" class="mb-3" dark color="green accent-4">Register</v-btn>
                  <v-btn v-if="register" class="mb-3" dark color="red accent-4">Unregister</v-btn>
                </v-card>
              </v-flex>
              <v-flex xs4 id="col">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text">iOS Dev Club Meeting</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" src="/../../../static/chik fil a.jpg"/>
                  <h3 class="ma-3">March 3rd, 2017</h3>
                  <h3 class="ma-3">12:30 pm</h3>
                  <v-btn v-if="!register" class="mb-3" dark color="green accent-4">Register</v-btn>
                  <v-btn v-if="register" class="mb-3" dark color="red accent-4">Unregister</v-btn>
                </v-card>
              </v-flex>
              <v-flex xs4 id="col">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text">iOS Dev Club Meeting</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" src="/../../../static/chik fil a.jpg"/>
                  <h3 class="ma-3">March 3rd, 2017</h3>
                  <h3 class="ma-3">12:30 pm</h3>
                  <v-btn v-if="!register" class="mb-3" dark color="green accent-4">Register</v-btn>
                  <v-btn v-if="register" class="mb-3" dark color="red accent-4">Unregister</v-btn>
                </v-card>
              </v-flex>
              <v-flex xs4 id="col">
                <v-card dark color="blue-grey darken-4" class="elevation-7">
                  <v-toolbar id="tool" dark color="grey darken-4">
                    <v-toolbar-title class="white--text">iOS Dev Club Meeting</v-toolbar-title>
                  </v-toolbar>
                  <img class="elevation-7" id="img" src="/../../../static/chik fil a.jpg"/>
                  <h3 class="ma-3">March 3rd, 2017</h3>
                  <h3 class="ma-3">12:30 pm</h3>
                  <v-btn v-if="!register" class="mb-3" dark color="green accent-4">Register</v-btn>
                  <v-btn v-if="register" class="mb-3" dark color="red accent-4">Unregister</v-btn>
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
  export default {
    data () {
      return {
        register: true
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
