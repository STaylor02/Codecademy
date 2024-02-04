let secretMessage = ["Learning", "is", "not", "about", "what", "you", "get", "easily", "the", "first", "time", "it", "is", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "Javascript"];

//remove the last string of the array
secretMessage.pop();

//Adds new strings to the back of the array
secretMessage.push("To", "Program");

//changes the value of array string #7 to "right"
secretMessage[7] = "right";

//removes the first string in the array
secretMessage.shift();

//adds "programming" to the front of the array
secretMessage.unshift("Programming");

//replaces strings 6 - 10 with just "know"
secretMessage.splice(6, 5, "know");

//logs the secret message, using a space to join the words together.
console.log(secretMessage.join(" "));