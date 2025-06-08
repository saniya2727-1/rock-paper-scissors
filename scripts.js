function getComputerChoice () {
    const strings = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3);
    return strings[random];
}
console.log(getComputerChoice());

function getHumanChoice () {
    choice = prompt("Rock Paper Scissors?")
    return choice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    humanChoice = ["rock", "paper", "scissors"];
    computerChoice = ["rock", "paper", "scissors"];
    if (humanChoice.toLowerCase == computerChoice){
        return "It's a tie!";
    } else if (humanChoice.toLowerCase == "scissors" && computerChoice == "rock") {
            return "You lose! Rock beats Scissors.";
    } else if( humanChoice.toLowerCase == "rock" && computerChoice == "paper" ) {
            return "You lose! Paper beats Rock.";
    } else if(humanChoice == "paper" && computerChoice == "scissors"){
    return "You lose! Scissors beats Paper.";
    } else 
    return "You win!";
}

console.log(playRound());
