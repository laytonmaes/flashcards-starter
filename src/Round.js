const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Card = require("../src/Card");

class Round {
    constructor (deck) {
        this.deck = deck;
        this.currentCardIndex = 0;
        this.currentCard = this.deck.cards[this.currentCardIndex];
        this.turns = 0;
        this.incorrectGuesses = 0;
    }

    takeTurn(playerGuess) {
        const turn = new Turn(playerGuess, this.currentCard)
        this.turns += 1;
        if(this.currentCardIndex < this.deck.length) {
            this.currentCardIndex += 1
            this.currentCard = this.deck.cards[this.currentCardIndex]
        }
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