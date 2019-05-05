<template>
  <div class="ch-piece grow-1" :class="[`${color}-piece`, { draggable }]">
    <span
      :draggable="draggable"
      v-html="piece.value"
      @dragstart="movePiece"
      @dragend="finishMove(piece)"
    />
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ch-piece',
  props: {
    piece: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('game', ['turn']),
    draggable () {
      return this.piece.color === this.turn
    },
    color () {
      return this.piece.color === 'black' ? 'black' : 'white'
    }
  },
  methods: {
    ...mapActions('game', [
      'showMoves',
      'finishMove',
    ]),
    movePiece (event) {
      if (this.piece.color === this.turn) {
        this.showMoves(this.piece)
        event.dataTransfer.setData("pieceId", this.piece.id)
      } else {
        // eslint-disable-next-line no-console
        console.log('Is not your turn')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .ch-piece {
    &.draggable {
      cursor: grab;
    }
    &.black-piece {
      color: black;
    }
    &.white-piece {
      color: white;
      text-shadow: 1px 1px 5px #000000;
    }
  }
</style>
