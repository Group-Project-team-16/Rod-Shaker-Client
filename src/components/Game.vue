<template>
  <div class="container" id="game">
    <div class="flex-container">
      <div id="player"><img v-bind:src="require('../sprites/' + gif)" /></div>
      <div id="playertwo"><img src="../sprites/idle-p2.gif"></div>
      <button @click="narik"></button>
    </div>
            <!-- <div id="enemy"><img src="sprites/enemy-idle.png"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      gif: 'idle-p1.gif'
    }
  },
  methods: {
    narik () {
      this.gif = 'narik-p1.gif'
    }
    // },
    // update () {
    //   let timeBeforeStart = 0;
    //   if(timeBeforeStart > 500) {

    //   } else {
    //     timeBeforeStart++;
    //   }
    // },
    // interval () {
    //   setInterval(this.update, 10)
    // }
  }
}
</script>

<style>
    .flex-container {
      display: flex;
      justify-content: space-around;
    }

    #game {
    margin: 0 auto;
    width: 600px;
    height: 400px;
    background-image: url("../sprites/background.gif");
    background-size: 600px 400px;
    background-repeat: no-repeat;
    border: 5px solid grey;
    border-radius: 15px;
    }
    #player {
    top: -8rem;
    left: 5rem;
    position: relative;
    display: inline;
    }

    #player img {
      height: 650px;
    }

    #playertwo {
    top: -9.5rem;
    right: 6rem;
    position: relative;
    display: inline;
    }

    #playertwo img {
      height: 650px;
    }
</style>
