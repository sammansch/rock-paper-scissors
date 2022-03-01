function computerPlay() {
    const moves = Array("rock", "paper", "scissors");
    let computerMove = moves[Math.floor(Math.random()*moves.length)];
    return computerMove;
}

function playRound(playerSelection, computerSelection){
    let playerMove = playerSelection.toLowerCase();

    if (playerMove === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "You lose! Paper beats rock";
    }
    else if (playerMove === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors"
    } 
    else if (playerMove === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win! Paper beats rock";
    }
    else if (playerMove === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "You lose! Scissors beat paper"
    } 
    else if (playerMove === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "You win! Scissors beat paper";
    }
    else if (playerMove === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "You lose! Rock beats scissors"
    } else {
        return "Draw!"
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++ ){
        let playerSelection = window.prompt("Choose 'rock', 'paper', or 'scissors':")
        let computerSelection = computerPlay();

        var result = playRound(playerSelection, computerSelection);

        console.log(result);
        console.log(playerScore, computerScore);

    }
    if (playerScore > computerScore) {
        alert(`Congratulations! You win!\n\nFinal Score:\nYou: ${playerScore} Computer: ${computerScore}`);
    } else if (playerScore == computerScore) {
        alert(`Looks like a draw!\n\nFinal Score:\nYou: ${playerScore} Computer: ${computerScore}`)
    } else {
        alert(`Better luck next time\n\nFinal Score:\nYou: ${playerScore} Computer: ${computerScore}`);
    }
}
console.log(game());
