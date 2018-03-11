<template>
  <div>
    <v-navigation-drawer
      temporary
      v-model="sideNav"
      fixed
    >
      <v-list
        dense
        v-for="item in itemNS"
        v-bind:key="item.title"
        v-if="!signin"
        >
        <v-list-tile
          :to="item.link"
          :id="item.id">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list
        dense
        v-if="signin"
        >
        <v-list-tile
          v-for="item in otherItems"
          v-bind:key="item.title"
          :to="item.link"
          @click="otherItem(item)"
          :id="item.id">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey darken-4" dark dense>
      <v-toolbar-side-icon id="side" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" id="title">Rally</router-link>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import {bus} from '../../main';
  export default {
    data () {
      return {
        sideNav: false,
        signin: false,
        itemNS: [
          { icon: "lock_open", title: "Sign In", link: "/signin", id: "signSide" },
          { icon: "face", title: "Register", link: "/register", id: "regSide" }
        ],
        menuItems: [
          { icon: "account_box", title: "Account",
            itemS: [

            ]
          }
        ],
        otherItems: [
          { icon: "account_circle", title: "Account Information", link: "/accInfo", id: "acc"},
          { icon: "favorite", title: "Registered Meetings", link: "/meets", id: "reg" },
          { icon: "bookmark", title: "Organized Meetings", link: "/orgmeets", id: "org" },
          { icon: "create", title: "Create a Rally", link: "/create", id: "create" },
          { icon: "credit_card", title: "Donate", link: "/donate", id: "donate" },
          { icon: "get_app", title: "Invite a friend", link: "/invite", id: "invite" },
          { icon: "gavel", title: "Report a problem", link: "/report", id: "report" },
          { icon: "lock", title: "Sign Out", link: "", id: "signout" }
        ]
      }
    },
    created() {
      bus.$on('signChange', (data) => {
        this.signin = data;
      })
    },
    methods: {
      otherItem(data) {
        if(data.title === "Sign Out") {
          console.log("here");
          this.signin = false;
          this.sideNav = false;
          firebase.auth().signOut().then((function() {
            this.$router.push("/");
            console.log('Signed Out');
          }).bind(this));

        }
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
