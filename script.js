function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

console.log(computerPlay());

function jankenPon(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection;
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "Draw! Try again!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors!";
    }
}

let playerSelection = "rock";
let computerChoice = computerPlay();
console.log(jankenPon(playerSelection, computerChoice));