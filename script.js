
// Computer randomly chooses "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    // Convert number into corresponding choice
    switch (randNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        // Silly error message; should never run if the code is written correctly
        default:
            console.log("oopsie woopsie! we made a fucky wucky!");
    }
}

// Get the player to choose rock, paper or scissors
function getHumanChoice() {
    // Get player input and store in variable
    let choice = prompt("Rock, Paper, or Scissors?");

    // Capitalises first letter of player input and makes the rest lower case
    let normaliseCase = () => {
        choice = choice.charAt(0).toUpperCase() 
        + choice.slice(1).toLowerCase();
    }

    // Runs if no response given
    let noResponse = () => {
        alert("You failed to provide a response. You do know how Rock Paper Scissors works right?");
        choice = prompt("Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"");
        normaliseCase();
        if (choice == false) {
            noResponse();
        } else if ((choice !== "Rock" 
            && choice !== "Paper"
            && choice !== "Scissors")) {
                invalidResponse()
        }
    }

    // Runs if response is neither "Rock", "Paper" nor "Scissors"
    let invalidResponse = () => {
        choice = prompt("Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"");
        normaliseCase();
        if (choice == false) {
            noResponse();
        } else if (choice !== "Rock"
            && choice !== "Paper"
            && choice !== "Scissors") {
            invalidResponse();
        }
    }

    normaliseCase()
    
    // Reprompts if response absent or invalid
    if (choice == false) {
        noResponse();
    } else if (choice !== "Rock" 
        && choice !== "Paper"
        && choice !== "Scissors") {
            invalidResponse();
    }

    // Return the player's choice, when it is one of "Rock", "Paper" or "Scissors"
    return choice;
}

// Store computer choice in variable
const computerChoice = getComputerChoice()
console.log(computerChoice)

// Store player's choice in variable
const humanChoice = getHumanChoice();
console.log(humanChoice);

// Create variables for computer and player scores
let computerScore = 0;
let humanScore = 0;

// Create variable to count number of rounds played
let roundsPlayed = 0;

// Write the logic to play a single round
function playRound(humanInput, computerInput) {
    if (humanInput === computerInput) {
        console.log(`You both picked ${humanInput}! It's a tie!`)
    } else if ((humanInput === "Rock" && computerInput === "Scissors")
        || (humanInput === "Scissors" && computerInput === "Paper")
        || (humanInput === "Paper" && computerInput === "Rock")) {
            console.log(`Your ${humanInput} beats your opponent's ${computerInput}! You win!`);
            ++humanScore;
    } else {
        console.log(`Your opponent's ${computerInput} beats your ${humanInput}! You lose!`);
        ++computerScore;
    }
}

function playGame() {
}
// playRound(humanChoice, computerChoice);