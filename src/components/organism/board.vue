<template>
  <div>
    <div class="ch-board">
      <ch-line
        v-for="line in board"
        :key="line.name"
        :line="line"
        @update-piece="updatePiece"
        @show-moves="showMoves"
        @finish-move="finishMove"
      />
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import chLine from '@/components/molecules/line'

export default {
  name: 'ch-board',
  components: {
    chLine
  },
  computed: {
    ...mapState()
  },
  data: () => ({
    turn: 'white'
  }),
  created () {
    const vue = this
    vue.upDatePiecesPositions()
  },
  methods: {
    showMoves () {
      const vue = this
      vue.board = vue.board.map(line => {

        line.squares = line.squares.map(square => {

          // if (!square.canMove) square.canMove = true
          if (!square.canMove) square.canMove = true

          return square
        })

        return line
      })
    },

    finishMove () {
      const vue = this
      vue.board = vue.board.map(line => {

        line.squares = line.squares.map(square => {

          square.canMove = false

          return square
        })

        return line
      })
    },

    upDatePiecesPositions() {
      const vue = this
      vue.board = vue.board.map(line => {

        if (vue.pieces.some(({ position }) => position.line == line.name)) {

          line.squares = line.squares.map(square => {

            if (vue.pieces.some(({ position }) => position.square == square.name)) {

              square.content = vue.pieces.find(({ position }) => {

                return position.square == square.name && position.line == line.name
              })
            } else {
              square.content = undefined
            }
            return square
          })
        } else {
          line.squares = line.squares.map(square => {

            square.content = undefined
            return square
          })
        }
        return line
      })
    },

    updatePiece ({ id, newPosition }) {
      const vue = this
      vue.pieces = vue.pieces.map(piece => {
        if (piece.id == id) {
          piece.position = newPosition
        }
        return piece
      })
      vue.upDatePiecesPositions()
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
