// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

console.log(getComputerChoice())

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()

// 2)Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function getPlayerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

console.log(getPlayerChoice())

let playerScore = 0
let computerScore = 0

function playGame(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `Yay you won! ${playerSelection} beats ${computerSelection}`;
        
        // user wins
    } else if( playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        // computer wins
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "It's a tie";
    } else {
        return "Invalid input";
    }
}


console.log(playGame(playerSelection, computerSelection)); 

function game() {
    for (let i = 1; i <= 5; i++) {
      playRound(playerSelection, computerSelection);
    } }