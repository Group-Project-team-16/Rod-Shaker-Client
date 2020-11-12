<template>
  <div class="container" id="game">
    <div class="flex-container">
      <div id="player"><img v-bind:src="require('../sprites/' + gif)" /></div>
      <div id="fishes" :style="'margin-top: ' + fishPos + 'rem'">
        <div class="d-flex flex-column-reverse bd-highlight mr-3">
          <div v-for="(fish, i) in fishes" :key="i" class="bd-highlight"><img src="../sprites/fish.gif" /></div>
        </div>
      </div>
      <div id="playertwo"><img v-bind:src="require('../sprites/' + gif2)" /></div>
    </div>
    <div class="d-flex justify-content-between" id="container-score">
      <div id="PlayeroneConsole">
        <button @click="narik(1)" class="btn btn-primary mb-3">Tarik Sist!!</button>
        <h1>Score : {{scoreOne}}</h1>
      </div>
      <div id="PlayerTwoConsole">
        <button @click="narik(2)" class="btn btn-danger mb-3">Tarik Sist!!</button>
        <h1>Score : {{scoreTwo}} </h1>
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
      gif2: 'idle-p2.gif',
      timeBeforeStart: 0,
      fishPos: 17,
      scoreOne: 0,
      scoreTwo: 0,
      timeRand: 0,
      cekInterval: 100,
      fishes: 0,
      newscore1: 0
    }
  },
  methods: {
    narik (player) {
      if (player === 1) {
        if (this.timeBeforeStart < this.timeRand) {
          this.scoreOne = this.scoreOne - 10
        } else if (this.timeBeforeStart >= this.timeRand) {
          this.fishes = 1
          // this.fishes++
          // this.fishPos = this.fishPos - 3
          this.scoreOne = this.scoreOne + 10
          this.timeBeforeStart = 0
          this.gif = 'narik-p1.gif'
          this.gif2 = 'idle-p2.gif'
          setTimeout(() => {
            this.fishes = 0
            this.gif = 'idle-p1.gif'
          }, 1500)
        }
        this.$socket.emit('narik1', this.scoreOne)
      } else {
        if (this.timeBeforeStart < this.timeRand) {
          this.scoreTwo = this.scoreTwo - 10
        } else if (this.timeBeforeStart >= this.timeRand) {
          this.fishes = 1
          // this.fishes++
          // this.fishPos = this.fishPos - 3
          this.scoreTwo = this.scoreTwo + 10
          this.timeBeforeStart = 0
          this.gif2 = 'narik-p2.gif'
          this.gif = 'idle-p1.gif'
          setTimeout(() => {
            this.fishes = 0
            this.gif2 = 'idle-p2.gif'
          }, 1500)
        }
        this.$socket.emit('narik2', this.scoreTwo)
      }
    },
    randomTime () {
      this.timeRand = Math.floor(Math.random() * (50 - 30 + 1)) + 30
    },
    gantiKeIdle () {
      this.gif = 'idle-p1.gif'
    },
    update () {
      if (this.timeBeforeStart > this.timeRand) {
        this.gif = 'umpan-dimakan-p1.gif'
        this.gif2 = 'umpan-dimakan-p2.gif'
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
    this.interval()
    this.randomTime()
  },
  sockets: {
    narik1 (score) {
      this.scoreOne = score
    },
    narik2 (score) {
      this.scoreTwo = score
    }
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
    width: 700px;
    height: 400px;
    background-image: url("../sprites/background.gif");
    background-size: 700px 400px;
    background-repeat: no-repeat;
    border: 5px solid grey;
    border-radius: 15px;
    }
    #player {
    top: -4rem;
    left: 3rem;
    position: relative;
    display: inline;
    }

    #player img {
      height: 550px;
    }

    #playertwo {
    top: -5.5rem;
    right: 2.2rem;
    position: relative;
    display: inline;
    }

    #playertwo img {
      height: 550px;
    }
</style>
