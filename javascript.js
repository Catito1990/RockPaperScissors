let choices = ["rock", "paper", "scissors"]

const rockImg = document.getElementById("rock-img")
const paperImg = document.getElementById("paper-img")
const scissorsImg = document.getElementById("scissors-img")

const compText = document.getElementById("computerSelected");
const playerText = document.getElementById("playerSelected");

const scoreCard = document.getElementById("scorecard")
const playerScoreCount = document.getElementById("playerScoreCount");
const computerScoreCount = document.getElementById("computerScoreCount");

let modal = document.querySelector(".modal");
let pageCover = document.querySelector(".pageCover");
let main = document.querySelector("main");
let endModal = document.querySelector(".endModal");
let finalMessage = document.getElementById("final-message")        

window.onload = function() {
    setTimeout(function(){ 
        modal.classList.remove("hidden");
        pageCover.classList.remove("hidden"); 
        main.addEventListener("focus", preventFocus);
    }, 500); 
}   

document.getElementById("close").addEventListener("click", function(){
  modal.classList.add("hidden");
  pageCover.classList.add("hidden"); 
  main.removeEventListener("focus", preventFocus);
});

function preventFocus (evt){
  evt.preventDefault();
}

function getComputerChoice() {
    const computer =  choices[Math.floor(Math.random()*choices.length)];
    return computer
} 

let playerScore = 0
let computerScore = 0

rockImg.onclick = () => { 

    const computer = getComputerChoice();
    playerText.textContent = choices[0]
    compText.textContent = `${computer}`
        
    if (computer === choices[0]) {
        scoreCard.innerHTML += "You both picked rock. That's a tie. <br>"
    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You picked rock, and the computer picked paper. You lose! Paper beats rock. <br>"
        computerScore++
    } else if (computer === choices[2]) {
        scoreCard.innerHTML += "You picked rock, and the computer picked scissors. You win! Rock beats scissors. <br>"
        playerScore++
    }
    playerScoreCount.textContent = `You: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;

    end(playerScore, computerScore);

} 

paperImg.onclick = () => { 

    const computer = getComputerChoice();
    playerText.textContent = choices[1]
    compText.textContent = `${computer}`

     if (computer === choices[0]) {
        scoreCard.innerHTML += "You picked paper, and the computer picked rock. You win! Paper beats rock. <br>"
        playerScore++
    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You both picked paper. That's a tie. <br>"
    } else if (computer === choices[2]) {
        scoreCard.innerHTML += "You picked paper, and the computer picked scissors. You lose! Scissors beat paper. <br>"
        computerScore++
    }
    playerScoreCount.textContent = `You: ${playerScore}`
    computerScoreCount.textContent = `Computer: ${computerScore}`

    end(playerScore, computerScore);
}

scissorsImg.onclick = () => { 
    
    const computer = getComputerChoice();
    playerText.textContent = choices[2]
    compText.textContent = `${computer}`

    if (computer === choices[0]) {
        scoreCard.innerHTML += "You picked scissors, and the computer picked rock. You lose! Rock beats scissors. <br>"
        computerScore++
    } else if (computer === choices[1]) {
        scoreCard.innerHTML += "You picked scissors, and the computer picked paper. You win! Scissors beat paper. <br>"
        playerScore++
    } else if (computer === choices[2]) {
        scoreCard.innerHTML += "You both picked scissors. That's a tie. <br>"

}
playerScoreCount.textContent = `You: ${playerScore}`
computerScoreCount.textContent = `Computer: ${computerScore}`

end(playerScore, computerScore);

}

function end(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        endModal.classList.remove("hidden");
        pageCover.classList.remove("hidden"); 
        if (playerScore > computerScore) {
            finalMessage.textContent = "You win this round!" 
        } else if (computerScore > playerScore) {
            finalMessage.textContent = "Aww, sorry buddy. You lost this one. Try again?"
         }
        return
    } }


    const restartBtn = document.getElementById("playagain")

    restartBtn.addEventListener("click", function(){
        endModal.classList.add("hidden");
        pageCover.classList.add("hidden"); 
        main.removeEventListener("focus", preventFocus);
        playerScore = 0
        computerScore = 0
        scoreCard.textContent = ""
        compText = ""
        playerText = ""
        playerScoreCount = 0
        computerScoreCount = 0
      } )