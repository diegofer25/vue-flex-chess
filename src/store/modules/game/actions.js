export default {
  endTurn ({ state, commit }) {
    const turn = { white: 'black', black: 'white' }
    commit('SET_TURN', turn[state.turn])
  },

  updateBoard ({ state, commit }) {
    commit('SET_BOARD', state.board.map(line => {

      if (state.pieces.some(({ captured, position }) => position.x === line.id && !captured)) {

        line.squares = line.squares.map(square => {

          if (state.pieces.some(({ captured, position }) => position.y === square.id && !captured)) {

            square.content = state.pieces.find(({ position }) => {

              return position.y === square.id && position.x === line.id
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
    }))
  },

  showMoves ({ state, commit, getters }, piece) {

    const moves = getters.getMovesFromPiece(piece)

    commit('SET_BOARD', state.board.map(line => {

      if (moves.some(m => m.x === line.id)) {

        line.squares = line.squares.map(square => {

          if (moves.some(m => m.y === square.id)) {
            square.canMove = true
          }
          return square
        })

      }
      return line
    }))
  },

  finishMove ({ state, commit }) {
    commit('SET_BOARD', state.board.map(line => {

      line.squares = line.squares.map(square => {

        square.canMove = false

        return square
      })

      return line
    }))
  },

  setPiecePosition ({ state, commit, dispatch }, { id, newPosition }) {
    commit('SET_PIECES', state.pieces.map(piece => {
      if (piece.x === newPosition.x && piece.y === newPosition.y) {
        piece.captured = true
      }
      if (piece.id === id) {
        piece.position = newPosition
      }
      return piece
    }))
    dispatch('updateBoard')
  }
}
