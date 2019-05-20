<template>
  <div class="ch-board flex row justify-center">
    <div class="grow-1">
      <div class="flex row nowrap">
        <div class="y-axis">
          y axis
        </div>
        <div class="grow-1">
          <div class="flex-column">
            <div class="grow-1">
              <ch-line v-for="line in board" :line="line" :key="line.id" />
            </div>
            <div class="x-axis">
              x axis
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import { chLine } from '@/components/organisms'

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
