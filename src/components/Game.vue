<template>
  <div class="container" id="game">
    <div class="flex-container">
      <div id="player"><img v-bind:src="require('../sprites/' + gif)" /></div>
      <div id="playertwo"><img src="../sprites/idle-p2.gif"></div>
    </div>
    <div class="d-flex justify-content-between" id="container-score">
      <div id="PlayeroneConsole">
        <button @click="narik" class="btn btn-primary mb-3">Tarik Sist!!</button>
        <h1>Score : 0</h1>
      </div>
      <div id="PlayerTwoConsole">
        <button class="btn btn-danger mb-3">Tarik Sist!!</button>
        <h1>Score : 0</h1>
      </div>
    </div>
            <!-- <div id="enemy"><img src="sprites/enemy-idle.png"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      gif: 'idle-p1.gif',
      timeBeforeStart: 0
    }
  },
  methods: {
    narik () {
      this.timeBeforeStart = 0
      this.gif = 'narik-p1.gif'
      setTimeout(() => {
        this.gif = 'idle-p1.gif'
        this.interval()
      }, 1500)
    },
    gantiKeIdle () {
      this.gif = 'idle-p1.gif'
    },
    update () {
      if (this.timeBeforeStart > 900) {
        this.gif = 'umpan-dimakan-p1.gif'
      } else {
        console.log('less than 200')
        this.timeBeforeStart++
      }
    },
    interval () {
      this.timeBeforeStart = 0
      setInterval(this.update, 10)
    }
  },
  created () {
    this.interval()
  }
}
</script>

<style>
    #btn {
      position: absolute;
    }
    .flex-container {
      display: flex;
      justify-content: space-around;
      height: 550px;
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
