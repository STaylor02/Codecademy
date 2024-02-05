let story = "A hiker decidded to go on a hike by himself. Something he was not very used to. The whole day was normal. Trees and bushes engulfed his area. He enjoyed being outdoors in the mountains. Nothing seemed strange to him, that was until he was making his way back to his whip. He figured an eight hour hike was good enough. The sky was already getting dark and he needed to get back, fast. What was odd was how much he did not recognize the trail back. He began to freaking."

let storyWords = story.split(" ");
let unnecessaryWord = "whip.";
let misspelledWord = "decidded";
let badWord = "freaking.";

let count = 0;
//the function is an invocation for the forEach() method, which is why it is all encased in parenthesis.
storyWords.forEach((word) => { 
  count++;
});

//reassigns storyWords with included filter, using invocation
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

//if the word is equal to the misspelled word, then log the correct spelling instead.
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "decided";
  } else {
    return word;
  }
});

//if the word is equal to the bad word, then log true, if not then log false.
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
  });

  //log the location of the bad word in the array
console.log(badWordIndex);

//changes the value of string 89 to "panic"
storyWords[89] = "panic.";

//checks every word with a length of more than 10, and returns true or false
let lengthCheck = storyWords.every((word) => {
  return word.length > 10;
})

//if word length is more than 10, then it logs the word.
storyWords.forEach((word) => {
  word.length > 10 && console.log(word)
});

//logs the true or false value from the length check function
console.log(lengthCheck);
//logs the story, but joins the words together, spaced by " ".
console.log(storyWords.join(" "));

