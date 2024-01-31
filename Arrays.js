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
console.log(objectives.length);



