<template>
  <div>
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs3></v-flex>
        <v-flex xs6>
          <v-card id="card">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Invite a Friend</v-toolbar-title>
                </div>
            </v-toolbar>
          <v-form class="ma-3 pa-3">
            <v-text-field
              label="E-mail"

              required
            ></v-text-field>
            <div class="text-xs-center">
              <v-btn @click="submit">
                submit
              </v-btn>
              <v-btn>clear</v-btn>
            </div>
          </v-form>
        </v-card>
        </v-flex>
        <v-flex xs3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>


<style scoped>

#card {
  -webkit-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  -moz-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
}

</style>
