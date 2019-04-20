const getSquares = (line) => {
  return [{
    id: 0,
    name: 'a',
    canMove: false,
    line
  }, {
    id: 1,
    name: 'b',
    canMove: false,
    line
  }, {
    id: 2,
    name: 'c',
    canMove: false,
    line
  }, {
    id: 3,
    name: 'd',
    canMove: false,
    line
  }, {
    id: 4,
    name: 'e',
    canMove: false,
    line
  }, {
    id: 5,
    name: 'f',
    canMove: false,
    line
  }, {
    id: 6,
    name: 'g',
    canMove: false,
    line
  }, {
    id: 7,
    name: 'h',
    canMove: false,
    line
  }]
}
export default [{
      id: 7,
      name: '8',
      squares: getSquares(7)
    }, {
      id: 6,
      name: '7',
      squares: getSquares(6)
    }, {
      id: 5,
      name: '6',
      squares: getSquares(5)
    }, {
      id: 4,
      name: '5',
      squares: getSquares(4)
    }, {
      id: 3,
      name: '4',
      squares: getSquares(3)
    }, {
      id: 2,
      name: '3',
      squares: getSquares(2)
    }, {
      id: 1,
      name: '2',
      squares: getSquares(1)
    }, {
      id: 0,
      name: '1',
      squares: getSquares(0)
    }]
