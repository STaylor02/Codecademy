//Loops
//The For Loop
for (let num = 5; num < 11; num++) {
    console.log(num);
}



//Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}



//Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}



//Nested Loops
var bobsFollowers = ["John", "Peggy", "Jake", "Emily"];
var tinasFollowers = ["John", "Paul", "Emily"];
var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let n = 0; n < tinasFollowers.length; n++) {
    if (bobsFollowers[i] === tinasFollowers[n]) {
      mutualFollowers.push(tinasFollowers[n]);
      console.log(mutualFollowers);
    }
  }
}



//The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = ""; 

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

