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

function playRound(humanInput, computerInput) {
    ++roundsPlayed;

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
}

let computerChoice;

let computerScore = 0;
let humanScore = 0;

let roundsPlayed = 0;

const gameInfo = document.querySelector("#container");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

// function playGame() {

//     // Write the logic to play a single round
//     function playRound(humanInput, computerInput) {

//         if (humanInput === computerInput) {
//             console.log(`Round ${roundsPlayed}: You both picked ${humanInput}! It's a tie!`);
//             alert(`Round ${roundsPlayed}: You both picked ${humanInput}! It's a tie!`);
//         } else if ((humanInput === "Rock" && computerInput === "Scissors")
//             || (humanInput === "Scissors" && computerInput === "Paper")
//             || (humanInput === "Paper" && computerInput === "Rock")) {
//                 console.log(`Round ${roundsPlayed}: Your ${humanInput} beats your opponent's ${computerInput}! You win!`);
//                 alert(`Round ${roundsPlayed}: Your ${humanInput} beats your opponent's ${computerInput}! You win!`);
//                 ++humanScore;
//         } else {
//             console.log(`Round ${roundsPlayed}: Your opponent's ${computerInput} beats your ${humanInput}! You lose!`);
//             alert(`Round ${roundsPlayed}: Your opponent's ${computerInput} beats your ${humanInput}! You lose!`);
//             ++computerScore;
//         }

//         playGame()
//     }

//     // Increment roundsPlayed once per round until > 5, then declare winner based on scores
//     ++roundsPlayed;
//     if (roundsPlayed > 5) {
//         if (humanScore > computerScore) {
//             console.log(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. You win the game!`);
//             alert(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. You win the game!`);
//         } else if (humanScore < computerScore) {
//             console.log(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. Your opponent wins the game!`);
//             alert(`Game Over: You scored ${humanScore} points and your opponent scored ${computerScore} points. Your opponent wins the game!`);
//         } else if (humanScore === computerScore) {
//             console.log(`Game Over: You both scored ${humanScore} points. It's a tie!`);
//             alert(`Game Over: You both scored ${humanScore} points. It's a tie!`);
//         } else {
//             console.log("If you're reading this, you're peeking at my code, because this line cannot run under any circumstances.")
//         }
//     } else {
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//         playRound(humanChoice, computerChoice);
//     }
// }

// playGame()