//declares name 1 and 2 as global variables
const name = 'Nala';
const name2 = 'Warren';

//creates function to get rounded number between 0 and 2
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

// cycles each number to give a return value, could use a switch instead.
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

//creates new function to pair event types with training days, also changes the days based on what outcome it lands on.
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
// returns the number of days for given event.
  return days;
};

//creates new function with parameters of name and event to log to console.
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

//creates new function with parameter of name and days to log to console.
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

//creates new variables and gives value of output from functions
const event = getRandEvent();
const days = getTrainingDays(event);

//runs functions with given parameters.
logEvent(name, event);
logTime(name, days);

//line break
console.log();

//creates new variables for 2nd person and gives value of output from functions.
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

//calls functions with given parameters.
logEvent(name2, event2);
logTime(name2, days2);
