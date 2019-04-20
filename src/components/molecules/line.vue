<template>
  <div :class="`ch-line line-${line.name}`">
    <div class="ch-line-wrapper">
      <ch-square
        v-for="(square, index) in line.squares"
        :key="square.name"
        :color="checkColor(parseInt(line.name), index + 1, square)"
        :square="square"
        :position="{
          line: line.name,
          square: square.name
        }"
        @update-piece="(payload) => $emit('update-piece', payload)"
        @finish-move="(e) => $emit('finish-move', e)"
      >
        <ch-piece
          v-if="square.content"
          :piece="square.content"
          @show-moves="(e) => $emit('show-moves', e)"
          @finish-move="(e) => $emit('finish-move', e)"
        />
      </ch-square>
    </div>
  </div>
</template>

<script>
import chSquare from '@/components/atoms/square'
import chPiece from '@/components/atoms/piece'
export default {
  components: {
    chSquare,
    chPiece
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkColor (line, index, square) {
      if (square.canMove) {
        return 'green'
      }
      if (line % 2 === 0) {
        if (index % 2 === 0) {
          return 'black'
        }
        return 'white'
      }
      if (index % 2 === 0) {
        return 'white'
      }
      return 'black'
    }
  },
}
</script>

<style lang="scss" scoped>
  .ch-line {
    width: 800px;
    .ch-line-wrapper {
      display: flex;
      height: 100px;
    }
  }
</style>

