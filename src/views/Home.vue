<template>
  <div class="home">
    <Navbar/>
    <h1>Rod Shaker Game</h1>
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '../components/Game'
import Navbar from '../components/Navbar'
export default {
  name: 'Home',
  components: {
    Game, Navbar
  },
}
</script>
