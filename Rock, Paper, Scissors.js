const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput
    } else {
        console.log("Error");
    }
};

function getComputerChoice() {
  var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Game Ends In A Tie";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }
    
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }

    if (userChoice === "bomb") {
        return "User blew the computer away! Automatic Win!"
    }
};

const playGame = () => {
    var userChoice = getUserChoice("paper");
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();