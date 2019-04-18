<template>
  <div>
    <div class="ch-board">
      <ch-line
        v-for="line in board"
        :key="line.name"
        :line="line"
      />
    </div>
    <form @submit.prevent="setSquare(line, square)">
      <div>
        <label for="piece">Select a Piece:</label>
        <select v-model="piece">
          <option
            v-for="name in $options.pieces"
            :key="name"
            :value="name"
            v-text="name"
          />
        </select>
      </div>
      <div>
        <label for="line">Select a Line:</label>
        <select v-model="line">
          <option
            v-for="num in Array(8).fill().map((x,i) => i +1)"
            :key="num"
            :value="num"
            v-text="num"
          />
        </select>
      </div>
      <div>
        <label for="square">Select a Square:</label>
        <select v-model="square">
          <option
            v-for="letter in ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']"
            :key="letter"
            :value="letter"
            v-text="letter"
          />
        </select>
      </div>
      <div>
        <input type="submit" value="Put piece">
      </div>
    </form>
  </div>
</template>


<script>
import boardData from '@/components/bosons/board-static-data'
import chLine from '@/components/molecules/line'
import pieces from '@/components/bosons/pieces'

export default {
  name: 'ch-board',
  components: {
    chLine
  },
  data: () => ({
    board: boardData,
    line: 0,
    square: '',
    piece: ''
  }),
  pieces: Object.keys(pieces),
  methods: {
    setSquare(line, letter) {
      const vue = this
      vue.board = vue.board.map(item => {
        if (item.name == line) {
          item.squares = item.squares.map(item => {
            if (item.name === letter) {
              item.content = vue.piece
            }
            return item
          })
        }
        return item
      })
    }
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
  }
</style>
