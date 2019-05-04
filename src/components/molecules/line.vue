<template>
  <div :class="`ch-line line-${line.name}`">
    <div class="ch-line-wrapper">
      <ch-square
        v-for="(square, index) in line.squares"
        :key="square.id"
        :color="checkColor(parseInt(line.name), index + 1)"
        :square="square"
        :position="{
          x: line.id,
          y: square.id
        }"
      >
        <ch-piece
          v-if="square.content"
          :piece="square.content"
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
    checkColor (line, index) {
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

