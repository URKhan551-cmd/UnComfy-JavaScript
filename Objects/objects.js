
// multiple ways to define object in js.
// object literal syntax common = 
const khan = {
     name: umair, 
    age: 77, 
    face: smiley,
    "can you perform": function(){
       // do stuff here ;
    }

};

// two ways to access the data inside of obj.
// dot notation  .
// bracket notation  []

console.log(khan.name); // value output
console.log(khan["can you perform"]); // [Function ] output.

const variable = "name";
console.log(khan.variable); //undefined output because dot cannot acces a variable holding a property similar to name.

console.log(khan[variable]); // umair
// here we refer variable to name holds which is equal to "umair" in my obj


// OOPs design paradigm in JS  where object play major role.

const car = {
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,

   // a method is just a function assigned to a property
  applyDiscount: function(discountPercentage) {
    const multiplier = 1 - discountPercentage / 100;
    this.priceUSD *= multiplier;
  },

  // shorthand way to add a method to an object literal
  getSummary() {
    return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at $${this.priceUSD} (USD).`;
  },
};

// car.applyDiscount(3);
// car.color;
// car.make;
// car.priceUSD;
// car.getSummary();   all works.


const rateMe = {
  playerScore: 0,
  computerScore: 0,
  playRound(playerChoice) {
    // code to play the round, update score if needed, then return the result
  },
  getWinningPlayer() {
    // return the player with the most points ("player", "computer", or "tie")
  },
  reset() {
    // reset both players' scores to 0
  },
};

// we define property methods inside an object and we will perform different operation on it.

rateMe.playRound("rock"); // returns "player" because we're awesome at RPS
console.log(rateMe.playerScore); // 1 - we won and so our score increased

rateMe.playRound("rock"); // returns "computer" because... luck...
console.log(rateMe.computerScore); // 1

rateMe.playRound("scissors"); // returns "player" because we're awesome at RPS (again)
console.log(rateMe.playerScore); // 2
console.log(rateMe.getWinningPlayer()); // "player" since we're 2-1 up

rateMe.reset();
console.log(rateMe.playerScore); // 0
console.log(rateMe.computerScore); // 0

