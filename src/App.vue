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
  },
  mounted () {
    this.$store.commit('getGithubRepos');
  },
}
</script>

<style src="@/styles/Style.css">
</style>
