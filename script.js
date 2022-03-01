function computerPlay() {
    const moves = Array("rock", "paper", "scissors");
    let computerMove = moves[Math.floor(Math.random()*moves.length)];
    return computerMove;
}

function playRound(playerSelection, computerSelection){
    let playerMove = playerSelection.toLowerCase();

    if (playerMove === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    }
    else if (playerMove === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    } 
    else if (playerMove === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    }
    else if (playerMove === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper"
    } 
    else if (playerMove === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    }
    else if (playerMove === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors"
    } else {
        return "Draw!"
    }
}

function game() {
    for (let i = 0; i < 5; i++ ){
        let playerSelection = window.prompt("Choose 'rock', 'paper', or 'scissors':")
        let computerSelection = computerPlay();

        var result = playRound(playerSelection, computerSelection);

        console.log(result);
        console.log(playerSelection, computerSelection);

    }
}
console.log(game());
