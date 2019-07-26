const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let caseInsensitivePlayerSelection = lowerCasePlayerSelection.replace(lowerCasePlayerSelection[0], lowerCasePlayerSelection[0].toUpperCase());
    if (caseInsensitivePlayerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return "It's a tie! Both players chose rock"
        } else if (computerSelection === 'Paper') {
            return "You lose! Paper covers rock"
        } else if (computerSelection === 'Scissors') {
            return "You win! Rock crushes scissors!"
        }
    } else if (caseInsensitivePlayerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return "You win! Paper covers rock"
        } else if (computerSelection === 'Paper') {
            return "It's a tie! Both players chose paper"
        } else if (computerSelection === 'Scissors') {
            return "You lose! Scissors cuts paper"
        }
    } else if (caseInsensitivePlayerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return "You lose! Rock crushes scissors"
        } else if (computerSelection === 'Paper') {
            return "You win! Scissors cuts paper"
        } else if (computerSelection === 'Scissors') {
            return "It's a tie! Both players chose scissors"
        }
    }
}