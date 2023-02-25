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
    if ( (playerSelection === 'Rock' && computerSelection === "Scissors") || (playerSelection === 'Paper' && computerSelection === "Rock") 
    || (playerSelection === 'Scissors' && computerSelection === "Paper") ) {
        alert(`The computer has chosen ${computerSelection}... and you won!`);
        playerWinCount += 1;
        playerWins.textContent = playerWinCount;
        if (playerWinCount === 1) {
            alert('Congratulations! You have won the game!');
            gameEnd(1);
            setTimeout(resetGame, 3000);
        }
    } else if (playerSelection === computerSelection) {
        alert(`The computer has chosen ${computerSelection}... it's a draw.`);
        drawCount += 1;
        draws.textContent = drawCount;
    } else {
        alert(`The computer has chosen ${computerSelection}... and you lost..`);
        computerWinCount += 1;
        computerWins.textContent = computerWinCount;
        if (computerWinCount === 1) {
            alert('Aww, too bad! The computer has won the game..');
            gameEnd(2);
            setTimeout(resetGame, 3000);
        }
    };
};



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

function gameEnd(winCon) {
    const Msg = document.createElement('div');
    Msg.className = 'Msg';
    Msg.style.color = "hotpink";
    Msg.style.fontSize = '100px';
    Msg.style.fontFamily = 'Audiowide';
    if (winCon === 1) {
        Msg.textContent = 'CONGRATULATIONS!!!';
    } else if (winCon === 2) {
        Msg.textContent = 'DEFEAT...'
    }
    const ele = document.querySelector('.space1');
    ele.appendChild(Msg);
}


function resetGame() {
    playerWinCount = 0;
    computerWinCount = 0;
    drawCount = 0;
    playerWins.textContent = playerWinCount;
    computerWins.textContent = computerWinCount;
    draws.textContent = drawCount;
    const toDelete = document.querySelector('.Msg');
    toDelete.remove();
}


const playerWins = document.querySelector('.playerWinText');
const computerWins = document.querySelector('.computerWinText');
const draws = document.querySelector('.drawText');


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('.reset');

rockButton.onclick = () => playRound('Rock', getComputerChoice());
paperButton.onclick = () => playRound('Paper', getComputerChoice());
scissorsButton.onclick = () => playRound('Scissors', getComputerChoice());
resetButton.onclick = function() {
    resetGame();
}
