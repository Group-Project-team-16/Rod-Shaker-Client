<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-4 p-5">
        <img src="https://www.flaticon.com/premium-icon/icons/svg/3066/3066642.svg" class="rounded img-fluid" alt="">
        <h2 class="font-weight-bold mt-4 mb-4">Welcome</h2>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <input v-model="username" type="text" class="form-control form-control-sm " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username">
          </div>
          <button type="submit" class="btn btn-secondary btn-sm btn-block">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      this.$socket.emit('joinRoom', this.username)
      // this.$store.dispatch('loginAction', this.username)
    }
  },
  sockets: {
    enteringRoomPlayer1(payload) {
      console.log(payload, "<<< payload game components player1");
      let {username, score} = payload
      let dataUser = {
        username,
        score,
        role: "Player 1"
      }
      this.$store.dispatch('inputUser', dataUser)
    },
    enteringRoomPlayer2(payload){
      console.log(payload, "payload game components player2");
      let {username, score} = payload
      let dataUser = {
        username,
        score,
        role: "Player 2"
      }
      this.$store.dispatch('inputUser', dataUser)
    }
  }
}
</script>
<style scoped>
  .container{
    align-items: center;
  }
  .col-4{
    border: 0px solid black;
    border-radius: 5px;
    box-shadow: 0px 1px 2px grey;
    height: 23rem;
  }

  .rounded{
    width: 40%;

  }
</style>
