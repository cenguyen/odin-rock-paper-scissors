function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

console.log(computerPlay());
