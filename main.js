//set initial scores
let playerScore = 0;
let computerScore = 0;

//randomly selects a play for the computer to make
function computerPlay() {
    const moves = Array("rock", "paper", "scissors");
    let computerMove = moves[Math.floor(Math.random()*moves.length)];
    return computerMove;
}

//listens for clicks for the player's selection
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    
        playRound(button.id, computerPlay());      
    });
});

const roundMsg = document.querySelector('.round-result');

//plays one round of rock, paper, scissors
function playRound(playerSelection, computerSelection){

    const winMsg = `You win! ${playerSelection} beats ${computerSelection}.`;
    const loseMsg = `You lose. ${computerSelection} beats ${playerSelection}.`;
    const tieMsg = `This round is a tie. You both chose ${playerSelection}.`;

    console.log(`player score: ${playerScore} computer score: ${computerScore}`);
    
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") || 
        (computerSelection === "scissors" && playerSelection === "paper")){

        updateScore('computer');
        roundMsg.textContent = loseMsg;
        checkWinner(playerScore, computerScore);
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
        
        updateScore('player');
        roundMsg.textContent = winMsg;
        checkWinner(playerScore, computerScore);
    } else {
        roundMsg.textContent = tieMsg;
    }
}

//manipulate the DOM to update the score after each round
function updateScore(winner) {
    let showComputerScore = document.querySelector('#computer-score');
    let showPlayerScore = document.querySelector('#player-score');
    
    if (winner == "player") {
        playerScore += 1;       
        showPlayerScore.textContent = playerScore;
    } else if (winner == "computer") {
        computerScore += 1;
        showComputerScore.textContent = computerScore;       
    } else {
        return;
    }      
}

//checks score after each round to determine winner (first to 5)
function checkWinner(playerScore, computerScore) {
    
    if (playerScore == 5) {
        roundMsg.textContent = "Congratulations! You win!";
        buttons.forEach(button => button.disabled = true);
    } else if (computerScore == 5) {
        roundMsg.textContent = "Better luck next time! Computer wins.";
        buttons.forEach(button => button.disabled = true);
    }
}
