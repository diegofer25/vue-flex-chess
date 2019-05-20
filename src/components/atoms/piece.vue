<template>
  <div
    class="ch-piece grow-1 fill-height"
    :class="[`${color}-piece`, { draggable }]"
  >
    <div class="flex row fill-height justify-center align-items-center">
      <div
        class="piece-theme-default"
        :class="`piece-theme-default ${piece.color}-${piece.name}`"
        :draggable="draggable"
        @dragstart="movePiece"
        @dragend="togglePermitiveMoves({ piece, flag: false })"
        @click="showPermitiveMoves(piece)"
      />
    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from 'vuex'
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
      'togglePermitiveMoves'
    ]),
    ...mapMutations('game', ['SET_HELD_PIECE']),
    movePiece (event) {
      if (this.piece.color === this.turn) {
        this.togglePermitiveMoves({ piece: this.piece, flag: true })
        event.dataTransfer.setData("pieceId", this.piece.id)
      } else {
        // eslint-disable-next-line no-console
        console.log('Is not your turn')
      }
    },

    showPermitiveMoves (piece) {
      if (this.piece.color === this.turn) {
        this.SET_HELD_PIECE(piece.id)
        this.togglePermitiveMoves({ piece, flag: true })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/styles/pieces-themes/index.scss';
  .ch-piece {
    font-size: 100%;
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
    p {
      font-size: 4rem;
    }
  }
</style>
