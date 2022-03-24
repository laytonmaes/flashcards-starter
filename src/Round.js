const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Card = require("../src/Card");

class Round {
    constructor (deck) {
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = 0;
    }

    takeTurn(playerGuess) {
        const turn = new Turn(playerGuess, this.currentCard)
        this.turns += 1;
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses += 1;
        };
        return turn.giveFeedback()        
    }
    calculatePercentCorrect() {
        const percentIncorrect = this.incorrectGuesses / this.turns;
        const percentCorrect = 100 * (1 - percentIncorrect);
        return percentCorrect
    }
    endRound() {
        const percentCorrect = this.calculatePercentCorrect();
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
    }
}

module.exports = Round;