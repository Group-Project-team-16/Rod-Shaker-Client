<template>
  <div class="container" id="game">
    <div class="flex-container">
      <div id="player"><img v-bind:src="require('../sprites/' + gif)" /></div>
      <div id="playertwo"><img src="../sprites/idle-p2.gif"></div>
      <button @click="narik"></button>
      <button @click="start"></button>
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
      timeBeforeStart: 0,
      scoreOne: 0,
      scoreTwo: 0,
      timeRand: 0,
      cekInterval: 100
    }
  },
  methods: {
    narik () {
      if (this.timeBeforeStart < this.timeRand) {
        this.scoreOne = this.scoreOne - 10
      } else if (this.timeBeforeStart >= this.timeRand) {
        this.scoreOne = this.scoreOne + 10
        this.timeBeforeStart = 0
        this.gif = 'narik-p1.gif'
        setTimeout(() => {
          this.gif = 'idle-p1.gif'
        }, 1500)
      }
    },
    randomTime () {
      this.timeRand = Math.floor(Math.random() * (90 - 50 + 1)) + 50
    },
    gantiKeIdle () {
      this.gif = 'idle-p1.gif'
    },
    update () {
      if (this.timeBeforeStart > this.timeRand) {
        this.gif = 'umpan-dimakan-p1.gif'
      } else {
        this.timeBeforeStart++
      }
    },
    interval () {
      console.log(this.cekInterval, 'cek Interval')
      setInterval(this.update, this.cekInterval)
    },
    start () {
      this.interval()
    }
  },
  created () {
    this.randomTime()
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
