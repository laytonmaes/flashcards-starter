const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card")

describe("Turn", function() {
   it("should be an instance of a turn", function() {
       const turn = new Turn();
       expect(turn).to.be.an.instanceOf(Turn);
   })

   it("should store a card and a user guess", function() {
       const turn = new Turn("poison", new Card());
       
       expect(turn.playerGuess).to.equal("poison")
       expect(turn.card).to.be.an.instanceOf(Card)
   })

   it("should be able to return the guess", function () {
        const turn = new Turn("disillusionment", new Card());
        const guess = turn.returnGuess();

       expect(guess).to.equal("disillusionment")
   })

   it("should be able to return card", function() {
        const turn = new Turn("water", new Card());
        const card = turn.returnCard();

        expect(card).to.be.an.instanceOf(Card);
   })

   it("should be able to evaluate guess to see if it is the right answer", function() {
        const turnOne = new Turn("potshot", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))
        const turnTwo = new Turn("object", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))
        
        const turnOneEval = turnOne.evaluateGuess();
        const turnTwoEval = turnTwo.evaluateGuess();

        expect(turnOneEval).to.equal(false);
        expect(turnTwoEval).to.equal(true);
    })

    it("should be able to return whether the answer was correct or not", function () {
        const turnOne = new Turn("potshot", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))
        const turnTwo = new Turn("object", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))

        const turnOneEval = turnOne.evaluateGuess();
        const turnTwoEval = turnTwo.evaluateGuess();

        const turnOneFb = turnOne.giveFeedback();
        const turnTwoFb = turnTwo.giveFeedback();

        expect(turnOneFb).to.equal("Ooh, sorry, that is incorrect!")
        expect(turnTwoFb).to.equal("Congrats! You are correct!")
    })
})