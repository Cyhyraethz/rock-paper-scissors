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