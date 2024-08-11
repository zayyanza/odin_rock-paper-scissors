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
                    return "Draw! rock vs rock"            
                    break;
        
                case 'paper':
                    computerScore++;
                    return "You Lose! paper beats rock"
                    break;
        
                case 'scissors':
                    humanScore++;
                    return "You win! rock beats scissors"
                    break;
                    
                default:
                    break;
            };            
            break;

        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    return "You win! paper beats rock"            
                    break;
        
                case 'paper':
                    return "Draw! paper vs paper"
                    break;
        
                case 'scissors':
                    computerScore++;
                    return "You Lose! scissors beats paper"
                    break;
                    
                default:
                    break;
            };    
            break;

        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    computerScore++;
                    return "You Lose! rock beats scissors"            
                    break;
        
                case 'paper':
                    humanScore++;
                    return "You Win! scissors beats paper"
                    break;
        
                case 'scissors':
                    return "Draw! scissors vs scissors"
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

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(); 

        console.log("Round " + (i + 1))
        console.log("Human choice: " + humanSelection);
        console.log("Computer Choice: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    if (humanScore < computerScore) {
        return "You Lost!";
    } else if (humanScore > computerScore) {
        return "You Won!";
    } else {
        return "Draw!";
    }
}

let humanScore = 0;
let computerScore = 0;
console.log(playGame());




