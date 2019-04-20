import pawnMove from './pawn-move'

export default (piece, board) => {
  if (piece.name.includes('pawn')) {
    return pawnMove(piece, board)
  }
  return []
}
