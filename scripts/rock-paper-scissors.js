function numberOfRounds() {
    n = prompt("How many rounds would you like to play?", " ");
    return n;
}

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

function playRound(playerSelection, computerSelection, playerScore = 0, computerScore = 0) {
    let message;
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'ROCK') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
            playerScore++;
            computerScore++;
        } else if (computerSelection === 'PAPER') { 
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
            computerScore++;
        } else if (computerSelection === 'SCISSORS') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
            playerScore++;
        }
        
    }   else if (playerSelection === 'PAPER') {
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
                playerScore++;
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
                playerScore++;
                computerScore++;
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
                computerScore++;
            }
        
    }   else if (playerSelection === 'SCISSORS') {
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
                computerScore++;
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
                playerScore++;
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
                playerScore++;
                computerScore++;
            }
        }

    return message;
}

function playGame(numberOfRounds) {
    i = 0;
    let scoreP = 0;
    let scoreC = 0;
    
    while (i < numberOfRounds) {
        computerChoice = computerPlay();
        playerChoice = playerPlay();
        result = playRound(playerChoice, computerChoice, scoreP, scoreC);
        i += 1;
    }

    return [scoreP, scoreC];
}

function compareScores(scorePlayer, scoreComputer) {
    let finalMessage;
    
    if (scorePlayer > scoreComputer) {
        finalMessage = `Congratulations, you won this game ${scorePlayer} to ${scoreComputer}`;
    } else if (scorePlayer < scoreComputer) {
        finalMessage = `Oh no, you lost ${scorePlayer} to ${scoreComputer} to the computer! Better luck next time!`;
    } else if (scorePlayer === scoreComputer) {
        finalMessage = `It's a tie at ${scorePlayer} to ${scoreComputer}!`;
    }

    return finalMessage;
}


