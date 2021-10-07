function computerPlay() {
    //Pick a random number between 0, 1 and 2.
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    let computerHand;

    //Make an equivalence between each of those numbers and rock, paper or scissors.
    switch(randomNumber) {
        case 0:
            computerHand = 'Rock';
            break;
        case 1:
            computerHand = 'Paper';
            break;
        case 2: 
            computerHand = 'Scissors';
            break;
    }

    return computerHand;
}

