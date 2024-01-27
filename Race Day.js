// creates a random number, assigns a boolean for earlyRunner and a number for runnerAge
let raceNumber = Math.floor(Math.random() * 1000);
var earlyRunner = false;
var runnerAge = 18;

//adds 1000 to the raceNumber if the set requirements are met
if (runnerAge > 18 && earlyRunner === true) {
  raceNumber+= 1000;
};

//logs each outcome and prints the race number and race time.
if (runnerAge > 18 && earlyRunner === true) {
  console.log(`Racer #${raceNumber} will race at 9:30 am.`)
} else if (runnerAge > 18 && earlyRunner === false) {
  console.log(`Racer #${raceNumber} will race at 11:00 am.`)
} else if (runnerAge < 18) {
  console.log(`Racer #${raceNumber} will race at 12:30 pm.`)
} else{
  console.log("Please see the registration desk.")
};