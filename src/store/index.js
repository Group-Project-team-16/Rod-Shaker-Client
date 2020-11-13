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
    SOCKET_enteringRoomPlayer1(state, payload) {
          console.log(payload, "<<< payload game components player1");
          let {username, score} = payload
          let dataUser = {
            username,
            score,
            role: "Player 1"
          }
          localStorage.setItem('role', dataUser.role)
          state.player1 = dataUser
          router.push('/home')
          // this.$store.dispatch('inputUser', dataUser)
      },
      SOCKET_enteringRoomPlayer2(state, payload) {
        console.log(payload, "<<< payload game components player2");
        let {username, score} = payload
        let dataUser = {
          username,
          score,
          role: "Player 2"
        }
        localStorage.setItem('role', dataUser.role)
        state.player2 = dataUser
        router.push('/home')
        // this.$store.dispatch('inputUser', dataUser)
    },
    inputUserMutation(state, dataUser) {
      if(dataUser.role == 'Player 1'){
        state.player1 = dataUser
        localStorage.setItem('username', dataUser.role)
        router.push('/home')
      } else if(dataUser.role == "Player 2") {
        state.player2 = dataUser
        localStorage.setItem('username', dataUser.role)
        router.push('/home')
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
    }
  },
  modules: {

  }
})
