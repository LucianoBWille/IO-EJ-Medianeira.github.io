import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repoInfo: null
  },
  mutations: {
    getGithubRepos(){
      axios
        .get('https://api.github.com/users/IO-EJ-Medianeira/repos')
        .then(response => (this.state.repoInfo = response.data))
    }
  },
  actions: {
  },
  modules: {
  }
})
