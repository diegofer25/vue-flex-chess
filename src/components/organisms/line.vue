<template>
  <div class="ch-line flex row nowrap" :class="`line-${line.name}`">
    <ch-square
      v-for="(square, index) in line.squares"
      :key="square.id"
      :color="checkColor(parseInt(line.name), index + 1)"
      :square="square"
      :position="{
        x: line.id,
        y: square.id
      }"
    />
  </div>
</template>

<script>
import chSquare from '@/components/molecules/square'
export default {
  components: {
    chSquare
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
  }
</style>

