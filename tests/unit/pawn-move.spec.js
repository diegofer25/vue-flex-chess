import pawnMove from '@/store/modules/game/methods/get-moves-from-piece/pawn-move'
import { board } from '@/store/initial-state'

describe('Pawn White Moves', () => {

  describe(`Initial Move`, () => {
    const piece = {
      color: 'white',
      position: {
        x: 1,
        y: 4
      }
    }
    const [ firstMove, move ] = pawnMove(piece, board)
    test('Test if can make first move', () => {
      expect(firstMove.x).toEqual(piece.position.x + 2)
    })
    test('Test if can make normal move', () => {
      expect(move.x).toEqual(piece.position.x + 1)
    })
  })

  describe(`Move with black piece in front`, () => {
    board[4].squares[5] = { content: { color: 'black' } }
    const piece = {
      color: 'white',
      position: {
        x: 3,
        y: 5
      }
    }
    test('Test if no have moves to do', () => {
      expect(pawnMove(piece, board).length).toEqual(0)
    })
  })
})
