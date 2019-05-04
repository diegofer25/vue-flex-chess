<template>
  <div class="ch-board flex row fill-height align-item-center">
    <div class="">
      <ch-line
        v-for="line in board"
        :key="line.id"
        :line="line"
      />
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import chLine from '@/components/molecules/line'

export default {
  name: 'ch-board',
  components: {
    chLine
  },
  computed: {
    ...mapState('game', ['board'])
  },
  data: () => ({
    turn: 'white'
  }),
  created () {
    this.updateBoard()
  },
  methods: {
    ...mapActions('game', ['updateBoard']),
  },
}
</script>

<style lang="scss" scoped>
  .ch-board {
    user-select: none;
  }
</style>
