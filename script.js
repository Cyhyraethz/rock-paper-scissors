const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let caseInsensitivePlayerSelection = lowerCasePlayerSelection.replace(lowerCasePlayerSelection[0], lowerCasePlayerSelection[0].toUpperCase());
    if (caseInsensitivePlayerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            console.log("It's a tie! Both players chose rock")
        } else if (computerSelection === 'Paper') {
            console.log("You lose! Paper covers rock")
            return 0
        } else if (computerSelection === 'Scissors') {
            console.log("You win! Rock crushes scissors!")
            return 1
        }
    } else if (caseInsensitivePlayerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log("You win! Paper covers rock")
            return 1
        } else if (computerSelection === 'Paper') {
            console.log("It's a tie! Both players chose paper")
        } else if (computerSelection === 'Scissors') {
            console.log("You lose! Scissors cuts paper")
            return 0
        }
    } else if (caseInsensitivePlayerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            console.log("You lose! Rock crushes scissors")
            return 0
        } else if (computerSelection === 'Paper') {
            console.log("You win! Scissors cuts paper")
            return 1
        } else if (computerSelection === 'Scissors') {
            console.log("It's a tie! Both players chose scissors")
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter your selection (Rock, Paper, or Scissors)');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else if (result === 1) {
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else {
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won! The final score is ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`You lost! The final score is ${playerScore} to ${computerScore}`)
    } else {
        console.log(`It's a tie! The final score is ${playerScore} to ${computerScore}`)
    }
}

game();