import Game from '@/Game'

describe('General Game Tests', () => {
  test('rolls count', () => {
    let game = new Game([[1, 8], [2, 2]])

    expect(game.getRollsCount()).toBe(4)
  })

  test('open frames score', () => {
    let game = new Game([[1, 8], [2, 2]])

    expect(game.getScore()).toStrictEqual([9, 13])
  })

  test('github example 1', () => {
    let game = new Game([[3,7],[10,0],[8,2],[8,1],[10,0],[3,4],[7,0],[5,5],[3,2],[2,5]])

    expect(game.getScore()).toStrictEqual([20, 40, 58, 67, 84, 91, 98, 111, 116, 123])
  })

  test('github example 2', () => {
    let game = new Game([[2, 0], [8, 2]])

    expect(game.getScore()).toStrictEqual([2, 12])
  })

  test('perfect 300 score', () => {
    let game = new Game([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10] ])

    expect(game.getScore()).toStrictEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300])
  })
})

describe('Spare Game Tests', () => {
  test('a single spare followed by an open frame', () => {
    let game = new Game([[7, 3], [4, 2]])

    expect(game.getScore()).toStrictEqual([14, 20]) 
  })

  test('two spares', () => {
    let game = new Game([[7, 3], [7, 3]])

    expect(game.getScore()).toStrictEqual([17, 27])
  })

  test('two spares and an open frame', () => {
    let game = new Game([[7, 3], [7, 3], [6, 0]])

    expect(game.getScore()).toStrictEqual([17, 33, 39])
  })

  test('three spares', () => {
    let game = new Game([[7, 3], [7, 3], [7, 3]])

    expect(game.getScore()).toStrictEqual([17, 34, 44])
  })

  test('spare in last frame with bonus pins', () => {
    let game = new Game([[1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 9], [7, 0]])

    expect(game.getScore()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 26])
  })
})

describe('Strike Game Tests', () => {
  test('a single strike followed by an open frame', () => {
    let game = new Game([[10, 0], [4, 2]])

    expect(game.getScore()).toStrictEqual([16, 22])
  })

  test('two strikes', () => {
    let game = new Game([[10, 0], [10, 0]])

    expect(game.getScore()).toStrictEqual([20, 30])
  })

  test('two strikes and an open frame', () => {
    let game = new Game([[10, 0], [10, 0], [6, 0]])

    expect(game.getScore()).toStrictEqual([26, 42, 48])
  })

  test('three strikes', () => {
    let game = new Game([[10, 0], [10, 0], [10, 0]])

    expect(game.getScore()).toStrictEqual([30, 50, 60])
  })

  test('strike in last frame with bonus pins', () => {
    let game = new Game([[1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [10, 0], [2, 2]])

    expect(game.getScore()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 23])
  })
})

describe('Strike and Spare Game Tests', () => {
  test('a strike followed by a spare', () => {
    let game = new Game([[10, 0], [7, 3]])

    expect(game.getScore()).toStrictEqual([20, 30])
  })

  test('a spare followed by a strike', () => {
    let game = new Game([[7, 3], [10, 0]])

    expect(game.getScore()).toStrictEqual([20, 30])
  })
})