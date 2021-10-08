function computerPlay() {
    //Pick a random number between 0, 1 and 2.
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    let computerSelection;

    //Make an equivalence between each of those numbers and rock, paper or scissors.
    switch(randomNumber) {
        case 0:
            computerSelection = 'ROCK';
            break;
        case 1:
            computerSelection = 'PAPER';
            break;
        case 2: 
            computerSelection = 'SCISSORS';
            break;
    }

    return computerSelection;
}

function playerPlay() {
    let playerSelection;
    playerSelection = prompt('Choose your hand!', '');
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toUpperCase();
    
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'ROCK') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. It's a tie.`;
        } else if (computerSelection === 'PAPER') { 
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose.`;
        } else if (computerSelection === 'SCISSORS') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`;
        }
        
    }   else if (playerSelection === 'PAPER') {
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`;
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. It's a tie.`;
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose.`;
            }
        
    }   else if (playerSelection === 'SCISSORS') {
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lost.`;
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`;
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. It's a tie.`;
            }
        }

    return message;
}

computerHand = computerPlay();
playerHand = playerPlay();

message = playRound(playerHand, computerHand);

alert(message);



