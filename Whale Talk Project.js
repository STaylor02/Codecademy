
//creates a constant variable for user input
const input = "I'm gonna make him an offer he can't refuse.";

//creates a constant variable for vowels
const vowels = ["a", "e", "i", "o", "u"];

//creates an empty array
let resultArray = [];

//creates for loop that creates a variable and compares the length to the input 
for (let inputCount = 0; inputCount < input.length; inputCount++) {

    //says if the inputcount from input is equal to "e", then add it to the empty array
  if (input[inputCount] === "e") {
    resultArray.push(input[inputCount]);
  }

    //says if the inputcount from input is equal to "e", then add it to the empty array
  if (input[inputCount] === "u") {
    resultArray.push(input[inputCount]);
  }

  //creates for loop that creates a new variable and compares its length to the vowels array, 
  for (let vowelsCount = 0; vowelsCount < vowels.length; vowelsCount++) {
    //says if the letter from inputcount is equal to the vowelscount letter, then push that letter into the resultArray
    if (input[inputCount] === vowels[vowelsCount]) {
      resultArray.push(input [inputCount]);
    }
  }
};

//creates a new variable that joins the variables from resultArray with no spaces.
let resultString = resultArray.join("");

//logs the resultString variable and changes it all to uppercase.
console.log(resultString.toUpperCase());