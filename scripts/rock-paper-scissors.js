//--------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------- FUNCTION DECLARATIONS -----------------------------------------

function numberOfRounds() {  // Prompts the player for amount of rounds to play.
    n = prompt("How many rounds would you like to play?", " ");
    return n;
}

function computerPlay() {   // Gets the computer selection.
    
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

function playerPlay() {  // Gets the player selection.
    let playerSelection;
    playerSelection = prompt('Choose your hand!', '');

    // Added trim to prevent whitespace and converted to upper case to make the choice case insensitive.
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toUpperCase();

    return playerSelection;
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let message;
    if (playerSelection === 'ROCK') { // Comparison cases when player selected ROCK.
        if (computerSelection === 'ROCK') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
            playerScore += 1;
            computerScore += 1;
        
        } else if (computerSelection === 'PAPER') { 
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
            computerScore += 1;
        
        } else if (computerSelection === 'SCISSORS') {
            message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
            playerScore += 1;
        }
        
    
    }   else if (playerSelection === 'PAPER') { // Comparison cases when player selected PAPER.
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
                playerScore += 1;
            
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
                playerScore += 1;
                computerScore += 1;
            
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
                computerScore += 1;
            }
        
    
    }   else if (playerSelection === 'SCISSORS') { // Comparison cases when player selecter SCISSORS.
            if (computerSelection === 'ROCK') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You lose this round.`;
                computerScore += 1;
            
            } else if (computerSelection === 'PAPER') { 
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. You win this round.`;
                playerScore += 1;
            
            } else if (computerSelection === 'SCISSORS') {
                message = `You chose ${playerSelection}. The computer chose ${computerSelection}. This round is tied.`;
                playerScore += 1;
                computerScore += 1;
            }
        }

    return [message, playerScore, computerScore];
}

function playGame(numberOfRounds) {  // Plays a game with the amount of rounds the player entered.
    i = 0;
    
    // Create an empty array for playRound() function to fill.
    let result;
    result = ["string", 0, 0];  

    // A while loop the number of rounds that the player entered.
    while (i < numberOfRounds) {
        playerChoice = playerPlay();
        
        // While block to correct typos and incorrect inputs.
        while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
            alert(`You entered ${playerChoice}. Only ROCK, PAPER and SCISSORS will work. Try again!`)
            playerChoice = playerPlay(); // Runs playerPlay() again so the player can correct the typo.
        }
        
        computerChoice = computerPlay();
        
        result = playRound(playerChoice, computerChoice, result[1], result[2]);
        alert(`${result[0]} Player: ${result[1]}, Computer: ${result[2]}.`)
        i += 1;
    }

    return [result[1], result[2]];
}

function compareScores(scorePlayer, scoreComputer) {
    let finalMessage;
    
    // Compares the final scores and returns a victory, defeat or tie message.
    if (scorePlayer > scoreComputer) {
        finalMessage = `Congratulations, you won this game ${scorePlayer} to ${scoreComputer}!`;
    
    } else if (scorePlayer < scoreComputer) {
        finalMessage = `Oh no, you lost ${scorePlayer} to ${scoreComputer} to the computer! Better luck next time!`;
    
    } else if (scorePlayer === scoreComputer) {
        finalMessage = `It's a tie at ${scorePlayer} to ${scoreComputer}!`;
    }

    return finalMessage;
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- EXECUTION ------------------------------------------------

do {
    let num;
    num = numberOfRounds(); 

    // scoreBoard is an array like this: [player's score, computer's score].
    let scoreBoard;
    scoreBoard = playGame(num);
    
    theFinalMessage = compareScores(scoreBoard[0], scoreBoard[1]);
    alert(theFinalMessage);

} while (confirm("Do you wish to play again?")); 