const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let caseInsensitivePlayerSelection;
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === 'rock' || lowerCasePlayerSelection === 'paper' || lowerCasePlayerSelection === 'scissors') {
        caseInsensitivePlayerSelection = lowerCasePlayerSelection.replace(lowerCasePlayerSelection[0], lowerCasePlayerSelection[0].toUpperCase());
    } else {
        alert('Error. You must enter rock, paper, or scissors.')
    }    
    if (caseInsensitivePlayerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            console.log(`This round is a tie! Both players chose rock.`)
            return 'tie'
        } else if (computerSelection === 'Paper') {
            console.log(`You lost this round! Paper covers rock.`)
            return 'lost'
        } else if (computerSelection === 'Scissors') {
            console.log(`You won this round! Rock crushes scissors.`)
            return 'won'
        }
    } else if (caseInsensitivePlayerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log(`You won this round! Paper covers rock.`)
            return 'won'
        } else if (computerSelection === 'Paper') {
            console.log(`This round is a tie! Both players chose paper.`)
            return 'tie'
        } else if (computerSelection === 'Scissors') {
            console.log(`You lost this round! Scissors cuts paper.`)
            return 'lost'
        }
    } else if (caseInsensitivePlayerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            console.log(`You lost this round! Rock crushes scissors.`)
            return 'lost'
        } else if (computerSelection === 'Paper') {
            console.log(`You won this round! Scissors cuts paper.`)
            return 'won'
        } else if (computerSelection === 'Scissors') {
            console.log(`This round is a tie! Both players chose scissors.`)
            return 'tie'
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5;) {
        let playerSelection = prompt('Please enter rock, paper, or scissors.');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'lost') {
            i++;
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}.`)
        } else if (result === 'won') {
            i++;
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}.`)
        } else if (result === 'tie') {
            i++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}.`)
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won the game! The final score is Player: ${playerScore}, Computer: ${computerScore}.`)
    } else if (computerScore > playerScore) {
        console.log(`You lost the game! The final score is Player: ${playerScore}, Computer: ${computerScore}.`)
    } else {
        console.log(`The game is a tie! The final score is Player: ${playerScore}, Computer: ${computerScore}.`)
    }
}

game();