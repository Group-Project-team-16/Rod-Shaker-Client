import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    loginMutation(state,payload){
      state.username = payload
    }
  },
  actions: {
    loginAction(context,payload){
      axios({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: {
        username: payload
      }
    })
      .then(response => {
        console.log(response)
        console.log('function login action')
        localStorage.setItem('username', payload)
        router.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
