function getComputerChoice() {
    let i = Math.random();
    if (i <= 0.333) {
        return "rock";
    } else if (i >= 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock/paper/scissors: ").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice,computerChoice) {
    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    updateResult("Draw! rock vs rock");             
                    break;
        
                case 'paper':
                    computerScore++;
                    updateComputerScore();
                    updateResult("You Lose! paper beats rock");
                    break;
        
                case 'scissors':
                    humanScore++;
                    updateHumanScore();
                    updateResult("You win! rock beats scissors");
                    break;
                    
                default:
                    break;
            };            
            break;

        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    updateHumanScore();
                    updateResult("You win! paper beats rock");           
                    break;
        
                case 'paper':
                    updateResult("Draw! paper vs paper");
                    break;
        
                case 'scissors':
                    computerScore++;
                    updateComputerScore();
                    updateResult("You Lose! scissors beats paper");
                    break;
                    
                default:
                    break;
            };    
            break;

        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    computerScore++;
                    updateComputerScore();
                    updateResult("You Lose! rock beats scissors");          
                    break;
        
                case 'paper':
                    humanScore++;
                    updateHumanScore();
                    updateResult("You Win! scissors beats paper");
                    break;
        
                case 'scissors':
                    updateResult("Draw! scissors vs scissors");
                    break;
                    
                default:
                    break;
            };    
            break;
            
        default:
            break;
    }
}

function playGame() {

    // for (let i = 0; i < 5; i++) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice(); 

    //     console.log("Round " + (i + 1))
    //     console.log("Human choice: " + humanSelection);
    //     console.log("Computer Choice: " + computerSelection);
    //     console.log(playRound(humanSelection, computerSelection));
    //     console.log("Human Score: " + humanScore);
    //     console.log("Computer Score: " + computerScore);
    // }



    if (humanScore < computerScore) {
        return "You Lost!";
    } else if (humanScore > computerScore) {
        return "You Won!";
    } else {
        return "Draw!";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
    if (humanScore == 5) {
        displayWin();
    }
    if (computerScore == 5) {
        displayLose();
    }
});
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    if (humanScore == 5) {
        displayWin();
    }
    if (computerScore == 5) {
        displayLose();
    }
});
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    if (humanScore == 5) {
        displayWin();
    }
    if (computerScore == 5) {
        displayLose();
    }
})



let humanScore = 0;
let computerScore = 0;
console.log(playGame());

const hScore = document.querySelector(".humanScore");
function updateHumanScore() {
    hScore.textContent = humanScore;
}

const cScore = document.querySelector(".computerScore");
function updateComputerScore() {
    cScore.textContent = computerScore;
}

const result = document.querySelector(".result");
function updateResult(text) {
    result.textContent = text;
}

const gameResult = document.querySelector(".gameResult");
function displayWin() {
    gameResult.textContent = "You won!";
}

function displayLose() {
    gameResult.textContent = "You Lost!";
}







