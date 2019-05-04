<template>
  <div id="app">
    <h2 v-text="blackText" />
    <div style="display: flex; flex-direction: row">
      <div style="flex-grow: 1">
        <div style="display: flex; flex-direction: column" v-for="item in board" :key="item.name">
          <div style="height: 100px; width: 100px;   line-height: 100px; text-align: center;">
            <span v-text="item.id"></span>
          </div>
        </div>
      </div>
      <div style="flex-grow: 1">
        <div style="display: flex; flex-direction: column">
          <div style="flex-grow: 1">
            <ch-board />
          </div>
          <div style="display: flex, flex-direction: column">
            <div style="flex-grow: 1 100%; max-height: 100px;">
              <div style="display: flex; flex-direction: row; height: 100px; margin-top: 10px;">
                <div v-for="item in board[0].squares" :key="item.name" style="flex-grow: 1 12.5%; width: 100px;">
                  <span v-text="item.id"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    ...mapState('game', ['turn', 'board']),
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
  }
</style>
