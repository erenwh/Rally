<template>
  <div>
    <v-footer class="pa-3" id="foot">
      <router-link to="/report" tag="span" id="report">Report a problem</router-link>
      <v-spacer></v-spacer>
      <div>Rally © {{ new Date().getFullYear() }}</div>
    </v-footer>
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
#foot {
  margin-top: 100px;
}

#report{
  cursor: pointer;
}
</style>
