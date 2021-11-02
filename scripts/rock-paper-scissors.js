//--------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------- FUNCTION DECLARATIONS -----------------------------------------

function numberOfRounds() {  // Prompts the player for amount of rounds to play.
    n = prompt("How many rounds would you like to play?", " ");
    return n;
}

function getComputerSelection() {  
    
    // Pick a random number between 0, 1 and 2.
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    let computerSelection;

    // Make an equivalence between each of those numbers and rock, paper or scissors.
    switch(randomNumber) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2: 
            computerSelection = 'scissors';
            break;
    }

    return computerSelection;
}

function getPlayerSelection(id) {
    if (id === 'rock') {
        playerSelection = 'Rock';
    } else if (id === 'paper') {
        playerSelection = 'Paper';
    } else if (id === 'scissors') {
        playerSelection = 'Scissors';
    }

    return playerSelection;
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let message; 

    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}.`;
    
    // Cases where the player chose ROCK.
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
    
    // Cases where the player chose PAPER.
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
    
    // Cases where the player chose SCISSORS.
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round!`;
    }

    return [message, playerScore, computerScore];
}

function playGame(numberOfRounds) {  // Plays a game with the amount of rounds the player entered.
    i = 0;
    
    // Create an array for playRound() function to fill.
    let result;
    result = ["message", 0, 0];  

    // A while loop to play the number of rounds that the player entered.
    while (i < numberOfRounds) {
        playerChoice = playerPlay();
        
        while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
            alert(`You entered ${playerChoice}. Only ROCK, PAPER and SCISSORS will work. Try again!`)
            playerChoice = playerPlay(); 
        }
        
        computerChoice = computerPlay();
        
        result = playRound(playerChoice, computerChoice, result[1], result[2]);
        alert(`${result[0]} Player: ${result[1]}, Computer: ${result[2]}.`)
        
        i += 1;
    }

    return [result[1], result[2]];
}

function writeVictoryMessage(playerScore, computerScore) {
    let finalMessage;
    
    // Compares the final scores and returns a victory or defeat.
    if (playerScore === 5) {
        finalMessage = `Congratulations, you won this game ${playerScore} to ${computerScore}! Reload to play again!`;
    
    } else if (computerScore === 5) {
        finalMessage = `Oh no, you lost ${playerScore} to ${computerScore}! Better luck next time! Reload to play again!`;
    }
    
    return finalMessage;
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- EXECUTION ------------------------------------------------
const buttons = document.querySelectorAll('.rps');
const message = document.querySelector('.message');
const playAgain = document.querySelector('play-again');
let buttonId;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let finalMessage;

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        playerSelection = button.id; // Gets the player selection from the button id.
        computerSelection = getComputerSelection();
        
        playRoundArray = playRound(playerSelection, computerSelection, 0, 0);
        
        playerScore += playRoundArray[1]; // The playRound function doens't keep the score so I add it here.
        computerScore += playRoundArray[2];
        
        let scoreMessage = ` The score is ${playerScore} - ${computerScore}.`;
        message.textContent = playRoundArray[0] + scoreMessage;

        if (playerScore === 5) {
            message.textContent = `You won ${playerScore} to ${computerScore}! Just keep playing to start again!`;
            playerScore = 0;
            computerScore = 0;
        
        } else if (computerScore === 5) {
            message.textContent = `You lost ${playerScore} to ${computerScore}! Just keep playing to start again!`;
            playerScore = 0;
            computerScore = 0;
        }
    })
})