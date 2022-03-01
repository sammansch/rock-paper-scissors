function computerPlay() {
    const moves = Array("rock", "paper", "scissors");
    let computerMove = moves[Math.floor(Math.random()*moves.length)];
    return computerMove;
}
console.log(computerPlay());