<template>
  <div class="ch-piece">
    <div :class="`piece ${color}-piece`" v-html="$options.pieces[piece]"></div>
  </div>
</template>


<script>
import pieces from '@/components/bosons/pieces'

export default {
  name: 'ch-piece',
  props: {
    piece: {
      type: String,
      required: true
    }
  },
  computed: {
    color () {
      return this.piece.includes('black') ? 'black' : 'white'
    }
  },
  pieces
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
        text-shadow: 0 0 5px #000000;
      }
    }
  }
</style>
