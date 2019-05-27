export default {
  endTurn ({ state, commit }) {
    const turn = { white: 'black', black: 'white' }
    commit('SET_TURN', turn[state.turn])
  },

  togglePermitiveMoves ({ state, commit, getters }, { piece, flag }) {

    const moves = getters.getMovesFromPiece(piece)

    commit('SET_BOARD', state.board.map(line => {

      if (moves.some(m => m.x === line.id)) {

        line.squares = line.squares.map(square => {

          if (moves.some(m => m.y === square.id)) {
            square.canMove = flag
          } else {
            square.canMove = false
          }
          return square
        })

      }
      return line
    }))
  },

  hidePermitiveMoves ({ state, commit }) {
    commit('SET_BOARD', state.board.map(line => {

      line.squares = line.squares.map(square => {

        square.canMove = false

        return square
      })

      return line
    }))
  },
}
