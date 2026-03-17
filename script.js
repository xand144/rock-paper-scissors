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
    choice = choice.charAt(0).toUpperCase() 
    + choice.slice(1).toLowerCase();
    return choice;
}

let computerChoice;
computerChoice = getComputerChoice()

let humanChoice;
humanChoice = getHumanChoice()

