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


let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;


function playRound(playerSelection, computerSelection) {
    if ( (playerSelection.toUpperCase() != "ROCK") && (playerSelection.toUpperCase() != "PAPER") && (playerSelection.toUpperCase() != "SCISSORS") ) {
        alert("Error! Please make a valid selection!");
        return "error";
    } else if ( (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") ) {
        alert(`The computer has chosen ${computerSelection}...`);
        playerWinCount += 1;
        playerWins.textContent = playerWinCount;
        //alert("Congrats! You win this round!");
        return true;
    } else if ((playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors") || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock") 
    || (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") ) {
        alert(`The computer has chosen ${computerSelection}...`);
        computerWinCount += 1;
        computerWins.textContent = computerWinCount;
        //alert("Aww that's too bad! You lost this round!");
        return false;
    } else {
        alert(`The computer has chosen ${computerSelection}...`);
        drawCount += 1;
        draws.textContent = drawCount;
        //alert("This round ends in a draw!");
        return "draw";
    }
}




function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    playRound(prompt("Welcome. Please choose rock, paper, or scissors:"), getComputerChoice());
    if (playerWinCount > computerWinCount) {
        alert('The player has won the GAME');
    } else if (computerWinCount > playerWinCount) {
        alert('The computer has won the GAME');
    } else {
        alert('The GAME ends in a draw');
    }
}


const playerWins = document.querySelector('.playerWinText');
const computerWins = document.querySelector('.computerWinText');
const draws = document.querySelector('.drawText');


const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset');

rockButton.onclick = () => playRound('rock', getComputerChoice());
paperButton.onclick = () => playRound('paper', getComputerChoice());
scissorsButton.onclick = () => playRound('scissors', getComputerChoice());
resetButton.onclick = function() {
    playerWinCount = 0;
    computerWinCount = 0;
    drawCount = 0;
    playerWins.textContent = playerWinCount;
    computerWins.textContent = computerWinCount;
    draws.textContent = drawCount;
}
