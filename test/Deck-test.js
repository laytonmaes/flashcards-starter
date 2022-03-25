const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck")
const Card = require("../src/Card")

describe("Deck", function () {
    it("should be an instance of a deck", function() {
        const deck = new Deck();

        expect(deck).to.be.an.instanceOf(Deck);
    })

    it("should store card objects in the deck", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        
        const deck = new Deck([card1, card2, card3]);

        expect(deck.cards[0]).to.equal(card1)
    })

    it("should be able to count the number of cards in deck", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        
        const deck = new Deck([card1, card2, card3]);

        const deckCardCount = deck.countCards();

        expect(deckCardCount).to.equal(3);
    })
})