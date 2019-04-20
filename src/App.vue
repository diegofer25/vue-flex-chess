<template>
  <div id="app">
    <h2 v-text="blackText" />
    <ch-board />
    <h2 v-text="whiteText" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import chBoard from '@/components/organism/board'
export default {
  name: 'app',
  components: {
    chBoard
  },
  computed: {
    ...mapState('game', ['turn']),
    blackText () {
      return this.turn === 'black' ? 'Sua vez de jogar' : 'Aguarde a seu oponente'
    },
    whiteText () {
      return this.turn === 'white' ? 'Sua vez de jogar' : 'Aguarde a seu oponente'
    }
  },
}
</script>

<style lang="scss">
  @import './styles/variables/index';

  body {
    color: white;
    background: $background;
    #app {
      text-align: center;
    }
  }
</style>
