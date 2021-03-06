export const calcByColor = (color) => {
  return (num1, operation, num2) => {
    if (operation === '+') {
      if (color === 'white') {
        return num1 + num2
      } else {
        return num1 - num2
      }
    } else {
      if (color === 'white') {
        return num1 - num2
      } else {
        return num1 + num2
      }
    }
  }
}

export const searchPieceInBoard = (board) => {
  return ({x, y}) => {
    const reversedBoard = JSON.parse(JSON.stringify(board)).reverse()
    const piece = reversedBoard[x].squares[y]
    return piece ? piece : {}
  }
}
