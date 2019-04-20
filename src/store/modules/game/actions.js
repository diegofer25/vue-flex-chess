export default {
  setTurn ({ state, commit }) {
    const color = state.turn === 'white' ? 'black' : 'white'
    commit('SET_TURN', color)
  },

  upDatePiecesPositions ({ state, commit }) {
    commit('SET_BOARD', state.board.map(line => {

      if (state.pieces.some(({ position }) => position.line == line.name)) {

        line.squares = line.squares.map(square => {

          if (state.pieces.some(({ position }) => position.square == square.name)) {

            square.content = state.pieces.find(({ position }) => {

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
    }))
  },

  showMoves ({ state, commit }) {
    commit('SET_BOARD', state.board.map(line => {

      line.squares = line.squares.map(square => {

        // if (!square.canMove) square.canMove = true
        if (!square.canMove) square.canMove = true

        return square
      })

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

  setPiecePosition ({ state, commit }, { id, newPosition }) {
    commit('SET_PIECES', state.pieces.map(piece => {
      if (piece.id == id) {
        piece.position = newPosition
      }
      return piece
    }))
  }
}
