function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(humanInput, computerInput) {
    ++roundsPlayed;

    if (humanInput === computerInput) {
        roundResult.textContent = `Round ${roundsPlayed}: You both picked ${humanInput}! It's a tie!`;
    } else if ((humanInput === "Rock" && computerInput === "Scissors")
        || (humanInput === "Scissors" && computerInput === "Paper")
        || (humanInput === "Paper" && computerInput === "Rock")) {
            roundResult.textContent = `Round ${roundsPlayed}: Your ${humanInput} beats your opponent's ${computerInput}! You win!`;
            ++humanScore;
    } else {
        roundResult.textContent = `Round ${roundsPlayed}: Your opponent's ${computerInput} beats your ${humanInput}! You lose!`;
        ++computerScore;
    }

    function endGame() {
        if (humanScore >= 5) {
            container.replaceChildren(gameOver, scores);
            scores.textContent = `Your score: ${humanScore} Opponent score: ${computerScore}`;
            gameOver.textContent = "Game Over: You won!";
        } else if (computerScore >= 5) {
            container.replaceChildren(gameOver, scores);
            scores.textContent = `Your score: ${humanScore} Opponent score: ${computerScore}`;
            gameOver.textContent = "Game Over: You lost!";
        } else return;
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play again";
        playAgain.addEventListener("click", () => location.reload());
        container.appendChild(playAgain);
    }
    endGame();
    scores.textContent = `Your score: ${humanScore} Opponent score: ${computerScore}`;
}

let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;

const gameOver = document.createElement("div");
const container = document.querySelector("#container");
const roundResult = document.querySelector("#round");
const scores = document.querySelector("#scores");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));