<template>
  <v-app class="app" light>
    <app-header></app-header>
    <main id="main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <app-footer></app-footer>
  </v-app>
</template>


<script>
import header from './components/marginals/header.vue'
import footer from './components/marginals/footer.vue'

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  data () {
    return {

    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');


.app {
  overflow: scroll;
  font-family: "Roboto Slab";
  -webkit-font-smoothing: antialiased;
}


</style>
