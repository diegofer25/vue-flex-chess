export default {
  SET_TURN (state, turn) {
    state.turn = turn
  },

  SET_BOARD (state, board) {
    state.board = board
  },

  SET_HELD_PIECE (state, heldPiece) {
    state.heldPiece = heldPiece
  },

  SET_CAPTUREDS (state, captureds) {
    state.captureds = captureds
  }
}
