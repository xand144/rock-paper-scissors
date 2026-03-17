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

let computerChoice;
computerChoice = getComputerChoice()