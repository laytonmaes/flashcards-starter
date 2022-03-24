class Turn {
    constructor(playerGuess, card) {
        this.playerGuess = playerGuess;
        this.card = card;
        
    }

    returnGuess() {
        return this.playerGuess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
        if (this.playerGuess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }

    giveFeedback() {
        if (this.evaluateGuess()) {
            return "Congrats! You are correct!"
        } else {
            return "Ooh, sorry, that is incorrect!"
        }
    }    
}

module.exports = Turn;