function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if ( (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") ) {
        return "Congrats! You win!";
    } else if ((playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") ) {
        return "Aww that's too bad! You lose!";
    } else {
        return "It's a Draw!";
    }
}