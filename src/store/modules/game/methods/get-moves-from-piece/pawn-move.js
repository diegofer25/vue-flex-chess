import { searchPieceInBoard, calcByColor } from './utils'

export default ({ color, position }, board) => {
  const moves = []
  const calc = calcByColor(color)
  const search = searchPieceInBoard(board)

  // CHECK FIRST BLACK MOVE
  if (position.x === 6 && color === 'black') {
    moves.push({
      x: position.x - 2,
      y: position.y
    })
  }
  // CHECK FIRST WHITE MOVE
  if (position.x === 1 && color === 'white') {
    moves.push({
      x: position.x + 2,
      y: position.y
    })
  }

  // CHECK IF NO HAVE ANY PIECE IN FRONT
  const front = search({
    x: calc(position.x, '+', 1),
    y: position.y
  })
  if (!front.content) {
    moves.push({
      x: calc(position.x, '+', 1),
      y: position.y
    })
  }

  // CHECK IF HAVE ANY PIECE IN DIAGONAL LEFT TO CAPTURE
  const diagonalLeft = search({
    x: calc(position.x, '+', 1),
    y: calc(position.y, '-', 1),
  })
  if (diagonalLeft.content) {
    if (diagonalLeft.content.color !== color) {
      moves.push({
        x: calc(position.x, '+', 1),
        y: calc(position.y, '-', 1)
      })
    }
  }

  // CHECK IF HAVE ANY PIECE IN DIAGONAL RIGHT TO CAPTURE
  const diagonalRight = search({
    x: calc(position.x, '+', 1),
    y: calc(position.y, '+', 1),
  })
  if (diagonalRight.content) {
    if (diagonalRight.content.color !== color) {
      moves.push({
        x: calc(position.x, '+', 1),
        y: calc(position.y, '+', 1)
      })
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    moves,
    diagonalLeft.content ? diagonalLeft.content.position : 'no left',
    front.content ? front.content.position : 'no front',
    diagonalRight.content ? diagonalRight.content.position : 'no right'
  )
  return moves
}
