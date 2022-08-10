let choices = ["rock", "paper", "scissors"]
const compText = document.getElementById("computerSelected");
const scoreCard = document.getElementById("scorecard")
const playerText = document.getElementById("playerSelected");


// Computer choice function
function getComputerChoice() {
    const computer =  choices[Math.floor(Math.random()*choices.length)];
    return computer
} 

// Player choice-making

//If rock is clicked

const rockImg = document.getElementById("rock-img")
rockImg.onclick = () => { 
    
    playerText.textContent = "rock"
    compText.textContent = `${getComputerChoice()}`;
    
    // Add to scorecard 

    if (getComputerChoice === "rock") {
        scoreCard.textContent = "That's a tie."
        return
    } else if (getComputerChoice === "paper") {
        scoreCard.textContent = "You lose! Paper beats rock."
        return
    } else if (getComputerChoice === "scissors") {
        scoreCard.textContent = "You win! Rock beats scissors."
        return 
    }
}

    //If paper is clicked

const paperImg = document.getElementById("paper-img")

paperImg.onclick = () => { 
    
    playerText.textContent = "paper"
    compText.textContent = `${getComputerChoice()}`

     // Add to scorecard 

    if (getComputerChoice === "rock") {
        scoreCard.textContent = "You win! Paper beats rock."
    } else if (getComputerChoice === "paper") {
        scoreCard.textContent = "That's a tie."
    } else if (getComputerChoice === "scissors") {
        scoreCard.textContent = "You lose! Scissors beat paper." }
    }

    // If scissors is clicked

const scissorsImg = document.getElementById("scissors-img")
scissorsImg.onclick = () => { 
    
    playerText.textContent = "scissors"
    compText.textContents = `${getComputerChoice()}`

    // Add to scorecard 

    if (getComputerChoice === "rock") {
        scoreCard.textContent = "You lose! Rock beats scissors."
    } else if (getComputerChoice === "paper") {
        scoreCard.textContent = "You win! Scissors beat paper."
    } else if (getComputerChoice === "scissors") {
        scoreCard.textContent = "That's a tie." }
}




