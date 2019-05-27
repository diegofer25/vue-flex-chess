import pieces from './pieces'

const getSquares = (line) => {
  const squareNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return squareNames.map((name, index) => {
    var content;
    pieces.forEach(piece => {
      if (piece.position.x === line && piece.position.y === index) {
        content = piece
      }
    })
    return {
      id: index,
      canMove: false,
      name,
      line,
      content
    }
  })
}
const lineNames = ['1', '2', '3', '4', '5', '6', '7', '8']
export default lineNames.map((name, index) => ({
  id: index,
  squares: getSquares(index),
  name
})).reverse()
