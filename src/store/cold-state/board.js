const getSquares = (line) => {
  const squareNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return squareNames.map((name, index) => {
    return {
      id: index,
      canMove: false,
      name,
      line
    }
  })
}
const lineNames = ['1', '2', '3', '4', '5', '6', '7', '8']
export default lineNames.map((name, index) => {
  return {
    id: index,
    squares: getSquares(index),
    name
  }
}).reverse()
