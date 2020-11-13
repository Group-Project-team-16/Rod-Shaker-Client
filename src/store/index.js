import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    player1: {
      username: '',
      score: 0,
      role: ''
    },
    player2: {
      username: '',
      score: 0,
      role: ''
    }
  },
  mutations: {
    loginMutation(state,payload){
      state.username = payload
    },
    inputUserMutation(state, dataUser) {
      if(dataUser.role == 'Player 1'){
        state.player1 = dataUser
        localStorage.setItem('username', dataUser.username)
      } else if(dataUser.role == "Player 2") {
        state.player2 = dataUser
        localStorage.setItem('username', dataUser.username)
      }
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
        console.log(response.data, "<<<< response")
        this.$socket.emit('joinRoom', response)
        // console.log('function login action')
        localStorage.setItem('username', payload)
        router.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
    },
    inputUser(context, dataUser){
      console.log(dataUser, "<<< data User");
      context.commit('inputUserMutation', dataUser)
      router.push('/home')
    }
  },
  modules: {

  }
})
