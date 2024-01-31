//Arrays
const hobbies = ["Hiking", "Gym", "Gaming"];
console.log(hobbies);



//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(listItem); //logs the first stored variable
console.log(famousSayings[2]); //logs the third stored variable
console.log(famousSayings[3]); //tries to log an undefined variable



//Update Elements 
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = "avocados";



//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//changes the value of the first variable to Mayo
condiments[0] = "Mayo"; 
console.log(condiments);

//changes the whole array to just "Mayo"
condiments = ["Mayo"];
console.log(condiments);

//changes the value of the fourth variable to "Spoon"
utensils[3] = "Spoon";
console.log(utensils);



//The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); //logs the amount of variables stored in the array



//The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash']; 
chores.push("clean room", "walk dogs"); //pushes more variables to the back of the array.

console.log(chores);



//The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop(); //removes the last stored variable in the array.
console.log(chores);



//More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); //removes the first variable from the array
//console.log(groceryList);

groceryList.unshift("popcorn"); //adds another variable to the front of the array.

//slices off the variables between value 1 and 4.
//console.log(groceryList.slice(1,4));
//console.log(groceryList); //prints the non mutated array

const pastaIndex = groceryList.indexOf("pasta"); //finds the variable value for the given string.
console.log(pastaIndex);