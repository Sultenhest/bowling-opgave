export default class Frame {
  firstRoll  = 0
  secondRoll = 0

  constructor(frame) {
    this.firstRoll  = frame[0]
    this.secondRoll = frame[1]
  }

  isStrike() {
    return this.firstRoll === 10
  }

  isSpare() {
    return ! this.isStrike() && this.getScore() === 10
  }

  isLastFrame() {
    return this.getScore() > 10
  }

  getScore() {
    return this.firstRoll + this.secondRoll
  }

  hasBonus() {
    return this.isStrike() || this.isSpare()
  }
}