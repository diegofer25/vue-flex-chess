<template>
  <div>
    <div class="ch-board">
      <ch-line
        v-for="line in board"
        :key="line.name"
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0 auto;
    width: 800px;
    height: 800px;
    user-select: none;
  }
</style>
