function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

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
        default:
            console.log("oopsie woopsie! we made a fucky wucky!");
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    let normaliseCase = () => {
        choice = choice.charAt(0).toUpperCase() 
        + choice.slice(1).toLowerCase();
    }
    normaliseCase()
    
    if (choice == false) {
        alert("You failed to provide a response. You do know how Rock Paper Scissors works right?");
        choice = prompt("Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"");
        normaliseCase();
        // return choice;
    } else if (choice !== "Rock" 
        && choice !== "Paper"
        && choice !== "Scissors") {
        choice = prompt("Invalid. Enter \"Rock\", \"Paper\", or \"Scissors\"");
        normaliseCase();
        // return choice;
    }

    return choice;
}

let computerChoice;
computerChoice = getComputerChoice()

let humanChoice;
humanChoice = getHumanChoice();
console.log(humanChoice);
