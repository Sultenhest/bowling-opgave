import Frame from '@/Frame'

export default class Bowling {
  rolls  = []
  scores = []

  constructor(points) {
    this.rolls = points.flat()

    this.calculateGame()
  }

  calculateGame() {
    for (let i = 0; i < this.getRollsCount(); i += 2) {
      const frame = new Frame( [
        this.rolls[i], this.rolls[i + 1] 
      ] )
      let frameScore = frame.getScore()

      if ( i !== this.getRollsCount() - 2 && frame.hasBonus() ) {
        const nextFrame = new Frame([this.rolls[i + 2], this.rolls[i + 3]])

        frameScore += this.getBonus(frame, nextFrame)

        if ( !frame.isLastFrame() && frame.isStrike() && nextFrame.isStrike() && this.rolls[i + 4] ) {
          frameScore += this.rolls[i + 4]
        }
      }

      this.addToScores(frameScore)
    }
  }

  getBonus(frame, nextFrame) {
    if ( frame.isStrike() ) {
      return nextFrame.getScore()
    } else {
      return nextFrame.firstRoll
    }
  }

  getRollsCount() {
    return this.rolls.length
  }

  addToScores(score) {
    if ( this.scores.length === 0 ) {
      this.scores.push( score )
    } else {
      const recentScore = this.scores.slice(-1)[0]

      if ( recentScore < 300 ) {
        const newScore    = recentScore + score
        
        if ( this.scores.length === 10 ) {
          this.scores[9] = recentScore
        } else if ( newScore >= 300 ) {
          this.scores.push(300)
        } else {
          this.scores.push(newScore)
        }
      }
    }
  }

  getScore() {
    return this.scores
  }
}
