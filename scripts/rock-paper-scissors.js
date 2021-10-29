//--------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------- FUNCTION DECLARATIONS -----------------------------------------
function getComputerSelection() {   // Gets the computer selection.
    
    // Pick a random number between 0, 1 and 2.
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    let computerSelection;

    // Make an equivalence between each of those numbers and rock, paper or scissors.
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

function getPlayerSelection() { 
    const buttons = document.querySelectorAll('.rps');

    let id;
    let playerSelection;

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            id = button.id;

            if (id === 'rock') {
                playerSelection = 'ROCK';
            } else if (id === 'paper') {
                playerSelection = 'PAPER';
            } else if (id === 'scissors') {
                playerSelection = 'SCISSORS';
            }
        })
    })

    return playerSelection;
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let message; 

    if (playerSelection === computerSelection) {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. It's a tie!`;
        playerScore += 1;
        computerScore += 1;
    
    // Cases where the player chose ROCK.
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
        computerScore += 1;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
        playerScore += 1;
    
    // Cases where the player chose PAPER.
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
        playerScore += 1;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
        computerScore += 1;
    
    // Cases where the player chose SCISSORS.
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
        computerScore += 1;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
        playerScore += 1;
    }

    return [message, playerScore, computerScore];
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- EXECUTION ------------------------------------------------
