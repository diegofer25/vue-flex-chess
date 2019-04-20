import { getMovesFromPiece } from './methods'

export default {
  getMovesFromPiece: ({ board }) => (piece) => {
    return getMovesFromPiece(piece, board)
  }
}
