const getSquares = (line) => {
  return [{
    name: 'a',
    canMove: false,
    line
  }, {
    name: 'b',
    canMove: false,
    line
  }, {
    name: 'c',
    canMove: false,
    line
  }, {
    name: 'd',
    canMove: false,
    line
  }, {
    name: 'e',
    canMove: false,
    line
  }, {
    name: 'f',
    canMove: false,
    line
  }, {
    name: 'g',
    canMove: false,
    line
  }, {
    name: 'h',
    canMove: false,
    line
  }]
}
export default [{
      name: '8',
      squares: getSquares(8)
    }, {
      name: '7',
      squares: getSquares(7)
    }, {
      name: '6',
      squares: getSquares(6)
    }, {
      name: '5',
      squares: getSquares(5)
    }, {
      name: '4',
      squares: getSquares(4)
    }, {
      name: '3',
      squares: getSquares(3)
    }, {
      name: '2',
      squares: getSquares(2)
    }, {
      name: '1',
      squares: getSquares(1)
    }]
