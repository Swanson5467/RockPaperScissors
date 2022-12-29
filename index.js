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
        console.log("Error! Please make a valid selection!");
        return "error";
    } else if ( (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") ) {
        console.log("Congrats! You win this round!");
        return true;
    } else if ((playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") ) {
        console.log("Aww that's too bad! You lost this round!");
        return false;
    } else {
        console.log("This round ends in a draw!");
        return "draw";
    }
}


function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (i = 0; i < 5; i++) {
        let result = playRound(prompt("Welcome. Please choose rock, paper, or scissors:"), getComputerChoice());
        if (result == true) {
            playerWinCount++
        } else if (result == false) {
            computerWinCount++
        } else if (result == "error") {
            i--;
        }
    } if (playerWinCount > computerWinCount) {
        console.log('the player has won the GAME');
    } else if (computerWinCount > playerWinCount) {
        console.log('the computer has won the GAME');
    } else {
        console.log('the GAME ends in a draw..');
    }
}