let score = 0;
let scoreContainer = document.querySelector('.score')

let endMessage = document.querySelector('.end-message')

const rock = document.querySelector('.rock-button')
const paper = document.querySelector('.paper-button')
const scissors = document.querySelector('.scissors-button')


 let userChoice = document.querySelector('.player-choice')
 let computerChoice = document.querySelector('.computer-choice')


 let choices = ["ROCK", "PAPER", "SCISSORS"]
 let randomChoice = choices[Math.floor(Math.random() * choices.length)];

 let rockFunction = () => {
    rock.addEventListener('click', () => {
        userChoice.textContent = "Player's Choice: ROCK";
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoice.textContent = "Computer's Choice: " + randomChoice;
        if (randomChoice === "ROCK") {
            score += 0;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "SCISSORS") {
            score += 1;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "PAPER") {
            score += -1;
            scoreContainer.textContent = "Score: " +score;
        }
        endgameFunction();
    });
}

rockFunction();

let paperFunction = () => {
    paper.addEventListener('click', () => {
     userChoice.textContent = "Player's Choice: PAPER";
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoice.textContent = "Computer's Choice: " + randomChoice;
        if (randomChoice === "PAPER") {
            score += 0;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "ROCK") {
            score += 1;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "SCISSORS") {
            score += -1;
            scoreContainer.textContent = "Score: " +score;
        }
        endgameFunction();
    });
}

paperFunction();

let scissorsFunction = () => {
    scissors.addEventListener('click', () => {
        userChoice.textContent = "Player's Choice: SCISSORS";
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoice.textContent = "Computer's Choice: " + randomChoice;
        if (randomChoice === "SCISSORS") {
            score += 0;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "PAPER") {
            score += 1;
            scoreContainer.textContent = "Score: " +score;
        }
        if (randomChoice === "ROCK") {
            score += -1;
            scoreContainer.textContent = "Score: " +score;
        }
        endgameFunction();
    });
}

scissorsFunction();

let endgameFunction = () => {
    if(score > 2){
        scoreContainer.textContent = "Final Score: " + score;
        endMessage.textContent = "Congradulations, you won!"
    }
    if(score < -2){
        scoreContainer.textContent = "Final Score : " + score;
        endMessage.textContent = "You lost."
    }
}