<template>
  <div class="home">
    <h1>Rod Shaker Game</h1>
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '../components/Game'
export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>
