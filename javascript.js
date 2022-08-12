let choices = ["rock", "paper", "scissors"]

const rockImg = document.getElementById("rock-img")
const paperImg = document.getElementById("paper-img")
const scissorsImg = document.getElementById("scissors-img")

const compText = document.getElementById("computerSelected");
const playerText = document.getElementById("playerSelected");
const scoreCard = document.getElementById("scorecard")

const playerScoreCount = document.getElementById("playerScoreCount");
const computerScoreCount = document.getElementById("computerScoreCount");

let playerScore = 0
let computerScore = 0
let roundWinner = ''

const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const restartBtn = document.getElementById('restartBtn')
const overlay = document.getElementById('overlay')

// Computer choice function
function getComputerChoice() {
    const computer =  choices[Math.floor(Math.random()*choices.length)];
    return computer
} 

rockImg.onclick = () => { 

    const computer = getComputerChoice();

    playerText.textContent = choices[0]
    compText.textContent = `${computer}`;
        
    if (computer === choices[0]) {
        scoreCard.innerHTML += "You both picked rock. That's a tie."

    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You picked rock, and the computer picked paper. You lose! Paper beats rock."

        computerScore++
        roundWinner = 'computer'
        
    } else if (computer === choices[2]) {
        scoreCard.innerHTML += "You picked rock, and the computer picked scissors. You win! Rock beats scissors."
        
        playerScore++
        roundWinner = 'player'

    }

    playerScoreCount.textContent = `You: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;

}

paperImg.onclick = () => { 

    const computer = getComputerChoice();

    playerText.textContent = choices[1]
    compText.textContent = `${computer}`

     if (computer === choices[0]) {
        scoreCard.innerHTML += "You picked paper, and the computer picked rock. You win! Paper beats rock. <br>"

        playerScore++
        roundWinner = 'player'
        
    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You both picked paper. That's a tie. <br>"

    } else if (computer === choices[2]) {
        scoreCard.innerHTML += "You picked paper, and the computer picked scissors. You lose! Scissors beat paper. <br>"
        
        computerScore++
        roundWinner = 'computer'
    }

    
    playerScoreCount.textContent = `You: ${playerScore}`
    computerScoreCount.textContent = `Computer: ${computerScore}`
}

scissorsImg.onclick = () => { 
    
    const computer = getComputerChoice();
    
    playerText.textContent = choices[2]
    compText.textContent = `${computer}`

    if (computer === choices[0]) {
        scoreCard.innerHTML += "You picked scissors, and the computer picked rock. You lose! Rock beats scissors."

        computerScore++
        roundWinner = 'computer'
        
    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You picked scissors, and the computer picked paper. You win! Scissors beat paper."


        playerScore++
        roundWinner = 'player'
        
    } else if (computer === choices[2]) {

        scoreCard.innerHTML += "You both picked scissors. That's a tie."

}

playerScoreCount.textContent = `You: ${playerScore}`
computerScoreCount.textContent = `Computer: ${computerScore}`
}

