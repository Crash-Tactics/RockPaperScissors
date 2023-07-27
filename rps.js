let computerSelection = null;
let playerSelection = null;
let playerChoice = null;
let playerWin = 0;
let computerWin = 0;
let result = null;
let winLoseDraw = null;
let str = null;


function inputFormat(str) {
    return str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getScore(result) {
    winLoseDraw = result.slice(4,5).toLowerCase();
    if (winLoseDraw === "w") {
        playerWin = playerWin + 1;
    } else if (winLoseDraw === "l") {
        computerWin = computerWin + 1;
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 3) {
        computerSelection = "Rock";
    } else if (computerChoice === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}


function getPlayerChoice() {
    playerSelection = null;
    while (playerSelection === null) {
        playerChoice = prompt("Pick Rock, Paper, or Scissors?");
        playerSelection = inputFormat(playerChoice);
    }
    while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        playerChoice = prompt("Not valid! Pick Rock, Paper, or Scissors?");
        playerSelection = inputFormat(playerChoice);
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It's a draw!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You Win! Rock breaks Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "You Win! Paper covers Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You Win! Scissors cut paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock breaks Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You Lose! Paper covers Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You Lose! Scissors cut paper";
    }
    return result;
}


function game() {
    for (let i = 0; i <= 4; i++) {
        getPlayerChoice();
        getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        getScore(result);
    }
    console.log(`You have won ${playerWin} rounds and lost ${computerWin} rounds!`);
    if ( playerWin > computerWin) {
        console.log("You Win the game!");
    } else if (playerWin < computerWin) {
        console.log("The Computer Wins the game!");
    } else {
        console.log("It's a draw!");
    }
}

game();