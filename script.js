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
    let choice = prompt(`Round ${roundsPlayed}: Rock, Paper, or Scissors?`);

    // Capitalises first letter of player input and makes the rest lower case
    let normaliseCase = () => {
        choice = choice.charAt(0).toUpperCase() 
        + choice.slice(1).toLowerCase();
    }

    // Runs if no response given
    let noResponse = () => {
        alert(`Round ${roundsPlayed}: You failed to provide a response. You do know how Rock Paper Scissors works right?`);
        choice = prompt(`Round ${roundsPlayed}: Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"`);
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
        choice = prompt(`Round ${roundsPlayed}: Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"`);
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
let computerChoice; //= getComputerChoice()
// console.log(computerChoice)

// Store player's choice in variable
let humanChoice; //= getHumanChoice();
// console.log(humanChoice);

// Create variables for computer and player scores
let computerScore = 0;
let humanScore = 0;

// Create variable to count number of rounds played
let roundsPlayed = 0;

function playGame() {

    // Write the logic to play a single round
    function playRound(humanInput, computerInput) {

        if (humanInput === computerInput) {
            console.log(`Round ${roundsPlayed}: You both picked ${humanInput}! It's a tie!`);
            alert(`Round ${roundsPlayed}: You both picked ${humanInput}! It's a tie!`);
        } else if ((humanInput === "Rock" && computerInput === "Scissors")
            || (humanInput === "Scissors" && computerInput === "Paper")
            || (humanInput === "Paper" && computerInput === "Rock")) {
                console.log(`Round ${roundsPlayed}: Your ${humanInput} beats your opponent's ${computerInput}! You win!`);
                alert(`Round ${roundsPlayed}: Your ${humanInput} beats your opponent's ${computerInput}! You win!`);
                ++humanScore;
        } else {
            console.log(`Round ${roundsPlayed}: Your opponent's ${computerInput} beats your ${humanInput}! You lose!`);
            alert(`Round ${roundsPlayed}: Your opponent's ${computerInput} beats your ${humanInput}! You lose!`);
            ++computerScore;
        }

        playGame()
    }

    // // Increment roundsPlayed once per round until > 5, then declare winner based on scores
    // ++roundsPlayed;
    // if (roundsPlayed > 5) {
    //     if (humanScore > computerScore) {
    //         console.log(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. You win the game!`);
    //         alert(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. You win the game!`);
    //     } else if (humanScore < computerScore) {
    //         console.log(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. Your opponent wins the game!`);
    //         alert(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. Your opponent wins the game!`);
    //     } else if (humanScore === computerScore) {
    //         console.log(`Game Over: You both scored ${humanScore} points. It's a tie!`);
    //         alert(`Game Over: You both scored ${humanScore} points. It's a tie!`);
    //     } else {
    //         console.log("If you're reading this, you're peeking at my code, because this line cannot run under any circumstances.")
    //     }
    // } else {
    //     computerChoice = getComputerChoice();
    //     humanChoice = getHumanChoice();
    //     playRound(humanChoice, computerChoice);
    // }
}

playGame()