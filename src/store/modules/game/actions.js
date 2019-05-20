export default {
  endTurn ({ state, commit }) {
    const turn = { white: 'black', black: 'white' }
    commit('SET_TURN', turn[state.turn])
  },

  updateBoard ({ state, commit }) {
    const { board, pieces } = state
    commit('SET_BOARD', board.map(line => {

      if (pieces.some(({ captured, position }) => position.x === line.id && !captured)) {

        line.squares = line.squares.map(square => {

          if (pieces.some(({ captured, position }) => position.y === square.id && !captured)) {

            if (line.id > 2 && line.id < 6) {
              const piece = pieces.find(({ position }) => {

                return position.y === square.id && position.x === line.id
              })
              square.content = piece
              // eslint-disable-next-line no-console
              if (piece) console.log(line.id, square.id, piece.position)
            } else {

              square.content = pieces.find(({ position }) => {

                return position.y === square.id && position.x === line.id
              })

            }


          } else {
            square.content = undefined
          }
          return square
        })
      } else {
        line.squares = line.squares.map(square => {
          if (square.content) {
            square.content = undefined
          }
          return square
        })
      }
      return line
    }))
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

  setPiecePosition ({ state, commit, dispatch }, { id, newPosition, color }) {
    const { board, pieces } = state
    commit('SET_PIECES', pieces.map(piece => {
      if (piece.x === newPosition.x && piece.y === newPosition.y && piece.color !== color) {
        piece.captured = true
      }
      if (piece.id === id) {
        board[piece.position.x].squares[piece.position.y].content = undefined
        commit('SET_BOARD', board)
        piece.position = newPosition
      }
      return piece
    }))
    dispatch('updateBoard')
  }
}
