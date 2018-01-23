<template>
  <div>
    <v-navigation-drawer
      temporary
      v-model="sideNav"
      fixed
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey darken-4" dark dense>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" id="title">Rally</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div id="search">
        <v-text-field
        prepend-icon="search"
        hide-details
        single-line
        clearable
        ></v-text-field>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>


<style scoped>
#search {
  margin-right: 3%;
}

#title{
  cursor: pointer;
}
</style>
