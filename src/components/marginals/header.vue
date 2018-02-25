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
          :to="item.link">
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
        v-if="signin">
        <v-list-group v-for="item in menuItems" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile
            v-for="subItem in item.itemS"
            v-bind:key="subItem.title"
            @click=""
            :to="subItem.link">
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

      </v-list>
      <v-list
        dense
        v-for="item in otherItems"
        v-bind:key="item.title"
        v-if="signin"
        >
        <v-list-tile @click="otherItem(item.title)"
          :to="item.link">
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
        color="white"
        ></v-text-field>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import {bus} from '../../main';
  export default {
    data () {
      return {
        sideNav: false,
        signin: false,
        itemNS: [
          { icon: "lock_open", title: "Sign In", link: "/signin" },
          { icon: "face", title: "Register", link: "/register" }
        ],
        menuItems: [
          { icon: "account_box", title: "Account",
            itemS: [
              { icon: "account_circle", title: "Account Information", link: "/accInfo"},
              { icon: "favorite", title: "Registered Meetings", link: "/meets" },
              { icon: "bookmark", title: "Organized Meetings", link: "/orgmeets" },
              { icon: "lock", title: "Sign Out", link: "" }
            ]
          }
        ],
        otherItems: [
          { icon: "create", title: "Create a Rally", link: "/create" },
          { icon: "credit_card", title: "Donate", link: "/donate" },
          { icon: "get_app", title: "Invite a friend", link: "/invite" },
          { icon: "gavel", title: "Report a problem", link: "/report" }
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
        if(data === "Sign Out") {
          this.signin = false;
          this.$router.push('/');
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
