const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Round", function() {
    it("should be an instance of round", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round).to.be.an.instanceOf(Round)
    })

    it("should be able to store variable current card as first card in deck", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round.currentCard).to.equal(deck.cards[0])
    })

    it("should be able to take turn", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        const turn = round.takeTurn("sea otter");

        expect(turn).to.equal("Congrats! You are correct!");
    })

    it("should be able to count percent of correct answers", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        const turn1 = round.takeTurn("open");
        console.log(round.currentCard)
        const turn2 = round.takeTurn("sea otter");
        console.log(round.currentCard)
        let  percentCorrect = round.calculatePercentCorrect()
        expect(percentCorrect).to.equal(50);

        const turn3 = round.takeTurn("steps");
        const turn4 = round.takeTurn("jotting");

        percentCorrect = round.calculatePercentCorrect()

        expect(percentCorrect).to.equal(25)
    })

    it("should notify user when round is over", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        const turn1 = round.takeTurn("open");
        const turn2 = round.takeTurn("sea otter");

        let  percentCorrect = round.calculatePercentCorrect()
        const roundEnd = round.endRound()

        expect(roundEnd).to.equal("** Round over! ** You answered 50% of the questions correctly!")
    })

    it("should iterate through deck data set", function() {

    })
})