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
    if ( (playerSelection.toUpperCase() != "ROCK") && (playerSelection.toUpperCase() != "PAPER") && (playerSelection.toUpperCase() != "SCISSORS") ) {
        return "Error! Please make a valid selection!"
    } else if ( (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") ) {
        return "Congrats! You win!";
    } else if ((playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") ) {
        return "Aww that's too bad! You lose!";
    } else {
        return "It's a Draw!";
    }
}


function game() {
    let playerInput = prompt("Welcome. Please choose rock, paper, or scissors:");
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++) {
        playRound(playerInput, getComputerChoice());
        if (playerWins) {
            playerWins++;
        } else if (computerWins) {
            computerWins++;
        } 
    }
    if (playerWins > computerWins) {
        return "Congratulations, you have won the game!";
    } else if (playerWins < computerWins) {
        return "Defeat! You have lost the game!";
    } else {
        return "The game ends in a draw!";
    } 
}