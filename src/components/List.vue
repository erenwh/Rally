<template>
  <div>
    <h1>My To Do List</h1>
    <br>
    <!--displays list -->
    <ul>
      <li v-for="item in listItems" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
    }
  }
}
</script>