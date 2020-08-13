import Frame from '@/Frame'

describe('Frame Tests', () => {
  test('test frame result', () => {
    let frame = new Frame([1,2])

    expect(frame.getScore()).toBe(3)
  })

  test('test frame is strike', () => {
    let frame = new Frame([10, 0])

    expect(frame.isStrike()).toBeTruthy()
    expect(frame.isSpare()).toBeFalsy()
    expect(frame.hasBonus()).toBeTruthy()
  })

  test('test frame is not a strike, but a spare', () => {
    let frame = new Frame([0, 10])

    expect(frame.isStrike()).toBeFalsy()
    expect(frame.isSpare()).toBeTruthy()
    expect(frame.hasBonus()).toBeTruthy()
  })

  test('test frame is spare', () => {
    let frame = new Frame([5, 5])

    expect(frame.isSpare()).toBeTruthy()
    expect(frame.hasBonus()).toBeTruthy()
  })

  test('test frame is last frame', () => {
    let frame = new Frame([10, 10])

    expect(frame.isStrike()).toBeTruthy()
    expect(frame.hasBonus()).toBeTruthy()
    expect(frame.isLastFrame()).toBeTruthy()
  })
})