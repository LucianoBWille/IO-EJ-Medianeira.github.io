<template>
  <div id="app">
    <IoMenu></IoMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import IoMenu from './components/Menu'

export default {
  name: 'LayoutDefault',

  components: {
    IoMenu,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body{
  color: #ffffff;
  background-color: #121212;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
