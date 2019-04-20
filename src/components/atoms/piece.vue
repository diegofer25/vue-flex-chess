<template>
  <div class="ch-piece">
    <div :class="`piece ${color}-piece`">
      <span
        draggable="true"
        v-html="piece.value"
        @dragstart="movePiece"
        @dragend="$emit('finish-move', piece)"
      />
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
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
    color () {
      return this.piece.name.includes('black') ? 'black' : 'white'
    }
  },
  methods: {
    movePiece (event) {
      if (this.piece.name.includes(this.turn)){
        this.$emit('show-moves', this.piece)
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
    flex-grow: 1;
    height: 100%;
    .piece {
      font-size: 5.35rem;
      text-align: center;
      text-justify: auto;
      cursor: grab;
      &.black-piece {
        color: black;
      }
      &.white-piece {
        color: white;
        text-shadow: 1px 1px 5px #000000;
      }
    }
  }
</style>
