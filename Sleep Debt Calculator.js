const getSleepHours = (day) => {
    switch(day) {
        case "Monday":
            return 9;
            break;
        case "Tuesday":
            return 8;
            break;
        case "Wednesday":
            return 10;
            break;
        case "Thursday":
            return 3;
            break;
        case "Friday":
            return 7;
            break;
        case "Saturday":
            return 5;
            break;
        case "Sunday":
            return 7;
            break;
        default:
            return "Error";
            break;

    }
};

const getActualSleepHours = () => {
    var totalHoursSlept = getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
    return totalHoursSlept;
};

const getIdealSleepHours = () => {
  var idealHours = 7 * 7;
  return idealHours;
};

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (getIdealSleepHours() === getActualSleepHours()) {
    return "You slept the perfect amount!";
  }
  if (getActualSleepHours() < getIdealSleepHours()) {
    return "You need to sleep more!";
  }
  if (getActualSleepHours() > getIdealSleepHours()) {
    return "You overslept!";
  }
};

console.log(`You Want To Sleep ${getIdealSleepHours()}, And You Slept ${getActualSleepHours()}`)
console.log(calculateSleepDebt());












