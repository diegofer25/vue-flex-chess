<template>
  <div
    ref="ch-square"
    class="ch-square xs-12"
    :class="`${color}-square`"
    @dragover.prevent
    @drop="getMove"
    @click="makeMove"
    :style="{ height }"
  >
    <div class="flex row fill-height" :class="{ 'can-move': square.canMove  }">
      <ch-piece
        v-if="square.content"
        :piece="square.content"
      />
    </div>
  </div>
</template>

<script>
import { chPiece } from '@/components/atoms'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'ch-square',
  components: {
    chPiece
  },
  props: {
    color: {
      type: String,
      required: true,
      validator: (value) => ['green', 'black', 'white'].indexOf(value) !== -1
    },
    square: {
      type: Object,
      required: true
    },
    position: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('game', ['heldPiece'])
  },
  data: () => ({
    height: 0
  }),
  mounted() {
    const vue = this
    vue.$nextTick(() => {
      vue.height = vue.$refs['ch-square'].clientWidth + 'px'
      window.addEventListener('resize', () => {
        vue.height = vue.$refs['ch-square'].clientWidth + 'px'
      })
    })
  },
  methods: {
    ...mapActions('game', [
      'endTurn',
      'setPiecePosition',
      'hidePermitiveMoves'
    ]),
    ...mapMutations('game', ['SET_HELD_PIECE']),
    getMove (e) {
      const vue = this
      e.preventDefault();
      var id = parseInt(e.dataTransfer.getData("pieceId"))
      if (vue.square.canMove) {
        vue.setPiecePosition({ id, newPosition: this.position, color: this.color })
        vue.hidePermitiveMoves()
        vue.endTurn()
      }
    },

    makeMove () {
      if (this.heldPiece && this.square.canMove) {
        this.setPiecePosition({ id: this.heldPiece, newPosition: this.position, color: this.color  })
        this.hidePermitiveMoves()
        this.endTurn()
        this.SET_HELD_PIECE(null)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .ch-square {
    &.white-square {
      background-color: rgb(255, 255, 255);
    }
    &.black-square {
      background-color: #757575;
    }
    .can-move {
      background-color: rgba(121, 201, 0, 0.5);
    }
  }
</style>

